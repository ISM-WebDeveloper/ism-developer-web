import { existsSync, readFileSync, statSync } from "node:fs";
import { dirname, extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const htmlFiles = [
    "index.html",
    "servicios/index.html",
    "proyectos/index.html",
    "servicios.html",
    "portafolio.html"
];
const indexableFiles = new Set([
    "index.html",
    "servicios/index.html",
    "proyectos/index.html"
]);
const errors = [];
const warnings = [];
const metadata = [];

const read = (relativePath) => readFileSync(join(root, relativePath), "utf8");
const lineNumber = (content, offset) => content.slice(0, offset).split("\n").length;
const getAttribute = (attributes, name) => {
    const match = attributes.match(new RegExp(`\\b${name}\\s*=\\s*(?:\"([^\"]*)\"|'([^']*)')`, "i"));
    return match ? (match[1] ?? match[2] ?? "") : null;
};
const stripTags = (value) => value.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
const report = (collection, file, message) => collection.push(`${file}: ${message}`);

function resolveLocalReference(sourceFile, reference) {
    const cleanReference = reference.split("#")[0].split("?")[0];
    if (!cleanReference) return null;
    if (/^(?:https?:|mailto:|tel:|data:|javascript:)/i.test(cleanReference)) return null;

    const candidate = cleanReference.startsWith("/")
        ? resolve(root, cleanReference.slice(1))
        : resolve(root, dirname(sourceFile), cleanReference);

    if (existsSync(candidate) && statSync(candidate).isDirectory()) {
        return join(candidate, "index.html");
    }
    return candidate;
}

function checkFragment(sourceFile, reference, ids) {
    const hashIndex = reference.indexOf("#");
    if (hashIndex < 0) return;

    const fragment = decodeURIComponent(reference.slice(hashIndex + 1));
    if (!fragment) {
        report(errors, sourceFile, "contiene un enlace con fragmento vacío (#).");
        return;
    }

    const pathPart = reference.slice(0, hashIndex);
    if (!pathPart || pathPart.startsWith("?")) {
        if (!ids.has(fragment)) {
            report(errors, sourceFile, `el fragmento #${fragment} no existe en la página.`);
        }
        return;
    }

    const targetPath = resolveLocalReference(sourceFile, pathPart);
    if (!targetPath || !existsSync(targetPath) || extname(targetPath).toLowerCase() !== ".html") return;
    const targetContent = readFileSync(targetPath, "utf8");
    const targetIds = new Set(
        [...targetContent.matchAll(/\sid\s*=\s*(?:"([^"]+)"|'([^']+)')/gi)]
            .map((match) => match[1] ?? match[2])
    );
    if (!targetIds.has(fragment)) {
        report(errors, sourceFile, `el destino ${reference} no contiene el id "${fragment}".`);
    }
}

for (const file of htmlFiles) {
    const content = read(file);
    const ids = new Set();
    const duplicateIds = new Set();

    for (const match of content.matchAll(/\sid\s*=\s*(?:"([^"]+)"|'([^']+)')/gi)) {
        const id = match[1] ?? match[2];
        if (ids.has(id)) duplicateIds.add(id);
        ids.add(id);
    }
    duplicateIds.forEach((id) => report(errors, file, `id duplicado "${id}".`));

    const h1Count = (content.match(/<h1\b/gi) || []).length;
    if (h1Count !== 1) report(errors, file, `debe tener exactamente un H1; se encontraron ${h1Count}.`);

    const headingLevels = [...content.matchAll(/<h([1-6])\b/gi)].map((match) => Number(match[1]));
    headingLevels.forEach((level, index) => {
        if (index > 0 && level - headingLevels[index - 1] > 1) {
            report(errors, file, `salto de encabezado H${headingLevels[index - 1]} a H${level}.`);
        }
    });

    const title = content.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() || "";
    const description = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i)?.[1]
        || content.match(/<meta\s+content=["']([^"']+)["']\s+name=["']description["']/i)?.[1]
        || "";
    const canonical = content.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i)?.[1]
        || content.match(/<link\s+href=["']([^"']+)["']\s+rel=["']canonical["']/i)?.[1]
        || "";
    metadata.push({ file, title, description, canonical });

    if (indexableFiles.has(file)) {
        if (!title) report(errors, file, "falta title.");
        if (!description) report(errors, file, "falta meta description.");
        if (!canonical) report(errors, file, "falta canonical.");
        for (const property of ["og:title", "og:description", "og:image", "og:url"]) {
            if (!new RegExp(`<meta\\s+property=[\"']${property}[\"']`, "i").test(content)) {
                report(errors, file, `falta ${property}.`);
            }
        }
    }

    for (const match of content.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
        const attributes = match[1];
        const type = getAttribute(attributes, "type");
        const src = getAttribute(attributes, "src");
        if (type === "application/ld+json") {
            try {
                JSON.parse(match[2]);
            } catch (error) {
                report(errors, file, `JSON-LD inválido: ${error.message}`);
            }
        }
        if (src && !/\bdefer\b/i.test(attributes) && !/\basync\b/i.test(attributes)) {
            report(warnings, file, `el script ${src} no usa defer ni async.`);
        }
    }

    const linkedResources = [];
    for (const match of content.matchAll(/<(a|link|script|img)\b([^>]*)>/gi)) {
        const tag = match[1].toLowerCase();
        const attributes = match[2];
        const attributeName = tag === "a" || tag === "link" ? "href" : "src";
        const reference = getAttribute(attributes, attributeName);
        if (reference === null) continue;

        if (!reference.trim() || reference.trim() === "#") {
            report(errors, file, `línea ${lineNumber(content, match.index)}: ${tag} tiene ${attributeName} vacío.`);
            continue;
        }

        const isLoadedStylesheet = tag === "link" && getAttribute(attributes, "rel") === "stylesheet";
        if (tag === "script" || isLoadedStylesheet) {
            linkedResources.push(`${tag}:${reference}`);
        }
        const localTarget = resolveLocalReference(file, reference);
        if (localTarget && !existsSync(localTarget)) {
            report(errors, file, `no existe el recurso local ${reference}.`);
        }
        if (tag === "a") checkFragment(file, reference, ids);

        if (tag === "img") {
            if (getAttribute(attributes, "alt") === null) {
                report(errors, file, `línea ${lineNumber(content, match.index)}: imagen sin alt.`);
            }
            if (getAttribute(attributes, "width") === null || getAttribute(attributes, "height") === null) {
                report(errors, file, `línea ${lineNumber(content, match.index)}: imagen sin width/height.`);
            }
        }
    }

    const resourceDuplicates = linkedResources.filter((resource, index) => linkedResources.indexOf(resource) !== index);
    if (resourceDuplicates.length) {
        report(warnings, file, `recursos repetidos: ${[...new Set(resourceDuplicates)].join(", ")}.`);
    }

    for (const match of content.matchAll(/<button\b([^>]*)>([\s\S]*?)<\/button>/gi)) {
        const attributes = match[1];
        const text = stripTags(match[2]);
        if (!text && !getAttribute(attributes, "aria-label") && !getAttribute(attributes, "title")) {
            report(errors, file, `línea ${lineNumber(content, match.index)}: botón sin nombre accesible.`);
        }
    }

    for (const match of content.matchAll(/<(input|select|textarea)\b([^>]*)>/gi)) {
        const tag = match[1].toLowerCase();
        const attributes = match[2];
        if (tag === "input" && getAttribute(attributes, "type") === "hidden") continue;
        const id = getAttribute(attributes, "id");
        const hasLabel = id && new RegExp(`<label\\b[^>]*\\bfor=[\"']${id}[\"']`, "i").test(content);
        const hasAria = getAttribute(attributes, "aria-label") || getAttribute(attributes, "aria-labelledby");
        if (!hasLabel && !hasAria) {
            report(errors, file, `línea ${lineNumber(content, match.index)}: ${tag} sin label accesible.`);
        }
    }

    if (/[ÃÂ�]/.test(content)) {
        report(errors, file, "contiene caracteres que sugieren un problema de codificación.");
    }
}

for (const field of ["title", "description", "canonical"]) {
    const values = new Map();
    metadata.filter(({ file }) => indexableFiles.has(file)).forEach((entry) => {
        const value = entry[field];
        if (!value) return;
        if (values.has(value)) {
            report(errors, entry.file, `${field} duplica el valor de ${values.get(value)}.`);
        } else {
            values.set(value, entry.file);
        }
    });
}

for (const cssFile of ["assets/css/style.css", "assets/css/catalogo.css"]) {
    const content = read(cssFile);
    const opening = (content.match(/{/g) || []).length;
    const closing = (content.match(/}/g) || []).length;
    if (opening !== closing) report(errors, cssFile, `llaves desbalanceadas (${opening}/${closing}).`);

    for (const match of content.matchAll(/url\((?:\"([^\"]+)\"|'([^']+)'|([^)]+))\)/gi)) {
        const reference = (match[1] ?? match[2] ?? match[3] ?? "").trim();
        const target = resolveLocalReference(cssFile, reference);
        if (target && !existsSync(target)) report(errors, cssFile, `no existe ${reference}.`);
    }
}

const allText = [
    ...htmlFiles.map(read),
    read("assets/js/script.js")
].join("\n");
for (const requiredType of ["ProfessionalService", "Service", "Person", "FAQPage"]) {
    if (!allText.includes(`"${requiredType}"`)) {
        report(errors, "datos estructurados", `falta el tipo ${requiredType}.`);
    }
}

const sitemap = read("sitemap.xml");
for (const cleanUrl of [
    "https://www.ismdeveloper.cl/",
    "https://www.ismdeveloper.cl/servicios/",
    "https://www.ismdeveloper.cl/proyectos/"
]) {
    if (!sitemap.includes(`<loc>${cleanUrl}</loc>`)) {
        report(errors, "sitemap.xml", `falta ${cleanUrl}.`);
    }
}
if (/portafolio\.html|servicios\.html/.test(sitemap)) {
    report(errors, "sitemap.xml", "incluye URLs antiguas no canónicas.");
}

const robots = read("robots.txt");
if (!robots.includes("Sitemap: https://www.ismdeveloper.cl/sitemap.xml")) {
    report(errors, "robots.txt", "no declara el sitemap canónico.");
}

warnings.forEach((warning) => console.warn(`ADVERTENCIA ${warning}`));
errors.forEach((error) => console.error(`ERROR ${error}`));

if (errors.length) {
    console.error(`\nValidación fallida: ${errors.length} error(es), ${warnings.length} advertencia(s).`);
    process.exitCode = 1;
} else {
    console.log(`Validación correcta: ${htmlFiles.length} páginas, 0 errores, ${warnings.length} advertencia(s).`);
}
