/**
 * API · Pre-cotización Guía Web ISM · P4.0
 *
 * Responsabilidades:
 * - Validar y normalizar el payload recibido desde la guía.
 * - Evitar que datos sin sanitizar entren en el HTML del correo.
 * - Enviar el levantamiento a ISM mediante Resend.
 * - Mantener las credenciales exclusivamente en variables de entorno.
 * - Validar el token de Cloudflare Turnstile antes de enviar el correo.
 * - Traducir la guía al catálogo técnico y calcular una referencia interna.
 *
 * Variables requeridas:
 * - RESEND_API_KEY
 * - PREQUOTE_FROM_EMAIL
 * - PREQUOTE_TO_EMAIL (opcional; tiene fallback corporativo)
 * - TURNSTILE_SECRET_KEY
 */


import { GUIDE_ACTIVITY_PROFILES, GUIDE_SERVICE_RULES, GUIDE_WEB_ACTIVITY_RULES } from "./_config/guide-technical-rules.js";
import { ismGuideTechnicalCatalog } from "./_generated/ism-guide-catalog.js";

// ============================================================================
// 01. CONFIGURACIÓN DEL ENDPOINT
// ============================================================================

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const TURNSTILE_VERIFY_ENDPOINT = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const TURNSTILE_ACTION = "prequote";
const MAX_BODY_BYTES = 48_000;
const TURNSTILE_TIMEOUT_MS = 6_000;
const DEFAULT_HOURLY_RATE_UF = 0.7;
const TECHNICAL_SCENARIOS = ["small", "medium", "high"];

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
// 04. VALIDACIÓN SERVER-SIDE DE CLOUDFLARE TURNSTILE
// Los tokens duran pocos minutos, son de un solo uso y jamás se validan en
// el navegador. También comprobamos que action y hostname coincidan.
// ============================================================================

function getClientIp(request) {
    const forwarded = String(request.headers.get("x-forwarded-for") || "");
    return clean(forwarded.split(",")[0], 64);
}

async function validateTurnstile(request, payload) {
    const secret = String(process.env.TURNSTILE_SECRET_KEY || "").trim();
    const token = clean(payload?.security?.turnstileToken, 2_048);

    if (!secret) {
        return { ok: false, status: 503, code: "TURNSTILE_NOT_CONFIGURED", error: "La verificación de seguridad no está disponible." };
    }
    if (!token) {
        return { ok: false, status: 403, code: "TURNSTILE_FAILED", error: "Completa la verificación de seguridad." };
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
            console.error("Turnstile Siteverify HTTP:", response.status);
            return { ok: false, status: 502, code: "TURNSTILE_UNAVAILABLE", error: "No pudimos completar la verificación de seguridad." };
        }

        const result = await response.json();
        const requestHostname = new URL(request.url).hostname;
        const actionMatches = result.action === TURNSTILE_ACTION;
        const hostnameMatches = result.hostname === requestHostname;

        if (!result.success || !actionMatches || !hostnameMatches) {
            console.warn("Turnstile rechazado:", {
                success: Boolean(result.success),
                action: clean(result.action, 80),
                hostname: clean(result.hostname, 180),
                errorCodes: Array.isArray(result["error-codes"]) ? result["error-codes"].slice(0, 8) : []
            });
            return { ok: false, status: 403, code: "TURNSTILE_FAILED", error: "No pudimos validar la verificación de seguridad. Inténtalo nuevamente." };
        }

        return { ok: true };
    } catch (error) {
        console.error("Turnstile Siteverify:", error?.name || "Error", clean(error?.message, 200));
        return { ok: false, status: 502, code: "TURNSTILE_UNAVAILABLE", error: "La verificación de seguridad no respondió a tiempo." };
    } finally {
        clearTimeout(timeout);
    }
}

// ============================================================================
 // 05. ESTIMACIÓN TÉCNICA INTERNA DESDE EL CATÁLOGO ISM
 // La guía solo envía IDs comerciales. El servidor decide qué actividades
 // técnicas corresponden, toma sus HH del catálogo generado y aplica la tarifa.
 // ============================================================================

const TECHNICAL_SERVICE_INDEX = new Map(
    ismGuideTechnicalCatalog.area.services.map((service) => [service.code, service])
);

