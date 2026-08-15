/**
 * Reglas de traducción · Guía Web ISM → Catálogo técnico · v2.3
 *
 * PRINCIPIO
 * ---------
 * La guía traduce decisiones simples del prospecto a actividades técnicas.
 * Las HH, tarifa y contingencia siempre provienen del catálogo maestro v2.3.
 *
 * El catálogo v2.3 usa UNA sola HH base por actividad. No existen factores
 * Inicial/Estándar/Avanzado ni reutilización aplicada por fila.
 */

// ============================================================================
// 01. PERFILES INCREMENTALES
// Cada perfil suma únicamente el trabajo adicional que introduce la función.
// ============================================================================

export const GUIDE_ACTIVITY_PROFILES = {
    webCore: {
        label: "Núcleo web profesional",
        activities: {
            "WEB-001": 1,
            "WEB-005": 1,
            "WEB-007": 1,
            "WEB-008": 1,
            "WEB-015": 1,
            "WEB-021": 1,
            "WEB-022": 1,
            "WEB-023": 1,
            "WEB-026": 1,
            "WEB-030": 1,
            "WEB-033": 1
        }
    },

    booking: {
        label: "Reservas / agenda · extensión web",
        activities: {
            "APP-001": 0.5,
            "APP-003": 1,
            "APP-007": 1,
            "APP-010": 1,
            "APP-013": 2,
            "APP-016": 1,
            "APP-017": 1,
            "APP-020": 0.5,
            "APP-025": 0.5
        }
    },

    shop: {
        label: "Tienda / pedidos · extensión web",
        activities: {
            "APP-001": 0.5,
            "APP-003": 1,
            "APP-007": 2,
            "APP-010": 2,
            "APP-013": 2,
            "APP-016": 1,
            "APP-017": 1,
            "APP-020": 0.75,
            "APP-025": 0.5
        }
    },

    account: {
        label: "Usuarios / acceso privado · extensión",
        activities: {
            "APP-001": 0.5,
            "APP-003": 1,
            "APP-004": 1,
            "APP-007": 1,
            "APP-010": 1,
            "APP-013": 1,
            "APP-014": 1,
            "APP-015": 1,
            "APP-020": 0.75,
            "APP-025": 0.5
        }
    },

    automation: {
        label: "Automatización · extensión",
        activities: {
            "INT-001": 1,
            "INT-009": 1,
            "INT-010": 1,
            "INT-011": 1,
            "INT-013": 1,
            "INT-016": 1
        }
    },

    integration: {
        label: "Integración externa · extensión",
        activities: {
            "INT-001": 1,
            "INT-005": 1,
            "INT-006": 1,
            "INT-010": 1,
            "INT-011": 1,
            "INT-013": 1,
            "INT-016": 1
        }
    }
};

// ============================================================================
// 02. ACTIVIDADES WEB SEGÚN ELECCIONES EXPLÍCITAS
// ============================================================================

export const GUIDE_WEB_ACTIVITY_RULES = {
    content: {
        services: ["WEB-010"],
        gallery: ["WEB-011"],
        faq: ["WEB-013"]
    },
    actions: {
        whatsapp: ["WEB-017"],
        form: ["WEB-014"],
        quote: ["WEB-014"]
    },
    presence: {
        social: ["WEB-018"],
        whatsapp: ["WEB-017"],
        maps: ["WEB-019"]
    },
    acceptedSuggestions: {
        "portfolio-gallery": ["WEB-011"],
        faq: ["WEB-013"],
        "contact-channel": ["WEB-014"],
        "local-presence": ["WEB-019"],
        measurement: ["WEB-029"]
    }
};

// ============================================================================
// 03. SECCIONES WEB ESTÁNDAR
// WEB-009 se usa por cantidad: Sobre nosotros, Equipo, Precios, etc.
// ============================================================================

export const GUIDE_STANDARD_SECTION_RULES = {
    contentIds: ["prices", "about", "team"],
    acceptedSuggestionIds: ["professional-profile", "delivery-info"],
    availabilitySuggestionId: "availability",
    activityCode: "WEB-009"
};

// ============================================================================
// 04. REFERENCIAS DE SERVICIO
// ============================================================================

export const GUIDE_SERVICE_RULES = {
    baseWebService: "WEB-01",
    applicationService: "APP-01",
    integrationService: "INT-01"
};
