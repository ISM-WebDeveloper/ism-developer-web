// ==================================================
// IMPORTACIONES
// ==================================================

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import JSZip from "jszip";

// ==================================================
// CONSTANTES
// ==================================================

const CURRENT_DIR = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(CURRENT_DIR, "..");
const SOURCE_FILE = path.join(
  PROJECT_ROOT,
  "catalog",
  "Catalogo_Tecnico_Servicios_ISM_Developer_v2_1_Auditado.xlsx",
);
const OUTPUT_FILE = path.join(
  PROJECT_ROOT,
  "src",
  "data",
  "catalog",
  "generated",
  "ismServices.ts",
);
const AUDIT_FILE = path.join(
  PROJECT_ROOT,
  "catalog",
  "AUDITORIA_IMPORTACION_ISM.json",
);

const WEBSITE_ROOT = path.resolve(PROJECT_ROOT, "..", "..");
const GUIDE_OUTPUT_FILE = path.join(
  WEBSITE_ROOT,
  "api",
  "_generated",
  "ism-guide-catalog.js",
);

const REQUIRED_HEADERS = [
  "Línea de servicio",
  "Código servicio",
  "Servicio / solución",
  "Madurez",
  "Fase",
  "Código actividad",
  "Actividad / entregable",
  "Unidad",
  "Cantidad base",
  "Incluida base",
  "Obligatoria",
  "HH unitarias desde cero",
  "Reutilización",
  "Factor reutilización ISM",
  "HH unitarias configurador",
  "Complejidad",
  "Factor Inicial",
  "Factor Estándar",
  "Factor Avanzado",
  "HH Inicial",
  "HH Estándar",
  "HH Avanzado",
  "Dependencias",
  "Entregable verificable",
  "Alcance / criterio",
  "Exclusiones",
  "Estado validación",
  "Fuente / calibración",
];

const AREA_DEFINITIONS = {
  "Desarrollo e Implementación": {
    id: "desarrollo-implementacion",
    description:
      "Sitios web, sistemas de gestión, integraciones y automatización de procesos.",
    order: 1,
  },
  "Mantenimiento y Evolución": {
    id: "mantenimiento-evolucion",
    description:
      "Corrección, evolución, modernización y optimización de soluciones existentes.",
    order: 2,
  },
  "Monitoreo y Observabilidad": {
    id: "monitoreo-observabilidad",
    description:
      "Disponibilidad, logs, trazabilidad, métricas, alertas y rendimiento.",
    order: 3,
  },
  "Respaldo y Continuidad": {
    id: "respaldo-continuidad",
    description:
      "Respaldos, recuperación ante desastres, retención y continuidad operacional.",
    order: 4,
  },
  Ciberseguridad: {
    id: "ciberseguridad",
    description:
      "Hardening, vulnerabilidades, identidades y preparación ante incidentes.",
    order: 5,
  },
  "Soporte y Gestión": {
    id: "soporte-gestion",
    description:
      "Mesa de ayuda, gestión ITSM, soporte evolutivo y documentación.",
    order: 6,
  },
};

const BOOLEAN_VALUES = new Set(["Sí", "No"]);
const TOLERANCE = 0.000001;

// ==================================================
// FUNCIONES XML / XLSX
// ==================================================

function decodeXml(value = "") {
  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) =>
      String.fromCodePoint(Number.parseInt(code, 16)),
    )
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&");
}

function parseAttributes(source) {
  const attributes = {};
  const expression = /([\w:.-]+)="([^"]*)"/g;
  let match;

  while ((match = expression.exec(source)) !== null) {
    attributes[match[1]] = decodeXml(match[2]);
  }

  return attributes;
}

