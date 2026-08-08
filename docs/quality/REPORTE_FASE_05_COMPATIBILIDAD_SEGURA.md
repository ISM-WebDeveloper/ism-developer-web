# Fase 5 segura — Compatibilidad moderna

## Alcance

Esta fase se aplicó sobre el ZIP estable de la Fase 4. No modifica `index.html`, `style.css`, animaciones, navegación ni componentes visuales.

## Correcciones realizadas

- Hash CSP del JSON-LD actualizado en `vercel.json`.
- Auditoría estática `scripts/compatibility-audit.mjs` agregada.
- Comando `npm run audit:compatibility` incorporado.
- `npm run validate` ampliado para ejecutar la auditoría de compatibilidad.
- Confirmado el respaldo nativo del diálogo de Servicios cuando `<dialog>.showModal()` no está disponible.
- Confirmado que el motor de aparición utiliza `requestAnimationFrame` con respaldo y no depende de `IntersectionObserver`.
- Confirmada la ausencia de capas invasivas `compatibility.css`, `browser-compat.js` y `legacy-ie.css`.

## Hash CSP aplicado

`sha256-JjHgb+LkE6dpeXLemODU437SuCCrXMDCKl9+qKjZ4+s=`

## Navegadores objetivo

- Microsoft Edge actual.
- Google Chrome actual.
- Mozilla Firefox actual.
- Safari actual.
- Chrome para Android.
- Safari para iPhone/iPad.

Internet Explorer y el modo IE quedan fuera del alcance porque no son compatibles con la experiencia premium moderna del sitio.

## Límite de la auditoría

La auditoría estática comprueba estructura y respaldos presentes en el código. H-013 solo se cierra después de completar la matriz manual en navegadores o dispositivos reales.
