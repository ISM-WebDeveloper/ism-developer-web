# ISM Developer 3.0 — auditoría final y cierre técnico

Fecha de cierre documental: 2026-09-13. Trabajo y verificaciones: 2026-09-09 a 2026-09-13.

## Resultado general

**APROBADO CON DEUDA**. Los pendientes técnicos de performance, reproducibilidad del build, exportaciones, accesibilidad, SEO y entrega real de correo quedaron corregidos o comprobados. **LISTO PARA RELEASE** con una excepción documentada de cobertura manual en Safari/iOS, navegador no disponible para el usuario ni para este entorno. Producción fue verificada con los artefactos integrados; el agente no realizó el despliegue.

La referencia canónica fue el sitio existente antes de editar CSS. Se conservaron diseño, imágenes, textos comerciales aprobados, precios reales, servicios y comportamiento existente. No se crearon ramas.

## Git y trazabilidad

- Rama: `main`.
- Baseline inicial: `7f6bdc2`, sincronizado con `origin/main`. Ya estaban eliminados los tres ZIP ISM_Fase_08 listados abajo; esas eliminaciones no fueron iniciadas por esta auditoría.
- HEAD validado al retomar: `bc28bb2db0924ceec37b0197f53e6589b9600d12`, commit `normalizacion vi codex`, creado por el usuario y sincronizado con `origin/main` (`0` ahead, `0` behind).
- El agente no hizo commit, push, force push ni despliegue.
- Al iniciar la revalidación del 2026-09-13, el working tree estaba limpio. La actualización posterior de este informe queda local y pendiente de commit.
- La comparación de archivos de este documento se realiza entre `7f6bdc2` y la integración `bc28bb2`; la actualización documental posterior no añade rutas al inventario.

## Cambios y blockers corregidos

1. `portafolio.html`: ambos fallbacks comerciales de implementación y continuidad muestran «Según alcance». Los ocho precios reales dinámicos permanecen intactos.
2. `vercel.json`: hash SHA-256 corregido para el contenido exacto del JSON-LD de `index.html`: `sha256-Eofqju+5PHrB3dSBctDzi8/2vma4CS1AEOF8nmTaLGY=`. CSP sin `unsafe-inline` ni `unsafe-eval`.
3. APIs: el lector compartido limita a 48 KB los bytes realmente recibidos, cancela streams excedidos y diferencia JSON inválido (400) de exceso (413), incluso sin `Content-Length` o con header engañoso.
4. CSS: corregido el fragmento malformado y retiradas declaraciones anteriores demostrablemente anuladas, sin mover reglas efectivas ni reescribir keyframes.
5. Assets: eliminados ZIP, archivos de instrucciones y bundles históricos sin referencias. Se conservaron los recursos activos.
6. Home: creada una compilación determinista que minifica HTML, CSS y JS desde fuentes legibles, conserva nombres y flujo global del JavaScript y usa el favicon PNG aprobado ya existente.
7. Configurador: el catálogo deja de incorporar una fecha volátil y registra el SHA-256 del Excel fuente. Se alineó el orden del CSS fuente con la cascada canónica y se regeneró el build público.
8. Exportaciones: eliminado el desborde de la tabla PDF y corregido el resumen Excel para mostrar tres KPI únicos: Actividades, Servicios y Módulos.
9. Accesibilidad: el configurador publicado tiene un solo `main` y un solo enlace de salto.
10. SEO: Twitter Card completa en home, portafolio, guía, configurador y privacidad; URL histórica de Lecasse retirada; `sitemap.xml` actualizado al 2026-09-12.
11. QA: detección de ZIP físicos, falsos precios, CSP insegura, drift de assets generados y regresiones de exportación. Los scripts `module` ya no generan un falso aviso por ausencia de `defer`.

## CSS, build y equivalencia visual

La limpieza inicial redujo `assets/css/style.css` de 207.006 a 178.047 bytes: 930 declaraciones anteriores retiradas en 169 selectores y 82 usos menos de `!important`. La comparación de 32 propiedades de estilo calculado en 667 elementos y seis resoluciones no encontró diferencias.

