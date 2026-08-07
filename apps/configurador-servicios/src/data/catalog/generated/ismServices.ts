// ==================================================
// IMPORTACIONES
// ==================================================

import type { PlatformCatalog } from "../../../types/catalog";

// ==================================================
// CATÁLOGO GENERADO
// ==================================================

/**
 * Archivo generado desde Catalogo_Tecnico_Servicios_ISM_Developer_v2_1_Auditado.xlsx.
 * No editar manualmente. Modifica el Excel fuente y ejecuta npm run catalog:ism.
 */
export const ismServicesCatalog: PlatformCatalog = {
  "id": "ism-servicios",
  "name": "Servicios ISM Developer",
  "shortName": "ISM Developer",
  "description": "Configurador técnico consolidado de servicios digitales, continuidad, seguridad y soporte.",
  "contingencyRate": 0.2,
  "catalogVersion": "2.1",
  "areas": [
    {
      "id": "desarrollo-implementacion",
      "name": "Desarrollo e Implementación",
      "description": "Sitios web, sistemas de gestión, integraciones y automatización de procesos.",
      "order": 1,
      "summary": {
        "serviceCodes": 3,
        "activityLines": 78,
        "activities": 78
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
          "sizeMode": "by-size",
          "maturity": "01 · Primeros pasos digitales",
          "activities": [
            {
              "id": "web-001",
              "code": "WEB-001",
              "name": "Reunión inicial y levantamiento de objetivos",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Diagnóstico",
              "unitLabel": "Proyecto",
              "maturity": "01 · Primeros pasos digitales",
              "complexity": "Media",
              "baseHours": 1.5,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Brief de proyecto",
              "scope": "Objetivos, público, oferta y resultados esperados",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.5,
                "medium": 1.9500000000000002,
                "high": 2.325
              },
              "notes": [
                "Fase: Diagnóstico",
                "Unidad: Proyecto",
                "Complejidad: Media",
                "Entregable: Brief de proyecto",
                "Alcance: Objetivos, público, oferta y resultados esperados",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-002",
              "code": "WEB-002",
              "name": "Inventario de contenidos y recursos disponibles",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Diagnóstico",
              "unitLabel": "Proyecto",
              "maturity": "01 · Primeros pasos digitales",
              "complexity": "Baja",
              "baseHours": 1,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Inventario de contenidos",
              "scope": "Textos, imágenes, documentos, accesos y recursos de marca",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1,
                "medium": 1.15,
                "high": 1.3
              },
              "notes": [
                "Fase: Diagnóstico",
                "Unidad: Proyecto",
                "Complejidad: Baja",
                "Entregable: Inventario de contenidos",
                "Alcance: Textos, imágenes, documentos, accesos y recursos de marca",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-003",
              "code": "WEB-003",
              "name": "Definición del mapa de navegación",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Arquitectura",
              "unitLabel": "Proyecto",
              "maturity": "01 · Primeros pasos digitales",
              "complexity": "Media",
              "baseHours": 1,
              "reuseType": "Parcial",
              "reuseFactor": 0.8,
              "deliverable": "Sitemap aprobado",
              "scope": "Estructura de páginas, jerarquía y rutas",
              "exclusions": "No incluye redacción completa",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.8,
                "medium": 1.04,
                "high": 1.2400000000000002
              },
              "notes": [
                "Fase: Arquitectura",
                "Unidad: Proyecto",
                "Complejidad: Media",
                "Entregable: Sitemap aprobado",
                "Alcance: Estructura de páginas, jerarquía y rutas",
                "Exclusiones: No incluye redacción completa",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-004",
              "code": "WEB-004",
              "name": "Wireframe general de la página principal",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Arquitectura",
              "unitLabel": "Proyecto",
              "maturity": "01 · Primeros pasos digitales",
              "complexity": "Media",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.8,
              "deliverable": "Wireframe",
              "scope": "Orden de bloques, jerarquía y llamadas a la acción",
              "exclusions": "No incluye prototipo de alta fidelidad",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.2000000000000002,
                "medium": 1.5600000000000003,
                "high": 1.8600000000000003
              },
              "notes": [
                "Fase: Arquitectura",
                "Unidad: Proyecto",
                "Complejidad: Media",
                "Entregable: Wireframe",
                "Alcance: Orden de bloques, jerarquía y llamadas a la acción",
                "Exclusiones: No incluye prototipo de alta fidelidad",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-005",
              "code": "WEB-005",
              "name": "Creación del proyecto, repositorio y estructura base",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Preparación",
              "unitLabel": "Proyecto",
              "maturity": "01 · Primeros pasos digitales",
              "complexity": "Baja",
              "baseHours": 1,
              "reuseType": "Alta",
              "reuseFactor": 0.55,
              "deliverable": "Repositorio inicial",
              "scope": "Estructura técnica, control de versiones y configuración",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.55,
                "medium": 0.6325,
                "high": 0.7150000000000001
              },
              "notes": [
                "Fase: Preparación",
                "Unidad: Proyecto",
                "Complejidad: Baja",
                "Entregable: Repositorio inicial",
                "Alcance: Estructura técnica, control de versiones y configuración",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Proyecto)",
                "baseQuantity": 1,
                "defaultQuantity": 0.5,
                "minimum": 0,
                "editable": true
              }
            },
            {
              "id": "web-006",
              "code": "WEB-006",
              "name": "Configuración de estilos, tipografías y tokens de marca",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Preparación",
              "unitLabel": "Proyecto",
              "maturity": "01 · Primeros pasos digitales",
              "complexity": "Media",
              "baseHours": 1.5,
              "reuseType": "Alta",
              "reuseFactor": 0.6,
              "deliverable": "Sistema visual base",
              "scope": "Colores, tipografías, botones, espaciados y componentes",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.8999999999999999,
                "medium": 1.17,
                "high": 1.3949999999999998
              },
              "notes": [
                "Fase: Preparación",
                "Unidad: Proyecto",
                "Complejidad: Media",
                "Entregable: Sistema visual base",
                "Alcance: Colores, tipografías, botones, espaciados y componentes",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-007",
              "code": "WEB-007",
              "name": "Desarrollo de navbar y menú móvil",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Interfaz",
              "unitLabel": "Componente",
              "maturity": "01 · Primeros pasos digitales",
              "complexity": "Media",
              "baseHours": 1.5,
              "reuseType": "Alta",
              "reuseFactor": 0.55,
              "deliverable": "Navbar funcional",
              "scope": "Navegación de escritorio, enlaces, estados y comportamiento del menú móvil.",
              "exclusions": "El ajuste responsive transversal del resto del sitio se contabiliza en WEB-022.",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.8250000000000001,
                "medium": 1.0725000000000002,
                "high": 1.27875
              },
              "notes": [
                "Fase: Interfaz",
                "Unidad: Componente",
                "Complejidad: Media",
                "Entregable: Navbar funcional",
                "Alcance: Navegación de escritorio, enlaces, estados y comportamiento del menú móvil.",
                "Exclusiones: El ajuste responsive transversal del resto del sitio se contabiliza en WEB-022.",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-008",
              "code": "WEB-008",
              "name": "Diseño y desarrollo del hero principal",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Interfaz",
              "unitLabel": "Componente",
              "maturity": "01 · Primeros pasos digitales",
              "complexity": "Alta",
              "baseHours": 2,
              "reuseType": "Parcial",
              "reuseFactor": 0.75,
              "deliverable": "Hero implementado",
              "scope": "Titular, texto, llamada a la acción, imagen y composición visual del bloque principal.",
              "exclusions": "La adaptación responsive transversal se contabiliza en WEB-022. No incluye sesión fotográfica.",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.5,
                "medium": 2.175,
                "high": 2.7
              },
              "notes": [
                "Fase: Interfaz",
                "Unidad: Componente",
                "Complejidad: Alta",
                "Entregable: Hero implementado",
                "Alcance: Titular, texto, llamada a la acción, imagen y composición visual del bloque principal.",
                "Exclusiones: La adaptación responsive transversal se contabiliza en WEB-022. No incluye sesión fotográfica.",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-009",
              "code": "WEB-009",
              "name": "Desarrollo de sección estándar de contenido",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Interfaz",
              "unitLabel": "Sección",
              "maturity": "01 · Primeros pasos digitales",
              "complexity": "Media",
              "baseHours": 1.25,
              "reuseType": "Alta",
              "reuseFactor": 0.6,
              "deliverable": "Secciones implementadas",
              "scope": "Bloque de contenido con título, texto, imagen o tarjetas",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.75,
                "medium": 0.9750000000000001,
                "high": 1.1625
              },
              "notes": [
                "Fase: Interfaz",
                "Unidad: Sección",
                "Complejidad: Media",
                "Entregable: Secciones implementadas",
                "Alcance: Bloque de contenido con título, texto, imagen o tarjetas",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-010",
              "code": "WEB-010",
              "name": "Desarrollo de sección de servicios con tarjetas",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Interfaz",
              "unitLabel": "Sección",
              "maturity": "01 · Primeros pasos digitales",
              "complexity": "Media",
              "baseHours": 2,
              "reuseType": "Parcial",
              "reuseFactor": 0.7,
              "deliverable": "Sección de servicios",
              "scope": "Tarjetas, íconos, descripciones y CTA",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.4,
                "medium": 1.8199999999999998,
                "high": 2.17
              },
              "notes": [
                "Fase: Interfaz",
                "Unidad: Sección",
                "Complejidad: Media",
                "Entregable: Sección de servicios",
                "Alcance: Tarjetas, íconos, descripciones y CTA",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-011",
              "code": "WEB-011",
              "name": "Desarrollo de galería o portafolio",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Interfaz",
              "unitLabel": "Sección",
              "maturity": "01 · Primeros pasos digitales",
              "complexity": "Alta",
              "baseHours": 2.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.8,
              "deliverable": "Galería funcional",
              "scope": "Listado visual, modal o enlace a proyectos",
              "exclusions": "Carga masiva de contenido",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2,
                "medium": 2.9,
                "high": 3.6
              },
              "notes": [
                "Fase: Interfaz",
                "Unidad: Sección",
                "Complejidad: Alta",
                "Entregable: Galería funcional",
                "Alcance: Listado visual, modal o enlace a proyectos",
                "Exclusiones: Carga masiva de contenido",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-012",
              "code": "WEB-012",
              "name": "Desarrollo de testimonios o casos de éxito",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Interfaz",
              "unitLabel": "Sección",
              "maturity": "01 · Primeros pasos digitales",
              "complexity": "Media",
              "baseHours": 1.25,
              "reuseType": "Alta",
              "reuseFactor": 0.6,
              "deliverable": "Sección de testimonios",
              "scope": "Tarjetas, datos, jerarquía visual y comportamiento del componente.",
              "exclusions": "La adaptación responsive transversal se contabiliza en WEB-022.",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.75,
                "medium": 0.9750000000000001,
                "high": 1.1625
              },
              "notes": [
                "Fase: Interfaz",
                "Unidad: Sección",
                "Complejidad: Media",
                "Entregable: Sección de testimonios",
                "Alcance: Tarjetas, datos, jerarquía visual y comportamiento del componente.",
                "Exclusiones: La adaptación responsive transversal se contabiliza en WEB-022.",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-013",
              "code": "WEB-013",
              "name": "Desarrollo de preguntas frecuentes",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Interfaz",
              "unitLabel": "Sección",
              "maturity": "01 · Primeros pasos digitales",
              "complexity": "Baja",
              "baseHours": 1.25,
              "reuseType": "Alta",
              "reuseFactor": 0.6,
              "deliverable": "FAQ interactiva",
              "scope": "Acordeones y contenido entregado por cliente",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.75,
                "medium": 0.8624999999999999,
                "high": 0.9750000000000001
              },
              "notes": [
                "Fase: Interfaz",
                "Unidad: Sección",
                "Complejidad: Baja",
                "Entregable: FAQ interactiva",
                "Alcance: Acordeones y contenido entregado por cliente",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-014",
              "code": "WEB-014",
              "name": "Desarrollo de formulario de contacto",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Interfaz",
              "unitLabel": "Formulario",
              "maturity": "01 · Primeros pasos digitales",
              "complexity": "Alta",
              "baseHours": 2.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.75,
              "deliverable": "Formulario validado",
              "scope": "Campos, validaciones, estados y confirmación",
              "exclusions": "Integraciones CRM avanzadas",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.875,
                "medium": 2.71875,
                "high": 3.375
              },
              "notes": [
                "Fase: Interfaz",
                "Unidad: Formulario",
                "Complejidad: Alta",
                "Entregable: Formulario validado",
                "Alcance: Campos, validaciones, estados y confirmación",
                "Exclusiones: Integraciones CRM avanzadas",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-015",
              "code": "WEB-015",
              "name": "Desarrollo de footer",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Interfaz",
              "unitLabel": "Componente",
              "maturity": "01 · Primeros pasos digitales",
              "complexity": "Baja",
              "baseHours": 0.75,
              "reuseType": "Alta",
              "reuseFactor": 0.55,
              "deliverable": "Footer funcional",
              "scope": "Datos de contacto, enlaces, redes y estructura del pie de página.",
              "exclusions": "La adaptación responsive transversal se contabiliza en WEB-022.",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.41250000000000003,
                "medium": 0.474375,
                "high": 0.5362500000000001
              },
              "notes": [
                "Fase: Interfaz",
                "Unidad: Componente",
                "Complejidad: Baja",
                "Entregable: Footer funcional",
                "Alcance: Datos de contacto, enlaces, redes y estructura del pie de página.",
                "Exclusiones: La adaptación responsive transversal se contabiliza en WEB-022.",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-016",
              "code": "WEB-016",
              "name": "Desarrollo de página interna estándar",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Página interna",
              "unitLabel": "Página",
              "maturity": "01 · Primeros pasos digitales",
              "complexity": "Media",
              "baseHours": 2.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.75,
              "deliverable": "Página interna",
              "scope": "Plantilla, contenido, responsive y navegación",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.875,
                "medium": 2.4375,
                "high": 2.90625
              },
              "notes": [
                "Fase: Página interna",
                "Unidad: Página",
                "Complejidad: Media",
                "Entregable: Página interna",
                "Alcance: Plantilla, contenido, responsive y navegación",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-017",
              "code": "WEB-017",
              "name": "Integración de WhatsApp",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Integración",
              "unitLabel": "Integración",
              "maturity": "01 · Primeros pasos digitales",
              "complexity": "Baja",
              "baseHours": 0.5,
              "reuseType": "Alta",
              "reuseFactor": 0.5,
              "deliverable": "Enlace WhatsApp",
              "scope": "Botón, mensaje inicial y enlace validado",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.25,
                "medium": 0.2875,
                "high": 0.325
              },
              "notes": [
                "Fase: Integración",
                "Unidad: Integración",
                "Complejidad: Baja",
                "Entregable: Enlace WhatsApp",
                "Alcance: Botón, mensaje inicial y enlace validado",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-018",
              "code": "WEB-018",
              "name": "Integración de redes sociales",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Integración",
              "unitLabel": "Integración",
              "maturity": "01 · Primeros pasos digitales",
              "complexity": "Baja",
              "baseHours": 0.5,
              "reuseType": "Alta",
              "reuseFactor": 0.5,
              "deliverable": "Enlaces sociales",
              "scope": "Enlaces y comportamiento externo",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.25,
                "medium": 0.2875,
                "high": 0.325
              },
              "notes": [
                "Fase: Integración",
                "Unidad: Integración",
                "Complejidad: Baja",
                "Entregable: Enlaces sociales",
                "Alcance: Enlaces y comportamiento externo",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-019",
              "code": "WEB-019",
              "name": "Integración de Google Maps",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Integración",
              "unitLabel": "Integración",
              "maturity": "01 · Primeros pasos digitales",
              "complexity": "Baja",
              "baseHours": 0.5,
              "reuseType": "Alta",
              "reuseFactor": 0.55,
              "deliverable": "Mapa integrado",
              "scope": "Ubicación, marcador, enlace y accesibilidad básica del mapa.",
              "exclusions": "La adaptación responsive transversal se contabiliza en WEB-022.",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.275,
                "medium": 0.31625,
                "high": 0.35750000000000004
              },
              "notes": [
                "Fase: Integración",
                "Unidad: Integración",
                "Complejidad: Baja",
                "Entregable: Mapa integrado",
                "Alcance: Ubicación, marcador, enlace y accesibilidad básica del mapa.",
                "Exclusiones: La adaptación responsive transversal se contabiliza en WEB-022.",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-020",
              "code": "WEB-020",
              "name": "Configuración de envío de formulario por correo",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Integración",
              "unitLabel": "Integración",
              "maturity": "01 · Primeros pasos digitales",
              "complexity": "Alta",
              "baseHours": 2,
              "reuseType": "Parcial",
              "reuseFactor": 0.8,
              "deliverable": "Correo transaccional",
              "scope": "Recepción, validación y prueba de entrega",
              "exclusions": "Costos de proveedor externo",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.6,
                "medium": 2.32,
                "high": 2.8800000000000003
              },
              "notes": [
                "Fase: Integración",
                "Unidad: Integración",
                "Complejidad: Alta",
                "Entregable: Correo transaccional",
                "Alcance: Recepción, validación y prueba de entrega",
                "Exclusiones: Costos de proveedor externo",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-021",
              "code": "WEB-021",
              "name": "Carga y formato de contenidos entregados",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Contenido",
              "unitLabel": "Página",
              "maturity": "01 · Primeros pasos digitales",
              "complexity": "Media",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.75,
              "deliverable": "Contenido publicado",
              "scope": "Carga inicial, jerarquía y formato",
              "exclusions": "Redacción profesional y traducción",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.125,
                "medium": 1.4625000000000001,
                "high": 1.7437500000000001
              },
              "notes": [
                "Fase: Contenido",
                "Unidad: Página",
                "Complejidad: Media",
                "Entregable: Contenido publicado",
                "Alcance: Carga inicial, jerarquía y formato",
                "Exclusiones: Redacción profesional y traducción",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-022",
              "code": "WEB-022",
              "name": "Implementación responsive integral",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Responsive",
              "unitLabel": "Proyecto",
              "maturity": "01 · Primeros pasos digitales",
              "complexity": "Alta",
              "baseHours": 3,
              "reuseType": "Parcial",
              "reuseFactor": 0.8,
              "deliverable": "Sitio responsive",
              "scope": "Única actividad de construcción responsive transversal para móvil, tablet y escritorio.",
              "exclusions": "No incluye las pruebas de compatibilidad, que se contabilizan en WEB-031.",
              "dependencies": [
                "WEB-007",
                "WEB-008",
                "WEB-009",
                "WEB-010",
                "WEB-014",
                "WEB-015 y actividades visuales seleccionadas"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2.4000000000000004,
                "medium": 3.4800000000000004,
                "high": 4.320000000000001
              },
              "notes": [
                "Fase: Responsive",
                "Unidad: Proyecto",
                "Complejidad: Alta",
                "Entregable: Sitio responsive",
                "Alcance: Única actividad de construcción responsive transversal para móvil, tablet y escritorio.",
                "Exclusiones: No incluye las pruebas de compatibilidad, que se contabilizan en WEB-031.",
                "Dependencias: WEB-007, WEB-008, WEB-009, WEB-010, WEB-014, WEB-015 y actividades visuales seleccionadas",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Proyecto)",
                "baseQuantity": 1,
                "defaultQuantity": 1.5,
                "minimum": 0,
                "editable": true
              }
            },
            {
              "id": "web-023",
              "code": "WEB-023",
              "name": "SEO técnico inicial y metadatos",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "SEO",
              "unitLabel": "Proyecto",
              "maturity": "01 · Primeros pasos digitales",
              "complexity": "Media",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.75,
              "deliverable": "Metadatos configurados",
              "scope": "Titles, descriptions, canonical y etiquetas sociales",
              "exclusions": "Estrategia SEO mensual",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.125,
                "medium": 1.4625000000000001,
                "high": 1.7437500000000001
              },
              "notes": [
                "Fase: SEO",
                "Unidad: Proyecto",
                "Complejidad: Media",
                "Entregable: Metadatos configurados",
                "Alcance: Titles, descriptions, canonical y etiquetas sociales",
                "Exclusiones: Estrategia SEO mensual",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-024",
              "code": "WEB-024",
              "name": "Sitemap, robots y estructura indexable",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "SEO",
              "unitLabel": "Proyecto",
              "maturity": "01 · Primeros pasos digitales",
              "complexity": "Baja",
              "baseHours": 0.75,
              "reuseType": "Alta",
              "reuseFactor": 0.55,
              "deliverable": "Archivos SEO",
              "scope": "Sitemap, robots y revisión de indexabilidad",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.41250000000000003,
                "medium": 0.474375,
                "high": 0.5362500000000001
              },
              "notes": [
                "Fase: SEO",
                "Unidad: Proyecto",
                "Complejidad: Baja",
                "Entregable: Archivos SEO",
                "Alcance: Sitemap, robots y revisión de indexabilidad",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Proyecto)",
                "baseQuantity": 1,
                "defaultQuantity": 0.5,
                "minimum": 0,
                "editable": true
              }
            },
            {
              "id": "web-025",
              "code": "WEB-025",
              "name": "Datos estructurados básicos",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "SEO",
              "unitLabel": "Proyecto",
              "maturity": "01 · Primeros pasos digitales",
              "complexity": "Media",
              "baseHours": 1,
              "reuseType": "Parcial",
              "reuseFactor": 0.75,
              "deliverable": "Schema básico",
              "scope": "Organization, LocalBusiness o Service según alcance",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.75,
                "medium": 0.9750000000000001,
                "high": 1.1625
              },
              "notes": [
                "Fase: SEO",
                "Unidad: Proyecto",
                "Complejidad: Media",
                "Entregable: Schema básico",
                "Alcance: Organization, LocalBusiness o Service según alcance",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-026",
              "code": "WEB-026",
              "name": "Optimización de imágenes y recursos",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Rendimiento",
              "unitLabel": "Proyecto",
              "maturity": "01 · Primeros pasos digitales",
              "complexity": "Media",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.7,
              "deliverable": "Recursos optimizados",
              "scope": "Compresión, formatos, lazy loading y revisión de peso",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.0499999999999998,
                "medium": 1.3649999999999998,
                "high": 1.6274999999999997
              },
              "notes": [
                "Fase: Rendimiento",
                "Unidad: Proyecto",
                "Complejidad: Media",
                "Entregable: Recursos optimizados",
                "Alcance: Compresión, formatos, lazy loading y revisión de peso",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-027",
              "code": "WEB-027",
              "name": "Revisión de accesibilidad básica",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Accesibilidad",
              "unitLabel": "Proyecto",
              "maturity": "01 · Primeros pasos digitales",
              "complexity": "Media",
              "baseHours": 1.25,
              "reuseType": "Parcial",
              "reuseFactor": 0.75,
              "deliverable": "Checklist de accesibilidad",
              "scope": "Semántica, contraste, foco, etiquetas y navegación",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.9375,
                "medium": 1.21875,
                "high": 1.453125
              },
              "notes": [
                "Fase: Accesibilidad",
                "Unidad: Proyecto",
                "Complejidad: Media",
                "Entregable: Checklist de accesibilidad",
                "Alcance: Semántica, contraste, foco, etiquetas y navegación",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-028",
              "code": "WEB-028",
              "name": "Configuración de dominio, HTTPS y SSL",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Seguridad",
              "unitLabel": "Entorno",
              "maturity": "01 · Primeros pasos digitales",
              "complexity": "Media",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.75,
              "deliverable": "Dominio operativo",
              "scope": "DNS, certificado y redirecciones",
              "exclusions": "Compra o renovación del dominio",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.125,
                "medium": 1.4625000000000001,
                "high": 1.7437500000000001
              },
              "notes": [
                "Fase: Seguridad",
                "Unidad: Entorno",
                "Complejidad: Media",
                "Entregable: Dominio operativo",
                "Alcance: DNS, certificado y redirecciones",
                "Exclusiones: Compra o renovación del dominio",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-029",
              "code": "WEB-029",
              "name": "Configuración de analítica básica",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Analítica",
              "unitLabel": "Integración",
              "maturity": "01 · Primeros pasos digitales",
              "complexity": "Media",
              "baseHours": 1,
              "reuseType": "Parcial",
              "reuseFactor": 0.75,
              "deliverable": "Analítica instalada",
              "scope": "Herramienta acordada y eventos básicos",
              "exclusions": "Dashboard avanzado",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.75,
                "medium": 0.9750000000000001,
                "high": 1.1625
              },
              "notes": [
                "Fase: Analítica",
                "Unidad: Integración",
                "Complejidad: Media",
                "Entregable: Analítica instalada",
                "Alcance: Herramienta acordada y eventos básicos",
                "Exclusiones: Dashboard avanzado",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-030",
              "code": "WEB-030",
              "name": "Pruebas funcionales y de navegación",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Calidad",
              "unitLabel": "Proyecto",
              "maturity": "01 · Primeros pasos digitales",
              "complexity": "Media",
              "baseHours": 1.5,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Registro de pruebas",
              "scope": "Enlaces, formularios, llamadas a la acción, estados y recorridos funcionales.",
              "exclusions": "La compatibilidad visual entre dispositivos y navegadores se valida en WEB-031.",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.5,
                "medium": 1.9500000000000002,
                "high": 2.325
              },
              "notes": [
                "Fase: Calidad",
                "Unidad: Proyecto",
                "Complejidad: Media",
                "Entregable: Registro de pruebas",
                "Alcance: Enlaces, formularios, llamadas a la acción, estados y recorridos funcionales.",
                "Exclusiones: La compatibilidad visual entre dispositivos y navegadores se valida en WEB-031.",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-031",
              "code": "WEB-031",
              "name": "Validación responsive y compatibilidad entre navegadores",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Calidad",
              "unitLabel": "Proyecto",
              "maturity": "01 · Primeros pasos digitales",
              "complexity": "Media",
              "baseHours": 1.25,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Checklist multidispositivo",
              "scope": "QA visual y funcional en móvil, tablet, escritorio y navegadores definidos. No agrega desarrollo responsive.",
              "exclusions": "Las correcciones detectadas se ejecutan dentro del ciclo WEB-032.",
              "dependencies": [
                "WEB-022"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.25,
                "medium": 1.625,
                "high": 1.9375
              },
              "notes": [
                "Fase: Calidad",
                "Unidad: Proyecto",
                "Complejidad: Media",
                "Entregable: Checklist multidispositivo",
                "Alcance: QA visual y funcional en móvil, tablet, escritorio y navegadores definidos. No agrega desarrollo responsive.",
                "Exclusiones: Las correcciones detectadas se ejecutan dentro del ciclo WEB-032.",
                "Dependencias: WEB-022",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-032",
              "code": "WEB-032",
              "name": "Ciclo de correcciones posterior a revisión",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Cierre",
              "unitLabel": "Ciclo",
              "maturity": "01 · Primeros pasos digitales",
              "complexity": "Media",
              "baseHours": 2,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Ajustes cerrados",
              "scope": "Un ciclo consolidado de observaciones",
              "exclusions": "Cambios de alcance",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2,
                "medium": 2.6,
                "high": 3.1
              },
              "notes": [
                "Fase: Cierre",
                "Unidad: Ciclo",
                "Complejidad: Media",
                "Entregable: Ajustes cerrados",
                "Alcance: Un ciclo consolidado de observaciones",
                "Exclusiones: Cambios de alcance",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-033",
              "code": "WEB-033",
              "name": "Despliegue en producción",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Publicación",
              "unitLabel": "Entorno",
              "maturity": "01 · Primeros pasos digitales",
              "complexity": "Media",
              "baseHours": 1,
              "reuseType": "Parcial",
              "reuseFactor": 0.75,
              "deliverable": "Versión publicada",
              "scope": "Build, variables, despliegue y validación",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.75,
                "medium": 0.9750000000000001,
                "high": 1.1625
              },
              "notes": [
                "Fase: Publicación",
                "Unidad: Entorno",
                "Complejidad: Media",
                "Entregable: Versión publicada",
                "Alcance: Build, variables, despliegue y validación",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "web-034",
              "code": "WEB-034",
              "name": "Documentación, accesos y cierre",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Entrega",
              "unitLabel": "Proyecto",
              "maturity": "01 · Primeros pasos digitales",
              "complexity": "Baja",
              "baseHours": 0.75,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Acta de entrega",
              "scope": "Accesos, respaldo y recomendaciones",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.75,
                "medium": 0.8624999999999999,
                "high": 0.9750000000000001
              },
              "notes": [
                "Fase: Entrega",
                "Unidad: Proyecto",
                "Complejidad: Baja",
                "Entregable: Acta de entrega",
                "Alcance: Accesos, respaldo y recomendaciones",
                "Estado de HH: Preliminar"
              ]
            }
          ],
          "totals": {
            "activityLines": 34,
            "activities": 34,
            "hours": {
              "small": 30.231250000000003,
              "medium": 40.074062500000004,
              "high": 48.1475
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
          "sizeMode": "by-size",
          "maturity": "02 · Optimización digital",
          "activities": [
            {
              "id": "app-001",
              "code": "APP-001",
              "name": "Levantamiento de procesos, usuarios y objetivos",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Descubrimiento",
              "unitLabel": "Proyecto",
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 3,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Documento de alcance",
              "scope": "Procesos actuales, actores, problemas y objetivos",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 3,
                "medium": 4.35,
                "high": 5.4
              },
              "notes": [
                "Fase: Descubrimiento",
                "Unidad: Proyecto",
                "Complejidad: Alta",
                "Entregable: Documento de alcance",
                "Alcance: Procesos actuales, actores, problemas y objetivos",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "app-002",
              "code": "APP-002",
              "name": "Definición de alcance funcional y criterios de aceptación",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Descubrimiento",
              "unitLabel": "Proyecto",
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 3,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Backlog inicial",
              "scope": "Historias, reglas y criterios de aceptación",
              "dependencies": [
                "APP-001"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 3,
                "medium": 4.35,
                "high": 5.4
              },
              "notes": [
                "Fase: Descubrimiento",
                "Unidad: Proyecto",
                "Complejidad: Alta",
                "Entregable: Backlog inicial",
                "Alcance: Historias, reglas y criterios de aceptación",
                "Dependencias: APP-001",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "app-003",
              "code": "APP-003",
              "name": "Modelamiento de entidades y relaciones",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Arquitectura",
              "unitLabel": "Proyecto",
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 3.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Modelo de datos",
              "scope": "Entidades, relaciones y restricciones",
              "dependencies": [
                "APP-002"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2.975,
                "medium": 4.31375,
                "high": 5.355
              },
              "notes": [
                "Fase: Arquitectura",
                "Unidad: Proyecto",
                "Complejidad: Alta",
                "Entregable: Modelo de datos",
                "Alcance: Entidades, relaciones y restricciones",
                "Dependencias: APP-002",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Proyecto)",
                "baseQuantity": 1,
                "defaultQuantity": 1.5,
                "minimum": 0,
                "editable": true
              }
            },
            {
              "id": "app-004",
              "code": "APP-004",
              "name": "Diseño de roles y permisos",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Arquitectura",
              "unitLabel": "Rol",
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 1.25,
              "reuseType": "Parcial",
              "reuseFactor": 0.8,
              "deliverable": "Matriz de permisos",
              "scope": "Acciones y visibilidad por rol",
              "dependencies": [
                "APP-002"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1,
                "medium": 1.45,
                "high": 1.8
              },
              "notes": [
                "Fase: Arquitectura",
                "Unidad: Rol",
                "Complejidad: Alta",
                "Entregable: Matriz de permisos",
                "Alcance: Acciones y visibilidad por rol",
                "Dependencias: APP-002",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Rol)",
                "baseQuantity": 1,
                "defaultQuantity": 1.5,
                "minimum": 0,
                "editable": true
              }
            },
            {
              "id": "app-005",
              "code": "APP-005",
              "name": "Arquitectura técnica y ambientes",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Arquitectura",
              "unitLabel": "Proyecto",
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 2.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Diagrama técnico",
              "scope": "Frontend, backend, datos, servicios y despliegue",
              "dependencies": [
                "APP-002"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2.125,
                "medium": 3.08125,
                "high": 3.825
              },
              "notes": [
                "Fase: Arquitectura",
                "Unidad: Proyecto",
                "Complejidad: Alta",
                "Entregable: Diagrama técnico",
                "Alcance: Frontend, backend, datos, servicios y despliegue",
                "Dependencias: APP-002",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Proyecto)",
                "baseQuantity": 1,
                "defaultQuantity": 1.5,
                "minimum": 0,
                "editable": true
              }
            },
            {
              "id": "app-006",
              "code": "APP-006",
              "name": "Diseño del mapa de navegación y flujos principales",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "UX/UI",
              "unitLabel": "Proyecto",
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 2.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.8,
              "deliverable": "Mapa de flujos",
              "scope": "Definición UX de rutas, estados y recorridos antes de construir la interfaz.",
              "exclusions": "La implementación visual se contabiliza en APP-009 y las pantallas en APP-010.",
              "dependencies": [
                "APP-002"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2,
                "medium": 2.9,
                "high": 3.6
              },
              "notes": [
                "Fase: UX/UI",
                "Unidad: Proyecto",
                "Complejidad: Alta",
                "Entregable: Mapa de flujos",
                "Alcance: Definición UX de rutas, estados y recorridos antes de construir la interfaz.",
                "Exclusiones: La implementación visual se contabiliza en APP-009 y las pantallas en APP-010.",
                "Dependencias: APP-002",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Proyecto)",
                "baseQuantity": 1,
                "defaultQuantity": 1.5,
                "minimum": 0,
                "editable": true
              }
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
              "maturity": "02 · Optimización digital",
              "complexity": "Media",
              "baseHours": 1,
              "reuseType": "Parcial",
              "reuseFactor": 0.75,
              "deliverable": "Wireframes",
              "scope": "Estructura de pantallas y acciones",
              "dependencies": [
                "APP-006"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.75,
                "medium": 0.9750000000000001,
                "high": 1.1625
              },
              "notes": [
                "Fase: UX/UI",
                "Unidad: Pantalla",
                "Complejidad: Media",
                "Entregable: Wireframes",
                "Alcance: Estructura de pantallas y acciones",
                "Dependencias: APP-006",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Pantalla)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 0,
                "editable": true
              }
            },
            {
              "id": "app-008",
              "code": "APP-008",
              "name": "Configuración del proyecto, repositorio y entornos",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Preparación",
              "unitLabel": "Proyecto",
              "maturity": "02 · Optimización digital",
              "complexity": "Media",
              "baseHours": 2,
              "reuseType": "Alta",
              "reuseFactor": 0.6,
              "deliverable": "Base técnica",
              "scope": "Repositorios, variables, estructura y ambientes",
              "dependencies": [
                "APP-005"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.2,
                "medium": 1.56,
                "high": 1.8599999999999999
              },
              "notes": [
                "Fase: Preparación",
                "Unidad: Proyecto",
                "Complejidad: Media",
                "Entregable: Base técnica",
                "Alcance: Repositorios, variables, estructura y ambientes",
                "Dependencias: APP-005",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Proyecto)",
                "baseQuantity": 1,
                "defaultQuantity": 1.5,
                "minimum": 0,
                "editable": true
              }
            },
            {
              "id": "app-009",
              "code": "APP-009",
              "name": "Implementación de layout, navegación y sistema visual",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Frontend",
              "unitLabel": "Proyecto",
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 4,
              "reuseType": "Alta",
              "reuseFactor": 0.65,
              "deliverable": "Shell de aplicación",
              "scope": "Construcción del shell de la aplicación, menú, cabeceras, estilos y componentes compartidos.",
              "exclusions": "No incluye el diseño de flujos de APP-006 ni las pantallas CRUD de APP-010.",
              "dependencies": [
                "APP-006"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2.6,
                "medium": 3.77,
                "high": 4.680000000000001
              },
              "notes": [
                "Fase: Frontend",
                "Unidad: Proyecto",
                "Complejidad: Alta",
                "Entregable: Shell de aplicación",
                "Alcance: Construcción del shell de la aplicación, menú, cabeceras, estilos y componentes compartidos.",
                "Exclusiones: No incluye el diseño de flujos de APP-006 ni las pantallas CRUD de APP-010.",
                "Dependencias: APP-006",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Proyecto)",
                "baseQuantity": 1,
                "defaultQuantity": 1.5,
                "minimum": 0,
                "editable": true
              }
            },
            {
              "id": "app-010",
              "code": "APP-010",
              "name": "Implementación de interfaz CRUD estándar",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Frontend",
              "unitLabel": "Pantalla",
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 4,
              "reuseType": "Parcial",
              "reuseFactor": 0.8,
              "deliverable": "Pantallas CRUD",
              "scope": "Pantalla con listado, formulario, validaciones, estados y acciones de usuario.",
              "exclusions": "La lógica y persistencia backend se contabilizan en APP-013.",
              "dependencies": [
                "APP-003"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 3.2,
                "medium": 4.64,
                "high": 5.760000000000001
              },
              "notes": [
                "Fase: Frontend",
                "Unidad: Pantalla",
                "Complejidad: Alta",
                "Entregable: Pantallas CRUD",
                "Alcance: Pantalla con listado, formulario, validaciones, estados y acciones de usuario.",
                "Exclusiones: La lógica y persistencia backend se contabilizan en APP-013.",
                "Dependencias: APP-003",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Pantalla)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 0,
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
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 5,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Dashboard",
              "scope": "KPIs, filtros y visualización",
              "exclusions": "Analítica predictiva",
              "dependencies": [
                "APP-003"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 4.25,
                "medium": 6.1625,
                "high": 7.65
              },
              "notes": [
                "Fase: Frontend",
                "Unidad: Dashboard",
                "Complejidad: Alta",
                "Entregable: Dashboard",
                "Alcance: KPIs, filtros y visualización",
                "Exclusiones: Analítica predictiva",
                "Dependencias: APP-003",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Dashboard)",
                "baseQuantity": 1,
                "defaultQuantity": 1.5,
                "minimum": 0,
                "editable": true
              }
            },
            {
              "id": "app-012",
              "code": "APP-012",
              "name": "Configuración de base de datos y migraciones",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Backend",
              "unitLabel": "Proyecto",
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 3.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.8,
              "deliverable": "Esquema desplegado",
              "scope": "Tablas, restricciones y migraciones",
              "dependencies": [
                "APP-003"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2.8000000000000003,
                "medium": 4.0600000000000005,
                "high": 5.040000000000001
              },
              "notes": [
                "Fase: Backend",
                "Unidad: Proyecto",
                "Complejidad: Alta",
                "Entregable: Esquema desplegado",
                "Alcance: Tablas, restricciones y migraciones",
                "Dependencias: APP-003",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Proyecto)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 0,
                "editable": true
              }
            },
            {
              "id": "app-013",
              "code": "APP-013",
              "name": "Implementación de servicio CRUD backend",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Backend",
              "unitLabel": "Entidad",
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 3,
              "reuseType": "Parcial",
              "reuseFactor": 0.8,
              "deliverable": "Servicios de datos",
              "scope": "Operaciones de creación, consulta, actualización y eliminación con validaciones de servidor.",
              "exclusions": "La interfaz de usuario se contabiliza en APP-010.",
              "dependencies": [
                "APP-012"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2.4000000000000004,
                "medium": 3.4800000000000004,
                "high": 4.320000000000001
              },
              "notes": [
                "Fase: Backend",
                "Unidad: Entidad",
                "Complejidad: Alta",
                "Entregable: Servicios de datos",
                "Alcance: Operaciones de creación, consulta, actualización y eliminación con validaciones de servidor.",
                "Exclusiones: La interfaz de usuario se contabiliza en APP-010.",
                "Dependencias: APP-012",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Entidad)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 0,
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
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 5,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Flujo de acceso",
              "scope": "Ingreso, cierre, recuperación y estados",
              "dependencies": [
                "APP-012"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 4.25,
                "medium": 6.1625,
                "high": 7.65
              },
              "notes": [
                "Fase: Seguridad",
                "Unidad: Sistema",
                "Complejidad: Alta",
                "Entregable: Flujo de acceso",
                "Alcance: Ingreso, cierre, recuperación y estados",
                "Dependencias: APP-012",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "app-015",
              "code": "APP-015",
              "name": "Autorización por roles y protección de rutas",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Seguridad",
              "unitLabel": "Rol",
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 2,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Permisos aplicados",
              "scope": "Rutas, consultas y acciones protegidas",
              "dependencies": [
                "APP-004",
                "APP-014"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.7,
                "medium": 2.465,
                "high": 3.06
              },
              "notes": [
                "Fase: Seguridad",
                "Unidad: Rol",
                "Complejidad: Alta",
                "Entregable: Permisos aplicados",
                "Alcance: Rutas, consultas y acciones protegidas",
                "Dependencias: APP-004, APP-014",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Rol)",
                "baseQuantity": 1,
                "defaultQuantity": 1.5,
                "minimum": 0,
                "editable": true
              }
            },
            {
              "id": "app-016",
              "code": "APP-016",
              "name": "Implementación de flujo de negocio estándar",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Funcionalidad",
              "unitLabel": "Flujo",
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 5,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Flujo funcional",
              "scope": "Reglas, transiciones y persistencia",
              "dependencies": [
                "APP-013"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 4.25,
                "medium": 6.1625,
                "high": 7.65
              },
              "notes": [
                "Fase: Funcionalidad",
                "Unidad: Flujo",
                "Complejidad: Alta",
                "Entregable: Flujo funcional",
                "Alcance: Reglas, transiciones y persistencia",
                "Dependencias: APP-013",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Flujo)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 0,
                "editable": true
              }
            },
            {
              "id": "app-017",
              "code": "APP-017",
              "name": "Notificación por correo",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Integración",
              "unitLabel": "Integración",
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 3,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Notificación operativa",
              "scope": "Plantilla, envío, manejo de error y prueba",
              "exclusions": "Costo del proveedor",
              "dependencies": [
                "APP-013"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2.55,
                "medium": 3.6975,
                "high": 4.59
              },
              "notes": [
                "Fase: Integración",
                "Unidad: Integración",
                "Complejidad: Alta",
                "Entregable: Notificación operativa",
                "Alcance: Plantilla, envío, manejo de error y prueba",
                "Exclusiones: Costo del proveedor",
                "Dependencias: APP-013",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "app-018",
              "code": "APP-018",
              "name": "Exportación Excel",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Integración",
              "unitLabel": "Reporte",
              "maturity": "02 · Optimización digital",
              "complexity": "Media",
              "baseHours": 3,
              "reuseType": "Alta",
              "reuseFactor": 0.65,
              "deliverable": "Archivo Excel",
              "scope": "Columnas, filtros, formato y descarga",
              "dependencies": [
                "APP-013"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.9500000000000002,
                "medium": 2.535,
                "high": 3.0225000000000004
              },
              "notes": [
                "Fase: Integración",
                "Unidad: Reporte",
                "Complejidad: Media",
                "Entregable: Archivo Excel",
                "Alcance: Columnas, filtros, formato y descarga",
                "Dependencias: APP-013",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "app-019",
              "code": "APP-019",
              "name": "Exportación PDF",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Integración",
              "unitLabel": "Reporte",
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 4,
              "reuseType": "Parcial",
              "reuseFactor": 0.8,
              "deliverable": "Archivo PDF",
              "scope": "Diseño, paginación, tablas y descarga",
              "dependencies": [
                "APP-013"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 3.2,
                "medium": 4.64,
                "high": 5.760000000000001
              },
              "notes": [
                "Fase: Integración",
                "Unidad: Reporte",
                "Complejidad: Alta",
                "Entregable: Archivo PDF",
                "Alcance: Diseño, paginación, tablas y descarga",
                "Dependencias: APP-013",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "app-020",
              "code": "APP-020",
              "name": "Pruebas unitarias de reglas críticas",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Calidad",
              "unitLabel": "Regla",
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Suite de pruebas",
              "scope": "Casos normales, límites y errores",
              "dependencies": [
                "APP-016"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.275,
                "medium": 1.84875,
                "high": 2.295
              },
              "notes": [
                "Fase: Calidad",
                "Unidad: Regla",
                "Complejidad: Alta",
                "Entregable: Suite de pruebas",
                "Alcance: Casos normales, límites y errores",
                "Dependencias: APP-016",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Regla)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 0,
                "editable": true
              }
            },
            {
              "id": "app-021",
              "code": "APP-021",
              "name": "Pruebas de integración y permisos",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Calidad",
              "unitLabel": "Proyecto",
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 4,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Informe de pruebas",
              "scope": "Datos, roles, rutas y flujos",
              "dependencies": [
                "APP-015",
                "APP-016"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 4,
                "medium": 5.8,
                "high": 7.2
              },
              "notes": [
                "Fase: Calidad",
                "Unidad: Proyecto",
                "Complejidad: Alta",
                "Entregable: Informe de pruebas",
                "Alcance: Datos, roles, rutas y flujos",
                "Dependencias: APP-015, APP-016",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "app-022",
              "code": "APP-022",
              "name": "Validación responsive y experiencia de usuario",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Calidad",
              "unitLabel": "Proyecto",
              "maturity": "02 · Optimización digital",
              "complexity": "Media",
              "baseHours": 3,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Checklist UX",
              "scope": "Pruebas de adaptación, navegación, mensajes, estados y usabilidad. No incluye construcción de interfaz.",
              "exclusions": "Los ajustes derivados se contabilizan en APP-027 cuando exceden correcciones menores.",
              "dependencies": [
                "APP-009"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 3,
                "medium": 3.9000000000000004,
                "high": 4.65
              },
              "notes": [
                "Fase: Calidad",
                "Unidad: Proyecto",
                "Complejidad: Media",
                "Entregable: Checklist UX",
                "Alcance: Pruebas de adaptación, navegación, mensajes, estados y usabilidad. No incluye construcción de interfaz.",
                "Exclusiones: Los ajustes derivados se contabilizan en APP-027 cuando exceden correcciones menores.",
                "Dependencias: APP-009",
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
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 5,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Datos migrados",
              "scope": "Mapeo, validación, carga y conciliación",
              "exclusions": "Limpieza extensa de datos",
              "dependencies": [
                "APP-012"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 5,
                "medium": 7.25,
                "high": 9
              },
              "notes": [
                "Fase: Datos",
                "Unidad: Lote",
                "Complejidad: Alta",
                "Entregable: Datos migrados",
                "Alcance: Mapeo, validación, carga y conciliación",
                "Exclusiones: Limpieza extensa de datos",
                "Dependencias: APP-012",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Lote)",
                "baseQuantity": 1,
                "defaultQuantity": 0.5,
                "minimum": 0,
                "editable": true
              }
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
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 3,
              "reuseType": "Parcial",
              "reuseFactor": 0.8,
              "deliverable": "Producción operativa",
              "scope": "Variables, build, base de datos y validación",
              "exclusions": "Costos de infraestructura",
              "dependencies": [
                "APP-021"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2.4000000000000004,
                "medium": 3.4800000000000004,
                "high": 4.320000000000001
              },
              "notes": [
                "Fase: Despliegue",
                "Unidad: Entorno",
                "Complejidad: Alta",
                "Entregable: Producción operativa",
                "Alcance: Variables, build, base de datos y validación",
                "Exclusiones: Costos de infraestructura",
                "Dependencias: APP-021",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "app-025",
              "code": "APP-025",
              "name": "Capacitación de usuario administrador",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Cierre",
              "unitLabel": "Sesión",
              "maturity": "02 · Optimización digital",
              "complexity": "Media",
              "baseHours": 2,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Capacitación",
              "scope": "Uso, administración y resolución básica",
              "dependencies": [
                "APP-024"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2,
                "medium": 2.6,
                "high": 3.1
              },
              "notes": [
                "Fase: Cierre",
                "Unidad: Sesión",
                "Complejidad: Media",
                "Entregable: Capacitación",
                "Alcance: Uso, administración y resolución básica",
                "Dependencias: APP-024",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "app-026",
              "code": "APP-026",
              "name": "Documentación técnica y funcional",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Cierre",
              "unitLabel": "Proyecto",
              "maturity": "02 · Optimización digital",
              "complexity": "Media",
              "baseHours": 3,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Documentación",
              "scope": "Arquitectura, instalación y uso",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 3,
                "medium": 3.9000000000000004,
                "high": 4.65
              },
              "notes": [
                "Fase: Cierre",
                "Unidad: Proyecto",
                "Complejidad: Media",
                "Entregable: Documentación",
                "Alcance: Arquitectura, instalación y uso",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "app-027",
              "code": "APP-027",
              "name": "Ciclo de ajustes posterior a UAT",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Cierre",
              "unitLabel": "Ciclo",
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 4,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Ajustes UAT",
              "scope": "Correcciones dentro del alcance aprobado",
              "exclusions": "Nuevas funcionalidades",
              "dependencies": [
                "APP-021"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 4,
                "medium": 5.8,
                "high": 7.2
              },
              "notes": [
                "Fase: Cierre",
                "Unidad: Ciclo",
                "Complejidad: Alta",
                "Entregable: Ajustes UAT",
                "Alcance: Correcciones dentro del alcance aprobado",
                "Exclusiones: Nuevas funcionalidades",
                "Dependencias: APP-021",
                "Estado de HH: Preliminar"
              ]
            }
          ],
          "totals": {
            "activityLines": 27,
            "activities": 27,
            "hours": {
              "small": 86.42500000000001,
              "medium": 123.50875,
              "high": 152.5525
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
          "sizeMode": "by-size",
          "maturity": "02 · Optimización digital",
          "activities": [
            {
              "id": "int-001",
              "code": "INT-001",
              "name": "Levantamiento del proceso y puntos de integración",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Diagnóstico",
              "unitLabel": "Proceso",
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 2.5,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Mapa del proceso",
              "scope": "Origen, destino, frecuencia, responsables y errores",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2.5,
                "medium": 3.625,
                "high": 4.5
              },
              "notes": [
                "Fase: Diagnóstico",
                "Unidad: Proceso",
                "Complejidad: Alta",
                "Entregable: Mapa del proceso",
                "Alcance: Origen, destino, frecuencia, responsables y errores",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "int-002",
              "code": "INT-002",
              "name": "Revisión de APIs, archivos o mecanismos disponibles",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Diagnóstico",
              "unitLabel": "Integración",
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 2,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Evaluación técnica",
              "scope": "Credenciales, límites, formatos y documentación",
              "exclusions": "Licencias o accesos no disponibles",
              "dependencies": [
                "INT-001"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2,
                "medium": 2.9,
                "high": 3.6
              },
              "notes": [
                "Fase: Diagnóstico",
                "Unidad: Integración",
                "Complejidad: Alta",
                "Entregable: Evaluación técnica",
                "Alcance: Credenciales, límites, formatos y documentación",
                "Exclusiones: Licencias o accesos no disponibles",
                "Dependencias: INT-001",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "int-003",
              "code": "INT-003",
              "name": "Diseño del mapeo de datos y transformaciones",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Diseño",
              "unitLabel": "Integración",
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 3,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Matriz de mapeo",
              "scope": "Especificación de campos de origen y destino, equivalencias, formatos y reglas de conversión.",
              "exclusions": "La implementación de estas reglas se contabiliza en INT-010.",
              "dependencies": [
                "INT-002"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 3,
                "medium": 4.35,
                "high": 5.4
              },
              "notes": [
                "Fase: Diseño",
                "Unidad: Integración",
                "Complejidad: Alta",
                "Entregable: Matriz de mapeo",
                "Alcance: Especificación de campos de origen y destino, equivalencias, formatos y reglas de conversión.",
                "Exclusiones: La implementación de estas reglas se contabiliza en INT-010.",
                "Dependencias: INT-002",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "int-004",
              "code": "INT-004",
              "name": "Diseño de manejo de errores y reintentos",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Diseño",
              "unitLabel": "Integración",
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 2,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Diseño de resiliencia",
              "scope": "Errores, reintentos, alertas y trazabilidad",
              "dependencies": [
                "INT-002"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.7,
                "medium": 2.465,
                "high": 3.06
              },
              "notes": [
                "Fase: Diseño",
                "Unidad: Integración",
                "Complejidad: Alta",
                "Entregable: Diseño de resiliencia",
                "Alcance: Errores, reintentos, alertas y trazabilidad",
                "Dependencias: INT-002",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "int-005",
              "code": "INT-005",
              "name": "Configuración de credenciales y secretos",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Desarrollo",
              "unitLabel": "Entorno",
              "maturity": "02 · Optimización digital",
              "complexity": "Media",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.8,
              "deliverable": "Secretos configurados",
              "scope": "Gestión segura de credenciales",
              "dependencies": [
                "INT-002"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.2000000000000002,
                "medium": 1.5600000000000003,
                "high": 1.8600000000000003
              },
              "notes": [
                "Fase: Desarrollo",
                "Unidad: Entorno",
                "Complejidad: Media",
                "Entregable: Secretos configurados",
                "Alcance: Gestión segura de credenciales",
                "Dependencias: INT-002",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "int-006",
              "code": "INT-006",
              "name": "Desarrollo de conector API estándar",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Desarrollo",
              "unitLabel": "Integración",
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 5,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Conector funcional",
              "scope": "Autenticación, consultas, envío y manejo de respuesta",
              "dependencies": [
                "INT-003"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 4.25,
                "medium": 6.1625,
                "high": 7.65
              },
              "notes": [
                "Fase: Desarrollo",
                "Unidad: Integración",
                "Complejidad: Alta",
                "Entregable: Conector funcional",
                "Alcance: Autenticación, consultas, envío y manejo de respuesta",
                "Dependencias: INT-003",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "int-007",
              "code": "INT-007",
              "name": "Importación o exportación por archivo",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Desarrollo",
              "unitLabel": "Formato",
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 4,
              "reuseType": "Parcial",
              "reuseFactor": 0.8,
              "deliverable": "Proceso de archivo",
              "scope": "CSV, XLSX o JSON con validación",
              "dependencies": [
                "INT-003"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 3.2,
                "medium": 4.64,
                "high": 5.760000000000001
              },
              "notes": [
                "Fase: Desarrollo",
                "Unidad: Formato",
                "Complejidad: Alta",
                "Entregable: Proceso de archivo",
                "Alcance: CSV, XLSX o JSON con validación",
                "Dependencias: INT-003",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Formato)",
                "baseQuantity": 1,
                "defaultQuantity": 0,
                "minimum": 0,
                "editable": true
              }
            },
            {
              "id": "int-008",
              "code": "INT-008",
              "name": "Implementación de webhook",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Desarrollo",
              "unitLabel": "Evento",
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 3.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Webhook operativo",
              "scope": "Recepción, validación, idempotencia y respuesta",
              "dependencies": [
                "INT-004"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2.975,
                "medium": 4.31375,
                "high": 5.355
              },
              "notes": [
                "Fase: Desarrollo",
                "Unidad: Evento",
                "Complejidad: Alta",
                "Entregable: Webhook operativo",
                "Alcance: Recepción, validación, idempotencia y respuesta",
                "Dependencias: INT-004",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Evento)",
                "baseQuantity": 1,
                "defaultQuantity": 0,
                "minimum": 0,
                "editable": true
              }
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
              "maturity": "02 · Optimización digital",
              "complexity": "Media",
              "baseHours": 3,
              "reuseType": "Parcial",
              "reuseFactor": 0.8,
              "deliverable": "Job programado",
              "scope": "Frecuencia, ejecución y registro",
              "dependencies": [
                "INT-004"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2.4000000000000004,
                "medium": 3.1200000000000006,
                "high": 3.7200000000000006
              },
              "notes": [
                "Fase: Automatización",
                "Unidad: Job",
                "Complejidad: Media",
                "Entregable: Job programado",
                "Alcance: Frecuencia, ejecución y registro",
                "Dependencias: INT-004",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "int-010",
              "code": "INT-010",
              "name": "Implementación de reglas de negocio y transformaciones",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": false,
              "phase": "Automatización",
              "unitLabel": "Regla",
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Reglas implementadas",
              "scope": "Construcción y validación de transformaciones, condiciones y reglas definidas en el mapeo.",
              "exclusions": "No vuelve a incluir el diseño documental de INT-003.",
              "dependencies": [
                "INT-003"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.275,
                "medium": 1.84875,
                "high": 2.295
              },
              "notes": [
                "Fase: Automatización",
                "Unidad: Regla",
                "Complejidad: Alta",
                "Entregable: Reglas implementadas",
                "Alcance: Construcción y validación de transformaciones, condiciones y reglas definidas en el mapeo.",
                "Exclusiones: No vuelve a incluir el diseño documental de INT-003.",
                "Dependencias: INT-003",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Regla)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 0,
                "editable": true
              }
            },
            {
              "id": "int-011",
              "code": "INT-011",
              "name": "Registro de ejecuciones y errores",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Observabilidad",
              "unitLabel": "Integración",
              "maturity": "02 · Optimización digital",
              "complexity": "Media",
              "baseHours": 2,
              "reuseType": "Alta",
              "reuseFactor": 0.65,
              "deliverable": "Bitácora técnica",
              "scope": "Estado, fecha, resultado y detalle",
              "dependencies": [
                "INT-004"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.3,
                "medium": 1.6900000000000002,
                "high": 2.015
              },
              "notes": [
                "Fase: Observabilidad",
                "Unidad: Integración",
                "Complejidad: Media",
                "Entregable: Bitácora técnica",
                "Alcance: Estado, fecha, resultado y detalle",
                "Dependencias: INT-004",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "int-012",
              "code": "INT-012",
              "name": "Alertas de fallo de integración",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Observabilidad",
              "unitLabel": "Canal",
              "maturity": "02 · Optimización digital",
              "complexity": "Media",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.8,
              "deliverable": "Alerta configurada",
              "scope": "Notificación por canal acordado",
              "dependencies": [
                "INT-011"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.2000000000000002,
                "medium": 1.5600000000000003,
                "high": 1.8600000000000003
              },
              "notes": [
                "Fase: Observabilidad",
                "Unidad: Canal",
                "Complejidad: Media",
                "Entregable: Alerta configurada",
                "Alcance: Notificación por canal acordado",
                "Dependencias: INT-011",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "int-013",
              "code": "INT-013",
              "name": "Pruebas con datos de ejemplo",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Calidad",
              "unitLabel": "Caso",
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 1,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Casos ejecutados",
              "scope": "Éxito, error, duplicado y datos incompletos",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1,
                "medium": 1.45,
                "high": 1.8
              },
              "notes": [
                "Fase: Calidad",
                "Unidad: Caso",
                "Complejidad: Alta",
                "Entregable: Casos ejecutados",
                "Alcance: Éxito, error, duplicado y datos incompletos",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Caso)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 0,
                "editable": true
              }
            },
            {
              "id": "int-014",
              "code": "INT-014",
              "name": "Prueba de volumen y límites",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": false,
              "mandatory": false,
              "phase": "Calidad",
              "unitLabel": "Prueba",
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 2.5,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Resultado de carga",
              "scope": "Volumen, tiempos y límites conocidos",
              "dependencies": [
                "INT-006"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2.5,
                "medium": 3.625,
                "high": 4.5
              },
              "notes": [
                "Fase: Calidad",
                "Unidad: Prueba",
                "Complejidad: Alta",
                "Entregable: Resultado de carga",
                "Alcance: Volumen, tiempos y límites conocidos",
                "Dependencias: INT-006",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "int-015",
              "code": "INT-015",
              "name": "Revisión de permisos y exposición de datos",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Seguridad",
              "unitLabel": "Integración",
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 1.5,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Checklist de seguridad",
              "scope": "Mínimo privilegio y datos sensibles",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.5,
                "medium": 2.175,
                "high": 2.7
              },
              "notes": [
                "Fase: Seguridad",
                "Unidad: Integración",
                "Complejidad: Alta",
                "Entregable: Checklist de seguridad",
                "Alcance: Mínimo privilegio y datos sensibles",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "int-016",
              "code": "INT-016",
              "name": "Configuración en producción",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Despliegue",
              "unitLabel": "Entorno",
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 2,
              "reuseType": "Parcial",
              "reuseFactor": 0.8,
              "deliverable": "Integración desplegada",
              "scope": "Variables, secretos, job y validación",
              "dependencies": [
                "INT-013"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.6,
                "medium": 2.32,
                "high": 2.8800000000000003
              },
              "notes": [
                "Fase: Despliegue",
                "Unidad: Entorno",
                "Complejidad: Alta",
                "Entregable: Integración desplegada",
                "Alcance: Variables, secretos, job y validación",
                "Dependencias: INT-013",
                "Estado de HH: Preliminar"
              ]
            },
            {
              "id": "int-017",
              "code": "INT-017",
              "name": "Documentación y procedimiento operativo",
              "activityCount": 1,
              "countMode": "line",
              "defaultIncluded": true,
              "mandatory": true,
              "phase": "Cierre",
              "unitLabel": "Integración",
              "maturity": "02 · Optimización digital",
              "complexity": "Media",
              "baseHours": 2,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Runbook de integración",
              "scope": "Operación, errores, reintentos y contactos",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2,
                "medium": 2.6,
                "high": 3.1
              },
              "notes": [
                "Fase: Cierre",
                "Unidad: Integración",
                "Complejidad: Media",
                "Entregable: Runbook de integración",
                "Alcance: Operación, errores, reintentos y contactos",
                "Estado de HH: Preliminar"
              ]
            }
          ],
          "totals": {
            "activityLines": 17,
            "activities": 17,
            "hours": {
              "small": 31.275,
              "medium": 44.31375,
              "high": 54.57000000000001
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
          "sizeMode": "by-size",
          "maturity": "02 · Optimización digital",
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
              "maturity": "02 · Optimización digital",
              "complexity": "Baja",
              "baseHours": 0.5,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Ticket documentado",
              "scope": "Descripción, pasos, evidencia y entorno",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.5,
                "medium": 0.575,
                "high": 0.65
              },
              "notes": [
                "Fase: Recepción",
                "Unidad: Incidente",
                "Complejidad: Baja",
                "Entregable: Ticket documentado",
                "Alcance: Descripción, pasos, evidencia y entorno",
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
              "maturity": "02 · Optimización digital",
              "complexity": "Media",
              "baseHours": 0.5,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Prioridad definida",
              "scope": "Impacto, urgencia, alcance y usuarios afectados",
              "dependencies": [
                "MNT1-001"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.5,
                "medium": 0.65,
                "high": 0.775
              },
              "notes": [
                "Fase: Triage",
                "Unidad: Incidente",
                "Complejidad: Media",
                "Entregable: Prioridad definida",
                "Alcance: Impacto, urgencia, alcance y usuarios afectados",
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
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 1.5,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Caso reproducible",
              "scope": "Pasos, datos y condiciones de reproducción",
              "dependencies": [
                "MNT1-001"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.5,
                "medium": 2.175,
                "high": 2.7
              },
              "notes": [
                "Fase: Diagnóstico",
                "Unidad: Incidente",
                "Complejidad: Alta",
                "Entregable: Caso reproducible",
                "Alcance: Pasos, datos y condiciones de reproducción",
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
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 2,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Causa probable",
              "scope": "Evidencia técnica y componentes involucrados",
              "dependencies": [
                "MNT1-003"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2,
                "medium": 2.9,
                "high": 3.6
              },
              "notes": [
                "Fase: Diagnóstico",
                "Unidad: Incidente",
                "Complejidad: Alta",
                "Entregable: Causa probable",
                "Alcance: Evidencia técnica y componentes involucrados",
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
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 1.5,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Causa raíz",
              "scope": "Origen y condiciones que provocan el fallo",
              "dependencies": [
                "MNT1-004"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.5,
                "medium": 2.175,
                "high": 2.7
              },
              "notes": [
                "Fase: Diagnóstico",
                "Unidad: Incidente",
                "Complejidad: Alta",
                "Entregable: Causa raíz",
                "Alcance: Origen y condiciones que provocan el fallo",
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
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 1,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Plan de cambio",
              "scope": "Corrección, riesgo, pruebas y reversa",
              "dependencies": [
                "MNT1-005"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.9,
                "medium": 1.305,
                "high": 1.62
              },
              "notes": [
                "Fase: Planificación",
                "Unidad: Cambio",
                "Complejidad: Alta",
                "Entregable: Plan de cambio",
                "Alcance: Corrección, riesgo, pruebas y reversa",
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
              "maturity": "02 · Optimización digital",
              "complexity": "Media",
              "baseHours": 2,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Código corregido",
              "scope": "Ajuste localizado sin cambio de arquitectura",
              "exclusions": "Mutuamente excluyente con MNT1-008 para el mismo incidente.",
              "dependencies": [
                "MNT1-006"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.7,
                "medium": 2.21,
                "high": 2.635
              },
              "notes": [
                "Fase: Corrección",
                "Unidad: Cambio",
                "Complejidad: Media",
                "Entregable: Código corregido",
                "Alcance: Ajuste localizado sin cambio de arquitectura",
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
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 4,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Código corregido",
              "scope": "Cambios en varios componentes o reglas",
              "exclusions": "Mutuamente excluyente con MNT1-007 para el mismo incidente.",
              "dependencies": [
                "MNT1-006"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 4,
                "medium": 5.8,
                "high": 7.2
              },
              "notes": [
                "Fase: Corrección",
                "Unidad: Cambio",
                "Complejidad: Alta",
                "Entregable: Código corregido",
                "Alcance: Cambios en varios componentes o reglas",
                "Exclusiones: Mutuamente excluyente con MNT1-007 para el mismo incidente.",
                "Dependencias: MNT1-006",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Cambio)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 0,
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
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 2.5,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Datos regularizados",
              "scope": "Script, respaldo y validación",
              "exclusions": "Recuperación forense",
              "dependencies": [
                "MNT1-006"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2.5,
                "medium": 3.625,
                "high": 4.5
              },
              "notes": [
                "Fase: Datos",
                "Unidad: Lote",
                "Complejidad: Alta",
                "Entregable: Datos regularizados",
                "Alcance: Script, respaldo y validación",
                "Exclusiones: Recuperación forense",
                "Dependencias: MNT1-006",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Lote)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 0,
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
              "maturity": "02 · Optimización digital",
              "complexity": "Media",
              "baseHours": 1,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Caso validado",
              "scope": "Prueba directa del defecto",
              "dependencies": [
                "MNT1-007"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1,
                "medium": 1.3,
                "high": 1.55
              },
              "notes": [
                "Fase: Calidad",
                "Unidad: Caso",
                "Complejidad: Media",
                "Entregable: Caso validado",
                "Alcance: Prueba directa del defecto",
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
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 0.75,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Regresión validada",
              "scope": "Flujos cercanos y funciones relacionadas",
              "dependencies": [
                "MNT1-010"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.675,
                "medium": 0.97875,
                "high": 1.215
              },
              "notes": [
                "Fase: Calidad",
                "Unidad: Caso",
                "Complejidad: Alta",
                "Entregable: Regresión validada",
                "Alcance: Flujos cercanos y funciones relacionadas",
                "Dependencias: MNT1-010",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Caso)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 0,
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
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Corrección desplegada",
              "scope": "Build, respaldo, despliegue y validación",
              "dependencies": [
                "MNT1-011"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.275,
                "medium": 1.84875,
                "high": 2.295
              },
              "notes": [
                "Fase: Despliegue",
                "Unidad: Entorno",
                "Complejidad: Alta",
                "Entregable: Corrección desplegada",
                "Alcance: Build, respaldo, despliegue y validación",
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
              "maturity": "02 · Optimización digital",
              "complexity": "Media",
              "baseHours": 1,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Seguimiento cerrado",
              "scope": "Revisión de logs y comportamiento",
              "dependencies": [
                "MNT1-012"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1,
                "medium": 1.3,
                "high": 1.55
              },
              "notes": [
                "Fase: Seguimiento",
                "Unidad: Periodo",
                "Complejidad: Media",
                "Entregable: Seguimiento cerrado",
                "Alcance: Revisión de logs y comportamiento",
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
              "maturity": "02 · Optimización digital",
              "complexity": "Baja",
              "baseHours": 0.75,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Ticket cerrado",
              "scope": "Causa, solución, pruebas y recomendaciones",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.75,
                "medium": 0.8624999999999999,
                "high": 0.9750000000000001
              },
              "notes": [
                "Fase: Cierre",
                "Unidad: Incidente",
                "Complejidad: Baja",
                "Entregable: Ticket cerrado",
                "Alcance: Causa, solución, pruebas y recomendaciones",
                "Estado de HH: Preliminar"
              ]
            }
          ],
          "totals": {
            "activityLines": 14,
            "activities": 14,
            "hours": {
              "small": 14.65,
              "medium": 20.2375,
              "high": 24.695000000000004
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
          "sizeMode": "by-size",
          "maturity": "02 · Optimización digital",
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
              "maturity": "02 · Optimización digital",
              "complexity": "Media",
              "baseHours": 1.5,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Solicitud definida",
              "scope": "Usuario, problema, resultado y contexto",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.5,
                "medium": 1.9500000000000002,
                "high": 2.325
              },
              "notes": [
                "Fase: Descubrimiento",
                "Unidad: Funcionalidad",
                "Complejidad: Media",
                "Entregable: Solicitud definida",
                "Alcance: Usuario, problema, resultado y contexto",
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
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 2.5,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Informe de impacto",
              "scope": "Código, datos, roles, integraciones y riesgos",
              "dependencies": [
                "MNT2-001"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2.5,
                "medium": 3.625,
                "high": 4.5
              },
              "notes": [
                "Fase: Análisis",
                "Unidad: Funcionalidad",
                "Complejidad: Alta",
                "Entregable: Informe de impacto",
                "Alcance: Código, datos, roles, integraciones y riesgos",
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
              "maturity": "02 · Optimización digital",
              "complexity": "Media",
              "baseHours": 1.5,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Criterios aprobados",
              "scope": "Casos, reglas y definición de terminado",
              "dependencies": [
                "MNT2-001"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.5,
                "medium": 1.9500000000000002,
                "high": 2.325
              },
              "notes": [
                "Fase: Alcance",
                "Unidad: Funcionalidad",
                "Complejidad: Media",
                "Entregable: Criterios aprobados",
                "Alcance: Casos, reglas y definición de terminado",
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
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 2,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Flujo diseñado",
              "scope": "Interacciones, transiciones y excepciones",
              "dependencies": [
                "MNT2-003"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.7,
                "medium": 2.465,
                "high": 3.06
              },
              "notes": [
                "Fase: Diseño",
                "Unidad: Flujo",
                "Complejidad: Alta",
                "Entregable: Flujo diseñado",
                "Alcance: Interacciones, transiciones y excepciones",
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
              "maturity": "02 · Optimización digital",
              "complexity": "Media",
              "baseHours": 1,
              "reuseType": "Parcial",
              "reuseFactor": 0.8,
              "deliverable": "Wireframes",
              "scope": "Componentes, campos y acciones",
              "dependencies": [
                "MNT2-004"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.8,
                "medium": 1.04,
                "high": 1.2400000000000002
              },
              "notes": [
                "Fase: Diseño",
                "Unidad: Pantalla",
                "Complejidad: Media",
                "Entregable: Wireframes",
                "Alcance: Componentes, campos y acciones",
                "Dependencias: MNT2-004",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Pantalla)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 0,
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
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 2.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Migración de datos",
              "scope": "Tabla, columna, relación y restricciones",
              "dependencies": [
                "MNT2-002"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2.25,
                "medium": 3.2624999999999997,
                "high": 4.05
              },
              "notes": [
                "Fase: Datos",
                "Unidad: Entidad",
                "Complejidad: Alta",
                "Entregable: Migración de datos",
                "Alcance: Tabla, columna, relación y restricciones",
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
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 2,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Reglas implementadas",
              "scope": "Validaciones y comportamiento esperado",
              "dependencies": [
                "MNT2-003"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.8,
                "medium": 2.61,
                "high": 3.24
              },
              "notes": [
                "Fase: Backend",
                "Unidad: Regla",
                "Complejidad: Alta",
                "Entregable: Reglas implementadas",
                "Alcance: Validaciones y comportamiento esperado",
                "Dependencias: MNT2-003",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Regla)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 0,
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
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 3,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Servicio funcional",
              "scope": "Consulta, persistencia y errores",
              "dependencies": [
                "MNT2-006"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2.7,
                "medium": 3.915,
                "high": 4.86
              },
              "notes": [
                "Fase: Backend",
                "Unidad: Servicio",
                "Complejidad: Alta",
                "Entregable: Servicio funcional",
                "Alcance: Consulta, persistencia y errores",
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
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 3,
              "reuseType": "Parcial",
              "reuseFactor": 0.8,
              "deliverable": "Interfaz funcional",
              "scope": "Estados, validaciones y responsive",
              "dependencies": [
                "MNT2-005"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2.4000000000000004,
                "medium": 3.4800000000000004,
                "high": 4.320000000000001
              },
              "notes": [
                "Fase: Frontend",
                "Unidad: Pantalla",
                "Complejidad: Alta",
                "Entregable: Interfaz funcional",
                "Alcance: Estados, validaciones y responsive",
                "Dependencias: MNT2-005",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Pantalla)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 0,
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
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 1,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Permisos aplicados",
              "scope": "Visibilidad y acciones por rol",
              "dependencies": [
                "MNT2-002"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.85,
                "medium": 1.2325,
                "high": 1.53
              },
              "notes": [
                "Fase: Seguridad",
                "Unidad: Rol",
                "Complejidad: Alta",
                "Entregable: Permisos aplicados",
                "Alcance: Visibilidad y acciones por rol",
                "Dependencias: MNT2-002",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Rol)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 0,
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
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 3,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Integración funcional",
              "scope": "Correo, Excel, PDF u otro canal",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2.55,
                "medium": 3.6975,
                "high": 4.59
              },
              "notes": [
                "Fase: Integración",
                "Unidad: Integración",
                "Complejidad: Alta",
                "Entregable: Integración funcional",
                "Alcance: Correo, Excel, PDF u otro canal",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Integración)",
                "baseQuantity": 1,
                "defaultQuantity": 0,
                "minimum": 0,
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
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 1,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Pruebas ejecutadas",
              "scope": "Casos normales, errores y límites",
              "dependencies": [
                "MNT2-007"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.9,
                "medium": 1.305,
                "high": 1.62
              },
              "notes": [
                "Fase: Calidad",
                "Unidad: Caso",
                "Complejidad: Alta",
                "Entregable: Pruebas ejecutadas",
                "Alcance: Casos normales, errores y límites",
                "Dependencias: MNT2-007",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Caso)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 0,
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
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 3,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Informe QA",
              "scope": "Flujo nuevo y funciones existentes relacionadas",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 3,
                "medium": 4.35,
                "high": 5.4
              },
              "notes": [
                "Fase: Calidad",
                "Unidad: Proyecto",
                "Complejidad: Alta",
                "Entregable: Informe QA",
                "Alcance: Flujo nuevo y funciones existentes relacionadas",
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
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 2,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Versión desplegada",
              "scope": "Respaldo, migración, build y validación",
              "dependencies": [
                "MNT2-013"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.7,
                "medium": 2.465,
                "high": 3.06
              },
              "notes": [
                "Fase: Despliegue",
                "Unidad: Entorno",
                "Complejidad: Alta",
                "Entregable: Versión desplegada",
                "Alcance: Respaldo, migración, build y validación",
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
              "maturity": "02 · Optimización digital",
              "complexity": "Media",
              "baseHours": 1.5,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Guía de uso",
              "scope": "Cambios, uso y consideraciones",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.5,
                "medium": 1.9500000000000002,
                "high": 2.325
              },
              "notes": [
                "Fase: Cierre",
                "Unidad: Funcionalidad",
                "Complejidad: Media",
                "Entregable: Guía de uso",
                "Alcance: Cambios, uso y consideraciones",
                "Estado de HH: Preliminar"
              ]
            }
          ],
          "totals": {
            "activityLines": 15,
            "activities": 15,
            "hours": {
              "small": 30.5,
              "medium": 43.31,
              "high": 53.37500000000001
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
          "sizeMode": "by-size",
          "maturity": "03 · Consolidación digital",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 3,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Inventario técnico",
              "scope": "Frameworks, dependencias, servicios y despliegues",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 3,
                "medium": 4.35,
                "high": 5.4
              },
              "notes": [
                "Fase: Auditoría",
                "Unidad: Proyecto",
                "Complejidad: Alta",
                "Entregable: Inventario técnico",
                "Alcance: Frameworks, dependencias, servicios y despliegues",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 4,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Matriz de deuda",
              "scope": "Complejidad, obsolescencia, seguridad y mantenibilidad",
              "dependencies": [
                "MNT3-001"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 4,
                "medium": 5.8,
                "high": 7.2
              },
              "notes": [
                "Fase: Auditoría",
                "Unidad: Proyecto",
                "Complejidad: Alta",
                "Entregable: Matriz de deuda",
                "Alcance: Complejidad, obsolescencia, seguridad y mantenibilidad",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 3,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Roadmap técnico",
              "scope": "Fases, prioridades, dependencias y reversa",
              "dependencies": [
                "MNT3-002"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 3,
                "medium": 4.35,
                "high": 5.4
              },
              "notes": [
                "Fase: Planificación",
                "Unidad: Proyecto",
                "Complejidad: Alta",
                "Entregable: Roadmap técnico",
                "Alcance: Fases, prioridades, dependencias y reversa",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 2,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Pruebas base",
              "scope": "Comportamiento actual protegido antes de cambios",
              "dependencies": [
                "MNT3-003"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2,
                "medium": 2.9,
                "high": 3.6
              },
              "notes": [
                "Fase: Preparación",
                "Unidad: Flujo",
                "Complejidad: Alta",
                "Entregable: Pruebas base",
                "Alcance: Comportamiento actual protegido antes de cambios",
                "Dependencias: MNT3-003",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Flujo)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 0.75,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Dependencias actualizadas",
              "scope": "Actualización rutinaria de versión compatible, ajustes menores y verificación básica por dependencia.",
              "exclusions": "La remediación adicional de vulnerabilidades complejas se contabiliza en MNT3-009.",
              "dependencies": [
                "MNT3-004"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.675,
                "medium": 0.8775000000000001,
                "high": 1.0462500000000001
              },
              "notes": [
                "Fase: Dependencias",
                "Unidad: Dependencia",
                "Complejidad: Media",
                "Entregable: Dependencias actualizadas",
                "Alcance: Actualización rutinaria de versión compatible, ajustes menores y verificación básica por dependencia.",
                "Exclusiones: La remediación adicional de vulnerabilidades complejas se contabiliza en MNT3-009.",
                "Dependencias: MNT3-004",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Dependencia)",
                "baseQuantity": 1,
                "defaultQuantity": 5,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 5,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Módulos refactorizados",
              "scope": "Separación de responsabilidades y legibilidad",
              "dependencies": [
                "MNT3-004"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 5,
                "medium": 7.25,
                "high": 9
              },
              "notes": [
                "Fase: Código",
                "Unidad: Módulo",
                "Complejidad: Alta",
                "Entregable: Módulos refactorizados",
                "Alcance: Separación de responsabilidades y legibilidad",
                "Dependencias: MNT3-004",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Módulo)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 3,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Componente reusable",
              "scope": "Interfaces, pruebas y documentación",
              "dependencies": [
                "MNT3-006"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2.7,
                "medium": 3.915,
                "high": 4.86
              },
              "notes": [
                "Fase: Arquitectura",
                "Unidad: Componente",
                "Complejidad: Alta",
                "Entregable: Componente reusable",
                "Alcance: Interfaces, pruebas y documentación",
                "Dependencias: MNT3-006",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Componente)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 4,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Migración validada",
              "scope": "Transformación, respaldo y conciliación",
              "dependencies": [
                "MNT3-003"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 4,
                "medium": 5.8,
                "high": 7.2
              },
              "notes": [
                "Fase: Datos",
                "Unidad: Migración",
                "Complejidad: Alta",
                "Entregable: Migración validada",
                "Alcance: Transformación, respaldo y conciliación",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Hallazgos cerrados",
              "scope": "Análisis y remediación adicional cuando la actualización estándar no resuelve el hallazgo.",
              "exclusions": "No sumar si el hallazgo queda resuelto únicamente con MNT3-005.",
              "dependencies": [
                "MNT3-005"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.35,
                "medium": 1.9575,
                "high": 2.43
              },
              "notes": [
                "Fase: Seguridad",
                "Unidad: Hallazgo",
                "Complejidad: Alta",
                "Entregable: Hallazgos cerrados",
                "Alcance: Análisis y remediación adicional cuando la actualización estándar no resuelve el hallazgo.",
                "Exclusiones: No sumar si el hallazgo queda resuelto únicamente con MNT3-005.",
                "Dependencias: MNT3-005",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Hallazgo)",
                "baseQuantity": 1,
                "defaultQuantity": 0,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 1,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Suite de regresión",
              "scope": "Flujos críticos y casos de error",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1,
                "medium": 1.45,
                "high": 1.8
              },
              "notes": [
                "Fase: Calidad",
                "Unidad: Flujo",
                "Complejidad: Alta",
                "Entregable: Suite de regresión",
                "Alcance: Flujos críticos y casos de error",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Flujo)",
                "baseQuantity": 1,
                "defaultQuantity": 5,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 3,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Informe comparativo",
              "scope": "Métricas acordadas y resultados",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 3,
                "medium": 4.35,
                "high": 5.4
              },
              "notes": [
                "Fase: Rendimiento",
                "Unidad: Proyecto",
                "Complejidad: Alta",
                "Entregable: Informe comparativo",
                "Alcance: Métricas acordadas y resultados",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 2,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Plan operativo",
              "scope": "Pasos, responsables, respaldo y retorno",
              "dependencies": [
                "MNT3-003"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2,
                "medium": 2.9,
                "high": 3.6
              },
              "notes": [
                "Fase: Despliegue",
                "Unidad: Entorno",
                "Complejidad: Alta",
                "Entregable: Plan operativo",
                "Alcance: Pasos, responsables, respaldo y retorno",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 3,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Versión modernizada",
              "scope": "Ejecución, validación y seguimiento",
              "dependencies": [
                "MNT3-012"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 3,
                "medium": 4.35,
                "high": 5.4
              },
              "notes": [
                "Fase: Despliegue",
                "Unidad: Entorno",
                "Complejidad: Alta",
                "Entregable: Versión modernizada",
                "Alcance: Ejecución, validación y seguimiento",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 2.5,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Documentación actualizada",
              "scope": "Arquitectura, dependencias y operación",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2.5,
                "medium": 3.25,
                "high": 3.875
              },
              "notes": [
                "Fase: Cierre",
                "Unidad: Proyecto",
                "Complejidad: Media",
                "Entregable: Documentación actualizada",
                "Alcance: Arquitectura, dependencias y operación",
                "Estado de HH: Preliminar"
              ]
            }
          ],
          "totals": {
            "activityLines": 14,
            "activities": 14,
            "hours": {
              "small": 41.875,
              "medium": 59.83749999999999,
              "high": 73.90625
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
          "sizeMode": "by-size",
          "maturity": "03 · Consolidación digital",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 1.5,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Métricas objetivo",
              "scope": "Tiempos, volumen y experiencia esperada",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.5,
                "medium": 1.9500000000000002,
                "high": 2.325
              },
              "notes": [
                "Fase: Medición",
                "Unidad: Proyecto",
                "Complejidad: Media",
                "Entregable: Métricas objetivo",
                "Alcance: Tiempos, volumen y experiencia esperada",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 2.5,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Línea base",
              "scope": "Medición inicial reproducible antes de realizar cambios.",
              "exclusions": "La comparación final se contabiliza en MNT4-010.",
              "dependencies": [
                "MNT4-001"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2.5,
                "medium": 3.625,
                "high": 4.5
              },
              "notes": [
                "Fase: Medición",
                "Unidad: Entorno",
                "Complejidad: Alta",
                "Entregable: Línea base",
                "Alcance: Medición inicial reproducible antes de realizar cambios.",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 2.5,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Hallazgos frontend",
              "scope": "Carga, renderizado, recursos y red",
              "dependencies": [
                "MNT4-002"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2.5,
                "medium": 3.625,
                "high": 4.5
              },
              "notes": [
                "Fase: Diagnóstico",
                "Unidad: Proyecto",
                "Complejidad: Alta",
                "Entregable: Hallazgos frontend",
                "Alcance: Carga, renderizado, recursos y red",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 3,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Hallazgos backend",
              "scope": "Tiempos, consultas, bloqueos y recursos",
              "dependencies": [
                "MNT4-002"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 3,
                "medium": 4.35,
                "high": 5.4
              },
              "notes": [
                "Fase: Diagnóstico",
                "Unidad: Proyecto",
                "Complejidad: Alta",
                "Entregable: Hallazgos backend",
                "Alcance: Tiempos, consultas, bloqueos y recursos",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 3,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Frontend optimizado",
              "scope": "Imágenes, carga diferida y empaquetado",
              "dependencies": [
                "MNT4-003"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2.55,
                "medium": 3.6975,
                "high": 4.59
              },
              "notes": [
                "Fase: Optimización",
                "Unidad: Proyecto",
                "Complejidad: Alta",
                "Entregable: Frontend optimizado",
                "Alcance: Imágenes, carga diferida y empaquetado",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 1.5,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Consultas optimizadas",
              "scope": "Índices, filtros, caché o reescritura",
              "dependencies": [
                "MNT4-004"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.5,
                "medium": 2.175,
                "high": 2.7
              },
              "notes": [
                "Fase: Optimización",
                "Unidad: Consulta",
                "Complejidad: Alta",
                "Entregable: Consultas optimizadas",
                "Alcance: Índices, filtros, caché o reescritura",
                "Dependencias: MNT4-004",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Consulta)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 2.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Caché operativa",
              "scope": "Política, expiración e invalidación",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2.25,
                "medium": 3.2624999999999997,
                "high": 4.05
              },
              "notes": [
                "Fase: Optimización",
                "Unidad: Capa",
                "Complejidad: Alta",
                "Entregable: Caché operativa",
                "Alcance: Política, expiración e invalidación",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 2,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Flujo optimizado",
              "scope": "Carga incremental y límites",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.8,
                "medium": 2.61,
                "high": 3.24
              },
              "notes": [
                "Fase: Optimización",
                "Unidad: Flujo",
                "Complejidad: Alta",
                "Entregable: Flujo optimizado",
                "Alcance: Carga incremental y límites",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 3,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Resultado de carga",
              "scope": "Volumen y concurrencia acordados",
              "exclusions": "Pruebas de estrés masivas",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 3,
                "medium": 4.35,
                "high": 5.4
              },
              "notes": [
                "Fase: Validación",
                "Unidad: Prueba",
                "Complejidad: Alta",
                "Entregable: Resultado de carga",
                "Alcance: Volumen y concurrencia acordados",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 2,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Informe comparativo",
              "scope": "Repetición de la medición inicial y comparación documentada de resultados.",
              "exclusions": "No vuelve a incluir la captura inicial de MNT4-002.",
              "dependencies": [
                "MNT4-002"
              ],
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2,
                "medium": 2.6,
                "high": 3.1
              },
              "notes": [
                "Fase: Validación",
                "Unidad: Proyecto",
                "Complejidad: Media",
                "Entregable: Informe comparativo",
                "Alcance: Repetición de la medición inicial y comparación documentada de resultados.",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 2,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Cambio estabilizado",
              "scope": "Despliegue, métricas y seguimiento",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2,
                "medium": 2.9,
                "high": 3.6
              },
              "notes": [
                "Fase: Despliegue",
                "Unidad: Entorno",
                "Complejidad: Alta",
                "Entregable: Cambio estabilizado",
                "Alcance: Despliegue, métricas y seguimiento",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Baja",
              "baseHours": 1,
              "reuseType": "No",
              "reuseFactor": 1,
              "deliverable": "Registro técnico",
              "scope": "Cambios, resultados y próximos pasos",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1,
                "medium": 1.15,
                "high": 1.3
              },
              "notes": [
                "Fase: Cierre",
                "Unidad: Proyecto",
                "Complejidad: Baja",
                "Entregable: Registro técnico",
                "Alcance: Cambios, resultados y próximos pasos",
                "Estado de HH: Preliminar"
              ]
            }
          ],
          "totals": {
            "activityLines": 12,
            "activities": 12,
            "hours": {
              "small": 21.55,
              "medium": 30.422499999999996,
              "high": 37.415
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
          "sizeMode": "by-size",
          "maturity": "03 · Consolidación digital",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 0.75,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Inventario monitoreable",
              "scope": "URLs, APIs, jobs y dependencias",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.6375,
                "medium": 0.82875,
                "high": 0.9881249999999999
              },
              "notes": [
                "Fase: Diagnóstico",
                "Unidad: Servicio",
                "Complejidad: Media",
                "Entregable: Inventario monitoreable",
                "Alcance: URLs, APIs, jobs y dependencias",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Servicio)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 0.75,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Matriz de indicadores",
              "scope": "Estado, latencia, código y contenido esperado",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.6375,
                "medium": 0.82875,
                "high": 0.9881249999999999
              },
              "notes": [
                "Fase: Diseño",
                "Unidad: Servicio",
                "Complejidad: Media",
                "Entregable: Matriz de indicadores",
                "Alcance: Estado, latencia, código y contenido esperado",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Servicio)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 1,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Chequeos activos",
              "scope": "Frecuencia, timeout y criterio de éxito",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.85,
                "medium": 1.105,
                "high": 1.3175
              },
              "notes": [
                "Fase: Configuración",
                "Unidad: Servicio",
                "Complejidad: Media",
                "Entregable: Chequeos activos",
                "Alcance: Frecuencia, timeout y criterio de éxito",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Servicio)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 1,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Alertas operativas",
              "scope": "Umbrales, destinatarios y escalamiento",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.85,
                "medium": 1.105,
                "high": 1.3175
              },
              "notes": [
                "Fase: Configuración",
                "Unidad: Canal",
                "Complejidad: Media",
                "Entregable: Alertas operativas",
                "Alcance: Umbrales, destinatarios y escalamiento",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Canal)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Baja",
              "baseHours": 0.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Ventanas definidas",
              "scope": "Supresión de alertas planificadas",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.425,
                "medium": 0.48874999999999996,
                "high": 0.5525
              },
              "notes": [
                "Fase: Configuración",
                "Unidad: Servicio",
                "Complejidad: Baja",
                "Entregable: Ventanas definidas",
                "Alcance: Supresión de alertas planificadas",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Servicio)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 2.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Dashboard",
              "scope": "Estado, histórico y tendencia",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2.125,
                "medium": 3.08125,
                "high": 3.825
              },
              "notes": [
                "Fase: Visualización",
                "Unidad: Dashboard",
                "Complejidad: Alta",
                "Entregable: Dashboard",
                "Alcance: Estado, histórico y tendencia",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 2,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Reporte base",
              "scope": "Disponibilidad, eventos y observaciones",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.7,
                "medium": 2.21,
                "high": 2.635
              },
              "notes": [
                "Fase: Reportes",
                "Unidad: Reporte",
                "Complejidad: Media",
                "Entregable: Reporte base",
                "Alcance: Disponibilidad, eventos y observaciones",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 1,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Prueba de alertamiento",
              "scope": "Detección, notificación y recuperación",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.85,
                "medium": 1.2325,
                "high": 1.53
              },
              "notes": [
                "Fase: Calidad",
                "Unidad: Caso",
                "Complejidad: Alta",
                "Entregable: Prueba de alertamiento",
                "Alcance: Detección, notificación y recuperación",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Caso)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Runbook",
              "scope": "Validación, escalamiento y comunicación",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.275,
                "medium": 1.6575,
                "high": 1.9762499999999998
              },
              "notes": [
                "Fase: Operación",
                "Unidad: Documento",
                "Complejidad: Media",
                "Entregable: Runbook",
                "Alcance: Validación, escalamiento y comunicación",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Monitoreo estabilizado",
              "scope": "Activación, observación y ajustes",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.275,
                "medium": 1.84875,
                "high": 2.295
              },
              "notes": [
                "Fase: Despliegue",
                "Unidad: Entorno",
                "Complejidad: Alta",
                "Entregable: Monitoreo estabilizado",
                "Alcance: Activación, observación y ajustes",
                "Estado de HH: Preliminar"
              ]
            }
          ],
          "totals": {
            "activityLines": 10,
            "activities": 10,
            "hours": {
              "small": 16.15,
              "medium": 21.759999999999998,
              "high": 26.307499999999997
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
          "sizeMode": "by-size",
          "maturity": "03 · Consolidación digital",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 0.75,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Inventario de logs",
              "scope": "Aplicación, servidor, base de datos y servicios",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.6375,
                "medium": 0.82875,
                "high": 0.9881249999999999
              },
              "notes": [
                "Fase: Diagnóstico",
                "Unidad: Fuente",
                "Complejidad: Media",
                "Entregable: Inventario de logs",
                "Alcance: Aplicación, servidor, base de datos y servicios",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Fuente)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 2,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Esquema de logs",
              "scope": "Nivel, fecha, usuario, correlación y contexto",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.7,
                "medium": 2.465,
                "high": 3.06
              },
              "notes": [
                "Fase: Diseño",
                "Unidad: Proyecto",
                "Complejidad: Alta",
                "Entregable: Esquema de logs",
                "Alcance: Nivel, fecha, usuario, correlación y contexto",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Fuentes conectadas",
              "scope": "Agente, librería o integración",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.275,
                "medium": 1.84875,
                "high": 2.295
              },
              "notes": [
                "Fase: Implementación",
                "Unidad: Fuente",
                "Complejidad: Alta",
                "Entregable: Fuentes conectadas",
                "Alcance: Agente, librería o integración",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Fuente)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 1,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Logs normalizados",
              "scope": "Campos, formatos y errores",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.85,
                "medium": 1.2325,
                "high": 1.53
              },
              "notes": [
                "Fase: Implementación",
                "Unidad: Fuente",
                "Complejidad: Alta",
                "Entregable: Logs normalizados",
                "Alcance: Campos, formatos y errores",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Fuente)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Trazas correlacionadas",
              "scope": "Seguimiento entre componentes",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.275,
                "medium": 1.84875,
                "high": 2.295
              },
              "notes": [
                "Fase: Trazabilidad",
                "Unidad: Flujo",
                "Complejidad: Alta",
                "Entregable: Trazas correlacionadas",
                "Alcance: Seguimiento entre componentes",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Flujo)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Política aplicada",
              "scope": "Periodo, volumen y eliminación",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.275,
                "medium": 1.6575,
                "high": 1.9762499999999998
              },
              "notes": [
                "Fase: Retención",
                "Unidad: Entorno",
                "Complejidad: Media",
                "Entregable: Política aplicada",
                "Alcance: Periodo, volumen y eliminación",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 3,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Dashboard de logs",
              "scope": "Errores, niveles y tendencias",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2.55,
                "medium": 3.6975,
                "high": 4.59
              },
              "notes": [
                "Fase: Visualización",
                "Unidad: Dashboard",
                "Complejidad: Alta",
                "Entregable: Dashboard de logs",
                "Alcance: Errores, niveles y tendencias",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 1,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Reglas de alerta",
              "scope": "Patrones, frecuencia y severidad",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.85,
                "medium": 1.2325,
                "high": 1.53
              },
              "notes": [
                "Fase: Alertas",
                "Unidad: Regla",
                "Complejidad: Alta",
                "Entregable: Reglas de alerta",
                "Alcance: Patrones, frecuencia y severidad",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Regla)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 0.75,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Pruebas de logs",
              "scope": "Generación, recepción y consulta",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.6375,
                "medium": 0.82875,
                "high": 0.9881249999999999
              },
              "notes": [
                "Fase: Calidad",
                "Unidad: Caso",
                "Complejidad: Media",
                "Entregable: Pruebas de logs",
                "Alcance: Generación, recepción y consulta",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Caso)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Runbook",
              "scope": "Búsquedas, filtros y escalamiento",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.275,
                "medium": 1.6575,
                "high": 1.9762499999999998
              },
              "notes": [
                "Fase: Operación",
                "Unidad: Documento",
                "Complejidad: Media",
                "Entregable: Runbook",
                "Alcance: Búsquedas, filtros y escalamiento",
                "Estado de HH: Preliminar"
              ]
            }
          ],
          "totals": {
            "activityLines": 10,
            "activities": 10,
            "hours": {
              "small": 22.95,
              "medium": 32.129999999999995,
              "high": 39.3975
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
          "sizeMode": "by-size",
          "maturity": "03 · Consolidación digital",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 0.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Catálogo de métricas",
              "scope": "CPU, memoria, latencia, errores y volumen",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.425,
                "medium": 0.5525,
                "high": 0.65875
              },
              "notes": [
                "Fase: Diagnóstico",
                "Unidad: Métrica",
                "Complejidad: Media",
                "Entregable: Catálogo de métricas",
                "Alcance: CPU, memoria, latencia, errores y volumen",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Métrica)",
                "baseQuantity": 1,
                "defaultQuantity": 6,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Métricas emitidas",
              "scope": "Código, etiquetas y frecuencia",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.275,
                "medium": 1.84875,
                "high": 2.295
              },
              "notes": [
                "Fase: Instrumentación",
                "Unidad: Métrica",
                "Complejidad: Alta",
                "Entregable: Métricas emitidas",
                "Alcance: Código, etiquetas y frecuencia",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Métrica)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Hosts monitoreados",
              "scope": "Agente, permisos y conectividad",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.275,
                "medium": 1.84875,
                "high": 2.295
              },
              "notes": [
                "Fase: Infraestructura",
                "Unidad: Host",
                "Complejidad: Alta",
                "Entregable: Hosts monitoreados",
                "Alcance: Agente, permisos y conectividad",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Host)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 3,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Dashboard operacional",
              "scope": "Salud, capacidad y rendimiento",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2.55,
                "medium": 3.6975,
                "high": 4.59
              },
              "notes": [
                "Fase: Visualización",
                "Unidad: Dashboard",
                "Complejidad: Alta",
                "Entregable: Dashboard operacional",
                "Alcance: Salud, capacidad y rendimiento",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 0.75,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Alertas de rendimiento",
              "scope": "Umbral, duración y severidad",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.6375,
                "medium": 0.924375,
                "high": 1.1475
              },
              "notes": [
                "Fase: Alertas",
                "Unidad: Métrica",
                "Complejidad: Alta",
                "Entregable: Alertas de rendimiento",
                "Alcance: Umbral, duración y severidad",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Métrica)",
                "baseQuantity": 1,
                "defaultQuantity": 5,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 2.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Informe de capacidad",
              "scope": "Consumo, tendencia y proyección",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2.125,
                "medium": 3.08125,
                "high": 3.825
              },
              "notes": [
                "Fase: Capacidad",
                "Unidad: Proyecto",
                "Complejidad: Alta",
                "Entregable: Informe de capacidad",
                "Alcance: Consumo, tendencia y proyección",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Métrica de negocio",
              "scope": "Tiempo y resultado de transacción",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.275,
                "medium": 1.84875,
                "high": 2.295
              },
              "notes": [
                "Fase: Experiencia",
                "Unidad: Flujo",
                "Complejidad: Alta",
                "Entregable: Métrica de negocio",
                "Alcance: Tiempo y resultado de transacción",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Flujo)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 0.75,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Pruebas de alertas",
              "scope": "Generación y recepción",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.6375,
                "medium": 0.82875,
                "high": 0.9881249999999999
              },
              "notes": [
                "Fase: Calidad",
                "Unidad: Caso",
                "Complejidad: Media",
                "Entregable: Pruebas de alertas",
                "Alcance: Generación y recepción",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Caso)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 2,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Reporte de rendimiento",
              "scope": "Indicadores, eventos y recomendaciones",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.7,
                "medium": 2.21,
                "high": 2.635
              },
              "notes": [
                "Fase: Reportes",
                "Unidad: Reporte",
                "Complejidad: Media",
                "Entregable: Reporte de rendimiento",
                "Alcance: Indicadores, eventos y recomendaciones",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.85,
              "deliverable": "Guía operativa",
              "scope": "Dashboards, alertas y mantenimiento",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.275,
                "medium": 1.6575,
                "high": 1.9762499999999998
              },
              "notes": [
                "Fase: Operación",
                "Unidad: Proyecto",
                "Complejidad: Media",
                "Entregable: Guía operativa",
                "Alcance: Dashboards, alertas y mantenimiento",
                "Estado de HH: Preliminar"
              ]
            }
          ],
          "totals": {
            "activityLines": 10,
            "activities": 10,
            "hours": {
              "small": 21.4625,
              "medium": 29.909374999999997,
              "high": 36.613749999999996
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
          "sizeMode": "by-size",
          "maturity": "03 · Consolidación digital",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 0.75,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Inventario de respaldo",
              "scope": "Sistemas, datos, propietarios y criticidad",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.66,
                "medium": 0.8580000000000001,
                "high": 1.0230000000000001
              },
              "notes": [
                "Fase: Diagnóstico",
                "Unidad: Activo",
                "Complejidad: Media",
                "Entregable: Inventario de respaldo",
                "Alcance: Sistemas, datos, propietarios y criticidad",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Activo)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 1,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Objetivos de recuperación",
              "scope": "Validación básica de objetivos necesarios para definir frecuencia y restauración del respaldo.",
              "exclusions": "Si se incluye BCP-02, reutilizar la definición formal de BCP2-003 y no duplicar este esfuerzo.",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.88,
                "medium": 1.276,
                "high": 1.584
              },
              "notes": [
                "Fase: Diseño",
                "Unidad: Servicio",
                "Complejidad: Alta",
                "Entregable: Objetivos de recuperación",
                "Alcance: Validación básica de objetivos necesarios para definir frecuencia y restauración del respaldo.",
                "Exclusiones: Si se incluye BCP-02, reutilizar la definición formal de BCP2-003 y no duplicar este esfuerzo.",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Servicio)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 2,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Política de respaldo",
              "scope": "Frecuencia, retención, cifrado y ubicación",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.76,
                "medium": 2.552,
                "high": 3.168
              },
              "notes": [
                "Fase: Diseño",
                "Unidad: Proyecto",
                "Complejidad: Alta",
                "Entregable: Política de respaldo",
                "Alcance: Frecuencia, retención, cifrado y ubicación",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Jobs configurados",
              "scope": "Origen, destino, horario y retención",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.32,
                "medium": 1.914,
                "high": 2.3760000000000003
              },
              "notes": [
                "Fase: Implementación",
                "Unidad: Job",
                "Complejidad: Alta",
                "Entregable: Jobs configurados",
                "Alcance: Origen, destino, horario y retención",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Job)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Respaldo protegido",
              "scope": "Claves, permisos y acceso restringido",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.32,
                "medium": 1.914,
                "high": 2.3760000000000003
              },
              "notes": [
                "Fase: Implementación",
                "Unidad: Entorno",
                "Complejidad: Alta",
                "Entregable: Respaldo protegido",
                "Alcance: Claves, permisos y acceso restringido",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 2,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Copia externa",
              "scope": "Transferencia, validación y retención",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.76,
                "medium": 2.552,
                "high": 3.168
              },
              "notes": [
                "Fase: Implementación",
                "Unidad: Destino",
                "Complejidad: Alta",
                "Entregable: Copia externa",
                "Alcance: Transferencia, validación y retención",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 0.75,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Jobs validados",
              "scope": "Ejecución, duración y resultado",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.66,
                "medium": 0.8580000000000001,
                "high": 1.0230000000000001
              },
              "notes": [
                "Fase: Validación",
                "Unidad: Job",
                "Complejidad: Media",
                "Entregable: Jobs validados",
                "Alcance: Ejecución, duración y resultado",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Job)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 2,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Restauración probada",
              "scope": "Recuperación y validación de integridad",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.76,
                "medium": 2.552,
                "high": 3.168
              },
              "notes": [
                "Fase: Restauración",
                "Unidad: Activo",
                "Complejidad: Alta",
                "Entregable: Restauración probada",
                "Alcance: Recuperación y validación de integridad",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Activo)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 0.75,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Alertas activas",
              "scope": "Fallo, retraso o ausencia de respaldo",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.66,
                "medium": 0.8580000000000001,
                "high": 1.0230000000000001
              },
              "notes": [
                "Fase: Alertas",
                "Unidad: Canal",
                "Complejidad: Media",
                "Entregable: Alertas activas",
                "Alcance: Fallo, retraso o ausencia de respaldo",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Canal)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 2,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Runbook",
              "scope": "Procedimiento operativo del job, validación, alertas y restauración del respaldo.",
              "exclusions": "No reemplaza el procedimiento integral de recuperación ante desastres de BCP2-005.",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.76,
                "medium": 2.2880000000000003,
                "high": 2.728
              },
              "notes": [
                "Fase: Operación",
                "Unidad: Documento",
                "Complejidad: Media",
                "Entregable: Runbook",
                "Alcance: Procedimiento operativo del job, validación, alertas y restauración del respaldo.",
                "Exclusiones: No reemplaza el procedimiento integral de recuperación ante desastres de BCP2-005.",
                "Estado de HH: Preliminar"
              ]
            }
          ],
          "totals": {
            "activityLines": 10,
            "activities": 10,
            "hours": {
              "small": 20.900000000000002,
              "medium": 29.150000000000006,
              "high": 35.695
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
          "sizeMode": "by-size",
          "maturity": "03 · Consolidación digital",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 1.25,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Matriz BIA",
              "scope": "Criticidad, dependencia e impacto",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.1,
                "medium": 1.595,
                "high": 1.9800000000000002
              },
              "notes": [
                "Fase: Análisis",
                "Unidad: Proceso",
                "Complejidad: Alta",
                "Entregable: Matriz BIA",
                "Alcance: Criticidad, dependencia e impacto",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Proceso)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 0.75,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Mapa de dependencias",
              "scope": "Infraestructura, datos, terceros y personas",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.66,
                "medium": 0.8580000000000001,
                "high": 1.0230000000000001
              },
              "notes": [
                "Fase: Análisis",
                "Unidad: Servicio",
                "Complejidad: Media",
                "Entregable: Mapa de dependencias",
                "Alcance: Infraestructura, datos, terceros y personas",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Servicio)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 1,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Objetivos DR",
              "scope": "Objetivos aprobados por servicio crítico, alineados con impacto, dependencias y estrategia de recuperación.",
              "exclusions": "Sustituye la definición básica de BCP1-002 cuando ambos servicios forman parte de la misma propuesta.",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.88,
                "medium": 1.276,
                "high": 1.584
              },
              "notes": [
                "Fase: Objetivos",
                "Unidad: Servicio",
                "Complejidad: Alta",
                "Entregable: Objetivos DR",
                "Alcance: Objetivos aprobados por servicio crítico, alineados con impacto, dependencias y estrategia de recuperación.",
                "Exclusiones: Sustituye la definición básica de BCP1-002 cuando ambos servicios forman parte de la misma propuesta.",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Servicio)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 2,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Estrategia DR",
              "scope": "Sitio, restauración, prioridades y secuencia",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.76,
                "medium": 2.552,
                "high": 3.168
              },
              "notes": [
                "Fase: Estrategia",
                "Unidad: Servicio",
                "Complejidad: Alta",
                "Entregable: Estrategia DR",
                "Alcance: Sitio, restauración, prioridades y secuencia",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Servicio)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 2.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Procedimientos",
              "scope": "Secuencia integral para recuperar servicios, dependencias, datos y responsables después de un desastre.",
              "exclusions": "No duplica el procedimiento operativo del job de respaldo documentado en BCP1-010.",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2.2,
                "medium": 3.19,
                "high": 3.9600000000000004
              },
              "notes": [
                "Fase: Procedimientos",
                "Unidad: Servicio",
                "Complejidad: Alta",
                "Entregable: Procedimientos",
                "Alcance: Secuencia integral para recuperar servicios, dependencias, datos y responsables después de un desastre.",
                "Exclusiones: No duplica el procedimiento operativo del job de respaldo documentado en BCP1-010.",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Servicio)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Plan de comunicación",
              "scope": "Contactos, severidad y mensajes",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.32,
                "medium": 1.7160000000000002,
                "high": 2.0460000000000003
              },
              "notes": [
                "Fase: Comunicación",
                "Unidad: Proyecto",
                "Complejidad: Media",
                "Entregable: Plan de comunicación",
                "Alcance: Contactos, severidad y mensajes",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 2,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Guion de prueba",
              "scope": "Alcance, éxito y riesgos",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.76,
                "medium": 2.552,
                "high": 3.168
              },
              "notes": [
                "Fase: Pruebas",
                "Unidad: Escenario",
                "Complejidad: Alta",
                "Entregable: Guion de prueba",
                "Alcance: Alcance, éxito y riesgos",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 4,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Ejercicio ejecutado",
              "scope": "Tiempos, decisiones y evidencias",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 3.52,
                "medium": 5.104,
                "high": 6.336
              },
              "notes": [
                "Fase: Pruebas",
                "Unidad: Ejercicio",
                "Complejidad: Alta",
                "Entregable: Ejercicio ejecutado",
                "Alcance: Tiempos, decisiones y evidencias",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 2,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Plan de mejora",
              "scope": "Hallazgos, responsables y fechas",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.76,
                "medium": 2.2880000000000003,
                "high": 2.728
              },
              "notes": [
                "Fase: Mejora",
                "Unidad: Proyecto",
                "Complejidad: Media",
                "Entregable: Plan de mejora",
                "Alcance: Hallazgos, responsables y fechas",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Baja",
              "baseHours": 1,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Calendario DR",
              "scope": "Periodicidad y responsables",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.88,
                "medium": 1.012,
                "high": 1.1440000000000001
              },
              "notes": [
                "Fase: Operación",
                "Unidad: Proyecto",
                "Complejidad: Baja",
                "Entregable: Calendario DR",
                "Alcance: Periodicidad y responsables",
                "Estado de HH: Preliminar"
              ]
            }
          ],
          "totals": {
            "activityLines": 10,
            "activities": 10,
            "hours": {
              "small": 31.680000000000003,
              "medium": 44.81400000000001,
              "high": 55.153999999999996
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
          "sizeMode": "by-size",
          "maturity": "03 · Consolidación digital",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 0.75,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Inventario clasificado",
              "scope": "Tipo, criticidad y propietario",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.66,
                "medium": 0.8580000000000001,
                "high": 1.0230000000000001
              },
              "notes": [
                "Fase: Diagnóstico",
                "Unidad: Fuente",
                "Complejidad: Media",
                "Entregable: Inventario clasificado",
                "Alcance: Tipo, criticidad y propietario",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Fuente)",
                "baseQuantity": 1,
                "defaultQuantity": 5,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 1,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Matriz de requisitos",
              "scope": "Necesidades contractuales y operativas",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.88,
                "medium": 1.276,
                "high": 1.584
              },
              "notes": [
                "Fase: Requisitos",
                "Unidad: Categoría",
                "Complejidad: Alta",
                "Entregable: Matriz de requisitos",
                "Alcance: Necesidades contractuales y operativas",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Categoría)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 1,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Matriz de retención",
              "scope": "Periodo, evento inicial y disposición",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.88,
                "medium": 1.276,
                "high": 1.584
              },
              "notes": [
                "Fase: Diseño",
                "Unidad: Categoría",
                "Complejidad: Alta",
                "Entregable: Matriz de retención",
                "Alcance: Periodo, evento inicial y disposición",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Categoría)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 2,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Políticas aplicadas",
              "scope": "Archivado, conservación y eliminación",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.76,
                "medium": 2.552,
                "high": 3.168
              },
              "notes": [
                "Fase: Implementación",
                "Unidad: Sistema",
                "Complejidad: Alta",
                "Entregable: Políticas aplicadas",
                "Alcance: Archivado, conservación y eliminación",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Sistema)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 2,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Archivo operativo",
              "scope": "Ubicación, acceso y costos",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.76,
                "medium": 2.552,
                "high": 3.168
              },
              "notes": [
                "Fase: Implementación",
                "Unidad: Destino",
                "Complejidad: Alta",
                "Entregable: Archivo operativo",
                "Alcance: Ubicación, acceso y costos",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 0.75,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Excepciones registradas",
              "scope": "Litigio, auditoría o necesidad especial",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.66,
                "medium": 0.8580000000000001,
                "high": 1.0230000000000001
              },
              "notes": [
                "Fase: Control",
                "Unidad: Caso",
                "Complejidad: Media",
                "Entregable: Excepciones registradas",
                "Alcance: Litigio, auditoría o necesidad especial",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Caso)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 1,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Política validada",
              "scope": "Conservación, archivo y eliminación",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.88,
                "medium": 1.276,
                "high": 1.584
              },
              "notes": [
                "Fase: Validación",
                "Unidad: Caso",
                "Complejidad: Alta",
                "Entregable: Política validada",
                "Alcance: Conservación, archivo y eliminación",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Caso)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 1,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Responsables definidos",
              "scope": "Propietario, aprobador y periodicidad",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.88,
                "medium": 1.1440000000000001,
                "high": 1.364
              },
              "notes": [
                "Fase: Gobierno",
                "Unidad: Proyecto",
                "Complejidad: Media",
                "Entregable: Responsables definidos",
                "Alcance: Propietario, aprobador y periodicidad",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Documento de retención",
              "scope": "Matriz, reglas y operación",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.32,
                "medium": 1.7160000000000002,
                "high": 2.0460000000000003
              },
              "notes": [
                "Fase: Cierre",
                "Unidad: Proyecto",
                "Complejidad: Media",
                "Entregable: Documento de retención",
                "Alcance: Matriz, reglas y operación",
                "Estado de HH: Preliminar"
              ]
            }
          ],
          "totals": {
            "activityLines": 9,
            "activities": 9,
            "hours": {
              "small": 20.68,
              "medium": 28.864000000000004,
              "high": 35.35399999999999
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
          "sizeMode": "by-size",
          "maturity": "03 · Consolidación digital",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 0.75,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Inventario de seguridad",
              "scope": "Sistemas, aplicaciones, bases y servicios",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.675,
                "medium": 0.8775000000000001,
                "high": 1.0462500000000001
              },
              "notes": [
                "Fase: Diagnóstico",
                "Unidad: Activo",
                "Complejidad: Media",
                "Entregable: Inventario de seguridad",
                "Alcance: Sistemas, aplicaciones, bases y servicios",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Activo)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Línea base",
              "scope": "Configuraciones, puertos, cuentas y políticas",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.35,
                "medium": 1.9575,
                "high": 2.43
              },
              "notes": [
                "Fase: Diagnóstico",
                "Unidad: Entorno",
                "Complejidad: Alta",
                "Entregable: Línea base",
                "Alcance: Configuraciones, puertos, cuentas y políticas",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Entorno)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 0.25,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Matriz de cuentas",
              "scope": "Cuentas activas, privilegios y propietarios",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.225,
                "medium": 0.32625,
                "high": 0.405
              },
              "notes": [
                "Fase: Accesos",
                "Unidad: Cuenta",
                "Complejidad: Alta",
                "Entregable: Matriz de cuentas",
                "Alcance: Cuentas activas, privilegios y propietarios",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Cuenta)",
                "baseQuantity": 1,
                "defaultQuantity": 8,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 0.25,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Cuentas regularizadas",
              "scope": "Cuentas por defecto, huérfanas o excesivas",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.225,
                "medium": 0.29250000000000004,
                "high": 0.34875
              },
              "notes": [
                "Fase: Accesos",
                "Unidad: Cuenta",
                "Complejidad: Media",
                "Entregable: Cuentas regularizadas",
                "Alcance: Cuentas por defecto, huérfanas o excesivas",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Cuenta)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 4,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "SO endurecido",
              "scope": "Servicios, políticas, permisos y auditoría",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 3.6,
                "medium": 5.22,
                "high": 6.48
              },
              "notes": [
                "Fase: Configuración",
                "Unidad: Entorno",
                "Complejidad: Alta",
                "Entregable: SO endurecido",
                "Alcance: Servicios, políticas, permisos y auditoría",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 3,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Aplicación endurecida",
              "scope": "Cabeceras, configuración, secretos y errores",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2.7,
                "medium": 3.915,
                "high": 4.86
              },
              "notes": [
                "Fase: Configuración",
                "Unidad: Aplicación",
                "Complejidad: Alta",
                "Entregable: Aplicación endurecida",
                "Alcance: Cabeceras, configuración, secretos y errores",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 3,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "BD endurecida",
              "scope": "Usuarios, red, cifrado y auditoría",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2.7,
                "medium": 3.915,
                "high": 4.86
              },
              "notes": [
                "Fase: Configuración",
                "Unidad: Base de datos",
                "Complejidad: Alta",
                "Entregable: BD endurecida",
                "Alcance: Usuarios, red, cifrado y auditoría",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Superficie reducida",
              "scope": "Puertos, protocolos y servicios",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.35,
                "medium": 1.9575,
                "high": 2.43
              },
              "notes": [
                "Fase: Red",
                "Unidad: Entorno",
                "Complejidad: Alta",
                "Entregable: Superficie reducida",
                "Alcance: Puertos, protocolos y servicios",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Cifrado validado",
              "scope": "TLS, algoritmos y configuración",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.35,
                "medium": 1.9575,
                "high": 2.43
              },
              "notes": [
                "Fase: Criptografía",
                "Unidad: Entorno",
                "Complejidad: Alta",
                "Entregable: Cifrado validado",
                "Alcance: TLS, algoritmos y configuración",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Auditoría activa",
              "scope": "Accesos, cambios y eventos críticos",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.35,
                "medium": 1.9575,
                "high": 2.43
              },
              "notes": [
                "Fase: Auditoría",
                "Unidad: Entorno",
                "Complejidad: Alta",
                "Entregable: Auditoría activa",
                "Alcance: Accesos, cambios y eventos críticos",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 1,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Checklist validado",
              "scope": "Comparación y evidencias",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.9,
                "medium": 1.305,
                "high": 1.62
              },
              "notes": [
                "Fase: Validación",
                "Unidad: Entorno",
                "Complejidad: Alta",
                "Entregable: Checklist validado",
                "Alcance: Comparación y evidencias",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Entorno)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 0.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Pruebas funcionales",
              "scope": "Operación posterior al hardening",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.45,
                "medium": 0.5850000000000001,
                "high": 0.6975
              },
              "notes": [
                "Fase: Calidad",
                "Unidad: Caso",
                "Complejidad: Media",
                "Entregable: Pruebas funcionales",
                "Alcance: Operación posterior al hardening",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Caso)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 2,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Informe de hardening",
              "scope": "Cambios, excepciones y recomendaciones",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.8,
                "medium": 2.3400000000000003,
                "high": 2.79
              },
              "notes": [
                "Fase: Cierre",
                "Unidad: Proyecto",
                "Complejidad: Media",
                "Entregable: Informe de hardening",
                "Alcance: Cambios, excepciones y recomendaciones",
                "Estado de HH: Preliminar"
              ]
            }
          ],
          "totals": {
            "activityLines": 13,
            "activities": 13,
            "hours": {
              "small": 21.15,
              "medium": 29.5875,
              "high": 36.27
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
          "sizeMode": "by-size",
          "maturity": "03 · Consolidación digital",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 0.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Alcance definido",
              "scope": "Activos, propietarios y criticidad",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.45,
                "medium": 0.5850000000000001,
                "high": 0.6975
              },
              "notes": [
                "Fase: Alcance",
                "Unidad: Activo",
                "Complejidad: Media",
                "Entregable: Alcance definido",
                "Alcance: Activos, propietarios y criticidad",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Activo)",
                "baseQuantity": 1,
                "defaultQuantity": 6,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 0.75,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Accesos preparados",
              "scope": "Credenciales, horarios y respaldo",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.675,
                "medium": 0.8775000000000001,
                "high": 1.0462500000000001
              },
              "notes": [
                "Fase: Preparación",
                "Unidad: Entorno",
                "Complejidad: Media",
                "Entregable: Accesos preparados",
                "Alcance: Credenciales, horarios y respaldo",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Entorno)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 2,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Resultado de escaneo",
              "scope": "Hallazgos técnicos y evidencia",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.8,
                "medium": 2.61,
                "high": 3.24
              },
              "notes": [
                "Fase: Detección",
                "Unidad: Entorno",
                "Complejidad: Alta",
                "Entregable: Resultado de escaneo",
                "Alcance: Hallazgos técnicos y evidencia",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Entorno)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 0.2,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Hallazgos validados",
              "scope": "Evidencia y aplicabilidad",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.18000000000000002,
                "medium": 0.261,
                "high": 0.32400000000000007
              },
              "notes": [
                "Fase: Análisis",
                "Unidad: Hallazgo",
                "Complejidad: Alta",
                "Entregable: Hallazgos validados",
                "Alcance: Evidencia y aplicabilidad",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Hallazgo)",
                "baseQuantity": 1,
                "defaultQuantity": 10,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 0.2,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Matriz de riesgo",
              "scope": "Severidad, exposición e impacto",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.18000000000000002,
                "medium": 0.261,
                "high": 0.32400000000000007
              },
              "notes": [
                "Fase: Riesgo",
                "Unidad: Hallazgo",
                "Complejidad: Alta",
                "Entregable: Matriz de riesgo",
                "Alcance: Severidad, exposición e impacto",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Hallazgo)",
                "baseQuantity": 1,
                "defaultQuantity": 10,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 2,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Plan de remediación",
              "scope": "Orden, responsables, riesgo y reversa",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.8,
                "medium": 2.61,
                "high": 3.24
              },
              "notes": [
                "Fase: Planificación",
                "Unidad: Proyecto",
                "Complejidad: Alta",
                "Entregable: Plan de remediación",
                "Alcance: Orden, responsables, riesgo y reversa",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 1,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Activos parchados",
              "scope": "Respaldo, actualización y validación",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.9,
                "medium": 1.305,
                "high": 1.62
              },
              "notes": [
                "Fase: Remediación",
                "Unidad: Activo",
                "Complejidad: Alta",
                "Entregable: Activos parchados",
                "Alcance: Respaldo, actualización y validación",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Activo)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 1,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Mitigación aplicada",
              "scope": "Cambio compensatorio o configuración",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.9,
                "medium": 1.305,
                "high": 1.62
              },
              "notes": [
                "Fase: Remediación",
                "Unidad: Hallazgo",
                "Complejidad: Alta",
                "Entregable: Mitigación aplicada",
                "Alcance: Cambio compensatorio o configuración",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Hallazgo)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 0.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Operación validada",
              "scope": "Funciones críticas después del parche",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.45,
                "medium": 0.5850000000000001,
                "high": 0.6975
              },
              "notes": [
                "Fase: Calidad",
                "Unidad: Activo",
                "Complejidad: Media",
                "Entregable: Operación validada",
                "Alcance: Funciones críticas después del parche",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Activo)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Hallazgos revalidados",
              "scope": "Cierre o riesgo residual",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.35,
                "medium": 1.9575,
                "high": 2.43
              },
              "notes": [
                "Fase: Revalidación",
                "Unidad: Entorno",
                "Complejidad: Alta",
                "Entregable: Hallazgos revalidados",
                "Alcance: Cierre o riesgo residual",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Entorno)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 2,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Informe de vulnerabilidades",
              "scope": "Estado, riesgo residual y recomendaciones",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.8,
                "medium": 2.3400000000000003,
                "high": 2.79
              },
              "notes": [
                "Fase: Cierre",
                "Unidad: Proyecto",
                "Complejidad: Media",
                "Entregable: Informe de vulnerabilidades",
                "Alcance: Estado, riesgo residual y recomendaciones",
                "Estado de HH: Preliminar"
              ]
            }
          ],
          "totals": {
            "activityLines": 11,
            "activities": 11,
            "hours": {
              "small": 22.950000000000003,
              "medium": 32.129999999999995,
              "high": 39.3975
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
          "sizeMode": "by-size",
          "maturity": "03 · Consolidación digital",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Inventario de accesos",
              "scope": "Usuarios, grupos, permisos y propietarios",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.35,
                "medium": 1.9575,
                "high": 2.43
              },
              "notes": [
                "Fase: Diagnóstico",
                "Unidad: Sistema",
                "Complejidad: Alta",
                "Entregable: Inventario de accesos",
                "Alcance: Usuarios, grupos, permisos y propietarios",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Sistema)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 1,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Modelo RBAC",
              "scope": "Responsabilidades, permisos y conflictos",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.9,
                "medium": 1.305,
                "high": 1.62
              },
              "notes": [
                "Fase: Diseño",
                "Unidad: Rol",
                "Complejidad: Alta",
                "Entregable: Modelo RBAC",
                "Alcance: Responsabilidades, permisos y conflictos",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Rol)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 1,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Matriz de permisos",
              "scope": "Lectura, edición, aprobación y administración",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.9,
                "medium": 1.305,
                "high": 1.62
              },
              "notes": [
                "Fase: Diseño",
                "Unidad: Rol",
                "Complejidad: Alta",
                "Entregable: Matriz de permisos",
                "Alcance: Lectura, edición, aprobación y administración",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Rol)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 3,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "MFA operativo",
              "scope": "Enrolamiento, recuperación y excepción",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2.7,
                "medium": 3.915,
                "high": 4.86
              },
              "notes": [
                "Fase: Autenticación",
                "Unidad: Sistema",
                "Complejidad: Alta",
                "Entregable: MFA operativo",
                "Alcance: Enrolamiento, recuperación y excepción",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Políticas aplicadas",
              "scope": "Complejidad, bloqueo, duración y recuperación",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.35,
                "medium": 1.9575,
                "high": 2.43
              },
              "notes": [
                "Fase: Autenticación",
                "Unidad: Sistema",
                "Complejidad: Alta",
                "Entregable: Políticas aplicadas",
                "Alcance: Complejidad, bloqueo, duración y recuperación",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 1,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Permisos ajustados",
              "scope": "Reducción de privilegios y accesos heredados",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.9,
                "medium": 1.305,
                "high": 1.62
              },
              "notes": [
                "Fase: Autorización",
                "Unidad: Rol",
                "Complejidad: Alta",
                "Entregable: Permisos ajustados",
                "Alcance: Reducción de privilegios y accesos heredados",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Rol)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 2,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Procedimiento JML",
              "scope": "Solicitud, aprobación, ejecución y evidencia",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.8,
                "medium": 2.3400000000000003,
                "high": 2.79
              },
              "notes": [
                "Fase: Ciclo de vida",
                "Unidad: Proceso",
                "Complejidad: Media",
                "Entregable: Procedimiento JML",
                "Alcance: Solicitud, aprobación, ejecución y evidencia",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 0.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Cuentas controladas",
              "scope": "Propietario, secreto, uso y rotación",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.45,
                "medium": 0.6525,
                "high": 0.81
              },
              "notes": [
                "Fase: Cuentas",
                "Unidad: Cuenta",
                "Complejidad: Alta",
                "Entregable: Cuentas controladas",
                "Alcance: Propietario, secreto, uso y rotación",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Cuenta)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Logs de acceso",
              "scope": "Ingreso, fallo, bloqueo y cambios",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.35,
                "medium": 1.9575,
                "high": 2.43
              },
              "notes": [
                "Fase: Auditoría",
                "Unidad: Sistema",
                "Complejidad: Alta",
                "Entregable: Logs de acceso",
                "Alcance: Ingreso, fallo, bloqueo y cambios",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 0.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Casos de acceso",
              "scope": "Permitidos, denegados y recuperación",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.45,
                "medium": 0.6525,
                "high": 0.81
              },
              "notes": [
                "Fase: Calidad",
                "Unidad: Caso",
                "Complejidad: Alta",
                "Entregable: Casos de acceso",
                "Alcance: Permitidos, denegados y recuperación",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Caso)",
                "baseQuantity": 1,
                "defaultQuantity": 8,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 2,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Guía de administración",
              "scope": "Roles, accesos y operación",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.8,
                "medium": 2.3400000000000003,
                "high": 2.79
              },
              "notes": [
                "Fase: Cierre",
                "Unidad: Proyecto",
                "Complejidad: Media",
                "Entregable: Guía de administración",
                "Alcance: Roles, accesos y operación",
                "Estado de HH: Preliminar"
              ]
            }
          ],
          "totals": {
            "activityLines": 11,
            "activities": 11,
            "hours": {
              "small": 26.100000000000005,
              "medium": 37.305,
              "high": 46.080000000000005
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
          "sizeMode": "by-size",
          "maturity": "04 · Evolución digital",
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
              "maturity": "04 · Evolución digital",
              "complexity": "Alta",
              "baseHours": 0.75,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Catálogo de escenarios",
              "scope": "Acceso, malware, fuga e indisponibilidad",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.675,
                "medium": 0.97875,
                "high": 1.215
              },
              "notes": [
                "Fase: Escenarios",
                "Unidad: Escenario",
                "Complejidad: Alta",
                "Entregable: Catálogo de escenarios",
                "Alcance: Acceso, malware, fuga e indisponibilidad",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Escenario)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 0,
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
              "maturity": "04 · Evolución digital",
              "complexity": "Alta",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Matriz de severidad",
              "scope": "Impacto, urgencia y escalamiento",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.35,
                "medium": 1.9575,
                "high": 2.43
              },
              "notes": [
                "Fase: Clasificación",
                "Unidad: Proyecto",
                "Complejidad: Alta",
                "Entregable: Matriz de severidad",
                "Alcance: Impacto, urgencia y escalamiento",
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
              "maturity": "04 · Evolución digital",
              "complexity": "Media",
              "baseHours": 0.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Matriz RACI",
              "scope": "Responsables, suplentes y contactos",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.45,
                "medium": 0.5850000000000001,
                "high": 0.6975
              },
              "notes": [
                "Fase: Organización",
                "Unidad: Rol",
                "Complejidad: Media",
                "Entregable: Matriz RACI",
                "Alcance: Responsables, suplentes y contactos",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Rol)",
                "baseQuantity": 1,
                "defaultQuantity": 5,
                "minimum": 0,
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
              "maturity": "04 · Evolución digital",
              "complexity": "Alta",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Playbooks de análisis",
              "scope": "Evidencia, validación y clasificación",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.35,
                "medium": 1.9575,
                "high": 2.43
              },
              "notes": [
                "Fase: Procedimientos",
                "Unidad: Escenario",
                "Complejidad: Alta",
                "Entregable: Playbooks de análisis",
                "Alcance: Evidencia, validación y clasificación",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Escenario)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 0,
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
              "maturity": "04 · Evolución digital",
              "complexity": "Alta",
              "baseHours": 2,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Playbooks de contención",
              "scope": "Aislamiento, bloqueo y limpieza",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.8,
                "medium": 2.61,
                "high": 3.24
              },
              "notes": [
                "Fase: Procedimientos",
                "Unidad: Escenario",
                "Complejidad: Alta",
                "Entregable: Playbooks de contención",
                "Alcance: Aislamiento, bloqueo y limpieza",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Escenario)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 0,
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
              "maturity": "04 · Evolución digital",
              "complexity": "Alta",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Playbooks de recuperación",
              "scope": "Restauración, validación y retorno",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.35,
                "medium": 1.9575,
                "high": 2.43
              },
              "notes": [
                "Fase: Procedimientos",
                "Unidad: Escenario",
                "Complejidad: Alta",
                "Entregable: Playbooks de recuperación",
                "Alcance: Restauración, validación y retorno",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Escenario)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 0,
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
              "maturity": "04 · Evolución digital",
              "complexity": "Media",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Plan de comunicación",
              "scope": "Interna, cliente y terceros",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.35,
                "medium": 1.7550000000000001,
                "high": 2.0925000000000002
              },
              "notes": [
                "Fase: Comunicación",
                "Unidad: Proyecto",
                "Complejidad: Media",
                "Entregable: Plan de comunicación",
                "Alcance: Interna, cliente y terceros",
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
              "maturity": "04 · Evolución digital",
              "complexity": "Alta",
              "baseHours": 0.75,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Fuentes preparadas",
              "scope": "Logs, respaldos y auditoría",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.675,
                "medium": 0.97875,
                "high": 1.215
              },
              "notes": [
                "Fase: Evidencia",
                "Unidad: Fuente",
                "Complejidad: Alta",
                "Entregable: Fuentes preparadas",
                "Alcance: Logs, respaldos y auditoría",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Fuente)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 0,
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
              "maturity": "04 · Evolución digital",
              "complexity": "Alta",
              "baseHours": 2,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Guion de simulación",
              "scope": "Escenario, decisiones y criterios",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.8,
                "medium": 2.61,
                "high": 3.24
              },
              "notes": [
                "Fase: Simulación",
                "Unidad: Ejercicio",
                "Complejidad: Alta",
                "Entregable: Guion de simulación",
                "Alcance: Escenario, decisiones y criterios",
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
              "maturity": "04 · Evolución digital",
              "complexity": "Alta",
              "baseHours": 3,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Simulación ejecutada",
              "scope": "Tiempos, coordinación y evidencia",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2.7,
                "medium": 3.915,
                "high": 4.86
              },
              "notes": [
                "Fase: Simulación",
                "Unidad: Ejercicio",
                "Complejidad: Alta",
                "Entregable: Simulación ejecutada",
                "Alcance: Tiempos, coordinación y evidencia",
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
              "maturity": "04 · Evolución digital",
              "complexity": "Media",
              "baseHours": 2,
              "reuseType": "Parcial",
              "reuseFactor": 0.9,
              "deliverable": "Plan de mejora",
              "scope": "Hallazgos, acciones y responsables",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.8,
                "medium": 2.3400000000000003,
                "high": 2.79
              },
              "notes": [
                "Fase: Mejora",
                "Unidad: Proyecto",
                "Complejidad: Media",
                "Entregable: Plan de mejora",
                "Alcance: Hallazgos, acciones y responsables",
                "Estado de HH: Preliminar"
              ]
            }
          ],
          "totals": {
            "activityLines": 11,
            "activities": 11,
            "hours": {
              "small": 25.650000000000002,
              "medium": 36.3825,
              "high": 44.82
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
          "sizeMode": "by-size",
          "maturity": "02 · Optimización digital",
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
              "maturity": "02 · Optimización digital",
              "complexity": "Media",
              "baseHours": 0.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Catálogo de atención",
              "scope": "Servicios, solicitudes y exclusiones",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.44,
                "medium": 0.5720000000000001,
                "high": 0.682
              },
              "notes": [
                "Fase: Diseño",
                "Unidad: Servicio",
                "Complejidad: Media",
                "Entregable: Catálogo de atención",
                "Alcance: Servicios, solicitudes y exclusiones",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Servicio)",
                "baseQuantity": 1,
                "defaultQuantity": 6,
                "minimum": 0,
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
              "maturity": "02 · Optimización digital",
              "complexity": "Media",
              "baseHours": 0.75,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Canales definidos",
              "scope": "Formulario, correo o portal",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.66,
                "medium": 0.8580000000000001,
                "high": 1.0230000000000001
              },
              "notes": [
                "Fase: Diseño",
                "Unidad: Canal",
                "Complejidad: Media",
                "Entregable: Canales definidos",
                "Alcance: Formulario, correo o portal",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Canal)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 0,
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
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 2.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Flujo de tickets",
              "scope": "Configuración operativa de estados, asignación y cierre sobre una definición básica.",
              "exclusions": "El diseño formal de procesos ITSM se cotiza en SUP-02.",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2.2,
                "medium": 3.19,
                "high": 3.9600000000000004
              },
              "notes": [
                "Fase: Proceso",
                "Unidad: Proyecto",
                "Complejidad: Alta",
                "Entregable: Flujo de tickets",
                "Alcance: Configuración operativa de estados, asignación y cierre sobre una definición básica.",
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
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 0.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Matriz de prioridad",
              "scope": "Configuración en la herramienta de niveles previamente acordados.",
              "exclusions": "La definición metodológica completa se cotiza en SUP-02.",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.44,
                "medium": 0.638,
                "high": 0.792
              },
              "notes": [
                "Fase: Proceso",
                "Unidad: Nivel",
                "Complejidad: Alta",
                "Entregable: Matriz de prioridad",
                "Alcance: Configuración en la herramienta de niveles previamente acordados.",
                "Exclusiones: La definición metodológica completa se cotiza en SUP-02.",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Nivel)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 0,
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
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 0.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Matriz SLA",
              "scope": "Configuración de tiempos de respuesta, resolución y cobertura en la herramienta.",
              "exclusions": "La definición y gobierno formal de SLA se cotizan en SUP-02.",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.44,
                "medium": 0.638,
                "high": 0.792
              },
              "notes": [
                "Fase: SLA",
                "Unidad: Servicio",
                "Complejidad: Alta",
                "Entregable: Matriz SLA",
                "Alcance: Configuración de tiempos de respuesta, resolución y cobertura en la herramienta.",
                "Exclusiones: La definición y gobierno formal de SLA se cotizan en SUP-02.",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Servicio)",
                "baseQuantity": 1,
                "defaultQuantity": 6,
                "minimum": 0,
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
              "maturity": "02 · Optimización digital",
              "complexity": "Media",
              "baseHours": 1,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Formularios operativos",
              "scope": "Campos, validaciones y clasificación",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.88,
                "medium": 1.1440000000000001,
                "high": 1.364
              },
              "notes": [
                "Fase: Configuración",
                "Unidad: Formulario",
                "Complejidad: Media",
                "Entregable: Formularios operativos",
                "Alcance: Campos, validaciones y clasificación",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Formulario)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 0,
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
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Flujos configurados",
              "scope": "Asignación, notificación y escalamiento",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.32,
                "medium": 1.914,
                "high": 2.3760000000000003
              },
              "notes": [
                "Fase: Configuración",
                "Unidad: Flujo",
                "Complejidad: Alta",
                "Entregable: Flujos configurados",
                "Alcance: Asignación, notificación y escalamiento",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Flujo)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 0,
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
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 0.75,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Accesos configurados",
              "scope": "Agentes, administradores y solicitantes",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.66,
                "medium": 0.957,
                "high": 1.1880000000000002
              },
              "notes": [
                "Fase: Configuración",
                "Unidad: Rol",
                "Complejidad: Alta",
                "Entregable: Accesos configurados",
                "Alcance: Agentes, administradores y solicitantes",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Rol)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 0,
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
              "maturity": "02 · Optimización digital",
              "complexity": "Baja",
              "baseHours": 0.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Plantillas",
              "scope": "Recepción, actualización y cierre",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.44,
                "medium": 0.506,
                "high": 0.5720000000000001
              },
              "notes": [
                "Fase: Comunicación",
                "Unidad: Plantilla",
                "Complejidad: Baja",
                "Entregable: Plantillas",
                "Alcance: Recepción, actualización y cierre",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Plantilla)",
                "baseQuantity": 1,
                "defaultQuantity": 5,
                "minimum": 0,
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
              "maturity": "02 · Optimización digital",
              "complexity": "Media",
              "baseHours": 2,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Reporte operativo",
              "scope": "Vista inicial de volumen, tiempos y estado para validar la operación.",
              "exclusions": "La reportería operacional avanzada se contabiliza en SUP2-010.",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.76,
                "medium": 2.2880000000000003,
                "high": 2.728
              },
              "notes": [
                "Fase: Reportes",
                "Unidad: Reporte",
                "Complejidad: Media",
                "Entregable: Reporte operativo",
                "Alcance: Vista inicial de volumen, tiempos y estado para validar la operación.",
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
              "maturity": "02 · Optimización digital",
              "complexity": "Media",
              "baseHours": 0.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Piloto validado",
              "scope": "Creación, asignación, atención y cierre",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.44,
                "medium": 0.5720000000000001,
                "high": 0.682
              },
              "notes": [
                "Fase: Calidad",
                "Unidad: Caso",
                "Complejidad: Media",
                "Entregable: Piloto validado",
                "Alcance: Creación, asignación, atención y cierre",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Caso)",
                "baseQuantity": 1,
                "defaultQuantity": 6,
                "minimum": 0,
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
              "maturity": "02 · Optimización digital",
              "complexity": "Media",
              "baseHours": 2,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Mesa de ayuda entregada",
              "scope": "Uso, administración y soporte",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.76,
                "medium": 2.2880000000000003,
                "high": 2.728
              },
              "notes": [
                "Fase: Entrega",
                "Unidad: Sesión",
                "Complejidad: Media",
                "Entregable: Mesa de ayuda entregada",
                "Alcance: Uso, administración y soporte",
                "Estado de HH: Preliminar"
              ]
            }
          ],
          "totals": {
            "activityLines": 12,
            "activities": 12,
            "hours": {
              "small": 26.180000000000003,
              "medium": 35.387,
              "high": 42.834
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
          "sizeMode": "by-size",
          "maturity": "03 · Consolidación digital",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 0.75,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Alcance ITSM",
              "scope": "Incidente, solicitud, problema y cambio",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.66,
                "medium": 0.957,
                "high": 1.1880000000000002
              },
              "notes": [
                "Fase: Gobierno",
                "Unidad: Proceso",
                "Complejidad: Alta",
                "Entregable: Alcance ITSM",
                "Alcance: Incidente, solicitud, problema y cambio",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Proceso)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 2,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Proceso de incidentes",
              "scope": "Registro, clasificación, escalamiento y cierre",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.76,
                "medium": 2.552,
                "high": 3.168
              },
              "notes": [
                "Fase: Proceso",
                "Unidad: Proceso",
                "Complejidad: Alta",
                "Entregable: Proceso de incidentes",
                "Alcance: Registro, clasificación, escalamiento y cierre",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Proceso de solicitudes",
              "scope": "Catálogo, aprobación y entrega",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.32,
                "medium": 1.7160000000000002,
                "high": 2.0460000000000003
              },
              "notes": [
                "Fase: Proceso",
                "Unidad: Proceso",
                "Complejidad: Media",
                "Entregable: Proceso de solicitudes",
                "Alcance: Catálogo, aprobación y entrega",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 2,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Proceso de cambios",
              "scope": "Riesgo, aprobación, reversa y validación",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.76,
                "medium": 2.552,
                "high": 3.168
              },
              "notes": [
                "Fase: Proceso",
                "Unidad: Proceso",
                "Complejidad: Alta",
                "Entregable: Proceso de cambios",
                "Alcance: Riesgo, aprobación, reversa y validación",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Proceso de problemas",
              "scope": "Causa raíz y error conocido",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.32,
                "medium": 1.914,
                "high": 2.3760000000000003
              },
              "notes": [
                "Fase: Proceso",
                "Unidad: Proceso",
                "Complejidad: Alta",
                "Entregable: Proceso de problemas",
                "Alcance: Causa raíz y error conocido",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 0.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Matriz RACI",
              "scope": "Responsables y escalamiento",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.44,
                "medium": 0.638,
                "high": 0.792
              },
              "notes": [
                "Fase: Roles",
                "Unidad: Rol",
                "Complejidad: Alta",
                "Entregable: Matriz RACI",
                "Alcance: Responsables y escalamiento",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Rol)",
                "baseQuantity": 1,
                "defaultQuantity": 5,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Herramienta configurada",
              "scope": "Campos, vistas, estados y permisos",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.32,
                "medium": 1.914,
                "high": 2.3760000000000003
              },
              "notes": [
                "Fase: Herramienta",
                "Unidad: Proceso",
                "Complejidad: Alta",
                "Entregable: Herramienta configurada",
                "Alcance: Campos, vistas, estados y permisos",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Proceso)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 0.75,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Reglas automáticas",
              "scope": "Condiciones, responsables y avisos",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.66,
                "medium": 0.957,
                "high": 1.1880000000000002
              },
              "notes": [
                "Fase: Automatización",
                "Unidad: Regla",
                "Complejidad: Alta",
                "Entregable: Reglas automáticas",
                "Alcance: Condiciones, responsables y avisos",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Regla)",
                "baseQuantity": 1,
                "defaultQuantity": 5,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 0.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Catálogo de KPIs",
              "scope": "Volumen, cumplimiento y tendencia",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.44,
                "medium": 0.5720000000000001,
                "high": 0.682
              },
              "notes": [
                "Fase: Indicadores",
                "Unidad: Indicador",
                "Complejidad: Media",
                "Entregable: Catálogo de KPIs",
                "Alcance: Volumen, cumplimiento y tendencia",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Indicador)",
                "baseQuantity": 1,
                "defaultQuantity": 6,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Reportes ITSM",
              "scope": "Reportes periódicos por estado, SLA, carga, tendencia y cumplimiento.",
              "exclusions": "No vuelve a incluir el reporte inicial de puesta en marcha de SUP1-010.",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.32,
                "medium": 1.7160000000000002,
                "high": 2.0460000000000003
              },
              "notes": [
                "Fase: Reportes",
                "Unidad: Reporte",
                "Complejidad: Media",
                "Entregable: Reportes ITSM",
                "Alcance: Reportes periódicos por estado, SLA, carga, tendencia y cumplimiento.",
                "Exclusiones: No vuelve a incluir el reporte inicial de puesta en marcha de SUP1-010.",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Reporte)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 0.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Piloto ejecutado",
              "scope": "Casos y retroalimentación",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.44,
                "medium": 0.638,
                "high": 0.792
              },
              "notes": [
                "Fase: Piloto",
                "Unidad: Caso",
                "Complejidad: Alta",
                "Entregable: Piloto ejecutado",
                "Alcance: Casos y retroalimentación",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Caso)",
                "baseQuantity": 1,
                "defaultQuantity": 8,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 2,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Procesos entregados",
              "scope": "Procedimientos y mejoras",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.76,
                "medium": 2.2880000000000003,
                "high": 2.728
              },
              "notes": [
                "Fase: Cierre",
                "Unidad: Proyecto",
                "Complejidad: Media",
                "Entregable: Procesos entregados",
                "Alcance: Procedimientos y mejoras",
                "Estado de HH: Preliminar"
              ]
            }
          ],
          "totals": {
            "activityLines": 12,
            "activities": 12,
            "hours": {
              "small": 25.520000000000003,
              "medium": 35.75,
              "high": 43.846000000000004
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
          "sizeMode": "by-size",
          "maturity": "03 · Consolidación digital",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 0.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Plan mensual",
              "scope": "Prioridades, responsables y consumo",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.44,
                "medium": 0.5720000000000001,
                "high": 0.682
              },
              "notes": [
                "Fase: Gestión",
                "Unidad: Sesión",
                "Complejidad: Media",
                "Entregable: Plan mensual",
                "Alcance: Prioridades, responsables y consumo",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Sesión)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 0.25,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Tickets clasificados",
              "scope": "Impacto, urgencia y estimación",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.22,
                "medium": 0.28600000000000003,
                "high": 0.341
              },
              "notes": [
                "Fase: Gestión",
                "Unidad: Ticket",
                "Complejidad: Media",
                "Entregable: Tickets clasificados",
                "Alcance: Impacto, urgencia y estimación",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Ticket)",
                "baseQuantity": 1,
                "defaultQuantity": 8,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Incidentes resueltos",
              "scope": "Diagnóstico, corrección y cierre",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.32,
                "medium": 1.7160000000000002,
                "high": 2.0460000000000003
              },
              "notes": [
                "Fase: Soporte",
                "Unidad: Ticket",
                "Complejidad: Media",
                "Entregable: Incidentes resueltos",
                "Alcance: Diagnóstico, corrección y cierre",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Ticket)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 1,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Solicitudes atendidas",
              "scope": "Configuración o apoyo funcional",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.88,
                "medium": 1.1440000000000001,
                "high": 1.364
              },
              "notes": [
                "Fase: Soporte",
                "Unidad: Ticket",
                "Complejidad: Media",
                "Entregable: Solicitudes atendidas",
                "Alcance: Configuración o apoyo funcional",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Ticket)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Alta",
              "baseHours": 2,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Cambios menores",
              "scope": "Ajuste acotado con pruebas",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.76,
                "medium": 2.552,
                "high": 3.168
              },
              "notes": [
                "Fase: Evolución",
                "Unidad: Cambio",
                "Complejidad: Alta",
                "Entregable: Cambios menores",
                "Alcance: Ajuste acotado con pruebas",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Cambio)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 0.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Revisión preventiva",
              "scope": "Eventos y riesgos recurrentes",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.44,
                "medium": 0.5720000000000001,
                "high": 0.682
              },
              "notes": [
                "Fase: Prevención",
                "Unidad: Sesión",
                "Complejidad: Media",
                "Entregable: Revisión preventiva",
                "Alcance: Eventos y riesgos recurrentes",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Sesión)",
                "baseQuantity": 1,
                "defaultQuantity": 4,
                "minimum": 0,
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Baja",
              "baseHours": 1,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Documentación actualizada",
              "scope": "Cambios y soluciones recurrentes",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.88,
                "medium": 1.012,
                "high": 1.1440000000000001
              },
              "notes": [
                "Fase: Documentación",
                "Unidad: Documento",
                "Complejidad: Baja",
                "Entregable: Documentación actualizada",
                "Alcance: Cambios y soluciones recurrentes",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Reporte mensual",
              "scope": "Consumo, cumplimiento y recomendaciones",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.32,
                "medium": 1.7160000000000002,
                "high": 2.0460000000000003
              },
              "notes": [
                "Fase: Reporte",
                "Unidad: Reporte",
                "Complejidad: Media",
                "Entregable: Reporte mensual",
                "Alcance: Consumo, cumplimiento y recomendaciones",
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
              "maturity": "03 · Consolidación digital",
              "complexity": "Media",
              "baseHours": 1,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Seguimiento",
              "scope": "Dependencias, accesos y coordinaciones",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.88,
                "medium": 1.1440000000000001,
                "high": 1.364
              },
              "notes": [
                "Fase: Coordinación",
                "Unidad: Hora",
                "Complejidad: Media",
                "Entregable: Seguimiento",
                "Alcance: Dependencias, accesos y coordinaciones",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Hora)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 0,
                "editable": true
              }
            }
          ],
          "totals": {
            "activityLines": 9,
            "activities": 9,
            "hours": {
              "small": 19.8,
              "medium": 26.136000000000003,
              "high": 31.35
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
          "sizeMode": "by-size",
          "maturity": "02 · Optimización digital",
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
              "maturity": "02 · Optimización digital",
              "complexity": "Media",
              "baseHours": 0.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Inventario documental",
              "scope": "Documentos, responsables y vigencia",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.44,
                "medium": 0.5720000000000001,
                "high": 0.682
              },
              "notes": [
                "Fase: Inventario",
                "Unidad: Fuente",
                "Complejidad: Media",
                "Entregable: Inventario documental",
                "Alcance: Documentos, responsables y vigencia",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Fuente)",
                "baseQuantity": 1,
                "defaultQuantity": 6,
                "minimum": 0,
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
              "maturity": "02 · Optimización digital",
              "complexity": "Media",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Arquitectura documental",
              "scope": "Categorías, nomenclatura y acceso",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.32,
                "medium": 1.7160000000000002,
                "high": 2.0460000000000003
              },
              "notes": [
                "Fase: Diseño",
                "Unidad: Proyecto",
                "Complejidad: Media",
                "Entregable: Arquitectura documental",
                "Alcance: Categorías, nomenclatura y acceso",
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
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Reglas documentales",
              "scope": "Estados, responsables y publicación",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.32,
                "medium": 1.914,
                "high": 2.3760000000000003
              },
              "notes": [
                "Fase: Gobierno",
                "Unidad: Proyecto",
                "Complejidad: Alta",
                "Entregable: Reglas documentales",
                "Alcance: Estados, responsables y publicación",
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
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 4,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Manual de usuario",
              "scope": "Flujos, pantallas y preguntas frecuentes",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 3.52,
                "medium": 5.104,
                "high": 6.336
              },
              "notes": [
                "Fase: Documentación",
                "Unidad: Documento",
                "Complejidad: Alta",
                "Entregable: Manual de usuario",
                "Alcance: Flujos, pantallas y preguntas frecuentes",
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
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 4,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Manual técnico",
              "scope": "Arquitectura, instalación y operación",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 3.52,
                "medium": 5.104,
                "high": 6.336
              },
              "notes": [
                "Fase: Documentación",
                "Unidad: Documento",
                "Complejidad: Alta",
                "Entregable: Manual técnico",
                "Alcance: Arquitectura, instalación y operación",
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
              "maturity": "02 · Optimización digital",
              "complexity": "Media",
              "baseHours": 2,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Procedimientos",
              "scope": "Objetivo, pasos, responsables y evidencia",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.76,
                "medium": 2.2880000000000003,
                "high": 2.728
              },
              "notes": [
                "Fase: Documentación",
                "Unidad: Documento",
                "Complejidad: Media",
                "Entregable: Procedimientos",
                "Alcance: Objetivo, pasos, responsables y evidencia",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Documento)",
                "baseQuantity": 1,
                "defaultQuantity": 3,
                "minimum": 0,
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
              "maturity": "02 · Optimización digital",
              "complexity": "Alta",
              "baseHours": 2.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Runbooks",
              "scope": "Eventos frecuentes, diagnóstico y escalamiento",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 2.2,
                "medium": 3.19,
                "high": 3.9600000000000004
              },
              "notes": [
                "Fase: Documentación",
                "Unidad: Documento",
                "Complejidad: Alta",
                "Entregable: Runbooks",
                "Alcance: Eventos frecuentes, diagnóstico y escalamiento",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Documento)",
                "baseQuantity": 1,
                "defaultQuantity": 2,
                "minimum": 0,
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
              "maturity": "02 · Optimización digital",
              "complexity": "Media",
              "baseHours": 0.75,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Artículos",
              "scope": "Problema, solución y palabras clave",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.66,
                "medium": 0.8580000000000001,
                "high": 1.0230000000000001
              },
              "notes": [
                "Fase: Contenido",
                "Unidad: Artículo",
                "Complejidad: Media",
                "Entregable: Artículos",
                "Alcance: Problema, solución y palabras clave",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Artículo)",
                "baseQuantity": 1,
                "defaultQuantity": 5,
                "minimum": 0,
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
              "maturity": "02 · Optimización digital",
              "complexity": "Media",
              "baseHours": 2,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Base publicada",
              "scope": "Estructura, permisos y búsqueda",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.76,
                "medium": 2.2880000000000003,
                "high": 2.728
              },
              "notes": [
                "Fase: Publicación",
                "Unidad: Entorno",
                "Complejidad: Media",
                "Entregable: Base publicada",
                "Alcance: Estructura, permisos y búsqueda",
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
              "maturity": "02 · Optimización digital",
              "complexity": "Media",
              "baseHours": 0.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Documentos revisados",
              "scope": "Exactitud, claridad y vigencia",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 0.44,
                "medium": 0.5720000000000001,
                "high": 0.682
              },
              "notes": [
                "Fase: Calidad",
                "Unidad: Documento",
                "Complejidad: Media",
                "Entregable: Documentos revisados",
                "Alcance: Exactitud, claridad y vigencia",
                "Estado de HH: Preliminar"
              ],
              "quantityRule": {
                "unit": "custom",
                "label": "Cantidad (Documento)",
                "baseQuantity": 1,
                "defaultQuantity": 5,
                "minimum": 0,
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
              "maturity": "02 · Optimización digital",
              "complexity": "Media",
              "baseHours": 1.5,
              "reuseType": "Parcial",
              "reuseFactor": 0.88,
              "deliverable": "Transferencia realizada",
              "scope": "Uso, mantenimiento y responsabilidades",
              "validationStatus": "Preliminar",
              "calibrationSource": "Estimación técnica ISM · Validar",
              "hours": {
                "small": 1.32,
                "medium": 1.7160000000000002,
                "high": 2.0460000000000003
              },
              "notes": [
                "Fase: Entrega",
                "Unidad: Sesión",
                "Complejidad: Media",
                "Entregable: Transferencia realizada",
                "Alcance: Uso, mantenimiento y responsabilidades",
                "Estado de HH: Preliminar"
              ]
            }
          ],
          "totals": {
            "activityLines": 11,
            "activities": 11,
            "hours": {
              "small": 25.300000000000004,
              "medium": 34.276,
              "high": 41.525
            }
          }
        }
      ]
    }
  ],
  "summary": {
    "serviceCodes": 21,
    "activityLines": 282,
    "activities": 282
  },
  "sizeDefinitions": {
    "small": "Inicial: implementación funcional con alcance acotado y componentes conocidos.",
    "medium": "Estándar: alcance recomendado, con validaciones, coordinación y personalización media.",
    "high": "Avanzado: mayor personalización, integración, datos, seguridad, riesgo y ciclos de validación."
  },
  "notes": [
    "Catálogo técnico ISM Developer versión 2.1.",
    "Las horas del documento fuente se encuentran en estado preliminar hasta ser calibradas con proyectos reales.",
    "Las actividades obligatorias no pueden excluirse cuando el servicio está seleccionado.",
    "Las actividades no incluidas en el alcance base comienzan desactivadas."
  ]
};
