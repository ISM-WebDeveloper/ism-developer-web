// ==================================================
// IMPORTACIONES
// ==================================================

import { useEffect, useState } from "react";
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
  const [mobileActionsHidden, setMobileActionsHidden] = useState(false);

  useEffect(() => {
    const scrollContainer = document.querySelector<HTMLElement>(".ibm-configurator");

    if (!scrollContainer) {
      return;
    }

    const container = scrollContainer;
    let lastScrollTop = container.scrollTop;

    function handleScroll() {
      const currentScrollTop = container.scrollTop;
      const delta = currentScrollTop - lastScrollTop;

      if (currentScrollTop < 96) {
        setMobileActionsHidden(false);
      } else if (delta > 8) {
        setMobileActionsHidden(true);
      } else if (delta < -8) {
        setMobileActionsHidden(false);
      }

      lastScrollTop = currentScrollTop;
    }

    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

      <nav
        aria-label="Acciones rápidas del configurador"
        className={`mobile-action-dock${mobileActionsHidden ? " mobile-action-dock--hidden" : ""}`}
      >
        <a
          aria-label="Volver al sitio"
          className="mobile-action-dock__item"
          href="../#servicios"
          title="Volver al sitio"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          <span>Volver</span>
        </a>

        <button
          aria-label="Guardar configuración"
          className="mobile-action-dock__item"
          onClick={() => dispatchCatalogAction("save")}
          title="Guardar"
          type="button"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M5 4h12l2 2v14H5z" />
            <path d="M8 4v6h8V4M8 20v-6h8v6" />
          </svg>
          <span>Guardar</span>
        </button>

        <button
          aria-label="Recuperar configuración guardada"
          className="mobile-action-dock__item"
          onClick={() => dispatchCatalogAction("recover")}
          title="Recuperar"
          type="button"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M4 12a8 8 0 1 0 2.3-5.7L4 8.6" />
            <path d="M4 4v4.6h4.6" />
          </svg>
          <span>Recuperar</span>
        </button>

        <button
          aria-label="Limpiar selección"
          className="mobile-action-dock__item mobile-action-dock__item--danger"
          onClick={() => dispatchCatalogAction("clear")}
          title="Limpiar"
          type="button"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13M10 11v5M14 11v5" />
          </svg>
          <span>Limpiar</span>
        </button>
      </nav>

      <main className="main-content" id="configurator-main" tabIndex={-1}>
        <Outlet />
      </main>
    </div>
  );
}
