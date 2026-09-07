// ==================================================
// IMPORTACIONES
// ==================================================

import { useEffect, useRef, useState } from "react";

// ==================================================
// TIPOS PÚBLICOS
// ==================================================

export interface ConfiguratorQuoteActivity {
  name: string;
  mandatory: boolean;
  quantityLabel: string | null;
  quantity: number | null;
  hours: number | null;
}

export interface ConfiguratorQuoteService {
  area: string;
  code: string;
  name: string;
  quantity: number;
  technicalHours: number;
  activities: ConfiguratorQuoteActivity[];
}

export interface ConfiguratorQuoteConfiguration {
  title: string;
  catalogVersion: string;
  applicationVersion: string;
  services: ConfiguratorQuoteService[];
  totals: {
    activities: number;
    services: number;
    technicalHours: number;
    commercialHours: number;
    serviceLevel: string;
  };
  warnings: string[];
}

interface ConfiguratorPrequoteModalProps {
  configuration: ConfiguratorQuoteConfiguration;
  onClose: () => void;
  open: boolean;
}

interface TurnstileApi {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      action: string;
      theme: "light" | "dark" | "auto";
      callback: (token: string) => void;
      "expired-callback": () => void;
      "error-callback": () => void;
    },
  ) => string | number;
  reset: (widgetId?: string | number) => void;
  remove?: (widgetId: string | number) => void;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

// ==================================================
// CONSTANTES
// ==================================================

const TURNSTILE_SCRIPT_URL =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

// ==================================================
// FUNCIONES AUXILIARES
// ==================================================

function formatHours(value: number): string {
  return new Intl.NumberFormat("es-CL", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  }).format(value);
}

async function waitForTurnstileApi(timeoutMs = 8_000): Promise<TurnstileApi> {
  if (window.turnstile) {
    return window.turnstile;
  }

  const existingScript = document.querySelector<HTMLScriptElement>(
    `script[src="${TURNSTILE_SCRIPT_URL}"]`,
  );

  if (!existingScript) {
    const script = document.createElement("script");
    script.src = TURNSTILE_SCRIPT_URL;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }

  const startedAt = Date.now();

  return new Promise((resolve, reject) => {
    const timer = window.setInterval(() => {
      if (window.turnstile) {
        window.clearInterval(timer);
        resolve(window.turnstile);
        return;
      }

      if (Date.now() - startedAt >= timeoutMs) {
        window.clearInterval(timer);
        reject(new Error("Turnstile no estuvo disponible a tiempo."));
      }
    }, 100);
  });
}

// ==================================================
// COMPONENTE
// ==================================================

