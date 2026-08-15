// ==================================================
// IMPORTACIONES
// ==================================================

import type {
  Cell as ExcelCell,
  Workbook as ExcelWorkbook,
  Worksheet as ExcelWorksheet,
} from "exceljs";
import type { jsPDF as JsPdfDocument } from "jspdf";

import { ISM_BRAND } from "../../config/brand";


// ==================================================
// TIPOS PÚBLICOS
// ==================================================

export interface CatalogReportActivity {
  name: string;
  included: boolean;
  activityCount: number;
  unitHours: number | null;
  totalHours: number | null;
  notes?: string[];
  scopeQuantity?: number | null;
  scopeLabel?: string | null;
}

export interface CatalogReportService {
  area: string;
  code: string;
  name: string;
  category: string;
  unit: string;
  quantity: number;
  technicalHours: number;
  notes: string[];
  activities: CatalogReportActivity[];
}

export interface CatalogReportTotals {
  activities: number;
  /** HH base seleccionadas desde el catálogo. */
  technicalHours: number;
  /** Ajuste global aplicado al cierre del proyecto. */
  executionFactor: number;
  adjustedHours: number;
  hourlyRateUF: number;
  technicalValueUF: number;
  contingencyValueUF: number;
  finalValueUF: number;
  /** Campos heredados: se mantienen para compatibilidad interna. */
  contingencyHours: number;
  commercialHours: number;
  modules: number;
}

export interface CatalogReportData {
  title: string;
  subtitle: string;
  category: string;
  model: string;
  emittedAt: Date;
  contingencyRate: number;
  services: CatalogReportService[];
  totals: CatalogReportTotals;
  notes?: string[];
  fileNamePrefix?: string;
  footerLabel?: string;
  workbookDescription?: string;
}


// ==================================================
// TIPOS INTERNOS
// ==================================================

type PdfColor = [
  red: number,
  green: number,
  blue: number,
];

type PdfDocumentWithTable = JsPdfDocument & {
  lastAutoTable?: {
    finalY: number;
  };
};



// ==================================================
// CONFIGURACIÓN CORPORATIVA ISM DEVELOPER
// ==================================================

const ST_COLORS = {
  dark: "FF061A2D",
  orange: "FF00C8F8",
  orangeDark: "FF008FB8",
  orangeSoft: "FFE8FAFF",
  white: "FFFFFFFF",
  text: "FF0A2236",
  muted: "FF5F7787",
  border: "FFCDDDE5",
  light: "FFF1F8FA",
  alternate: "FFF7FBFC",
  excluded: "FFE5EDF1",
  warning: "FFFFF8E7",
  warningText: "FF754300",
} as const;

const PDF_COLORS: Record<
  | "dark"
  | "orange"
  | "orangeDark"
  | "orangeSoft"
  | "white"
  | "text"
  | "muted"
  | "border"
  | "light"
  | "alternate"
  | "excluded",
  PdfColor
> = {
  dark: [6, 26, 45],
  orange: [0, 200, 248],
  orangeDark: [0, 143, 184],
  orangeSoft: [232, 250, 255],
  white: [255, 255, 255],
  text: [10, 34, 54],
  muted: [95, 119, 135],
  border: [205, 221, 229],
  light: [241, 248, 250],
  alternate: [247, 251, 252],
  excluded: [229, 237, 241],
};

const CORPORATE_LOGO_URL = `${import.meta.env.BASE_URL}brand/ism-developer-logo-oficial.webp`;

const EXCEL_MIME_TYPE =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

const DEFAULT_NOTES = [
  "Cada actividad utiliza una única HH base definida en el catálogo técnico.",
  "La reutilización o esfuerzo extraordinario se aplica al final mediante un factor global del proyecto.",
  "La contingencia se aplica una sola vez sobre el total final.",
  "Las actividades recomendadas no están incluidas en las horas ni en el total del reporte.",
  "El resultado corresponde a una estimación técnica sujeta a revisión de ISM Developer.",
];

const PDF_TOTAL_PAGES_PLACEHOLDER =
  "{total_pages_count_string}";


// ==================================================
// UTILIDADES DE FECHA Y FORMATO
// ==================================================

function padNumber(value: number): string {
  return String(value).padStart(2, "0");
}

function getFileDate(date: Date): string {
  return [
    date.getFullYear(),
    padNumber(date.getMonth() + 1),
    padNumber(date.getDate()),
  ].join("");
}

