// ==================================================
// IMPORTACIONES
// ==================================================

import type {
  CatalogActivity,
  CatalogService,
  ServiceSize,
} from "../../types/catalog";
import type { SelectionSize } from "../catalog/catalogSelection";

// ==================================================
// TIPOS
// ==================================================

/**
 * Estado mínimo compartido por todos los configuradores de plataforma.
 * Cada motor puede extenderlo con campos propios sin contaminar al resto.
 */
export interface BaseConfiguratorState {
  category: ServiceSize;
  selected: Record<string, boolean>;
  quantities: Record<string, number>;
  selectedActivities: Record<string, Record<number, boolean>>;
  activityQuantities?: Record<string, Record<string, number>>;
  /**
   * Ajuste global aplicado únicamente al cierre del proyecto.
   * 1 = 100% (desarrollo base/nuevo); <1 reutilización; >1 esfuerzo extraordinario.
   */
  executionFactor: number;
}

export interface ConfiguratorTotals {
  services: CatalogService[];
  /** HH base seleccionadas directamente desde el catálogo. */
  technical: number;
  activities: number;
  /** Factor global aplicado al total, nunca a actividades individuales. */
  executionFactor: number;
  /** HH base después del factor global. */
  adjustedTechnical: number;
  /** Campos heredados para compatibilidad con reportes antiguos. */
  contingency: number;
  commercial: number;
  /** Valorización final cuando el catálogo define tarifa UF/HH. */
  hourlyRateUF: number | null;
  technicalValueUF: number | null;
  contingencyValueUF: number | null;
  finalValueUF: number | null;
}

interface CalculateConfiguratorTotalsOptions<
  TState extends BaseConfiguratorState,
> {
  selectedServices: CatalogService[];
  state: TState;
  contingencyRate: number;
  hourlyRateUF?: number;
  executionFactor?: number;
  getQuantity: (service: CatalogService) => number;
}

// ==================================================
// CONSTANTES
// ==================================================

