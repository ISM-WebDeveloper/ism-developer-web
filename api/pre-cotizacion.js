/**
 * API · Pre-cotización Guía Web ISM
 *
 * Responsabilidades:
 * - Validar y normalizar el payload recibido desde la guía.
 * - Evitar que datos sin sanitizar entren en el HTML del correo.
 * - Enviar el levantamiento a ISM mediante Resend.
 * - Mantener las credenciales exclusivamente en variables de entorno.
 *
 * Variables requeridas:
 * - RESEND_API_KEY
 * - PREQUOTE_FROM_EMAIL
 * - PREQUOTE_TO_EMAIL (opcional; tiene fallback corporativo)
 */

// ============================================================================
// 01. CONFIGURACIÓN DEL ENDPOINT
// ============================================================================

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const MAX_BODY_BYTES = 48_000;

// ============================================================================
// 02. RESPUESTAS HTTP Y NORMALIZACIÓN DE DATOS
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

function clean(value, max = 200) {
    return String(value ?? "").trim().slice(0, max);
}

function escapeHtml(value) {
    return clean(value, 5_000)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function listLabels(items) {
    if (!Array.isArray(items) || items.length === 0) return "No indicado";
    return items.map((item) => clean(item?.label || item, 120)).filter(Boolean).join(", ");
}

// ============================================================================
// 03. VALIDACIÓN SERVER-SIDE DEL PROSPECTO
// Nunca se confía únicamente en la validación realizada por el navegador.
// ============================================================================

function validatePayload(payload) {
    const contact = payload?.contact || {};
    const name = clean(contact.name, 80);
    const business = clean(contact.business, 100);
    const email = clean(contact.email, 120).toLowerCase();
    const phone = clean(contact.phone, 30);
    const consent = contact.consent === true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneDigits = phone.replace(/\D/g, "");

    if (name.length < 2) return { ok: false, error: "Nombre inválido." };
    if (!emailPattern.test(email)) return { ok: false, error: "Correo inválido." };
    if (phoneDigits.length < 8) return { ok: false, error: "Teléfono inválido." };
    if (!consent) return { ok: false, error: "Debes aceptar el contacto asociado a esta solicitud." };

    return {
        ok: true,
        contact: { name, business, email, phone, consent }
    };
}

// ============================================================================
// 04. CONSTRUCCIÓN DEL CORREO INTERNO ISM
// El correo incluye el levantamiento comercial; no se envía al prospecto.
// ============================================================================

function buildEmail(payload, contact) {
    const project = payload.project || {};
    const recommendation = payload.recommendation || {};
    const maturity = recommendation.maturity || {};
    const suggestions = Array.isArray(recommendation.suggestions)
        ? recommendation.suggestions.map((item) => clean(item?.title, 160)).filter(Boolean)
        : [];
    const rows = [
        ["Nombre", contact.name],
        ["Negocio", contact.business || "No indicado"],
        ["Correo", contact.email],
        ["Teléfono / WhatsApp", contact.phone],
        ["Rubro", clean(project.industry?.label, 140) || "No indicado"],
        ["Objetivos", listLabels(project.goals)],
        ["Presencia actual", listLabels(project.presence)],
        ["Contenido", listLabels(project.content)],
        ["Acciones", listLabels(project.actions)],
        ["Solución sugerida", clean(recommendation.title, 180) || "No indicada"],
        ["Tipo interno", clean(recommendation.type, 40) || "No indicado"],
        ["Momento digital", clean(maturity.title, 120) || "No indicado"],
        ["Sugerencias ISM", suggestions.length ? suggestions.join(", ") : "Sin sugerencias"],
        ["Compromiso de respuesta", "Dentro de las primeras 48 horas hábiles"],
        ["Tarifa interna", `${Number(payload?.internal?.hourlyRateUF || 0.7).toFixed(1)} UF/HH (no visible al prospecto)`]
    ];

    const text = [
        "Nueva solicitud · Guía Web ISM",
        "",
        ...rows.map(([label, value]) => `${label}: ${value}`),
        "",
        `Fecha: ${clean(payload.submittedAt, 80) || new Date().toISOString()}`
    ].join("\n");

    const htmlRows = rows.map(([label, value]) => `
        <tr>
            <td style="padding:9px 12px;border-bottom:1px solid #dce7ef;color:#476074;font-size:12px;vertical-align:top;width:180px;"><strong>${escapeHtml(label)}</strong></td>
            <td style="padding:9px 12px;border-bottom:1px solid #dce7ef;color:#10293d;font-size:12px;vertical-align:top;">${escapeHtml(value)}</td>
        </tr>`).join("");

    const html = `
        <div style="margin:0;padding:24px;background:#f4f8fb;font-family:Arial,sans-serif;color:#10293d;">
            <div style="max-width:720px;margin:0 auto;background:#ffffff;border:1px solid #dbe8f0;border-radius:16px;overflow:hidden;">
                <div style="padding:22px 24px;background:#071421;color:#ffffff;">
                    <div style="color:#38bdf8;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;">ISM Developer</div>
                    <h1 style="margin:7px 0 0;font-size:22px;">Nueva solicitud · Guía Web ISM</h1>
                </div>
                <div style="padding:18px 20px 22px;">
                    <table role="presentation" style="width:100%;border-collapse:collapse;">${htmlRows}</table>
                    <p style="margin:16px 4px 0;color:#6a7f90;font-size:11px;">Fecha: ${escapeHtml(clean(payload.submittedAt, 80) || new Date().toISOString())}</p>
                </div>
            </div>
        </div>`;

    return { text, html };
}

// ============================================================================
// 05. PROCESAMIENTO DEL POST Y ENVÍO MEDIANTE RESEND
// ============================================================================

async function handlePost(request) {
    const contentLength = Number(request.headers.get("content-length") || 0);
    if (contentLength > MAX_BODY_BYTES) return json({ error: "Solicitud demasiado grande." }, 413);

    let payload;
    try {
        payload = await request.json();
    } catch {
        return json({ error: "Solicitud JSON inválida." }, 400);
    }

    const validation = validatePayload(payload);
    if (!validation.ok) return json({ error: validation.error }, 400);

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.PREQUOTE_FROM_EMAIL;
    const to = process.env.PREQUOTE_TO_EMAIL || "ignacio.sepulveda@ismdeveloper.cl";

    if (!apiKey || !from) {
        return json({ error: "El canal de correo todavía no está configurado." }, 503);
    }

    const email = buildEmail(payload, validation.contact);
    const businessSuffix = validation.contact.business ? ` · ${validation.contact.business}` : "";
    const resendResponse = await fetch(RESEND_ENDPOINT, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            from,
            to: [to],
            reply_to: validation.contact.email,
            subject: `Nueva precotización web · ${validation.contact.name}${businessSuffix}`,
            text: email.text,
            html: email.html
        })
    });

    if (!resendResponse.ok) {
        const detail = await resendResponse.text().catch(() => "");
        console.error("Resend pre-cotización:", resendResponse.status, detail.slice(0, 500));
        return json({ error: "No fue posible completar el envío." }, 502);
    }

    return json({ ok: true });
}

// ============================================================================
// 06. HANDLER DE VERCEL FUNCTION
// Solo POST procesa solicitudes; OPTIONS queda disponible para preflight.
// ============================================================================

export default {
    async fetch(request) {
        if (request.method === "OPTIONS") {
            return new Response(null, { status: 204, headers: { Allow: "POST, OPTIONS" } });
        }
        if (request.method !== "POST") {
            return json({ error: "Método no permitido." }, 405);
        }

        return handlePost(request);
    }
};