function getFormattedDate(date: Date): string {
  return new Intl.DateTimeFormat("es-CL", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(date);
}

function formatDecimal(value: number): string {
  return new Intl.NumberFormat("es-CL", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function formatPercentage(value: number): string {
  return new Intl.NumberFormat("es-CL", {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);
}

function getReportFileName(
  report: CatalogReportData,
  extension: "xlsx" | "pdf",
): string {
  const prefix =
    report.fileNamePrefix ?? "ISM_Configuracion_Servicios";

  return `${prefix}_${getFileDate(report.emittedAt)}.${extension}`;
}

function getReportFooterLabel(
  report: CatalogReportData,
): string {
  return report.footerLabel ?? report.title;
}

function getReportNotes(
  report: CatalogReportData,
): string[] {
  return report.notes && report.notes.length > 0
    ? report.notes
    : DEFAULT_NOTES;
}


// ==================================================
// UTILIDADES DE DESCARGA
// ==================================================

function downloadBlob(
  blob: Blob,
  fileName: string,
): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = fileName;
  link.style.display = "none";

  document.body.appendChild(link);
  link.click();
  link.remove();

  window.setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 1000);
}


// ==================================================
// UTILIDADES DEL LOGO
// ==================================================

async function createCorporateLogoDataUrl(): Promise<string | null> {
  try {
    const image = new Image();
    image.decoding = "async";
    image.src = CORPORATE_LOGO_URL;

    await image.decode();

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    if (!context) {
      return null;
    }

    canvas.width = 712;
    canvas.height = 320;
    context.clearRect(0, 0, canvas.width, canvas.height);

    const scale = Math.min(
      canvas.width / image.naturalWidth,
      canvas.height / image.naturalHeight,
    );
    const width = image.naturalWidth * scale;
    const height = image.naturalHeight * scale;

    context.drawImage(
      image,
      (canvas.width - width) / 2,
      (canvas.height - height) / 2,
      width,
      height,
    );

    return canvas.toDataURL("image/png");
  } catch {
    return null;
  }
}


// ==================================================
// UTILIDADES DE EXCEL
// ==================================================

function applyExcelCellBorder(cell: ExcelCell): void {
  cell.border = {
    top: {
      style: "thin",
      color: {
        argb: ST_COLORS.border,
      },
    },
    left: {
      style: "thin",
      color: {
        argb: ST_COLORS.border,
      },
    },
    bottom: {
      style: "thin",
      color: {
        argb: ST_COLORS.border,
      },
    },
    right: {
      style: "thin",
      color: {
        argb: ST_COLORS.border,
      },
    },
  };
}

function applyExcelHeaderBackground(
  worksheet: ExcelWorksheet,
  startRow: number,
  endRow: number,
  columnCount: number,
): void {
  for (let row = startRow; row <= endRow; row += 1) {
    for (
      let column = 1;
      column <= columnCount;
      column += 1
    ) {
      const cell = worksheet.getCell(row, column);

      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: {
          argb: ST_COLORS.dark,
        },
      };

      cell.font = {
        name: "Eurostile LT Std",
        color: {
          argb: ST_COLORS.white,
        },
      };
    }
  }
}

function styleExcelRange(
  worksheet: ExcelWorksheet,
  startRow: number,
  endRow: number,
  startColumn: number,
  endColumn: number,
  fillColor: string,
): void {
  for (let row = startRow; row <= endRow; row += 1) {
    for (
      let column = startColumn;
      column <= endColumn;
      column += 1
    ) {
      const cell = worksheet.getCell(row, column);

      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: {
          argb: fillColor,
        },
      };

      applyExcelCellBorder(cell);
    }
  }
}

function addExcelCorporateHeader(
  workbook: ExcelWorkbook,
  worksheet: ExcelWorksheet,
  report: CatalogReportData,
  logoDataUrl: string | null,
): void {
  worksheet.getRow(1).height = 24;
  worksheet.getRow(2).height = 24;
  worksheet.getRow(3).height = 21;
  worksheet.getRow(4).height = 21;

  worksheet.mergeCells("C1:I2");
  worksheet.mergeCells("C3:I3");
  worksheet.mergeCells("C4:F4");
  worksheet.mergeCells("G4:I4");

  worksheet.getCell("C1").value = report.title;
  worksheet.getCell("C1").font = {
    name: "Eurostile LT Std",
    bold: true,
    size: 22,
    color: {
      argb: ST_COLORS.white,
    },
  };
  worksheet.getCell("C1").alignment = {
    vertical: "middle",
    horizontal: "left",
  };

  worksheet.getCell("C3").value = report.subtitle;
  worksheet.getCell("C3").font = {
    name: "Eurostile LT Std",
    size: 12,
    color: {
      argb: "FFD7DAE0",
    },
  };

  worksheet.getCell("C4").value =
    `Categoría: ${report.category} · Modelo: ${report.model}`;

  worksheet.getCell("G4").value =
    `Emitido: ${getFormattedDate(report.emittedAt)}`;

  worksheet.getCell("G4").alignment = {
    horizontal: "right",
  };

  if (logoDataUrl) {
    const logoId = workbook.addImage({
      base64: logoDataUrl,
      extension: "png",
    });

    worksheet.addImage(logoId, {
      tl: {
        col: 0.15,
        row: 0.2,
      },
      ext: {
        width: 150,
        height: 62,
      },
    });
  } else {
    worksheet.mergeCells("A1:B4");
    worksheet.getCell("A1").value = "ISM";
    worksheet.getCell("A1").font = {
      name: "Eurostile LT Std",
      bold: true,
      size: 26,
      color: {
        argb: ST_COLORS.orange,
      },
    };
    worksheet.getCell("A1").alignment = {
      horizontal: "center",
      vertical: "middle",
    };
  }
}

function styleExcelTableHeader(
  worksheet: ExcelWorksheet,
  rowNumber: number,
  headers: string[],
): void {
  headers.forEach((header, index) => {
    const cell = worksheet.getCell(
      rowNumber,
      index + 1,
    );

    cell.value = header;
    cell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: {
        argb: ST_COLORS.dark,
      },
    };
    cell.font = {
      name: "Eurostile LT Std",
      bold: true,
      size: 10,
      color: {
        argb: ST_COLORS.white,
      },
    };
    cell.alignment = {
      vertical: "middle",
      horizontal: index >= 2 ? "center" : "left",
      wrapText: true,
    };

    applyExcelCellBorder(cell);
  });

  worksheet.getRow(rowNumber).height = 25;
}


// ==================================================
// EXCEL: HOJA RESUMEN
// ==================================================

