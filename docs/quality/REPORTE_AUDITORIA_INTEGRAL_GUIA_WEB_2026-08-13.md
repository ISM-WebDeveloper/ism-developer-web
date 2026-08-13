# Auditoría integral del sitio y Guía Web ISM

Fecha: 13 de agosto de 2026  
Alcance: portada, sección de herramientas de orientación, nueva Guía Web ISM, navegación, conversión, diseño responsivo, accesibilidad, rendimiento, seguridad, privacidad, SEO y mantenibilidad.

## Resultado ejecutivo

El sitio queda apto para publicación desde el punto de vista funcional y técnico. La nueva sección presenta dos recorridos equivalentes —Configurador de servicios y Guía Web ISM— con jerarquía, identidad y llamadas a la acción claras. La guía completa funciona en escritorio y móvil, genera una recomendación coherente y prepara la solicitud para WhatsApp sin depender de un envío simulado.

Evaluación global: **8,7 / 10**.

| Área | Evaluación | Estado |
| --- | ---: | --- |
| Propuesta y claridad comercial | 8,5 / 10 | Sólida |
| Equilibrio y coherencia visual | 9,0 / 10 | Muy sólido |
| Funcionalidad de la guía | 9,2 / 10 | Aprobada |
| Experiencia móvil | 8,8 / 10 | Aprobada |
| Accesibilidad | 9,0 / 10 | Aprobada estáticamente |
| Rendimiento | 8,0 / 10 | Aprobado, con poco margen |
| Seguridad y privacidad | 9,2 / 10 | Aprobadas |
| SEO técnico | 8,7 / 10 | Sólido |
| Mantenibilidad | 7,4 / 10 | Requiere modularización futura |

## Mejoras implementadas

1. La antigua llamada exclusiva al configurador se convirtió en una sección compartida, dividida en dos áreas iguales en escritorio y apilada de forma segura en móvil.
2. Cada herramienta incluye un icono premium propio, título, explicación, atributos destacados y enlace directo, sin repetir el logotipo dentro de las tarjetas.
3. Se creó `/guia-web/` como página productiva con ocho pasos, recomendación personalizada y resumen final.
4. El envío simulado del demo fue sustituido por una solicitud real preparada para WhatsApp, con enlace de respaldo si la primera apertura es bloqueada.
5. Se incorporaron validación de datos, etiquetas accesibles, estados seleccionados con `aria-pressed`, progreso anunciado, enlace de salto y compatibilidad con reducción de movimiento.
6. Se añadieron metadatos sociales, URL canónica, entrada en sitemap y seguimiento analítico sujeto al consentimiento existente.
7. La navegación y el pie ahora enlazan a las dos herramientas.
8. La imagen más pesada de la portada pasó de 433,5 KB a 78,0 KB, reduciendo aproximadamente 355 KB.
9. Se corrigió el desplazamiento móvil para impedir que la barra fija tape el encabezado al avanzar entre pasos.
10. Las auditorías automáticas ahora incluyen la nueva página y sus recursos.

## Evidencia de verificación

- Validación estructural: 5 páginas, 0 errores y 0 advertencias.
- Seguridad y privacidad: aprobadas; hash CSP del JSON-LD verificado.
- Accesibilidad estática: 6 páginas aprobadas; se comprobaron landmarks, H1, enlaces de salto, textos alternativos, nombres accesibles, etiquetas, IDs, diálogos y enlaces externos.
- Compatibilidad moderna: 5 páginas aprobadas para navegadores actuales.
- Prueba real en navegador: portada y guía sin errores de consola.
- Recorrido real verificado: bienvenida, selección obligatoria, rubro, presencia actual, contenido, acciones, recomendación y formulario final.
- Recomendación comprobada para el caso B2B probado: “Sitio web profesional con captación”.
- Diseño responsivo comprobado a 390 × 844 px y 1280 × 720 px, sin desbordamiento horizontal.
- Las dos tarjetas principales miden exactamente lo mismo en escritorio.

