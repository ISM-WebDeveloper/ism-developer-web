/**
 * API · Solicitud de cotización desde Configurador ISM · Página 3.0
 *
 * Responsabilidades:
 * - Validar los datos mínimos del prospecto.
 * - Validar Cloudflare Turnstile en servidor.
 * - Normalizar el resumen técnico enviado por el configurador.
 * - Enviar la solicitud a ISM Developer mediante Resend.
 *
 * Variables requeridas:
 * - RESEND_API_KEY
 * - PREQUOTE_FROM_EMAIL
 * - PREQUOTE_TO_EMAIL (opcional; fallback corporativo)
 * - TURNSTILE_SECRET_KEY
 */

// ============================================================================
// 01. CONFIGURACIÓN
// ============================================================================

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const TURNSTILE_VERIFY_ENDPOINT = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const TURNSTILE_ACTION = "prequote";
const MAX_BODY_BYTES = 48_000;
const TURNSTILE_TIMEOUT_MS = 6_000;
const MAX_SERVICES = 40;
const MAX_ACTIVITIES_PER_SERVICE = 80;

// ============================================================================
// 02. RESPUESTAS Y NORMALIZACIÓN
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

function numberOrZero(value) {
    const numeric = Number(value);
    return Number.isFinite(numeric) && numeric >= 0 ? numeric : 0;
}

function formatHours(value) {
    return `${numberOrZero(value).toFixed(2)} HH`;
}

// ============================================================================
// 03. VALIDACIÓN DEL CONTACTO
// ============================================================================

function validateContact(payload) {
    const contact = payload?.contact || {};
    const name = clean(contact.name, 80);
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
        contact: {
            name,
            email,
            phone,
            consent
        }
    };
}

// ============================================================================
// 04. VALIDACIÓN TURNSTILE
// ============================================================================

function getClientIp(request) {
    const forwarded = String(request.headers.get("x-forwarded-for") || "");
    return clean(forwarded.split(",")[0], 64);
}

async function validateTurnstile(request, payload) {
    const secret = String(process.env.TURNSTILE_SECRET_KEY || "").trim();
    const token = clean(payload?.security?.turnstileToken, 2_048);

    if (!secret) {
        return {
            ok: false,
            status: 503,
            code: "TURNSTILE_NOT_CONFIGURED",
            error: "La verificación de seguridad no está disponible."
        };
    }

    if (!token) {
        return {
            ok: false,
            status: 403,
            code: "TURNSTILE_FAILED",
            error: "Completa la verificación de seguridad."
        };
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), TURNSTILE_TIMEOUT_MS);

    try {
        const body = {
            secret,
            response: token
        };
        const remoteIp = getClientIp(request);
        if (remoteIp) body.remoteip = remoteIp;
        if (globalThis.crypto?.randomUUID) body.idempotency_key = globalThis.crypto.randomUUID();

        const response = await fetch(TURNSTILE_VERIFY_ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
            signal: controller.signal
        });

        if (!response.ok) {
            console.error("Turnstile Configurador HTTP:", response.status);
            return {
                ok: false,
                status: 502,
                code: "TURNSTILE_UNAVAILABLE",
                error: "No pudimos completar la verificación de seguridad."
            };
        }

        const result = await response.json();
        const requestHostname = new URL(request.url).hostname;
        const actionMatches = result.action === TURNSTILE_ACTION;
        const hostnameMatches = result.hostname === requestHostname;

        if (!result.success || !actionMatches || !hostnameMatches) {
            console.warn("Turnstile Configurador rechazado:", {
                success: Boolean(result.success),
                action: clean(result.action, 80),
                hostname: clean(result.hostname, 180),
                errorCodes: Array.isArray(result["error-codes"]) ? result["error-codes"].slice(0, 8) : []
            });
            return {
                ok: false,
                status: 403,
                code: "TURNSTILE_FAILED",
                error: "No pudimos validar la verificación de seguridad. Inténtalo nuevamente."
            };
        }

        return { ok: true };
    } catch (error) {
        console.error("Turnstile Configurador:", error?.name || "Error", clean(error?.message, 200));
        return {
            ok: false,
            status: 502,
            code: "TURNSTILE_UNAVAILABLE",
            error: "La verificación de seguridad no respondió a tiempo."
        };
    } finally {
        clearTimeout(timeout);
    }
}

