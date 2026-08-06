// ==================================================
// IMPORTACIONES
// ==================================================

import { Link } from "react-router-dom";

// ==================================================
// COMPONENTE PRINCIPAL
// ==================================================

export function PlatformsPage() {
  return (
    <section className="landing-hero">
      <div className="landing-hero__background" />
      <div className="landing-hero__overlay" />

      <div className="landing-hero__content">
        <div className="landing-copy">
          <span className="eyebrow">ISM Developer</span>

          <h1>
            Configura una solución según las necesidades de tu proyecto
          </h1>

          <p className="landing-copy__description">
            Selecciona servicios de desarrollo, mantenimiento,
            observabilidad, continuidad, ciberseguridad y soporte. El
            configurador calcula actividades y horas en tiempo real.
          </p>

          <div className="landing-note">
            <span className="landing-note__line" />
            <p>
              La estimación es referencial y será revisada técnicamente por
              ISM Developer antes de emitir una propuesta comercial.
            </p>
          </div>
        </div>

        <aside
          aria-labelledby="service-selector-title"
          className="floating-platform-card"
        >
          <header className="floating-platform-card__header">
            <span className="eyebrow">Catálogo técnico v2.1</span>
            <h2 id="service-selector-title">Configura tus servicios</h2>
            <p>
              Un único punto de acceso para combinar soluciones de las seis
              líneas del catálogo ISM Developer.
            </p>
          </header>

          <Link
            aria-label="Ingresar al configurador de servicios ISM Developer"
            className="platform-tile platform-tile--available"
            to="/plataformas/ism-servicios"
          >
            <span className="platform-tile__icon">ISM</span>
            <span className="platform-tile__body">
              <strong>Configurador consolidado</strong>
              <small>6 líneas · 21 servicios · 282 actividades</small>
            </span>
            <span aria-hidden="true" className="platform-tile__arrow">
              →
            </span>
          </Link>

          <div className="landing-catalog-summary">
            <span>Inicial</span>
            <span>Estándar</span>
            <span>Avanzado</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