const TECHNICAL_ACTIVITY_INDEX = new Map(
    ismGuideTechnicalCatalog.area.services.flatMap((service) =>
        service.activities.map((activity) => [
            activity.code,
            {
                ...activity,
                serviceCode: service.code,
                serviceName: service.name
            }
        ])
    )
);

function round2(value) {
    return Math.round((Number(value) + Number.EPSILON) * 100) / 100;
}

function getHourlyRateUF() {
    const configured = Number(process.env.ISM_HOURLY_RATE_UF);
    return Number.isFinite(configured) && configured > 0
        ? configured
        : DEFAULT_HOURLY_RATE_UF;
}

function itemIds(items) {
    if (!Array.isArray(items)) return new Set();
    return new Set(items.map((item) => clean(item?.id || item, 80)).filter(Boolean));
}

function acceptedSuggestionIds(items) {
    if (!Array.isArray(items)) return new Set();
    return new Set(
        items
            .filter((item) => clean(item?.decision, 20) === "accepted")
            .map((item) => clean(item?.id, 80))
            .filter(Boolean)
    );
}

function addTechnicalActivity(selection, missingCodes, code, quantity, reason) {
    const activity = TECHNICAL_ACTIVITY_INDEX.get(code);

    if (!activity) {
        missingCodes.add(code);
        return;
    }

    const normalizedQuantity = Number.isFinite(Number(quantity))
        ? Math.max(0, Number(quantity))
        : Math.max(0, Number(activity.defaultQuantity || 1));

    const existing = selection.get(code);

    if (existing) {
        existing.quantity = Math.max(existing.quantity, normalizedQuantity);
        if (reason && !existing.reasons.includes(reason)) existing.reasons.push(reason);
        return;
    }

    selection.set(code, {
        activity,
        quantity: normalizedQuantity,
        reasons: reason ? [reason] : []
    });
}

function addDefaultService(selection, missingCodes, serviceCode, reason) {
    const service = TECHNICAL_SERVICE_INDEX.get(serviceCode);

    if (!service) {
        missingCodes.add(serviceCode);
        return;
    }

    service.activities
        .filter((activity) => activity.defaultIncluded)
        .forEach((activity) => {
            addTechnicalActivity(
                selection,
                missingCodes,
                activity.code,
                activity.defaultQuantity,
                reason
            );
        });
}

function addActivityList(selection, missingCodes, activityCodes, reason) {
    (activityCodes || []).forEach((code) => {
        addTechnicalActivity(selection, missingCodes, code, 1, reason);
    });
}

function addProfile(selection, missingCodes, profile, reason) {
    if (!profile) return;

    Object.entries(profile.activities).forEach(([code, quantity]) => {
        addTechnicalActivity(selection, missingCodes, code, quantity, reason || profile.label);
    });
}

