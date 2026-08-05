import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const notices = [];

const read = (path) => readFileSync(join(root, path), "utf8");
const fail = (message) => errors.push(message);
const pass = (message) => notices.push(message);

for (const path of [
    "vercel.json",
    "privacidad.html",
    "assets/js/privacy-consent.js",
    "assets/css/privacy-consent.css"
]) {
    if (!existsSync(join(root, path))) fail(`Falta ${path}.`);
}

const vercel = JSON.parse(read("vercel.json"));
const globalRule = vercel.headers?.find((rule) => rule.source === "/(.*)");
if (!globalRule) {
    fail("vercel.json no contiene una regla global de encabezados.");
} else {
    const headers = new Map(globalRule.headers.map(({ key, value }) => [key.toLowerCase(), value]));
    const requiredHeaders = [
        "content-security-policy",
        "strict-transport-security",
        "referrer-policy",
        "permissions-policy",
        "x-content-type-options",
        "x-frame-options"
    ];

    requiredHeaders.forEach((key) => {
        if (!headers.has(key)) fail(`Falta el encabezado ${key}.`);
    });

    const csp = headers.get("content-security-policy") || "";
    for (const directive of [
        "default-src 'self'",
        "object-src 'none'",
        "frame-ancestors 'none'",
        "base-uri 'self'",
        "upgrade-insecure-requests"
    ]) {
        if (!csp.includes(directive)) fail(`La CSP no contiene: ${directive}.`);
    }

    const index = read("index.html");
    const jsonLd = index.match(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/i)?.[1];
    if (!jsonLd) {
        fail("No se encontró JSON-LD para validar su hash CSP.");
    } else {
        const hash = createHash("sha256").update(jsonLd, "utf8").digest("base64");
        if (!csp.includes(`'sha256-${hash}'`)) {
            fail("El hash CSP del JSON-LD no coincide con index.html.");
        } else {
            pass("Hash CSP del JSON-LD verificado.");
        }
    }
}

const analytics = read("assets/js/analytics.js");
if (!analytics.includes("hasAnalyticsConsent")) {
    fail("analytics.js no comprueba el consentimiento antes de cargar Analytics.");
}
if (/appendChild\(analyticsScript\)/.test(analytics) && !/analyticsAllowed\(\)/.test(analytics)) {
    fail("analytics.js podría cargar Google Analytics sin comprobar consentimiento.");
}

const consent = read("assets/js/privacy-consent.js");
for (const token of [
    'analytics_storage: "denied"',
    'ad_storage: "denied"',
    'ad_user_data: "denied"',
    'ad_personalization: "denied"'
]) {
    if (!consent.includes(token)) fail(`privacy-consent.js no declara ${token}.`);
}

for (const page of ["index.html", "portafolio.html", "privacidad.html"]) {
    const html = read(page);
    const consentPosition = html.indexOf("assets/js/privacy-consent.js");
    const analyticsPosition = html.indexOf("assets/js/analytics.js");
    if (consentPosition < 0) fail(`${page} no carga privacy-consent.js.`);
    if (analyticsPosition < 0) fail(`${page} no carga analytics.js.`);
    if (consentPosition >= 0 && analyticsPosition >= 0 && consentPosition > analyticsPosition) {
        fail(`${page} carga Analytics antes que el gestor de consentimiento.`);
    }
}

const home = read("index.html");
if (!home.includes('href="privacidad.html"')) fail("La portada no enlaza la política de privacidad.");
if (!home.includes("data-privacy-settings")) fail("La portada no ofrece reabrir las preferencias.");

const privacy = read("privacidad.html");
for (const statement of [
    "Google Analytics se activa solo si aceptas",
    "No activamos personalización publicitaria",
    "El formulario no envía estos datos a un servidor"
]) {
    if (!privacy.includes(statement)) fail(`La política no documenta: ${statement}`);
}

notices.forEach((message) => console.log(`OK ${message}`));
errors.forEach((message) => console.error(`ERROR ${message}`));

if (errors.length) {
    console.error(`\nAuditoría de seguridad fallida: ${errors.length} error(es).`);
    process.exitCode = 1;
} else {
    console.log("Auditoría de seguridad y privacidad aprobada.");
}
