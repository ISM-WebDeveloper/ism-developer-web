import {
  SERVICE_SIZES,
  type CatalogActivity,
  type CatalogArea,
  type CatalogService,
  type ServiceSize,
} from "../../types/catalog";

export const CATALOG_SELECTION_STORAGE_KEY =
  "st-catalog-selection-v1";

export type SelectionSize =
  | ServiceSize
  | "fixed";

export interface CatalogSelectionItem {
  key: string;
  platformId: string;
  areaId: string;
  areaName: string;
  serviceId: string;
  serviceCode: string;
  serviceName: string;
  activityId: string;
  activityName: string;
  size: SelectionSize;
  quantity: number;
  activityCount: number;
  hoursPerUnit: number;
  unit: string;
}

export interface SelectionSummary {
  lines: number;
  activities: number;
  technicalHours: number;
}

function isSelectionSize(
  value: unknown,
): value is SelectionSize {
  return (
    value === "fixed" ||
    (typeof value === "string" &&
      SERVICE_SIZES.includes(
        value as ServiceSize,
      ))
  );
}

function isCatalogSelectionItem(
  value: unknown,
): value is CatalogSelectionItem {
  if (
    typeof value !== "object" ||
    value === null
  ) {
    return false;
  }

  const item = value as Record<
    string,
    unknown
  >;

  const stringFields = [
    "key",
    "platformId",
    "areaId",
    "areaName",
    "serviceId",
    "serviceCode",
    "serviceName",
    "activityId",
    "activityName",
    "unit",
  ];

  const hasValidStrings =
    stringFields.every(
      (field) =>
        typeof item[field] ===
          "string" &&
        item[field].length > 0,
    );

  const hasValidNumbers =
    typeof item.quantity ===
      "number" &&
    Number.isFinite(item.quantity) &&
    item.quantity >= 1 &&
    typeof item.activityCount ===
      "number" &&
    Number.isFinite(
      item.activityCount,
    ) &&
    item.activityCount >= 0 &&
    typeof item.hoursPerUnit ===
      "number" &&
    Number.isFinite(
      item.hoursPerUnit,
    ) &&
    item.hoursPerUnit >= 0;

  return (
    hasValidStrings &&
    hasValidNumbers &&
    isSelectionSize(item.size)
  );
}

export function createSelectionKey(
  serviceId: string,
  activityId: string,
  size: SelectionSize,
): string {
  return [
    serviceId,
    activityId,
    size,
  ].join("::");
}

export function getActivityHours(
  activity: CatalogActivity,
  size: SelectionSize,
): number | null {
  const value =
    size === "fixed"
      ? activity.hours.fixed
      : activity.hours[size];

  return typeof value === "number"
    ? value
    : null;
}

export function createSelectionItem({
  platformId,
  area,
  service,
  activity,
  size,
}: {
  platformId: string;
  area: CatalogArea;
  service: CatalogService;
  activity: CatalogActivity;
  size: SelectionSize;
}): CatalogSelectionItem | null {
  const hoursPerUnit =
    getActivityHours(activity, size);

  if (hoursPerUnit === null) {
    return null;
  }

  return {
    key: createSelectionKey(
      service.id,
      activity.id,
      size,
    ),
    platformId,
    areaId: area.id,
    areaName: area.name,
    serviceId: service.id,
    serviceCode: service.code,
    serviceName: service.name,
    activityId: activity.id,
    activityName: activity.name,
    size,
    quantity: 1,
    activityCount: activity.activityCount,
    hoursPerUnit,
    unit: service.unit,
  };
}

export function loadCatalogSelection():
  CatalogSelectionItem[] {
  try {
    const storedValue =
      localStorage.getItem(
        CATALOG_SELECTION_STORAGE_KEY,
      );

    if (!storedValue) {
      return [];
    }

    const parsedValue: unknown =
      JSON.parse(storedValue);

    if (!Array.isArray(parsedValue)) {
      return [];
    }

    return parsedValue.filter(
      isCatalogSelectionItem,
    );
  } catch {
    return [];
  }
}

export function saveCatalogSelection(
  items: CatalogSelectionItem[],
  platformId?: string,
): void {
  const resolvedPlatformId =
    platformId ?? items[0]?.platformId;

  if (!resolvedPlatformId) {
    localStorage.setItem(
      CATALOG_SELECTION_STORAGE_KEY,
      JSON.stringify(items),
    );
    return;
  }

  const otherPlatforms = loadCatalogSelection().filter(
    (item) => item.platformId !== resolvedPlatformId,
  );

  localStorage.setItem(
    CATALOG_SELECTION_STORAGE_KEY,
    JSON.stringify([
      ...otherPlatforms,
      ...items,
    ]),
  );
}

export function calculateSelectionSummary(
  items: CatalogSelectionItem[],
): SelectionSummary {
  return items.reduce<SelectionSummary>(
    (summary, item) => ({
      lines: summary.lines + 1,
      activities:
        summary.activities +
        item.activityCount * item.quantity,
      technicalHours:
        summary.technicalHours +
        item.hoursPerUnit * item.quantity,
    }),
    {
      lines: 0,
      activities: 0,
      technicalHours: 0,
    },
  );
}