function buildExcelSummarySheet(
  workbook: ExcelWorkbook,
  report: CatalogReportData,
  logoDataUrl: string | null,
): void {
  const worksheet = workbook.addWorksheet(
    "Resumen",
    {
      properties: {
        defaultRowHeight: 18,
      },
      pageSetup: {
        orientation: "landscape",
        paperSize: 9,
        fitToPage: true,
        fitToWidth: 1,
        fitToHeight: 0,
        horizontalCentered: true,
        margins: {
          left: 0.25,
          right: 0.25,
          top: 0.5,
          bottom: 0.5,
          header: 0.2,
          footer: 0.2,
        },
      },
      views: [
        {
          state: "frozen",
          ySplit: 10,
          showGridLines: false,
        },
      ],
    },
  );

  worksheet.columns = [
    {
      key: "area",
      width: 25,
    },
    {
      key: "code",
      width: 18,
    },
    {
      key: "service",
      width: 45,
    },
    {
      key: "category",
      width: 16,
    },
    {
      key: "unit",
      width: 30,
    },
    {
      key: "quantity",
      width: 12,
    },
    {
      key: "included",
      width: 18,
    },
    {
      key: "excluded",
      width: 18,
    },
    {
      key: "technicalHours",
      width: 18,
    },
  ];

  worksheet.pageSetup.printTitlesRow = "1:10";
  worksheet.headerFooter.oddFooter =
    `&LISM Developer&C${getReportFooterLabel(report)}&RPágina &P de &N`;

  applyExcelHeaderBackground(
    worksheet,
    1,
    4,
    9,
  );

  addExcelCorporateHeader(
    workbook,
    worksheet,
    report,
    logoDataUrl,
  );

  for (let column = 1; column <= 9; column += 1) {
    worksheet.getCell(4, column).border = {
      bottom: {
        style: "medium",
        color: {
          argb: ST_COLORS.orange,
        },
      },
    };
  }

  // ==================================================
  // KPIS
  // ==================================================

  worksheet.mergeCells("A6:B6");
  worksheet.mergeCells("A7:B7");
  worksheet.mergeCells("C6:D6");
  worksheet.mergeCells("C7:D7");
  worksheet.mergeCells("E6:F6");
  worksheet.mergeCells("E7:F7");
  worksheet.mergeCells("G6:H6");
  worksheet.mergeCells("G7:H7");

  worksheet.getCell("A6").value = "Actividades";
  worksheet.getCell("A7").value = Math.round(
    report.totals.activities,
  );

  worksheet.getCell("C6").value = "HH base";
  worksheet.getCell("C7").value =
    report.totals.technicalHours;

  worksheet.getCell("E6").value = "Factor global";
  worksheet.getCell("E7").value = report.totals.executionFactor;

  worksheet.getCell("G6").value = "Módulos";
  worksheet.getCell("G7").value =
    report.totals.modules;

  worksheet.getCell("I6").value = "Servicios";
  worksheet.getCell("I7").value =
    report.services.length;

  styleExcelRange(worksheet, 6, 7, 1, 2, ST_COLORS.light);
  styleExcelRange(worksheet, 6, 7, 3, 4, ST_COLORS.light);
  styleExcelRange(worksheet, 6, 7, 5, 6, ST_COLORS.light);
  styleExcelRange(worksheet, 6, 7, 7, 8, ST_COLORS.light);
  styleExcelRange(worksheet, 6, 7, 9, 9, ST_COLORS.light);

  ["A6", "C6", "E6", "G6", "I6"].forEach(
    (address) => {
      worksheet.getCell(address).font = {
        name: "Eurostile LT Std",
        size: 10,
        color: {
          argb: ST_COLORS.muted,
        },
      };
    },
  );

  ["A7", "C7", "E7", "G7", "I7"].forEach(
    (address) => {
      worksheet.getCell(address).font = {
        name: "Eurostile LT Std",
        bold: true,
        size: 17,
        color: {
          argb: ST_COLORS.text,
        },
      };
    },
  );

  worksheet.getCell("C7").numFmt = "0.00";
  worksheet.getCell("E7").numFmt = "0%";

  worksheet.mergeCells("A8:I8");
  worksheet.getCell("A8").value =
    `Total estimado: ${formatDecimal(report.totals.finalValueUF)} UF`;
  worksheet.getCell("A8").fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: {
      argb: ST_COLORS.orangeSoft,
    },
  };
  worksheet.getCell("A8").font = {
    name: "Eurostile LT Std",
    bold: true,
    size: 17,
    color: {
      argb: ST_COLORS.orangeDark,
    },
  };
  worksheet.getCell("A8").alignment = {
    vertical: "middle",
    horizontal: "left",
    indent: 1,
  };
  applyExcelCellBorder(worksheet.getCell("A8"));

  worksheet.getRow(6).height = 22;
  worksheet.getRow(7).height = 27;
  worksheet.getRow(8).height = 30;

  // ==================================================
  // SERVICIOS SELECCIONADOS
  // ==================================================

  const tableHeaderRow = 10;

  styleExcelTableHeader(worksheet, tableHeaderRow, [
    "Área",
    "Código",
    "Servicio",
    "Categoría",
    "Unidad",
    "Cantidad",
    "Seleccionadas",
    "Recomendadas*",
    "HH técnicas",
  ]);

  report.services.forEach((service, index) => {
    const rowNumber = tableHeaderRow + index + 1;
    const includedCount = service.activities.filter(
      (activity) => activity.included,
    ).length;
    const excludedCount = service.activities.length - includedCount;

    const values = [
      service.area,
      service.code,
      service.name,
      service.category,
      service.unit,
      service.quantity,
      includedCount,
      excludedCount,
      service.technicalHours,
    ];

    values.forEach((value, columnIndex) => {
      const cell = worksheet.getCell(
        rowNumber,
        columnIndex + 1,
      );

      cell.value = value;
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: {
          argb:
            index % 2 === 0
              ? ST_COLORS.white
              : ST_COLORS.alternate,
        },
      };
      cell.font = {
        name: "Eurostile LT Std",
        size: 9,
        color: {
          argb: ST_COLORS.text,
        },
      };
      cell.alignment = {
        vertical: "top",
        horizontal:
          columnIndex >= 5 ? "center" : "left",
        wrapText: true,
      };

      applyExcelCellBorder(cell);
    });

    worksheet.getCell(rowNumber, 9).numFmt = "0.00";
    worksheet.getRow(rowNumber).height = 32;
  });

  const finalServiceRow =
    tableHeaderRow + report.services.length;

  worksheet.autoFilter = {
    from: {
      row: tableHeaderRow,
      column: 1,
    },
    to: {
      row: finalServiceRow,
      column: 9,
    },
  };

  // ==================================================
  // TOTALES
  // ==================================================

  const totalsStartRow = finalServiceRow + 2;

  const totalRows = [
    ["Total de actividades incluidas", Math.round(report.totals.activities)],
    ["HH base seleccionadas", report.totals.technicalHours],
    ["Factor global de ejecución", report.totals.executionFactor],
    ["HH ajustadas", report.totals.adjustedHours],
    ["Tarifa UF/HH", report.totals.hourlyRateUF],
    ["Valor técnico UF", report.totals.technicalValueUF],
    [
      `Contingencia final ${formatPercentage(report.contingencyRate)}`,
      report.totals.contingencyValueUF,
    ],
    ["TOTAL FINAL UF", report.totals.finalValueUF],
  ] as const;

  totalRows.forEach(([label, value], index) => {
    const rowNumber = totalsStartRow + index;
    const highlighted = index === totalRows.length - 1;

    worksheet.mergeCells(rowNumber, 1, rowNumber, 7);
    worksheet.mergeCells(rowNumber, 8, rowNumber, 9);

    const labelCell = worksheet.getCell(rowNumber, 1);
    const valueCell = worksheet.getCell(rowNumber, 8);

    labelCell.value = label;
    valueCell.value = value;

    [labelCell, valueCell].forEach((cell) => {
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: {
          argb: highlighted
            ? ST_COLORS.orangeSoft
            : ST_COLORS.light,
        },
      };
      cell.font = {
        name: "Eurostile LT Std",
        bold: true,
        size: highlighted ? 12 : 10,
        color: {
          argb: highlighted
            ? ST_COLORS.orangeDark
            : ST_COLORS.text,
        },
      };
      cell.alignment = {
        vertical: "middle",
        horizontal:
          cell === valueCell ? "right" : "left",
      };

      applyExcelCellBorder(cell);
    });

    valueCell.numFmt =
      label === "Factor global de ejecución" ? "0%" : "0.00";
    worksheet.getRow(rowNumber).height =
      highlighted ? 26 : 22;
  });

  // ==================================================
  // NOTAS
  // ==================================================

  const notes = getReportNotes(report);
  const notesStartRow =
    totalsStartRow + totalRows.length + 2;

  worksheet.mergeCells(
    notesStartRow,
    1,
    notesStartRow,
    9,
  );
  worksheet.getCell(notesStartRow, 1).value = "Notas";
  worksheet.getCell(notesStartRow, 1).font = {
    name: "Eurostile LT Std",
    bold: true,
    color: {
      argb: ST_COLORS.orangeDark,
    },
  };

  notes.forEach((note, index) => {
    const rowNumber = notesStartRow + index + 1;

    worksheet.mergeCells(rowNumber, 1, rowNumber, 9);
    worksheet.getCell(rowNumber, 1).value = `• ${note}`;
    worksheet.getCell(rowNumber, 1).font = {
      name: "Eurostile LT Std",
      size: 9,
      color: {
        argb: ST_COLORS.muted,
      },
    };
    worksheet.getCell(rowNumber, 1).alignment = {
      wrapText: true,
      vertical: "top",
    };
  });
}


