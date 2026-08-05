import { existsSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const notices = [];
const read = (path) => readFileSync(join(root, path), "utf8");
const fail = (message) => errors.push(message);
const note = (message) => notices.push(message);

const pages = ["index.html", "portafolio.html", "privacidad.html", "configurador/index.html"]
    .filter((path) => existsSync(join(root, path)));

for (const page of pages) {
    const html = read(page);

    if (!/<meta\s+name=["']viewport["'][^>]*content=["'][^"']*width=device-width/i.test(html)) {
        fail(`${page} no declara un viewport adaptable.`);
    }

    if (/legacy-ie\.css|compatibility\.css|browser-compat\.js/i.test(html)) {
        fail(`${page} todavía referencia una capa de compatibilidad invasiva o legado IE.`);
    }

    if (/<!--[\s\S]*?\[if\s+IE[\s\S]*?<!\[endif\][\s\S]*?-->/i.test(html)) {
        fail(`${page} contiene comentarios condicionales para Internet Explorer.`);
    }
}

const jsPaths = [
    "assets/js/privacy-consent.js",
    "assets/js/analytics.js",
    "assets/js/reveal-compat.js",
    "assets/js/script.js",
    "assets/js/accessibility.js",
    "assets/js/portfolio-accessibility.js"
].filter((path) => existsSync(join(root, path)));

const legacyTokens = ["ActiveXObject", "attachEvent(", "document.all", "MSInputMethodContext"];
for (const path of jsPaths) {
    const source = read(path);
    for (const token of legacyTokens) {
        if (source.includes(token)) fail(`${path} contiene una dependencia de navegador legado: ${token}`);
    }
}

const mainScript = read("assets/js/script.js");
if (!mainScript.includes('typeof configuratorDialog.showModal !== "function"')) {
    fail("El diálogo de Servicios no conserva el respaldo cuando showModal no está disponible.");
}
if (!mainScript.includes("window.confirm(")) {
    fail("El diálogo de Servicios no contiene confirmación nativa de respaldo.");
}

const reveal = read("assets/js/reveal-compat.js");
if (reveal.includes("new IntersectionObserver") || reveal.includes("IntersectionObserver(")) {
    fail("El motor de aparición vuelve a depender de IntersectionObserver.");
}
if (!reveal.includes("window.requestAnimationFrame || function")) {
    fail("El motor de aparición no contiene respaldo para requestAnimationFrame.");
}
if (!reveal.includes("window.matchMedia &&")) {
    fail("El motor de aparición no protege el uso de matchMedia.");
}
if (!reveal.includes('document.addEventListener("DOMContentLoaded"')) {
    fail("El motor de aparición no espera correctamente la carga del DOM.");
}

const cssPaths = [
    "assets/css/style.css",
    "assets/css/portafolio.css",
    "assets/css/privacy-consent.css",
    "assets/css/privacy-policy.css",
    "assets/css/accessibility.css",
    "assets/css/configurador-placeholder.css"
].filter((path) => existsSync(join(root, path)));

const css = cssPaths.map(read).join("\n");
const featureCounts = {
    "color-mix()": (css.match(/color-mix\(/g) || []).length,
    "backdrop-filter": (css.match(/backdrop-filter\s*:/g) || []).length,
    "unidades svh": (css.match(/\d+(?:\.\d+)?svh/g) || []).length
};
for (const [feature, count] of Object.entries(featureCounts)) {
    if (count) note(`${feature}: ${count} uso(s); requiere comprobación visual real, pero es válido en navegadores modernos objetivo.`);
}

notices.forEach((message) => console.log(`AVISO ${message}`));
errors.forEach((message) => console.error(`ERROR ${message}`));

if (errors.length) {
    console.error(`\nAuditoría de compatibilidad fallida: ${errors.length} error(es).`);
    process.exitCode = 1;
} else {
    console.log("\nAuditoría estática de compatibilidad moderna aprobada.");
    console.log(`Páginas revisadas: ${pages.length}`);
    console.log("Objetivo: versiones actuales de Edge, Chrome, Firefox y Safari; Android Chrome y Safari iOS.");
    console.log("Esta auditoría no reemplaza la matriz visual en navegadores y dispositivos reales.");
}
