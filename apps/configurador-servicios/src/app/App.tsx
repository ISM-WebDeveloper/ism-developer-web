// ==================================================
// IMPORTACIONES
// ==================================================

import { Outlet } from "react-router-dom";

import { ISM_BRAND } from "../config/brand";

// ==================================================
// TIPOS
// ==================================================

type CatalogAction = "save" | "recover" | "clear";

// ==================================================
// CONSTANTES
// ==================================================

const CONFIGURATOR_ACTION_EVENT = "ism-configurator:services:action";
const BRAND_LOGO_URL = `${import.meta.env.BASE_URL}brand/ism-developer-horizontal.webp`;

// ==================================================
// FUNCIONES AUXILIARES
// ==================================================

function dispatchCatalogAction(action: CatalogAction) {
  window.dispatchEvent(
    new CustomEvent<CatalogAction>(CONFIGURATOR_ACTION_EVENT, {
      detail: action,
    }),
  );
}

// ==================================================
// APLICACIÓN PRINCIPAL
// ==================================================

export default function App() {
  return (
    <div className="application-shell">
      <a className="skip-link" href="#configurator-main">
        Saltar al contenido principal
      </a>

      <header className="main-header main-header--configurator">
        <div className="main-header__identity">
          <a
            aria-label="Volver al inicio de ISM Developer"
            className="brand"
            href="../"
          >
            <img
              alt={ISM_BRAND.name}
              className="brand__logo"
              height="255"
              src={BRAND_LOGO_URL}
              width="640"
            />
          </a>

          <div className="main-header__context">
            <h1 className="main-header__title">
              Configurador de Servicios ISM Developer
            </h1>

            <p className="main-header__subtitle">
              Selección de soluciones, actividades y estimación técnica consolidada
            </p>
          </div>
        </div>

        <div
          aria-label="Acciones del configurador"
          className="main-header__actions"
        >
          <a
            className="main-header__action-button"
            href="../#servicios"
          >
            <span aria-hidden="true">←</span>
            Volver al sitio
          </a>

          <button
            className="main-header__action-button"
            onClick={() => dispatchCatalogAction("save")}
            type="button"
          >
            Guardar
          </button>

          <button
            className="main-header__action-button"
            onClick={() => dispatchCatalogAction("recover")}
            type="button"
          >
            Recuperar
          </button>

          <button
            className="main-header__action-button main-header__action-button--danger"
            onClick={() => dispatchCatalogAction("clear")}
            type="button"
          >
            Limpiar
          </button>
        </div>
      </header>

      <main className="main-content" id="configurator-main" tabIndex={-1}>
        <Outlet />
      </main>
    </div>
  );
}
