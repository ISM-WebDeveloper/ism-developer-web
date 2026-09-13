import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { createRequire } from "node:module";

const root = process.cwd();
const require = createRequire(path.join(root, "apps/configurador-servicios/package.json"));
const typescript = require("typescript");
const sourcePath = path.join(
    root,
    "apps/configurador-servicios/src/features/catalog/catalogReportExport.ts",
);
const source = fs.readFileSync(sourcePath, "utf8")
    .replace(
        'import { ISM_BRAND } from "../../config/brand";',
        "const ISM_BRAND = { name: 'ISM Developer', shortName: 'ISM', slogan: 'De ideas a soluciones', website: 'www.ismdeveloper.cl', phone: '+56 9 6837 4821', email: 'ignacio.sepulveda@ismdeveloper.cl' };",
    )
    .replaceAll("import.meta.env.BASE_URL", '"/configurador/"');
const javascript = typescript.transpileModule(source, {
    compilerOptions: {
        module: typescript.ModuleKind.CommonJS,
        target: typescript.ScriptTarget.ES2022,
    },
}).outputText;
const exports = {};
new Function("require", "exports", javascript)(require, exports);

const report = {
    title: "Verificación ISM",
    subtitle: "Datos sintéticos de QA",
    category: "Desarrollo e Implementación",
    model: "Sitio web",
    emittedAt: new Date("2026-09-12T12:00:00Z"),
    fileNamePrefix: "ISM_QA",
    contingencyRate: 0.2,
    services: [{
        area: "Desarrollo e Implementación",
        code: "WEB",
        name: "Sitio web profesional",
        category: "Web",
        unit: "Proyecto",
        quantity: 1,
        technicalHours: 15.96,
        notes: [],
        activities: [{
            name: "Actividad de verificación",
            included: true,
            activityCount: 1,
            unitHours: 15.96,
            totalHours: 15.96,
            notes: [],
        }],
    }],
    totals: {
        activities: 1,
        technicalHours: 15.96,
        executionFactor: 1,
        adjustedHours: 15.96,
        hourlyRateUF: 0.7,
        technicalValueUF: 11.172,
        contingencyValueUF: 2.2344,
        finalValueUF: 13.4064,
        contingencyHours: 0,
        commercialHours: 15.96,
        modules: 1,
    },
};

const temporaryDirectory = fs.mkdtempSync(path.join(os.tmpdir(), "ism-export-qa-"));
const originalDirectory = process.cwd();
const originalWindow = globalThis.window;
const originalDocument = globalThis.document;
const originalCreateObjectUrl = URL.createObjectURL;
const originalRevokeObjectUrl = URL.revokeObjectURL;
let excelBlob;
let excelFileName = "";

try {
    globalThis.Image = class {
        async decode() {
            throw new Error("La prueba estructural no carga imágenes.");
        }
    };
    globalThis.window = { setTimeout };
    globalThis.document = {
        createElement: () => ({
            style: {},
            click() {
                excelFileName = this.download;
            },
            remove() {},
        }),
        body: { appendChild() {} },
    };
    URL.createObjectURL = (blob) => {
        excelBlob = blob;
        return "blob:ism-export-test";
    };
    URL.revokeObjectURL = () => {};

    await exports.exportCatalogReportToExcel(report);
    assert.equal(excelFileName, "ISM_QA_20260912.xlsx");
    assert.ok(excelBlob, "Excel no entregó un Blob descargable.");

    const excelBuffer = Buffer.from(await excelBlob.arrayBuffer());
    const workbook = new (require("exceljs").Workbook)();
    await workbook.xlsx.load(excelBuffer);
    assert.deepEqual(workbook.worksheets.map(({ name }) => name), ["Resumen", "Detalle técnico"]);
    const summary = workbook.getWorksheet("Resumen");
    assert.deepEqual(["A6", "D6", "G6"].map((cell) => summary.getCell(cell).value), [
        "Actividades",
        "Servicios",
        "Módulos",
    ]);
    assert.deepEqual(["A7", "D7", "G7"].map((cell) => summary.getCell(cell).value), [1, 1, 1]);
    assert.equal(summary.getCell("A15").value, "HORAS ESTIMADAS APROXIMADAS");
    assert.equal(summary.getCell("H15").value, 15.96);

    delete globalThis.window;
    delete globalThis.document;
    process.chdir(temporaryDirectory);
    const messages = [];
    const originalWarn = console.warn;
    const originalError = console.error;
    console.warn = (...values) => messages.push(values.join(" "));
    console.error = (...values) => messages.push(values.join(" "));
    try {
        await exports.exportCatalogReportToPdf(report);
    } finally {
        console.warn = originalWarn;
        console.error = originalError;
    }
    assert.ok(!messages.some((message) => /could not fit page/i.test(message)), messages.join("\n"));
    const pdfPath = path.join(temporaryDirectory, "ISM_QA_20260912.pdf");
    const pdf = fs.readFileSync(pdfPath);
    assert.equal(pdf.subarray(0, 8).toString(), "%PDF-1.3");
    assert.ok(pdf.toString("latin1").includes("%%EOF"));

    console.log("Exportaciones del configurador: 14 comprobaciones aprobadas.");
} finally {
    process.chdir(originalDirectory);
    globalThis.window = originalWindow;
    globalThis.document = originalDocument;
    URL.createObjectURL = originalCreateObjectUrl;
    URL.revokeObjectURL = originalRevokeObjectUrl;
    fs.rmSync(temporaryDirectory, { recursive: true, force: true });
}