// ============================================================================
// 05. NORMALIZACIÓN DE LA CONFIGURACIÓN
// ============================================================================

function normalizeConfiguration(payload) {
    const raw = payload?.configuration || {};
    const rawServices = Array.isArray(raw.services) ? raw.services.slice(0, MAX_SERVICES) : [];

    const services = rawServices.map((service) => {
        const activities = Array.isArray(service?.activities)
            ? service.activities.slice(0, MAX_ACTIVITIES_PER_SERVICE).map((activity) => ({
                name: clean(activity?.name, 180) || "Actividad sin nombre",
                mandatory: activity?.mandatory === true,
                quantityLabel: clean(activity?.quantityLabel, 80),
                quantity: activity?.quantity === null || activity?.quantity === undefined
                    ? null
                    : numberOrZero(activity.quantity),
                hours: activity?.hours === null || activity?.hours === undefined
                    ? null
                    : numberOrZero(activity.hours)
            }))
            : [];

        return {
            area: clean(service?.area, 140) || "Sin línea indicada",
            code: clean(service?.code, 40),
            name: clean(service?.name, 180) || "Servicio sin nombre",
            quantity: Math.max(1, numberOrZero(service?.quantity) || 1),
            technicalHours: numberOrZero(service?.technicalHours),
            activities
        };
    });

    const totals = raw?.totals || {};

    return {
        title: clean(raw?.title, 180) || "Configurador de servicios ISM",
        catalogVersion: clean(raw?.catalogVersion, 80) || "No indicada",
        applicationVersion: clean(raw?.applicationVersion, 80) || "No indicada",
        services,
        totals: {
            activities: Math.round(numberOrZero(totals.activities)),
            services: Math.round(numberOrZero(totals.services)) || services.length,
            technicalHours: numberOrZero(totals.technicalHours),
            commercialHours: numberOrZero(totals.commercialHours),
            serviceLevel: clean(totals.serviceLevel, 80) || "No indicado"
        },
        warnings: Array.isArray(raw?.warnings)
            ? raw.warnings.slice(0, 20).map((warning) => clean(warning, 220)).filter(Boolean)
            : []
    };
}

// ============================================================================
// 06. CORREO INTERNO ISM
// ============================================================================