// ==================================================
// EXCEL: HOJA DETALLE TÉCNICO
// ==================================================

function getReportActivityDescription(
  activity: CatalogReportActivity,
): string {
  const details = [activity.name];

  if (
    activity.scopeQuantity !== null &&
    activity.scopeQuantity !== undefined &&
    activity.scopeLabel
  ) {
    details.push(
      `Alcance: ${activity.scopeQuantity} · ${activity.scopeLabel}`,
    );
  }

  if (activity.notes && activity.notes.length > 0) {
    details.push(`Observación: ${activity.notes.join(" · ")}`);
  }

  return details.join("\n");
}

function appendExcelActivitySection(
  worksheet: ExcelWorksheet,
  startRow: number,
  service: CatalogReportService,
  activities: CatalogReportActivity[],
  title: string,
  recommended: boolean,
): number {
  let currentRow = startRow;

  worksheet.mergeCells(currentRow, 1, currentRow, 9);
  const sectionCell = worksheet.getCell(currentRow, 1);

  sectionCell.value = title;
  sectionCell.fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: {
      argb: recommended ? ST_COLORS.excluded : ST_COLORS.dark,
    },
  };
  sectionCell.font = {
    name: "Eurostile LT Std",
    bold: true,
    size: 10,
    color: {
      argb: recommended ? ST_COLORS.muted : ST_COLORS.white,
    },
  };
  sectionCell.alignment = {
    vertical: "middle",
    horizontal: "left",
    indent: 1,
  };
  applyExcelCellBorder(sectionCell);
  worksheet.getRow(currentRow).height = 23;
  currentRow += 1;

  styleExcelTableHeader(worksheet, currentRow, [
    "Selección",
    "Actividad",
    "N.º actividades",
    "Cantidad",
    "HH unitarias",
    "HH totales",
    "Área",
    "Código",
    "Servicio",
  ]);

  currentRow += 1;

  activities.forEach((activity, index) => {
    const values = [
      recommended ? "Recomendada*" : "Seleccionada",
      getReportActivityDescription(activity),
      activity.activityCount,
      service.quantity,
      activity.unitHours ?? "N/R",
      recommended ? 0 : activity.totalHours ?? "N/R",
      service.area,
      service.code,
      service.name,
    ];

    values.forEach((value, columnIndex) => {
      const cell = worksheet.getCell(currentRow, columnIndex + 1);

      cell.value = value;
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: {
          argb: recommended
            ? ST_COLORS.excluded
            : index % 2 === 0
              ? ST_COLORS.white
              : ST_COLORS.alternate,
        },
      };
      cell.font = {
        name: "Eurostile LT Std",
        size: 9,
        color: {
          argb: recommended ? ST_COLORS.muted : ST_COLORS.text,
        },
        italic: recommended,
      };
      cell.alignment = {
        vertical: "top",
        horizontal:
          columnIndex >= 2 && columnIndex <= 5 ? "center" : "left",
        wrapText: true,
      };

      applyExcelCellBorder(cell);
    });

    worksheet.getCell(currentRow, 5).numFmt = "0.00";
    worksheet.getCell(currentRow, 6).numFmt = "0.00";
    worksheet.getRow(currentRow).height = 31;
    currentRow += 1;
  });

  return currentRow;
}


