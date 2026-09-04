// ==================================================
// IMPORTACIONES
// ==================================================

import { useEffect, useMemo, useState } from "react";

import {
  createSelectionItem,
  saveCatalogSelection,
  type CatalogSelectionItem,
} from "../../features/catalog/catalogSelection";
import {
  exportCatalogReportToExcel,
  exportCatalogReportToPdf,
  type CatalogReportActivity,
  type CatalogReportData,
  type CatalogReportService,
} from "../../features/catalog/catalogReportExport";
import {
  calculateConfiguratorTotals,
  formatConfiguratorNumber,
  getActivityHours,
  getActivityQuantityFactor,
  getConfiguredActivityHours,
  getConfiguredActivityQuantity,
  getConfiguredQuantity,
  getSelectionSize,
  getServiceHours,
  isConfiguredActivityIncluded,
  isServiceApplicable,
  matchesCatalogServiceSearch,
  type ConfiguratorTotals,
} from "../../features/configurator/configuratorCore";
import type {
  CatalogArea,
  CatalogService,
} from "../../types/catalog";
import type {
  StandardCatalogAction,
  StandardConfiguratorState,
  StandardPlatformEngine,
} from "./standardPlatformEngine";
import "../../pages/CatalogPage.css";

// ==================================================
// TIPOS
// ==================================================

interface StandardPlatformCatalogPageProps {
  engine: StandardPlatformEngine;
  initialAreaId?: string | null;
}

interface ServiceModuleCardProps {
  engine: StandardPlatformEngine;
  service: CatalogService;
  state: StandardConfiguratorState;
  expanded: boolean;
  applicable: boolean;
  onToggleExpanded: () => void;
  onToggleService: (checked: boolean) => void;
  onQuantityChange: (quantity: number) => void;
  onActivityChange: (
    activityIndex: number,
    checked: boolean,
  ) => void;
  onActivityQuantityChange: (
    activityId: string,
    quantity: number,
  ) => void;
  quantity: number;
}

type ExportReviewFormat = "excel" | "pdf";

interface SummaryActivityItem {
  id: string;
  name: string;
  mandatory: boolean;
  quantityLabel: string | null;
  quantity: number | null;
  totalHours: number | null;
}

interface ServiceIconProps {
  serviceCode: string;
}

function getServiceLevel(estimatedHours: number): "Básico" | "Avanzado" | "PowerUp" {
  if (estimatedHours > 45) {
    return "PowerUp";
  }

  if (estimatedHours > 30) {
    return "Avanzado";
  }

  return "Básico";
}