## Rendimiento observado

| Recurso inicial auditado | Uso | Presupuesto | Ocupación |
| --- | ---: | ---: | ---: |
| HTML | 77,4 KB | 110 KB | 70 % |
| CSS | 167,1 KB | 170 KB | 98 % |
| JavaScript | 89,9 KB | 90 KB | 99,9 % |
| Imágenes | 492,1 KB | 600 KB | 82 % |
| Total | 827,5 KB | 850 KB | 97 % |

El presupuesto se aprueba, pero CSS, JavaScript y total están muy cerca del límite. Cualquier ampliación relevante debe ir acompañada de división o eliminación de recursos.

## Brechas y acciones recomendadas

### Prioridad alta

1. **Muy poco margen de rendimiento.** `style.css` concentra aproximadamente 157,5 KB y el JavaScript queda casi en el máximo permitido. Próximo paso: separar estilos y lógica por página o funcionalidad, y cargar el portafolio, sliders y diálogos solo donde se utilizan.
2. **La captación depende de completar el envío en WhatsApp.** La guía abre una solicitud preparada, pero no existe persistencia si el visitante cierra WhatsApp o no presiona “Enviar”. Próximo paso: guardar el lead mediante un endpoint propio o servicio de formularios, con consentimiento, protección antispam y notificación al equipo.
3. **Dependencia visual externa.** La portada utiliza 15 iconos de tecnologías alojados en jsDelivr. Una caída, bloqueo corporativo o cambio del CDN puede dejar espacios vacíos. Próximo paso: alojar localmente solo los iconos realmente usados.

### Prioridad media

4. **Recorrido comercial extenso.** La portada tiene aproximadamente 7.482 px de alto y 10 secciones; las herramientas de orientación comienzan cerca del 59 % del recorrido. Próximo paso: añadir en el hero un acceso secundario directo a “Orientación” o evaluar adelantar esta sección con datos de uso reales.
5. **La guía no conserva el progreso al recargar.** Una actualización accidental reinicia las ocho etapas. Próximo paso: guardar únicamente las selecciones no sensibles en `sessionStorage` y eliminarlas al finalizar o reiniciar.
6. **Analítica del embudo incompleta.** Se miden apertura y envío, pero no avance, abandono ni pasos problemáticos. Próximo paso: eventos anónimos por paso, siempre condicionados al consentimiento analítico.
7. **Mantenibilidad limitada.** La hoja principal conserva muchas reglas históricas y variantes superpuestas. Próximo paso: separar base, componentes, secciones y media queries; documentar tokens visuales y eliminar selectores obsoletos con cobertura visual.
8. **Compatibilidad visual pendiente en dispositivos reales.** El análisis estático acepta `backdrop-filter` y unidades `svh`, pero se necesitan comprobaciones manuales en Safari iOS, Chrome Android, Firefox y Edge antes de una campaña de tráfico.

### Prioridad baja

9. Añadir datos estructurados específicos para la guía como aplicación web o experiencia interactiva.
10. Incorporar un resumen descargable o copiable, además de WhatsApp, para usuarios que prefieren correo.
11. Validar después de publicar con Lighthouse y datos de campo para medir LCP, INP y CLS reales.

## Evaluación final

La versión actual resuelve bien el objetivo principal: ofrece dos caminos diferenciados sin competir visualmente, reduce la carga técnica para visitantes no expertos y mantiene una vía avanzada para quienes necesitan dimensionar servicios. La identidad corporativa es consistente, el equilibrio de las tarjetas es correcto y el flujo móvil es usable.

La mayor oportunidad ya no está en añadir más diseño, sino en fortalecer la captación y simplificar la base técnica: persistir solicitudes antes de abrir WhatsApp, modularizar CSS/JavaScript y acercar el acceso a orientación al primer viewport. Con esas tres acciones, el sitio podría avanzar razonablemente desde 8,7 a sobre 9,2 puntos.