function buildTechnicalEstimate(payload) {
    const project = payload?.project || {};
    const recommendation = payload?.recommendation || {};
    const goals = itemIds(project.goals);
    const presence = itemIds(project.presence);
    const content = itemIds(project.content);
    const actions = itemIds(project.actions);
    const accepted = acceptedSuggestionIds(recommendation.suggestions);

    const selection = new Map();
    const missingCodes = new Set();
    const modules = new Set(["Sitio web"]);
    const reviewReasons = new Set([
        "Referencia preliminar generada desde la guía; validar alcance y cantidades antes de cotizar."
    ]);

    // Base de todo proyecto originado en la Guía Web.
    addDefaultService(
        selection,
        missingCodes,
        GUIDE_SERVICE_RULES.baseWebService,
        "Base web profesional"
    );

    // Opcionales web asociados a elecciones explícitas.
    content.forEach((id) => {
        addActivityList(
            selection,
            missingCodes,
            GUIDE_WEB_ACTIVITY_RULES.content[id],
            `Contenido: ${id}`
        );
    });

    actions.forEach((id) => {
        addActivityList(
            selection,
            missingCodes,
            GUIDE_WEB_ACTIVITY_RULES.actions[id],
            `Acción: ${id}`
        );
    });

    presence.forEach((id) => {
        addActivityList(
            selection,
            missingCodes,
            GUIDE_WEB_ACTIVITY_RULES.presence[id],
            `Presencia: ${id}`
        );
    });

    accepted.forEach((id) => {
        addActivityList(
            selection,
            missingCodes,
            GUIDE_WEB_ACTIVITY_RULES.acceptedSuggestions[id],
            `Sugerencia aceptada: ${id}`
        );
    });

    // Funcionalidades que amplían la solución más allá de una web informativa.
    if (actions.has("booking") || goals.has("reservas")) {
        modules.add("Reservas / agenda");
        addProfile(
            selection,
            missingCodes,
            GUIDE_ACTIVITY_PROFILES.booking,
            "Módulo de reservas"
        );
        reviewReasons.add("Confirmar reglas de agenda, disponibilidad, bloqueos y operación administrativa.");
    }

    if (actions.has("shop") || goals.has("ventas")) {
        modules.add("Tienda / pedidos");
        addProfile(
            selection,
            missingCodes,
            GUIDE_ACTIVITY_PROFILES.shop,
            "Módulo de tienda o pedidos"
        );
        reviewReasons.add("Validar catálogo, stock, despacho/retiro y medio de pago antes de cerrar la cotización.");
    }

    if (actions.has("account")) {
        modules.add("Aplicación con usuarios");
        addDefaultService(
            selection,
            missingCodes,
            GUIDE_SERVICE_RULES.accountService,
            "Aplicación con usuarios y acceso privado"
        );
        reviewReasons.add("Confirmar cantidad de roles, pantallas, entidades y permisos.");
    }

    if (actions.has("automation") || goals.has("procesos")) {
        modules.add("Automatización");
        addProfile(
            selection,
            missingCodes,
            GUIDE_ACTIVITY_PROFILES.automation,
            "Automatización de proceso"
        );
        reviewReasons.add("Levantar el proceso actual, excepciones y frecuencia de ejecución.");
    }

    if (actions.has("integration")) {
        modules.add("Integración");
        addDefaultService(
            selection,
            missingCodes,
            GUIDE_SERVICE_RULES.integrationService,
            "Integración con sistema externo"
        );
        reviewReasons.add("Validar API, autenticación, límites y disponibilidad del sistema externo.");
    }

    const technicalHours = { small: 0, medium: 0, high: 0 };
    const activities = [...selection.values()].map((entry) => {
        const scenarioHours = {};

        TECHNICAL_SCENARIOS.forEach((scenario) => {
            const hours = Number(entry.activity.hours?.[scenario] || 0) * entry.quantity;
            scenarioHours[scenario] = round2(hours);
            technicalHours[scenario] += hours;
        });

        return {
            code: entry.activity.code,
            name: entry.activity.name,
            serviceCode: entry.activity.serviceCode,
            serviceName: entry.activity.serviceName,
            phase: entry.activity.phase || "",
            quantity: entry.quantity,
            unitLabel: entry.activity.unitLabel || "",
            validationStatus: entry.activity.validationStatus || "",
            reasons: entry.reasons,
            hours: scenarioHours
        };
    });

    TECHNICAL_SCENARIOS.forEach((scenario) => {
        technicalHours[scenario] = round2(technicalHours[scenario]);
    });

    const contingencyRate = Number(ismGuideTechnicalCatalog.contingencyRate || 0);
    const hourlyRateUF = getHourlyRateUF();
    const contingencyHours = {};
    const commercialHours = {};
    const investmentUF = {};

    TECHNICAL_SCENARIOS.forEach((scenario) => {
        contingencyHours[scenario] = round2(technicalHours[scenario] * contingencyRate);
        commercialHours[scenario] = round2(
            technicalHours[scenario] + contingencyHours[scenario]
        );
        investmentUF[scenario] = round2(commercialHours[scenario] * hourlyRateUF);
    });

    if (missingCodes.size) {
        reviewReasons.add(
            `Revisar sincronización del catálogo: faltan ${missingCodes.size} códigos técnicos.`
        );
    }

    return {
        catalogVersion: clean(ismGuideTechnicalCatalog.catalogVersion, 40) || "No indicada",
        contingencyRate: round2(contingencyRate),
        hourlyRateUF: round2(hourlyRateUF),
        referenceScenario: "Estándar",
        modules: [...modules],
        serviceCodes: [...new Set(activities.map((item) => item.serviceCode))],
        activityCount: activities.length,
        technicalHours,
        contingencyHours,
        commercialHours,
        investmentUF,
        missingActivityCodes: [...missingCodes],
        reviewRequired: true,
        reviewReasons: [...reviewReasons],
        activities
    };
}

