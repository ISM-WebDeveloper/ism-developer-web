# Primera mejora: portal y marcas

## Evaluación de la web

La identidad existente combina Manrope, fondos azul oscuro, acentos cian,
navegación flotante y entradas al recorrer la página. La portada ya presenta
servicios, soluciones, casos reales y herramientas comerciales. Faltaba un
acceso visible para quien ya tiene una propuesta o un proyecto con ISM.

El sitio usa HTML estático y JavaScript propio. `src/index.home.html` es la
fuente de la portada; `index.html` se genera con `npm run build:assets`.
Modificar únicamente el HTML publicado perdería cambios al reconstruir.

La sección nueva utiliza una composición abierta, sin tarjetas: texto a la
izquierda, dos accesos separados por líneas y espacio visual a la derecha.
Mantiene la paleta, tipografía y motor de aparición existente. En teléfonos,
los accesos quedan antes del espacio de imagen. La franja con las cuatro marcas
aparece entre la portada y el portafolio, usando nombres tipográficos.

Se ajustó el espacio de navegación para incorporar la sexta opción. La fila
adicional de enlaces móviles se eliminó: el único acceso de navegación es el
menú principal desplegable.

## Accesos

- Propuesta: https://ism-proyect.vercel.app/prospect
- Cliente: https://ism-proyect.vercel.app/portal

Ambos destinos se comprobaron en el navegador: conducen al inicio de sesión con
el tipo de acceso correspondiente seleccionado. `/login` es el acceso general;
se prefirieron las rutas específicas para los dos enlaces públicos.
La revisión llega hasta el inicio de sesión, sin ingresar cuentas privadas.

Los enlaces abren una pestaña nueva, lo indican a tecnologías de asistencia y
usan `noopener noreferrer`. Sus eventos reutilizan la analítica del sitio,
que permanece sujeta al consentimiento existente.

## Imagen y marcas

El área derecha usa la imagen `seccionportal.png` suministrada por el usuario.
Llena toda la mitad derecha, sin márgenes, marco, radios ni pie de imagen.
El encuadre centrado usa `object-fit: cover` para cubrir la columna completa;
puede recortar los extremos según la proporción de la pantalla. En móvil ocupa
todo el ancho debajo de los accesos, con proporción 16:9.

El original de 1672 × 941 px pesa 2.288.484 bytes y no se modificó. Se generaron:

- `assets/img/portal-ism-1280.webp`: 1280 × 720 px, 132.212 bytes (129,1 KB).
- `assets/img/portal-ism-768.webp`: 768 × 432 px, 66.744 bytes (65,2 KB).

La reducción de peso frente al PNG es del 94,2 % y 97,1 %, respectivamente.
`picture`, `srcset` y `sizes` seleccionan la variante según el ancho y la densidad
de pantalla; la carga es diferida y el tamaño queda reservado para evitar saltos.
Para cambiar el arte, actualizar ambas variantes, el `alt` y sus dimensiones
en `src/index.home.html`, por ejemplo:

```html
<img class="ism-portal-image" src="assets/img/portal-ism-1280.webp"
     srcset="assets/img/portal-ism-768.webp 768w, assets/img/portal-ism-1280.webp 1280w"
     sizes="(max-width: 760px) 100vw, 50vw"
     alt="ISM Developer conecta propuestas y proyectos de distintos rubros"
     width="1280" height="720" loading="lazy" decoding="async">
```

Primero guardar la imagen en esa ruta. El CSS conserva el espacio y adapta la
proporción en móvil. Después ejecutar `npm run build:assets` y `npm run validate`.

Las marcas son Badia Salud, Maige Palace, Lecasse y Grupo Proestakis. Se muestran
como texto; no son reproducciones de sus logotipos oficiales. Maige Palace se
incorporó a la franja solicitada, sin inventar un caso de estudio en el portafolio.

## Validación y mantenimiento

- `npm run validate`: aprobado, incluyendo referencias de 12 páginas,
  generación determinista, pruebas existentes, seguridad y accesibilidad.
- Navegador: anchos de 320, 390, 768, 1025, 1280 y 1440 px, sin desbordamiento
  horizontal; menú móvil y ancla del portal comprobados.
- Consola de la portada: sin errores capturados durante la revisión.
- Hoja dedicada `assets/css/portal.css`, con versión minificada generada por la
  cadena existente. Sin bibliotecas ni JavaScript adicionales.
- Recursos medidos de la portada: aproximadamente 982 KB en total y 176 KB de CSS. La auditoría
  suma referencias locales, incluso imágenes diferidas; no mide una visita real
  con caché, compresión de red o Core Web Vitals.
- Se actualizó explícitamente el presupuesto de CSS de 170 a 178 KB y el total
  de 850 a 1000 KB para admitir la sección, la franja y el arte definitivo.
  El límite de imágenes pasó de 600 a 700 KB, incluyendo la variante de 129 KB;
  los límites de HTML y JavaScript se conservaron.

La web acumula muchas capas de ajustes en su CSS principal. Como siguiente
mejora conviene consolidarlas con revisión visual de todas las páginas antes de
seguir añadiendo excepciones. Incorporar los logotipos oficiales completará la
franja de marcas.

En el ajuste posterior se redujeron el título, los márgenes y la altura de los
accesos; los números se reemplazaron por iconos SVG de documento con lupa y
perfil de persona. El título es «De la propuesta al proyecto. Avancemos juntos.».
La composición sigue abierta, sin tarjetas.

## Ajuste móvil de la portada

`assets/css/mobile-layout.css` unifica la alineación hasta 780 px. Centra títulos,
textos, accesos y bloques de la portada, marcas, portafolio, servicios, orientación,
portal, proceso, presentación personal, carrusel, madurez, herramientas, preguntas
frecuentes, contacto y pie. Los campos mantienen una alineación adecuada para
escribir. El arte del portal conserva todo el ancho disponible debajo del texto.

Se verificaron anchos de 320, 390, 430 y 768 px sin desbordamiento horizontal,
además de 1280 px para comprobar que se conserva la composición de escritorio.
El menú abre y cierra, Escape lo cierra y la opción Portal lleva a la sección
cerrando el desplegable. El carrusel y la apertura de respuestas siguen funcionando.
También se comprobaron generación determinista, referencias, accesibilidad,
compatibilidad y presupuesto de recursos. La revisión visual se realizó en el
navegador integrado; no reemplaza pruebas en teléfonos físicos.

La composición prioriza jerarquía visual y enlaces descriptivos, siguiendo
[principios de diseño visual de Nielsen Norman Group](https://www.nngroup.com/articles/principles-visual-design/).
