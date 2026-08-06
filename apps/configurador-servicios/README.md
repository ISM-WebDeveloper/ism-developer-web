# Configurador de Servicios ISM Developer

Aplicación React + TypeScript + Vite para configurar servicios de ISM Developer a partir del catálogo técnico auditado.

## Estado de esta versión

- Versión de aplicación: `0.1.0`
- Catálogo fuente: `2.1 auditado`
- Líneas de servicio: `6`
- Servicios: `21`
- Actividades técnicas: `282`
- Actividades incluidas por defecto: `241`
- Actividades opcionales fuera del alcance base: `41`
- Actividades obligatorias: `150`
- Contingencia comercial: `20 %`

## Fuente del catálogo

La fuente documental está en:

```text
catalog/Catalogo_Tecnico_Servicios_ISM_Developer_v2_1_Auditado.xlsx
```

La aplicación no lee el Excel en producción. El script:

```text
scripts/generateIsmCatalog.mjs
```

valida el libro y genera:

```text
src/data/catalog/generated/ismServices.ts
catalog/AUDITORIA_IMPORTACION_ISM.json
```

## Comandos

```bash
npm install
npm run catalog:ism
npm run dev
npm run build
```

`npm run catalog:ism` debe ejecutarse después de modificar el Catálogo Maestro del Excel.

## Reglas implementadas

- Inicial, Estándar y Avanzado se calculan por actividad.
- Las cantidades diferentes de uno generan controles editables.
- Las actividades obligatorias no pueden excluirse.
- Las actividades marcadas como no incluidas comienzan desactivadas.
- Las selecciones se guardan en `ism-configurator:services:v2.1`.
- El configurador advierte sobre combinaciones redundantes identificadas en la auditoría.
- Excel y PDF utilizan identidad ISM Developer.

## Validación de esta entrega

- Importador ejecutado correctamente: `21 servicios / 282 actividades`.
- TypeScript ejecutado sin errores.
- Build de producción ejecutado correctamente.
- Oxlint no pudo ejecutarse en el entorno de preparación porque el ZIP original contenía dependencias nativas de Windows. Al ejecutar `npm install` en el equipo de trabajo se instalará el binding correspondiente al sistema operativo.
