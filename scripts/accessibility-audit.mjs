import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const pages = [
  { file: 'index.html', skip: true },
  { file: 'portafolio.html', skip: true },
  { file: 'privacidad.html', skip: true },
  { file: 'configurador/index.html', skip: true },
  { file: 'guia-web/index.html', skip: true },
  { file: 'servicios.html', skip: false, redirect: true }
];

const errors = [];
const warnings = [];

const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const stripTags = (value) => value
  .replace(/<script[\s\S]*?<\/script>/gi, '')
  .replace(/<style[\s\S]*?<\/style>/gi, '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&nbsp;/g, ' ')
  .replace(/&[a-z0-9#]+;/gi, ' ')
  .replace(/\s+/g, ' ')
  .trim();

for (const page of pages) {
  const fullPath = path.join(root, page.file);
  if (!fs.existsSync(fullPath)) {
    errors.push(`${page.file}: archivo no encontrado.`);
    continue;
  }

  const html = read(page.file);
  const ids = [...html.matchAll(/(?:\s|<)id\s*=\s*["']([^"']+)["']/gi)].map((match) => match[1]);
  const idSet = new Set(ids);
  const duplicates = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];

  if (!/<html\b[^>]*\blang\s*=\s*["']es(?:-[A-Za-z]{2,})?["']/i.test(html)) {
    errors.push(`${page.file}: falta lang="es" en el elemento html.`);
  }

  if (!/<meta\b[^>]*name\s*=\s*["']viewport["']/i.test(html)) {
    errors.push(`${page.file}: falta meta viewport.`);
  }

  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (!title || !stripTags(title[1])) errors.push(`${page.file}: título de página vacío.`);

  if (!/<main\b/i.test(html)) errors.push(`${page.file}: falta el landmark main.`);

  const h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)];
  if (h1s.length !== 1) {
    errors.push(`${page.file}: se esperaba exactamente un H1 y se encontraron ${h1s.length}.`);
  } else if (!stripTags(h1s[0][1])) {
    errors.push(`${page.file}: el H1 está vacío.`);
  }

  if (page.skip && !/<a\b[^>]*class\s*=\s*["'][^"']*skip-link[^"']*["'][^>]*href\s*=\s*["']#[^"']+["']/i.test(html)) {
    errors.push(`${page.file}: falta enlace de salto al contenido principal.`);
  }

  if (page.skip && !/accessibility\.css\?v=/i.test(html)) {
    errors.push(`${page.file}: no carga la capa CSS de accesibilidad.`);
  }

  if (duplicates.length) {
    errors.push(`${page.file}: IDs duplicados: ${duplicates.join(', ')}.`);
  }

  for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\balt\s*=\s*["'][^"']*["']/i.test(match[0])) {
      errors.push(`${page.file}: imagen sin atributo alt: ${match[0].slice(0, 120)}…`);
    }
  }

  for (const match of html.matchAll(/<button\b([^>]*)>([\s\S]*?)<\/button>/gi)) {
    const attrs = match[1];
    const text = stripTags(match[2]);
    const hasName = /\baria-label\s*=\s*["'][^"']+["']/i.test(attrs)
      || /\baria-labelledby\s*=\s*["'][^"']+["']/i.test(attrs)
      || /\btitle\s*=\s*["'][^"']+["']/i.test(attrs)
      || Boolean(text);
    if (!hasName) errors.push(`${page.file}: botón sin nombre accesible.`);
  }

  for (const match of html.matchAll(/<a\b([^>]*)>/gi)) {
    const attrs = match[1];
    if (/\btarget\s*=\s*["']_blank["']/i.test(attrs)) {
      const rel = attrs.match(/\brel\s*=\s*["']([^"']*)["']/i)?.[1] || '';
      if (!/noopener/i.test(rel)) errors.push(`${page.file}: enlace target="_blank" sin rel="noopener".`);
    }
  }

  for (const match of html.matchAll(/\btabindex\s*=\s*["']([^"']+)["']/gi)) {
    const value = Number(match[1]);
    if (Number.isFinite(value) && value > 0) errors.push(`${page.file}: tabindex positivo (${value}) no permitido.`);
  }

  const labels = new Set([...html.matchAll(/<label\b[^>]*for\s*=\s*["']([^"']+)["']/gi)].map((match) => match[1]));
  for (const match of html.matchAll(/<(input|select|textarea)\b([^>]*)>/gi)) {
    const tag = match[1].toLowerCase();
    const attrs = match[2];
    if (tag === 'input' && /\btype\s*=\s*["']hidden["']/i.test(attrs)) continue;
    const id = attrs.match(/(?:^|\s)id\s*=\s*["']([^"']+)["']/i)?.[1];
    const named = /\baria-label\s*=\s*["'][^"']+["']/i.test(attrs)
      || /\baria-labelledby\s*=\s*["'][^"']+["']/i.test(attrs)
      || (id && labels.has(id));
    if (!named) errors.push(`${page.file}: control ${tag}${id ? `#${id}` : ''} sin etiqueta accesible.`);
  }

  for (const match of html.matchAll(/\baria-controls\s*=\s*["']([^"']+)["']/gi)) {
    for (const targetId of match[1].trim().split(/\s+/)) {
      if (!idSet.has(targetId)) errors.push(`${page.file}: aria-controls apunta a #${targetId}, que no existe.`);
    }
  }

  for (const match of html.matchAll(/<dialog\b([^>]*)>/gi)) {
    const attrs = match[1];
    if (!/\baria-label(?:ledby)?\s*=\s*["'][^"']+["']/i.test(attrs)) {
      errors.push(`${page.file}: dialog sin aria-label o aria-labelledby.`);
    }
  }

  if (/href\s*=\s*["']#["']/i.test(html)) warnings.push(`${page.file}: contiene href="#" genérico.`);
}

const requiredFiles = [
  'assets/css/accessibility.css',
  'assets/js/accessibility.js',
  'assets/js/portfolio-accessibility.js'
];
for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(root, file))) errors.push(`Falta el archivo ${file}.`);
}

const indexHtml = read('index.html');
if (!/id="contactFormStatus"[^>]*role="status"[^>]*aria-live="polite"/i.test(indexHtml)) {
  errors.push('index.html: falta región viva para el estado del formulario.');
}
if (!/id="serviceConfiguratorDialog"[\s\S]*?aria-modal="true"/i.test(indexHtml)) {
  errors.push('index.html: el diálogo de servicios no declara aria-modal="true".');
}
if (!/role="tablist"/i.test(indexHtml) || !/role="tabpanel"/i.test(indexHtml)) {
  errors.push('index.html: el selector de proyectos no expone patrón tablist/tabpanel.');
}

const portfolioHtml = read('portafolio.html');
if (!/id="portfolioSlideStatus"[^>]*role="status"/i.test(portfolioHtml)) {
  errors.push('portafolio.html: falta región viva del carrusel.');
}
if (!/id="sidebarToggle"[^>]*aria-controls="projectSidebar"/i.test(portfolioHtml)) {
  errors.push('portafolio.html: el botón del sidebar no declara aria-controls.');
}

if (errors.length) {
  console.error('\nAuditoría de accesibilidad: FALLÓ\n');
  errors.forEach((error) => console.error(`ERROR ${error}`));
  warnings.forEach((warning) => console.warn(`AVISO ${warning}`));
  process.exit(1);
}

console.log('\nAuditoría estática de accesibilidad aprobada.');
console.log(`Páginas revisadas: ${pages.length}`);
console.log('Controles: landmarks, H1, skip links, alt, nombres accesibles, labels, IDs, aria-controls, dialogs y enlaces externos.');
if (warnings.length) warnings.forEach((warning) => console.warn(`AVISO ${warning}`));