// ============================================================================
// 06. CONSTRUCCIÓN DEL CORREO INTERNO ISM
// El correo incluye el levantamiento comercial; no se envía al prospecto.
// ============================================================================

function buildEmail(payload, contact, technical) {
    const project = payload.project || {};
    const recommendation = payload.recommendation || {};
    const maturity = recommendation.maturity || {};
    const suggestions = Array.isArray(recommendation.suggestions) ? recommendation.suggestions : [];
    const acceptedSuggestions = suggestions
        .filter((item) => clean(item?.decision, 20) === "accepted")
        .map((item) => clean(item?.title, 160))
        .filter(Boolean);
    const rejectedSuggestions = suggestions
        .filter((item) => clean(item?.decision, 20) === "rejected")
        .map((item) => clean(item?.title, 160))
        .filter(Boolean);
    const pendingSuggestions = suggestions
        .filter((item) => !["accepted", "rejected"].includes(clean(item?.decision, 20)))
        .map((item) => clean(item?.title, 160))
        .filter(Boolean);
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
        ["Sugerencias agregadas", acceptedSuggestions.length ? acceptedSuggestions.join(", ") : "Ninguna"],
        ["Sugerencias descartadas", rejectedSuggestions.length ? rejectedSuggestions.join(", ") : "Ninguna"],
        ["Sugerencias sin decisión", pendingSuggestions.length ? pendingSuggestions.join(", ") : "Ninguna"],
        ["Compromiso de respuesta", "Dentro de las primeras 48 hrs hábiles"],
        ["Catálogo técnico", `ISM ${technical.catalogVersion}`],
        ["Módulos detectados", technical.modules.join(", ") || "Sitio web"],
        ["Servicios técnicos", technical.serviceCodes.join(", ") || "WEB-01"],
        ["Actividades técnicas", String(technical.activityCount)],
        ["HH técnicas · Inicial", `${technical.technicalHours.small.toFixed(2)} HH`],
        ["HH técnicas · Estándar", `${technical.technicalHours.medium.toFixed(2)} HH`],
        ["HH técnicas · Avanzado", `${technical.technicalHours.high.toFixed(2)} HH`],
        ["Contingencia comercial", `${Math.round(technical.contingencyRate * 100)}%`],
        ["HH comerciales · Estándar", `${technical.commercialHours.medium.toFixed(2)} HH`],
        ["Tarifa interna", `${technical.hourlyRateUF.toFixed(2)} UF/HH`],
        ["Referencia interna · Inicial", `${technical.investmentUF.small.toFixed(2)} UF`],
        ["Referencia interna · Estándar", `${technical.investmentUF.medium.toFixed(2)} UF`],
        ["Referencia interna · Avanzado", `${technical.investmentUF.high.toFixed(2)} UF`],
        ["Estado", "REVISAR ANTES DE COTIZAR"]
    ];

    const text = [
        "Nueva solicitud · Guía Web ISM",
        "",
        ...rows.map(([label, value]) => `${label}: ${value}`),
        "",
        "Motivos de revisión:",
        ...technical.reviewReasons.map((reason) => `- ${reason}`),
        "",
        "Desglose técnico estándar:",
        ...technical.activities.map((item) =>
            `- ${item.code} · ${item.name} · ${item.quantity} ${item.unitLabel || "unidad"} · ${item.hours.medium.toFixed(2)} HH`
        ),
        "",
        `Fecha: ${clean(payload.submittedAt, 80) || new Date().toISOString()}`
    ].join("\n");

    const htmlRows = rows.map(([label, value]) => `
        <tr>
            <td style="padding:9px 12px;border-bottom:1px solid #dce7ef;color:#476074;font-size:12px;vertical-align:top;width:180px;"><strong>${escapeHtml(label)}</strong></td>
            <td style="padding:9px 12px;border-bottom:1px solid #dce7ef;color:#10293d;font-size:12px;vertical-align:top;">${escapeHtml(value)}</td>
        </tr>`).join("");

    const reviewHtml = technical.reviewReasons
        .map((reason) => `<li style="margin:0 0 5px;">${escapeHtml(reason)}</li>`)
        .join("");

    const activityRows = technical.activities
        .map((item) => `
            <tr>
                <td style="padding:7px 9px;border-bottom:1px solid #e7eef3;color:#0f6f91;font-size:11px;font-weight:700;white-space:nowrap;">${escapeHtml(item.code)}</td>
                <td style="padding:7px 9px;border-bottom:1px solid #e7eef3;color:#10293d;font-size:11px;">${escapeHtml(item.name)}</td>
                <td style="padding:7px 9px;border-bottom:1px solid #e7eef3;color:#476074;font-size:11px;text-align:center;">${escapeHtml(item.quantity)}</td>
                <td style="padding:7px 9px;border-bottom:1px solid #e7eef3;color:#10293d;font-size:11px;text-align:right;white-space:nowrap;">${escapeHtml(item.hours.medium.toFixed(2))} HH</td>
            </tr>`)
        .join("");

    const html = `
        <div style="margin:0;padding:24px;background:#f4f8fb;font-family:Arial,sans-serif;color:#10293d;">
            <div style="max-width:720px;margin:0 auto;background:#ffffff;border:1px solid #dbe8f0;border-radius:16px;overflow:hidden;">
                <div style="padding:22px 24px;background:#071421;color:#ffffff;">
                    <div style="color:#38bdf8;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;">ISM Developer</div>
                    <h1 style="margin:7px 0 0;font-size:22px;">Nueva solicitud · Guía Web ISM</h1>
                </div>
                <div style="padding:18px 20px 22px;">
                    <table role="presentation" style="width:100%;border-collapse:collapse;">${htmlRows}</table>

                    <div style="margin:18px 0 0;padding:13px 14px;border:1px solid #d7e9f2;border-radius:12px;background:#f7fbfd;">
                        <strong style="display:block;color:#0b607f;font-size:12px;">Revisión obligatoria antes de cotizar</strong>
                        <ul style="margin:8px 0 0;padding-left:18px;color:#476074;font-size:11px;line-height:1.45;">${reviewHtml}</ul>
                    </div>

                    <div style="margin:18px 0 0;">
                        <strong style="display:block;margin:0 0 8px;color:#10293d;font-size:12px;">Desglose técnico · escenario estándar</strong>
                        <div style="overflow-x:auto;">
                            <table role="presentation" style="width:100%;border-collapse:collapse;border:1px solid #e1ebf1;">
                                <thead>
                                    <tr style="background:#eef8fc;">
                                        <th style="padding:7px 9px;text-align:left;color:#476074;font-size:10px;">Código</th>
                                        <th style="padding:7px 9px;text-align:left;color:#476074;font-size:10px;">Actividad</th>
                                        <th style="padding:7px 9px;text-align:center;color:#476074;font-size:10px;">Cant.</th>
                                        <th style="padding:7px 9px;text-align:right;color:#476074;font-size:10px;">HH</th>
                                    </tr>
                                </thead>
                                <tbody>${activityRows}</tbody>
                            </table>
                        </div>
                    </div>

                    <p style="margin:16px 4px 0;color:#6a7f90;font-size:11px;">Fecha: ${escapeHtml(clean(payload.submittedAt, 80) || new Date().toISOString())}</p>
                </div>
            </div>
        </div>`;

    return { text, html };
}

// ============================================================================
// 07. PROCESAMIENTO DEL POST Y ENVÍO MEDIANTE RESEND
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

    const turnstileValidation = await validateTurnstile(request, payload);
    if (!turnstileValidation.ok) {
        return json({ error: turnstileValidation.error, code: turnstileValidation.code }, turnstileValidation.status);
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.PREQUOTE_FROM_EMAIL;
    const to = process.env.PREQUOTE_TO_EMAIL || "ignacio.sepulveda@ismdeveloper.cl";

    if (!apiKey || !from) {
        return json({ error: "El canal de correo todavía no está configurado." }, 503);
    }

    const technicalEstimate = buildTechnicalEstimate(payload);
    const email = buildEmail(payload, validation.contact, technicalEstimate);
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
// 08. HANDLER DE VERCEL FUNCTION
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
