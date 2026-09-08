// ==================================================
// PRESETS DE SOLUCIONES ISM
// ==================================================

import type { BaseConfiguratorState } from "../../features/configurator/configuratorCore";
import type { PlatformCatalog } from "../../types/catalog";

interface PresetServiceSpec {
  code: string;
  optionalActivities: string[];
  activityQuantities?: Record<string, number>;
}

interface PresetDefinition {
  id: string;
  label: string;
  description: string;
  executionFactor: number;
  services: PresetServiceSpec[];
}

export interface IsmSolutionPreset {
  id: string;
  label: string;
  description: string;
  state: BaseConfiguratorState;
}

const PRODUCT_ALIASES: Record<string, string> = {
  "ism-stock-control": "ism-stock",
  "ism-gestion-control": "ism-control",
  "tool-service-hours": "ism-project",
  "tool-service-sizing": "ism-configurador",
  "tool-availability-agenda": "ism-reservas",
  "guia-web": "ism-asistente",
};

const PRESETS: Record<string, PresetDefinition> = {
  "ism-presencia-digital": {
    id: "ism-presencia-digital",
    label: "ISM Presencia Digital",
    description:
      "Base reutilizable ISM con estructura web, contenido, contacto, SEO inicial, optimización y publicación ya consideradas.",
    executionFactor: 0.32,
    services: [
      {
        code: "WEB-01",
        optionalActivities: [
          "WEB-009",
          "WEB-010",
          "WEB-014",
          "WEB-017",
          "WEB-018",
          "WEB-019",
          "WEB-023",
          "WEB-026",
          "WEB-035",
        ],
        activityQuantities: {
          "WEB-009": 3,
          "WEB-014": 1,
        },
      },
    ],
  },
  "ism-boutique": {
    id: "ism-boutique",
    label: "ISM Boutique",
    description:
      "Catálogo administrable con base de datos, roles, CRUD, dashboard, flujo comercial y carga inicial sobre una base ISM reutilizable.",
    executionFactor: 0.23,
    services: [
      {
        code: "APP-01",
        optionalActivities: [
          "APP-004",
          "APP-007",
          "APP-010",
          "APP-011",
          "APP-013",
          "APP-015",
          "APP-016",
          "APP-023",
          "APP-025",
        ],
        activityQuantities: {
          "APP-004": 2,
          "APP-007": 3,
          "APP-010": 3,
          "APP-013": 3,
          "APP-015": 2,
          "APP-016": 2,
        },
      },
    ],
  },
  "ism-reservas": {
    id: "ism-reservas",
    label: "ISM Reservas",
    description:
      "Agenda principal, servicios, disponibilidad, administración, roles, notificaciones y pruebas precargadas sobre la base de ISM Reservas.",
    executionFactor: 0.23,
    services: [
      {
        code: "APP-01",
        optionalActivities: [
          "APP-004",
          "APP-007",
          "APP-010",
          "APP-013",
          "APP-015",
          "APP-016",
          "APP-017",
          "APP-025",
        ],
        activityQuantities: {
          "APP-004": 2,
          "APP-007": 3,
          "APP-010": 3,
          "APP-013": 3,
          "APP-015": 2,
          "APP-016": 2,
        },
      },
    ],
  },
  "ism-project": {
    id: "ism-project",
    label: "ISM Project",
    description:
      "Clientes, proyectos, actividades, horas, roles, dashboard, reportes, carga inicial y UAT precargados como base de implementación.",
    executionFactor: 0.23,
    services: [
      {
        code: "APP-01",
        optionalActivities: [
          "APP-004",
          "APP-007",
          "APP-010",
          "APP-011",
          "APP-013",
          "APP-015",
          "APP-016",
          "APP-018",
          "APP-023",
          "APP-025",
        ],
        activityQuantities: {
          "APP-004": 2,
          "APP-007": 4,
          "APP-010": 4,
          "APP-013": 4,
          "APP-015": 2,
          "APP-016": 3,
        },
      },
    ],
  },
  "ism-control": {
    id: "ism-control",
    label: "ISM Control",
    description:
      "CORE administrativo, usuarios, roles, clientes, dashboard y un módulo operativo inicial precargados sobre la arquitectura reutilizable ISM.",
    executionFactor: 0.25,
    services: [
      {
        code: "APP-01",
        optionalActivities: [
          "APP-004",
          "APP-007",
          "APP-010",
          "APP-011",
          "APP-013",
          "APP-015",
          "APP-016",
          "APP-017",
          "APP-018",
          "APP-023",
          "APP-025",
        ],
        activityQuantities: {
          "APP-004": 3,
          "APP-007": 5,
          "APP-010": 5,
          "APP-013": 5,
          "APP-015": 3,
          "APP-016": 4,
        },
      },
    ],
  },
  "ism-stock": {
    id: "ism-stock",
    label: "ISM Stock",
    description:
      "Productos, bodegas, movimientos, roles, trazabilidad, dashboard, carga inicial y flujos operativos precargados sobre la base de ISM Stock.",
    executionFactor: 0.25,
    services: [
      {
        code: "APP-01",
        optionalActivities: [
          "APP-004",
          "APP-007",
          "APP-010",
          "APP-011",
          "APP-013",
          "APP-015",
          "APP-016",
          "APP-017",
          "APP-018",
          "APP-023",
          "APP-025",
        ],
        activityQuantities: {
          "APP-004": 3,
          "APP-007": 6,
          "APP-010": 6,
          "APP-013": 6,
          "APP-015": 3,
          "APP-016": 5,
        },
      },
    ],
  },
  "ism-configurador": {
    id: "ism-configurador",
    label: "ISM Configurador",
    description:
      "Modelo comercial, pantallas, reglas, CRUD, resumen y reportes precargados como punto de partida para adaptar el configurador al negocio.",
    executionFactor: 0.23,
    services: [
      {
        code: "APP-01",
        optionalActivities: [
          "APP-004",
          "APP-007",
          "APP-010",
          "APP-011",
          "APP-013",
          "APP-015",
          "APP-016",
          "APP-018",
          "APP-025",
        ],
        activityQuantities: {
          "APP-004": 2,
          "APP-007": 4,
          "APP-010": 3,
          "APP-013": 3,
          "APP-015": 2,
          "APP-016": 4,
        },
      },
    ],
  },
  "ism-asistente": {
    id: "ism-asistente",
    label: "ISM Asistente",
    description:
      "Flujo guiado, pantallas, reglas de decisión, recomendación, notificación y UAT precargados sobre la base reutilizable del asistente.",
    executionFactor: 0.28,
    services: [
      {
        code: "APP-01",
        optionalActivities: [
          "APP-007",
          "APP-016",
          "APP-017",
          "APP-025",
        ],
        activityQuantities: {
          "APP-007": 3,
          "APP-016": 4,
        },
      },
    ],
  },
};

