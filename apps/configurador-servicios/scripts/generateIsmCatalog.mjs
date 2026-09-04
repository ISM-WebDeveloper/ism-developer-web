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
  "Catalogo_Tecnico_Servicios_ISM_Developer_v2_3_Simplificado_LIMPIO.xlsx",
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

const TOLERANCE = 1e-9;

const REQUIRED_HEADERS = [
  "Línea de servicio",
  "Código servicio",
  "Servicio / solución",
  "Fase",
  "Código actividad",
  "Actividad / proceso",
  "Condición",
  "Unidad",
  "Cantidad base",
  "HH base / unidad",
  "Valor base UF / unidad",
  "Qué incluye",
  "Exclusiones",
  "Dependencias",
  "Estado",
];


const FIXED_QUANTITY_UNITS = new Set(["Proyecto"]);

// Actividades cuya cantidad puede repetirse aunque el catálogo parta en 1.
// La lista evita mostrar selectores inútiles en actividades que solo ocurren
// una vez por proyecto, pero permite dimensionar secciones/páginas repetibles.
const ALWAYS_EDITABLE_ACTIVITY_CODES = new Set([
  "WEB-009", // Sección estándar de contenido
  "WEB-014", // Formulario de contacto
  "WEB-016", // Página interna estándar
]);

