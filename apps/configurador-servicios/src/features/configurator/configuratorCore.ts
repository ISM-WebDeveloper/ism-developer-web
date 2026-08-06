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
}

export interface ConfiguratorTotals {
  services: CatalogService[];
  technical: number;
  activities: number;
  contingency: number;
  commercial: number;
}

interface CalculateConfiguratorTotalsOptions<
  TState extends BaseConfiguratorState,
> {
  selectedServices: CatalogService[];
  state: TState;
  contingencyRate: number;
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
  getQuantity,
}: CalculateConfiguratorTotalsOptions<TState>): ConfiguratorTotals {
  let technical = 0;
  let activities = 0;

  selectedServices.forEach((service) => {
    const quantity = getQuantity(service);

    technical += getServiceHours(service, state) * quantity;
    activities += getServiceActivityCount(service, state) * quantity;
  });

  return {
    services: selectedServices,
    technical,
    activities,
    contingency: technical * contingencyRate,
    commercial: technical * (1 + contingencyRate),
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