function buildEmail(payload, contact, configuration) {
    const rows = [
        ["Nombre", contact.name],
        ["Correo", contact.email],
        ["Teléfono / WhatsApp", contact.phone],
        ["Origen", "Configurador de Servicios ISM"],
        ["Servicios seleccionados", String(configuration.services.length)],
        ["Actividades seleccionadas", String(configuration.totals.activities)],
        ["Nivel de servicio", configuration.totals.serviceLevel],
        ["HH técnicas", formatHours(configuration.totals.technicalHours)],
        ["HH estimadas aproximadas", formatHours(configuration.totals.commercialHours)],
        ["Catálogo", configuration.catalogVersion],
        ["Versión de aplicación", configuration.applicationVersion],
        ["Compromiso de respuesta", "Dentro de las primeras 48 hrs hábiles"],
        ["Estado", "REVISAR ALCANCE ANTES DE EMITIR COTIZACIÓN"]
    ];

    const serviceText = configuration.services.flatMap((service) => [
        `\n${service.code ? `${service.code} · ` : ""}${service.name} · ${service.area} · Cantidad ${service.quantity} · ${formatHours(service.technicalHours)}`,
        ...service.activities.map((activity) => {
            const quantity = activity.quantityLabel && activity.quantity !== null
                ? ` · ${activity.quantityLabel}: ${activity.quantity}`
                : "";
            const hours = activity.hours !== null ? ` · ${formatHours(activity.hours)}` : "";
            return `  - ${activity.name}${activity.mandatory ? " · Obligatoria" : ""}${quantity}${hours}`;
        })
    ]);

    const text = [
        "Nueva solicitud · Configurador ISM",
        "",
        ...rows.map(([label, value]) => `${label}: ${value}`),
        "",
        "Detalle seleccionado:",
        ...serviceText,
        ...(configuration.warnings.length
            ? ["", "Advertencias:", ...configuration.warnings.map((warning) => `- ${warning}`)]
            : []),
        "",
        `Fecha: ${clean(payload.submittedAt, 80) || new Date().toISOString()}`
    ].join("\n");

    const htmlRows = rows.map(([label, value]) => `
        <tr>
            <td style="padding:9px 12px;border-bottom:1px solid #dce7ef;color:#476074;font-size:12px;vertical-align:top;width:190px;"><strong>${escapeHtml(label)}</strong></td>
            <td style="padding:9px 12px;border-bottom:1px solid #dce7ef;color:#10293d;font-size:12px;vertical-align:top;">${escapeHtml(value)}</td>
        </tr>`).join("");

    const serviceHtml = configuration.services.map((service) => {
        const activities = service.activities.map((activity) => {
            const quantity = activity.quantityLabel && activity.quantity !== null
                ? `${activity.quantityLabel}: ${activity.quantity}`
                : "";
            const details = [
                activity.mandatory ? "Obligatoria" : "Seleccionada",
                quantity,
                activity.hours !== null ? formatHours(activity.hours) : ""
            ].filter(Boolean).join(" · ");

            return `
                <tr>
                    <td style="padding:8px 10px;border-bottom:1px solid #e8eef2;color:#10293d;font-size:11px;">${escapeHtml(activity.name)}</td>
                    <td style="padding:8px 10px;border-bottom:1px solid #e8eef2;color:#607487;font-size:10px;text-align:right;">${escapeHtml(details)}</td>
                </tr>`;
        }).join("");

        return `
            <div style="margin-top:14px;border:1px solid #dce8ef;border-radius:12px;overflow:hidden;">
                <div style="padding:11px 12px;background:#eef9fd;">
                    <strong style="display:block;color:#0a607e;font-size:12px;">${escapeHtml(service.name)}</strong>
                    <span style="display:block;margin-top:3px;color:#647b8d;font-size:10px;">${escapeHtml(service.area)}${service.code ? ` · ${escapeHtml(service.code)}` : ""} · Cantidad ${escapeHtml(service.quantity)} · ${escapeHtml(formatHours(service.technicalHours))}</span>
                </div>
                <table role="presentation" style="width:100%;border-collapse:collapse;">${activities || `<tr><td style="padding:10px;color:#6a7f90;font-size:11px;">Sin actividades detalladas.</td></tr>`}</table>
            </div>`;
    }).join("");

    const warningsHtml = configuration.warnings.length
        ? `<div style="margin-top:16px;padding:12px 14px;border:1px solid #ffd4b9;border-radius:12px;background:#fff8f2;">
             <strong style="display:block;color:#8b3a15;font-size:11px;">Advertencias del configurador</strong>
             <ul style="margin:7px 0 0;padding-left:18px;color:#7a5b4b;font-size:10px;line-height:1.45;">${configuration.warnings.map((warning) => `<li>${escapeHtml(warning)}</li>`).join("")}</ul>
           </div>`
        : "";

    const html = `
        <div style="margin:0;padding:24px;background:#f4f8fb;font-family:Arial,sans-serif;color:#10293d;">
            <div style="max-width:760px;margin:0 auto;background:#ffffff;border:1px solid #dbe8f0;border-radius:16px;overflow:hidden;">
                <div style="padding:22px 24px;background:#071421;color:#ffffff;">
                    <div style="color:#38bdf8;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;">ISM Developer</div>
                    <h1 style="margin:7px 0 0;font-size:22px;">Nueva solicitud · Configurador ISM</h1>
                    <p style="margin:7px 0 0;color:#a9c4d5;font-size:11px;">Configuración enviada por un prospecto para revisión técnica y comercial.</p>
                </div>
                <div style="padding:18px 20px 22px;">
                    <table role="presentation" style="width:100%;border-collapse:collapse;">${htmlRows}</table>

                    <div style="margin:18px 0 0;padding:13px 14px;border:1px solid #b9e4ef;border-radius:12px;background:#f3fcff;">
                        <strong style="display:block;color:#075f7b;font-size:12px;">Revisión requerida</strong>
                        <p style="margin:6px 0 0;color:#557184;font-size:11px;line-height:1.45;">Las HH son referenciales y provienen de la configuración enviada. Validar alcance, dependencias y exclusiones antes de emitir una cotización formal.</p>
                    </div>

                    <div style="margin-top:18px;">
                        <strong style="display:block;margin-bottom:6px;color:#10293d;font-size:12px;">Servicios y actividades seleccionadas</strong>
                        ${serviceHtml || `<p style="color:#6a7f90;font-size:11px;">No se recibieron servicios seleccionados.</p>`}
                    </div>

                    ${warningsHtml}
                    <p style="margin:16px 4px 0;color:#6a7f90;font-size:11px;">Fecha: ${escapeHtml(clean(payload.submittedAt, 80) || new Date().toISOString())}</p>
                </div>
            </div>
        </div>`;

    return { text, html };
}

