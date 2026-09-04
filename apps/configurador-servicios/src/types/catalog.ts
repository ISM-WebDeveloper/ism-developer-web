export const SERVICE_SIZES = [
  "small",
  "medium",
  "high",
] as const;

export type ServiceSize =
  (typeof SERVICE_SIZES)[number];

export type CatalogAreaId =
  | "instalaciones-fisicas"
  | "hmc"
  | "power11"
  | "gpfs"
  | "hardware"
  | "vmware-dc"
  | "vmware-dm"
  | "microsoft"
  | "linux"
  | "veeam"
  | "monitoreo"
  | "redes"
  | "citrix"
  | "gestion-ingenieria"
  | "desarrollo-implementacion"
  | "mantenimiento-evolucion"
  | "monitoreo-observabilidad"
  | "respaldo-continuidad"
  | "ciberseguridad"
  | "soporte-gestion";

export type ServiceSizeMode =
  | "by-size"
  | "fixed-size"
  | "not-applicable";

export type ServiceUnit =
  | "installation"
  | "server"
  | "lpar"
  | "cluster"
  | "equipment"
  | "host"
  | "virtual-machine"
  | "service";

export type ActivityQuantityUnit =
  | "host"
  | "esxi"
  | "virtual-machine"
  | "node"
  | "site"
  | "user"
  | "web-site"
  | "job"
  | "agent"
  | "custom";

export interface CatalogActivityQuantityRule {
  unit: ActivityQuantityUnit;
  label: string;
  baseQuantity: number;
  defaultQuantity: number;
  /** Cantidad de referencia del Catálogo Maestro; no se usa como valor inicial del configurador. */
  referenceQuantity?: number;
  minimum: number;
  editable: boolean;
  includedLimit?: number;
  group?: string;
}

export interface ActivityHours {
  fixed?: number;
  small?: number;
  medium?: number;
  high?: number;
}

export interface CatalogActivity {
  id: string;
  code?: string;
  name: string;
  activityCount: number;
  countMode?: "line" | "quantity";
  defaultIncluded?: boolean;
  /** Recomendación del Catálogo Maestro; no implica selección automática. */
  recommendedIncluded?: boolean;
  mandatory?: boolean;
  phase?: string;
  unitLabel?: string;
  maturity?: string;
  complexity?: string;
  baseHours?: number;
  reuseType?: string;
  reuseFactor?: number;
  deliverable?: string;
  scope?: string;
  exclusions?: string;
  dependencies?: string[];
  validationStatus?: string;
  calibrationSource?: string;
  hours: ActivityHours;
  unavailableSizes?: Partial<
    Record<ServiceSize, string>
  >;
  notes?: string[];
  quantityRule?: CatalogActivityQuantityRule;
}

export interface CatalogServiceTotals {
  activityLines: number;
  activities: number;
  hours: ActivityHours;
}

export interface CatalogService {
  id: string;
  maturity?: string;
  code: string;
  name: string;
  areaId: CatalogAreaId;
  groupLabel: string;
  sourceSheet: string;
  unit: ServiceUnit;
  sizeMode: ServiceSizeMode;
  fixedSize?: ServiceSize;
  activities: CatalogActivity[];
  totals: CatalogServiceTotals;
  warningsBySize?: Partial<
    Record<ServiceSize, string>
  >;
}

export interface CatalogAreaSummary {
  serviceCodes: number;
  activityLines: number;
  activities: number;
}

export interface CatalogArea {
  id: CatalogAreaId;
  name: string;
  description: string;
  order: number;
  summary: CatalogAreaSummary;
  services: CatalogService[];
}

export interface PlatformCatalogSummary {
  serviceCodes: number;
  activityLines: number;
  activities: number;
}

export interface PlatformCatalog {
  id: string;
  catalogVersion?: string;
  name: string;
  shortName: string;
  description: string;
  contingencyRate: number;
  hourlyRateUF?: number;
  areas: CatalogArea[];
  summary: PlatformCatalogSummary;
  sizeDefinitions: Record<
    ServiceSize,
    string
  >;
  notes: string[];
}

export function getSizeLabel(
  size: ServiceSize,
): string {
  const labels: Record<ServiceSize, string> = {
    small: "Inicial",
    medium: "Estándar",
    high: "Avanzado",
  };

  return labels[size];
}

export function getUnitLabel(
  unit: ServiceUnit,
): string {
  const labels: Record<ServiceUnit, string> = {
    installation: "Instalación",
    server: "Servidor",
    lpar: "LPAR",
    cluster: "Clúster",
    equipment: "Equipo",
    host: "Host",
    "virtual-machine": "Máquina virtual",
    service: "Servicio",
  };

  return labels[unit];
}