function buildExcelDetailSheet(
  workbook: ExcelWorkbook,
  report: CatalogReportData,
  logoDataUrl: string | null,
): void {
  const worksheet = workbook.addWorksheet(
    "Detalle técnico",
    {
      properties: {
        defaultRowHeight: 18,
      },
      pageSetup: {
        orientation: "landscape",
        paperSize: 9,
        fitToPage: true,
        fitToWidth: 1,
        fitToHeight: 0,
        horizontalCentered: true,
        margins: {
          left: 0.25,
          right: 0.25,
          top: 0.5,
          bottom: 0.5,
          header: 0.2,
          footer: 0.2,
        },
      },
      views: [
        {
          state: "frozen",
          ySplit: 5,
          showGridLines: false,
        },
      ],
    },
  );

  worksheet.columns = [
    {
      key: "status",
      width: 14,
    },
    {
      key: "activity",
      width: 74,
    },
    {
      key: "activityCount",
      width: 16,
    },
    {
      key: "quantity",
      width: 12,
    },
    {
      key: "unitHours",
      width: 16,
    },
    {
      key: "totalHours",
      width: 16,
    },
    {
      key: "area",
      width: 24,
    },
    {
      key: "code",
      width: 18,
    },
    {
      key: "service",
      width: 40,
    },
  ];

  worksheet.pageSetup.printTitlesRow = "1:4";
  worksheet.headerFooter.oddFooter =
    `&LISM Developer&CDetalle técnico · ${getReportFooterLabel(report)}&RPágina &P de &N`;

  applyExcelHeaderBackground(
    worksheet,
    1,
    4,
    9,
  );

  addExcelCorporateHeader(
    workbook,
    worksheet,
    report,
    logoDataUrl,
  );

  for (let column = 1; column <= 9; column += 1) {
    worksheet.getCell(4, column).border = {
      bottom: {
        style: "medium",
        color: {
          argb: ST_COLORS.orange,
        },
      },
    };
  }

  let currentRow = 6;

  report.services.forEach((service) => {
    // ==================================================
    // ENCABEZADO DEL SERVICIO
    // ==================================================

    worksheet.mergeCells(
      currentRow,
      1,
      currentRow,
      9,
    );

    const serviceTitleCell = worksheet.getCell(
      currentRow,
      1,
    );

    serviceTitleCell.value =
      `${service.code} · ${service.name}`;
    serviceTitleCell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: {
        argb: ST_COLORS.orange,
      },
    };
    serviceTitleCell.font = {
      name: "Eurostile LT Std",
      bold: true,
      size: 13,
      color: {
        argb: ST_COLORS.white,
      },
    };
    serviceTitleCell.alignment = {
      vertical: "middle",
      horizontal: "left",
      indent: 1,
    };
    applyExcelCellBorder(serviceTitleCell);
    worksheet.getRow(currentRow).height = 28;

    currentRow += 1;

    // ==================================================
    // INFORMACIÓN DEL SERVICIO
    // ==================================================

    worksheet.mergeCells(
      currentRow,
      1,
      currentRow,
      2,
    );
    worksheet.mergeCells(
      currentRow,
      3,
      currentRow,
      4,
    );
    worksheet.mergeCells(
      currentRow,
      5,
      currentRow,
      6,
    );
    worksheet.mergeCells(
      currentRow,
      7,
      currentRow,
      9,
    );

    const metadata = [
      {
        cell: worksheet.getCell(currentRow, 1),
        value: `Área: ${service.area}`,
      },
      {
        cell: worksheet.getCell(currentRow, 3),
        value: `Categoría: ${service.category}`,
      },
      {
        cell: worksheet.getCell(currentRow, 5),
        value: `Cantidad: ${service.quantity}`,
      },
      {
        cell: worksheet.getCell(currentRow, 7),
        value:
          `Unidad: ${service.unit} · HH técnicas: ${formatDecimal(
            service.technicalHours,
          )}`,
      },
    ];

    metadata.forEach(({ cell, value }) => {
      cell.value = value;
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: {
          argb: ST_COLORS.orangeSoft,
        },
      };
      cell.font = {
        name: "Eurostile LT Std",
        bold: true,
        size: 9,
        color: {
          argb: ST_COLORS.orangeDark,
        },
      };
      cell.alignment = {
        vertical: "middle",
        wrapText: true,
      };

      applyExcelCellBorder(cell);
    });

    worksheet.getRow(currentRow).height = 24;
    currentRow += 1;

    // ==================================================
    // NOTAS DEL SERVICIO
    // ==================================================

    if (service.notes.length > 0) {
      worksheet.mergeCells(
        currentRow,
        1,
        currentRow,
        9,
      );

      const notesCell = worksheet.getCell(
        currentRow,
        1,
      );

      notesCell.value =
        `Notas: ${service.notes.join(" · ")}`;
      notesCell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: {
          argb: ST_COLORS.warning,
        },
      };
      notesCell.font = {
        name: "Eurostile LT Std",
        size: 9,
        color: {
          argb: ST_COLORS.warningText,
        },
      };
      notesCell.alignment = {
        vertical: "middle",
        wrapText: true,
      };

      applyExcelCellBorder(notesCell);
      worksheet.getRow(currentRow).height = 26;
      currentRow += 1;
    }

    // ==================================================
    // ACTIVIDADES SELECCIONADAS Y RECOMENDADAS
    // ==================================================

    const selectedActivities = service.activities.filter(
      (activity) => activity.included,
    );
    const recommendedActivities = service.activities.filter(
      (activity) => !activity.included,
    );

    currentRow = appendExcelActivitySection(
      worksheet,
      currentRow,
      service,
      selectedActivities,
      "Actividades seleccionadas",
      false,
    );

    if (recommendedActivities.length > 0) {
      currentRow += 1;
      currentRow = appendExcelActivitySection(
        worksheet,
        currentRow,
        service,
        recommendedActivities,
        "Actividades recomendadas* · No incluidas en el cálculo",
        true,
      );
    }

    // ==================================================
    // TOTAL DEL SERVICIO
    // ==================================================

    worksheet.mergeCells(
      currentRow,
      1,
      currentRow,
      5,
    );
    worksheet.mergeCells(
      currentRow,
      6,
      currentRow,
      9,
    );

    const labelCell = worksheet.getCell(currentRow, 1);
    const valueCell = worksheet.getCell(currentRow, 6);

    labelCell.value =
      "HH base del servicio";
    valueCell.value = service.technicalHours;

    [labelCell, valueCell].forEach((cell) => {
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: {
          argb: ST_COLORS.orangeSoft,
        },
      };
      cell.font = {
        name: "Eurostile LT Std",
        bold: true,
        color: {
          argb: ST_COLORS.orangeDark,
        },
      };
      cell.alignment = {
        vertical: "middle",
        horizontal:
          cell === valueCell ? "right" : "left",
      };

      applyExcelCellBorder(cell);
    });

    valueCell.numFmt = "0.00";
    worksheet.getRow(currentRow).height = 24;
    currentRow += 2;
  });
}


