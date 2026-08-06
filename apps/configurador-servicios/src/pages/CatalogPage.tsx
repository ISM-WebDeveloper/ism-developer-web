// ==================================================
// IMPORTACIONES
// ==================================================

import { Navigate, useParams, useSearchParams } from "react-router-dom";

import { ismServicesEngine } from "../platforms/ism/ismServicesEngine";
import { StandardPlatformCatalogPage } from "../platforms/shared/StandardPlatformCatalogPage";

// ==================================================
// CONSTANTES
// ==================================================

const SERVICE_AREA_ALIASES: Record<string, string> = {
  "desarrollo-implementacion": "desarrollo-implementacion",
  "mantenimiento-evolucion": "mantenimiento-evolucion",
  "monitoreo-observabilidad": "monitoreo-observabilidad",
  "respaldo-continuidad": "respaldo-continuidad",
  "ciberseguridad-proteccion": "ciberseguridad",
  ciberseguridad: "ciberseguridad",
  "soporte-gestion": "soporte-gestion",
};

// ==================================================
// FUNCIONES AUXILIARES
// ==================================================

function resolveInitialAreaId(serviceSlug: string | null): string | null {
  if (!serviceSlug) {
    return null;
  }

  return SERVICE_AREA_ALIASES[serviceSlug] ?? null;
}

// ==================================================
// COMPONENTE PRINCIPAL
// ==================================================

export function CatalogPage() {
  const { platformId } = useParams();
  const [searchParams] = useSearchParams();

  if (platformId && platformId !== "ism-servicios") {
    return <Navigate replace to="/" />;
  }

  return (
    <StandardPlatformCatalogPage
      engine={ismServicesEngine}
      initialAreaId={resolveInitialAreaId(searchParams.get("servicio"))}
    />
  );
}