const numberFormatter = new Intl.NumberFormat("es-CL", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

// ==================================================
// FUNCIONES AUXILIARES
// ==================================================

export function formatConfiguratorNumber(value: number): string {
  return numberFormatter.format(value);
}

export function getActivityHours(
  activity: CatalogActivity,
  category: ServiceSize,
): number | null {
  const value =
    typeof activity.hours.fixed === "number"
      ? activity.hours.fixed
      : activity.hours[category];

  return typeof value === "number" ? value : null;
}

export function getSelectionSize(
  service: CatalogService,
  category: ServiceSize,
): SelectionSize {
  return service.sizeMode === "by-size" ? category : "fixed";
}

export function getConfiguredQuantity(
  state: BaseConfiguratorState,
  serviceCode: string,
): number {
  return Math.max(1, Number(state.quantities[serviceCode] ?? 1));
}


export function getConfiguredActivityQuantity(
  state: BaseConfiguratorState,
  serviceCode: string,
  activity: CatalogActivity,
): number {
  const rule = activity.quantityRule;

  if (!rule) {
    return 1;
  }

  const storedValue =
    state.activityQuantities?.[serviceCode]?.[activity.id];
  const resolvedValue = Number(
    storedValue ?? rule.defaultQuantity,
  );

  return Math.max(
    rule.minimum,
    Number.isFinite(resolvedValue)
      ? resolvedValue
      : rule.defaultQuantity,
  );
}

export function getActivityQuantityFactor(
  state: BaseConfiguratorState,
  serviceCode: string,
  activity: CatalogActivity,
): number {
  const rule = activity.quantityRule;

  if (!rule) {
    return 1;
  }

  return (
    getConfiguredActivityQuantity(state, serviceCode, activity) /
    rule.baseQuantity
  );
}

export function isConfiguredActivityIncluded(
  state: BaseConfiguratorState,
  serviceCode: string,
  activity: CatalogActivity,
  activityIndex: number,
): boolean {
  if (activity.mandatory) {
    return true;
  }

  const configuredValue =
    state.selectedActivities[serviceCode]?.[activityIndex];

  return typeof configuredValue === "boolean"
    ? configuredValue
    : activity.defaultIncluded !== false;
}

export function getConfiguredActivityHours(
  state: BaseConfiguratorState,
  serviceCode: string,
  activity: CatalogActivity,
): number | null {
  const hours = getActivityHours(activity, state.category);

  if (hours === null) {
    return null;
  }

  return (
    hours *
    getActivityQuantityFactor(state, serviceCode, activity)
  );
}

export function isServiceApplicable(
  service: CatalogService,
  category: ServiceSize,
): boolean {
  if (service.sizeMode === "fixed-size") {
    return service.fixedSize === category;
  }

  if (service.sizeMode === "not-applicable") {
    return true;
  }

  return service.activities.some(
    (activity) => typeof activity.hours[category] === "number",
  );
}

export function getServiceHours(
  service: CatalogService,
  state: BaseConfiguratorState,
): number {
  return service.activities.reduce((sum, activity, index) => {
    const included = isConfiguredActivityIncluded(
      state,
      service.code,
      activity,
      index,
    );
    const hours = getConfiguredActivityHours(
      state,
      service.code,
      activity,
    );

    return sum + (included && hours !== null ? hours : 0);
  }, 0);
}

export function getServiceActivityCount(
  service: CatalogService,
  state: BaseConfiguratorState,
): number {
  return service.activities.reduce((sum, activity, index) => {
    const included = isConfiguredActivityIncluded(
      state,
      service.code,
      activity,
      index,
    );
    const count =
      activity.countMode === "line"
        ? activity.activityCount
        : activity.activityCount *
          getActivityQuantityFactor(state, service.code, activity);

    return sum + (included ? count : 0);
  }, 0);
}

export function matchesCatalogServiceSearch(
  service: CatalogService,
  search: string,
): boolean {
  const filter = search.trim().toLocaleLowerCase("es-CL");

  if (filter.length === 0) {
    return true;
  }

  return [
    service.code,
    service.name,
    ...service.activities.flatMap((activity) => [
      activity.name,
      ...(activity.notes ?? []),
    ]),
  ]
    .join(" ")
    .toLocaleLowerCase("es-CL")
    .includes(filter);
}

export function calculateConfiguratorTotals<
  TState extends BaseConfiguratorState,
>({
  selectedServices,
  state,
  contingencyRate,
  hourlyRateUF: optionsHourlyRateUF,
  executionFactor: optionsExecutionFactor,
  getQuantity,
}: CalculateConfiguratorTotalsOptions<TState>): ConfiguratorTotals {
  let technical = 0;
  let activities = 0;

  selectedServices.forEach((service) => {
    const quantity = getQuantity(service);

    technical += getServiceHours(service, state) * quantity;
    activities += getServiceActivityCount(service, state) * quantity;
  });

  const executionFactor = Math.max(0, optionsExecutionFactor ?? 1);
  const adjustedTechnical = technical * executionFactor;
  const resolvedHourlyRateUF =
    typeof optionsHourlyRateUF === "number" && Number.isFinite(optionsHourlyRateUF)
      ? optionsHourlyRateUF
      : null;
  const technicalValueUF =
    resolvedHourlyRateUF === null
      ? null
      : adjustedTechnical * resolvedHourlyRateUF;
  const contingencyValueUF =
    technicalValueUF === null ? null : technicalValueUF * contingencyRate;

  return {
    services: selectedServices,
    technical,
    activities,
    executionFactor,
    adjustedTechnical,
    // Compatibilidad: estas HH ya no se presentan como precio comercial.
    contingency: adjustedTechnical * contingencyRate,
    commercial: adjustedTechnical * (1 + contingencyRate),
    hourlyRateUF: resolvedHourlyRateUF,
    technicalValueUF,
    contingencyValueUF,
    finalValueUF:
      technicalValueUF === null || contingencyValueUF === null
        ? null
        : technicalValueUF + contingencyValueUF,
  };
}

// ==================================================
// EXPORTACIONES
// ==================================================

export const configuratorCategoryOrder: ServiceSize[] = [
  "small",
  "medium",
  "high",
];