function normalizeZipPath(target) {
  return target.replace(/^\//, "").replace(/\\/g, "/");
}

function columnIndexFromReference(reference) {
  const letters = reference.replace(/\d/g, "");
  let index = 0;

  for (const letter of letters) {
    index = index * 26 + letter.charCodeAt(0) - 64;
  }

  return index - 1;
}

function readCellValue(cellAttributes, cellBody, sharedStrings) {
  const type = cellAttributes.t;
  const inlineMatch = cellBody.match(/<(?:x:)?t[^>]*>([\s\S]*?)<\/(?:x:)?t>/);
  const valueMatch = cellBody.match(/<(?:x:)?v[^>]*>([\s\S]*?)<\/(?:x:)?v>/);
  const raw = decodeXml(inlineMatch?.[1] ?? valueMatch?.[1] ?? "");

  if (raw === "") {
    return null;
  }

  if (type === "s") {
    return sharedStrings[Number(raw)] ?? "";
  }

  if (type === "b") {
    return raw === "1";
  }

  if (type === "str" || type === "inlineStr") {
    return raw;
  }

  const number = Number(raw);
  return Number.isFinite(number) ? number : raw;
}

function parseSheetRows(xml, sharedStrings) {
  const rows = new Map();
  const rowExpression = /<(?:x:)?row\b([^>]*)>([\s\S]*?)<\/(?:x:)?row>/g;
  let rowMatch;

  while ((rowMatch = rowExpression.exec(xml)) !== null) {
    const rowAttributes = parseAttributes(rowMatch[1]);
    const rowNumber = Number(rowAttributes.r);
    const cells = [];
    const cellExpression = /<(?:x:)?c\b([^>]*?)(?:\/>|>([\s\S]*?)<\/(?:x:)?c>)/g;
    let cellMatch;

    while ((cellMatch = cellExpression.exec(rowMatch[2])) !== null) {
      const cellAttributes = parseAttributes(cellMatch[1]);
      const reference = cellAttributes.r;

      if (!reference) {
        continue;
      }

      cells[columnIndexFromReference(reference)] = readCellValue(
        cellAttributes,
        cellMatch[2] ?? "",
        sharedStrings,
      );
    }

    rows.set(rowNumber, cells);
  }

  return rows;
}

async function readWorkbookSheets(filePath) {
  const buffer = await readFile(filePath);
  const zip = await JSZip.loadAsync(buffer);
  const workbookXml = await zip.file("xl/workbook.xml")?.async("string");
  const relationshipsXml = await zip
    .file("xl/_rels/workbook.xml.rels")
    ?.async("string");
  const sharedStringsXml = await zip
    .file("xl/sharedStrings.xml")
    ?.async("string");

  if (!workbookXml || !relationshipsXml) {
    throw new Error("El archivo no contiene una estructura XLSX válida.");
  }

  const relationshipTargets = new Map();
  const relationshipExpression = /<Relationship\b([^>]*)\/>/g;
  let relationshipMatch;

  while (
    (relationshipMatch = relationshipExpression.exec(relationshipsXml)) !== null
  ) {
    const attributes = parseAttributes(relationshipMatch[1]);
    relationshipTargets.set(attributes.Id, normalizeZipPath(attributes.Target));
  }

  const sharedStrings = [];

  if (sharedStringsXml) {
    const stringExpression = /<(?:x:)?si\b[^>]*>([\s\S]*?)<\/(?:x:)?si>/g;
    let stringMatch;

    while ((stringMatch = stringExpression.exec(sharedStringsXml)) !== null) {
      const textParts = [...stringMatch[1].matchAll(/<(?:x:)?t[^>]*>([\s\S]*?)<\/(?:x:)?t>/g)];
      sharedStrings.push(
        textParts.map((part) => decodeXml(part[1])).join(""),
      );
    }
  }

  const sheets = new Map();
  const sheetExpression = /<(?:x:)?sheet\b([^>]*)\/>/g;
  let sheetMatch;

  while ((sheetMatch = sheetExpression.exec(workbookXml)) !== null) {
    const attributes = parseAttributes(sheetMatch[1]);
    const target = relationshipTargets.get(attributes["r:id"]);

    if (!target) {
      continue;
    }

    const sheetXml = await zip.file(target)?.async("string");

    if (sheetXml) {
      sheets.set(attributes.name, parseSheetRows(sheetXml, sharedStrings));
    }
  }

  return sheets;
}

// ==================================================
// FUNCIONES DE NORMALIZACIÓN
// ==================================================

function asText(value) {
  return value === null || value === undefined ? "" : String(value).trim();
}

function asNumber(value, label, rowNumber) {
  const number = Number(value);

  if (!Number.isFinite(number)) {
    throw new Error(`Fila ${rowNumber}: ${label} no es un número válido.`);
  }

  return number;
}

function slugify(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function compact(values) {
  return values.filter((value) => value && value.trim().length > 0);
}

function splitDependencies(value) {
  return compact(
    asText(value)
      .split(/[;,|]/)
      .map((item) => item.trim()),
  );
}

function nearlyEqual(left, right) {
  return Math.abs(left - right) <= TOLERANCE;
}

function getParameter(parametersRows, parameterName) {
  for (const cells of parametersRows.values()) {
    if (asText(cells[0]) === parameterName) {
      return cells[1];
    }
  }

  return null;
}

// ==================================================
// VALIDACIÓN Y TRANSFORMACIÓN
// ==================================================

function parseCatalogRows(catalogRows) {
  const headerCells = catalogRows.get(5);

  if (!headerCells) {
    throw new Error("No se encontró la fila de encabezados del Catálogo Maestro.");
  }

  const headers = headerCells.map(asText);
  const headerIndex = new Map(headers.map((header, index) => [header, index]));

  for (const requiredHeader of REQUIRED_HEADERS) {
    if (!headerIndex.has(requiredHeader)) {
      throw new Error(`Falta la columna obligatoria: ${requiredHeader}.`);
    }
  }

  const read = (cells, header) => cells[headerIndex.get(header)];
  const parsedRows = [];

  for (const [rowNumber, cells] of [...catalogRows.entries()].sort(
    ([left], [right]) => left - right,
  )) {
    if (rowNumber <= 5 || !asText(read(cells, "Línea de servicio"))) {
      continue;
    }

    const included = asText(read(cells, "Incluida base"));
    const mandatory = asText(read(cells, "Obligatoria"));

    if (!BOOLEAN_VALUES.has(included)) {
      throw new Error(`Fila ${rowNumber}: Incluida base debe ser Sí o No.`);
    }

    if (!BOOLEAN_VALUES.has(mandatory)) {
      throw new Error(`Fila ${rowNumber}: Obligatoria debe ser Sí o No.`);
    }

    const quantity = asNumber(read(cells, "Cantidad base"), "Cantidad base", rowNumber);
    const configuredUnitHours = asNumber(
      read(cells, "HH unitarias configurador"),
      "HH unitarias configurador",
      rowNumber,
    );
    const initialFactor = asNumber(read(cells, "Factor Inicial"), "Factor Inicial", rowNumber);
    const standardFactor = asNumber(read(cells, "Factor Estándar"), "Factor Estándar", rowNumber);
    const advancedFactor = asNumber(read(cells, "Factor Avanzado"), "Factor Avanzado", rowNumber);

    if (quantity < 0 || configuredUnitHours < 0) {
      throw new Error(`Fila ${rowNumber}: cantidad y horas no pueden ser negativas.`);
    }

    const row = {
      rowNumber,
      line: asText(read(cells, "Línea de servicio")),
      serviceCode: asText(read(cells, "Código servicio")),
      serviceName: asText(read(cells, "Servicio / solución")),
      maturity: asText(read(cells, "Madurez")),
      phase: asText(read(cells, "Fase")),
      activityCode: asText(read(cells, "Código actividad")),
      activityName: asText(read(cells, "Actividad / entregable")),
      unit: asText(read(cells, "Unidad")),
      quantity,
      included: included === "Sí",
      mandatory: mandatory === "Sí",
      baseHours: asNumber(
        read(cells, "HH unitarias desde cero"),
        "HH unitarias desde cero",
        rowNumber,
      ),
      reuseType: asText(read(cells, "Reutilización")),
      reuseFactor: asNumber(
        read(cells, "Factor reutilización ISM"),
        "Factor reutilización ISM",
        rowNumber,
      ),
      configuredUnitHours,
      complexity: asText(read(cells, "Complejidad")),
      initialFactor,
      standardFactor,
      advancedFactor,
      workbookInitialHours: asNumber(read(cells, "HH Inicial"), "HH Inicial", rowNumber),
      workbookStandardHours: asNumber(read(cells, "HH Estándar"), "HH Estándar", rowNumber),
      workbookAdvancedHours: asNumber(read(cells, "HH Avanzado"), "HH Avanzado", rowNumber),
      dependencies: splitDependencies(read(cells, "Dependencias")),
      deliverable: asText(read(cells, "Entregable verificable")),
      scope: asText(read(cells, "Alcance / criterio")),
      exclusions: asText(read(cells, "Exclusiones")),
      validationStatus: asText(read(cells, "Estado validación")),
      calibrationSource: asText(read(cells, "Fuente / calibración")),
    };

    if (
      !row.serviceCode ||
      !row.serviceName ||
      !row.activityCode ||
      !row.activityName ||
      !row.unit
    ) {
      throw new Error(`Fila ${rowNumber}: contiene campos obligatorios vacíos.`);
    }

    const expectedInitial = row.included
      ? row.quantity * row.configuredUnitHours * row.initialFactor
      : 0;
    const expectedStandard = row.included
      ? row.quantity * row.configuredUnitHours * row.standardFactor
      : 0;
    const expectedAdvanced = row.included
      ? row.quantity * row.configuredUnitHours * row.advancedFactor
      : 0;

    if (
      !nearlyEqual(expectedInitial, row.workbookInitialHours) ||
      !nearlyEqual(expectedStandard, row.workbookStandardHours) ||
      !nearlyEqual(expectedAdvanced, row.workbookAdvancedHours)
    ) {
      throw new Error(
        `Fila ${rowNumber}: las horas calculadas no coinciden con los factores y la cantidad.`,
      );
    }

    parsedRows.push(row);
  }

  return parsedRows;
}

function validateCatalogRows(rows) {
  const activityCodes = new Set();
  const serviceDefinitions = new Map();

  for (const row of rows) {
    if (!AREA_DEFINITIONS[row.line]) {
      throw new Error(`Línea de servicio no reconocida: ${row.line}.`);
    }

    if (activityCodes.has(row.activityCode)) {
      throw new Error(`Código de actividad duplicado: ${row.activityCode}.`);
    }

    activityCodes.add(row.activityCode);

    const existingService = serviceDefinitions.get(row.serviceCode);
    const currentDefinition = [row.line, row.serviceName, row.maturity].join("|");

    if (existingService && existingService !== currentDefinition) {
      throw new Error(
        `El servicio ${row.serviceCode} tiene nombre, línea o madurez inconsistentes.`,
      );
    }

    serviceDefinitions.set(row.serviceCode, currentDefinition);
  }

  if (rows.length === 0) {
    throw new Error("El Catálogo Maestro no contiene actividades.");
  }

  return {
    activityLines: rows.length,
    serviceCodes: serviceDefinitions.size,
    uniqueActivityCodes: activityCodes.size,
  };
}

function buildCatalog(rows, version, contingencyRate) {
  const servicesByArea = new Map();

  for (const row of rows) {
    const areaDefinition = AREA_DEFINITIONS[row.line];
    const areaServices = servicesByArea.get(row.line) ?? new Map();
    const service = areaServices.get(row.serviceCode) ?? {
      id: `ism-${slugify(row.serviceCode)}`,
      code: row.serviceCode,
      name: row.serviceName,
      areaId: areaDefinition.id,
      groupLabel: row.line,
      sourceSheet: "Catalogo Maestro",
      unit: "service",
      sizeMode: "by-size",
      maturity: row.maturity,
      activities: [],
      totals: {
        activityLines: 0,
        activities: 0,
        hours: { small: 0, medium: 0, high: 0 },
      },
    };

    const initialUnitHours = row.configuredUnitHours * row.initialFactor;
    const standardUnitHours = row.configuredUnitHours * row.standardFactor;
    const advancedUnitHours = row.configuredUnitHours * row.advancedFactor;
    const quantityRule =
      row.quantity !== 1
        ? {
            unit: "custom",
            label: `Cantidad (${row.unit})`,
            baseQuantity: 1,
            defaultQuantity: row.quantity,
            minimum: 0,
            editable: true,
          }
        : undefined;

    const activity = {
      id: slugify(row.activityCode),
      code: row.activityCode,
      name: row.activityName,
      activityCount: 1,
      countMode: "line",
      defaultIncluded: row.included,
      mandatory: row.mandatory,
      phase: row.phase,
      unitLabel: row.unit,
      maturity: row.maturity,
      complexity: row.complexity,
      baseHours: row.baseHours,
      reuseType: row.reuseType,
      reuseFactor: row.reuseFactor,
      deliverable: row.deliverable || undefined,
      scope: row.scope || undefined,
      exclusions: row.exclusions || undefined,
      dependencies:
        row.dependencies.length > 0 ? row.dependencies : undefined,
      validationStatus: row.validationStatus || undefined,
      calibrationSource: row.calibrationSource || undefined,
      hours: {
        small: initialUnitHours,
        medium: standardUnitHours,
        high: advancedUnitHours,
      },
      notes: compact([
        row.phase ? `Fase: ${row.phase}` : "",
        row.unit ? `Unidad: ${row.unit}` : "",
        row.complexity ? `Complejidad: ${row.complexity}` : "",
        row.deliverable ? `Entregable: ${row.deliverable}` : "",
        row.scope ? `Alcance: ${row.scope}` : "",
        row.exclusions ? `Exclusiones: ${row.exclusions}` : "",
        row.dependencies.length > 0
          ? `Dependencias: ${row.dependencies.join(", ")}`
          : "",
        row.validationStatus
          ? `Estado de HH: ${row.validationStatus}`
          : "",
      ]),
      ...(quantityRule ? { quantityRule } : {}),
    };

    service.activities.push(activity);
    service.totals.activityLines += 1;
    service.totals.activities += 1;

    if (row.included) {
      service.totals.hours.small += initialUnitHours * row.quantity;
      service.totals.hours.medium += standardUnitHours * row.quantity;
      service.totals.hours.high += advancedUnitHours * row.quantity;
    }

    areaServices.set(row.serviceCode, service);
    servicesByArea.set(row.line, areaServices);
  }

  const areas = Object.entries(AREA_DEFINITIONS)
    .sort(([, left], [, right]) => left.order - right.order)
    .map(([lineName, definition]) => {
      const services = [...(servicesByArea.get(lineName)?.values() ?? [])];

      return {
        id: definition.id,
        name: lineName,
        description: definition.description,
        order: definition.order,
        summary: {
          serviceCodes: services.length,
          activityLines: services.reduce(
            (sum, service) => sum + service.totals.activityLines,
            0,
          ),
          activities: services.reduce(
            (sum, service) => sum + service.totals.activities,
            0,
          ),
        },
        services,
      };
    });

  return {
    id: "ism-servicios",
    name: "Servicios ISM Developer",
    shortName: "ISM Developer",
    description:
      "Configurador técnico consolidado de servicios digitales, continuidad, seguridad y soporte.",
    contingencyRate,
    catalogVersion: version,
    areas,
    summary: {
      serviceCodes: areas.reduce(
        (sum, area) => sum + area.summary.serviceCodes,
        0,
      ),
      activityLines: areas.reduce(
        (sum, area) => sum + area.summary.activityLines,
        0,
      ),
      activities: areas.reduce(
        (sum, area) => sum + area.summary.activities,
        0,
      ),
    },
    sizeDefinitions: {
      small:
        "Inicial: implementación funcional con alcance acotado y componentes conocidos.",
      medium:
        "Estándar: alcance recomendado, con validaciones, coordinación y personalización media.",
      high:
        "Avanzado: mayor personalización, integración, datos, seguridad, riesgo y ciclos de validación.",
    },
    notes: [
      `Catálogo técnico ISM Developer versión ${version}.`,
      "Las horas del documento fuente se encuentran en estado preliminar hasta ser calibradas con proyectos reales.",
      "Las actividades obligatorias no pueden excluirse cuando el servicio está seleccionado.",
      "Las actividades no incluidas en el alcance base comienzan desactivadas.",
    ],
  };
}

// ==================================================
// SERIALIZACIÓN
// ==================================================

function createTypescriptFile(catalog) {
  return `// ==================================================\n// IMPORTACIONES\n// ==================================================\n\nimport type { PlatformCatalog } from "../../../types/catalog";\n\n// ==================================================\n// CATÁLOGO GENERADO\n// ==================================================\n\n/**\n * Archivo generado desde Catalogo_Tecnico_Servicios_ISM_Developer_v2_1_Auditado.xlsx.\n * No editar manualmente. Modifica el Excel fuente y ejecuta npm run catalog:ism.\n */\nexport const ismServicesCatalog: PlatformCatalog = ${JSON.stringify(catalog, null, 2)};\n`;
}



function createGuideCatalogSnapshot(catalog) {
  const developmentArea = catalog.areas.find(
    (area) => area.id === "desarrollo-implementacion",
  );

  if (!developmentArea) {
    throw new Error("No se encontró el área Desarrollo e Implementación.");
  }

  const allowedServices = new Set(["WEB-01", "APP-01", "INT-01"]);
  const services = developmentArea.services
    .filter((service) => allowedServices.has(service.code))
    .map((service) => ({
      code: service.code,
      name: service.name,
      maturity: service.maturity,
      activities: service.activities.map((activity) => ({
        code: activity.code,
        name: activity.name,
        phase: activity.phase,
        unitLabel: activity.unitLabel,
        defaultIncluded: activity.defaultIncluded,
        mandatory: activity.mandatory,
        validationStatus: activity.validationStatus,
        hours: activity.hours,
        defaultQuantity: activity.quantityRule?.defaultQuantity ?? 1,
      })),
    }));

  return {
    schemaVersion: "1.0",
    catalogVersion: catalog.catalogVersion,
    contingencyRate: catalog.contingencyRate,
    area: {
      id: developmentArea.id,
      name: developmentArea.name,
      services,
    },
  };
}

function createGuideJavascriptFile(catalog) {
  const snapshot = createGuideCatalogSnapshot(catalog);

  return `/**
 * Catálogo técnico mínimo para la Guía Web ISM.
 *
 * ARCHIVO GENERADO: no editar manualmente.
 * Fuente: apps/configurador-servicios/catalog/Catalogo_Tecnico_Servicios_ISM_Developer_v2_1_Auditado.xlsx
 * Regeneración: npm --prefix apps/configurador-servicios run catalog:ism
 */
export const ismGuideTechnicalCatalog = ${JSON.stringify(snapshot, null, 2)};
`;
}

// ==================================================
// EJECUCIÓN
// ==================================================

async function main() {
  const sheets = await readWorkbookSheets(SOURCE_FILE);
  const catalogRows = sheets.get("Catalogo Maestro");
  const parameterRows = sheets.get("Parametros");

  if (!catalogRows || !parameterRows) {
    throw new Error(
      "El archivo debe contener las hojas Catalogo Maestro y Parametros.",
    );
  }

  const rows = parseCatalogRows(catalogRows);
  const validation = validateCatalogRows(rows);
  const version = asText(getParameter(parameterRows, "Versión del catálogo")) || "2.1";
  const contingencyRate = asNumber(
    getParameter(parameterRows, "Contingencia comercial"),
    "Contingencia comercial",
    9,
  );
  const catalog = buildCatalog(rows, version, contingencyRate);

  await writeFile(OUTPUT_FILE, createTypescriptFile(catalog), "utf8");

  await mkdir(path.dirname(GUIDE_OUTPUT_FILE), { recursive: true });
  await writeFile(
    GUIDE_OUTPUT_FILE,
    createGuideJavascriptFile(catalog),
    "utf8",
  );
  await writeFile(
    AUDIT_FILE,
    `${JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        source: path.relative(PROJECT_ROOT, SOURCE_FILE),
        output: path.relative(PROJECT_ROOT, OUTPUT_FILE),
        guideOutput: path.relative(WEBSITE_ROOT, GUIDE_OUTPUT_FILE),
        catalogVersion: version,
        contingencyRate,
        lines: catalog.areas.map((area) => ({
          id: area.id,
          name: area.name,
          services: area.summary.serviceCodes,
          activities: area.summary.activityLines,
        })),
        totals: validation,
      },
      null,
      2,
    )}\n`,
    "utf8",
  );

  console.log(
    `Catálogo ISM generado y sincronizado con Guía Web: ${validation.serviceCodes} servicios y ${validation.activityLines} actividades.`,
  );
}

main().catch((error) => {
  console.error("No fue posible generar el catálogo ISM.");
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
