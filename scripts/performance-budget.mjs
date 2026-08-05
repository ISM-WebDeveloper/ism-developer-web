import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const entry = path.join(root, "index.html");

const limits = {
    html: 110 * 1024,
    css: 160 * 1024,
    js: 90 * 1024,
    images: 600 * 1024,
    total: 850 * 1024,
};

const html = fs.readFileSync(entry, "utf8");
const refs = new Set();
const external = new Set();

function collect(pattern) {
    for (const match of html.matchAll(pattern)) {
        const value = match[1]?.trim();
        if (!value || value.startsWith("data:") || value.startsWith("#")) continue;
        if (/^(https?:)?\/\//i.test(value)) {
            external.add(value);
            continue;
        }
        refs.add(value.split("?")[0]);
    }
}

collect(/<(?:img|script)[^>]+(?:src)=["']([^"']+)["']/gi);
collect(/<link[^>]+href=["']([^"']+)["']/gi);

// Incluye recursos referenciados desde la hoja principal, por ejemplo imágenes de fondo.
const cssRef = [...refs].find((ref) => ref.endsWith("assets/css/style.css"));
if (cssRef) {
    const cssPath = path.join(root, cssRef);
    const css = fs.readFileSync(cssPath, "utf8");
    for (const match of css.matchAll(/url\((?:["'])?([^"')]+)(?:["'])?\)/gi)) {
        const raw = match[1]?.trim();
        if (!raw || raw.startsWith("data:") || /^(https?:)?\/\//i.test(raw)) continue;
        const resolved = path.normalize(path.join(path.dirname(cssRef), raw));
        refs.add(resolved);
    }
}

const totals = { html: fs.statSync(entry).size, css: 0, js: 0, images: 0, other: 0 };
const missing = [];
const assets = [];

for (const ref of refs) {
    const filePath = path.join(root, ref);
    if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
        missing.push(ref);
        continue;
    }
    const bytes = fs.statSync(filePath).size;
    const ext = path.extname(ref).toLowerCase();
    let group = "other";
    if (ext === ".css") group = "css";
    else if ([".js", ".mjs"].includes(ext)) group = "js";
    else if ([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif", ".svg"].includes(ext)) group = "images";
    totals[group] += bytes;
    assets.push({ ref, bytes, group });
}

const total = Object.values(totals).reduce((sum, value) => sum + value, 0);
const failures = [];
for (const key of ["html", "css", "js", "images"]) {
    if (totals[key] > limits[key]) failures.push(`${key}: ${totals[key]} > ${limits[key]} bytes`);
}
if (total > limits.total) failures.push(`total: ${total} > ${limits.total} bytes`);
if (missing.length) failures.push(`recursos faltantes: ${missing.join(", ")}`);

const kb = (bytes) => `${(bytes / 1024).toFixed(1)} KB`;
console.log("\nPresupuesto de rendimiento · index.html");
console.log(`HTML:     ${kb(totals.html)} / ${kb(limits.html)}`);
console.log(`CSS:      ${kb(totals.css)} / ${kb(limits.css)}`);
console.log(`JS:       ${kb(totals.js)} / ${kb(limits.js)}`);
console.log(`Imágenes: ${kb(totals.images)} / ${kb(limits.images)}`);
console.log(`Otros:    ${kb(totals.other)}`);
console.log(`TOTAL:    ${kb(total)} / ${kb(limits.total)}`);
console.log(`Recursos locales únicos: ${assets.length}`);
console.log(`Recursos externos diferidos/de terceros: ${external.size}`);

const heaviest = assets.sort((a, b) => b.bytes - a.bytes).slice(0, 8);
console.log("\nRecursos locales más pesados:");
for (const asset of heaviest) console.log(`- ${kb(asset.bytes).padStart(9)} · ${asset.ref}`);

if (failures.length) {
    console.error("\nPresupuesto excedido:");
    for (const failure of failures) console.error(`- ${failure}`);
    process.exitCode = 1;
} else {
    console.log("\nPresupuesto aprobado.");
}
