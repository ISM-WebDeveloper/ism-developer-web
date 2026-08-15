# Configurador de Servicios ISM Developer

Aplicación React + TypeScript + Vite para configurar servicios de ISM Developer a partir del catálogo técnico auditado.

## Estado de esta versión

- Versión de aplicación: `0.1.0`
- Catálogo fuente: `2.3 simplificado`
- Líneas de servicio: `6`
- Servicios: `21`
- Actividades técnicas: `254`
- Actividades incluidas por defecto: `213`
- Actividades opcionales fuera del alcance base: `41`
- Actividades obligatorias: `132`
- Contingencia comercial: `20 %`

## Fuente del catálogo

La fuente documental está en:

```text
catalog/Catalogo_Tecnico_Servicios_ISM_Developer_v2_3_Simplificado_LIMPIO.xlsx
```

La aplicación no lee el Excel en producción. El script:

```text
scripts/generateIsmCatalog.mjs
```

valida el libro y genera dos salidas sincronizadas desde la misma fuente:

```text
src/data/catalog/generated/ismServices.ts
../../api/_generated/ism-guide-catalog.js
catalog/AUDITORIA_IMPORTACION_ISM.json
```

La primera alimenta el Configurador de Servicios. La segunda es un snapshot técnico mínimo utilizado exclusivamente por el backend de la Guía Web para estimaciones internas.

## Comandos

```bash
npm install
npm run catalog:ism
npm run dev
npm run build
```

`npm run catalog:ism` puede ejecutarse después de modificar el Catálogo Maestro del Excel.

Además, `npm run dev` y `npm run build` ejecutan la sincronización automáticamente antes de iniciar o compilar. Por lo tanto, cambios de HH base, nombres, cantidades o estados realizados en el Excel fuente pasan a ambas herramientas al regenerar el catálogo.

> Importante: los códigos de actividad (`WEB-xxx`, `APP-xxx`, `INT-xxx`) funcionan como claves de integración. Si se cambia o elimina un código, también debe revisarse la regla comercial de la Guía Web que lo utiliza.

### Publicación del configurador

El sitio público utiliza los archivos compilados de `/configurador/`. Por eso, después de editar el Excel o el código del configurador, ejecuta desde la raíz del sitio:

```bash
npm run configurator:build
```

El `prebuild` de la aplicación sincroniza automáticamente el Excel antes de compilar. No basta con hacer `push` de `src/` si no se actualiza también la salida compilada de `/configurador/`.


## Reglas implementadas

- Cada actividad tiene una única HH base.
- No existen factores de reutilización ni escenarios de horas por actividad.
- La reutilización o esfuerzo extraordinario se define una sola vez como factor global al final del proyecto.
- La contingencia se aplica una sola vez al total final.
- Las cantidades se muestran solo cuando representan unidades realmente repetibles. Las actividades por `Proyecto` son siempre 1 y no muestran selector.
- `WEB-009` (sección estándar), `WEB-014` (formulario) y `WEB-016` (página interna) permiten ajustar cantidad aunque su base sea 1.
- Las actividades obligatorias no pueden excluirse.
- Las actividades opcionales comienzan desactivadas.
- Las selecciones se guardan en `ism-configurator:services:v2.3`.
- El configurador advierte sobre combinaciones redundantes identificadas en la auditoría.
- Excel y PDF utilizan identidad ISM Developer.

## Validación de esta entrega

- Importador v2.3 ejecutado correctamente: `21 servicios / 254 actividades / 0,70 UF/HH`.
- Verificación de reglas de cantidad: actividades por proyecto sin selector; secciones/páginas repetibles con cantidad editable.
- Códigos retirados de la v2.3 rechazados por el generador.
- Archivos TypeScript/TSX intervenidos validados sintácticamente.