function normalizeProductId(productId: string | null): string | null {
  if (!productId) {
    return null;
  }

  return PRODUCT_ALIASES[productId] ?? productId;
}

export function createIsmSolutionPreset(
  productId: string | null,
  catalog: PlatformCatalog,
): IsmSolutionPreset | null {
  const normalizedId = normalizeProductId(productId);

  if (!normalizedId) {
    return null;
  }

  const definition = PRESETS[normalizedId];

  if (!definition) {
    return null;
  }

  const allServices = catalog.areas.flatMap((area) => area.services);
  const selected: Record<string, boolean> = {};
  const quantities: Record<string, number> = {};
  const selectedActivities: Record<string, Record<number, boolean>> = {};
  const activityQuantities: Record<string, Record<string, number>> = {};

  definition.services.forEach((serviceSpec) => {
    const service = allServices.find(
      (candidate) => candidate.code === serviceSpec.code,
    );

    if (!service) {
      return;
    }

    selected[service.code] = true;
    quantities[service.code] = 1;

    const optionalCodes = new Set(serviceSpec.optionalActivities);
    selectedActivities[service.code] = Object.fromEntries(
      service.activities.map((activity, index) => [
        index,
        activity.mandatory === true ||
          (activity.code ? optionalCodes.has(activity.code) : false),
      ]),
    );

    const configuredQuantities: Record<string, number> = {};

    Object.entries(serviceSpec.activityQuantities ?? {}).forEach(
      ([activityCode, quantity]) => {
        const activity = service.activities.find(
          (candidate) => candidate.code === activityCode,
        );

        if (activity?.quantityRule) {
          configuredQuantities[activity.id] = Math.max(
            activity.quantityRule.minimum,
            quantity,
          );
        }
      },
    );

    if (Object.keys(configuredQuantities).length > 0) {
      activityQuantities[service.code] = configuredQuantities;
    }
  });

  return {
    id: definition.id,
    label: definition.label,
    description: definition.description,
    state: {
      category: "small",
      selected,
      quantities,
      selectedActivities,
      activityQuantities,
      executionFactor: definition.executionFactor,
    },
  };
}