// Códigos absorbidos por la v2.3. Si reaparecen, el catálogo fuente no está
// realmente sincronizado con la versión simplificada.
const RETIRED_ACTIVITY_CODES = new Set([
  "WEB-002", "WEB-003", "WEB-004", "WEB-006", "WEB-020", "WEB-024",
  "WEB-028", "WEB-031", "WEB-032", "WEB-034",
  "APP-002", "APP-006", "APP-021", "APP-022", "APP-026",
]);

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
  const normalized = target.replace(/^\//, "").replace(/\\/g, "/");

  // Excel guarda los targets de workbook.xml.rels relativos a /xl/.
  // Algunos exportadores escriben "/xl/worksheets/..." y Excel Desktop
  // suele escribir "worksheets/...". Aceptamos ambos formatos para que
  // el catálogo pueda editarse y guardarse normalmente en Excel sin romper
  // la sincronización automática.
  if (normalized.startsWith("xl/")) {
    return normalized;
  }

  return path.posix.normalize(path.posix.join("xl", normalized));
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

function parseCatalogRows(catalogRows, hourlyRateUF) {
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

    const condition = asText(read(cells, "Condición"));
    const quantity = asNumber(
      read(cells, "Cantidad base"),
      "Cantidad base",
      rowNumber,
    );
    const baseUnitHours = asNumber(
      read(cells, "HH base / unidad"),
      "HH base / unidad",
      rowNumber,
    );
    const workbookUnitValueUF = asNumber(
      read(cells, "Valor base UF / unidad"),
      "Valor base UF / unidad",
      rowNumber,
    );

    if (quantity < 0 || baseUnitHours < 0) {
      throw new Error(
        `Fila ${rowNumber}: cantidad y horas base no pueden ser negativas.`,
      );
    }

    const expectedUnitValueUF = baseUnitHours * hourlyRateUF;

    if (Math.abs(expectedUnitValueUF - workbookUnitValueUF) > 0.000001) {
      throw new Error(
        `Fila ${rowNumber}: Valor base UF / unidad no coincide con HH base × tarifa.`,
      );
    }

    const mandatory = condition === "Base obligatorio";
    const recommendedIncluded =
      mandatory || condition === "Base incluido";
    // Política comercial del configurador: solo las actividades obligatorias
    // parten seleccionadas. "Base incluido" queda como recomendación del
    // catálogo, pero requiere selección expresa del usuario.
    const defaultIncluded = mandatory;

    const row = {
      rowNumber,
      line: asText(read(cells, "Línea de servicio")),
      serviceCode: asText(read(cells, "Código servicio")),
      serviceName: asText(read(cells, "Servicio / solución")),
      phase: asText(read(cells, "Fase")),
      activityCode: asText(read(cells, "Código actividad")),
      activityName: asText(read(cells, "Actividad / proceso")),
      condition,
      unit: asText(read(cells, "Unidad")),
      quantity,
      baseUnitHours,
      unitValueUF: workbookUnitValueUF,
      scope: asText(read(cells, "Qué incluye")),
      exclusions: asText(read(cells, "Exclusiones")),
      dependencies: splitDependencies(read(cells, "Dependencias")),
      validationStatus: asText(read(cells, "Estado")),
      mandatory,
      defaultIncluded,
      recommendedIncluded,
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

    if (!["Base obligatorio", "Base incluido", "Opcional"].includes(condition)) {
      throw new Error(
        `Fila ${rowNumber}: Condición debe ser Base obligatorio, Base incluido u Opcional.`,
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

    if (RETIRED_ACTIVITY_CODES.has(row.activityCode)) {
      throw new Error(
        `El catálogo v2.3 contiene el código retirado ${row.activityCode}. Revisa la fuente antes de sincronizar.`,
      );
    }

    activityCodes.add(row.activityCode);

    const existingService = serviceDefinitions.get(row.serviceCode);
    const currentDefinition = [row.line, row.serviceName].join("|");

    if (existingService && existingService !== currentDefinition) {
      throw new Error(
        `El servicio ${row.serviceCode} tiene nombre o línea inconsistentes.`,
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


function resolveActivityQuantityRule(row) {
  const fixedByUnit = FIXED_QUANTITY_UNITS.has(row.unit);

  if (fixedByUnit) {
    if (!nearlyEqual(row.quantity, 1)) {
      throw new Error(
        `Fila ${row.rowNumber}: ${row.activityCode} usa unidad ${row.unit} y debe tener Cantidad base = 1.`,
      );
    }

    return undefined;
  }

  const editable =
    ALWAYS_EDITABLE_ACTIVITY_CODES.has(row.activityCode) ||
    !nearlyEqual(row.quantity, 1);

  if (!editable) {
    return undefined;
  }

  return {
    unit: "custom",
    label: `Cantidad (${row.unit})`,
    baseQuantity: 1,
    defaultQuantity: 1,
    referenceQuantity: Math.max(1, row.quantity),
    minimum: 1,
    editable: true,
  };
}

function buildCatalog(rows, version, contingencyRate, hourlyRateUF) {
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
      // v2.3 tiene una sola HH base por actividad.
      sizeMode: "not-applicable",
      activities: [],
      totals: {
        activityLines: 0,
        activities: 0,
        hours: { fixed: 0 },
      },
    };

    const quantityRule = resolveActivityQuantityRule(row);

    const activity = {
      id: slugify(row.activityCode),
      code: row.activityCode,
      name: row.activityName,
      activityCount: 1,
      countMode: "line",
      defaultIncluded: row.defaultIncluded,
      recommendedIncluded: row.recommendedIncluded,
      mandatory: row.mandatory,
      phase: row.phase,
      unitLabel: row.unit,
      baseHours: row.baseUnitHours,
      scope: row.scope || undefined,
      exclusions: row.exclusions || undefined,
      dependencies:
        row.dependencies.length > 0 ? row.dependencies : undefined,
      validationStatus: row.validationStatus || undefined,
      hours: {
        fixed: row.baseUnitHours,
      },
      notes: compact([
        row.phase ? `Fase: ${row.phase}` : "",
        row.condition ? `Condición: ${row.condition}` : "",
        row.unit ? `Unidad: ${row.unit}` : "",
        row.scope ? `Incluye: ${row.scope.replace(/^Incluye:\s*/i, "")}` : "",
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

    if (row.defaultIncluded) {
      service.totals.hours.fixed +=
        row.baseUnitHours * (quantityRule?.defaultQuantity ?? 1);
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
    hourlyRateUF,
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
    // Se mantienen las claves por compatibilidad con el motor estándar.
    // No representan factores de precio ni modifican las HH v2.3.
    sizeDefinitions: {
      small: "Base única del catálogo v2.3.",
      medium: "Base única del catálogo v2.3.",
      high: "Base única del catálogo v2.3.",
    },
    notes: [
      `Catálogo técnico ISM Developer versión ${version}.`,
      "Cada actividad posee una sola HH base. No existen factores por actividad ni escenarios Inicial/Estándar/Avanzado.",
      `Tarifa maestra: ${hourlyRateUF.toFixed(2)} UF/HH.`,
      "La reutilización o esfuerzo extraordinario se aplica como un único factor global al total del proyecto.",
      `La contingencia final del catálogo es ${Math.round(contingencyRate * 100)}% y se aplica una sola vez al final.`,
      "Las actividades obligatorias no pueden excluirse cuando el servicio está seleccionado.",
      "Las actividades opcionales comienzan desactivadas.",
    ],
  };
}


function validateQuantitySemantics(catalog) {
  const activities = catalog.areas.flatMap((area) =>
    area.services.flatMap((service) => service.activities),
  );
  const byCode = new Map(activities.map((activity) => [activity.code, activity]));

  const fixedCodes = ["WEB-005", "WEB-022", "WEB-023"];
  const editableCodes = ["WEB-009", "WEB-014", "WEB-016"];

  fixedCodes.forEach((code) => {
    if (byCode.get(code)?.quantityRule) {
      throw new Error(`${code} es una actividad única por proyecto y no debe exponer cantidad.`);
    }
  });

  editableCodes.forEach((code) => {
    const rule = byCode.get(code)?.quantityRule;
    if (!rule?.editable || rule.minimum !== 1) {
      throw new Error(`${code} debe permitir una cantidad editable desde 1.`);
    }
  });

  activities.forEach((activity) => {
    if (!activity.mandatory && activity.defaultIncluded) {
      throw new Error(
        `${activity.code ?? activity.id}: una actividad opcional no puede iniciar seleccionada.`,
      );
    }

    const rule = activity.quantityRule;
    if (
      rule &&
      (rule.minimum !== 1 ||
        rule.defaultQuantity !== 1 ||
        rule.baseQuantity !== 1)
    ) {
      throw new Error(
        `${activity.code ?? activity.id}: toda cantidad editable debe comenzar en 1.`,
      );
    }
  });
}

// ==================================================
// SERIALIZACIÓN
// ==================================================

function createTypescriptFile(catalog) {
  return `// ==================================================\n// IMPORTACIONES\n// ==================================================\n\nimport type { PlatformCatalog } from "../../../types/catalog";\n\n// ==================================================\n// CATÁLOGO GENERADO\n// ==================================================\n\n/**\n * Archivo generado desde Catalogo_Tecnico_Servicios_ISM_Developer_v2_3_Simplificado_LIMPIO.xlsx.\n * No editar manualmente. Modifica el Excel fuente y ejecuta npm run catalog:ism.\n */\nexport const ismServicesCatalog: PlatformCatalog = ${JSON.stringify(catalog, null, 2)};\n`;
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
      activities: service.activities.map((activity) => ({
        code: activity.code,
        name: activity.name,
        phase: activity.phase,
        unitLabel: activity.unitLabel,
        defaultIncluded:
          activity.recommendedIncluded ?? activity.defaultIncluded,
        mandatory: activity.mandatory,
        validationStatus: activity.validationStatus,
        baseHours: activity.hours.fixed,
        defaultQuantity:
          activity.quantityRule?.referenceQuantity ??
          activity.quantityRule?.defaultQuantity ??
          1,
      })),
    }));

  return {
    schemaVersion: "2.0",
    catalogVersion: catalog.catalogVersion,
    hourlyRateUF: catalog.hourlyRateUF,
    contingencyRate: catalog.contingencyRate,
    calculationModel: "single-base-hours-final-adjustments",
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
 * Fuente: apps/configurador-servicios/catalog/Catalogo_Tecnico_Servicios_ISM_Developer_v2_3_Simplificado_LIMPIO.xlsx
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

  const version =
    asText(getParameter(parameterRows, "Versión del catálogo")) || "2.3";
  const hourlyRateUF = asNumber(
    getParameter(parameterRows, "Tarifa base"),
    "Tarifa base",
    9,
  );
  const contingencyRate = asNumber(
    getParameter(parameterRows, "Contingencia final"),
    "Contingencia final",
    10,
  );

  const rows = parseCatalogRows(catalogRows, hourlyRateUF);
  const validation = validateCatalogRows(rows);
  const catalog = buildCatalog(
    rows,
    version,
    contingencyRate,
    hourlyRateUF,
  );
  validateQuantitySemantics(catalog);

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
        hourlyRateUF,
        contingencyRate,
        calculationModel: "single-base-hours-final-adjustments",
        lines: catalog.areas.map((area) => ({
          id: area.id,
          name: area.name,
          services: area.summary.serviceCodes,
          activities: area.summary.activityLines,
        })),
        technicalDefaults: (() => {
          const activities = catalog.areas.flatMap((area) =>
            area.services.flatMap((service) => service.activities),
          );
          const quantityRules = activities
            .map((activity) => activity.quantityRule)
            .filter(Boolean);

          return {
            mandatoryActivities: activities.filter(
              (activity) => activity.mandatory === true,
            ).length,
            optionalActivities: activities.filter(
              (activity) => activity.mandatory !== true,
            ).length,
            optionalAutoIncluded: activities.filter(
              (activity) =>
                activity.mandatory !== true &&
                activity.defaultIncluded === true,
            ).length,
            quantityRules: quantityRules.length,
            quantitiesStartingAboveOne: quantityRules.filter(
              (rule) => rule.defaultQuantity !== 1,
            ).length,
          };
        })(),
        totals: validation,
      },
      null,
      2,
    )}\n`,
    "utf8",
  );

  console.log(
    `Catálogo ISM v${version} generado y sincronizado: ${validation.serviceCodes} servicios, ${validation.activityLines} actividades, ${hourlyRateUF.toFixed(2)} UF/HH.`,
  );
}

main().catch((error) => {
  console.error("No fue posible generar el catálogo ISM.");
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
