import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const sourcePath = resolve(
  root,
  "apps/configurador-servicios/src/data/catalog/generated/ismServices.ts",
);
const source = readFileSync(sourcePath, "utf8");
const match = source.match(
  /export const ismServicesCatalog: PlatformCatalog = ([\s\S]*);\s*$/,
);

if (!match) {
  console.error("No fue posible leer el catálogo ISM generado.");
  process.exit(1);
}

const catalog = JSON.parse(match[1]);
const services = catalog.areas.flatMap((area) => area.services);
const activities = services.flatMap((service) => service.activities);
const optionalActivities = activities.filter(
  (activity) => activity.mandatory !== true,
);
const optionalAutoIncluded = optionalActivities.filter(
  (activity) => activity.defaultIncluded === true,
);
const quantityRules = activities
  .map((activity) => ({
    code: activity.code ?? activity.id,
    rule: activity.quantityRule,
  }))
  .filter(({ rule }) => Boolean(rule));
const invalidQuantities = quantityRules.filter(
  ({ rule }) =>
    rule.minimum !== 1 ||
    rule.defaultQuantity !== 1 ||
    rule.baseQuantity !== 1,
);

const errors = [];

if (optionalAutoIncluded.length > 0) {
  errors.push(
    `${optionalAutoIncluded.length} actividades opcionales comienzan seleccionadas: ${optionalAutoIncluded
      .slice(0, 10)
      .map((activity) => activity.code ?? activity.id)
      .join(", ")}`,
  );
}

if (invalidQuantities.length > 0) {
  errors.push(
    `${invalidQuantities.length} actividades tienen cantidad inicial/mínima/base distinta de 1: ${invalidQuantities
      .slice(0, 10)
      .map(({ code }) => code)
      .join(", ")}`,
  );
}

if (errors.length > 0) {
  console.error("Auditoría de valores iniciales del configurador fallida:");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log("Auditoría de valores iniciales del configurador aprobada.");
console.log(`Servicios: ${services.length}`);
console.log(`Actividades: ${activities.length}`);
console.log(`Obligatorias: ${activities.length - optionalActivities.length}`);
console.log(`Opcionales: ${optionalActivities.length}`);
console.log(`Opcionales auto-seleccionadas: ${optionalAutoIncluded.length}`);
console.log(`Actividades con cantidad editable: ${quantityRules.length}`);
console.log(`Cantidades que parten sobre 1: ${invalidQuantities.length}`);