// ==================================================
// EXPORTACIÓN EXCEL
// ==================================================

export async function exportCatalogReportToExcel(
  report: CatalogReportData,
): Promise<void> {
  const { Workbook } = await import("exceljs");
  const workbook = new Workbook();

  workbook.creator = ISM_BRAND.name;
  workbook.company = ISM_BRAND.name;
  workbook.subject = report.subtitle;
  workbook.title = report.title;
  workbook.description =
    report.workbookDescription ??
    "Reporte técnico generado desde el Configurador de Servicios IBM POWER";
  workbook.created = report.emittedAt;
  workbook.modified = report.emittedAt;

  const logoDataUrl = await createCorporateLogoDataUrl();

  buildExcelSummarySheet(
    workbook,
    report,
    logoDataUrl,
  );

  buildExcelDetailSheet(
    workbook,
    report,
    logoDataUrl,
  );

  const buffer = await workbook.xlsx.writeBuffer();

  const blob = new Blob(
    [buffer as ArrayBuffer],
    {
      type: EXCEL_MIME_TYPE,
    },
  );

  downloadBlob(
    blob,
    getReportFileName(report, "xlsx"),
  );
}


// ==================================================
// UTILIDADES DE PDF
// ==================================================

function drawPdfCorporateHeader(
  pdf: JsPdfDocument,
  report: CatalogReportData,
  logoDataUrl: string | null,
): void {
  const pageWidth = pdf.internal.pageSize.getWidth();

  pdf.setFillColor(...PDF_COLORS.dark);
  pdf.rect(0, 0, pageWidth, 25, "F");

  pdf.setFillColor(...PDF_COLORS.orange);
  pdf.rect(0, 24, pageWidth, 1, "F");

  if (logoDataUrl) {
    pdf.addImage(
      logoDataUrl,
      "PNG",
      12,
      4.5,
      36,
      15,
    );
  } else {
    pdf.setTextColor(...PDF_COLORS.orange);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(22);
    pdf.text("ISM", 12, 15);
  }

  pdf.setTextColor(...PDF_COLORS.white);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(15);
  pdf.text(report.title, 55, 10);

  pdf.setTextColor(215, 218, 224);
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(8);
  pdf.text(report.subtitle, 55, 15);

  pdf.text(
    `Categoría: ${report.category} · Modelo: ${report.model}`,
    55,
    20,
  );

  pdf.text(
    `Emitido: ${getFormattedDate(report.emittedAt)}`,
    pageWidth - 12,
    20,
    {
      align: "right",
    },
  );
}

function drawPdfFooter(
  pdf: JsPdfDocument,
  report: CatalogReportData,
  pageNumber: number,
): void {
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  pdf.setDrawColor(...PDF_COLORS.border);
  pdf.line(
    12,
    pageHeight - 10,
    pageWidth - 12,
    pageHeight - 10,
  );

  pdf.setTextColor(...PDF_COLORS.muted);
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(7);

  pdf.text(
    `ISM Developer · ${getReportFooterLabel(report)}`,
    12,
    pageHeight - 5,
  );

  pdf.text(
    `Página ${pageNumber} de ${PDF_TOTAL_PAGES_PLACEHOLDER}`,
    pageWidth - 12,
    pageHeight - 5,
    {
      align: "right",
    },
  );
}

function drawPdfSummary(
  pdf: JsPdfDocument,
  report: CatalogReportData,
): void {
  const boxes = [
    {
      label: "Actividades",
      value: String(Math.round(report.totals.activities)),
      highlighted: false,
    },
    {
      label: "HH base",
      value: formatDecimal(report.totals.technicalHours),
      highlighted: false,
    },
    {
      label: "Factor global",
      value: formatPercentage(report.totals.executionFactor),
      highlighted: false,
    },
    {
      label: "HH ajustadas",
      value: formatDecimal(report.totals.adjustedHours),
      highlighted: false,
    },
    {
      label: "Total UF",
      value: formatDecimal(report.totals.finalValueUF),
      highlighted: true,
    },
  ];

  const startX = 12;
  const startY = 30;
  const boxWidth = 50;
  const boxHeight = 17;
  const gap = 4;

  boxes.forEach((box, index) => {
    const x = startX + index * (boxWidth + gap);

    pdf.setFillColor(
      ...(box.highlighted
        ? PDF_COLORS.orangeSoft
        : PDF_COLORS.light),
    );

    pdf.setDrawColor(
      ...(box.highlighted
        ? PDF_COLORS.orange
        : PDF_COLORS.border),
    );

    pdf.roundedRect(
      x,
      startY,
      boxWidth,
      boxHeight,
      2,
      2,
      "FD",
    );

    pdf.setTextColor(...PDF_COLORS.muted);
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(6.5);
    pdf.text(box.label, x + 3, startY + 5);

    pdf.setTextColor(
      ...(box.highlighted
        ? PDF_COLORS.orangeDark
        : PDF_COLORS.text),
    );
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(11);
    pdf.text(box.value, x + 3, startY + 12.5);
  });
}