La nueva compilación de home genera los archivos públicos desde `src/index.home.html`, los CSS legibles y los JS legibles. `npm run check:assets` vuelve a compilar en memoria y falla si cualquier archivo público difiere de su fuente. La comparación final del resultado minificado revisó 20 propiedades calculadas en 664 elementos a 1920×1080, 1366×768, 768×1024, 360×800, 390×844 y 430×932: cero diferencias estables y cero errores o advertencias de consola.

El configurador se compiló dos veces en directorios aislados: los 15 archivos producidos tuvieron SHA-256 idéntico entre sí. Una compilación aislada posterior también coincidió byte a byte con los 15 archivos publicados en `configurador/`. Persisten avisos informativos de Vite por el CSS compartido resuelto en runtime y chunks lazy superiores a 500 KB; Excel y PDF se cargan sólo al exportar.

## Performance

El gate calcula la unión estática de recursos locales de home, incluidas imágenes lazy. No equivale a Lighthouse ni a una medición de red del primer viewport.

| Recurso | Baseline | Final | Presupuesto | Resultado |
|---|---:|---:|---:|---|
| HTML | 101,2 KB | 75,4 KB | 110 KB | PASS |
| CSS | 213,6 KB | 167,1 KB | 170 KB | PASS |
| JS | 96,7 KB | 62,6 KB | 90 KB | PASS |
| Imágenes | 535,0 KB | 535,0 KB | 600 KB | PASS |
| Otros | 127,3 KB | 0,5 KB | — | Informativo |
| Total | 1.073,8 KB | 840,7 KB | 850 KB | PASS |

El conjunto final contiene 31 recursos locales únicos y queda 9,3 KB bajo el presupuesto total.

## Exportaciones Excel y PDF

La prueba durable `scripts/test-configurator-exports.mjs` transpila el módulo real `catalogReportExport.ts`, captura los archivos producidos y ejecuta 14 aserciones sin red:

- reabre el XLSX con ExcelJS;
- verifica hojas `Resumen` y `Detalle técnico`;
- verifica los tres KPI y sus valores, además de totales y nombre de archivo;
- genera el PDF y valida cabecera, EOF y ausencia del aviso de tabla fuera de página.

Ambas hojas Excel y el PDF se renderizaron y revisaron visualmente: texto legible, acentos correctos y sin recortes ni desbordes. En Chromium integrado se abrió correctamente el modal de exportación. El usuario confirmó el 2026-09-12 que las descargas nativas de Excel y PDF se completaron y que ambos archivos abrieron correctamente.

## Responsive, accesibilidad y funcionalidad

- Seis tamaños verificados sin overflow horizontal. Orden móvil de portafolio correcto: título → enlace de portafolio → tabs → contenido.
- Navbar de escritorio y menú móvil, cierre, CTA, clientes, soluciones, miniaturas, FAQ, teclado y estados ARIA muestreados sin regresión.
- Formulario: empresa opcional y orientación por defecto. Nueve casos del generador real de WhatsApp aprobaron destino, texto y codificación sin enviar mensajes externos.
- Guía: recorrido hasta recomendación de reservas, selección de horarios y contacto. Configurador: 21 servicios inicialmente sin selección; sitio web con 9 actividades obligatorias = 15,96 HH; actividad opcional con cantidad 2 = 10 actividades y 18,36 HH.
- Build del configurador: un `main`, un enlace de salto y cero overflow en la vista comprobada. Producción fue revalidada el 2026-09-13 con `index-DrSBPDdF.js` e `index-CBHc2YE8.css`, un solo `main` y un solo enlace de salto. Auditorías estáticas de accesibilidad de 6 páginas y compatibilidad de 5 páginas aprobadas.
- Navegador real automatizado: Chromium integrado. Edge y Firefox fueron aprobados manualmente por el usuario el 2026-09-12. Safari/iOS no está disponible para el usuario ni para este entorno; se registra como excepción de cobertura, no como fallo observado. Las tecnologías de asistencia tampoco están disponibles en este entorno.

## SEO y enlaces

