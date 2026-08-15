/**
 * Reglas de traducción · Guía Web ISM → Catálogo técnico
 *
 * Este archivo NO contiene HH ni precios. Solo relaciona conceptos de la guía
 * con códigos estables del catálogo técnico. Las horas siempre se leen desde
 * el snapshot generado a partir del Excel maestro.
 */

// ============================================================================
// 01. PERFILES FUNCIONALES
// Cantidades conservadoras para un primer levantamiento. El correo resultante
// siempre queda marcado como "revisar antes de cotizar".
// ============================================================================

export const GUIDE_ACTIVITY_PROFILES = {
    booking: {
        label: "Reservas / agenda",
        activities: {
            "APP-001": 1,
            "APP-002": 1,
            "APP-003": 1,
            "APP-006": 1,
            "APP-007": 2,
            "APP-012": 1,
            "APP-013": 2,
            "APP-014": 1,
            "APP-015": 1,
            "APP-016": 1,
            "APP-017": 1,
            "APP-020": 2,
            "APP-021": 1,
            "APP-022": 1,
            "APP-024": 1,
            "APP-026": 1,
            "APP-027": 1
        }
    },
    shop: {
        label: "Tienda / pedidos",
        activities: {
            "APP-001": 1,
            "APP-002": 1,
            "APP-003": 1,
            "APP-006": 1,
            "APP-007": 3,
            "APP-010": 2,
            "APP-012": 1,
            "APP-013": 3,
            "APP-016": 2,
            "APP-020": 2,
            "APP-021": 1,
            "APP-022": 1,
            "APP-024": 1,
            "APP-026": 1,
            "APP-027": 1
        }
    },
    automation: {
        label: "Automatización",
        activities: {
            "INT-001": 1,
            "INT-003": 1,
            "INT-004": 1,
            "INT-009": 1,
            "INT-010": 2,
            "INT-011": 1,
            "INT-013": 2,
            "INT-015": 1,
            "INT-016": 1,
            "INT-017": 1
        }
    }
};

// ============================================================================
// 02. ACTIVIDADES OPCIONALES DE SITIO WEB
// ============================================================================

export const GUIDE_WEB_ACTIVITY_RULES = {
    content: {
        gallery: ["WEB-011"],
        faq: ["WEB-013"]
    },
    actions: {
        whatsapp: ["WEB-017"],
        form: ["WEB-014", "WEB-020"],
        quote: ["WEB-014", "WEB-020"]
    },
    presence: {
        social: ["WEB-018"],
        maps: ["WEB-019"]
    },
    acceptedSuggestions: {
        "portfolio-gallery": ["WEB-011"],
        faq: ["WEB-013"],
        "contact-channel": ["WEB-014", "WEB-020"],
        "local-presence": ["WEB-019"],
        measurement: ["WEB-029"],
        "process-review": ["INT-001"],
        "integration-scope": ["INT-001", "INT-003"]
    }
};

// ============================================================================
// 03. SERVICIOS COMPLETOS ACTIVADOS POR FUNCIONES AVANZADAS
// ============================================================================

export const GUIDE_SERVICE_RULES = {
    baseWebService: "WEB-01",
    accountService: "APP-01",
    integrationService: "INT-01"
};