function drawPdfServiceHeader(
  pdf: JsPdfDocument,
  service: CatalogReportService,
  y: number,
  continuation = false,
): number {
  const pageWidth = pdf.internal.pageSize.getWidth();
  const contentWidth = pageWidth - 24;

  pdf.setFillColor(...PDF_COLORS.orange);
  pdf.roundedRect(
    12,
    y,
    contentWidth,
    10,
    2,
    2,
    "F",
  );

  pdf.setTextColor(...PDF_COLORS.white);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(10);
  pdf.text(
    `${service.code} · ${service.name}${
      continuation ? " · Continuación" : ""
    }`,
    15,
    y + 6.5,
  );

  pdf.setFillColor(...PDF_COLORS.orangeSoft);
  pdf.rect(12, y + 10, contentWidth, 10, "F");

  pdf.setTextColor(...PDF_COLORS.orangeDark);
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(7.2);
  pdf.text(
    `Área: ${service.area} · Categoría: ${service.category} · Unidad: ${service.unit}`,
    15,
    y + 16,
  );

  pdf.text(
    `Cantidad: ${service.quantity} · HH técnicas: ${formatDecimal(
      service.technicalHours,
    )}`,
    pageWidth - 15,
    y + 16,
    {
      align: "right",
    },
  );

  return y + 22;
}

function drawPdfActivitySectionTitle(
  pdf: JsPdfDocument,
  title: string,
  y: number,
  recommended: boolean,
): number {
  const pageWidth = pdf.internal.pageSize.getWidth();

  pdf.setFillColor(
    ...(recommended ? PDF_COLORS.excluded : PDF_COLORS.dark),
  );
  pdf.setDrawColor(...PDF_COLORS.border);
  pdf.roundedRect(12, y, pageWidth - 24, 7, 1.5, 1.5, "FD");
  pdf.setTextColor(
    ...(recommended ? PDF_COLORS.muted : PDF_COLORS.white),
  );
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(8);
  pdf.text(title, 15, y + 4.8);

  return y + 9;
}


function ensurePdfSpace(
  pdf: JsPdfDocument,
  currentY: number,
  requiredHeight: number,
): number {
  const pageHeight = pdf.internal.pageSize.getHeight();

  if (currentY + requiredHeight <= pageHeight - 16) {
    return currentY;
  }

  pdf.addPage();
  return 31;
}

function drawPdfGeneralTotals(
  pdf: JsPdfDocument,
  report: CatalogReportData,
  startY: number,
): number {
  let currentY = ensurePdfSpace(pdf, startY, 38);
  const pageWidth = pdf.internal.pageSize.getWidth();

  pdf.setFillColor(...PDF_COLORS.dark);
  pdf.roundedRect(
    12,
    currentY,
    pageWidth - 24,
    8,
    2,
    2,
    "F",
  );

  pdf.setTextColor(...PDF_COLORS.white);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(9);
  pdf.text("Resumen general", 15, currentY + 5.5);

  currentY += 11;

  const rows = [
    ["Total de actividades incluidas", String(Math.round(report.totals.activities))],
    ["HH base seleccionadas", formatDecimal(report.totals.technicalHours)],
    ["Factor global de ejecución", formatPercentage(report.totals.executionFactor)],
    ["HH ajustadas", formatDecimal(report.totals.adjustedHours)],
    ["Tarifa UF/HH", formatDecimal(report.totals.hourlyRateUF)],
    ["Valor técnico UF", formatDecimal(report.totals.technicalValueUF)],
    [
      `Contingencia final ${formatPercentage(report.contingencyRate)}`,
      formatDecimal(report.totals.contingencyValueUF),
    ],
    ["TOTAL FINAL UF", formatDecimal(report.totals.finalValueUF)],
  ];

  rows.forEach(([label, value], index) => {
    const highlighted = index === rows.length - 1;

    pdf.setFillColor(
      ...(highlighted
        ? PDF_COLORS.orangeSoft
        : PDF_COLORS.light),
    );
    pdf.setDrawColor(...PDF_COLORS.border);
    pdf.rect(
      12,
      currentY,
      pageWidth - 24,
      7,
      "FD",
    );

    pdf.setTextColor(
      ...(highlighted
        ? PDF_COLORS.orangeDark
        : PDF_COLORS.text),
    );
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(8);
    pdf.text(label, 15, currentY + 4.7);
    pdf.text(value, pageWidth - 15, currentY + 4.7, {
      align: "right",
    });

    currentY += 7;
  });

  return currentY + 4;
}

function drawPdfNotes(
  pdf: JsPdfDocument,
  report: CatalogReportData,
  startY: number,
): void {
  const notes = getReportNotes(report);
  const requiredHeight = 11 + notes.length * 6;
  const currentY = ensurePdfSpace(
    pdf,
    startY,
    requiredHeight,
  );
  const pageWidth = pdf.internal.pageSize.getWidth();

  pdf.setTextColor(...PDF_COLORS.orangeDark);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(9);
  pdf.text("Notas", 12, currentY + 5);

  pdf.setTextColor(...PDF_COLORS.muted);
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(7.5);

  notes.forEach((note, index) => {
    pdf.text(
      `• ${note}`,
      15,
      currentY + 11 + index * 6,
    );
  });

  pdf.setDrawColor(...PDF_COLORS.border);
  pdf.line(
    12,
    currentY + requiredHeight,
    pageWidth - 12,
    currentY + requiredHeight,
  );
}


// ==================================================
// EXPORTACIÓN PDF
// ==================================================