- Validador: 12 páginas, cero errores y cero advertencias; rutas internas, canonical, Open Graph, Twitter Card y JSON-LD cubiertos según sus comprobaciones estáticas.
- `robots.txt` y `sitemap.xml` coherentes; no se crearon nuevas landing pages.
- Sin falsos precios comerciales en HTML público. Las ocho soluciones conservan sus valores reales y los 32 destinos de conversión revisados.
- Lecasse usa `https://www.lecasse.cl/` tanto en público como en la fuente. Proestakis conserva su dominio vigente. Badia cargó URL y título correctos en la comprobación realizada.
- Instagram y Facebook se revisaron como referencias; no se presenta esta auditoría como comprobación HTTP exhaustiva de todos los destinos externos.

## Seguridad y servicios de producción

La auditoría estática aprobó CSP, HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` y COOP. No se encontraron secretos hardcodeados ni archivos `.env` en el árbol revisado; esto no representa un escaneo completo del historial Git.

Ambos endpoints conservan validación de método/contacto, escape de contenido, Turnstile con comprobación de acción/hostname y timeout. Las 19 pruebas del límite real cubren payload sin `Content-Length`, header engañoso, multibyte, stream cancelado, JSON inválido y respuestas GET/OPTIONS, con red externa bloqueada.

Comprobación pública de `https://www.ismdeveloper.cl`:

- `/api/turnstile-config`: HTTP 200, JSON con clave pública de sitio, `Cache-Control: no-store` y headers estrictos.
- GET de `/api/pre-cotizacion` y `/api/configurador-cotizacion`: HTTP 405.
- OPTIONS de ambos endpoints: HTTP 204.

El usuario confirmó el 2026-09-12 el envío y la recepción real de correo desde el configurador y desde la Guía Web, incluida la confirmación mostrada en interfaz. Con ello se certifican ambos recorridos con Turnstile/Resend en producción. No se inspeccionaron ni expusieron valores privados del entorno productivo.

## QA ejecutado

| Prueba | Resultado | Evidencia |
|---|---|---|
| `npm run check` | PASS | Sintaxis de scripts incluidos |
| `npm run check:assets` | PASS | Assets públicos idénticos a compilación determinista |
| `npm run test:request-limits` | PASS | 19 aserciones, sin red externa |
| `npm run test:configurator-exports` | PASS | 14 aserciones XLSX/PDF |
| `node scripts/validate-site.mjs` | PASS | 12 páginas, 0 errores/avisos |
| `npm run audit:configurator-defaults` | PASS | 21 servicios, 255 actividades; 133 obligatorias, 122 opcionales |
| `npm run audit:performance` | PASS | 840,7 KB / 850 KB |
| `npm run audit:security` | PASS | CSP/hash, headers y controles del script |
| `npm run audit:accessibility` | PASS | Cobertura estática de 6 páginas |
| `npm run audit:compatibility` | PASS | Cobertura estática de 5 páginas |
| `npm run test:guide-calibration` | PASS | 3 escenarios y contrato de correo |
| `npm run validate` / `npm run qa:final` | PASS | Cadena completa, incluido inventario final |
| Build TypeScript + Vite | PASS con avisos | 240 módulos; reproducible en 15 archivos |
| Lint del configurador | PASS | Oxlint |
| Comparación visual home | PASS | 6 resoluciones, 0 diferencias estables |
| Render Excel/PDF | PASS | Hojas y páginas legibles, sin recortes |
| Descarga nativa Excel/PDF | PASS MANUAL | Usuario confirmó descarga y apertura de ambos archivos el 2026-09-12 |
| Turnstile + entrega Resend | PASS MANUAL | Usuario confirmó interfaz y recepción real desde configurador y Guía Web el 2026-09-12 |
| Edge | PASS MANUAL | Usuario confirmó el recorrido solicitado el 2026-09-12 |
| Firefox | PASS MANUAL | Usuario confirmó el recorrido solicitado el 2026-09-12 |
| Safari/iOS | EXCEPCIÓN DOCUMENTADA | No disponible para el usuario ni para el entorno; sin fallo observado |
| `git diff --check` | PASS | Sin errores de whitespace |

