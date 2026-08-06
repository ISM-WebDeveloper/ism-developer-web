// ==================================================
// IMPORTACIONES
// ==================================================

import { ismServicesCatalog } from "../../data/catalog/generated/ismServices";
import { isConfiguredActivityIncluded } from "../../features/configurator/configuratorCore";
import type { CatalogActivity, CatalogService } from "../../types/catalog";
import { createStandardPlatformEngine } from "../shared/standardPlatformEngine";

// ==================================================
// FUNCIONES AUXILIARES
// ==================================================

function getActivity(
  activityCode: string,
): { service: CatalogService; activity: CatalogActivity; index: number } | null {
  for (const area of ismServicesCatalog.areas) {
    for (const service of area.services) {
      const index = service.activities.findIndex(
        (activity) => activity.code === activityCode,
      );

      if (index >= 0) {
        return {
          service,
          activity: service.activities[index],
          index,
        };
      }
    }
  }

  return null;
}

function isActivitySelected(
  state: Parameters<typeof isConfiguredActivityIncluded>[0],
  activityCode: string,
): boolean {
  const target = getActivity(activityCode);

  if (!target || state.selected[target.service.code] !== true) {
    return false;
  }

  return isConfiguredActivityIncluded(
    state,
    target.service.code,
    target.activity,
    target.index,
  );
}

// ==================================================
// MOTOR ISM DEVELOPER
// ==================================================

export const ismServicesEngine = createStandardPlatformEngine({
  id: "ism-servicios",
  catalog: ismServicesCatalog,
  storageKey: "ism-configurator:services:v2.2",
  actionEvent: "ism-configurator:services:action",
  categories: {
    small: {
      label: "Inicial",
      model: "Alcance funcional acotado",
      description:
        "Implementación funcional con alcance definido, componentes conocidos y menor personalización.",
    },
    medium: {
      label: "Estándar",
      model: "Alcance recomendado",
      description:
        "Configuración recomendada para la mayoría de los proyectos, con validaciones, coordinación y personalización media.",
    },
    high: {
      label: "Avanzado",
      model: "Mayor complejidad y control",
      description:
        "Mayor personalización, integraciones, datos, seguridad, riesgo técnico y ciclos de validación ampliados.",
    },
  },
  serviceSection: {
    title: "Configura tu solución",
    description:
      "Selecciona cada servicio por separado y ajusta únicamente las actividades y cantidades que necesitas.",
  },
  serviceUnitLabel: "Servicio / solución",
  quantityEditable: false,
  report: {
    title: "Configuración de Servicios ISM Developer",
    subtitle: "Estimación técnica consolidada de actividades y horas",
    fileNamePrefix: "ISM_Configuracion_Servicios",
    footerLabel: "Configurador de Servicios ISM Developer",
    workbookDescription:
      "Reporte técnico generado desde el Configurador de Servicios ISM Developer.",
    notes: [
      "El nivel de servicio se asigna automáticamente según las horas técnicas seleccionadas.",
      "Inicial corresponde a menos de 35 HH, Estándar desde 35 HH y Avanzado desde 60 HH.",
      "Las horas son referenciales y permanecen sujetas a validación técnica y comercial.",
      "Las actividades obligatorias forman parte del alcance cuando se selecciona su servicio.",
      "Las actividades opcionales no incluidas en la base deben seleccionarse expresamente.",
    ],
  },
  metadata: {
    owner: "ISM Developer",
    description:
      "Configurador técnico consolidado para dimensionar servicios digitales, continuidad, seguridad y soporte.",
    createdAt: "Agosto de 2026",
    version: `0.2.0 · Catálogo ${ismServicesCatalog.catalogVersion ?? "2.1"}`,
    source: "Catálogo Técnico ISM Developer v2.1 auditado",
  },
  warnings: (state) => {
    const warnings: string[] = [];

    if (
      isActivitySelected(state, "MNT1-007") &&
      isActivitySelected(state, "MNT1-008")
    ) {
      warnings.push(
        "MNT1-007 y MNT1-008 representan complejidades alternativas para un mismo incidente. Conserva solo una.",
      );
    }

    if (
      isActivitySelected(state, "MNT3-005") &&
      isActivitySelected(state, "MNT3-009")
    ) {
      warnings.push(
        "MNT3-009 debe agregarse únicamente cuando la actualización estándar MNT3-005 no resuelva la vulnerabilidad.",
      );
    }

    if (
      state.selected["BCP-01"] === true &&
      state.selected["BCP-02"] === true &&
      isActivitySelected(state, "BCP1-002") &&
      isActivitySelected(state, "BCP2-003")
    ) {
      warnings.push(
        "Al contratar BCP-01 y BCP-02 juntos, la definición formal de RPO/RTO de BCP2-003 reemplaza la definición básica de BCP1-002.",
      );
    }

    if (
      state.selected["SUP-01"] === true &&
      state.selected["SUP-02"] === true
    ) {
      warnings.push(
        "SUP-02 formaliza procesos, prioridades y SLA. Revisa las actividades básicas equivalentes de SUP-01 para evitar doble contabilización.",
      );
    }

    const selectedServices = ismServicesCatalog.areas
      .flatMap((area) => area.services)
      .filter((service) => state.selected[service.code] === true);

    const preliminaryActivities = selectedServices.flatMap((service) =>
      service.activities.filter(
        (activity, index) =>
          activity.validationStatus === "Preliminar" &&
          isConfiguredActivityIncluded(
            state,
            service.code,
            activity,
            index,
          ),
      ),
    );

    if (preliminaryActivities.length > 0) {
      warnings.push(
        `${preliminaryActivities.length} actividades seleccionadas aún tienen horas preliminares y requieren revisión antes de emitir una cotización definitiva.`,
      );
    }

    return warnings;
  },
});

// ==================================================
// EXPORTACIONES
// ==================================================

export const ismServiceCatalog = ismServicesCatalog;
