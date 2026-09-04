import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join, relative } from "node:path";

const root = process.cwd();
const errors = [];
const textExtensions = new Set([
    ".html", ".css", ".js", ".mjs", ".json", ".xml", ".md",
    ".txt", ".ts", ".tsx", ".svg", ".yml", ".yaml"
]);
const ignoredDirectories = new Set([".git", "node_modules"]);
const forbiddenPublicTerms = [
    "Suiz Corp",
    "SuizCorp",
    "Hospital Félix Bulnes",
    "Hospital Felix Bulnes",
    "HFBApp",
    "CIPApp"
];

function walk(directory) {
    const output = [];
    for (const name of readdirSync(directory)) {
        const full = join(directory, name);
        const rel = relative(root, full).replaceAll("\\", "/");
        const stat = statSync(full);
        if (stat.isDirectory()) {
            if (ignoredDirectories.has(name)) continue;
            output.push(...walk(full));
        } else {
            output.push({ full, rel });
        }
    }
    return output;
}

const files = walk(root);

for (const { rel } of files) {
    if (/^ISMDeveloper_PATCH_.*\.zip$/i.test(rel)) errors.push(`artefacto temporal dentro del proyecto: ${rel}`);
    if (/^LEEME\.txt$/i.test(rel)) errors.push(`guía temporal dentro del proyecto: ${rel}`);
}

for (const { full, rel } of files) {
    if (!textExtensions.has(extname(rel).toLowerCase())) continue;
    const data = readFileSync(full);
    if (data.includes(Buffer.from("\r\n"))) errors.push(`CRLF detectado; se espera LF: ${rel}`);
}

for (const { full, rel } of files) {
    if (rel === "scripts/final-qa.mjs") continue;
    if (!/\.(?:html|js|mjs|css|xml)$/i.test(rel)) continue;
    const content = readFileSync(full, "utf8");
    for (const term of forbiddenPublicTerms) {
        if (content.toLowerCase().includes(term.toLowerCase())) {
            errors.push(`referencia pública antigua "${term}" en ${rel}`);
        }
    }
}

for (const { full, rel } of files) {
    if (!/^soluciones\/.*\.html$/i.test(rel)) continue;
    const content = readFileSync(full, "utf8");
    const inlineScripts = [...content.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)]
        .filter((match) => !/\bsrc\s*=/i.test(match[1]))
        .filter((match) => !/\btype\s*=\s*["']application\/ld\+json["']/i.test(match[1]))
        .filter((match) => match[2].trim());
    if (inlineScripts.length) errors.push(`JavaScript inline incompatible con CSP en ${rel}`);
}

for (const required of [
    ".gitattributes",
    ".editorconfig",
    "404.html",
    "robots.txt",
    "sitemap.xml",
    "soluciones/index.html",
    "soluciones/ism-presencia-digital/index.html",
    "soluciones/ism-stock-control/index.html",
    "soluciones/ism-gestion-control/index.html",
    "soluciones/ism-boutique/index.html"
]) {
    if (!existsSync(join(root, required))) errors.push(`falta archivo requerido: ${required}`);
}

const robots = readFileSync(join(root, "robots.txt"), "utf8");
if (!robots.includes("https://www.ismdeveloper.cl/sitemap.xml")) {
    errors.push("robots.txt no declara el sitemap oficial");
}

if (errors.length) {
    console.error("\nQA final fallida:");
    errors.forEach((item) => console.error(`- ${item}`));
    process.exit(1);
}

console.log(`QA final correcta: ${files.length} archivos revisados, 0 errores.`);
