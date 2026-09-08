// ==================================================
// IMPORTACIONES
// ==================================================

import { Navigate, useParams, useSearchParams } from "react-router-dom";

import { ismServicesEngine } from "../platforms/ism/ismServicesEngine";
import { createIsmSolutionPreset } from "../platforms/ism/ismSolutionPresets";
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


const PRODUCT_AREA_ALIASES: Record<string, string> = {
  "ism-presencia-digital": "desarrollo-implementacion",
  "ism-boutique": "desarrollo-implementacion",
  "ism-reservas": "desarrollo-implementacion",
  "ism-project": "desarrollo-implementacion",
  "ism-control": "desarrollo-implementacion",
  "ism-stock": "desarrollo-implementacion",
  "ism-configurador": "desarrollo-implementacion",
  "ism-asistente": "desarrollo-implementacion",
  "ism-stock-control": "desarrollo-implementacion",
  "ism-gestion-control": "desarrollo-implementacion",
  "tool-service-hours": "desarrollo-implementacion",
  "tool-service-sizing": "desarrollo-implementacion",
  "tool-availability-agenda": "desarrollo-implementacion",
  "guia-web": "desarrollo-implementacion",
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


function resolveProductAreaId(productId: string | null): string | null {
  if (!productId) {
    return null;
  }

  return PRODUCT_AREA_ALIASES[productId] ?? null;
}

// ==================================================
// COMPONENTE PRINCIPAL
// ==================================================

export function CatalogPage() {
  const { platformId } = useParams();
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("producto");
  const preset = createIsmSolutionPreset(
    productId,
    ismServicesEngine.catalog,
  );

  if (platformId && platformId !== "ism-servicios") {
    return <Navigate replace to="/" />;
  }

  return (
    <StandardPlatformCatalogPage
      key={preset?.id ?? productId ?? "catalogo-general"}
      engine={ismServicesEngine}
      initialAreaId={
        resolveInitialAreaId(searchParams.get("servicio")) ??
        resolveProductAreaId(productId)
      }
      initialPresetLabel={preset?.label ?? null}
      initialState={preset?.state ?? null}
    />
  );
}