Calibración: salud/reservas 23 actividades, 36,15 HH, 30,36 UF; comercio 27/45,28/38,04; digitalización 27/45,78/38,46.

## Scripts principales

| Script | Función |
|---|---|
| `npm run build:assets` | Genera los assets públicos de home desde las fuentes legibles |
| `npm run check:assets` | Detecta drift sin escribir los archivos públicos |
| `npm run test:request-limits` | Prueba el límite real de las APIs |
| `npm run test:configurator-exports` | Prueba Excel y PDF desde el módulo real |
| `npm run configurator:build` | Regenera catálogo y build del configurador |
| `npm run validate` | Ejecuta gates técnicos y funcionales |
| `npm run qa:final` | Ejecuta `validate` y el inventario final |

En un clon limpio debe ejecutarse primero `npm run configurator:install`. Las fuentes editables de home son `src/index.home.html`, los CSS no minificados y los JS no minificados; después de cambiarlas se ejecuta `npm run build:assets`.

## Deuda restante y excepciones

- Crítica: ninguna confirmada en las comprobaciones realizadas.
- Alta: ninguna pendiente en el alcance comprobado.
- Media: cobertura visual manual de Safari/iOS no ejecutada por falta de disponibilidad.
- Baja: revisar disponibilidad en vivo de enlaces de redes sociales si se requiere una certificación externa exhaustiva.

Los avisos de tamaño del build del configurador son informativos: los módulos grandes corresponden a Excel/PDF y se cargan de forma diferida. No incumplen el presupuesto de home.

## Inventario exacto frente a `7f6bdc2`

Estado total: 29 modificados, 20 añadidos y 57 eliminados; 106 rutas.

### Modificados (29)

- `.gitignore`, `.vercelignore`, `QA_FINAL_3.0.md`, `README.md`
- `api/configurador-cotizacion.js`, `api/pre-cotizacion.js`
- `apps/configurador-servicios/catalog/AUDITORIA_IMPORTACION_ISM.json`, `apps/configurador-servicios/index.html`, `apps/configurador-servicios/scripts/generateIsmCatalog.mjs`
- `apps/configurador-servicios/src/app/App.tsx`, `apps/configurador-servicios/src/features/catalog/catalogReportExport.ts`, `apps/configurador-servicios/src/index.css`, `apps/configurador-servicios/src/pages/CatalogPage.css`, `apps/configurador-servicios/src/platforms/shared/StandardPlatformCatalogPage.tsx`
- `assets/css/style.css`, `configurador/index.html`, `guia-web/index.html`, `index.html`, `package.json`, `portafolio.html`, `privacidad.html`
- `scripts/accessibility-audit.mjs`, `scripts/final-qa.mjs`, `scripts/performance-budget.mjs`, `scripts/security-audit.mjs`, `scripts/validate-site.mjs`
- `sitemap.xml`, `src/index_proyectos.html`, `vercel.json`

### Añadidos (20)

- `api/_config/read-limited-json.js`, `scripts/test-request-limits.mjs`
- `assets/css/accessibility.min.css`, `assets/css/premium-motion.min.css`, `assets/css/privacy-consent.min.css`, `assets/css/style.min.css`
- `assets/js/accessibility.min.js`, `assets/js/analytics.min.js`, `assets/js/privacy-consent.min.js`, `assets/js/reveal-compat.min.js`, `assets/js/script.min.js`
- `configurador/assets/exceljs.min-CbxkATb8.js`, `configurador/assets/html2canvas-B4sgDZHc.js`, `configurador/assets/index-CBHc2YE8.css`, `configurador/assets/index-DrSBPDdF.js`, `configurador/assets/index.es-4SewgGAM.js`, `configurador/assets/jspdf.es.min-BDYeMmL4.js`
- `scripts/build-home-assets.mjs`, `scripts/test-configurator-exports.mjs`, `src/index.home.html`

### Eliminados (57)

