# Cierre 10/10 · Fase 02 — Rendimiento integral

## Objetivo
Resolver el hallazgo H-003 reduciendo el peso transferido por la portada sin alterar su composición visual, interacciones, animaciones ni flujo de navegación.

## Resultado estático

| Métrica | Antes | Después | Reducción |
|---|---:|---:|---:|
| Recursos locales únicos de la portada | 2,40 MB | 0,63 MB | 73,8 % |
| Portada + recursos locales | 2,49 MB | 0,71 MB | 71,3 % |
| Imágenes locales referenciadas | 1,83 MB | 0,44 MB aprox. | 75,8 % |
| Librería de iconos de la portada | 399,6 KB | 7,0 KB | 98,2 % |

> La medición corresponde al inventario estático de archivos locales referenciados por `index.html` y su CSS principal. Los resultados reales de LCP, INP y CLS deberán verificarse en producción con Lighthouse/PageSpeed Insights después del despliegue.

## Cambios implementados

1. Conversión y redimensionamiento de imágenes bajo el pliegue a WebP con dimensiones acordes a su uso real.
2. Optimización adicional del logo horizontal manteniendo 640 × 255 px.
3. Sustitución de la distribución completa de Lucide en la portada por un paquete mínimo con solo los iconos utilizados.
4. Conservación de `loading="lazy"`, `decoding="async"` y dimensiones explícitas para reducir transferencia y movimientos de diseño.
5. Incorporación de un presupuesto automático mediante `npm run audit:performance`.
6. Integración del presupuesto en `npm run validate` para evitar regresiones futuras.

## Presupuesto incorporado

- HTML: máximo 110 KB.
- CSS: máximo 160 KB.
- JavaScript local de portada: máximo 90 KB.
- Imágenes locales: máximo 600 KB.
- Total local único de portada: máximo 850 KB.

## Fuera de esta fase

- Core Web Vitals reales en producción.
- Cabeceras de caché/CDN del hosting.
- Consentimiento de Analytics y política de privacidad, que corresponden a la Fase 03.
- Pruebas de accesibilidad y compatibilidad física, que corresponden a las Fases 04 y 05.
