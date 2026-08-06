// ==================================================
// IMPORTACIONES
// ==================================================

import {
  getConfiguredQuantity,
  isServiceApplicable,
  type BaseConfiguratorState,
} from "../../features/configurator/configuratorCore";
import type {
  CatalogService,
  PlatformCatalog,
  ServiceSize,
} from "../../types/catalog";

// ==================================================
// TIPOS
// ==================================================

export type StandardCatalogAction = "save" | "recover" | "clear";

export interface StandardCategoryDefinition {
  label: string;
  model: string;
  description: string;
}

export interface StandardPlatformReportDefinition {
  title: string;
  subtitle: string;
  fileNamePrefix: string;
  footerLabel: string;
  workbookDescription: string;
  notes: string[];
}

export interface StandardPlatformMetadata {
  owner: string;
  description: string;
  createdAt: string;
  version: string;
  source: string;
}

export interface StandardPlatformDefinition {
  id: string;
  catalog: PlatformCatalog;
  storageKey: string;
  actionEvent: string;
  categories: Record<ServiceSize, StandardCategoryDefinition>;
  serviceSection: {
    title: string;
    description: string;
  };
  serviceUnitLabel: string;
  quantityEditable: boolean;
  serviceUnitLabels?: Record<string, string>;
  quantityEditableByService?: Record<string, boolean>;
  report: StandardPlatformReportDefinition;
  metadata: StandardPlatformMetadata;
  serviceNotes?: Record<string, string[]>;
  warnings?: (state: BaseConfiguratorState) => string[];
}

export interface StandardPlatformEngine extends StandardPlatformDefinition {
  initialState: BaseConfiguratorState;
  getServiceUnit: (service: CatalogService) => string;
  getServiceNotes: (service: CatalogService) => string[];
  isQuantityEditable: (service: CatalogService) => boolean;
  parseSavedState: (raw: string) => BaseConfiguratorState | null;
  getSelectedServices: (
    services: CatalogService[],
    state: BaseConfiguratorState,
  ) => CatalogService[];
  getSelectedServiceQuantity: (
    service: CatalogService,
    state: BaseConfiguratorState,
  ) => number;
  getWarnings: (state: BaseConfiguratorState) => string[];
  setCategory: (
    state: BaseConfiguratorState,
    category: ServiceSize,
  ) => BaseConfiguratorState;
  toggleService: (
    state: BaseConfiguratorState,
    code: string,
    checked: boolean,
    service?: CatalogService,
  ) => BaseConfiguratorState;
  setActivityQuantity: (
    state: BaseConfiguratorState,
    service: CatalogService,
    activityId: string,
    quantity: number,
  ) => BaseConfiguratorState;
}

// ==================================================
// CONSTANTES
// ==================================================

const INITIAL_STANDARD_STATE: BaseConfiguratorState = {
  category: "small",
  selected: {},
  quantities: {},
  selectedActivities: {},
  activityQuantities: {},
};

// ==================================================
// FUNCIONES AUXILIARES
// ==================================================

function parseSavedState(raw: string): BaseConfiguratorState | null {
  try {
    const parsed = JSON.parse(raw) as Partial<BaseConfiguratorState> & {
      category?: ServiceSize | "S" | "M" | "H";
    };
    const categoryMap = {
      S: "small",
      M: "medium",
      H: "high",
    } as const;
    const rawCategory: unknown = parsed.category;
    const category =
      rawCategory === "S" || rawCategory === "M" || rawCategory === "H"
        ? categoryMap[rawCategory]
        : rawCategory;

    if (
      category !== "small" &&
      category !== "medium" &&
      category !== "high"
    ) {
      return null;
    }

    return {
      category,
      selected:
        parsed.selected && typeof parsed.selected === "object"
          ? parsed.selected
          : {},
      quantities:
        parsed.quantities && typeof parsed.quantities === "object"
          ? parsed.quantities
          : {},
      selectedActivities:
        parsed.selectedActivities &&
        typeof parsed.selectedActivities === "object"
          ? parsed.selectedActivities
          : {},
      activityQuantities:
        parsed.activityQuantities &&
        typeof parsed.activityQuantities === "object"
          ? parsed.activityQuantities
          : {},
    };
  } catch {
    return null;
  }
}

function getSelectedServices(
  services: CatalogService[],
  state: BaseConfiguratorState,
): CatalogService[] {
  return services.filter(
    (service) =>
      state.selected[service.code] === true &&
      isServiceApplicable(service, state.category),
  );
}

function toggleService(
  state: BaseConfiguratorState,
  code: string,
  checked: boolean,
  service?: CatalogService,
): BaseConfiguratorState {
  const selectedActivities = {
    ...state.selectedActivities,
  };

  if (checked && !selectedActivities[code]) {
    selectedActivities[code] = Object.fromEntries(
      (service?.activities ?? []).map((activity, index) => [
        index,
        activity.mandatory || activity.defaultIncluded !== false,
      ]),
    );
  }

  return {
    ...state,
    selected: {
      ...state.selected,
      [code]: checked,
    },
    selectedActivities,
  };
}


function setActivityQuantity(
  state: BaseConfiguratorState,
  service: CatalogService,
  activityId: string,
  quantity: number,
): BaseConfiguratorState {
  const targetActivity = service.activities.find(
    (activity) => activity.id === activityId,
  );

  if (!targetActivity?.quantityRule) {
    return state;
  }

  const resolvedQuantity = Math.max(
    targetActivity.quantityRule.minimum,
    quantity,
  );
  const nextServiceQuantities = {
    ...state.activityQuantities?.[service.code],
  };
  const group = targetActivity.quantityRule.group;

  service.activities.forEach((activity) => {
    if (
      activity.id === activityId ||
      (group && activity.quantityRule?.group === group)
    ) {
      nextServiceQuantities[activity.id] = resolvedQuantity;
    }
  });

  return {
    ...state,
    activityQuantities: {
      ...state.activityQuantities,
      [service.code]: nextServiceQuantities,
    },
  };
}

// ==================================================
// FÁBRICA DEL MOTOR ESTÁNDAR
// ==================================================

export function createStandardPlatformEngine(
  definition: StandardPlatformDefinition,
): StandardPlatformEngine {
  return {
    ...definition,
    initialState: INITIAL_STANDARD_STATE,
    getServiceUnit: (service) =>
      definition.serviceUnitLabels?.[service.code] ??
      definition.serviceUnitLabel,
    getServiceNotes: (service) =>
      definition.serviceNotes?.[service.code] ?? [],
    isQuantityEditable: (service) =>
      definition.quantityEditableByService?.[service.code] ??
      definition.quantityEditable,
    parseSavedState,
    getSelectedServices,
    getSelectedServiceQuantity: (service, state) =>
      getConfiguredQuantity(state, service.code),
    getWarnings: (state) => definition.warnings?.(state) ?? [],
    setCategory: (state, category) => ({
      ...state,
      category,
    }),
    toggleService,
    setActivityQuantity,
  };
}

// ==================================================
// EXPORTACIONES
// ==================================================

export type StandardConfiguratorState = BaseConfiguratorState;