export async function exportCatalogReportToPdf(
  report: CatalogReportData,
): Promise<void> {
  const [{ jsPDF }, autoTableModule] =
    await Promise.all([
      import("jspdf"),
      import("jspdf-autotable"),
    ]);

  const autoTable = autoTableModule.default;

  const pdf = new jsPDF({
    orientation: "landscape",
    unit: "mm",
    format: "a4",
    compress: true,
  }) as PdfDocumentWithTable;

  const logoDataUrl = await createCorporateLogoDataUrl();

  drawPdfSummary(pdf, report);

  let currentY = 53;

  for (const service of report.services) {
    currentY = ensurePdfSpace(pdf, currentY, 42);

    const serviceStartPage =
      pdf.getCurrentPageInfo().pageNumber;

    currentY = drawPdfServiceHeader(
      pdf,
      service,
      currentY,
    );

    if (service.notes.length > 0) {
      const pageWidth = pdf.internal.pageSize.getWidth();

      pdf.setFillColor(255, 248, 231);
      pdf.setDrawColor(243, 210, 139);
      pdf.roundedRect(
        12,
        currentY,
        pageWidth - 24,
        9,
        1.5,
        1.5,
        "FD",
      );

      pdf.setTextColor(117, 67, 0);
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(7);
      pdf.text(
        `Notas: ${service.notes.join(" · ")}`,
        15,
        currentY + 5.5,
      );

      currentY += 11;
    }

    const activitySections = [
      {
        title: "Actividades seleccionadas",
        recommended: false,
        activities: service.activities.filter(
          (activity) => activity.included,
        ),
      },
      {
        title: "Actividades recomendadas* · No incluidas en el cálculo",
        recommended: true,
        activities: service.activities.filter(
          (activity) => !activity.included,
        ),
      },
    ];

    for (const section of activitySections) {
      if (section.activities.length === 0) {
        continue;
      }

      currentY = ensurePdfSpace(pdf, currentY, 20);
      currentY = drawPdfActivitySectionTitle(
        pdf,
        section.title,
        currentY,
        section.recommended,
      );

      autoTable(pdf, {
        startY: currentY,
        margin: {
          top: 54,
          left: 12,
          right: 12,
          bottom: 16,
        },
        theme: "grid",
        head: [
          [
            "Selección",
            "Actividad",
            "N.º act.",
            "Cantidad",
            "HH unit.",
            "HH total",
          ],
        ],
        body: section.activities.map((activity) => [
          section.recommended ? "Recomendada*" : "Seleccionada",
          getReportActivityDescription(activity),
          String(activity.activityCount),
          String(service.quantity),
          activity.unitHours === null
            ? "N/R"
            : formatDecimal(activity.unitHours),
          section.recommended
            ? "0,00"
            : activity.totalHours === null
              ? "N/R"
              : formatDecimal(activity.totalHours),
        ]),
        foot: section.recommended
          ? undefined
          : [
              [
                {
                  content: "HH base del servicio",
                  colSpan: 5,
                  styles: {
                    halign: "right",
                    fillColor: PDF_COLORS.orangeSoft,
                    textColor: PDF_COLORS.orangeDark,
                    fontStyle: "bold",
                  },
                },
                {
                  content: formatDecimal(service.technicalHours),
                  styles: {
                    halign: "right",
                    fillColor: PDF_COLORS.orangeSoft,
                    textColor: PDF_COLORS.orangeDark,
                    fontStyle: "bold",
                  },
                },
              ],
            ],
        styles: {
          font: "helvetica",
          fontSize: 7.2,
          cellPadding: 2,
          lineColor: PDF_COLORS.border,
          lineWidth: 0.15,
          textColor: section.recommended
            ? PDF_COLORS.muted
            : PDF_COLORS.text,
          overflow: "linebreak",
          valign: "middle",
          fontStyle: section.recommended ? "italic" : "normal",
        },
        headStyles: {
          fillColor: section.recommended
            ? PDF_COLORS.excluded
            : PDF_COLORS.dark,
          textColor: section.recommended
            ? PDF_COLORS.muted
            : PDF_COLORS.white,
          fontStyle: "bold",
          halign: "left",
          minCellHeight: 9,
        },
        bodyStyles: {
          fillColor: section.recommended
            ? PDF_COLORS.excluded
            : PDF_COLORS.white,
          minCellHeight: 8,
        },
        alternateRowStyles: {
          fillColor: section.recommended
            ? PDF_COLORS.excluded
            : PDF_COLORS.alternate,
        },
        footStyles: {
          fillColor: PDF_COLORS.orangeSoft,
          textColor: PDF_COLORS.orangeDark,
          fontStyle: "bold",
          lineColor: PDF_COLORS.border,
        },
        columnStyles: {
          0: {
            cellWidth: 26,
            halign: "center",
          },
          1: {
            cellWidth: 157,
          },
          2: {
            cellWidth: 23,
            halign: "center",
          },
          3: {
            cellWidth: 22,
            halign: "center",
          },
          4: {
            cellWidth: 23,
            halign: "right",
          },
          5: {
            cellWidth: 23,
            halign: "right",
          },
        },
        willDrawPage: () => {
          const pageNumber = pdf.getCurrentPageInfo().pageNumber;

          if (pageNumber <= serviceStartPage) {
            return;
          }

          drawPdfServiceHeader(pdf, service, 31, true);
        },
      });

      currentY = (pdf.lastAutoTable?.finalY ?? currentY) + 6;
    }
  }

  currentY = drawPdfGeneralTotals(
    pdf,
    report,
    currentY,
  );

  drawPdfNotes(pdf, report, currentY);

  const totalPages = pdf.getNumberOfPages();

  for (
    let pageNumber = 1;
    pageNumber <= totalPages;
    pageNumber += 1
  ) {
    pdf.setPage(pageNumber);
    drawPdfCorporateHeader(
      pdf,
      report,
      logoDataUrl,
    );
    drawPdfFooter(pdf, report, pageNumber);
  }

  if (typeof pdf.putTotalPages === "function") {
    pdf.putTotalPages(
      PDF_TOTAL_PAGES_PLACEHOLDER,
    );
  }

  pdf.save(getReportFileName(report, "pdf"));
}