// ============================================================================
// 07. PROCESAMIENTO Y ENVÍO
// ============================================================================

async function handlePost(request) {
    const contentLength = Number(request.headers.get("content-length") || 0);
    if (contentLength > MAX_BODY_BYTES) {
        return json({ error: "Solicitud demasiado grande." }, 413);
    }

    let payload;
    try {
        payload = await request.json();
    } catch {
        return json({ error: "Solicitud JSON inválida." }, 400);
    }

    if (clean(payload?.source, 80) !== "configurador-servicios-ism") {
        return json({ error: "Origen de solicitud inválido." }, 400);
    }

    const validation = validateContact(payload);
    if (!validation.ok) {
        return json({ error: validation.error }, 400);
    }

    const configuration = normalizeConfiguration(payload);
    if (configuration.services.length === 0) {
        return json({ error: "Selecciona al menos un servicio antes de enviar." }, 400);
    }

    const turnstileValidation = await validateTurnstile(request, payload);
    if (!turnstileValidation.ok) {
        return json(
            { error: turnstileValidation.error, code: turnstileValidation.code },
            turnstileValidation.status
        );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.PREQUOTE_FROM_EMAIL;
    const to = process.env.PREQUOTE_TO_EMAIL || "ignacio.sepulveda@ismdeveloper.cl";

    if (!apiKey || !from) {
        return json({ error: "El canal de correo todavía no está configurado." }, 503);
    }

    const email = buildEmail(payload, validation.contact, configuration);
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
            subject: `Nueva solicitud Configurador ISM · ${validation.contact.name}`,
            text: email.text,
            html: email.html
        })
    });

    if (!resendResponse.ok) {
        const detail = await resendResponse.text().catch(() => "");
        console.error("Resend Configurador ISM:", resendResponse.status, detail.slice(0, 500));
        return json({ error: "No fue posible completar el envío." }, 502);
    }

    return json({ ok: true });
}

// ============================================================================
// 08. HANDLER VERCEL
// ============================================================================

export default {
    async fetch(request) {
        if (request.method === "OPTIONS") {
            return new Response(null, {
                status: 204,
                headers: { Allow: "POST, OPTIONS" }
            });
        }

        if (request.method !== "POST") {
            return json({ error: "Método no permitido." }, 405);
        }

        return handlePost(request);
    }
};
