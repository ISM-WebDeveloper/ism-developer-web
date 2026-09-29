import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import {
  getLocalSupabaseAdmin,
  readProjectId,
  root,
  runCommand,
  runCommandInput,
  sha256,
} from './ops-backup-common.mjs';

const args = process.argv.slice(2);
const backupArg = args.find((value) => !value.startsWith('--'));
const confirmed = args.includes('--confirm-local-restore');
if (!backupArg || !confirmed) {
  console.error('Restauración LOCAL destructiva.');
  console.error('Uso: npm run ops:restore:local -- "backups/ism-proyect-local-..." --confirm-local-restore');
  process.exit(1);
}
if (args.includes('--linked')) {
  console.error('ABORTADO: esta herramienta nunca restaura un proyecto linked/remoto.');
  process.exit(1);
}

const backupRoot = path.resolve(root, backupArg);
const manifestPath = path.join(backupRoot, 'manifest.json');
if (!existsSync(manifestPath)) throw new Error('Backup inválido: falta manifest.json');
const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
if (manifest.format !== 'ism-proyect-backup-v1' || manifest.target !== 'local') {
  throw new Error('Backup no compatible con restauración local ISM-PROYECT');
}

for (const file of manifest.files ?? []) {
  const filePath = path.join(backupRoot, file.path);
  if (!existsSync(filePath) || sha256(filePath) !== file.sha256) {
    throw new Error(`Integridad inválida: ${file.path}`);
  }
}

const projectId = readProjectId();
const dbContainer = `supabase_db_${projectId}`;
const authData = readFileSync(path.join(backupRoot, manifest.database.auth_data));
const publicData = readFileSync(path.join(backupRoot, manifest.database.public_data));
const wrapSql = (buffer) => Buffer.concat([
  Buffer.from('BEGIN;\nSET session_replication_role = replica;\n', 'utf8'),
  buffer,
  Buffer.from('\nCOMMIT;\n', 'utf8'),
]);

console.log('ISM-PROYECT · Restauración LOCAL 4A.13.2');
console.log('ATENCIÓN: se destruirán los datos de la base LOCAL actual. Producción no será tocada.\n');

console.log('[1/5] Reconstruyendo schema desde migraciones, sin seed...');
runCommand('supabase', ['db', 'reset', '--local', '--no-seed']);

console.log('[2/5] Preparando tablas public para restaurar el snapshot completo...');
const truncatePublicSql = Buffer.from(`
DO $$
DECLARE
  tables_to_truncate text;
BEGIN
  SELECT string_agg(format('%I.%I', schemaname, tablename), ', ' ORDER BY tablename)
    INTO tables_to_truncate
  FROM pg_tables
  WHERE schemaname = 'public';

  IF tables_to_truncate IS NOT NULL THEN
    EXECUTE 'TRUNCATE TABLE ' || tables_to_truncate || ' RESTART IDENTITY CASCADE';
  END IF;
END
$$;
`, 'utf8');
runCommandInput('docker', ['exec', '-i', dbContainer, 'psql', '-v', 'ON_ERROR_STOP=1', '-U', 'postgres', '-d', 'postgres'], truncatePublicSql);

console.log('[3/5] Restaurando Auth (users + identities)...');
runCommandInput('docker', ['exec', '-i', dbContainer, 'psql', '-v', 'ON_ERROR_STOP=1', '-U', 'postgres', '-d', 'postgres'], wrapSql(authData));

console.log('[4/5] Restaurando snapshot completo de datos public...');
runCommandInput('docker', ['exec', '-i', dbContainer, 'psql', '-v', 'ON_ERROR_STOP=1', '-U', 'postgres', '-d', 'postgres'], wrapSql(publicData));

console.log('[5/5] Restaurando Storage mediante API local...');
const { client } = getLocalSupabaseAdmin();
for (const item of manifest.storage ?? []) {
  const objects = Array.isArray(item.objects) ? item.objects : [];
  if (objects.length === 0) {
    console.log(`  - ${item.bucket}: vacío, sin objetos que restaurar`);
    continue;
  }

  for (const object of objects) {
    const filePath = path.join(backupRoot, object.file);
    if (!existsSync(filePath)) throw new Error(`Falta archivo Storage: ${object.file}`);
    const fileData = readFileSync(filePath);
    const { error } = await client.storage.from(item.bucket).upload(object.name, fileData, {
      upsert: true,
      ...(object.content_type ? { contentType: object.content_type } : {}),
    });
    if (error) throw new Error(`No se pudo restaurar Storage ${item.bucket}/${object.name}: ${error.message}`);
  }
  console.log(`  - ${item.bucket}: ${objects.length} objeto(s) restaurados`);
}

console.log('\nRestauración local terminada.');
console.log('Validar ahora: npm run ops:health && supabase test db');