function ServiceIcon({ serviceCode }: ServiceIconProps) {
  const iconName = (() => {
    const iconByService: Record<string, string> = {
      "WEB-01": "globe",
      "APP-01": "layout",
      "INT-01": "workflow",
      "MNT-01": "bug",
      "MNT-02": "sparkles",
      "MNT-03": "refresh",
      "MNT-04": "gauge",
      "MON-01": "activity",
      "MON-02": "scroll",
      "MON-03": "chart",
      "BCP-01": "database",
      "BCP-02": "shield",
      "BCP-03": "archive",
      "SEC-01": "shield",
      "SEC-02": "scan",
      "SEC-03": "key",
      "SEC-04": "siren",
      "SUP-01": "headset",
      "SUP-02": "list",
      "SUP-03": "clock",
      "SUP-04": "book",
    };

    return iconByService[serviceCode] ?? "sparkles";
  })();

  const icon = (() => {
    switch (iconName) {
      case "globe":
        return (
          <>
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
          </>
        );
      case "layout":
        return (
          <>
            <rect height="18" rx="2" width="18" x="3" y="3" />
            <path d="M3 9h18M9 21V9" />
          </>
        );
      case "workflow":
        return (
          <>
            <rect height="7" rx="2" width="7" x="3" y="3" />
            <rect height="7" rx="2" width="7" x="14" y="14" />
            <path d="M6.5 10v3a4 4 0 0 0 4 4H14M14 7h3a4 4 0 0 1 4 4v3" />
          </>
        );
      case "bug":
        return (
          <>
            <rect height="16" rx="5" width="10" x="7" y="5" />
            <path d="M8 2h8M9 2v3M15 2v3M3 13h4M17 13h4M5 7l2 2M19 7l-2 2M5 19l2-2M19 19l-2-2" />
          </>
        );
      case "refresh":
        return (
          <>
            <path d="M20 6v5h-5M4 18v-5h5" />
            <path d="M18.5 9A7 7 0 0 0 6 6.5L4 9M5.5 15A7 7 0 0 0 18 17.5l2-2.5" />
          </>
        );
      case "gauge":
        return (
          <>
            <path d="M4.93 19a10 10 0 1 1 14.14 0M12 12l4-4M7 17h10" />
          </>
        );
      case "activity":
        return <path d="M3 12h4l2-7 4 14 2-7h6" />;
      case "scroll":
        return (
          <>
            <path d="M6 3h10a2 2 0 0 1 2 2v16l-4-2-4 2-4-2-4 2V7a4 4 0 0 1 4-4Z" />
            <path d="M8 8h6M8 12h6M8 16h3" />
          </>
        );
      case "chart":
        return <path d="M4 19V9M10 19V5M16 19v-7M22 19H2" />;
      case "database":
        return (
          <>
            <ellipse cx="12" cy="5" rx="8" ry="3" />
            <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6M16 15l2 2 4-4" />
          </>
        );
      case "shield":
        return (
          <>
            <path d="M12 3 4 6v5c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10V6l-8-3Z" />
            <path d="m9 12 2 2 4-4" />
          </>
        );
      case "archive":
        return (
          <>
            <rect height="4" rx="1" width="18" x="3" y="4" />
            <path d="M5 8v12h14V8M9 12h6" />
          </>
        );
      case "scan":
        return (
          <>
            <path d="M4 7V4h3M17 4h3v3M20 17v3h-3M7 20H4v-3" />
            <circle cx="12" cy="12" r="3" />
            <path d="m14.5 14.5 2.5 2.5" />
          </>
        );
      case "key":
        return (
          <>
            <circle cx="8" cy="15" r="4" />
            <path d="m11 12 8-8M15 8l2 2M17 6l2 2" />
          </>
        );
      case "siren":
        return <path d="M6 16h12l-1-7a5 5 0 0 0-10 0l-1 7ZM4 20h16M12 2v2M3 8l2 1M21 8l-2 1" />;
      case "headset":
        return <path d="M4 13a8 8 0 0 1 16 0v5a2 2 0 0 1-2 2h-2v-7h4M4 13h4v7H6a2 2 0 0 1-2-2v-5ZM16 20c0 1-1 2-3 2h-1" />;
      case "list":
        return <path d="m4 6 2 2 4-4M4 14l2 2 4-4M13 6h7M13 14h7M4 21h16" />;
      case "clock":
        return (
          <>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
          </>
        );
      case "book":
        return <path d="M4 5a3 3 0 0 1 3-3h5v18H7a3 3 0 0 0-3 3V5ZM20 5a3 3 0 0 0-3-3h-5v18h5a3 3 0 0 1 3 3V5Z" />;
      default:
        return <path d="m12 3-1.5 4.5L6 9l4.5 1.5L12 15l1.5-4.5L18 9l-4.5-1.5L12 3ZM19 15l-.8 2.2L16 18l2.2.8L19 21l.8-2.2L22 18l-2.2-.8L19 15Z" />;
    }
  })();

  return (
    <span aria-hidden="true" className="ism-service-icon">
      <svg
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        >
          {icon}
        </g>
      </svg>
    </span>
  );
}

