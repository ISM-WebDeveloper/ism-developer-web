# Integración del Configurador de Servicios ISM Developer

## Resultado

El configurador React/Vite quedó integrado en el mismo proyecto y dominio del sitio:

- Sitio principal: `/`
- Configurador: `/configurador/`
- Acceso desde el navbar, footer y seis tarjetas de servicios.
- Las tarjetas conservan el parámetro `?servicio=...` para abrir la línea correspondiente.

## Estructura

- `apps/configurador-servicios/`: código fuente del configurador.
- `configurador/`: build de producción publicado por el sitio estático.
- `assets/js/script.js`: conserva el diálogo de confirmación previo a abrir el configurador.

## Flujo de actualización

1. Editar las horas en el Excel fuente del configurador.
2. Desde la raíz del sitio ejecutar `npm run configurator:catalog`.
3. Ejecutar `npm run configurator:build`.
4. Validar el sitio con `npm run validate`.

La instalación de dependencias del configurador se realiza una sola vez con:

`npm run configurator:install`

## Decisiones de integración

- No se utiliza iframe.
- El configurador abre en la misma pestaña y bajo el mismo dominio.
- El logo oficial se reutiliza desde el proyecto.
- La ruta `/configurador/` permanece marcada como `noindex` mientras el catálogo tenga horas preliminares.
- Los assets compilados usan rutas absolutas bajo `/configurador/assets/`.

## Validación ejecutada

- Generación de catálogo: 21 servicios y 282 actividades.
- TypeScript: aprobado.
- Build Vite integrado hacia `/configurador/`: aprobado.
- Validación estructural del sitio: aprobada, 0 errores.
- Auditoría de seguridad y privacidad: aprobada.
- Auditoría estática de accesibilidad: aprobada para 5 páginas, incluido el configurador.
- Auditoría de compatibilidad moderna: aprobada.
- Pruebas HTTP locales: `/configurador/`, parámetros de servicio, JavaScript, CSS, logo y favicon respondieron correctamente.

## Observaciones pendientes

- El presupuesto de rendimiento global del sitio continúa fallando por una imagen anterior de aproximadamente 3,5 MB (`Gemini_Generated_Image_4mbsp14mbsp14mbs.png`). No fue causado por esta integración.
- ExcelJS y jsPDF producen chunks grandes. Funcionan correctamente, pero conviene cargarlos de forma diferida en una fase posterior para acelerar la entrada inicial al configurador.
- Las horas del catálogo siguen marcadas como preliminares hasta completar su calibración definitiva.