export function ConfiguratorPrequoteModal({
  configuration,
  onClose,
  open,
}: ConfiguratorPrequoteModalProps) {
  const turnstileContainerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | number | null>(null);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [securityStatus, setSecurityStatus] = useState(
    "Preparando protección antispam…",
  );
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [submitStatusType, setSubmitStatusType] = useState<
    "" | "error" | "info" | "success"
  >("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && !submitting) {
        onClose();
      }
    }

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [onClose, open, submitting]);

  useEffect(() => {
    if (!open || sent) {
      return;
    }

    let cancelled = false;

    async function prepareTurnstile() {
      setTurnstileToken("");
      setSecurityStatus("Preparando protección antispam…");

      try {
        const configResponse = await fetch("/api/turnstile-config", {
          headers: { Accept: "application/json" },
        });
        const config = (await configResponse.json().catch(() => ({}))) as {
          siteKey?: string;
          error?: string;
        };

        if (!configResponse.ok || !config.siteKey) {
          throw new Error(
            config.error || "La verificación de seguridad no está disponible.",
          );
        }

        const turnstile = await waitForTurnstileApi();
        if (cancelled || !turnstileContainerRef.current) {
          return;
        }

        if (widgetIdRef.current !== null && turnstile.remove) {
          turnstile.remove(widgetIdRef.current);
          widgetIdRef.current = null;
        }

        widgetIdRef.current = turnstile.render(
          turnstileContainerRef.current,
          {
            sitekey: config.siteKey,
            action: "prequote",
            theme: "dark",
            callback: (token) => {
              if (cancelled) return;
              setTurnstileToken(token);
              setSecurityStatus("Verificación completada.");
            },
            "expired-callback": () => {
              if (cancelled) return;
              setTurnstileToken("");
              setSecurityStatus("La verificación venció. Complétala nuevamente.");
            },
            "error-callback": () => {
              if (cancelled) return;
              setTurnstileToken("");
              setSecurityStatus(
                "No pudimos cargar la verificación. Inténtalo nuevamente.",
              );
            },
          },
        );
      } catch (error) {
        if (cancelled) return;
        console.error("Configurador ISM · Turnstile:", error);
        setSecurityStatus(
          "La verificación de seguridad no está disponible en este momento.",
        );
      }
    }

    void prepareTurnstile();

    return () => {
      cancelled = true;
      const turnstile = window.turnstile;
      if (turnstile && widgetIdRef.current !== null && turnstile.remove) {
        try {
          turnstile.remove(widgetIdRef.current);
        } catch {
          // El widget puede haber sido retirado por el propio navegador.
        }
      }
      widgetIdRef.current = null;
    };
  }, [open, sent]);

  useEffect(() => {
    if (!open) {
      setTurnstileToken("");
      setSubmitting(false);
      setSubmitStatus("");
      setSubmitStatusType("");
      setSent(false);
      setSecurityStatus("Preparando protección antispam…");
    }
  }, [open]);

  if (!open) {
    return null;
  }

  async function submitQuote(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const honeypot = String(formData.get("website") || "").trim();

    if (honeypot) {
      setSent(true);
      return;
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const consent = formData.get("consent") === "on";

    if (name.length < 2) {
      setSubmitStatusType("error");
      setSubmitStatus("Indica un nombre válido.");
      return;
    }

    if (phone.replace(/\D/g, "").length < 8) {
      setSubmitStatusType("error");
      setSubmitStatus("Revisa el teléfono o WhatsApp ingresado.");
      return;
    }

    if (!turnstileToken) {
      setSubmitStatusType("error");
      setSubmitStatus("Completa la verificación de seguridad antes de enviar.");
      return;
    }

    const payload = {
      schemaVersion: "1.0",
      source: "configurador-servicios-ism",
      submittedAt: new Date().toISOString(),
      contact: {
        name,
        email,
        phone,
        business: "",
        consent,
      },
      configuration,
      serviceCommitment: {
        initialResponseWithinBusinessHours: 48,
      },
      security: {
        turnstileToken,
      },
    };

    setSubmitting(true);
    setSubmitStatusType("info");
    setSubmitStatus("Enviando tu configuración a ISM Developer…");

    try {
      const response = await fetch("/api/configurador-cotizacion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => ({}))) as {
        error?: string;
        code?: string;
      };

      if (!response.ok) {
        if (window.turnstile && widgetIdRef.current !== null) {
          try {
            window.turnstile.reset(widgetIdRef.current);
          } catch {
            // Si no puede resetearse, el usuario podrá reabrir el formulario.
          }
        }
        setTurnstileToken("");
        throw new Error(result.error || "No fue posible enviar la solicitud.");
      }

      setSubmitStatusType("success");
      setSubmitStatus("Solicitud enviada correctamente.");
      setSent(true);
    } catch (error) {
      console.error("Configurador ISM · envío:", error);
      setSubmitStatusType("error");
      setSubmitStatus(
        error instanceof Error
          ? error.message
          : "No pudimos enviar tu solicitud en este momento.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div
      className="ism-prequote-backdrop"
      onMouseDown={(event) => {
        if (event.currentTarget === event.target && !submitting) {
          onClose();
        }
      }}
      role="presentation"
    >
      <section
        aria-labelledby="ism-prequote-title"
        aria-modal="true"
        className="ism-prequote-modal"
        role="dialog"
      >
        <button
          aria-label="Cerrar formulario"
          className="ism-prequote-close"
          disabled={submitting}
          onClick={onClose}
          type="button"
        >
          ×
        </button>

        {sent ? (
          <div className="ism-prequote-success">
            <span aria-hidden="true" className="ism-prequote-success__icon">
              ✓
            </span>
            <p>Solicitud enviada</p>
            <h2 id="ism-prequote-title">Recibimos tu configuración.</h2>
            <span>
              ISM Developer revisará el alcance antes de contactarte dentro de
              las primeras 48 hrs hábiles.
            </span>
            <button className="ibm-btn ibm-btn--primary" onClick={onClose} type="button">
              Cerrar
            </button>
          </div>
        ) : (
          <>
            <header className="ism-prequote-header">
              <span>Configurador ISM</span>
              <h2 id="ism-prequote-title">Enviar cotización</h2>
              <p>
                Envíanos esta configuración para revisar técnicamente el alcance
                y preparar una propuesta formal.
              </p>
            </header>

            <div className="ism-prequote-summary">
              <div>
                <span>Servicios</span>
                <strong>{configuration.totals.services}</strong>
              </div>
              <div>
                <span>Actividades</span>
                <strong>{configuration.totals.activities}</strong>
              </div>
              <div>
                <span>HH aproximadas</span>
                <strong>{formatHours(configuration.totals.commercialHours)}</strong>
              </div>
            </div>

            <form className="ism-prequote-form" noValidate onSubmit={submitQuote}>
              <label>
                <span>Nombre *</span>
                <input
                  autoComplete="name"
                  maxLength={80}
                  name="name"
                  placeholder="Tu nombre"
                  required
                  type="text"
                />
              </label>

              <label>
                <span>Correo *</span>
                <input
                  autoComplete="email"
                  maxLength={120}
                  name="email"
                  placeholder="nombre@correo.cl"
                  required
                  type="email"
                />
              </label>

              <label>
                <span>Teléfono / WhatsApp *</span>
                <input
                  autoComplete="tel"
                  inputMode="tel"
                  maxLength={30}
                  name="phone"
                  placeholder="+56 9 1234 5678"
                  required
                  type="tel"
                />
              </label>

              <label aria-hidden="true" className="ism-prequote-honeypot">
                Sitio web
                <input autoComplete="off" name="website" tabIndex={-1} type="text" />
              </label>

              <label className="ism-prequote-consent">
                <input name="consent" required type="checkbox" />
                <span>
                  Acepto que ISM Developer me contacte respecto de esta
                  solicitud y he leído la{" "}
                  <a href="/privacidad.html" rel="noopener noreferrer" target="_blank">
                    política de privacidad
                  </a>
                  .
                </span>
              </label>

              <div className="ism-prequote-security">
                <div>
                  <strong>Verificación segura</strong>
                  <span>{securityStatus}</span>
                </div>
                <div ref={turnstileContainerRef} />
              </div>

              <button
                className="ibm-btn ibm-btn--primary ism-prequote-submit"
                disabled={submitting || !turnstileToken}
                type="submit"
              >
                {submitting ? "Enviando…" : "Enviar cotización"}
              </button>

              {submitStatus ? (
                <p
                  className={`ism-prequote-status${
                    submitStatusType ? ` ism-prequote-status--${submitStatusType}` : ""
                  }`}
                  role="status"
                >
                  {submitStatus}
                </p>
              ) : null}
            </form>
          </>
        )}
      </section>
    </div>
  );
}
