# Reporte Fase 4 · Accesibilidad WCAG 2.2 AA

Fecha: 5 de agosto de 2026  
Proyecto: ISM Developer v2.0  
Hallazgo tratado: H-012

## Objetivo

Fortalecer la operación mediante teclado, la percepción del foco, la estructura semántica, los componentes dinámicos y el comportamiento con tecnologías de asistencia, sin alterar la identidad visual aprobada.

## Mejoras implementadas

### Estructura y navegación
- Enlaces de salto al contenido principal en portada, portafolio, privacidad y configurador.
- Destinos principales con `tabindex="-1"` para recibir foco programático sin entrar en el orden normal de tabulación.
- Actualización de `aria-current="location"` en el navbar según la sección visible.
- Navegación interna que desplaza y mueve el foco al contenido solicitado.
- Menú móvil con gestión de foco, cierre mediante Escape y contención del foco mientras está abierto.

### Controles y foco
- Capa CSS común con foco visible de alto contraste.
- Soporte para modo de alto contraste de Windows mediante `forced-colors`.
- Tamaño mínimo de 44 × 44 px para controles principales.
- Eliminación de cinco botones decorativos sin función real en la sección Sobre mí.
- Iconos decorativos fuera del árbol accesible.

### Servicios y diálogo
- Diálogo de confirmación con `aria-modal`, título y descripción asociados.
- Foco inicial en “No, volver”.
- Retorno del foco a la tarjeta que abrió el diálogo.
- Conservación del comportamiento nativo de Escape y del enlace de respaldo.

### Portafolio de la portada
- Patrón semántico `tablist` / `tab` / `tabpanel`.
- Navegación por flechas, Inicio y Fin entre categorías.
- Proyectos ocultos retirados del foco y del árbol accesible.
- Estado seleccionado expuesto mediante `aria-pressed`.
- Región viva para anunciar el proyecto seleccionado.

### Preguntas frecuentes
- Respuestas cerradas con `aria-hidden` e `inert` cuando corresponde.
- Relación entre pregunta y respuesta mediante `aria-controls` y `aria-labelledby`.
- Navegación opcional con flechas, Inicio y Fin entre preguntas.
- El símbolo “+” se declara decorativo.

### Formulario
- Campos obligatorios identificados visualmente y para lectores de pantalla.
- Longitudes máximas razonables para nombre, empresa, teléfono y mensaje.
- Región viva para errores y confirmación de apertura de WhatsApp.
- `aria-invalid` aplicado durante errores de validación.
- Descripción del comportamiento del formulario asociada mediante `aria-describedby`.

### Portafolio detallado
- Enlace de salto y landmark principal enfocable.
- Sidebar móvil con `aria-controls`, `aria-expanded`, cierre con Escape y contención del foco.
- Grupos colapsados retirados del árbol accesible cuando están cerrados.
- Carrusel con instrucciones para teclado, estado anunciado, diapositivas activas identificadas y progreso expuesto como `progressbar`.
- Enlace externo anuncia que abre una pestaña nueva.

### Privacidad
- Política con enlace de salto al contenido.
- Interruptor estadístico expuesto como `role="switch"`.
- Modal descrito y fondo decorativo oculto a tecnologías de asistencia.
- Se conserva el cierre con Escape, el retorno del foco y la contención ya implementados.

### Movimiento reducido
- `prefers-reduced-motion: reduce` desactiva desplazamientos suaves, animaciones, transiciones y revelados que podrían generar molestias.
- El contenido permanece visible incluso cuando el movimiento está reducido.

## Auditoría automática

Se agregó:

```bash
npm run audit:accessibility
```

La auditoría revisa cinco páginas y comprueba:
- idioma y viewport;
- título y H1;
- landmarks principales;
- enlaces de salto;
- textos alternativos;
- nombres accesibles de botones;
- etiquetas de formulario;
- IDs duplicados;
- destinos de `aria-controls`;
- diálogos etiquetados;
- enlaces externos seguros;
- ausencia de `tabindex` positivo;
- componentes específicos de contacto, diálogo, tabs, sidebar y carrusel.

## Resultado técnico

```text
Validación correcta: 4 páginas, 0 errores, 0 advertencias.
Presupuesto de rendimiento aprobado: 769,5 KB / 850 KB.
Auditoría de seguridad y privacidad aprobada.
Auditoría estática de accesibilidad aprobada: 5 páginas.
```

## Estado de H-012

**Implementado en código y auditoría estática.**  
Para cerrarlo definitivamente todavía se requiere ejecutar la matriz manual adjunta con teclado real, zoom 200 %, NVDA y VoiceOver cuando estén disponibles. Una auditoría automática no sustituye una prueba con usuarios ni con lectores de pantalla.