- `ISM_Fase_08_1_Centrado_Final.zip`, `ISM_Fase_08_2_Portafolio_Mobile_Order.zip`, `ISM_Fase_08_Cierre_Comercial.zip`
- `LEEME_FASE_01.txt`, `LEEME_FASE_02.txt`, `LEEME_FASE_02_1.txt`, `LEEME_FASE_02_2.txt`, `LEEME_FASE_03.txt`, `LEEME_FASE_04.txt`, `LEEME_FASE_04_1.txt`, `LEEME_FASE_04_2.txt`, `LEEME_FASE_04_4.txt`, `LEEME_FASE_04_5.txt`, `LEEME_FASE_05.txt`, `LEEME_FASE_06.txt`, `LEEME_FASE_07.txt`, `LEEME_FASE_08.txt`, `LEEME_ICONOS.txt`, `LEEME_NAV_FINAL.txt`
- `assets/css/portafolio-footer-center-final.css`, `assets/css/portafolio-mobile-final-v2.css`, `assets/css/portafolio-mobile-final-v3.css`, `assets/css/portafolio-mobile-final-v4.css`, `assets/css/portafolio-mobile-final.css`, `assets/js/portafolio.js`, `folder-open-svgrepo-com.svg`
- `configurador/assets/exceljs.min-BE7sCGzH.js`, `configurador/assets/exceljs.min-DAJtssN3.js`, `configurador/assets/exceljs.min-YDRs9Hwl.js`, `configurador/assets/exceljs.min-nO2filzE.js`, `configurador/assets/exceljs.min-vGHlCaXp.js`
- `configurador/assets/html2canvas-CCYOkI-V.js`, `configurador/assets/html2canvas-CNjkO8JD.js`, `configurador/assets/html2canvas-CucVaCri.js`, `configurador/assets/html2canvas-DblfEzTb.js`, `configurador/assets/html2canvas-ydLp4qPZ.js`
- `configurador/assets/index-8HL3_p4v.js`, `configurador/assets/index-Aw7kCG3c.js`, `configurador/assets/index-BIaKnVdt.css`, `configurador/assets/index-BYuTVGHe.js`, `configurador/assets/index-BfTVHa17.css`, `configurador/assets/index-BtjoJOdw.js`, `configurador/assets/index-CDKsFY2f.js`, `configurador/assets/index-D4kF1COe.css`, `configurador/assets/index-DCGUkTI7.js`, `configurador/assets/index-DE97SzpS.css`
- `configurador/assets/index.es-1RGZt79Y.js`, `configurador/assets/index.es-DYWo4fDG.js`, `configurador/assets/index.es-DZ6pHGSv.js`, `configurador/assets/index.es-D_rrYBeN.js`, `configurador/assets/index.es-HqlkoYwJ.js`
- `configurador/assets/jspdf.es.min-B_Pz7Ekk.js`, `configurador/assets/jspdf.es.min-CBKozFb9.js`, `configurador/assets/jspdf.es.min-CDTBHLc2.js`, `configurador/assets/jspdf.es.min-CQVM0Pn8.js`, `configurador/assets/jspdf.es.min-CvJ5QYLv.js`, `configurador/assets/jspdf.es.min-DtbvGh-V.js`

El ZIP ajeno `Maige-Palace-Pendiente-5-Documentacion-Final.zip` se trasladó sin destruirlo al directorio de evidencias. No forma parte de las eliminaciones versionadas.

## Evidencia externa

Directorio: `C:/Users/ignse/.codex/visualizations/2026/09/10/01a0889f-70de-7592-b599-b4c88d4792f7`.

Contiene `css-removals.json`, `asset-graph.json`, `deleted-files.json`, `seo-links.json`, los CSS de comparación y el ZIP ajeno trasladado. Las capturas, builds aislados y archivos sintéticos usados para revisar Excel/PDF permanecen fuera del repositorio.

## Recomendación de release

**LISTO PARA RELEASE.** El código, los gates automatizados, Chromium, Edge, Firefox, las exportaciones descargadas y los dos envíos reales están aprobados. La ausencia de Safari/iOS queda como deuda media de cobertura y no bloquea este cierre. Producción carga la integración `bc28bb2`; el agente no hizo commit, push ni despliegue.
