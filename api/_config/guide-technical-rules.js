/**
 * Reglas de traducción · Guía Web ISM → Catálogo técnico · P6.0
 *
 * PRINCIPIO DE CALIBRACIÓN
 * ------------------------
 * La Guía Web no debe convertir una intención comercial en un servicio técnico
 * completo. El sitio base se valoriza con un núcleo WEB mínimo y cada función
 * avanzada se agrega como una extensión incremental.
 *
 * Este archivo NO contiene precios ni HH propias: solo cantidades y códigos
 * estables. Las HH siempre provienen del snapshot generado desde el Excel maestro.
 */

// ============================================================================
// 01. PERFILES INCREMENTALES
// Cada perfil agrega únicamente el trabajo adicional que introduce la función.
// Se evitan fases duplicadas de proyecto, despliegue y documentación ya cubiertas
// por el núcleo web.
// ============================================================================

export const GUIDE_ACTIVITY_PROFILES = {
    webCore: {
        label: "Núcleo web profesional",
        activities: {
            "WEB-001": 1,
            "WEB-002": 1,
            "WEB-003": 1,
            "WEB-004": 1,
            "WEB-005": 0.5,
            "WEB-006": 1,
            "WEB-007": 1,
            "WEB-008": 1,
            "WEB-015": 1,
            "WEB-021": 1,
            "WEB-022": 1.5,
            "WEB-023": 1,
            "WEB-024": 0.5,
            "WEB-026": 1,
            "WEB-027": 1,
            "WEB-028": 1,
            "WEB-030": 1,
            "WEB-031": 1,
            "WEB-032": 1,
            "WEB-033": 1,
            "WEB-034": 1
        }
    },

    booking: {
        label: "Reservas / agenda · extensión web",
        activities: {
            "APP-002": 0.5,
            "APP-003": 1,
            "APP-007": 1,
            "APP-010": 1,
            "APP-012": 1,
            "APP-013": 2,
            "APP-016": 1,
            "APP-017": 1,
            "APP-020": 1,
            "APP-027": 0.5
        }
    },

    shop: {
        label: "Tienda / pedidos · extensión web",
        activities: {
            "APP-002": 0.5,
            "APP-003": 1,
            "APP-007": 2,
            "APP-010": 2,
            "APP-012": 1,
            "APP-013": 2,
            "APP-016": 1,
            "APP-017": 1,
            "APP-020": 2,
            "APP-027": 0.5
        }
    },

    account: {
        label: "Usuarios / acceso privado · extensión",
        activities: {
            "APP-002": 0.5,
            "APP-003": 1,
            "APP-004": 1,
            "APP-007": 1,
            "APP-010": 1,
            "APP-012": 1,
            "APP-013": 1,
            "APP-014": 1,
            "APP-015": 1,
            "APP-020": 1,
            "APP-021": 1,
            "APP-027": 0.5
        }
    },

    automation: {
        label: "Automatización · extensión",
        activities: {
            "INT-001": 1,
            "INT-004": 1,
            "INT-009": 1,
            "INT-010": 1,
            "INT-011": 1,
            "INT-013": 2,
            "INT-016": 1,
            "INT-017": 1
        }
    },

    integration: {
        label: "Integración externa · extensión",
        activities: {
            "INT-001": 1,
            "INT-002": 1,
            "INT-003": 1,
            "INT-004": 1,
            "INT-005": 1,
            "INT-006": 1,
            "INT-010": 1,
            "INT-011": 1,
            "INT-013": 2,
            "INT-015": 1,
            "INT-016": 1,
            "INT-017": 1
        }
    }
};

// ============================================================================
// 02. ACTIVIDADES WEB SEGÚN ELECCIONES EXPLÍCITAS
// Ya no se incluyen formulario, WhatsApp, redes o mapa solo por pertenecer al
// servicio WEB-01. Se agregan únicamente cuando la guía entrega una señal clara.
// ============================================================================

export const GUIDE_WEB_ACTIVITY_RULES = {
    content: {
        services: ["WEB-010"],
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
        whatsapp: ["WEB-017"],
        maps: ["WEB-019"]
    },
    acceptedSuggestions: {
        "portfolio-gallery": ["WEB-011"],
        faq: ["WEB-013"],
        "contact-channel": ["WEB-014", "WEB-020"],
        "local-presence": ["WEB-019"],
        measurement: ["WEB-029"]
    }
};

// ============================================================================
// 03. SECCIONES WEB ESTÁNDAR
// Varias elecciones simples reutilizan WEB-009. Se contabilizan como cantidad
// de secciones, no como actividades técnicas diferentes.
// ============================================================================

export const GUIDE_STANDARD_SECTION_RULES = {
    contentIds: ["prices", "about", "team"],
    acceptedSuggestionIds: ["professional-profile", "delivery-info"],
    availabilitySuggestionId: "availability",
    activityCode: "WEB-009"
};

// ============================================================================
// 04. REFERENCIAS DE SERVICIO
// Se conservan como metadatos estables para validaciones y futuras reglas.
// ============================================================================

export const GUIDE_SERVICE_RULES = {
    baseWebService: "WEB-01",
    applicationService: "APP-01",
    integrationService: "INT-01"
};