function ServiceModuleCard({
  engine,
  service,
  state,
  expanded,
  applicable,
  onToggleExpanded,
  onToggleService,
  onQuantityChange,
  onActivityChange,
  onActivityQuantityChange,
  quantity,
}: ServiceModuleCardProps) {
  const selected = state.selected[service.code] === true;
  const notes = engine.getServiceNotes(service);
  const editableQuantity = engine.isQuantityEditable(service);

  return (
    <article
      className={`ibm-module-card${
        applicable ? "" : " ibm-module-card--disabled"
      }${expanded ? " ibm-module-card--open" : ""}`}
    >
      <div className="ibm-module-top">
        <ServiceIcon serviceCode={service.code} />

        <input
          aria-label={`Seleccionar ${service.name}`}
          checked={selected}
          className="ibm-switch"
          disabled={!applicable}
          onChange={(event) =>
            onToggleService(event.target.checked)
          }
          type="checkbox"
        />

        <div className="ibm-module-title">
          <div className="ibm-module-title__line">
            <strong>
              {service.name}
              {notes.map((note) => (
                <span
                  className="ibm-pill ibm-pill--warn"
                  key={note}
                >
                  {note}
                </span>
              ))}
            </strong>

            {!applicable ? (
              <small>No disponible para este catálogo.</small>
            ) : null}
          </div>

          {editableQuantity ? (
            <div className="ibm-qty-wrap">
              <span className="ibm-hint">Cantidad</span>
              <input
                aria-label={`Cantidad para ${service.code}`}
                className="ibm-qty"
                disabled={!selected || !applicable}
                min="1"
                onChange={(event) =>
                  onQuantityChange(
                    Math.max(1, Number(event.target.value || 1)),
                  )
                }
                type="number"
                value={quantity}
              />
            </div>
          ) : null}
        </div>

        <div className="ibm-module-controls">
          <button
            className="ibm-details-toggle"
            onClick={onToggleExpanded}
            type="button"
          >
            {expanded
              ? "Ocultar actividades"
              : `Ver actividades (${service.activities.length})`}
          </button>

        </div>
      </div>

      {expanded ? (
        <div
          aria-label={
            service.activities.length > 5
              ? `Actividades de ${service.name}. Lista desplazable.`
              : undefined
          }
          className={`ibm-details${
            service.activities.length > 5
              ? " ibm-details--scrollable"
              : ""
          }`}
          tabIndex={service.activities.length > 5 ? 0 : undefined}
        >
          {service.activities.map((activity, index) => {
            const checked = isConfiguredActivityIncluded(
              state,
              service.code,
              activity,
              index,
            );
            const activityQuantity =
              getConfiguredActivityQuantity(
                state,
                service.code,
                activity,
              );
            const quantityRule = activity.quantityRule;
            const quantityInputId = `${service.code}-${activity.id}-quantity`;

            return (
              <div
                className={`ibm-activity-row${
                  checked ? "" : " ibm-activity-row--excluded"
                }`}
                key={activity.id}
              >
                <input
                  aria-label={`Seleccionar ${activity.name}`}
                  checked={checked}
                  className="ibm-switch"
                  disabled={!selected || !applicable || activity.mandatory}
                  onChange={(event) =>
                    onActivityChange(index, event.target.checked)
                  }
                  type="checkbox"
                />

                <div className="ibm-activity-main">
                  <div className="ibm-activity-title">
                    <span>{activity.name}</span>

                    {activity.mandatory ? (
                      <span className="ibm-pill">Obligatoria</span>
                    ) : (
                      <span className="ibm-pill ibm-pill--warn">
                        Opcional
                      </span>
                    )}
                  </div>

                  {quantityRule ? (
                    <div className="ibm-activity-quantity">
                      <label htmlFor={quantityInputId}>
                        {quantityRule.label}
                      </label>

                      {quantityRule.editable ? (
                        <input
                          aria-label={`${quantityRule.label} para ${activity.name}`}
                          className="ibm-qty ibm-qty--activity"
                          disabled={!selected || !applicable || !checked}
                          id={quantityInputId}
                          min={quantityRule.minimum}
                          onChange={(event) =>
                            onActivityQuantityChange(
                              activity.id,
                              Math.max(
                                quantityRule.minimum,
                                Number(event.target.value || quantityRule.minimum),
                              ),
                            )
                          }
                          step="1"
                          type="number"
                          value={activityQuantity}
                        />
                      ) : (
                        <strong className="ibm-activity-quantity__value">
                          {activityQuantity}
                        </strong>
                      )}
                    </div>
                  ) : null}
                </div>

              </div>
            );
          })}
        </div>
      ) : null}
    </article>
  );
}

// ==================================================
// COMPONENTE PRINCIPAL
// ==================================================

