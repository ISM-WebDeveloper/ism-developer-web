// ==================================================
// IMPORTACIONES
// ==================================================

import type { PlatformCatalog } from "../../../types/catalog";

// ==================================================
// CATÁLOGO GENERADO
// ==================================================

/**
 * Archivo generado desde Catalogo_Tecnico_Servicios_ISM_Developer_v2_3_Simplificado_LIMPIO.xlsx.
 * No editar manualmente. Modifica el Excel fuente y ejecuta npm run catalog:ism.
 */
export const ismServicesCatalog: PlatformCatalog = {
  "id": "ism-servicios",
  "name": "Servicios ISM Developer",
  "shortName": "ISM Developer",
  "description": "Configurador técnico consolidado de servicios digitales, continuidad, seguridad y soporte.",
  "contingencyRate": 0.2,
  "hourlyRateUF": 0.7,
  "catalogVersion": "2.3",
  "areas": [
    {
      "id": "desarrollo-implementacion",
      "name": "Desarrollo e Implementación",
      "description": "Sitios web, sistemas de gestión, integraciones y automatización de procesos.",
      "order": 1,
      "summary": {
        "serviceCodes": 3,
        "activityLines": 51,
        "activities": 51
      },
      "services": [
        {
          "id": "ism-web-01",
          "code": "WEB-01",
          "name": "Sitio web profesional",
          "areaId": "desarrollo-implementacion",
          "groupLabel": "Desarrollo e Implementación",
          "sourceSheet": "Catalogo Maestro",
          "unit": "service",
          "sizeMode": "not-applicable",
          "activities": [
            {
              "id": "web-001",
              "code": "WEB-001",
              "name": "Levantamiento y planificación inicial",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Planificación",
              "unitLabel": "Proyecto",
              "baseHours": 1.5,
              "scope": "Incluye: objetivos y público objetivo; inventario de contenidos; propuesta de valor y CTA principal; mapa de navegación; orden de secciones; flujo general; wireframe base de la página principal.",
              "exclusions": "No incluye redacción profesional completa, investigación de mercado extensa ni prototipo de alta fidelidad.",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Planificación",
                "Condición: Base obligatorio",
                "Unidad: Proyecto",
                "Incluye: objetivos y público objetivo; inventario de contenidos; propuesta de valor y CTA principal; mapa de navegación; orden de secciones; flujo general; wireframe base de la página principal.",
                "Exclusiones: No incluye redacción profesional completa, investigación de mercado extensa ni prototipo de alta fidelidad.",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-005",
              "code": "WEB-005",
              "name": "Preparación técnica y sistema visual base",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Preparación",
              "unitLabel": "Proyecto",
              "baseHours": 2,
              "scope": "Incluye: creación/ajuste de repositorio; estructura del proyecto; configuración inicial; colores, tipografías, espaciados, botones y componentes base reutilizables.",
              "exclusions": "No incluye branding completo ni diseño de identidad corporativa desde cero.",
              "dependencies": [
                "WEB-001"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Preparación",
                "Condición: Base obligatorio",
                "Unidad: Proyecto",
                "Incluye: creación/ajuste de repositorio; estructura del proyecto; configuración inicial; colores, tipografías, espaciados, botones y componentes base reutilizables.",
                "Exclusiones: No incluye branding completo ni diseño de identidad corporativa desde cero.",
                "Dependencias: WEB-001",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-007",
              "code": "WEB-007",
              "name": "Navbar, navegación principal y menú móvil",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Interfaz",
              "unitLabel": "Componente",
              "baseHours": 1.2,
              "scope": "Incluye: logo, enlaces, CTA de navegación cuando corresponda, estados activos y comportamiento móvil.",
              "exclusions": "No incluye megamenús complejos ni navegación dinámica por permisos.",
              "dependencies": [
                "WEB-001",
                "WEB-005"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.2
              },
              "notes": [
                "Fase: Interfaz",
                "Condición: Base obligatorio",
                "Unidad: Componente",
                "Incluye: logo, enlaces, CTA de navegación cuando corresponda, estados activos y comportamiento móvil.",
                "Exclusiones: No incluye megamenús complejos ni navegación dinámica por permisos.",
                "Dependencias: WEB-001, WEB-005",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-008",
              "code": "WEB-008",
              "name": "Hero principal y llamada a la acción",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Interfaz",
              "unitLabel": "Componente",
              "baseHours": 1.8,
              "scope": "Incluye: titular, subtítulo, CTA, recurso visual entregado/disponible, composición y adaptación responsive.",
              "exclusions": "No incluye sesión fotográfica, producción audiovisual ni ilustración compleja a medida.",
              "dependencies": [
                "WEB-001",
                "WEB-005"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.8
              },
              "notes": [
                "Fase: Interfaz",
                "Condición: Base obligatorio",
                "Unidad: Componente",
                "Incluye: titular, subtítulo, CTA, recurso visual entregado/disponible, composición y adaptación responsive.",
                "Exclusiones: No incluye sesión fotográfica, producción audiovisual ni ilustración compleja a medida.",
                "Dependencias: WEB-001, WEB-005",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-009",
              "code": "WEB-009",
              "name": "Sección estándar de contenido",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Interfaz",
              "unitLabel": "Sección",
              "baseHours": 1,
              "scope": "Incluye por unidad: título, texto, imagen/icono, tarjetas simples o bloque informativo y adaptación responsive.",
              "exclusions": "No incluye lógica avanzada, filtros ni contenido dinámico.",
              "dependencies": [
                "WEB-005"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1
              },
              "notes": [
                "Fase: Interfaz",
                "Condición: Base incluido",
                "Unidad: Sección",
                "Incluye: Incluye por unidad: título, texto, imagen/icono, tarjetas simples o bloque informativo y adaptación responsive.",
                "Exclusiones: No incluye lógica avanzada, filtros ni contenido dinámico.",
                "Dependencias: WEB-005",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Sección)",
                "baseQuantity": 1,
                "defaultQuantity": 1,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "web-010",
              "code": "WEB-010",
              "name": "Sección de servicios con tarjetas",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Interfaz",
              "unitLabel": "Sección",
              "baseHours": 1,
              "scope": "Incluye: tarjetas de servicios, iconos o imágenes, descripciones breves y CTA relacionado.",
              "exclusions": "No incluye catálogo transaccional, reservas ni cálculo dinámico de precios.",
              "dependencies": [
                "WEB-005"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1
              },
              "notes": [
                "Fase: Interfaz",
                "Condición: Base incluido",
                "Unidad: Sección",
                "Incluye: tarjetas de servicios, iconos o imágenes, descripciones breves y CTA relacionado.",
                "Exclusiones: No incluye catálogo transaccional, reservas ni cálculo dinámico de precios.",
                "Dependencias: WEB-005",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-011",
              "code": "WEB-011",
              "name": "Galería o portafolio",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Interfaz",
              "unitLabel": "Sección",
              "baseHours": 1.5,
              "scope": "Incluye: grilla/slider, visualización de proyectos o trabajos, modal o navegación simple según alcance.",
              "exclusions": "No incluye carga masiva, edición de imágenes ni CMS complejo.",
              "dependencies": [
                "WEB-005"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Interfaz",
                "Condición: Opcional",
                "Unidad: Sección",
                "Incluye: grilla/slider, visualización de proyectos o trabajos, modal o navegación simple según alcance.",
                "Exclusiones: No incluye carga masiva, edición de imágenes ni CMS complejo.",
                "Dependencias: WEB-005",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-012",
              "code": "WEB-012",
              "name": "Testimonios o casos de éxito",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Interfaz",
              "unitLabel": "Sección",
              "baseHours": 1.5,
              "scope": "Incluye: tarjetas, autor, cargo/empresa cuando aplique y adaptación responsive.",
              "exclusions": "No incluye producción de testimonios ni validación legal de contenido.",
              "dependencies": [
                "WEB-005"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Interfaz",
                "Condición: Opcional",
                "Unidad: Sección",
                "Incluye: tarjetas, autor, cargo/empresa cuando aplique y adaptación responsive.",
                "Exclusiones: No incluye producción de testimonios ni validación legal de contenido.",
                "Dependencias: WEB-005",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-013",
              "code": "WEB-013",
              "name": "Preguntas frecuentes",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Interfaz",
              "unitLabel": "Sección",
              "baseHours": 1,
              "scope": "Incluye: acordeón o listado estructurado, estados y contenido entregado por cliente.",
              "exclusions": "No incluye redacción especializada ni base de conocimiento dinámica.",
              "dependencies": [
                "WEB-005"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1
              },
              "notes": [
                "Fase: Interfaz",
                "Condición: Opcional",
                "Unidad: Sección",
                "Incluye: acordeón o listado estructurado, estados y contenido entregado por cliente.",
                "Exclusiones: No incluye redacción especializada ni base de conocimiento dinámica.",
                "Dependencias: WEB-005",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-014",
              "code": "WEB-014",
              "name": "Formulario de contacto con envío por correo",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Conversión",
              "unitLabel": "Formulario",
              "baseHours": 1,
              "scope": "Incluye: campos, validaciones, estados, consentimiento básico, endpoint o servicio de envío, plantilla simple de correo y prueba de entrega.",
              "exclusions": "No incluye CRM, automatizaciones complejas, adjuntos pesados ni flujos de aprobación.",
              "dependencies": [
                "WEB-005"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1
              },
              "notes": [
                "Fase: Conversión",
                "Condición: Opcional",
                "Unidad: Formulario",
                "Incluye: campos, validaciones, estados, consentimiento básico, endpoint o servicio de envío, plantilla simple de correo y prueba de entrega.",
                "Exclusiones: No incluye CRM, automatizaciones complejas, adjuntos pesados ni flujos de aprobación.",
                "Dependencias: WEB-005",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Formulario)",
                "baseQuantity": 1,
                "defaultQuantity": 1,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "web-015",
              "code": "WEB-015",
              "name": "Footer y cierre de navegación",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Interfaz",
              "unitLabel": "Componente",
              "baseHours": 1,
              "scope": "Incluye: datos de contacto, enlaces legales/útiles, redes cuando existan y estructura responsive.",
              "exclusions": "No incluye contenido legal redactado por ISM.",
              "dependencies": [
                "WEB-005"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1
              },
              "notes": [
                "Fase: Interfaz",
                "Condición: Base obligatorio",
                "Unidad: Componente",
                "Incluye: datos de contacto, enlaces legales/útiles, redes cuando existan y estructura responsive.",
                "Exclusiones: No incluye contenido legal redactado por ISM.",
                "Dependencias: WEB-005",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-016",
              "code": "WEB-016",
              "name": "Página interna estándar",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Interfaz",
              "unitLabel": "Página",
              "baseHours": 1.5,
              "scope": "Incluye: estructura reutilizando navbar/footer, hero interno y bloques estándar de contenido.",
              "exclusions": "No incluye lógica transaccional ni diseño completamente único por página.",
              "dependencies": [
                "WEB-005",
                "WEB-007"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Interfaz",
                "Condición: Opcional",
                "Unidad: Página",
                "Incluye: estructura reutilizando navbar/footer, hero interno y bloques estándar de contenido.",
                "Exclusiones: No incluye lógica transaccional ni diseño completamente único por página.",
                "Dependencias: WEB-005, WEB-007",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Página)",
                "baseQuantity": 1,
                "defaultQuantity": 1,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "web-017",
              "code": "WEB-017",
              "name": "Integración de WhatsApp",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Integración ligera",
              "unitLabel": "Integración",
              "baseHours": 0.5,
              "scope": "Incluye: enlace, mensaje inicial opcional, CTA y pruebas de funcionamiento.",
              "exclusions": "No incluye chatbot, API oficial ni automatización de conversaciones.",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.5
              },
              "notes": [
                "Fase: Integración ligera",
                "Condición: Opcional",
                "Unidad: Integración",
                "Incluye: enlace, mensaje inicial opcional, CTA y pruebas de funcionamiento.",
                "Exclusiones: No incluye chatbot, API oficial ni automatización de conversaciones.",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-018",
              "code": "WEB-018",
              "name": "Integración de redes sociales",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Integración ligera",
              "unitLabel": "Integración",
              "baseHours": 0.5,
              "scope": "Incluye: enlaces/iconos a redes definidas y verificación básica.",
              "exclusions": "No incluye gestión de redes, feeds dinámicos ni APIs sociales.",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.5
              },
              "notes": [
                "Fase: Integración ligera",
                "Condición: Opcional",
                "Unidad: Integración",
                "Incluye: enlaces/iconos a redes definidas y verificación básica.",
                "Exclusiones: No incluye gestión de redes, feeds dinámicos ni APIs sociales.",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-019",
              "code": "WEB-019",
              "name": "Integración de mapa o ubicación",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Integración ligera",
              "unitLabel": "Integración",
              "baseHours": 0.5,
              "scope": "Incluye: mapa embebido o enlace de ubicación y prueba responsive.",
              "exclusions": "No incluye cálculo de rutas, geocodificación ni mapas personalizados.",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.5
              },
              "notes": [
                "Fase: Integración ligera",
                "Condición: Opcional",
                "Unidad: Integración",
                "Incluye: mapa embebido o enlace de ubicación y prueba responsive.",
                "Exclusiones: No incluye cálculo de rutas, geocodificación ni mapas personalizados.",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-021",
              "code": "WEB-021",
              "name": "Carga y formato inicial de contenidos",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Contenido",
              "unitLabel": "Proyecto",
              "baseHours": 1.2,
              "scope": "Incluye: carga, jerarquía, formato y ajustes menores sobre textos e imágenes entregados por el cliente.",
              "exclusions": "No incluye copywriting profesional, traducción ni producción masiva de contenido.",
              "dependencies": [
                "WEB-001"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.2
              },
              "notes": [
                "Fase: Contenido",
                "Condición: Base incluido",
                "Unidad: Proyecto",
                "Incluye: carga, jerarquía, formato y ajustes menores sobre textos e imágenes entregados por el cliente.",
                "Exclusiones: No incluye copywriting profesional, traducción ni producción masiva de contenido.",
                "Dependencias: WEB-001",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-022",
              "code": "WEB-022",
              "name": "Validación responsive y compatibilidad final",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Calidad",
              "unitLabel": "Proyecto",
              "baseHours": 2,
              "scope": "Incluye: revisión final en móvil, tablet y escritorio; navegación; desbordes; foco; estados básicos y navegadores definidos. El responsive se construye desde el inicio en cada componente.",
              "exclusions": "No incluye reconstruir componentes fuera de alcance.",
              "dependencies": [
                "WEB-007",
                "WEB-008",
                "WEB-009",
                "WEB-010",
                "WEB-014",
                "WEB-015"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Calidad",
                "Condición: Base obligatorio",
                "Unidad: Proyecto",
                "Incluye: revisión final en móvil, tablet y escritorio; navegación; desbordes; foco; estados básicos y navegadores definidos. El responsive se construye desde el inicio en cada componente.",
                "Exclusiones: No incluye reconstruir componentes fuera de alcance.",
                "Dependencias: WEB-007, WEB-008, WEB-009, WEB-010, WEB-014, WEB-015",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-023",
              "code": "WEB-023",
              "name": "SEO técnico inicial e indexabilidad",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "SEO",
              "unitLabel": "Proyecto",
              "baseHours": 1.5,
              "scope": "Incluye: titles, descriptions, canonical, OG/social, sitemap, robots, revisión de indexabilidad y datos estructurados básicos cuando apliquen.",
              "exclusions": "No incluye estrategia SEO mensual, link building ni investigación avanzada de palabras clave.",
              "dependencies": [
                "WEB-001"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: SEO",
                "Condición: Base incluido",
                "Unidad: Proyecto",
                "Incluye: titles, descriptions, canonical, OG/social, sitemap, robots, revisión de indexabilidad y datos estructurados básicos cuando apliquen.",
                "Exclusiones: No incluye estrategia SEO mensual, link building ni investigación avanzada de palabras clave.",
                "Dependencias: WEB-001",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-026",
              "code": "WEB-026",
              "name": "Optimización técnica y accesibilidad básica",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Optimización",
              "unitLabel": "Proyecto",
              "baseHours": 1.5,
              "scope": "Incluye: compresión/formato de imágenes, lazy loading, revisión de peso, semántica, contraste, foco, labels y navegación básica por teclado.",
              "exclusions": "No incluye auditoría WCAG formal ni optimización avanzada de Core Web Vitals.",
              "dependencies": [
                "WEB-007:WEB-021"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Optimización",
                "Condición: Base incluido",
                "Unidad: Proyecto",
                "Incluye: compresión/formato de imágenes, lazy loading, revisión de peso, semántica, contraste, foco, labels y navegación básica por teclado.",
                "Exclusiones: No incluye auditoría WCAG formal ni optimización avanzada de Core Web Vitals.",
                "Dependencias: WEB-007:WEB-021",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-029",
              "code": "WEB-029",
              "name": "Analítica básica",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Analítica",
              "unitLabel": "Proyecto",
              "baseHours": 0.6,
              "scope": "Incluye: configuración de herramienta analítica acordada, evento/pageview básico y validación.",
              "exclusions": "No incluye dashboards BI ni estrategia de medición avanzada.",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.6
              },
              "notes": [
                "Fase: Analítica",
                "Condición: Opcional",
                "Unidad: Proyecto",
                "Incluye: configuración de herramienta analítica acordada, evento/pageview básico y validación.",
                "Exclusiones: No incluye dashboards BI ni estrategia de medición avanzada.",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-030",
              "code": "WEB-030",
              "name": "QA funcional y ciclo consolidado de correcciones",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Calidad",
              "unitLabel": "Proyecto",
              "baseHours": 1.5,
              "scope": "Incluye: pruebas de navegación y formularios/acciones presentes, revisión de enlaces, un ciclo consolidado de observaciones y correcciones dentro del alcance.",
              "exclusions": "No incluye cambios de alcance, nuevas secciones ni rediseño posterior a aprobación.",
              "dependencies": [
                "WEB-022"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Calidad",
                "Condición: Base obligatorio",
                "Unidad: Proyecto",
                "Incluye: pruebas de navegación y formularios/acciones presentes, revisión de enlaces, un ciclo consolidado de observaciones y correcciones dentro del alcance.",
                "Exclusiones: No incluye cambios de alcance, nuevas secciones ni rediseño posterior a aprobación.",
                "Dependencias: WEB-022",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-033",
              "code": "WEB-033",
              "name": "Publicación, SSL y entrega",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Publicación",
              "unitLabel": "Proyecto",
              "baseHours": 1.1,
              "scope": "Incluye: HTTPS/SSL, variables de entorno, despliegue, validación final de producción, accesos y recomendaciones de cierre.",
              "exclusions": "No incluye compra, renovación, configuración o migración de dominio/DNS ni costos de hosting/proveedores. El trabajo de dominio se selecciona por separado cuando corresponda.",
              "dependencies": [
                "WEB-030"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.1
              },
              "notes": [
                "Fase: Publicación",
                "Condición: Base obligatorio",
                "Unidad: Proyecto",
                "Incluye: HTTPS/SSL, variables de entorno, despliegue, validación final de producción, accesos y recomendaciones de cierre.",
                "Exclusiones: No incluye compra, renovación, configuración o migración de dominio/DNS ni costos de hosting/proveedores. El trabajo de dominio se selecciona por separado cuando corresponda.",
                "Dependencias: WEB-030",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-035",
              "code": "WEB-035",
              "name": "Configuración, actualización o migración de dominio/DNS",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Publicación",
              "unitLabel": "Proyecto",
              "baseHours": 0.4,
              "scope": "Incluye: conexión de dominio existente, ajustes DNS necesarios para la publicación o migración simple entre proveedores, validación de propagación y vinculación al hosting.",
              "exclusions": "No incluye compra o renovación del dominio, recuperación de cuentas, migración compleja de correo ni incidencias avanzadas con registradores o proveedores.",
              "dependencies": [
                "WEB-030"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.4
              },
              "notes": [
                "Fase: Publicación",
                "Condición: Opcional",
                "Unidad: Proyecto",
                "Incluye: conexión de dominio existente, ajustes DNS necesarios para la publicación o migración simple entre proveedores, validación de propagación y vinculación al hosting.",
                "Exclusiones: No incluye compra o renovación del dominio, recuperación de cuentas, migración compleja de correo ni incidencias avanzadas con registradores o proveedores.",
                "Dependencias: WEB-030",
                "Estado de HH: Preliminar"
              ]
            }
          ],
          "totals": {
            "activityLines": 23,
            "activities": 23,
            "hours": {
              "fixed": 18.3
            }
          }
        },
        {
          "id": "ism-app-01",
          "code": "APP-01",
          "name": "Sistema web o aplicación de gestión",
          "areaId": "desarrollo-implementacion",
          "groupLabel": "Desarrollo e Implementación",
          "sourceSheet": "Catalogo Maestro",
          "unit": "service",
          "sizeMode": "not-applicable",
          "activities": [
            {
              "id": "app-001",
              "code": "APP-001",
              "name": "Levantamiento funcional, alcance y flujos principales",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Planificación",
              "unitLabel": "Proyecto",
              "baseHours": 1.5,
              "scope": "Incluye: procesos actuales; actores; objetivos; historias/casos principales; criterios de aceptación; mapa de navegación; flujos y estados principales.",
              "exclusions": "No incluye documentación regulatoria extensa, BPMN formal completo ni consultoría de procesos independiente.",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Planificación",
                "Condición: Base obligatorio",
                "Unidad: Proyecto",
                "Incluye: procesos actuales; actores; objetivos; historias/casos principales; criterios de aceptación; mapa de navegación; flujos y estados principales.",
                "Exclusiones: No incluye documentación regulatoria extensa, BPMN formal completo ni consultoría de procesos independiente.",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "app-003",
              "code": "APP-003",
              "name": "Modelo de datos y persistencia base",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Arquitectura",
              "unitLabel": "Proyecto",
              "baseHours": 2.5,
              "scope": "Incluye: entidades, relaciones, restricciones, esquema inicial, migraciones base y criterios de integridad.",
              "exclusions": "No incluye migración masiva de datos ni modelamiento analítico avanzado.",
              "dependencies": [
                "APP-001"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2.5
              },
              "notes": [
                "Fase: Arquitectura",
                "Condición: Base obligatorio",
                "Unidad: Proyecto",
                "Incluye: entidades, relaciones, restricciones, esquema inicial, migraciones base y criterios de integridad.",
                "Exclusiones: No incluye migración masiva de datos ni modelamiento analítico avanzado.",
                "Dependencias: APP-001",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "app-004",
              "code": "APP-004",
              "name": "Diseño de roles y permisos",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Seguridad",
              "unitLabel": "Rol",
              "baseHours": 1,
              "scope": "Incluye por rol: acciones permitidas, visibilidad, restricciones y criterios de protección.",
              "exclusions": "No incluye implementación técnica; se realiza en APP-015.",
              "dependencies": [
                "APP-001"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1
              },
              "notes": [
                "Fase: Seguridad",
                "Condición: Base incluido",
                "Unidad: Rol",
                "Incluye: Incluye por rol: acciones permitidas, visibilidad, restricciones y criterios de protección.",
                "Exclusiones: No incluye implementación técnica; se realiza en APP-015.",
                "Dependencias: APP-001",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Rol)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "app-005",
              "code": "APP-005",
              "name": "Arquitectura técnica, proyecto y ambientes",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Arquitectura",
              "unitLabel": "Proyecto",
              "baseHours": 2,
              "scope": "Incluye: frontend/backend/datos según alcance, repositorio, estructura del proyecto, variables y ambientes de trabajo.",
              "exclusions": "No incluye infraestructura empresarial compleja ni alta disponibilidad.",
              "dependencies": [
                "APP-001"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Arquitectura",
                "Condición: Base obligatorio",
                "Unidad: Proyecto",
                "Incluye: frontend/backend/datos según alcance, repositorio, estructura del proyecto, variables y ambientes de trabajo.",
                "Exclusiones: No incluye infraestructura empresarial compleja ni alta disponibilidad.",
                "Dependencias: APP-001",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "app-007",
              "code": "APP-007",
              "name": "Wireframe de pantalla estándar",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "UX/UI",
              "unitLabel": "Pantalla",
              "baseHours": 1,
              "scope": "Incluye por pantalla: estructura, campos, acciones, estados y jerarquía necesaria para construir.",
              "exclusions": "No incluye prototipo de alta fidelidad por cada pantalla.",
              "dependencies": [
                "APP-001"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1
              },
              "notes": [
                "Fase: UX/UI",
                "Condición: Base incluido",
                "Unidad: Pantalla",
                "Incluye: Incluye por pantalla: estructura, campos, acciones, estados y jerarquía necesaria para construir.",
                "Exclusiones: No incluye prototipo de alta fidelidad por cada pantalla.",
                "Dependencias: APP-001",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Pantalla)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "app-009",
              "code": "APP-009",
              "name": "Shell de aplicación y sistema visual",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Frontend",
              "unitLabel": "Proyecto",
              "baseHours": 2.5,
              "scope": "Incluye: layout, menú, encabezados, navegación, estilos, componentes base y comportamiento responsive del shell.",
              "exclusions": "No incluye las pantallas CRUD específicas de APP-010.",
              "dependencies": [
                "APP-005",
                "APP-007"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2.5
              },
              "notes": [
                "Fase: Frontend",
                "Condición: Base obligatorio",
                "Unidad: Proyecto",
                "Incluye: layout, menú, encabezados, navegación, estilos, componentes base y comportamiento responsive del shell.",
                "Exclusiones: No incluye las pantallas CRUD específicas de APP-010.",
                "Dependencias: APP-005, APP-007",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "app-010",
              "code": "APP-010",
              "name": "Interfaz CRUD estándar",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Frontend",
              "unitLabel": "Pantalla",
              "baseHours": 2.5,
              "scope": "Incluye por pantalla: listado, formulario, validaciones cliente, estados, mensajes y acciones de usuario.",
              "exclusions": "No incluye backend/persistencia; se contabiliza en APP-013.",
              "dependencies": [
                "APP-003",
                "APP-007"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2.5
              },
              "notes": [
                "Fase: Frontend",
                "Condición: Base incluido",
                "Unidad: Pantalla",
                "Incluye: Incluye por pantalla: listado, formulario, validaciones cliente, estados, mensajes y acciones de usuario.",
                "Exclusiones: No incluye backend/persistencia; se contabiliza en APP-013.",
                "Dependencias: APP-003, APP-007",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Pantalla)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "app-011",
              "code": "APP-011",
              "name": "Dashboard con indicadores",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Frontend",
              "unitLabel": "Dashboard",
              "baseHours": 3.5,
              "scope": "Incluye: KPIs acordados, tarjetas, filtros simples y visualización estándar.",
              "exclusions": "No incluye analítica predictiva ni BI avanzado.",
              "dependencies": [
                "APP-003"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 3.5
              },
              "notes": [
                "Fase: Frontend",
                "Condición: Opcional",
                "Unidad: Dashboard",
                "Incluye: KPIs acordados, tarjetas, filtros simples y visualización estándar.",
                "Exclusiones: No incluye analítica predictiva ni BI avanzado.",
                "Dependencias: APP-003",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "app-013",
              "code": "APP-013",
              "name": "Servicio CRUD backend estándar",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Backend",
              "unitLabel": "Entidad",
              "baseHours": 2.3,
              "scope": "Incluye por entidad: crear, consultar, actualizar, eliminar cuando corresponda, validaciones de servidor y persistencia.",
              "exclusions": "No incluye reglas de negocio complejas; se contabilizan en APP-016.",
              "dependencies": [
                "APP-003"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2.3
              },
              "notes": [
                "Fase: Backend",
                "Condición: Base incluido",
                "Unidad: Entidad",
                "Incluye: Incluye por entidad: crear, consultar, actualizar, eliminar cuando corresponda, validaciones de servidor y persistencia.",
                "Exclusiones: No incluye reglas de negocio complejas; se contabilizan en APP-016.",
                "Dependencias: APP-003",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Entidad)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "app-014",
              "code": "APP-014",
              "name": "Autenticación y recuperación de acceso",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Seguridad",
              "unitLabel": "Sistema",
              "baseHours": 2.5,
              "scope": "Incluye: login, logout, recuperación/restablecimiento y estados básicos de sesión.",
              "exclusions": "No incluye SSO empresarial, MFA avanzado ni proveedor de identidad externo complejo.",
              "dependencies": [
                "APP-003",
                "APP-005"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2.5
              },
              "notes": [
                "Fase: Seguridad",
                "Condición: Base obligatorio",
                "Unidad: Sistema",
                "Incluye: login, logout, recuperación/restablecimiento y estados básicos de sesión.",
                "Exclusiones: No incluye SSO empresarial, MFA avanzado ni proveedor de identidad externo complejo.",
                "Dependencias: APP-003, APP-005",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "app-015",
              "code": "APP-015",
              "name": "Autorización y protección por rol",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Seguridad",
              "unitLabel": "Rol",
              "baseHours": 1.5,
              "scope": "Incluye por rol: protección de rutas, acciones y consultas según matriz aprobada.",
              "exclusions": "No incluye políticas multi-organización complejas fuera del alcance.",
              "dependencies": [
                "APP-004",
                "APP-014"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Seguridad",
                "Condición: Base incluido",
                "Unidad: Rol",
                "Incluye: Incluye por rol: protección de rutas, acciones y consultas según matriz aprobada.",
                "Exclusiones: No incluye políticas multi-organización complejas fuera del alcance.",
                "Dependencias: APP-004, APP-014",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Rol)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "app-016",
              "code": "APP-016",
              "name": "Flujo de negocio estándar",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Funcionalidad",
              "unitLabel": "Flujo",
              "baseHours": 3,
              "scope": "Incluye por flujo: reglas, validaciones, cambios de estado, persistencia y manejo de errores del proceso definido.",
              "exclusions": "No incluye integraciones externas complejas; usar INT-01 cuando corresponda.",
              "dependencies": [
                "APP-013"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 3
              },
              "notes": [
                "Fase: Funcionalidad",
                "Condición: Base incluido",
                "Unidad: Flujo",
                "Incluye: Incluye por flujo: reglas, validaciones, cambios de estado, persistencia y manejo de errores del proceso definido.",
                "Exclusiones: No incluye integraciones externas complejas; usar INT-01 cuando corresponda.",
                "Dependencias: APP-013",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Flujo)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "app-017",
              "code": "APP-017",
              "name": "Notificación operativa por correo",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Notificaciones",
              "unitLabel": "Canal",
              "baseHours": 1,
              "scope": "Incluye: plantilla simple, envío, variables, manejo básico de error y prueba.",
              "exclusions": "No incluye campañas, marketing automation ni proveedor de pago.",
              "dependencies": [
                "APP-013"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1
              },
              "notes": [
                "Fase: Notificaciones",
                "Condición: Opcional",
                "Unidad: Canal",
                "Incluye: plantilla simple, envío, variables, manejo básico de error y prueba.",
                "Exclusiones: No incluye campañas, marketing automation ni proveedor de pago.",
                "Dependencias: APP-013",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "app-018",
              "code": "APP-018",
              "name": "Exportación o reporte estándar",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Reportes",
              "unitLabel": "Formato",
              "baseHours": 1.5,
              "scope": "Incluye por formato: selección de datos, columnas/campos, formato y descarga en Excel o PDF estándar.",
              "exclusions": "No incluye documentos de alta complejidad gráfica o maquetación editorial.",
              "dependencies": [
                "APP-013"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Reportes",
                "Condición: Opcional",
                "Unidad: Formato",
                "Incluye: Incluye por formato: selección de datos, columnas/campos, formato y descarga en Excel o PDF estándar.",
                "Exclusiones: No incluye documentos de alta complejidad gráfica o maquetación editorial.",
                "Dependencias: APP-013",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "app-023",
              "code": "APP-023",
              "name": "Carga o migración inicial de datos",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Datos",
              "unitLabel": "Lote",
              "baseHours": 2.5,
              "scope": "Incluye: mapeo, validación, carga y conciliación de un lote acotado.",
              "exclusions": "No incluye limpieza extensa, deduplicación compleja ni ETL de gran volumen.",
              "dependencies": [
                "APP-003"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2.5
              },
              "notes": [
                "Fase: Datos",
                "Condición: Opcional",
                "Unidad: Lote",
                "Incluye: mapeo, validación, carga y conciliación de un lote acotado.",
                "Exclusiones: No incluye limpieza extensa, deduplicación compleja ni ETL de gran volumen.",
                "Dependencias: APP-003",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "app-020",
              "code": "APP-020",
              "name": "QA funcional, integración, permisos y UX",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Calidad",
              "unitLabel": "Proyecto",
              "baseHours": 2.5,
              "scope": "Incluye: reglas críticas, flujos, datos, permisos presentes, navegación, mensajes, experiencia responsive y casos de error principales.",
              "exclusions": "No incluye pruebas de carga avanzadas ni pentesting formal.",
              "dependencies": [
                "APP-010",
                "APP-013",
                "APP-015",
                "APP-016"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2.5
              },
              "notes": [
                "Fase: Calidad",
                "Condición: Base obligatorio",
                "Unidad: Proyecto",
                "Incluye: reglas críticas, flujos, datos, permisos presentes, navegación, mensajes, experiencia responsive y casos de error principales.",
                "Exclusiones: No incluye pruebas de carga avanzadas ni pentesting formal.",
                "Dependencias: APP-010, APP-013, APP-015, APP-016",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "app-024",
              "code": "APP-024",
              "name": "Configuración y despliegue de producción",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Despliegue",
              "unitLabel": "Entorno",
              "baseHours": 1.5,
              "scope": "Incluye: variables, build, base de datos, migraciones acordadas, despliegue y validación técnica de producción.",
              "exclusions": "No incluye costos de infraestructura ni arquitectura HA.",
              "dependencies": [
                "APP-020"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Despliegue",
                "Condición: Base obligatorio",
                "Unidad: Entorno",
                "Incluye: variables, build, base de datos, migraciones acordadas, despliegue y validación técnica de producción.",
                "Exclusiones: No incluye costos de infraestructura ni arquitectura HA.",
                "Dependencias: APP-020",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "app-025",
              "code": "APP-025",
              "name": "Capacitación, documentación y ciclo UAT",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Cierre",
              "unitLabel": "Proyecto",
              "baseHours": 1.5,
              "scope": "Incluye: capacitación básica de administrador, guía funcional/técnica mínima, un ciclo UAT y correcciones dentro del alcance.",
              "exclusions": "No incluye capacitación masiva, manual extenso o nuevos requerimientos.",
              "dependencies": [
                "APP-024"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Cierre",
                "Condición: Base incluido",
                "Unidad: Proyecto",
                "Incluye: capacitación básica de administrador, guía funcional/técnica mínima, un ciclo UAT y correcciones dentro del alcance.",
                "Exclusiones: No incluye capacitación masiva, manual extenso o nuevos requerimientos.",
                "Dependencias: APP-024",
                "Estado de HH: Preliminar"
              ]
            }
          ],
          "totals": {
            "activityLines": 18,
            "activities": 18,
            "hours": {
              "fixed": 44.9
            }
          }
        },
        {
          "id": "ism-int-01",
          "code": "INT-01",
          "name": "Integración y automatización de procesos",
          "areaId": "desarrollo-implementacion",
          "groupLabel": "Desarrollo e Implementación",
          "sourceSheet": "Catalogo Maestro",
          "unit": "service",
          "sizeMode": "not-applicable",
          "activities": [
            {
              "id": "int-001",
              "code": "INT-001",
              "name": "Levantamiento y diseño de integración",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Planificación",
              "unitLabel": "Integración",
              "baseHours": 3,
              "scope": "Incluye: proceso actual; sistemas involucrados; revisión de API/archivos/webhooks disponibles; mapeo de datos; transformaciones; estrategia de errores y reintentos.",
              "exclusions": "No incluye desarrollo del conector ni automatización.",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 3
              },
              "notes": [
                "Fase: Planificación",
                "Condición: Base obligatorio",
                "Unidad: Integración",
                "Incluye: proceso actual; sistemas involucrados; revisión de API/archivos/webhooks disponibles; mapeo de datos; transformaciones; estrategia de errores y reintentos.",
                "Exclusiones: No incluye desarrollo del conector ni automatización.",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "int-005",
              "code": "INT-005",
              "name": "Credenciales, secretos y configuración segura",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Preparación",
              "unitLabel": "Entorno",
              "baseHours": 1,
              "scope": "Incluye: variables, secretos, permisos mínimos y prueba de conectividad.",
              "exclusions": "No incluye alta de cuentas o costos de proveedores.",
              "dependencies": [
                "INT-001"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1
              },
              "notes": [
                "Fase: Preparación",
                "Condición: Base obligatorio",
                "Unidad: Entorno",
                "Incluye: variables, secretos, permisos mínimos y prueba de conectividad.",
                "Exclusiones: No incluye alta de cuentas o costos de proveedores.",
                "Dependencias: INT-001",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "int-006",
              "code": "INT-006",
              "name": "Conector API estándar",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Desarrollo",
              "unitLabel": "Integración",
              "baseHours": 3.5,
              "scope": "Incluye: autenticación, consulta/envío, validación de respuesta, manejo básico de errores y adaptación a contrato API conocido.",
              "exclusions": "No incluye API sin documentación, protocolos no estándar o integración bidireccional compleja adicional.",
              "dependencies": [
                "INT-001",
                "INT-005"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 3.5
              },
              "notes": [
                "Fase: Desarrollo",
                "Condición: Base incluido",
                "Unidad: Integración",
                "Incluye: autenticación, consulta/envío, validación de respuesta, manejo básico de errores y adaptación a contrato API conocido.",
                "Exclusiones: No incluye API sin documentación, protocolos no estándar o integración bidireccional compleja adicional.",
                "Dependencias: INT-001, INT-005",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "int-007",
              "code": "INT-007",
              "name": "Intercambio por archivo",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Desarrollo",
              "unitLabel": "Formato",
              "baseHours": 2.2,
              "scope": "Incluye: CSV/XLSX/JSON, validación de estructura, importación o exportación y manejo de errores básicos.",
              "exclusions": "No incluye ETL masivo ni limpieza extensa de datos.",
              "dependencies": [
                "INT-001"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2.2
              },
              "notes": [
                "Fase: Desarrollo",
                "Condición: Opcional",
                "Unidad: Formato",
                "Incluye: CSV/XLSX/JSON, validación de estructura, importación o exportación y manejo de errores básicos.",
                "Exclusiones: No incluye ETL masivo ni limpieza extensa de datos.",
                "Dependencias: INT-001",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "int-008",
              "code": "INT-008",
              "name": "Webhook estándar",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Desarrollo",
              "unitLabel": "Evento",
              "baseHours": 2,
              "scope": "Incluye: recepción, validación, idempotencia básica, respuesta y prueba.",
              "exclusions": "No incluye alto volumen, colas distribuidas o firma propietaria compleja.",
              "dependencies": [
                "INT-001"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Desarrollo",
                "Condición: Opcional",
                "Unidad: Evento",
                "Incluye: recepción, validación, idempotencia básica, respuesta y prueba.",
                "Exclusiones: No incluye alto volumen, colas distribuidas o firma propietaria compleja.",
                "Dependencias: INT-001",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "int-009",
              "code": "INT-009",
              "name": "Automatización programada",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Automatización",
              "unitLabel": "Job",
              "baseHours": 2,
              "scope": "Incluye: frecuencia, ejecución, validación básica y registro del resultado.",
              "exclusions": "No incluye orquestación de múltiples jobs dependientes.",
              "dependencies": [
                "INT-001"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Automatización",
                "Condición: Base incluido",
                "Unidad: Job",
                "Incluye: frecuencia, ejecución, validación básica y registro del resultado.",
                "Exclusiones: No incluye orquestación de múltiples jobs dependientes.",
                "Dependencias: INT-001",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "int-010",
              "code": "INT-010",
              "name": "Regla o transformación de negocio",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Automatización",
              "unitLabel": "Regla",
              "baseHours": 1,
              "scope": "Incluye por regla: condición, transformación, validación y manejo de caso esperado/error.",
              "exclusions": "No incluye rediseño del proceso; se define en INT-001.",
              "dependencies": [
                "INT-001"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1
              },
              "notes": [
                "Fase: Automatización",
                "Condición: Base incluido",
                "Unidad: Regla",
                "Incluye: Incluye por regla: condición, transformación, validación y manejo de caso esperado/error.",
                "Exclusiones: No incluye rediseño del proceso; se define en INT-001.",
                "Dependencias: INT-001",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Regla)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "int-011",
              "code": "INT-011",
              "name": "Registro de ejecuciones y alertas básicas",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Observabilidad",
              "unitLabel": "Integración",
              "baseHours": 1,
              "scope": "Incluye: fecha, estado, resultado, error, identificador y alerta básica por canal acordado cuando corresponda.",
              "exclusions": "No incluye plataforma completa de observabilidad.",
              "dependencies": [
                "INT-006 o INT-009"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1
              },
              "notes": [
                "Fase: Observabilidad",
                "Condición: Base obligatorio",
                "Unidad: Integración",
                "Incluye: fecha, estado, resultado, error, identificador y alerta básica por canal acordado cuando corresponda.",
                "Exclusiones: No incluye plataforma completa de observabilidad.",
                "Dependencias: INT-006 o INT-009",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "int-013",
              "code": "INT-013",
              "name": "QA de integración, datos, límites y seguridad",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Calidad",
              "unitLabel": "Integración",
              "baseHours": 2,
              "scope": "Incluye: casos de éxito/error/duplicado/dato incompleto; volumen razonable; permisos; exposición de datos y mínimo privilegio.",
              "exclusions": "No incluye pruebas de estrés empresariales ni pentesting formal.",
              "dependencies": [
                "INT-006",
                "INT-009",
                "INT-010"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Calidad",
                "Condición: Base obligatorio",
                "Unidad: Integración",
                "Incluye: casos de éxito/error/duplicado/dato incompleto; volumen razonable; permisos; exposición de datos y mínimo privilegio.",
                "Exclusiones: No incluye pruebas de estrés empresariales ni pentesting formal.",
                "Dependencias: INT-006, INT-009, INT-010",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "int-016",
              "code": "INT-016",
              "name": "Producción, documentación y runbook",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Despliegue",
              "unitLabel": "Integración",
              "baseHours": 1.5,
              "scope": "Incluye: variables/secretos de producción, activación, validación, procedimiento operativo, reintentos y contactos.",
              "exclusions": "No incluye soporte mensual posterior.",
              "dependencies": [
                "INT-013"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Despliegue",
                "Condición: Base obligatorio",
                "Unidad: Integración",
                "Incluye: variables/secretos de producción, activación, validación, procedimiento operativo, reintentos y contactos.",
                "Exclusiones: No incluye soporte mensual posterior.",
                "Dependencias: INT-013",
                "Estado de HH: Preliminar"
              ]
            }
          ],
          "totals": {
            "activityLines": 10,
            "activities": 10,
            "hours": {
              "fixed": 16
            }
          }
        }
      ]
    },
    {
      "id": "mantenimiento-evolucion",
      "name": "Mantenimiento y Evolución",
      "description": "Corrección, evolución, modernización y optimización de soluciones existentes.",
      "order": 2,
      "summary": {
        "serviceCodes": 4,
        "activityLines": 55,
        "activities": 55
      },
      "services": [
        {
          "id": "ism-mnt-01",
          "code": "MNT-01",
          "name": "Corrección de errores y estabilización",
          "areaId": "mantenimiento-evolucion",
          "groupLabel": "Mantenimiento y Evolución",
          "sourceSheet": "Catalogo Maestro",
          "unit": "service",
          "sizeMode": "not-applicable",
          "activities": [
            {
              "id": "mnt1-001",
              "code": "MNT1-001",
              "name": "Registro del incidente y evidencia",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Recepción",
              "unitLabel": "Incidente",
              "baseHours": 0.5,
              "scope": "Descripción, pasos, evidencia y entorno",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.5
              },
              "notes": [
                "Fase: Recepción",
                "Condición: Base obligatorio",
                "Unidad: Incidente",
                "Incluye: Descripción, pasos, evidencia y entorno",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mnt1-002",
              "code": "MNT1-002",
              "name": "Clasificación de severidad e impacto",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Triage",
              "unitLabel": "Incidente",
              "baseHours": 0.5,
              "scope": "Impacto, urgencia, alcance y usuarios afectados",
              "dependencies": [
                "MNT1-001"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.5
              },
              "notes": [
                "Fase: Triage",
                "Condición: Base obligatorio",
                "Unidad: Incidente",
                "Incluye: Impacto, urgencia, alcance y usuarios afectados",
                "Dependencias: MNT1-001",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mnt1-003",
              "code": "MNT1-003",
              "name": "Reproducción controlada del error",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Diagnóstico",
              "unitLabel": "Incidente",
              "baseHours": 1.5,
              "scope": "Pasos, datos y condiciones de reproducción",
              "dependencies": [
                "MNT1-001"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Diagnóstico",
                "Condición: Base obligatorio",
                "Unidad: Incidente",
                "Incluye: Pasos, datos y condiciones de reproducción",
                "Dependencias: MNT1-001",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mnt1-004",
              "code": "MNT1-004",
              "name": "Análisis de logs, datos y código relacionado",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Diagnóstico",
              "unitLabel": "Incidente",
              "baseHours": 2,
              "scope": "Evidencia técnica y componentes involucrados",
              "dependencies": [
                "MNT1-003"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Diagnóstico",
                "Condición: Base obligatorio",
                "Unidad: Incidente",
                "Incluye: Evidencia técnica y componentes involucrados",
                "Dependencias: MNT1-003",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mnt1-005",
              "code": "MNT1-005",
              "name": "Análisis de causa raíz",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Diagnóstico",
              "unitLabel": "Incidente",
              "baseHours": 1.5,
              "scope": "Origen y condiciones que provocan el fallo",
              "dependencies": [
                "MNT1-004"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Diagnóstico",
                "Condición: Base obligatorio",
                "Unidad: Incidente",
                "Incluye: Origen y condiciones que provocan el fallo",
                "Dependencias: MNT1-004",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mnt1-006",
              "code": "MNT1-006",
              "name": "Definición de corrección y plan de reversa",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Planificación",
              "unitLabel": "Cambio",
              "baseHours": 1,
              "scope": "Corrección, riesgo, pruebas y reversa",
              "dependencies": [
                "MNT1-005"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1
              },
              "notes": [
                "Fase: Planificación",
                "Condición: Base obligatorio",
                "Unidad: Cambio",
                "Incluye: Corrección, riesgo, pruebas y reversa",
                "Dependencias: MNT1-005",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mnt1-007",
              "code": "MNT1-007",
              "name": "Corrección de baja complejidad",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Corrección",
              "unitLabel": "Cambio",
              "baseHours": 2,
              "scope": "Ajuste localizado sin cambio de arquitectura",
              "exclusions": "Mutuamente excluyente con MNT1-008 para el mismo incidente.",
              "dependencies": [
                "MNT1-006"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Corrección",
                "Condición: Base incluido",
                "Unidad: Cambio",
                "Incluye: Ajuste localizado sin cambio de arquitectura",
                "Exclusiones: Mutuamente excluyente con MNT1-008 para el mismo incidente.",
                "Dependencias: MNT1-006",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mnt1-008",
              "code": "MNT1-008",
              "name": "Corrección de complejidad media",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Corrección",
              "unitLabel": "Cambio",
              "baseHours": 4,
              "scope": "Cambios en varios componentes o reglas",
              "exclusions": "Mutuamente excluyente con MNT1-007 para el mismo incidente.",
              "dependencies": [
                "MNT1-006"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 4
              },
              "notes": [
                "Fase: Corrección",
                "Condición: Opcional",
                "Unidad: Cambio",
                "Incluye: Cambios en varios componentes o reglas",
                "Exclusiones: Mutuamente excluyente con MNT1-007 para el mismo incidente.",
                "Dependencias: MNT1-006",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Cambio)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "mnt1-009",
              "code": "MNT1-009",
              "name": "Corrección o regularización de datos",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Datos",
              "unitLabel": "Lote",
              "baseHours": 2.5,
              "scope": "Script, respaldo y validación",
              "exclusions": "Recuperación forense",
              "dependencies": [
                "MNT1-006"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2.5
              },
              "notes": [
                "Fase: Datos",
                "Condición: Opcional",
                "Unidad: Lote",
                "Incluye: Script, respaldo y validación",
                "Exclusiones: Recuperación forense",
                "Dependencias: MNT1-006",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Lote)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "mnt1-010",
              "code": "MNT1-010",
              "name": "Prueba del caso corregido",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Calidad",
              "unitLabel": "Caso",
              "baseHours": 1,
              "scope": "Prueba directa del defecto",
              "dependencies": [
                "MNT1-007"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1
              },
              "notes": [
                "Fase: Calidad",
                "Condición: Base obligatorio",
                "Unidad: Caso",
                "Incluye: Prueba directa del defecto",
                "Dependencias: MNT1-007",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mnt1-011",
              "code": "MNT1-011",
              "name": "Pruebas de regresión relacionadas",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Calidad",
              "unitLabel": "Caso",
              "baseHours": 0.75,
              "scope": "Flujos cercanos y funciones relacionadas",
              "dependencies": [
                "MNT1-010"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.75
              },
              "notes": [
                "Fase: Calidad",
                "Condición: Base obligatorio",
                "Unidad: Caso",
                "Incluye: Flujos cercanos y funciones relacionadas",
                "Dependencias: MNT1-010",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Caso)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "mnt1-012",
              "code": "MNT1-012",
              "name": "Preparación y despliegue de corrección",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Despliegue",
              "unitLabel": "Entorno",
              "baseHours": 1.5,
              "scope": "Build, respaldo, despliegue y validación",
              "dependencies": [
                "MNT1-011"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Despliegue",
                "Condición: Base obligatorio",
                "Unidad: Entorno",
                "Incluye: Build, respaldo, despliegue y validación",
                "Dependencias: MNT1-011",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mnt1-013",
              "code": "MNT1-013",
              "name": "Monitoreo posterior al cambio",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Seguimiento",
              "unitLabel": "Periodo",
              "baseHours": 1,
              "scope": "Revisión de logs y comportamiento",
              "dependencies": [
                "MNT1-012"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1
              },
              "notes": [
                "Fase: Seguimiento",
                "Condición: Base incluido",
                "Unidad: Periodo",
                "Incluye: Revisión de logs y comportamiento",
                "Dependencias: MNT1-012",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mnt1-014",
              "code": "MNT1-014",
              "name": "Documentación de causa y solución",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Cierre",
              "unitLabel": "Incidente",
              "baseHours": 0.75,
              "scope": "Causa, solución, pruebas y recomendaciones",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.75
              },
              "notes": [
                "Fase: Cierre",
                "Condición: Base obligatorio",
                "Unidad: Incidente",
                "Incluye: Causa, solución, pruebas y recomendaciones",
                "Estado de HH: Preliminar"
              ]
            }
          ],
          "totals": {
            "activityLines": 14,
            "activities": 14,
            "hours": {
              "fixed": 15.5
            }
          }
        },
        {
          "id": "ism-mnt-02",
          "code": "MNT-02",
          "name": "Incorporación de nueva funcionalidad",
          "areaId": "mantenimiento-evolucion",
          "groupLabel": "Mantenimiento y Evolución",
          "sourceSheet": "Catalogo Maestro",
          "unit": "service",
          "sizeMode": "not-applicable",
          "activities": [
            {
              "id": "mnt2-001",
              "code": "MNT2-001",
              "name": "Levantamiento de necesidad y objetivo",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Descubrimiento",
              "unitLabel": "Funcionalidad",
              "baseHours": 1.5,
              "scope": "Usuario, problema, resultado y contexto",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Descubrimiento",
                "Condición: Base obligatorio",
                "Unidad: Funcionalidad",
                "Incluye: Usuario, problema, resultado y contexto",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mnt2-002",
              "code": "MNT2-002",
              "name": "Análisis de impacto en sistema existente",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Análisis",
              "unitLabel": "Funcionalidad",
              "baseHours": 2.5,
              "scope": "Código, datos, roles, integraciones y riesgos",
              "dependencies": [
                "MNT2-001"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2.5
              },
              "notes": [
                "Fase: Análisis",
                "Condición: Base obligatorio",
                "Unidad: Funcionalidad",
                "Incluye: Código, datos, roles, integraciones y riesgos",
                "Dependencias: MNT2-001",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mnt2-003",
              "code": "MNT2-003",
              "name": "Historia de usuario y criterios de aceptación",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Alcance",
              "unitLabel": "Funcionalidad",
              "baseHours": 1.5,
              "scope": "Casos, reglas y definición de terminado",
              "dependencies": [
                "MNT2-001"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Alcance",
                "Condición: Base obligatorio",
                "Unidad: Funcionalidad",
                "Incluye: Casos, reglas y definición de terminado",
                "Dependencias: MNT2-001",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mnt2-004",
              "code": "MNT2-004",
              "name": "Diseño de flujo y estados",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Diseño",
              "unitLabel": "Flujo",
              "baseHours": 2,
              "scope": "Interacciones, transiciones y excepciones",
              "dependencies": [
                "MNT2-003"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Diseño",
                "Condición: Base obligatorio",
                "Unidad: Flujo",
                "Incluye: Interacciones, transiciones y excepciones",
                "Dependencias: MNT2-003",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mnt2-005",
              "code": "MNT2-005",
              "name": "Diseño de interfaz o wireframe",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Diseño",
              "unitLabel": "Pantalla",
              "baseHours": 1,
              "scope": "Componentes, campos y acciones",
              "dependencies": [
                "MNT2-004"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1
              },
              "notes": [
                "Fase: Diseño",
                "Condición: Base incluido",
                "Unidad: Pantalla",
                "Incluye: Componentes, campos y acciones",
                "Dependencias: MNT2-004",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Pantalla)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "mnt2-006",
              "code": "MNT2-006",
              "name": "Cambio de modelo de datos",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Datos",
              "unitLabel": "Entidad",
              "baseHours": 2.5,
              "scope": "Tabla, columna, relación y restricciones",
              "dependencies": [
                "MNT2-002"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2.5
              },
              "notes": [
                "Fase: Datos",
                "Condición: Opcional",
                "Unidad: Entidad",
                "Incluye: Tabla, columna, relación y restricciones",
                "Dependencias: MNT2-002",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mnt2-007",
              "code": "MNT2-007",
              "name": "Implementación de regla de negocio",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Backend",
              "unitLabel": "Regla",
              "baseHours": 2,
              "scope": "Validaciones y comportamiento esperado",
              "dependencies": [
                "MNT2-003"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Backend",
                "Condición: Base incluido",
                "Unidad: Regla",
                "Incluye: Validaciones y comportamiento esperado",
                "Dependencias: MNT2-003",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Regla)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "mnt2-008",
              "code": "MNT2-008",
              "name": "Servicio o endpoint asociado",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Backend",
              "unitLabel": "Servicio",
              "baseHours": 3,
              "scope": "Consulta, persistencia y errores",
              "dependencies": [
                "MNT2-006"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 3
              },
              "notes": [
                "Fase: Backend",
                "Condición: Base incluido",
                "Unidad: Servicio",
                "Incluye: Consulta, persistencia y errores",
                "Dependencias: MNT2-006",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mnt2-009",
              "code": "MNT2-009",
              "name": "Pantalla o componente de funcionalidad",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Frontend",
              "unitLabel": "Pantalla",
              "baseHours": 3,
              "scope": "Estados, validaciones y responsive",
              "dependencies": [
                "MNT2-005"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 3
              },
              "notes": [
                "Fase: Frontend",
                "Condición: Base incluido",
                "Unidad: Pantalla",
                "Incluye: Estados, validaciones y responsive",
                "Dependencias: MNT2-005",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Pantalla)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "mnt2-010",
              "code": "MNT2-010",
              "name": "Ajuste de permisos y acceso",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Seguridad",
              "unitLabel": "Rol",
              "baseHours": 1,
              "scope": "Visibilidad y acciones por rol",
              "dependencies": [
                "MNT2-002"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1
              },
              "notes": [
                "Fase: Seguridad",
                "Condición: Base incluido",
                "Unidad: Rol",
                "Incluye: Visibilidad y acciones por rol",
                "Dependencias: MNT2-002",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Rol)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "mnt2-011",
              "code": "MNT2-011",
              "name": "Notificación o exportación asociada",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Integración",
              "unitLabel": "Integración",
              "baseHours": 3,
              "scope": "Correo, Excel, PDF u otro canal",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 3
              },
              "notes": [
                "Fase: Integración",
                "Condición: Opcional",
                "Unidad: Integración",
                "Incluye: Correo, Excel, PDF u otro canal",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Integración)",
                "baseQuantity": 1,
                "defaultQuantity": 1,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "mnt2-012",
              "code": "MNT2-012",
              "name": "Pruebas unitarias y de reglas",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Calidad",
              "unitLabel": "Caso",
              "baseHours": 1,
              "scope": "Casos normales, errores y límites",
              "dependencies": [
                "MNT2-007"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1
              },
              "notes": [
                "Fase: Calidad",
                "Condición: Base incluido",
                "Unidad: Caso",
                "Incluye: Casos normales, errores y límites",
                "Dependencias: MNT2-007",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Caso)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "mnt2-013",
              "code": "MNT2-013",
              "name": "Pruebas de integración y regresión",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Calidad",
              "unitLabel": "Proyecto",
              "baseHours": 3,
              "scope": "Flujo nuevo y funciones existentes relacionadas",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 3
              },
              "notes": [
                "Fase: Calidad",
                "Condición: Base obligatorio",
                "Unidad: Proyecto",
                "Incluye: Flujo nuevo y funciones existentes relacionadas",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mnt2-014",
              "code": "MNT2-014",
              "name": "Migración y despliegue controlado",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Despliegue",
              "unitLabel": "Entorno",
              "baseHours": 2,
              "scope": "Respaldo, migración, build y validación",
              "dependencies": [
                "MNT2-013"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Despliegue",
                "Condición: Base obligatorio",
                "Unidad: Entorno",
                "Incluye: Respaldo, migración, build y validación",
                "Dependencias: MNT2-013",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mnt2-015",
              "code": "MNT2-015",
              "name": "Documentación y capacitación breve",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Cierre",
              "unitLabel": "Funcionalidad",
              "baseHours": 1.5,
              "scope": "Cambios, uso y consideraciones",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Cierre",
                "Condición: Base incluido",
                "Unidad: Funcionalidad",
                "Incluye: Cambios, uso y consideraciones",
                "Estado de HH: Preliminar"
              ]
            }
          ],
          "totals": {
            "activityLines": 15,
            "activities": 15,
            "hours": {
              "fixed": 34
            }
          }
        },
        {
          "id": "ism-mnt-03",
          "code": "MNT-03",
          "name": "Modernización, refactorización y actualización tecnológica",
          "areaId": "mantenimiento-evolucion",
          "groupLabel": "Mantenimiento y Evolución",
          "sourceSheet": "Catalogo Maestro",
          "unit": "service",
          "sizeMode": "not-applicable",
          "activities": [
            {
              "id": "mnt3-001",
              "code": "MNT3-001",
              "name": "Inventario técnico de componentes y versiones",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Auditoría",
              "unitLabel": "Proyecto",
              "baseHours": 3,
              "scope": "Frameworks, dependencias, servicios y despliegues",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 3
              },
              "notes": [
                "Fase: Auditoría",
                "Condición: Base obligatorio",
                "Unidad: Proyecto",
                "Incluye: Frameworks, dependencias, servicios y despliegues",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mnt3-002",
              "code": "MNT3-002",
              "name": "Análisis de deuda técnica y riesgos",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Auditoría",
              "unitLabel": "Proyecto",
              "baseHours": 4,
              "scope": "Complejidad, obsolescencia, seguridad y mantenibilidad",
              "dependencies": [
                "MNT3-001"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 4
              },
              "notes": [
                "Fase: Auditoría",
                "Condición: Base obligatorio",
                "Unidad: Proyecto",
                "Incluye: Complejidad, obsolescencia, seguridad y mantenibilidad",
                "Dependencias: MNT3-001",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mnt3-003",
              "code": "MNT3-003",
              "name": "Definición de estrategia de modernización",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Planificación",
              "unitLabel": "Proyecto",
              "baseHours": 3,
              "scope": "Fases, prioridades, dependencias y reversa",
              "dependencies": [
                "MNT3-002"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 3
              },
              "notes": [
                "Fase: Planificación",
                "Condición: Base obligatorio",
                "Unidad: Proyecto",
                "Incluye: Fases, prioridades, dependencias y reversa",
                "Dependencias: MNT3-002",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mnt3-004",
              "code": "MNT3-004",
              "name": "Creación de línea base de pruebas",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Preparación",
              "unitLabel": "Flujo",
              "baseHours": 2,
              "scope": "Comportamiento actual protegido antes de cambios",
              "dependencies": [
                "MNT3-003"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Preparación",
                "Condición: Base obligatorio",
                "Unidad: Flujo",
                "Incluye: Comportamiento actual protegido antes de cambios",
                "Dependencias: MNT3-003",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Flujo)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "mnt3-005",
              "code": "MNT3-005",
              "name": "Actualización de dependencia estándar",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Dependencias",
              "unitLabel": "Dependencia",
              "baseHours": 0.75,
              "scope": "Actualización rutinaria de versión compatible, ajustes menores y verificación básica por dependencia.",
              "exclusions": "La remediación adicional de vulnerabilidades complejas se contabiliza en MNT3-009.",
              "dependencies": [
                "MNT3-004"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.75
              },
              "notes": [
                "Fase: Dependencias",
                "Condición: Base incluido",
                "Unidad: Dependencia",
                "Incluye: Actualización rutinaria de versión compatible, ajustes menores y verificación básica por dependencia.",
                "Exclusiones: La remediación adicional de vulnerabilidades complejas se contabiliza en MNT3-009.",
                "Dependencias: MNT3-004",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Dependencia)",
                "baseQuantity": 1,
                "defaultQuantity": 5,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "mnt3-006",
              "code": "MNT3-006",
              "name": "Refactorización de módulo",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Código",
              "unitLabel": "Módulo",
              "baseHours": 5,
              "scope": "Separación de responsabilidades y legibilidad",
              "dependencies": [
                "MNT3-004"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 5
              },
              "notes": [
                "Fase: Código",
                "Condición: Base incluido",
                "Unidad: Módulo",
                "Incluye: Separación de responsabilidades y legibilidad",
                "Dependencias: MNT3-004",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Módulo)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "mnt3-007",
              "code": "MNT3-007",
              "name": "Extracción de componente reutilizable",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Arquitectura",
              "unitLabel": "Componente",
              "baseHours": 3,
              "scope": "Interfaces, pruebas y documentación",
              "dependencies": [
                "MNT3-006"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 3
              },
              "notes": [
                "Fase: Arquitectura",
                "Condición: Opcional",
                "Unidad: Componente",
                "Incluye: Interfaces, pruebas y documentación",
                "Dependencias: MNT3-006",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Componente)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "mnt3-008",
              "code": "MNT3-008",
              "name": "Migración o ajuste de esquema de datos",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Datos",
              "unitLabel": "Migración",
              "baseHours": 4,
              "scope": "Transformación, respaldo y conciliación",
              "dependencies": [
                "MNT3-003"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 4
              },
              "notes": [
                "Fase: Datos",
                "Condición: Opcional",
                "Unidad: Migración",
                "Incluye: Transformación, respaldo y conciliación",
                "Dependencias: MNT3-003",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mnt3-009",
              "code": "MNT3-009",
              "name": "Corrección de dependencias vulnerables",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Seguridad",
              "unitLabel": "Hallazgo",
              "baseHours": 1.5,
              "scope": "Análisis y remediación adicional cuando la actualización estándar no resuelve el hallazgo.",
              "exclusions": "No sumar si el hallazgo queda resuelto únicamente con MNT3-005.",
              "dependencies": [
                "MNT3-005"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Seguridad",
                "Condición: Opcional",
                "Unidad: Hallazgo",
                "Incluye: Análisis y remediación adicional cuando la actualización estándar no resuelve el hallazgo.",
                "Exclusiones: No sumar si el hallazgo queda resuelto únicamente con MNT3-005.",
                "Dependencias: MNT3-005",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Hallazgo)",
                "baseQuantity": 1,
                "defaultQuantity": 1,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "mnt3-010",
              "code": "MNT3-010",
              "name": "Pruebas de regresión ampliadas",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Calidad",
              "unitLabel": "Flujo",
              "baseHours": 1,
              "scope": "Flujos críticos y casos de error",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1
              },
              "notes": [
                "Fase: Calidad",
                "Condición: Base obligatorio",
                "Unidad: Flujo",
                "Incluye: Flujos críticos y casos de error",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Flujo)",
                "baseQuantity": 1,
                "defaultQuantity": 5,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "mnt3-011",
              "code": "MNT3-011",
              "name": "Comparación de rendimiento antes y después",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Rendimiento",
              "unitLabel": "Proyecto",
              "baseHours": 3,
              "scope": "Métricas acordadas y resultados",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 3
              },
              "notes": [
                "Fase: Rendimiento",
                "Condición: Opcional",
                "Unidad: Proyecto",
                "Incluye: Métricas acordadas y resultados",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mnt3-012",
              "code": "MNT3-012",
              "name": "Plan de migración y reversa",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Despliegue",
              "unitLabel": "Entorno",
              "baseHours": 2,
              "scope": "Pasos, responsables, respaldo y retorno",
              "dependencies": [
                "MNT3-003"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Despliegue",
                "Condición: Base obligatorio",
                "Unidad: Entorno",
                "Incluye: Pasos, responsables, respaldo y retorno",
                "Dependencias: MNT3-003",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mnt3-013",
              "code": "MNT3-013",
              "name": "Despliegue de modernización",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Despliegue",
              "unitLabel": "Entorno",
              "baseHours": 3,
              "scope": "Ejecución, validación y seguimiento",
              "dependencies": [
                "MNT3-012"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 3
              },
              "notes": [
                "Fase: Despliegue",
                "Condición: Base obligatorio",
                "Unidad: Entorno",
                "Incluye: Ejecución, validación y seguimiento",
                "Dependencias: MNT3-012",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mnt3-014",
              "code": "MNT3-014",
              "name": "Actualización de documentación técnica",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Cierre",
              "unitLabel": "Proyecto",
              "baseHours": 2.5,
              "scope": "Arquitectura, dependencias y operación",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2.5
              },
              "notes": [
                "Fase: Cierre",
                "Condición: Base obligatorio",
                "Unidad: Proyecto",
                "Incluye: Arquitectura, dependencias y operación",
                "Estado de HH: Preliminar"
              ]
            }
          ],
          "totals": {
            "activityLines": 14,
            "activities": 14,
            "hours": {
              "fixed": 42.25
            }
          }
        },
        {
          "id": "ism-mnt-04",
          "code": "MNT-04",
          "name": "Optimización de rendimiento",
          "areaId": "mantenimiento-evolucion",
          "groupLabel": "Mantenimiento y Evolución",
          "sourceSheet": "Catalogo Maestro",
          "unit": "service",
          "sizeMode": "not-applicable",
          "activities": [
            {
              "id": "mnt4-001",
              "code": "MNT4-001",
              "name": "Definición de indicadores y objetivos",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Medición",
              "unitLabel": "Proyecto",
              "baseHours": 1.5,
              "scope": "Tiempos, volumen y experiencia esperada",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Medición",
                "Condición: Base obligatorio",
                "Unidad: Proyecto",
                "Incluye: Tiempos, volumen y experiencia esperada",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mnt4-002",
              "code": "MNT4-002",
              "name": "Captura de línea base previa a la optimización",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Medición",
              "unitLabel": "Entorno",
              "baseHours": 2.5,
              "scope": "Medición inicial reproducible antes de realizar cambios.",
              "exclusions": "La comparación final se contabiliza en MNT4-010.",
              "dependencies": [
                "MNT4-001"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2.5
              },
              "notes": [
                "Fase: Medición",
                "Condición: Base obligatorio",
                "Unidad: Entorno",
                "Incluye: Medición inicial reproducible antes de realizar cambios.",
                "Exclusiones: La comparación final se contabiliza en MNT4-010.",
                "Dependencias: MNT4-001",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mnt4-003",
              "code": "MNT4-003",
              "name": "Perfilamiento de frontend",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Diagnóstico",
              "unitLabel": "Proyecto",
              "baseHours": 2.5,
              "scope": "Carga, renderizado, recursos y red",
              "dependencies": [
                "MNT4-002"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2.5
              },
              "notes": [
                "Fase: Diagnóstico",
                "Condición: Base incluido",
                "Unidad: Proyecto",
                "Incluye: Carga, renderizado, recursos y red",
                "Dependencias: MNT4-002",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mnt4-004",
              "code": "MNT4-004",
              "name": "Perfilamiento de backend y consultas",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Diagnóstico",
              "unitLabel": "Proyecto",
              "baseHours": 3,
              "scope": "Tiempos, consultas, bloqueos y recursos",
              "dependencies": [
                "MNT4-002"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 3
              },
              "notes": [
                "Fase: Diagnóstico",
                "Condición: Base incluido",
                "Unidad: Proyecto",
                "Incluye: Tiempos, consultas, bloqueos y recursos",
                "Dependencias: MNT4-002",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mnt4-005",
              "code": "MNT4-005",
              "name": "Optimización de recursos frontend",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Optimización",
              "unitLabel": "Proyecto",
              "baseHours": 3,
              "scope": "Imágenes, carga diferida y empaquetado",
              "dependencies": [
                "MNT4-003"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 3
              },
              "notes": [
                "Fase: Optimización",
                "Condición: Base incluido",
                "Unidad: Proyecto",
                "Incluye: Imágenes, carga diferida y empaquetado",
                "Dependencias: MNT4-003",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mnt4-006",
              "code": "MNT4-006",
              "name": "Optimización de consulta o endpoint",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Optimización",
              "unitLabel": "Consulta",
              "baseHours": 1.5,
              "scope": "Índices, filtros, caché o reescritura",
              "dependencies": [
                "MNT4-004"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Optimización",
                "Condición: Base incluido",
                "Unidad: Consulta",
                "Incluye: Índices, filtros, caché o reescritura",
                "Dependencias: MNT4-004",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Consulta)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "mnt4-007",
              "code": "MNT4-007",
              "name": "Configuración de caché",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Optimización",
              "unitLabel": "Capa",
              "baseHours": 2.5,
              "scope": "Política, expiración e invalidación",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2.5
              },
              "notes": [
                "Fase: Optimización",
                "Condición: Opcional",
                "Unidad: Capa",
                "Incluye: Política, expiración e invalidación",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mnt4-008",
              "code": "MNT4-008",
              "name": "Paginación y reducción de volumen",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Optimización",
              "unitLabel": "Flujo",
              "baseHours": 2,
              "scope": "Carga incremental y límites",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Optimización",
                "Condición: Opcional",
                "Unidad: Flujo",
                "Incluye: Carga incremental y límites",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mnt4-009",
              "code": "MNT4-009",
              "name": "Prueba de carga controlada",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Validación",
              "unitLabel": "Prueba",
              "baseHours": 3,
              "scope": "Volumen y concurrencia acordados",
              "exclusions": "Pruebas de estrés masivas",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 3
              },
              "notes": [
                "Fase: Validación",
                "Condición: Opcional",
                "Unidad: Prueba",
                "Incluye: Volumen y concurrencia acordados",
                "Exclusiones: Pruebas de estrés masivas",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mnt4-010",
              "code": "MNT4-010",
              "name": "Medición final y comparación antes/después",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Validación",
              "unitLabel": "Proyecto",
              "baseHours": 2,
              "scope": "Repetición de la medición inicial y comparación documentada de resultados.",
              "exclusions": "No vuelve a incluir la captura inicial de MNT4-002.",
              "dependencies": [
                "MNT4-002"
              ],
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Validación",
                "Condición: Base obligatorio",
                "Unidad: Proyecto",
                "Incluye: Repetición de la medición inicial y comparación documentada de resultados.",
                "Exclusiones: No vuelve a incluir la captura inicial de MNT4-002.",
                "Dependencias: MNT4-002",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mnt4-011",
              "code": "MNT4-011",
              "name": "Despliegue y monitoreo posterior",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Despliegue",
              "unitLabel": "Entorno",
              "baseHours": 2,
              "scope": "Despliegue, métricas y seguimiento",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Despliegue",
                "Condición: Base obligatorio",
                "Unidad: Entorno",
                "Incluye: Despliegue, métricas y seguimiento",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mnt4-012",
              "code": "MNT4-012",
              "name": "Documentación de optimizaciones",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Cierre",
              "unitLabel": "Proyecto",
              "baseHours": 1,
              "scope": "Cambios, resultados y próximos pasos",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1
              },
              "notes": [
                "Fase: Cierre",
                "Condición: Base obligatorio",
                "Unidad: Proyecto",
                "Incluye: Cambios, resultados y próximos pasos",
                "Estado de HH: Preliminar"
              ]
            }
          ],
          "totals": {
            "activityLines": 12,
            "activities": 12,
            "hours": {
              "fixed": 22
            }
          }
        }
      ]
    },
    {
      "id": "monitoreo-observabilidad",
      "name": "Monitoreo y Observabilidad",
      "description": "Disponibilidad, logs, trazabilidad, métricas, alertas y rendimiento.",
      "order": 3,
      "summary": {
        "serviceCodes": 3,
        "activityLines": 30,
        "activities": 30
      },
      "services": [
        {
          "id": "ism-mon-01",
          "code": "MON-01",
          "name": "Monitoreo de disponibilidad",
          "areaId": "monitoreo-observabilidad",
          "groupLabel": "Monitoreo y Observabilidad",
          "sourceSheet": "Catalogo Maestro",
          "unit": "service",
          "sizeMode": "not-applicable",
          "activities": [
            {
              "id": "mon1-001",
              "code": "MON1-001",
              "name": "Inventario de servicios y endpoints",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Diagnóstico",
              "unitLabel": "Servicio",
              "baseHours": 0.75,
              "scope": "URLs, APIs, jobs y dependencias",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.75
              },
              "notes": [
                "Fase: Diagnóstico",
                "Condición: Base obligatorio",
                "Unidad: Servicio",
                "Incluye: URLs, APIs, jobs y dependencias",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Servicio)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "mon1-002",
              "code": "MON1-002",
              "name": "Definición de indicadores de disponibilidad",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Diseño",
              "unitLabel": "Servicio",
              "baseHours": 0.75,
              "scope": "Estado, latencia, código y contenido esperado",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.75
              },
              "notes": [
                "Fase: Diseño",
                "Condición: Base obligatorio",
                "Unidad: Servicio",
                "Incluye: Estado, latencia, código y contenido esperado",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Servicio)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "mon1-003",
              "code": "MON1-003",
              "name": "Configuración de chequeo HTTP o endpoint",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Configuración",
              "unitLabel": "Servicio",
              "baseHours": 1,
              "scope": "Frecuencia, timeout y criterio de éxito",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1
              },
              "notes": [
                "Fase: Configuración",
                "Condición: Base incluido",
                "Unidad: Servicio",
                "Incluye: Frecuencia, timeout y criterio de éxito",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Servicio)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "mon1-004",
              "code": "MON1-004",
              "name": "Configuración de alertas",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Configuración",
              "unitLabel": "Canal",
              "baseHours": 1,
              "scope": "Umbrales, destinatarios y escalamiento",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1
              },
              "notes": [
                "Fase: Configuración",
                "Condición: Base incluido",
                "Unidad: Canal",
                "Incluye: Umbrales, destinatarios y escalamiento",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Canal)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "mon1-005",
              "code": "MON1-005",
              "name": "Ventanas de mantenimiento",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Configuración",
              "unitLabel": "Servicio",
              "baseHours": 0.5,
              "scope": "Supresión de alertas planificadas",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.5
              },
              "notes": [
                "Fase: Configuración",
                "Condición: Opcional",
                "Unidad: Servicio",
                "Incluye: Supresión de alertas planificadas",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Servicio)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "mon1-006",
              "code": "MON1-006",
              "name": "Dashboard de disponibilidad",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Visualización",
              "unitLabel": "Dashboard",
              "baseHours": 2.5,
              "scope": "Estado, histórico y tendencia",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2.5
              },
              "notes": [
                "Fase: Visualización",
                "Condición: Base incluido",
                "Unidad: Dashboard",
                "Incluye: Estado, histórico y tendencia",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mon1-007",
              "code": "MON1-007",
              "name": "Reporte periódico de disponibilidad",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Reportes",
              "unitLabel": "Reporte",
              "baseHours": 2,
              "scope": "Disponibilidad, eventos y observaciones",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Reportes",
                "Condición: Base incluido",
                "Unidad: Reporte",
                "Incluye: Disponibilidad, eventos y observaciones",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mon1-008",
              "code": "MON1-008",
              "name": "Prueba de caída y recuperación",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Calidad",
              "unitLabel": "Caso",
              "baseHours": 1,
              "scope": "Detección, notificación y recuperación",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1
              },
              "notes": [
                "Fase: Calidad",
                "Condición: Base obligatorio",
                "Unidad: Caso",
                "Incluye: Detección, notificación y recuperación",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Caso)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "mon1-009",
              "code": "MON1-009",
              "name": "Runbook de respuesta a indisponibilidad",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Operación",
              "unitLabel": "Documento",
              "baseHours": 1.5,
              "scope": "Validación, escalamiento y comunicación",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Operación",
                "Condición: Base obligatorio",
                "Unidad: Documento",
                "Incluye: Validación, escalamiento y comunicación",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mon1-010",
              "code": "MON1-010",
              "name": "Puesta en marcha y estabilización",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Despliegue",
              "unitLabel": "Entorno",
              "baseHours": 1.5,
              "scope": "Activación, observación y ajustes",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Despliegue",
                "Condición: Base obligatorio",
                "Unidad: Entorno",
                "Incluye: Activación, observación y ajustes",
                "Estado de HH: Preliminar"
              ]
            }
          ],
          "totals": {
            "activityLines": 10,
            "activities": 10,
            "hours": {
              "fixed": 19
            }
          }
        },
        {
          "id": "ism-mon-02",
          "code": "MON-02",
          "name": "Centralización de logs y trazabilidad",
          "areaId": "monitoreo-observabilidad",
          "groupLabel": "Monitoreo y Observabilidad",
          "sourceSheet": "Catalogo Maestro",
          "unit": "service",
          "sizeMode": "not-applicable",
          "activities": [
            {
              "id": "mon2-001",
              "code": "MON2-001",
              "name": "Inventario de fuentes de logs",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Diagnóstico",
              "unitLabel": "Fuente",
              "baseHours": 0.75,
              "scope": "Aplicación, servidor, base de datos y servicios",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.75
              },
              "notes": [
                "Fase: Diagnóstico",
                "Condición: Base obligatorio",
                "Unidad: Fuente",
                "Incluye: Aplicación, servidor, base de datos y servicios",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Fuente)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "mon2-002",
              "code": "MON2-002",
              "name": "Definición de estructura y campos comunes",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Diseño",
              "unitLabel": "Proyecto",
              "baseHours": 2,
              "scope": "Nivel, fecha, usuario, correlación y contexto",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Diseño",
                "Condición: Base obligatorio",
                "Unidad: Proyecto",
                "Incluye: Nivel, fecha, usuario, correlación y contexto",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mon2-003",
              "code": "MON2-003",
              "name": "Configuración de envío de logs",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Implementación",
              "unitLabel": "Fuente",
              "baseHours": 1.5,
              "scope": "Agente, librería o integración",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Implementación",
                "Condición: Base incluido",
                "Unidad: Fuente",
                "Incluye: Agente, librería o integración",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Fuente)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "mon2-004",
              "code": "MON2-004",
              "name": "Normalización y parseo",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Implementación",
              "unitLabel": "Fuente",
              "baseHours": 1,
              "scope": "Campos, formatos y errores",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1
              },
              "notes": [
                "Fase: Implementación",
                "Condición: Base incluido",
                "Unidad: Fuente",
                "Incluye: Campos, formatos y errores",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Fuente)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "mon2-005",
              "code": "MON2-005",
              "name": "Identificador de correlación",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Trazabilidad",
              "unitLabel": "Flujo",
              "baseHours": 1.5,
              "scope": "Seguimiento entre componentes",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Trazabilidad",
                "Condición: Opcional",
                "Unidad: Flujo",
                "Incluye: Seguimiento entre componentes",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Flujo)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "mon2-006",
              "code": "MON2-006",
              "name": "Política de retención y rotación",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Retención",
              "unitLabel": "Entorno",
              "baseHours": 1.5,
              "scope": "Periodo, volumen y eliminación",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Retención",
                "Condición: Base obligatorio",
                "Unidad: Entorno",
                "Incluye: Periodo, volumen y eliminación",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mon2-007",
              "code": "MON2-007",
              "name": "Dashboard de errores y eventos",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Visualización",
              "unitLabel": "Dashboard",
              "baseHours": 3,
              "scope": "Errores, niveles y tendencias",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 3
              },
              "notes": [
                "Fase: Visualización",
                "Condición: Base incluido",
                "Unidad: Dashboard",
                "Incluye: Errores, niveles y tendencias",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mon2-008",
              "code": "MON2-008",
              "name": "Alerta por patrón crítico",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Alertas",
              "unitLabel": "Regla",
              "baseHours": 1,
              "scope": "Patrones, frecuencia y severidad",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1
              },
              "notes": [
                "Fase: Alertas",
                "Condición: Base incluido",
                "Unidad: Regla",
                "Incluye: Patrones, frecuencia y severidad",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Regla)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "mon2-009",
              "code": "MON2-009",
              "name": "Pruebas de generación y búsqueda",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Calidad",
              "unitLabel": "Caso",
              "baseHours": 0.75,
              "scope": "Generación, recepción y consulta",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.75
              },
              "notes": [
                "Fase: Calidad",
                "Condición: Base obligatorio",
                "Unidad: Caso",
                "Incluye: Generación, recepción y consulta",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Caso)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "mon2-010",
              "code": "MON2-010",
              "name": "Runbook de consulta y escalamiento",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Operación",
              "unitLabel": "Documento",
              "baseHours": 1.5,
              "scope": "Búsquedas, filtros y escalamiento",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Operación",
                "Condición: Base obligatorio",
                "Unidad: Documento",
                "Incluye: Búsquedas, filtros y escalamiento",
                "Estado de HH: Preliminar"
              ]
            }
          ],
          "totals": {
            "activityLines": 10,
            "activities": 10,
            "hours": {
              "fixed": 27
            }
          }
        },
        {
          "id": "ism-mon-03",
          "code": "MON-03",
          "name": "Métricas y rendimiento",
          "areaId": "monitoreo-observabilidad",
          "groupLabel": "Monitoreo y Observabilidad",
          "sourceSheet": "Catalogo Maestro",
          "unit": "service",
          "sizeMode": "not-applicable",
          "activities": [
            {
              "id": "mon3-001",
              "code": "MON3-001",
              "name": "Definición de métricas técnicas",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Diagnóstico",
              "unitLabel": "Métrica",
              "baseHours": 0.5,
              "scope": "CPU, memoria, latencia, errores y volumen",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.5
              },
              "notes": [
                "Fase: Diagnóstico",
                "Condición: Base obligatorio",
                "Unidad: Métrica",
                "Incluye: CPU, memoria, latencia, errores y volumen",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Métrica)",
                "baseQuantity": 1,
                "defaultQuantity": 6,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "mon3-002",
              "code": "MON3-002",
              "name": "Instrumentación de métrica de aplicación",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Instrumentación",
              "unitLabel": "Métrica",
              "baseHours": 1.5,
              "scope": "Código, etiquetas y frecuencia",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Instrumentación",
                "Condición: Base incluido",
                "Unidad: Métrica",
                "Incluye: Código, etiquetas y frecuencia",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Métrica)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "mon3-003",
              "code": "MON3-003",
              "name": "Recolección de métricas de infraestructura",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Infraestructura",
              "unitLabel": "Host",
              "baseHours": 1.5,
              "scope": "Agente, permisos y conectividad",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Infraestructura",
                "Condición: Base incluido",
                "Unidad: Host",
                "Incluye: Agente, permisos y conectividad",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Host)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "mon3-004",
              "code": "MON3-004",
              "name": "Dashboard operacional",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Visualización",
              "unitLabel": "Dashboard",
              "baseHours": 3,
              "scope": "Salud, capacidad y rendimiento",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 3
              },
              "notes": [
                "Fase: Visualización",
                "Condición: Base incluido",
                "Unidad: Dashboard",
                "Incluye: Salud, capacidad y rendimiento",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mon3-005",
              "code": "MON3-005",
              "name": "Umbral y alerta de rendimiento",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Alertas",
              "unitLabel": "Métrica",
              "baseHours": 0.75,
              "scope": "Umbral, duración y severidad",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.75
              },
              "notes": [
                "Fase: Alertas",
                "Condición: Base incluido",
                "Unidad: Métrica",
                "Incluye: Umbral, duración y severidad",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Métrica)",
                "baseQuantity": 1,
                "defaultQuantity": 5,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "mon3-006",
              "code": "MON3-006",
              "name": "Análisis de tendencia y capacidad",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Capacidad",
              "unitLabel": "Proyecto",
              "baseHours": 2.5,
              "scope": "Consumo, tendencia y proyección",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2.5
              },
              "notes": [
                "Fase: Capacidad",
                "Condición: Opcional",
                "Unidad: Proyecto",
                "Incluye: Consumo, tendencia y proyección",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mon3-007",
              "code": "MON3-007",
              "name": "Métrica de experiencia o transacción",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Experiencia",
              "unitLabel": "Flujo",
              "baseHours": 1.5,
              "scope": "Tiempo y resultado de transacción",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Experiencia",
                "Condición: Opcional",
                "Unidad: Flujo",
                "Incluye: Tiempo y resultado de transacción",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Flujo)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "mon3-008",
              "code": "MON3-008",
              "name": "Prueba de umbrales y alertas",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Calidad",
              "unitLabel": "Caso",
              "baseHours": 0.75,
              "scope": "Generación y recepción",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.75
              },
              "notes": [
                "Fase: Calidad",
                "Condición: Base obligatorio",
                "Unidad: Caso",
                "Incluye: Generación y recepción",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Caso)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "mon3-009",
              "code": "MON3-009",
              "name": "Reporte periódico de rendimiento",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Reportes",
              "unitLabel": "Reporte",
              "baseHours": 2,
              "scope": "Indicadores, eventos y recomendaciones",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Reportes",
                "Condición: Base incluido",
                "Unidad: Reporte",
                "Incluye: Indicadores, eventos y recomendaciones",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "mon3-010",
              "code": "MON3-010",
              "name": "Documentación y transferencia",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Operación",
              "unitLabel": "Proyecto",
              "baseHours": 1.5,
              "scope": "Dashboards, alertas y mantenimiento",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Operación",
                "Condición: Base obligatorio",
                "Unidad: Proyecto",
                "Incluye: Dashboards, alertas y mantenimiento",
                "Estado de HH: Preliminar"
              ]
            }
          ],
          "totals": {
            "activityLines": 10,
            "activities": 10,
            "hours": {
              "fixed": 25.25
            }
          }
        }
      ]
    },
    {
      "id": "respaldo-continuidad",
      "name": "Respaldo y Continuidad",
      "description": "Respaldos, recuperación ante desastres, retención y continuidad operacional.",
      "order": 4,
      "summary": {
        "serviceCodes": 3,
        "activityLines": 29,
        "activities": 29
      },
      "services": [
        {
          "id": "ism-bcp-01",
          "code": "BCP-01",
          "name": "Implementación de respaldos",
          "areaId": "respaldo-continuidad",
          "groupLabel": "Respaldo y Continuidad",
          "sourceSheet": "Catalogo Maestro",
          "unit": "service",
          "sizeMode": "not-applicable",
          "activities": [
            {
              "id": "bcp1-001",
              "code": "BCP1-001",
              "name": "Inventario de activos y datos críticos",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Diagnóstico",
              "unitLabel": "Activo",
              "baseHours": 0.75,
              "scope": "Sistemas, datos, propietarios y criticidad",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.75
              },
              "notes": [
                "Fase: Diagnóstico",
                "Condición: Base obligatorio",
                "Unidad: Activo",
                "Incluye: Sistemas, datos, propietarios y criticidad",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Activo)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "bcp1-002",
              "code": "BCP1-002",
              "name": "Confirmación de RPO y RTO operativo para respaldos",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Diseño",
              "unitLabel": "Servicio",
              "baseHours": 1,
              "scope": "Validación básica de objetivos necesarios para definir frecuencia y restauración del respaldo.",
              "exclusions": "Si se incluye BCP-02, reutilizar la definición formal de BCP2-003 y no duplicar este esfuerzo.",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1
              },
              "notes": [
                "Fase: Diseño",
                "Condición: Base obligatorio",
                "Unidad: Servicio",
                "Incluye: Validación básica de objetivos necesarios para definir frecuencia y restauración del respaldo.",
                "Exclusiones: Si se incluye BCP-02, reutilizar la definición formal de BCP2-003 y no duplicar este esfuerzo.",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Servicio)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "bcp1-003",
              "code": "BCP1-003",
              "name": "Diseño de política de respaldo",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Diseño",
              "unitLabel": "Proyecto",
              "baseHours": 2,
              "scope": "Frecuencia, retención, cifrado y ubicación",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Diseño",
                "Condición: Base obligatorio",
                "Unidad: Proyecto",
                "Incluye: Frecuencia, retención, cifrado y ubicación",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "bcp1-004",
              "code": "BCP1-004",
              "name": "Configuración de job de respaldo",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Implementación",
              "unitLabel": "Job",
              "baseHours": 1.5,
              "scope": "Origen, destino, horario y retención",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Implementación",
                "Condición: Base incluido",
                "Unidad: Job",
                "Incluye: Origen, destino, horario y retención",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Job)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "bcp1-005",
              "code": "BCP1-005",
              "name": "Configuración de cifrado y acceso",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Implementación",
              "unitLabel": "Entorno",
              "baseHours": 1.5,
              "scope": "Claves, permisos y acceso restringido",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Implementación",
                "Condición: Base incluido",
                "Unidad: Entorno",
                "Incluye: Claves, permisos y acceso restringido",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "bcp1-006",
              "code": "BCP1-006",
              "name": "Copia externa o segunda ubicación",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Implementación",
              "unitLabel": "Destino",
              "baseHours": 2,
              "scope": "Transferencia, validación y retención",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Implementación",
                "Condición: Opcional",
                "Unidad: Destino",
                "Incluye: Transferencia, validación y retención",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "bcp1-007",
              "code": "BCP1-007",
              "name": "Prueba de respaldo completo",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Validación",
              "unitLabel": "Job",
              "baseHours": 0.75,
              "scope": "Ejecución, duración y resultado",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.75
              },
              "notes": [
                "Fase: Validación",
                "Condición: Base obligatorio",
                "Unidad: Job",
                "Incluye: Ejecución, duración y resultado",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Job)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "bcp1-008",
              "code": "BCP1-008",
              "name": "Prueba de restauración",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Restauración",
              "unitLabel": "Activo",
              "baseHours": 2,
              "scope": "Recuperación y validación de integridad",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Restauración",
                "Condición: Base obligatorio",
                "Unidad: Activo",
                "Incluye: Recuperación y validación de integridad",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Activo)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "bcp1-009",
              "code": "BCP1-009",
              "name": "Configuración de alerta de fallo",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Alertas",
              "unitLabel": "Canal",
              "baseHours": 0.75,
              "scope": "Fallo, retraso o ausencia de respaldo",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.75
              },
              "notes": [
                "Fase: Alertas",
                "Condición: Base incluido",
                "Unidad: Canal",
                "Incluye: Fallo, retraso o ausencia de respaldo",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Canal)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "bcp1-010",
              "code": "BCP1-010",
              "name": "Runbook de respaldo y restauración",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Operación",
              "unitLabel": "Documento",
              "baseHours": 2,
              "scope": "Procedimiento operativo del job, validación, alertas y restauración del respaldo.",
              "exclusions": "No reemplaza el procedimiento integral de recuperación ante desastres de BCP2-005.",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Operación",
                "Condición: Base obligatorio",
                "Unidad: Documento",
                "Incluye: Procedimiento operativo del job, validación, alertas y restauración del respaldo.",
                "Exclusiones: No reemplaza el procedimiento integral de recuperación ante desastres de BCP2-005.",
                "Estado de HH: Preliminar"
              ]
            }
          ],
          "totals": {
            "activityLines": 10,
            "activities": 10,
            "hours": {
              "fixed": 23.75
            }
          }
        },
        {
          "id": "ism-bcp-02",
          "code": "BCP-02",
          "name": "Plan de recuperación ante desastres",
          "areaId": "respaldo-continuidad",
          "groupLabel": "Respaldo y Continuidad",
          "sourceSheet": "Catalogo Maestro",
          "unit": "service",
          "sizeMode": "not-applicable",
          "activities": [
            {
              "id": "bcp2-001",
              "code": "BCP2-001",
              "name": "Análisis de impacto del negocio",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Análisis",
              "unitLabel": "Proceso",
              "baseHours": 1.25,
              "scope": "Criticidad, dependencia e impacto",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.25
              },
              "notes": [
                "Fase: Análisis",
                "Condición: Base obligatorio",
                "Unidad: Proceso",
                "Incluye: Criticidad, dependencia e impacto",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Proceso)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "bcp2-002",
              "code": "BCP2-002",
              "name": "Inventario de dependencias críticas",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Análisis",
              "unitLabel": "Servicio",
              "baseHours": 0.75,
              "scope": "Infraestructura, datos, terceros y personas",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.75
              },
              "notes": [
                "Fase: Análisis",
                "Condición: Base obligatorio",
                "Unidad: Servicio",
                "Incluye: Infraestructura, datos, terceros y personas",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Servicio)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "bcp2-003",
              "code": "BCP2-003",
              "name": "Definición formal de RPO y RTO por servicio",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Objetivos",
              "unitLabel": "Servicio",
              "baseHours": 1,
              "scope": "Objetivos aprobados por servicio crítico, alineados con impacto, dependencias y estrategia de recuperación.",
              "exclusions": "Sustituye la definición básica de BCP1-002 cuando ambos servicios forman parte de la misma propuesta.",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1
              },
              "notes": [
                "Fase: Objetivos",
                "Condición: Base obligatorio",
                "Unidad: Servicio",
                "Incluye: Objetivos aprobados por servicio crítico, alineados con impacto, dependencias y estrategia de recuperación.",
                "Exclusiones: Sustituye la definición básica de BCP1-002 cuando ambos servicios forman parte de la misma propuesta.",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Servicio)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "bcp2-004",
              "code": "BCP2-004",
              "name": "Diseño de estrategia de recuperación",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Estrategia",
              "unitLabel": "Servicio",
              "baseHours": 2,
              "scope": "Sitio, restauración, prioridades y secuencia",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Estrategia",
                "Condición: Base obligatorio",
                "Unidad: Servicio",
                "Incluye: Sitio, restauración, prioridades y secuencia",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Servicio)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "bcp2-005",
              "code": "BCP2-005",
              "name": "Creación de procedimiento de recuperación",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Procedimientos",
              "unitLabel": "Servicio",
              "baseHours": 2.5,
              "scope": "Secuencia integral para recuperar servicios, dependencias, datos y responsables después de un desastre.",
              "exclusions": "No duplica el procedimiento operativo del job de respaldo documentado en BCP1-010.",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2.5
              },
              "notes": [
                "Fase: Procedimientos",
                "Condición: Base incluido",
                "Unidad: Servicio",
                "Incluye: Secuencia integral para recuperar servicios, dependencias, datos y responsables después de un desastre.",
                "Exclusiones: No duplica el procedimiento operativo del job de respaldo documentado en BCP1-010.",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Servicio)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "bcp2-006",
              "code": "BCP2-006",
              "name": "Plan de comunicación y escalamiento",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Comunicación",
              "unitLabel": "Proyecto",
              "baseHours": 1.5,
              "scope": "Contactos, severidad y mensajes",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Comunicación",
                "Condición: Base obligatorio",
                "Unidad: Proyecto",
                "Incluye: Contactos, severidad y mensajes",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "bcp2-007",
              "code": "BCP2-007",
              "name": "Diseño de escenario de simulación",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Pruebas",
              "unitLabel": "Escenario",
              "baseHours": 2,
              "scope": "Alcance, éxito y riesgos",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Pruebas",
                "Condición: Base obligatorio",
                "Unidad: Escenario",
                "Incluye: Alcance, éxito y riesgos",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "bcp2-008",
              "code": "BCP2-008",
              "name": "Ejecución de simulación",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Pruebas",
              "unitLabel": "Ejercicio",
              "baseHours": 4,
              "scope": "Tiempos, decisiones y evidencias",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 4
              },
              "notes": [
                "Fase: Pruebas",
                "Condición: Base obligatorio",
                "Unidad: Ejercicio",
                "Incluye: Tiempos, decisiones y evidencias",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "bcp2-009",
              "code": "BCP2-009",
              "name": "Informe de brechas y plan de mejora",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Mejora",
              "unitLabel": "Proyecto",
              "baseHours": 2,
              "scope": "Hallazgos, responsables y fechas",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Mejora",
                "Condición: Base obligatorio",
                "Unidad: Proyecto",
                "Incluye: Hallazgos, responsables y fechas",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "bcp2-010",
              "code": "BCP2-010",
              "name": "Calendario de pruebas y revisión",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Operación",
              "unitLabel": "Proyecto",
              "baseHours": 1,
              "scope": "Periodicidad y responsables",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1
              },
              "notes": [
                "Fase: Operación",
                "Condición: Base incluido",
                "Unidad: Proyecto",
                "Incluye: Periodicidad y responsables",
                "Estado de HH: Preliminar"
              ]
            }
          ],
          "totals": {
            "activityLines": 10,
            "activities": 10,
            "hours": {
              "fixed": 36
            }
          }
        },
        {
          "id": "ism-bcp-03",
          "code": "BCP-03",
          "name": "Retención y ciclo de vida de datos",
          "areaId": "respaldo-continuidad",
          "groupLabel": "Respaldo y Continuidad",
          "sourceSheet": "Catalogo Maestro",
          "unit": "service",
          "sizeMode": "not-applicable",
          "activities": [
            {
              "id": "bcp3-001",
              "code": "BCP3-001",
              "name": "Inventario y clasificación de información",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Diagnóstico",
              "unitLabel": "Fuente",
              "baseHours": 0.75,
              "scope": "Tipo, criticidad y propietario",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.75
              },
              "notes": [
                "Fase: Diagnóstico",
                "Condición: Base obligatorio",
                "Unidad: Fuente",
                "Incluye: Tipo, criticidad y propietario",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Fuente)",
                "baseQuantity": 1,
                "defaultQuantity": 5,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "bcp3-002",
              "code": "BCP3-002",
              "name": "Levantamiento de obligaciones de retención",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Requisitos",
              "unitLabel": "Categoría",
              "baseHours": 1,
              "scope": "Necesidades contractuales y operativas",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1
              },
              "notes": [
                "Fase: Requisitos",
                "Condición: Base obligatorio",
                "Unidad: Categoría",
                "Incluye: Necesidades contractuales y operativas",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Categoría)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "bcp3-003",
              "code": "BCP3-003",
              "name": "Diseño de matriz de retención",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Diseño",
              "unitLabel": "Categoría",
              "baseHours": 1,
              "scope": "Periodo, evento inicial y disposición",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1
              },
              "notes": [
                "Fase: Diseño",
                "Condición: Base obligatorio",
                "Unidad: Categoría",
                "Incluye: Periodo, evento inicial y disposición",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Categoría)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "bcp3-004",
              "code": "BCP3-004",
              "name": "Configuración de política de retención",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Implementación",
              "unitLabel": "Sistema",
              "baseHours": 2,
              "scope": "Archivado, conservación y eliminación",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Implementación",
                "Condición: Base incluido",
                "Unidad: Sistema",
                "Incluye: Archivado, conservación y eliminación",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Sistema)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "bcp3-005",
              "code": "BCP3-005",
              "name": "Configuración de almacenamiento de archivo",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Implementación",
              "unitLabel": "Destino",
              "baseHours": 2,
              "scope": "Ubicación, acceso y costos",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Implementación",
                "Condición: Opcional",
                "Unidad: Destino",
                "Incluye: Ubicación, acceso y costos",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "bcp3-006",
              "code": "BCP3-006",
              "name": "Revisión de excepciones y bloqueos",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Control",
              "unitLabel": "Caso",
              "baseHours": 0.75,
              "scope": "Litigio, auditoría o necesidad especial",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.75
              },
              "notes": [
                "Fase: Control",
                "Condición: Base incluido",
                "Unidad: Caso",
                "Incluye: Litigio, auditoría o necesidad especial",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Caso)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "bcp3-007",
              "code": "BCP3-007",
              "name": "Prueba de aplicación de política",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Validación",
              "unitLabel": "Caso",
              "baseHours": 1,
              "scope": "Conservación, archivo y eliminación",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1
              },
              "notes": [
                "Fase: Validación",
                "Condición: Base obligatorio",
                "Unidad: Caso",
                "Incluye: Conservación, archivo y eliminación",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Caso)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "bcp3-008",
              "code": "BCP3-008",
              "name": "Definición de responsables y revisión",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Gobierno",
              "unitLabel": "Proyecto",
              "baseHours": 1,
              "scope": "Propietario, aprobador y periodicidad",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1
              },
              "notes": [
                "Fase: Gobierno",
                "Condición: Base obligatorio",
                "Unidad: Proyecto",
                "Incluye: Propietario, aprobador y periodicidad",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "bcp3-009",
              "code": "BCP3-009",
              "name": "Documentación y entrega",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Cierre",
              "unitLabel": "Proyecto",
              "baseHours": 1.5,
              "scope": "Matriz, reglas y operación",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Cierre",
                "Condición: Base obligatorio",
                "Unidad: Proyecto",
                "Incluye: Matriz, reglas y operación",
                "Estado de HH: Preliminar"
              ]
            }
          ],
          "totals": {
            "activityLines": 9,
            "activities": 9,
            "hours": {
              "fixed": 23.5
            }
          }
        }
      ]
    },
    {
      "id": "ciberseguridad",
      "name": "Ciberseguridad",
      "description": "Hardening, vulnerabilidades, identidades y preparación ante incidentes.",
      "order": 5,
      "summary": {
        "serviceCodes": 4,
        "activityLines": 46,
        "activities": 46
      },
      "services": [
        {
          "id": "ism-sec-01",
          "code": "SEC-01",
          "name": "Hardening de plataforma",
          "areaId": "ciberseguridad",
          "groupLabel": "Ciberseguridad",
          "sourceSheet": "Catalogo Maestro",
          "unit": "service",
          "sizeMode": "not-applicable",
          "activities": [
            {
              "id": "sec1-001",
              "code": "SEC1-001",
              "name": "Inventario de componentes, versiones y servicios",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Diagnóstico",
              "unitLabel": "Activo",
              "baseHours": 0.75,
              "scope": "Sistemas, aplicaciones, bases y servicios",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.75
              },
              "notes": [
                "Fase: Diagnóstico",
                "Condición: Base obligatorio",
                "Unidad: Activo",
                "Incluye: Sistemas, aplicaciones, bases y servicios",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Activo)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sec1-002",
              "code": "SEC1-002",
              "name": "Levantamiento de línea base de configuración",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Diagnóstico",
              "unitLabel": "Entorno",
              "baseHours": 1.5,
              "scope": "Configuraciones, puertos, cuentas y políticas",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Diagnóstico",
                "Condición: Base obligatorio",
                "Unidad: Entorno",
                "Incluye: Configuraciones, puertos, cuentas y políticas",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Entorno)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sec1-003",
              "code": "SEC1-003",
              "name": "Revisión de cuentas y privilegios",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Accesos",
              "unitLabel": "Cuenta",
              "baseHours": 0.25,
              "scope": "Cuentas activas, privilegios y propietarios",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.25
              },
              "notes": [
                "Fase: Accesos",
                "Condición: Base obligatorio",
                "Unidad: Cuenta",
                "Incluye: Cuentas activas, privilegios y propietarios",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Cuenta)",
                "baseQuantity": 1,
                "defaultQuantity": 8,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sec1-004",
              "code": "SEC1-004",
              "name": "Deshabilitación o corrección de cuentas inseguras",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Accesos",
              "unitLabel": "Cuenta",
              "baseHours": 0.25,
              "scope": "Cuentas por defecto, huérfanas o excesivas",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.25
              },
              "notes": [
                "Fase: Accesos",
                "Condición: Base incluido",
                "Unidad: Cuenta",
                "Incluye: Cuentas por defecto, huérfanas o excesivas",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Cuenta)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sec1-005",
              "code": "SEC1-005",
              "name": "Aplicación de hardening de sistema operativo",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Configuración",
              "unitLabel": "Entorno",
              "baseHours": 4,
              "scope": "Servicios, políticas, permisos y auditoría",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 4
              },
              "notes": [
                "Fase: Configuración",
                "Condición: Base incluido",
                "Unidad: Entorno",
                "Incluye: Servicios, políticas, permisos y auditoría",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "sec1-006",
              "code": "SEC1-006",
              "name": "Aplicación de hardening de aplicación",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Configuración",
              "unitLabel": "Aplicación",
              "baseHours": 3,
              "scope": "Cabeceras, configuración, secretos y errores",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 3
              },
              "notes": [
                "Fase: Configuración",
                "Condición: Opcional",
                "Unidad: Aplicación",
                "Incluye: Cabeceras, configuración, secretos y errores",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "sec1-007",
              "code": "SEC1-007",
              "name": "Aplicación de hardening de base de datos",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Configuración",
              "unitLabel": "Base de datos",
              "baseHours": 3,
              "scope": "Usuarios, red, cifrado y auditoría",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 3
              },
              "notes": [
                "Fase: Configuración",
                "Condición: Opcional",
                "Unidad: Base de datos",
                "Incluye: Usuarios, red, cifrado y auditoría",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "sec1-008",
              "code": "SEC1-008",
              "name": "Cierre de puertos y servicios no requeridos",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Red",
              "unitLabel": "Entorno",
              "baseHours": 1.5,
              "scope": "Puertos, protocolos y servicios",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Red",
                "Condición: Base incluido",
                "Unidad: Entorno",
                "Incluye: Puertos, protocolos y servicios",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "sec1-009",
              "code": "SEC1-009",
              "name": "Configuración de cifrado y protocolos seguros",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Criptografía",
              "unitLabel": "Entorno",
              "baseHours": 1.5,
              "scope": "TLS, algoritmos y configuración",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Criptografía",
                "Condición: Base incluido",
                "Unidad: Entorno",
                "Incluye: TLS, algoritmos y configuración",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "sec1-010",
              "code": "SEC1-010",
              "name": "Configuración de logs de seguridad",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Auditoría",
              "unitLabel": "Entorno",
              "baseHours": 1.5,
              "scope": "Accesos, cambios y eventos críticos",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Auditoría",
                "Condición: Base incluido",
                "Unidad: Entorno",
                "Incluye: Accesos, cambios y eventos críticos",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "sec1-011",
              "code": "SEC1-011",
              "name": "Revisión posterior contra línea base",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Validación",
              "unitLabel": "Entorno",
              "baseHours": 1,
              "scope": "Comparación y evidencias",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1
              },
              "notes": [
                "Fase: Validación",
                "Condición: Base obligatorio",
                "Unidad: Entorno",
                "Incluye: Comparación y evidencias",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Entorno)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sec1-012",
              "code": "SEC1-012",
              "name": "Pruebas de acceso y operación",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Calidad",
              "unitLabel": "Caso",
              "baseHours": 0.5,
              "scope": "Operación posterior al hardening",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.5
              },
              "notes": [
                "Fase: Calidad",
                "Condición: Base obligatorio",
                "Unidad: Caso",
                "Incluye: Operación posterior al hardening",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Caso)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sec1-013",
              "code": "SEC1-013",
              "name": "Informe de cambios y riesgos pendientes",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Cierre",
              "unitLabel": "Proyecto",
              "baseHours": 2,
              "scope": "Cambios, excepciones y recomendaciones",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Cierre",
                "Condición: Base obligatorio",
                "Unidad: Proyecto",
                "Incluye: Cambios, excepciones y recomendaciones",
                "Estado de HH: Preliminar"
              ]
            }
          ],
          "totals": {
            "activityLines": 13,
            "activities": 13,
            "hours": {
              "fixed": 23.5
            }
          }
        },
        {
          "id": "ism-sec-02",
          "code": "SEC-02",
          "name": "Gestión de vulnerabilidades y parches",
          "areaId": "ciberseguridad",
          "groupLabel": "Ciberseguridad",
          "sourceSheet": "Catalogo Maestro",
          "unit": "service",
          "sizeMode": "not-applicable",
          "activities": [
            {
              "id": "sec2-001",
              "code": "SEC2-001",
              "name": "Inventario de activos y alcance de revisión",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Alcance",
              "unitLabel": "Activo",
              "baseHours": 0.5,
              "scope": "Activos, propietarios y criticidad",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.5
              },
              "notes": [
                "Fase: Alcance",
                "Condición: Base obligatorio",
                "Unidad: Activo",
                "Incluye: Activos, propietarios y criticidad",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Activo)",
                "baseQuantity": 1,
                "defaultQuantity": 6,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sec2-002",
              "code": "SEC2-002",
              "name": "Configuración de credenciales y ventanas",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Preparación",
              "unitLabel": "Entorno",
              "baseHours": 0.75,
              "scope": "Credenciales, horarios y respaldo",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.75
              },
              "notes": [
                "Fase: Preparación",
                "Condición: Base obligatorio",
                "Unidad: Entorno",
                "Incluye: Credenciales, horarios y respaldo",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Entorno)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sec2-003",
              "code": "SEC2-003",
              "name": "Escaneo de vulnerabilidades",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Detección",
              "unitLabel": "Entorno",
              "baseHours": 2,
              "scope": "Hallazgos técnicos y evidencia",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Detección",
                "Condición: Base incluido",
                "Unidad: Entorno",
                "Incluye: Hallazgos técnicos y evidencia",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Entorno)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sec2-004",
              "code": "SEC2-004",
              "name": "Validación y descarte de falsos positivos",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Análisis",
              "unitLabel": "Hallazgo",
              "baseHours": 0.2,
              "scope": "Evidencia y aplicabilidad",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.2
              },
              "notes": [
                "Fase: Análisis",
                "Condición: Base obligatorio",
                "Unidad: Hallazgo",
                "Incluye: Evidencia y aplicabilidad",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Hallazgo)",
                "baseQuantity": 1,
                "defaultQuantity": 10,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sec2-005",
              "code": "SEC2-005",
              "name": "Priorización por criticidad e impacto",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Riesgo",
              "unitLabel": "Hallazgo",
              "baseHours": 0.2,
              "scope": "Severidad, exposición e impacto",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.2
              },
              "notes": [
                "Fase: Riesgo",
                "Condición: Base obligatorio",
                "Unidad: Hallazgo",
                "Incluye: Severidad, exposición e impacto",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Hallazgo)",
                "baseQuantity": 1,
                "defaultQuantity": 10,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sec2-006",
              "code": "SEC2-006",
              "name": "Plan de remediación y ventanas",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Planificación",
              "unitLabel": "Proyecto",
              "baseHours": 2,
              "scope": "Orden, responsables, riesgo y reversa",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Planificación",
                "Condición: Base obligatorio",
                "Unidad: Proyecto",
                "Incluye: Orden, responsables, riesgo y reversa",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "sec2-007",
              "code": "SEC2-007",
              "name": "Aplicación de parche estándar",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Remediación",
              "unitLabel": "Activo",
              "baseHours": 1,
              "scope": "Respaldo, actualización y validación",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1
              },
              "notes": [
                "Fase: Remediación",
                "Condición: Base incluido",
                "Unidad: Activo",
                "Incluye: Respaldo, actualización y validación",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Activo)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sec2-008",
              "code": "SEC2-008",
              "name": "Aplicación de mitigación de configuración",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Remediación",
              "unitLabel": "Hallazgo",
              "baseHours": 1,
              "scope": "Cambio compensatorio o configuración",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1
              },
              "notes": [
                "Fase: Remediación",
                "Condición: Opcional",
                "Unidad: Hallazgo",
                "Incluye: Cambio compensatorio o configuración",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Hallazgo)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sec2-009",
              "code": "SEC2-009",
              "name": "Prueba funcional posterior",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Calidad",
              "unitLabel": "Activo",
              "baseHours": 0.5,
              "scope": "Funciones críticas después del parche",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.5
              },
              "notes": [
                "Fase: Calidad",
                "Condición: Base obligatorio",
                "Unidad: Activo",
                "Incluye: Funciones críticas después del parche",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Activo)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sec2-010",
              "code": "SEC2-010",
              "name": "Nuevo escaneo de verificación",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Revalidación",
              "unitLabel": "Entorno",
              "baseHours": 1.5,
              "scope": "Cierre o riesgo residual",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Revalidación",
                "Condición: Base obligatorio",
                "Unidad: Entorno",
                "Incluye: Cierre o riesgo residual",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Entorno)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sec2-011",
              "code": "SEC2-011",
              "name": "Informe ejecutivo y técnico",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Cierre",
              "unitLabel": "Proyecto",
              "baseHours": 2,
              "scope": "Estado, riesgo residual y recomendaciones",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Cierre",
                "Condición: Base obligatorio",
                "Unidad: Proyecto",
                "Incluye: Estado, riesgo residual y recomendaciones",
                "Estado de HH: Preliminar"
              ]
            }
          ],
          "totals": {
            "activityLines": 11,
            "activities": 11,
            "hours": {
              "fixed": 25.5
            }
          }
        },
        {
          "id": "ism-sec-03",
          "code": "SEC-03",
          "name": "Identidad y control de accesos",
          "areaId": "ciberseguridad",
          "groupLabel": "Ciberseguridad",
          "sourceSheet": "Catalogo Maestro",
          "unit": "service",
          "sizeMode": "not-applicable",
          "activities": [
            {
              "id": "sec3-001",
              "code": "SEC3-001",
              "name": "Inventario de usuarios, roles y accesos",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Diagnóstico",
              "unitLabel": "Sistema",
              "baseHours": 1.5,
              "scope": "Usuarios, grupos, permisos y propietarios",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Diagnóstico",
                "Condición: Base obligatorio",
                "Unidad: Sistema",
                "Incluye: Usuarios, grupos, permisos y propietarios",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Sistema)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sec3-002",
              "code": "SEC3-002",
              "name": "Diseño de roles y segregación de funciones",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Diseño",
              "unitLabel": "Rol",
              "baseHours": 1,
              "scope": "Responsabilidades, permisos y conflictos",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1
              },
              "notes": [
                "Fase: Diseño",
                "Condición: Base obligatorio",
                "Unidad: Rol",
                "Incluye: Responsabilidades, permisos y conflictos",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Rol)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sec3-003",
              "code": "SEC3-003",
              "name": "Matriz de acceso por recurso",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Diseño",
              "unitLabel": "Rol",
              "baseHours": 1,
              "scope": "Lectura, edición, aprobación y administración",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1
              },
              "notes": [
                "Fase: Diseño",
                "Condición: Base obligatorio",
                "Unidad: Rol",
                "Incluye: Lectura, edición, aprobación y administración",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Rol)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sec3-004",
              "code": "SEC3-004",
              "name": "Configuración de autenticación multifactor",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Autenticación",
              "unitLabel": "Sistema",
              "baseHours": 3,
              "scope": "Enrolamiento, recuperación y excepción",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 3
              },
              "notes": [
                "Fase: Autenticación",
                "Condición: Base incluido",
                "Unidad: Sistema",
                "Incluye: Enrolamiento, recuperación y excepción",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "sec3-005",
              "code": "SEC3-005",
              "name": "Política de contraseñas y sesión",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Autenticación",
              "unitLabel": "Sistema",
              "baseHours": 1.5,
              "scope": "Complejidad, bloqueo, duración y recuperación",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Autenticación",
                "Condición: Base incluido",
                "Unidad: Sistema",
                "Incluye: Complejidad, bloqueo, duración y recuperación",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "sec3-006",
              "code": "SEC3-006",
              "name": "Aplicación de mínimo privilegio",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Autorización",
              "unitLabel": "Rol",
              "baseHours": 1,
              "scope": "Reducción de privilegios y accesos heredados",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1
              },
              "notes": [
                "Fase: Autorización",
                "Condición: Base incluido",
                "Unidad: Rol",
                "Incluye: Reducción de privilegios y accesos heredados",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Rol)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sec3-007",
              "code": "SEC3-007",
              "name": "Proceso de alta, cambio y baja de usuarios",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Ciclo de vida",
              "unitLabel": "Proceso",
              "baseHours": 2,
              "scope": "Solicitud, aprobación, ejecución y evidencia",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Ciclo de vida",
                "Condición: Base obligatorio",
                "Unidad: Proceso",
                "Incluye: Solicitud, aprobación, ejecución y evidencia",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "sec3-008",
              "code": "SEC3-008",
              "name": "Control de cuentas de servicio",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Cuentas",
              "unitLabel": "Cuenta",
              "baseHours": 0.5,
              "scope": "Propietario, secreto, uso y rotación",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.5
              },
              "notes": [
                "Fase: Cuentas",
                "Condición: Opcional",
                "Unidad: Cuenta",
                "Incluye: Propietario, secreto, uso y rotación",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Cuenta)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sec3-009",
              "code": "SEC3-009",
              "name": "Registro de eventos de autenticación",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Auditoría",
              "unitLabel": "Sistema",
              "baseHours": 1.5,
              "scope": "Ingreso, fallo, bloqueo y cambios",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Auditoría",
                "Condición: Base incluido",
                "Unidad: Sistema",
                "Incluye: Ingreso, fallo, bloqueo y cambios",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "sec3-010",
              "code": "SEC3-010",
              "name": "Pruebas de acceso por rol",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Calidad",
              "unitLabel": "Caso",
              "baseHours": 0.5,
              "scope": "Permitidos, denegados y recuperación",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.5
              },
              "notes": [
                "Fase: Calidad",
                "Condición: Base obligatorio",
                "Unidad: Caso",
                "Incluye: Permitidos, denegados y recuperación",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Caso)",
                "baseQuantity": 1,
                "defaultQuantity": 8,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sec3-011",
              "code": "SEC3-011",
              "name": "Documentación y transferencia",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Cierre",
              "unitLabel": "Proyecto",
              "baseHours": 2,
              "scope": "Roles, accesos y operación",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Cierre",
                "Condición: Base obligatorio",
                "Unidad: Proyecto",
                "Incluye: Roles, accesos y operación",
                "Estado de HH: Preliminar"
              ]
            }
          ],
          "totals": {
            "activityLines": 11,
            "activities": 11,
            "hours": {
              "fixed": 29
            }
          }
        },
        {
          "id": "ism-sec-04",
          "code": "SEC-04",
          "name": "Preparación para respuesta a incidentes",
          "areaId": "ciberseguridad",
          "groupLabel": "Ciberseguridad",
          "sourceSheet": "Catalogo Maestro",
          "unit": "service",
          "sizeMode": "not-applicable",
          "activities": [
            {
              "id": "sec4-001",
              "code": "SEC4-001",
              "name": "Definición de escenarios prioritarios",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Escenarios",
              "unitLabel": "Escenario",
              "baseHours": 0.75,
              "scope": "Acceso, malware, fuga e indisponibilidad",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.75
              },
              "notes": [
                "Fase: Escenarios",
                "Condición: Base obligatorio",
                "Unidad: Escenario",
                "Incluye: Acceso, malware, fuga e indisponibilidad",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Escenario)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sec4-002",
              "code": "SEC4-002",
              "name": "Definición de severidades y criterios",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Clasificación",
              "unitLabel": "Proyecto",
              "baseHours": 1.5,
              "scope": "Impacto, urgencia y escalamiento",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Clasificación",
                "Condición: Base obligatorio",
                "Unidad: Proyecto",
                "Incluye: Impacto, urgencia y escalamiento",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "sec4-003",
              "code": "SEC4-003",
              "name": "Definición de roles y contactos",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Organización",
              "unitLabel": "Rol",
              "baseHours": 0.5,
              "scope": "Responsables, suplentes y contactos",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.5
              },
              "notes": [
                "Fase: Organización",
                "Condición: Base obligatorio",
                "Unidad: Rol",
                "Incluye: Responsables, suplentes y contactos",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Rol)",
                "baseQuantity": 1,
                "defaultQuantity": 5,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sec4-004",
              "code": "SEC4-004",
              "name": "Playbook de detección y análisis",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Procedimientos",
              "unitLabel": "Escenario",
              "baseHours": 1.5,
              "scope": "Evidencia, validación y clasificación",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Procedimientos",
                "Condición: Base incluido",
                "Unidad: Escenario",
                "Incluye: Evidencia, validación y clasificación",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Escenario)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sec4-005",
              "code": "SEC4-005",
              "name": "Playbook de contención y erradicación",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Procedimientos",
              "unitLabel": "Escenario",
              "baseHours": 2,
              "scope": "Aislamiento, bloqueo y limpieza",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Procedimientos",
                "Condición: Base incluido",
                "Unidad: Escenario",
                "Incluye: Aislamiento, bloqueo y limpieza",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Escenario)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sec4-006",
              "code": "SEC4-006",
              "name": "Playbook de recuperación",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Procedimientos",
              "unitLabel": "Escenario",
              "baseHours": 1.5,
              "scope": "Restauración, validación y retorno",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Procedimientos",
                "Condición: Base incluido",
                "Unidad: Escenario",
                "Incluye: Restauración, validación y retorno",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Escenario)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sec4-007",
              "code": "SEC4-007",
              "name": "Plan de comunicación de incidentes",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Comunicación",
              "unitLabel": "Proyecto",
              "baseHours": 1.5,
              "scope": "Interna, cliente y terceros",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Comunicación",
                "Condición: Base obligatorio",
                "Unidad: Proyecto",
                "Incluye: Interna, cliente y terceros",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "sec4-008",
              "code": "SEC4-008",
              "name": "Preparación de fuentes de evidencia",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Evidencia",
              "unitLabel": "Fuente",
              "baseHours": 0.75,
              "scope": "Logs, respaldos y auditoría",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.75
              },
              "notes": [
                "Fase: Evidencia",
                "Condición: Base incluido",
                "Unidad: Fuente",
                "Incluye: Logs, respaldos y auditoría",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Fuente)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sec4-009",
              "code": "SEC4-009",
              "name": "Diseño de ejercicio de mesa",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Simulación",
              "unitLabel": "Ejercicio",
              "baseHours": 2,
              "scope": "Escenario, decisiones y criterios",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Simulación",
                "Condición: Base obligatorio",
                "Unidad: Ejercicio",
                "Incluye: Escenario, decisiones y criterios",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "sec4-010",
              "code": "SEC4-010",
              "name": "Ejecución de ejercicio de mesa",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Simulación",
              "unitLabel": "Ejercicio",
              "baseHours": 3,
              "scope": "Tiempos, coordinación y evidencia",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 3
              },
              "notes": [
                "Fase: Simulación",
                "Condición: Base obligatorio",
                "Unidad: Ejercicio",
                "Incluye: Tiempos, coordinación y evidencia",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "sec4-011",
              "code": "SEC4-011",
              "name": "Informe de brechas y plan de mejora",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Mejora",
              "unitLabel": "Proyecto",
              "baseHours": 2,
              "scope": "Hallazgos, acciones y responsables",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Mejora",
                "Condición: Base obligatorio",
                "Unidad: Proyecto",
                "Incluye: Hallazgos, acciones y responsables",
                "Estado de HH: Preliminar"
              ]
            }
          ],
          "totals": {
            "activityLines": 11,
            "activities": 11,
            "hours": {
              "fixed": 28.5
            }
          }
        }
      ]
    },
    {
      "id": "soporte-gestion",
      "name": "Soporte y Gestión",
      "description": "Mesa de ayuda, gestión ITSM, soporte evolutivo y documentación.",
      "order": 6,
      "summary": {
        "serviceCodes": 4,
        "activityLines": 44,
        "activities": 44
      },
      "services": [
        {
          "id": "ism-sup-01",
          "code": "SUP-01",
          "name": "Implementación de mesa de ayuda",
          "areaId": "soporte-gestion",
          "groupLabel": "Soporte y Gestión",
          "sourceSheet": "Catalogo Maestro",
          "unit": "service",
          "sizeMode": "not-applicable",
          "activities": [
            {
              "id": "sup1-001",
              "code": "SUP1-001",
              "name": "Definición del catálogo de atención",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Diseño",
              "unitLabel": "Servicio",
              "baseHours": 0.5,
              "scope": "Servicios, solicitudes y exclusiones",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.5
              },
              "notes": [
                "Fase: Diseño",
                "Condición: Base obligatorio",
                "Unidad: Servicio",
                "Incluye: Servicios, solicitudes y exclusiones",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Servicio)",
                "baseQuantity": 1,
                "defaultQuantity": 6,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sup1-002",
              "code": "SUP1-002",
              "name": "Definición de canales de ingreso",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Diseño",
              "unitLabel": "Canal",
              "baseHours": 0.75,
              "scope": "Formulario, correo o portal",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.75
              },
              "notes": [
                "Fase: Diseño",
                "Condición: Base obligatorio",
                "Unidad: Canal",
                "Incluye: Formulario, correo o portal",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Canal)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sup1-003",
              "code": "SUP1-003",
              "name": "Parametrización del flujo básico de tickets",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Proceso",
              "unitLabel": "Proyecto",
              "baseHours": 2.5,
              "scope": "Configuración operativa de estados, asignación y cierre sobre una definición básica.",
              "exclusions": "El diseño formal de procesos ITSM se cotiza en SUP-02.",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2.5
              },
              "notes": [
                "Fase: Proceso",
                "Condición: Base obligatorio",
                "Unidad: Proyecto",
                "Incluye: Configuración operativa de estados, asignación y cierre sobre una definición básica.",
                "Exclusiones: El diseño formal de procesos ITSM se cotiza en SUP-02.",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "sup1-004",
              "code": "SUP1-004",
              "name": "Parametrización de prioridades y severidades",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Proceso",
              "unitLabel": "Nivel",
              "baseHours": 0.5,
              "scope": "Configuración en la herramienta de niveles previamente acordados.",
              "exclusions": "La definición metodológica completa se cotiza en SUP-02.",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.5
              },
              "notes": [
                "Fase: Proceso",
                "Condición: Base obligatorio",
                "Unidad: Nivel",
                "Incluye: Configuración en la herramienta de niveles previamente acordados.",
                "Exclusiones: La definición metodológica completa se cotiza en SUP-02.",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Nivel)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sup1-005",
              "code": "SUP1-005",
              "name": "Parametrización de SLA definidos",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "SLA",
              "unitLabel": "Servicio",
              "baseHours": 0.5,
              "scope": "Configuración de tiempos de respuesta, resolución y cobertura en la herramienta.",
              "exclusions": "La definición y gobierno formal de SLA se cotizan en SUP-02.",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.5
              },
              "notes": [
                "Fase: SLA",
                "Condición: Base obligatorio",
                "Unidad: Servicio",
                "Incluye: Configuración de tiempos de respuesta, resolución y cobertura en la herramienta.",
                "Exclusiones: La definición y gobierno formal de SLA se cotizan en SUP-02.",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Servicio)",
                "baseQuantity": 1,
                "defaultQuantity": 6,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sup1-006",
              "code": "SUP1-006",
              "name": "Configuración de campos y formularios",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Configuración",
              "unitLabel": "Formulario",
              "baseHours": 1,
              "scope": "Campos, validaciones y clasificación",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1
              },
              "notes": [
                "Fase: Configuración",
                "Condición: Base incluido",
                "Unidad: Formulario",
                "Incluye: Campos, validaciones y clasificación",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Formulario)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sup1-007",
              "code": "SUP1-007",
              "name": "Configuración de estados y automatizaciones",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Configuración",
              "unitLabel": "Flujo",
              "baseHours": 1.5,
              "scope": "Asignación, notificación y escalamiento",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Configuración",
                "Condición: Base incluido",
                "Unidad: Flujo",
                "Incluye: Asignación, notificación y escalamiento",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Flujo)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sup1-008",
              "code": "SUP1-008",
              "name": "Configuración de usuarios y permisos",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Configuración",
              "unitLabel": "Rol",
              "baseHours": 0.75,
              "scope": "Agentes, administradores y solicitantes",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.75
              },
              "notes": [
                "Fase: Configuración",
                "Condición: Base incluido",
                "Unidad: Rol",
                "Incluye: Agentes, administradores y solicitantes",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Rol)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sup1-009",
              "code": "SUP1-009",
              "name": "Plantillas de comunicación",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Comunicación",
              "unitLabel": "Plantilla",
              "baseHours": 0.5,
              "scope": "Recepción, actualización y cierre",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.5
              },
              "notes": [
                "Fase: Comunicación",
                "Condición: Base incluido",
                "Unidad: Plantilla",
                "Incluye: Recepción, actualización y cierre",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Plantilla)",
                "baseQuantity": 1,
                "defaultQuantity": 5,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sup1-010",
              "code": "SUP1-010",
              "name": "Dashboard y reporte inicial de puesta en marcha",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Reportes",
              "unitLabel": "Reporte",
              "baseHours": 2,
              "scope": "Vista inicial de volumen, tiempos y estado para validar la operación.",
              "exclusions": "La reportería operacional avanzada se contabiliza en SUP2-010.",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Reportes",
                "Condición: Base incluido",
                "Unidad: Reporte",
                "Incluye: Vista inicial de volumen, tiempos y estado para validar la operación.",
                "Exclusiones: La reportería operacional avanzada se contabiliza en SUP2-010.",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "sup1-011",
              "code": "SUP1-011",
              "name": "Piloto con casos de atención",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Calidad",
              "unitLabel": "Caso",
              "baseHours": 0.5,
              "scope": "Creación, asignación, atención y cierre",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.5
              },
              "notes": [
                "Fase: Calidad",
                "Condición: Base obligatorio",
                "Unidad: Caso",
                "Incluye: Creación, asignación, atención y cierre",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Caso)",
                "baseQuantity": 1,
                "defaultQuantity": 6,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sup1-012",
              "code": "SUP1-012",
              "name": "Capacitación y documentación",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Entrega",
              "unitLabel": "Sesión",
              "baseHours": 2,
              "scope": "Uso, administración y soporte",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Entrega",
                "Condición: Base obligatorio",
                "Unidad: Sesión",
                "Incluye: Uso, administración y soporte",
                "Estado de HH: Preliminar"
              ]
            }
          ],
          "totals": {
            "activityLines": 12,
            "activities": 12,
            "hours": {
              "fixed": 29.75
            }
          }
        },
        {
          "id": "ism-sup-02",
          "code": "SUP-02",
          "name": "Gestión de incidentes, solicitudes y cambios",
          "areaId": "soporte-gestion",
          "groupLabel": "Soporte y Gestión",
          "sourceSheet": "Catalogo Maestro",
          "unit": "service",
          "sizeMode": "not-applicable",
          "activities": [
            {
              "id": "sup2-001",
              "code": "SUP2-001",
              "name": "Definición de alcance de procesos ITSM",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Gobierno",
              "unitLabel": "Proceso",
              "baseHours": 0.75,
              "scope": "Incidente, solicitud, problema y cambio",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.75
              },
              "notes": [
                "Fase: Gobierno",
                "Condición: Base obligatorio",
                "Unidad: Proceso",
                "Incluye: Incidente, solicitud, problema y cambio",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Proceso)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sup2-002",
              "code": "SUP2-002",
              "name": "Diseño formal del proceso de incidentes",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Proceso",
              "unitLabel": "Proceso",
              "baseHours": 2,
              "scope": "Registro, clasificación, escalamiento y cierre",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Proceso",
                "Condición: Base obligatorio",
                "Unidad: Proceso",
                "Incluye: Registro, clasificación, escalamiento y cierre",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "sup2-003",
              "code": "SUP2-003",
              "name": "Diseño formal del proceso de solicitudes",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Proceso",
              "unitLabel": "Proceso",
              "baseHours": 1.5,
              "scope": "Catálogo, aprobación y entrega",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Proceso",
                "Condición: Base obligatorio",
                "Unidad: Proceso",
                "Incluye: Catálogo, aprobación y entrega",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "sup2-004",
              "code": "SUP2-004",
              "name": "Diseño formal del proceso de cambios",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Proceso",
              "unitLabel": "Proceso",
              "baseHours": 2,
              "scope": "Riesgo, aprobación, reversa y validación",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Proceso",
                "Condición: Base obligatorio",
                "Unidad: Proceso",
                "Incluye: Riesgo, aprobación, reversa y validación",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "sup2-005",
              "code": "SUP2-005",
              "name": "Diseño formal del proceso de problemas",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Proceso",
              "unitLabel": "Proceso",
              "baseHours": 1.5,
              "scope": "Causa raíz y error conocido",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Proceso",
                "Condición: Opcional",
                "Unidad: Proceso",
                "Incluye: Causa raíz y error conocido",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "sup2-006",
              "code": "SUP2-006",
              "name": "Definición de roles y responsabilidades",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Roles",
              "unitLabel": "Rol",
              "baseHours": 0.5,
              "scope": "Responsables y escalamiento",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.5
              },
              "notes": [
                "Fase: Roles",
                "Condición: Base obligatorio",
                "Unidad: Rol",
                "Incluye: Responsables y escalamiento",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Rol)",
                "baseQuantity": 1,
                "defaultQuantity": 5,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sup2-007",
              "code": "SUP2-007",
              "name": "Configuración de herramienta o tablero",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Herramienta",
              "unitLabel": "Proceso",
              "baseHours": 1.5,
              "scope": "Campos, vistas, estados y permisos",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Herramienta",
                "Condición: Base incluido",
                "Unidad: Proceso",
                "Incluye: Campos, vistas, estados y permisos",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Proceso)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sup2-008",
              "code": "SUP2-008",
              "name": "Automatización de asignación y escalamiento",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Automatización",
              "unitLabel": "Regla",
              "baseHours": 0.75,
              "scope": "Condiciones, responsables y avisos",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.75
              },
              "notes": [
                "Fase: Automatización",
                "Condición: Opcional",
                "Unidad: Regla",
                "Incluye: Condiciones, responsables y avisos",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Regla)",
                "baseQuantity": 1,
                "defaultQuantity": 5,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sup2-009",
              "code": "SUP2-009",
              "name": "Definición de indicadores de gestión",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Indicadores",
              "unitLabel": "Indicador",
              "baseHours": 0.5,
              "scope": "Volumen, cumplimiento y tendencia",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.5
              },
              "notes": [
                "Fase: Indicadores",
                "Condición: Base obligatorio",
                "Unidad: Indicador",
                "Incluye: Volumen, cumplimiento y tendencia",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Indicador)",
                "baseQuantity": 1,
                "defaultQuantity": 6,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sup2-010",
              "code": "SUP2-010",
              "name": "Configuración de reportes operacionales avanzados",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Reportes",
              "unitLabel": "Reporte",
              "baseHours": 1.5,
              "scope": "Reportes periódicos por estado, SLA, carga, tendencia y cumplimiento.",
              "exclusions": "No vuelve a incluir el reporte inicial de puesta en marcha de SUP1-010.",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Reportes",
                "Condición: Base incluido",
                "Unidad: Reporte",
                "Incluye: Reportes periódicos por estado, SLA, carga, tendencia y cumplimiento.",
                "Exclusiones: No vuelve a incluir el reporte inicial de puesta en marcha de SUP1-010.",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Reporte)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sup2-011",
              "code": "SUP2-011",
              "name": "Piloto con casos reales",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Piloto",
              "unitLabel": "Caso",
              "baseHours": 0.5,
              "scope": "Casos y retroalimentación",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.5
              },
              "notes": [
                "Fase: Piloto",
                "Condición: Base obligatorio",
                "Unidad: Caso",
                "Incluye: Casos y retroalimentación",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Caso)",
                "baseQuantity": 1,
                "defaultQuantity": 8,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sup2-012",
              "code": "SUP2-012",
              "name": "Ajustes y documentación final",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Cierre",
              "unitLabel": "Proyecto",
              "baseHours": 2,
              "scope": "Procedimientos y mejoras",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Cierre",
                "Condición: Base obligatorio",
                "Unidad: Proyecto",
                "Incluye: Procedimientos y mejoras",
                "Estado de HH: Preliminar"
              ]
            }
          ],
          "totals": {
            "activityLines": 12,
            "activities": 12,
            "hours": {
              "fixed": 29
            }
          }
        },
        {
          "id": "ism-sup-03",
          "code": "SUP-03",
          "name": "Bolsa mensual de soporte evolutivo",
          "areaId": "soporte-gestion",
          "groupLabel": "Soporte y Gestión",
          "sourceSheet": "Catalogo Maestro",
          "unit": "service",
          "sizeMode": "not-applicable",
          "activities": [
            {
              "id": "sup3-001",
              "code": "SUP3-001",
              "name": "Reunión de priorización y planificación",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Gestión",
              "unitLabel": "Sesión",
              "baseHours": 0.5,
              "scope": "Prioridades, responsables y consumo",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.5
              },
              "notes": [
                "Fase: Gestión",
                "Condición: Base obligatorio",
                "Unidad: Sesión",
                "Incluye: Prioridades, responsables y consumo",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Sesión)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sup3-002",
              "code": "SUP3-002",
              "name": "Triage de solicitudes e incidentes",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Gestión",
              "unitLabel": "Ticket",
              "baseHours": 0.25,
              "scope": "Impacto, urgencia y estimación",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.25
              },
              "notes": [
                "Fase: Gestión",
                "Condición: Base obligatorio",
                "Unidad: Ticket",
                "Incluye: Impacto, urgencia y estimación",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Ticket)",
                "baseQuantity": 1,
                "defaultQuantity": 8,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sup3-003",
              "code": "SUP3-003",
              "name": "Atención de incidente menor",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Soporte",
              "unitLabel": "Ticket",
              "baseHours": 1.5,
              "scope": "Diagnóstico, corrección y cierre",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Soporte",
                "Condición: Base incluido",
                "Unidad: Ticket",
                "Incluye: Diagnóstico, corrección y cierre",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Ticket)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sup3-004",
              "code": "SUP3-004",
              "name": "Atención de solicitud operativa",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Soporte",
              "unitLabel": "Ticket",
              "baseHours": 1,
              "scope": "Configuración o apoyo funcional",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1
              },
              "notes": [
                "Fase: Soporte",
                "Condición: Base incluido",
                "Unidad: Ticket",
                "Incluye: Configuración o apoyo funcional",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Ticket)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sup3-005",
              "code": "SUP3-005",
              "name": "Cambio menor de aplicación",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Evolución",
              "unitLabel": "Cambio",
              "baseHours": 2,
              "scope": "Ajuste acotado con pruebas",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Evolución",
                "Condición: Base incluido",
                "Unidad: Cambio",
                "Incluye: Ajuste acotado con pruebas",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Cambio)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sup3-006",
              "code": "SUP3-006",
              "name": "Revisión preventiva de logs y alertas",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Prevención",
              "unitLabel": "Sesión",
              "baseHours": 0.5,
              "scope": "Eventos y riesgos recurrentes",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.5
              },
              "notes": [
                "Fase: Prevención",
                "Condición: Opcional",
                "Unidad: Sesión",
                "Incluye: Eventos y riesgos recurrentes",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Sesión)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sup3-007",
              "code": "SUP3-007",
              "name": "Actualización de documentación",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Documentación",
              "unitLabel": "Documento",
              "baseHours": 1,
              "scope": "Cambios y soluciones recurrentes",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1
              },
              "notes": [
                "Fase: Documentación",
                "Condición: Base incluido",
                "Unidad: Documento",
                "Incluye: Cambios y soluciones recurrentes",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "sup3-008",
              "code": "SUP3-008",
              "name": "Reporte mensual de servicio",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Reporte",
              "unitLabel": "Reporte",
              "baseHours": 1.5,
              "scope": "Consumo, cumplimiento y recomendaciones",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Reporte",
                "Condición: Base obligatorio",
                "Unidad: Reporte",
                "Incluye: Consumo, cumplimiento y recomendaciones",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "sup3-009",
              "code": "SUP3-009",
              "name": "Gestión de pendientes y terceros",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Coordinación",
              "unitLabel": "Hora",
              "baseHours": 1,
              "scope": "Dependencias, accesos y coordinaciones",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1
              },
              "notes": [
                "Fase: Coordinación",
                "Condición: Base incluido",
                "Unidad: Hora",
                "Incluye: Dependencias, accesos y coordinaciones",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Hora)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 1,
                "editable": true
              }
            }
          ],
          "totals": {
            "activityLines": 9,
            "activities": 9,
            "hours": {
              "fixed": 22.5
            }
          }
        },
        {
          "id": "ism-sup-04",
          "code": "SUP-04",
          "name": "Documentación y base de conocimiento",
          "areaId": "soporte-gestion",
          "groupLabel": "Soporte y Gestión",
          "sourceSheet": "Catalogo Maestro",
          "unit": "service",
          "sizeMode": "not-applicable",
          "activities": [
            {
              "id": "sup4-001",
              "code": "SUP4-001",
              "name": "Inventario de procesos y documentos existentes",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Inventario",
              "unitLabel": "Fuente",
              "baseHours": 0.5,
              "scope": "Documentos, responsables y vigencia",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.5
              },
              "notes": [
                "Fase: Inventario",
                "Condición: Base obligatorio",
                "Unidad: Fuente",
                "Incluye: Documentos, responsables y vigencia",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Fuente)",
                "baseQuantity": 1,
                "defaultQuantity": 6,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sup4-002",
              "code": "SUP4-002",
              "name": "Diseño de estructura documental",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Diseño",
              "unitLabel": "Proyecto",
              "baseHours": 1.5,
              "scope": "Categorías, nomenclatura y acceso",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Diseño",
                "Condición: Base obligatorio",
                "Unidad: Proyecto",
                "Incluye: Categorías, nomenclatura y acceso",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "sup4-003",
              "code": "SUP4-003",
              "name": "Definición de control de versiones y aprobación",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Gobierno",
              "unitLabel": "Proyecto",
              "baseHours": 1.5,
              "scope": "Estados, responsables y publicación",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Gobierno",
                "Condición: Base obligatorio",
                "Unidad: Proyecto",
                "Incluye: Estados, responsables y publicación",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "sup4-004",
              "code": "SUP4-004",
              "name": "Creación de manual de usuario",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Documentación",
              "unitLabel": "Documento",
              "baseHours": 4,
              "scope": "Flujos, pantallas y preguntas frecuentes",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 4
              },
              "notes": [
                "Fase: Documentación",
                "Condición: Base incluido",
                "Unidad: Documento",
                "Incluye: Flujos, pantallas y preguntas frecuentes",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "sup4-005",
              "code": "SUP4-005",
              "name": "Creación de manual técnico",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Documentación",
              "unitLabel": "Documento",
              "baseHours": 4,
              "scope": "Arquitectura, instalación y operación",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 4
              },
              "notes": [
                "Fase: Documentación",
                "Condición: Opcional",
                "Unidad: Documento",
                "Incluye: Arquitectura, instalación y operación",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "sup4-006",
              "code": "SUP4-006",
              "name": "Creación de procedimiento operativo",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Documentación",
              "unitLabel": "Documento",
              "baseHours": 2,
              "scope": "Objetivo, pasos, responsables y evidencia",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Documentación",
                "Condición: Base incluido",
                "Unidad: Documento",
                "Incluye: Objetivo, pasos, responsables y evidencia",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Documento)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sup4-007",
              "code": "SUP4-007",
              "name": "Creación de runbook",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Documentación",
              "unitLabel": "Documento",
              "baseHours": 2.5,
              "scope": "Eventos frecuentes, diagnóstico y escalamiento",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2.5
              },
              "notes": [
                "Fase: Documentación",
                "Condición: Base incluido",
                "Unidad: Documento",
                "Incluye: Eventos frecuentes, diagnóstico y escalamiento",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Documento)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sup4-008",
              "code": "SUP4-008",
              "name": "Creación de artículo de conocimiento",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Contenido",
              "unitLabel": "Artículo",
              "baseHours": 0.75,
              "scope": "Problema, solución y palabras clave",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.75
              },
              "notes": [
                "Fase: Contenido",
                "Condición: Base incluido",
                "Unidad: Artículo",
                "Incluye: Problema, solución y palabras clave",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Artículo)",
                "baseQuantity": 1,
                "defaultQuantity": 5,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sup4-009",
              "code": "SUP4-009",
              "name": "Configuración de repositorio o portal",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Publicación",
              "unitLabel": "Entorno",
              "baseHours": 2,
              "scope": "Estructura, permisos y búsqueda",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 2
              },
              "notes": [
                "Fase: Publicación",
                "Condición: Opcional",
                "Unidad: Entorno",
                "Incluye: Estructura, permisos y búsqueda",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "sup4-010",
              "code": "SUP4-010",
              "name": "Revisión técnica y funcional",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Calidad",
              "unitLabel": "Documento",
              "baseHours": 0.5,
              "scope": "Exactitud, claridad y vigencia",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 0.5
              },
              "notes": [
                "Fase: Calidad",
                "Condición: Base obligatorio",
                "Unidad: Documento",
                "Incluye: Exactitud, claridad y vigencia",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Documento)",
                "baseQuantity": 1,
                "defaultQuantity": 5,
                "minimum": 1,
                "editable": true
              }
            },
            {
              "id": "sup4-011",
              "code": "SUP4-011",
              "name": "Capacitación y transferencia",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Entrega",
              "unitLabel": "Sesión",
              "baseHours": 1.5,
              "scope": "Uso, mantenimiento y responsabilidades",
              "validationStatus": "Preliminar",
              "hours": {
                "fixed": 1.5
              },
              "notes": [
                "Fase: Entrega",
                "Condición: Base obligatorio",
                "Unidad: Sesión",
                "Incluye: Uso, mantenimiento y responsabilidades",
                "Estado de HH: Preliminar"
              ]
            }
          ],
          "totals": {
            "activityLines": 11,
            "activities": 11,
            "hours": {
              "fixed": 28.75
            }
          }
        }
      ]
    }
  ],
  "summary": {
    "serviceCodes": 21,
    "activityLines": 255,
    "activities": 255
  },
  "sizeDefinitions": {
    "small": "Base única del catálogo v2.3.",
    "medium": "Base única del catálogo v2.3.",
    "high": "Base única del catálogo v2.3."
  },
  "notes": [
    "Catálogo técnico ISM Developer versión 2.3.",
    "Cada actividad posee una sola HH base. No existen factores por actividad ni escenarios Inicial/Estándar/Avanzado.",
    "Tarifa maestra: 0.70 UF/HH.",
    "La reutilización o esfuerzo extraordinario se aplica como un único factor global al total del proyecto.",
    "La contingencia final del catálogo es 20% y se aplica una sola vez al final.",
    "Las actividades obligatorias no pueden excluirse cuando el servicio está seleccionado.",
    "Las actividades opcionales comienzan desactivadas."
  ]
};
