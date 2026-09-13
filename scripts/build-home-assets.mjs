import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { minify } from "../apps/configurador-servicios/node_modules/rolldown/dist/utils-index.mjs";

// Reuse the configurator's locked toolchain; install it with npm run configurator:install.
const require = createRequire(import.meta.url);
const { transform } = require("../apps/configurador-servicios/node_modules/lightningcss");
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const check = process.argv.includes("--check");
const css = ["style", "premium-motion", "privacy-consent", "accessibility"];
const js = ["script", "reveal-compat", "privacy-consent", "analytics", "accessibility"];
let count = 0;

function output(relative, data) {
    const destination = path.join(root, relative);
    const bytes = Buffer.from(data);
    if (check) {
        if (!fs.existsSync(destination) || !fs.readFileSync(destination).equals(bytes)) {
            throw new Error(relative + " is missing or stale. Run npm run build:assets.");
        }
    } else {
        fs.writeFileSync(destination, bytes);
    }
    count++;
}

for (const name of css) {
    const relative = "assets/css/" + name + ".css";
    const result = transform({
        filename: relative,
        code: fs.readFileSync(path.join(root, relative)),
        minify: true,
        targets: { chrome: 109 << 16, firefox: 115 << 16, safari: 16 << 16 },
        errorRecovery: false,
    });
    if (result.warnings.length) throw new Error(JSON.stringify(result.warnings));
    output("assets/css/" + name + ".min.css", result.code);
}
for (const name of js) {
    const relative = "assets/js/" + name + ".js";
    const result = await minify(relative, fs.readFileSync(path.join(root, relative), "utf8"), {
        // Preserve expressions/control flow and top-level identifiers in classic scripts.
        compress: false,
        mangle: { toplevel: false },
    });
    if (result.errors.length) throw new Error(JSON.stringify(result.errors));
    output("assets/js/" + name + ".min.js", result.code);
}

let html = fs.readFileSync(path.join(root, "src/index.home.html"), "utf8");
for (const name of css) {
    html = html.replace(
        new RegExp(`assets/css/${name}\\.css\\?v=[^" ]+`, "g"),
        `assets/css/${name}.min.css?v=3.0.27`,
    );
}
for (const name of js) {
    html = html.replace(
        new RegExp(`assets/js/${name}\\.js\\?v=[^" ]+`, "g"),
        `assets/js/${name}.min.js?v=3.0.27`,
    );
}
html = html.replace(
    'rel="shortcut icon" href="/ism-favicon-v4.ico"',
    'rel="shortcut icon" type="image/png" href="/assets/img/ism-favicon-v4-32.png"',
);

// Only remove leading indentation outside whitespace-sensitive elements.
let sensitive = false;
html = html.split("\n").map((line) => {
    if (/<(?:script|pre|textarea|style)\b/i.test(line)) sensitive = true;
    const result = sensitive ? line : line.trimStart();
    if (/<\/(?:script|pre|textarea|style)>/i.test(line)) sensitive = false;
    return result;
}).join("\n");
output("index.html", html);

console.log((check ? "Verified " : "Generated ") + count + " deterministic home assets.");