export function StandardPlatformCatalogPage({
  engine,
  initialAreaId = null,
}: StandardPlatformCatalogPageProps) {
  const catalog = engine.catalog;
  const [state, setState] = useState<StandardConfiguratorState>(
    engine.initialState,
  );
  const [expandedCodes, setExpandedCodes] = useState<Set<string>>(
    () => new Set(),
  );
  const [expandedSummaryCodes, setExpandedSummaryCodes] = useState<Set<string>>(
    () => new Set(),
  );
  const [exportReviewFormat, setExportReviewFormat] =
    useState<ExportReviewFormat | null>(null);
  const [exportingReport, setExportingReport] = useState(false);
  const [search, setSearch] = useState("");
  const [areaFilter, setAreaFilter] = useState(() =>
    initialAreaId &&
    catalog.areas.some((area) => area.id === initialAreaId)
      ? initialAreaId
      : "",
  );

  const areasById = useMemo(
    () => new Map(catalog.areas.map((area) => [area.id, area])),
    [catalog],
  );
  const services = useMemo(
    () => catalog.areas.flatMap((area) => area.services),
    [catalog],
  );
  const serviceByCode = useMemo(
    () => new Map(services.map((service) => [service.code, service])),
    [services],
  );
  const calculationState = useMemo<StandardConfiguratorState>(
    () => ({ ...state, category: "small", executionFactor: 1 }),
    [state],
  );
  const activeArea = useMemo(
    () => catalog.areas.find((area) => area.id === areaFilter) ?? null,
    [areaFilter, catalog.areas],
  );
  const visibleAreas = useMemo(
    () =>
      catalog.areas
        .filter((area) =>
          areaFilter.length === 0 ? true : area.id === areaFilter,
        )
        .map((area) => ({
          ...area,
          services: area.services.filter((service) =>
            matchesCatalogServiceSearch(service, search),
          ),
        }))
        .filter((area) => area.services.length > 0),
    [areaFilter, catalog.areas, search],
  );

  useEffect(() => {
    if (
      initialAreaId &&
      catalog.areas.some((area) => area.id === initialAreaId)
    ) {
      setAreaFilter(initialAreaId);
    }
  }, [catalog.areas, initialAreaId]);

  const configuredServices = useMemo(
    () => engine.getSelectedServices(services, calculationState),
    [calculationState, engine, services],
  );

  function quantityForSelectedService(service: CatalogService): number {
    return engine.getSelectedServiceQuantity(service, state);
  }

  const totals = useMemo<ConfiguratorTotals>(() => {
    return calculateConfiguratorTotals({
      selectedServices: configuredServices,
      state: calculationState,
      contingencyRate: catalog.contingencyRate,
      hourlyRateUF: catalog.hourlyRateUF,
      executionFactor: 1,
      getQuantity: quantityForSelectedService,
    });
  }, [
    calculationState,
    catalog.contingencyRate,
    configuredServices,
    engine,
    state,
  ]);


  const warnings = useMemo(
    () => engine.getWarnings(state),
    [engine, state],
  );

  useEffect(() => {
    if (!exportReviewFormat) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && !exportingReport) {
        setExportReviewFormat(null);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [exportReviewFormat, exportingReport]);

  useEffect(() => {
    const selection: CatalogSelectionItem[] = [];

    totals.services.forEach((service) => {
      const area = areasById.get(service.areaId);

      if (!area) {
        return;
      }

      const quantity = quantityForSelectedService(service);
      service.activities.forEach((activity, index) => {
        if (
          !isConfiguredActivityIncluded(
            calculationState,
            service.code,
            activity,
            index,
          )
        ) {
          return;
        }

        const item = createSelectionItem({
          platformId: catalog.id,
          area: area as CatalogArea,
          service,
          activity,
          size: getSelectionSize(service, "small"),
        });

        if (item) {
          selection.push({
            ...item,
            quantity:
              quantity *
              getActivityQuantityFactor(
                state,
                service.code,
                activity,
              ),
          });
        }
      });
    });

    saveCatalogSelection(selection, catalog.id);
  }, [
    areasById,
    calculationState,
    catalog.id,
    state,
    totals.services,
  ]);

  function toggleService(code: string, checked: boolean) {
    setState((current) =>
      engine.toggleService(
        current,
        code,
        checked,
        serviceByCode.get(code),
      ),
    );
  }

  function changeQuantity(code: string, quantity: number) {
    setState((current) => ({
      ...current,
      quantities: {
        ...current.quantities,
        [code]: quantity,
      },
    }));
  }

  function changeActivity(
    code: string,
    activityIndex: number,
    checked: boolean,
  ) {
    const service = serviceByCode.get(code);
    const activity = service?.activities[activityIndex];

    if (!service || !activity || (activity.mandatory && !checked)) {
      return;
    }

    setState((current) => {
      let nextState: StandardConfiguratorState = {
        ...current,
        selectedActivities: {
          ...current.selectedActivities,
          [code]: {
            ...current.selectedActivities[code],
            [activityIndex]: checked,
          },
        },
      };

      if (
        checked &&
        activity.quantityRule &&
        getConfiguredActivityQuantity(current, code, activity) === 0
      ) {
        nextState = engine.setActivityQuantity(
          nextState,
          service,
          activity.id,
          Math.max(1, activity.quantityRule.minimum),
        );
      }

      return nextState;
    });
  }

  function changeActivityQuantity(
    serviceCode: string,
    activityId: string,
    quantity: number,
  ) {
    const service = serviceByCode.get(serviceCode);

    if (!service) {
      return;
    }

    setState((current) =>
      engine.setActivityQuantity(
        current,
        service,
        activityId,
        quantity,
      ),
    );
  }

  function toggleExpanded(code: string) {
    setExpandedCodes((current) => {
      const next = new Set(current);

      if (next.has(code)) {
        next.delete(code);
      } else {
        next.add(code);
      }

      return next;
    });
  }

  function saveConfiguration() {
    localStorage.setItem(engine.storageKey, JSON.stringify(state));
    window.alert("Configuración guardada en este navegador.");
  }

  function recoverConfiguration() {
    const raw = localStorage.getItem(engine.storageKey);

    if (!raw) {
      window.alert("No existe una configuración guardada.");
      return;
    }

    const recovered = engine.parseSavedState(raw);

    if (!recovered) {
      window.alert("La configuración guardada no es válida.");
      return;
    }

    setState(recovered);
  }

  function clearConfiguration() {
    if (!window.confirm("¿Limpiar toda la selección?")) {
      return;
    }

    localStorage.removeItem(engine.storageKey);
    setState(engine.initialState);
    setExpandedCodes(new Set());
    setSearch("");
    setAreaFilter(
      initialAreaId &&
      catalog.areas.some((area) => area.id === initialAreaId)
        ? initialAreaId
        : "",
    );
  }

  useEffect(() => {
    function handleCatalogAction(event: Event) {
      const action = (event as CustomEvent<StandardCatalogAction>).detail;

      if (action === "save") {
        saveConfiguration();
        return;
      }

      if (action === "recover") {
        recoverConfiguration();
        return;
      }

      if (action === "clear") {
        clearConfiguration();
      }
    }

    window.addEventListener(engine.actionEvent, handleCatalogAction);

    return () => {
      window.removeEventListener(engine.actionEvent, handleCatalogAction);
    };
  }, [engine, state]);

  function toggleSummaryService(code: string) {
    setExpandedSummaryCodes((current) => {
      const next = new Set(current);

      if (next.has(code)) {
        next.delete(code);
      } else {
        next.add(code);
      }

      return next;
    });
  }

  function getSummaryActivities(
    service: CatalogService,
  ): SummaryActivityItem[] {
    const serviceQuantity = quantityForSelectedService(service);

    return service.activities.flatMap((activity, index) => {
      const included = isConfiguredActivityIncluded(
        calculationState,
        service.code,
        activity,
        index,
      );

      if (!included) {
        return [];
      }

      const configuredHours = getConfiguredActivityHours(
        calculationState,
        service.code,
        activity,
      );
      const activityQuantity = getConfiguredActivityQuantity(
        calculationState,
        service.code,
        activity,
      );

      return [
        {
          id: activity.id,
          name: activity.name,
          mandatory: activity.mandatory === true,
          quantityLabel: activity.quantityRule?.label ?? null,
          quantity: activity.quantityRule ? activityQuantity : null,
          totalHours:
            configuredHours === null
              ? null
              : configuredHours * serviceQuantity,
        },
      ];
    });
  }

  function getRecommendedActivities(
    service: CatalogService,
  ): SummaryActivityItem[] {
    const serviceQuantity = quantityForSelectedService(service);

    return service.activities.flatMap((activity, index) => {
      const included = isConfiguredActivityIncluded(
        calculationState,
        service.code,
        activity,
        index,
      );

      if (included) {
        return [];
      }

      const baseHours = getActivityHours(activity, "small");

      return [
        {
          id: activity.id,
          name: activity.name,
          mandatory: false,
          quantityLabel: activity.quantityRule?.label ?? null,
          quantity: activity.quantityRule?.baseQuantity ?? null,
          totalHours:
            baseHours === null ? null : baseHours * serviceQuantity,
        },
      ];
    });
  }

  function createCatalogReportData(): CatalogReportData {
    const reportServices: CatalogReportService[] = totals.services.map(
      (service) => {
        const area = areasById.get(service.areaId);
        const quantity = quantityForSelectedService(service);
        const reportActivities: CatalogReportActivity[] =
          service.activities.map((activity, index) => {
            const included = isConfiguredActivityIncluded(
              calculationState,
              service.code,
              activity,
              index,
            );
            const unitHours = getActivityHours(activity, "small");

            const activityQuantity =
              getConfiguredActivityQuantity(
                calculationState,
                service.code,
                activity,
              );
            const configuredHours =
              getConfiguredActivityHours(
                calculationState,
                service.code,
                activity,
              );

            return {
              name: activity.name,
              included,
              activityCount:
                activity.activityCount *
                getActivityQuantityFactor(
                  calculationState,
                  service.code,
                  activity,
                ),
              unitHours,
              totalHours: included
                ? configuredHours === null
                  ? null
                  : configuredHours * quantity
                : 0,
              notes: activity.notes ?? [],
              scopeQuantity: activity.quantityRule
                ? activityQuantity
                : null,
              scopeLabel: activity.quantityRule?.label ?? null,
            };
          });

        return {
          area: area?.name ?? service.groupLabel,
          code: service.code,
          name: service.name,
          category: "Base v2.3",
          unit: engine.getServiceUnit(service),
          quantity,
          technicalHours:
            getServiceHours(service, calculationState) * quantity,
          notes: engine.getServiceNotes(service),
          activities: reportActivities,
        };
      },
    );

    return {
      title: engine.report.title,
      subtitle: engine.report.subtitle,
      category: "Base v2.3",
      model: "Estimación aproximada de alcance",
      emittedAt: new Date(),
      contingencyRate: catalog.contingencyRate,
      services: reportServices,
      totals: {
        activities: totals.activities,
        technicalHours: totals.technical,
        executionFactor: totals.executionFactor,
        adjustedHours: totals.adjustedTechnical,
        hourlyRateUF: totals.hourlyRateUF ?? 0,
        technicalValueUF: totals.technicalValueUF ?? 0,
        contingencyValueUF: totals.contingencyValueUF ?? 0,
        finalValueUF: totals.finalValueUF ?? 0,
        contingencyHours: totals.contingency,
        commercialHours: totals.commercial,
        modules: totals.services.length,
      },
      notes: [
        ...engine.report.notes,
        ...warnings.map((warning) => `Advertencia: ${warning}`),
      ],
      fileNamePrefix: engine.report.fileNamePrefix,
      footerLabel: engine.report.footerLabel,
      workbookDescription: engine.report.workbookDescription,
    };
  }

  function reviewReport(format: ExportReviewFormat): void {
    if (totals.services.length === 0) {
      window.alert(
        "Selecciona al menos un servicio antes de exportar el reporte.",
      );
      return;
    }

    setExportReviewFormat(format);
  }

  async function confirmReportExport(): Promise<void> {
    if (!exportReviewFormat) {
      return;
    }

    const formatLabel = exportReviewFormat === "excel" ? "Excel" : "PDF";
    setExportingReport(true);

    try {
      const report = createCatalogReportData();

      if (exportReviewFormat === "excel") {
        await exportCatalogReportToExcel(report);
      } else {
        await exportCatalogReportToPdf(report);
      }

      setExportReviewFormat(null);
    } catch (error) {
      console.error(
        `No fue posible generar el archivo ${formatLabel}.`,
        error,
      );
      window.alert(
        `No fue posible generar el archivo ${formatLabel}. Revisa la consola para obtener más información.`,
      );
    } finally {
      setExportingReport(false);
    }
  }



  return (
    <div className="ibm-configurator">
      <div className="ibm-app">
        <main className="ibm-main">
          <section className="ism-service-context">
            <div className="ism-service-context__copy">
              <span className="ism-service-context__eyebrow">
                Línea de servicio
              </span>

              <h2>
                {activeArea?.name ?? "Servicios ISM Developer"}
              </h2>

              <p>
                {activeArea?.description ??
                  "Selecciona una línea y configura cada servicio de forma independiente."}
              </p>
            </div>

            <div className="ism-service-context__controls">
              <label className="ibm-filter-field">
                <span>Cambiar línea</span>
                <select
                  className="ibm-area-filter"
                  onChange={(event) => setAreaFilter(event.target.value)}
                  value={areaFilter}
                >
                  <option value="">Todas las líneas</option>
                  {catalog.areas.map((area) => (
                    <option key={area.id} value={area.id}>
                      {area.name}
                    </option>
                  ))}
                </select>
              </label>

              <label className="ibm-filter-field ibm-filter-field--search">
                <span>Buscar servicio o actividad</span>
                <input
                  className="ibm-search"
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Escribe para filtrar…"
                  type="search"
                  value={search}
                />
              </label>
            </div>
          </section>

          <div className="ibm-area-list">
            {visibleAreas.length > 0 ? (
              visibleAreas.map((area) => (
                <section className="ibm-area-group" key={area.id}>
                  {!activeArea ? (
                    <header className="ibm-area-group__header">
                      <div>
                        <h3>{area.name}</h3>
                        <p>{area.description}</p>
                      </div>
                      <span className="ibm-pill">
                        {area.services.length} servicios
                      </span>
                    </header>
                  ) : null}

                  <div className="ibm-module-list">
                    {area.services.map((service) => (
                      <ServiceModuleCard
                        applicable={isServiceApplicable(service, "small")}
                        engine={engine}
                        expanded={expandedCodes.has(service.code)}
                        key={service.id}
                        onActivityChange={(activityIndex, checked) =>
                          changeActivity(
                            service.code,
                            activityIndex,
                            checked,
                          )
                        }
                        onActivityQuantityChange={(activityId, quantity) =>
                          changeActivityQuantity(
                            service.code,
                            activityId,
                            quantity,
                          )
                        }
                        onQuantityChange={(quantity) =>
                          changeQuantity(service.code, quantity)
                        }
                        onToggleExpanded={() =>
                          toggleExpanded(service.code)
                        }
                        onToggleService={(checked) =>
                          toggleService(service.code, checked)
                        }
                        quantity={getConfiguredQuantity(
                          state,
                          service.code,
                        )}
                        service={service}
                        state={calculationState}
                      />
                    ))}
                  </div>
                </section>
              ))
            ) : (
              <div className="ibm-empty">
                No se encontraron servicios con los filtros actuales.
              </div>
            )}
          </div>
        </main>

        <aside className="ibm-sidebar">
          <section className="ibm-panel ibm-summary">
            <h2>Resumen de tu solución</h2>

            <div className="ism-final-value-card">
              <div className="ism-final-value-card__header">
                <div>
                  <span>Estimación de alcance</span>
                  <strong>Resumen referencial de tu configuración</strong>
                </div>
              </div>

              <div className="ibm-kpis ibm-kpis--base">
                <div className="ibm-kpi">
                  <span>Actividades</span>
                  <strong>{Math.round(totals.activities)}</strong>
                </div>
                <div className="ibm-kpi">
                  <span>Servicios</span>
                  <strong>{totals.services.length}</strong>
                </div>
                <div className="ibm-kpi">
                  <span>Nivel de servicio</span>
                  <strong>
                    {totals.services.length > 0
                      ? getServiceLevel(totals.commercial)
                      : "—"}
                  </strong>
                </div>
              </div>

              <div className="ibm-kpi ibm-kpi--total ism-final-total">
                <span>Horas estimadas aproximadas</span>
                <strong>{formatConfiguratorNumber(totals.commercial)} HH</strong>
              </div>

              <p className="ibm-footer-note">
                Estimación referencial sujeta a revisión técnica de ISM Developer.
              </p>
            </div>

            <div className="ibm-summary-list">
              {totals.services.length > 0 ? (
                totals.services.map((service) => {
                  const summaryActivities = getSummaryActivities(service);
                  const summaryExpanded = expandedSummaryCodes.has(service.code);
                  return (
                    <article
                      className={`ism-summary-service${
                        summaryExpanded ? " ism-summary-service--open" : ""
                      }`}
                      key={service.id}
                    >
                      <button
                        aria-expanded={summaryExpanded}
                        className="ism-summary-service__toggle"
                        onClick={() => toggleSummaryService(service.code)}
                        type="button"
                      >
                        <span className="ism-summary-service__copy">
                          <b>{service.name}</b>
                          <small>
                            {summaryActivities.length}{" "}
                            {summaryActivities.length === 1
                              ? "actividad seleccionada"
                              : "actividades seleccionadas"}
                          </small>
                        </span>

                        <span className="ism-summary-service__result">
                          <span
                            aria-hidden="true"
                            className="ism-summary-service__chevron"
                          >
                            +
                          </span>
                        </span>
                      </button>

                      {summaryExpanded ? (
                        <div className="ism-summary-activities">
                          {summaryActivities.map((activity) => (
                            <div
                              className="ism-summary-activity"
                              key={activity.id}
                            >
                              <div>
                                <span>{activity.name}</span>
                                <small>
                                  {activity.mandatory ? "Obligatoria" : "Seleccionada"}
                                  {activity.quantityLabel &&
                                  activity.quantity !== null
                                    ? ` · ${activity.quantityLabel}: ${activity.quantity}`
                                    : ""}
                                </small>
                              </div>

                            </div>
                          ))}
                        </div>
                      ) : null}
                    </article>
                  );
                })
              ) : (
                <div className="ibm-empty">
                  Aún no hay servicios seleccionados.
                </div>
              )}
            </div>

            <div className="ibm-warnings">
              {warnings.map((warning) => (
                <div className="ibm-warning" key={warning}>
                  {warning}
                </div>
              ))}
            </div>

            <div className="ibm-summary-actions">
              <button
                className="ibm-btn ibm-btn--primary"
                onClick={() => reviewReport("excel")}
                type="button"
              >
                Exportar Excel
              </button>

              <button
                className="ibm-btn"
                onClick={() => reviewReport("pdf")}
                type="button"
              >
                Exportar PDF
              </button>
            </div>

            <div className="ibm-footer-note">
              Las horas mostradas son aproximadas y pueden variar después de la
              revisión técnica y confirmación del alcance.
            </div>
          </section>

          <section
            aria-labelledby={`${engine.id}-app-info-title`}
            className="ibm-panel ibm-app-meta"
          >
            <h2 id={`${engine.id}-app-info-title`}>
              Información de la aplicación
            </h2>
            <div className="ibm-meta-grid">
              <div className="ibm-meta-row">
                <span>Propietario</span>
                <strong>{engine.metadata.owner}</strong>
              </div>
              <div className="ibm-meta-row">
                <span>Descripción</span>
                <strong>{engine.metadata.description}</strong>
              </div>
              <div className="ibm-meta-row">
                <span>Creación</span>
                <strong>{engine.metadata.createdAt}</strong>
              </div>
              <div className="ibm-meta-row">
                <span>Versión</span>
                <strong>
                  <span className="ibm-version-badge">
                    {engine.metadata.version}
                  </span>
                </strong>
              </div>
              <div className="ibm-meta-row">
                <span>Fuente</span>
                <strong>{engine.metadata.source}</strong>
              </div>
            </div>
          </section>
        </aside>
      </div>

      {exportReviewFormat ? (
        <div
          className="ism-export-review-backdrop"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target && !exportingReport) {
              setExportReviewFormat(null);
            }
          }}
          role="presentation"
        >
          <section
            aria-labelledby="ism-export-review-title"
            aria-modal="true"
            className="ism-export-review"
            role="dialog"
          >
            <header className="ism-export-review__header">
              <div>
                <span className="ism-export-review__eyebrow">
                  Revisión previa
                </span>
                <h2 id="ism-export-review-title">
                  Confirma el resumen antes de exportar
                </h2>
                <p>
                  Revisa los servicios, las actividades seleccionadas y las
                  recomendaciones antes de generar el archivo {exportReviewFormat ===
                  "excel" ? "Excel" : "PDF"}.
                </p>
              </div>

              <button
                aria-label="Cerrar revisión de exportación"
                className="ism-export-review__close"
                disabled={exportingReport}
                onClick={() => setExportReviewFormat(null)}
                type="button"
              >
                ×
              </button>
            </header>

            <div className="ism-export-review__body">
              <section className="ism-export-review__overview">
                <div>
                  <span>Actividades</span>
                  <strong>{Math.round(totals.activities)}</strong>
                </div>
                <div>
                  <span>Servicios</span>
                  <strong>{totals.services.length}</strong>
                </div>
                <div className="ism-export-review__commercial-total">
                  <span>Horas estimadas aproximadas</span>
                  <strong>{formatConfiguratorNumber(totals.commercial)} HH</strong>
                </div>
              </section>

              <div className="ism-export-review__services">
                {totals.services.map((service) => {
                  const selectedActivities = getSummaryActivities(service);
                  const recommendedActivities =
                    getRecommendedActivities(service);
                  return (
                    <section
                      className="ism-export-review__service"
                      key={service.id}
                    >
                      <header>
                        <div>
                          <h3>{service.name}</h3>
                          <p>
                            {selectedActivities.length} seleccionadas
                            {recommendedActivities.length > 0
                              ? ` · ${recommendedActivities.length} recomendadas`
                              : ""}
                          </p>
                        </div>
                      </header>

                      <section className="ism-export-review__activity-section">
                        <h4>Seleccionadas</h4>
                        <div className="ism-export-review__activities">
                          {selectedActivities.map((activity) => (
                            <div
                              className="ism-export-review__activity"
                              key={activity.id}
                            >
                              <div>
                                <span>{activity.name}</span>
                                <small>
                                  {activity.mandatory
                                    ? "Obligatoria"
                                    : "Seleccionada"}
                                  {activity.quantityLabel &&
                                  activity.quantity !== null
                                    ? ` · ${activity.quantityLabel}: ${activity.quantity}`
                                    : ""}
                                </small>
                              </div>
                            </div>
                          ))}
                        </div>
                      </section>

                      {recommendedActivities.length > 0 ? (
                        <section className="ism-export-review__activity-section ism-export-review__activity-section--recommended">
                          <h4>Recomendadas*</h4>
                          <div className="ism-export-review__activities">
                            {recommendedActivities.map((activity) => (
                              <div
                                className="ism-export-review__activity ism-export-review__activity--recommended"
                                key={activity.id}
                              >
                                <div>
                                  <span>{activity.name}</span>
                                  <small>
                                    No seleccionada
                                    {activity.quantityLabel &&
                                    activity.quantity !== null
                                      ? ` · ${activity.quantityLabel}: ${activity.quantity}`
                                      : ""}
                                  </small>
                                </div>
                              </div>
                            ))}
                          </div>
                        </section>
                      ) : null}
                    </section>
                  );
                })}
              </div>

              <p className="ism-export-review__recommendation-note">
                * Las recomendaciones no forman parte del alcance seleccionado.
              </p>

              {warnings.length > 0 ? (
                <div className="ism-export-review__warnings">
                  {warnings.map((warning) => (
                    <div className="ibm-warning" key={warning}>
                      {warning}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            <footer className="ism-export-review__footer">
              <button
                className="ibm-btn"
                disabled={exportingReport}
                onClick={() => setExportReviewFormat(null)}
                type="button"
              >
                Volver a revisar
              </button>

              <button
                className="ibm-btn ibm-btn--primary"
                disabled={exportingReport}
                onClick={() => {
                  void confirmReportExport();
                }}
                type="button"
              >
                {exportingReport
                  ? `Generando ${exportReviewFormat === "excel" ? "Excel" : "PDF"}…`
                  : `Confirmar y exportar ${
                      exportReviewFormat === "excel" ? "Excel" : "PDF"
                    }`}
              </button>
            </footer>
          </section>
        </div>
      ) : null}
    </div>
  );
}
