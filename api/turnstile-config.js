/**
 * API · Configuración pública de Turnstile · P3.0
 *
 * Responsabilidad:
 * - Exponer únicamente el sitekey público que el navegador necesita para
 *   renderizar Turnstile.
 * - Mantener TURNSTILE_SECRET_KEY exclusivamente en el backend.
 *
 * Variable requerida:
 * - TURNSTILE_SITE_KEY
 */

// ============================================================================
// 01. RESPUESTAS HTTP
// ============================================================================

function json(data, status = 200) {
    return Response.json(data, {
        status,
        headers: {
            "Cache-Control": "no-store",
            "X-Content-Type-Options": "nosniff"
        }
    });
}

// ============================================================================
// 02. HANDLER DE VERCEL FUNCTION
// ============================================================================

export default {
    async fetch(request) {
        if (request.method !== "GET") {
            return json({ error: "Método no permitido." }, 405);
        }

        const siteKey = String(process.env.TURNSTILE_SITE_KEY || "").trim();
        if (!siteKey) {
            return json({ error: "La verificación de seguridad todavía no está configurada." }, 503);
        }

        return json({ siteKey });
    }
};
