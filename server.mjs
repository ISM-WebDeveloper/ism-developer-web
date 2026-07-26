import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));
const port = Number.parseInt(process.env.PORT || "4173", 10);
const host = process.env.HOST || "127.0.0.1";

const mimeTypes = {
    ".css": "text/css; charset=utf-8",
    ".html": "text/html; charset=utf-8",
    ".ico": "image/x-icon",
    ".jpeg": "image/jpeg",
    ".jpg": "image/jpeg",
    ".js": "text/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".png": "image/png",
    ".svg": "image/svg+xml",
    ".webmanifest": "application/manifest+json; charset=utf-8",
    ".webp": "image/webp",
    ".xml": "application/xml; charset=utf-8"
};

function resolveRequestPath(requestUrl = "/") {
    let pathname;
    try {
        pathname = decodeURIComponent(new URL(requestUrl, `http://${host}:${port}`).pathname);
    } catch {
        return null;
    }

    const relativePath = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
    const absolutePath = resolve(root, relativePath);
    const normalizedRoot = root.endsWith(sep) ? root : `${root}${sep}`;

    if (absolutePath !== root && !absolutePath.startsWith(normalizedRoot)) return null;
    if (existsSync(absolutePath) && statSync(absolutePath).isDirectory()) {
        return resolve(absolutePath, "index.html");
    }
    return absolutePath;
}

const server = createServer((request, response) => {
    const filePath = resolveRequestPath(request.url);

    if (!filePath) {
        response.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
        response.end("Solicitud no válida.");
        return;
    }

    if (!existsSync(filePath) || !statSync(filePath).isFile()) {
        response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        response.end("Recurso no encontrado.");
        return;
    }

    const extension = extname(filePath).toLowerCase();
    const isVersionableAsset = filePath.includes(`${sep}assets${sep}`);
    const cacheControl = isVersionableAsset
        ? "public, max-age=604800, stale-while-revalidate=86400"
        : extension === ".html"
            ? "no-cache"
            : "public, max-age=3600";

    response.writeHead(200, {
        "Cache-Control": cacheControl,
        "Content-Type": mimeTypes[extension] || "application/octet-stream",
        "X-Content-Type-Options": "nosniff"
    });

    if (request.method === "HEAD") {
        response.end();
        return;
    }

    createReadStream(filePath).pipe(response);
});

server.on("error", (error) => {
    if (error.code === "EADDRINUSE") {
        console.error(`El puerto ${port} ya está en uso. Ejecuta el servidor con otro puerto, por ejemplo: $env:PORT=4174; npm.cmd run dev`);
        process.exitCode = 1;
        return;
    }

    console.error("No fue posible iniciar el servidor local:", error.message);
    process.exitCode = 1;
});

server.listen(port, host, () => {
    console.log(`ISM Developer disponible en http://${host}:${port}`);
});

function shutdown() {
    server.close(() => process.exit(0));
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
