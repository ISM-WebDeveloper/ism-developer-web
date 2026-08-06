// ==================================================
// IMPORTACIONES
// ==================================================

import { ismServicesCatalog } from "./generated/ismServices";

import type {
  CatalogArea,
  CatalogService,
  PlatformCatalog,
} from "../../types/catalog";

// ==================================================
// REGISTRO DE CATÁLOGOS
// ==================================================

export { ismServicesCatalog };

export const platformCatalogs: PlatformCatalog[] = [ismServicesCatalog];

// ==================================================
// FUNCIONES DE CONSULTA
// ==================================================

export function getPlatformCatalog(
  platformId: string | undefined,
): PlatformCatalog | undefined {
  if (!platformId) {
    return undefined;
  }

  return platformCatalogs.find(
    (platform) => platform.id === platformId,
  );
}

export function getCatalogArea(
  catalog: PlatformCatalog,
  areaId: string | undefined,
): CatalogArea | undefined {
  if (!areaId) {
    return undefined;
  }

  return catalog.areas.find((area) => area.id === areaId);
}

export function getCatalogService(
  catalog: PlatformCatalog,
  serviceId: string | undefined,
): CatalogService | undefined {
  if (!serviceId) {
    return undefined;
  }

  return catalog.areas
    .flatMap((area) => area.services)
    .find((service) => service.id === serviceId);
}
