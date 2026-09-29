Copiar el contenido de esta carpeta sobre la raíz de ISM-PROYECT y reemplazar.

Archivo modificado:
  scripts/ops-restore-local.mjs

No crear migración.
No ejecutar db push.

Luego repetir únicamente:
  npm run ops:restore:local -- ".\backups\ism-proyect-local-20260924T153701Z" --confirm-local-restore
