# Prueba manual de accesibilidad · ISM Developer

Registrar navegador, sistema operativo, resolución, resultado y evidencia de cada prueba.

## A. Teclado — portada

1. Presionar Tab al cargar: debe aparecer “Saltar al contenido principal”.
2. Activarlo: el foco debe llegar al contenido principal.
3. Recorrer navbar, CTA, tarjetas, filtros, FAQ, formulario, WhatsApp y footer sin usar mouse.
4. Confirmar que ningún foco queda oculto detrás del navbar.
5. Abrir menú móvil, recorrer solo sus controles, cerrar con Escape y comprobar retorno al botón.
6. Abrir una tarjeta de servicio, comprobar foco en “No, volver”, cerrar con Escape y verificar retorno a la tarjeta.
7. En categorías de proyectos usar flechas, Inicio y Fin.
8. En FAQ usar Enter/Espacio para abrir y cerrar; usar flechas, Inicio y Fin para moverse.
9. Confirmar que todos los focos son claramente visibles.

## B. Formulario

1. Intentar continuar con campos obligatorios vacíos.
2. Confirmar foco en el primer campo inválido y borde de error visible.
3. Completar formulario y verificar anuncio de apertura de WhatsApp.
4. Probar con zoom 200 % y ancho de 320 CSS px sin desplazamiento horizontal.

## C. Portafolio

1. Activar enlace de salto.
2. Abrir sidebar móvil; comprobar contención del foco y cierre con Escape.
3. Expandir y contraer grupos; los proyectos cerrados no deben recibir foco.
4. Cambiar proyecto y confirmar anuncio del nombre seleccionado.
5. En el carrusel usar flechas izquierda/derecha, Inicio y Fin.
6. Confirmar anuncio “Vista X de Y”.
7. Verificar que el enlace externo informa que abre una pestaña nueva.

## D. Privacidad

1. Abrir preferencias desde banner y footer.
2. Confirmar que el foco queda dentro del modal.
3. Cerrar con Escape y verificar retorno al control de origen.
4. Activar/desactivar estadísticas con teclado.
5. Confirmar que la preferencia se conserva tras recargar.

## E. Zoom, contraste y movimiento

1. Zoom del navegador al 200 % en portada, portafolio y privacidad.
2. Aumentar tamaño de texto cuando el navegador lo permita.
3. Activar alto contraste de Windows y revisar foco, botones y textos.
4. Activar “Reducir movimiento”; comprobar contenido visible y ausencia de animaciones prolongadas.
5. Revisar que la información no dependa solamente del color.

## F. Lectores de pantalla

### NVDA + Edge/Chrome
- Recorrer landmarks y encabezados.
- Confirmar nombre/estado de menú, tabs, acordeones, diálogo, formulario, sidebar y carrusel.
- Verificar anuncios de proyecto, diapositiva y formulario.

### VoiceOver + Safari/iPhone
- Repetir navegación por encabezados, enlaces, controles de formulario y componentes dinámicos.
- Confirmar orden lógico y nombres comprensibles.

## Criterio de aprobación

- Ningún bloqueo de teclado.
- Ningún control sin nombre o estado.
- Foco siempre visible.
- Sin pérdida de contenido a 200 %.
- Sin desplazamiento horizontal a 320 CSS px, salvo componentes que lo justifiquen.
- Diálogos y menús devuelven el foco correctamente.
- Lectores de pantalla anuncian cambios relevantes sin exceso de mensajes.
