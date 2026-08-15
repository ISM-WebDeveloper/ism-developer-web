/**
 * Catálogo técnico mínimo para la Guía Web ISM.
 *
 * ARCHIVO GENERADO: no editar manualmente.
 * Fuente: apps/configurador-servicios/catalog/Catalogo_Tecnico_Servicios_ISM_Developer_v2_1_Auditado.xlsx
 * Regeneración: npm --prefix apps/configurador-servicios run catalog:ism
 */
export const ismGuideTechnicalCatalog = {
  "schemaVersion": "1.0",
  "catalogVersion": "2.1",
  "contingencyRate": 0.2,
  "area": {
    "id": "desarrollo-implementacion",
    "name": "Desarrollo e Implementación",
    "services": [
      {
        "code": "WEB-01",
        "name": "Sitio web profesional",
        "maturity": "01 · Primeros pasos digitales",
        "activities": [
          {
            "code": "WEB-001",
            "name": "Reunión inicial y levantamiento de objetivos",
            "phase": "Diagnóstico",
            "unitLabel": "Proyecto",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 1.5,
              "medium": 1.9500000000000002,
              "high": 2.325
            },
            "defaultQuantity": 1
          },
          {
            "code": "WEB-002",
            "name": "Inventario de contenidos y recursos disponibles",
            "phase": "Diagnóstico",
            "unitLabel": "Proyecto",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 1,
              "medium": 1.15,
              "high": 1.3
            },
            "defaultQuantity": 1
          },
          {
            "code": "WEB-003",
            "name": "Definición del mapa de navegación",
            "phase": "Arquitectura",
            "unitLabel": "Proyecto",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 0.8,
              "medium": 1.04,
              "high": 1.2400000000000002
            },
            "defaultQuantity": 1
          },
          {
            "code": "WEB-004",
            "name": "Wireframe general de la página principal",
            "phase": "Arquitectura",
            "unitLabel": "Proyecto",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 1.2000000000000002,
              "medium": 1.5600000000000003,
              "high": 1.8600000000000003
            },
            "defaultQuantity": 1
          },
          {
            "code": "WEB-005",
            "name": "Creación del proyecto, repositorio y estructura base",
            "phase": "Preparación",
            "unitLabel": "Proyecto",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 0.55,
              "medium": 0.6325,
              "high": 0.7150000000000001
            },
            "defaultQuantity": 0.5
          },
          {
            "code": "WEB-006",
            "name": "Configuración de estilos, tipografías y tokens de marca",
            "phase": "Preparación",
            "unitLabel": "Proyecto",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 0.8999999999999999,
              "medium": 1.17,
              "high": 1.3949999999999998
            },
            "defaultQuantity": 1
          },
          {
            "code": "WEB-007",
            "name": "Desarrollo de navbar y menú móvil",
            "phase": "Interfaz",
            "unitLabel": "Componente",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 0.8250000000000001,
              "medium": 1.0725000000000002,
              "high": 1.27875
            },
            "defaultQuantity": 1
          },
          {
            "code": "WEB-008",
            "name": "Diseño y desarrollo del hero principal",
            "phase": "Interfaz",
            "unitLabel": "Componente",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 1.5,
              "medium": 2.175,
              "high": 2.7
            },
            "defaultQuantity": 1
          },
          {
            "code": "WEB-009",
            "name": "Desarrollo de sección estándar de contenido",
            "phase": "Interfaz",
            "unitLabel": "Sección",
            "defaultIncluded": true,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 0.75,
              "medium": 0.9750000000000001,
              "high": 1.1625
            },
            "defaultQuantity": 1
          },
          {
            "code": "WEB-010",
            "name": "Desarrollo de sección de servicios con tarjetas",
            "phase": "Interfaz",
            "unitLabel": "Sección",
            "defaultIncluded": true,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 1.4,
              "medium": 1.8199999999999998,
              "high": 2.17
            },
            "defaultQuantity": 1
          },
          {
            "code": "WEB-011",
            "name": "Desarrollo de galería o portafolio",
            "phase": "Interfaz",
            "unitLabel": "Sección",
            "defaultIncluded": false,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 2,
              "medium": 2.9,
              "high": 3.6
            },
            "defaultQuantity": 1
          },
          {
            "code": "WEB-012",
            "name": "Desarrollo de testimonios o casos de éxito",
            "phase": "Interfaz",
            "unitLabel": "Sección",
            "defaultIncluded": false,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 0.75,
              "medium": 0.9750000000000001,
              "high": 1.1625
            },
            "defaultQuantity": 1
          },
          {
            "code": "WEB-013",
            "name": "Desarrollo de preguntas frecuentes",
            "phase": "Interfaz",
            "unitLabel": "Sección",
            "defaultIncluded": false,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 0.75,
              "medium": 0.8624999999999999,
              "high": 0.9750000000000001
            },
            "defaultQuantity": 1
          },
          {
            "code": "WEB-014",
            "name": "Desarrollo de formulario de contacto",
            "phase": "Interfaz",
            "unitLabel": "Formulario",
            "defaultIncluded": true,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 1.875,
              "medium": 2.71875,
              "high": 3.375
            },
            "defaultQuantity": 1
          },
          {
            "code": "WEB-015",
            "name": "Desarrollo de footer",
            "phase": "Interfaz",
            "unitLabel": "Componente",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 0.41250000000000003,
              "medium": 0.474375,
              "high": 0.5362500000000001
            },
            "defaultQuantity": 1
          },
          {
            "code": "WEB-016",
            "name": "Desarrollo de página interna estándar",
            "phase": "Página interna",
            "unitLabel": "Página",
            "defaultIncluded": false,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 1.875,
              "medium": 2.4375,
              "high": 2.90625
            },
            "defaultQuantity": 1
          },
          {
            "code": "WEB-017",
            "name": "Integración de WhatsApp",
            "phase": "Integración",
            "unitLabel": "Integración",
            "defaultIncluded": true,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 0.25,
              "medium": 0.2875,
              "high": 0.325
            },
            "defaultQuantity": 1
          },
          {
            "code": "WEB-018",
            "name": "Integración de redes sociales",
            "phase": "Integración",
            "unitLabel": "Integración",
            "defaultIncluded": true,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 0.25,
              "medium": 0.2875,
              "high": 0.325
            },
            "defaultQuantity": 1
          },
          {
            "code": "WEB-019",
            "name": "Integración de Google Maps",
            "phase": "Integración",
            "unitLabel": "Integración",
            "defaultIncluded": true,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 0.275,
              "medium": 0.31625,
              "high": 0.35750000000000004
            },
            "defaultQuantity": 1
          },
          {
            "code": "WEB-020",
            "name": "Configuración de envío de formulario por correo",
            "phase": "Integración",
            "unitLabel": "Integración",
            "defaultIncluded": true,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 1.6,
              "medium": 2.32,
              "high": 2.8800000000000003
            },
            "defaultQuantity": 1
          },
          {
            "code": "WEB-021",
            "name": "Carga y formato de contenidos entregados",
            "phase": "Contenido",
            "unitLabel": "Página",
            "defaultIncluded": true,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 1.125,
              "medium": 1.4625000000000001,
              "high": 1.7437500000000001
            },
            "defaultQuantity": 1
          },
          {
            "code": "WEB-022",
            "name": "Implementación responsive integral",
            "phase": "Responsive",
            "unitLabel": "Proyecto",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 2.4000000000000004,
              "medium": 3.4800000000000004,
              "high": 4.320000000000001
            },
            "defaultQuantity": 1.5
          },
          {
            "code": "WEB-023",
            "name": "SEO técnico inicial y metadatos",
            "phase": "SEO",
            "unitLabel": "Proyecto",
            "defaultIncluded": true,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 1.125,
              "medium": 1.4625000000000001,
              "high": 1.7437500000000001
            },
            "defaultQuantity": 1
          },
          {
            "code": "WEB-024",
            "name": "Sitemap, robots y estructura indexable",
            "phase": "SEO",
            "unitLabel": "Proyecto",
            "defaultIncluded": true,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 0.41250000000000003,
              "medium": 0.474375,
              "high": 0.5362500000000001
            },
            "defaultQuantity": 0.5
          },
          {
            "code": "WEB-025",
            "name": "Datos estructurados básicos",
            "phase": "SEO",
            "unitLabel": "Proyecto",
            "defaultIncluded": false,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 0.75,
              "medium": 0.9750000000000001,
              "high": 1.1625
            },
            "defaultQuantity": 1
          },
          {
            "code": "WEB-026",
            "name": "Optimización de imágenes y recursos",
            "phase": "Rendimiento",
            "unitLabel": "Proyecto",
            "defaultIncluded": true,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 1.0499999999999998,
              "medium": 1.3649999999999998,
              "high": 1.6274999999999997
            },
            "defaultQuantity": 1
          },
          {
            "code": "WEB-027",
            "name": "Revisión de accesibilidad básica",
            "phase": "Accesibilidad",
            "unitLabel": "Proyecto",
            "defaultIncluded": true,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 0.9375,
              "medium": 1.21875,
              "high": 1.453125
            },
            "defaultQuantity": 1
          },
          {
            "code": "WEB-028",
            "name": "Configuración de dominio, HTTPS y SSL",
            "phase": "Seguridad",
            "unitLabel": "Entorno",
            "defaultIncluded": true,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 1.125,
              "medium": 1.4625000000000001,
              "high": 1.7437500000000001
            },
            "defaultQuantity": 1
          },
          {
            "code": "WEB-029",
            "name": "Configuración de analítica básica",
            "phase": "Analítica",
            "unitLabel": "Integración",
            "defaultIncluded": false,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 0.75,
              "medium": 0.9750000000000001,
              "high": 1.1625
            },
            "defaultQuantity": 1
          },
          {
            "code": "WEB-030",
            "name": "Pruebas funcionales y de navegación",
            "phase": "Calidad",
            "unitLabel": "Proyecto",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 1.5,
              "medium": 1.9500000000000002,
              "high": 2.325
            },
            "defaultQuantity": 1
          },
          {
            "code": "WEB-031",
            "name": "Validación responsive y compatibilidad entre navegadores",
            "phase": "Calidad",
            "unitLabel": "Proyecto",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 1.25,
              "medium": 1.625,
              "high": 1.9375
            },
            "defaultQuantity": 1
          },
          {
            "code": "WEB-032",
            "name": "Ciclo de correcciones posterior a revisión",
            "phase": "Cierre",
            "unitLabel": "Ciclo",
            "defaultIncluded": true,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 2,
              "medium": 2.6,
              "high": 3.1
            },
            "defaultQuantity": 1
          },
          {
            "code": "WEB-033",
            "name": "Despliegue en producción",
            "phase": "Publicación",
            "unitLabel": "Entorno",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 0.75,
              "medium": 0.9750000000000001,
              "high": 1.1625
            },
            "defaultQuantity": 1
          },
          {
            "code": "WEB-034",
            "name": "Documentación, accesos y cierre",
            "phase": "Entrega",
            "unitLabel": "Proyecto",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 0.75,
              "medium": 0.8624999999999999,
              "high": 0.9750000000000001
            },
            "defaultQuantity": 1
          }
        ]
      },
      {
        "code": "APP-01",
        "name": "Sistema web o aplicación de gestión",
        "maturity": "02 · Optimización digital",
        "activities": [
          {
            "code": "APP-001",
            "name": "Levantamiento de procesos, usuarios y objetivos",
            "phase": "Descubrimiento",
            "unitLabel": "Proyecto",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 3,
              "medium": 4.35,
              "high": 5.4
            },
            "defaultQuantity": 1
          },
          {
            "code": "APP-002",
            "name": "Definición de alcance funcional y criterios de aceptación",
            "phase": "Descubrimiento",
            "unitLabel": "Proyecto",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 3,
              "medium": 4.35,
              "high": 5.4
            },
            "defaultQuantity": 1
          },
          {
            "code": "APP-003",
            "name": "Modelamiento de entidades y relaciones",
            "phase": "Arquitectura",
            "unitLabel": "Proyecto",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 2.975,
              "medium": 4.31375,
              "high": 5.355
            },
            "defaultQuantity": 1.5
          },
          {
            "code": "APP-004",
            "name": "Diseño de roles y permisos",
            "phase": "Arquitectura",
            "unitLabel": "Rol",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 1,
              "medium": 1.45,
              "high": 1.8
            },
            "defaultQuantity": 1.5
          },
          {
            "code": "APP-005",
            "name": "Arquitectura técnica y ambientes",
            "phase": "Arquitectura",
            "unitLabel": "Proyecto",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 2.125,
              "medium": 3.08125,
              "high": 3.825
            },
            "defaultQuantity": 1.5
          },
          {
            "code": "APP-006",
            "name": "Diseño del mapa de navegación y flujos principales",
            "phase": "UX/UI",
            "unitLabel": "Proyecto",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 2,
              "medium": 2.9,
              "high": 3.6
            },
            "defaultQuantity": 1.5
          },
          {
            "code": "APP-007",
            "name": "Wireframe de pantalla estándar",
            "phase": "UX/UI",
            "unitLabel": "Pantalla",
            "defaultIncluded": true,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 0.75,
              "medium": 0.9750000000000001,
              "high": 1.1625
            },
            "defaultQuantity": 3
          },
          {
            "code": "APP-008",
            "name": "Configuración del proyecto, repositorio y entornos",
            "phase": "Preparación",
            "unitLabel": "Proyecto",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 1.2,
              "medium": 1.56,
              "high": 1.8599999999999999
            },
            "defaultQuantity": 1.5
          },
          {
            "code": "APP-009",
            "name": "Implementación de layout, navegación y sistema visual",
            "phase": "Frontend",
            "unitLabel": "Proyecto",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 2.6,
              "medium": 3.77,
              "high": 4.680000000000001
            },
            "defaultQuantity": 1.5
          },
          {
            "code": "APP-010",
            "name": "Implementación de interfaz CRUD estándar",
            "phase": "Frontend",
            "unitLabel": "Pantalla",
            "defaultIncluded": true,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 3.2,
              "medium": 4.64,
              "high": 5.760000000000001
            },
            "defaultQuantity": 3
          },
          {
            "code": "APP-011",
            "name": "Dashboard con indicadores",
            "phase": "Frontend",
            "unitLabel": "Dashboard",
            "defaultIncluded": false,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 4.25,
              "medium": 6.1625,
              "high": 7.65
            },
            "defaultQuantity": 1.5
          },
          {
            "code": "APP-012",
            "name": "Configuración de base de datos y migraciones",
            "phase": "Backend",
            "unitLabel": "Proyecto",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 2.8000000000000003,
              "medium": 4.0600000000000005,
              "high": 5.040000000000001
            },
            "defaultQuantity": 3
          },
          {
            "code": "APP-013",
            "name": "Implementación de servicio CRUD backend",
            "phase": "Backend",
            "unitLabel": "Entidad",
            "defaultIncluded": true,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 2.4000000000000004,
              "medium": 3.4800000000000004,
              "high": 4.320000000000001
            },
            "defaultQuantity": 2
          },
          {
            "code": "APP-014",
            "name": "Autenticación y recuperación de acceso",
            "phase": "Seguridad",
            "unitLabel": "Sistema",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 4.25,
              "medium": 6.1625,
              "high": 7.65
            },
            "defaultQuantity": 1
          },
          {
            "code": "APP-015",
            "name": "Autorización por roles y protección de rutas",
            "phase": "Seguridad",
            "unitLabel": "Rol",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 1.7,
              "medium": 2.465,
              "high": 3.06
            },
            "defaultQuantity": 1.5
          },
          {
            "code": "APP-016",
            "name": "Implementación de flujo de negocio estándar",
            "phase": "Funcionalidad",
            "unitLabel": "Flujo",
            "defaultIncluded": true,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 4.25,
              "medium": 6.1625,
              "high": 7.65
            },
            "defaultQuantity": 2
          },
          {
            "code": "APP-017",
            "name": "Notificación por correo",
            "phase": "Integración",
            "unitLabel": "Integración",
            "defaultIncluded": false,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 2.55,
              "medium": 3.6975,
              "high": 4.59
            },
            "defaultQuantity": 1
          },
          {
            "code": "APP-018",
            "name": "Exportación Excel",
            "phase": "Integración",
            "unitLabel": "Reporte",
            "defaultIncluded": false,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 1.9500000000000002,
              "medium": 2.535,
              "high": 3.0225000000000004
            },
            "defaultQuantity": 1
          },
          {
            "code": "APP-019",
            "name": "Exportación PDF",
            "phase": "Integración",
            "unitLabel": "Reporte",
            "defaultIncluded": false,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 3.2,
              "medium": 4.64,
              "high": 5.760000000000001
            },
            "defaultQuantity": 1
          },
          {
            "code": "APP-020",
            "name": "Pruebas unitarias de reglas críticas",
            "phase": "Calidad",
            "unitLabel": "Regla",
            "defaultIncluded": true,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 1.275,
              "medium": 1.84875,
              "high": 2.295
            },
            "defaultQuantity": 3
          },
          {
            "code": "APP-021",
            "name": "Pruebas de integración y permisos",
            "phase": "Calidad",
            "unitLabel": "Proyecto",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 4,
              "medium": 5.8,
              "high": 7.2
            },
            "defaultQuantity": 1
          },
          {
            "code": "APP-022",
            "name": "Validación responsive y experiencia de usuario",
            "phase": "Calidad",
            "unitLabel": "Proyecto",
            "defaultIncluded": true,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 3,
              "medium": 3.9000000000000004,
              "high": 4.65
            },
            "defaultQuantity": 1
          },
          {
            "code": "APP-023",
            "name": "Carga o migración inicial de datos",
            "phase": "Datos",
            "unitLabel": "Lote",
            "defaultIncluded": false,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 5,
              "medium": 7.25,
              "high": 9
            },
            "defaultQuantity": 0.5
          },
          {
            "code": "APP-024",
            "name": "Configuración y despliegue de producción",
            "phase": "Despliegue",
            "unitLabel": "Entorno",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 2.4000000000000004,
              "medium": 3.4800000000000004,
              "high": 4.320000000000001
            },
            "defaultQuantity": 1
          },
          {
            "code": "APP-025",
            "name": "Capacitación de usuario administrador",
            "phase": "Cierre",
            "unitLabel": "Sesión",
            "defaultIncluded": true,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 2,
              "medium": 2.6,
              "high": 3.1
            },
            "defaultQuantity": 1
          },
          {
            "code": "APP-026",
            "name": "Documentación técnica y funcional",
            "phase": "Cierre",
            "unitLabel": "Proyecto",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 3,
              "medium": 3.9000000000000004,
              "high": 4.65
            },
            "defaultQuantity": 1
          },
          {
            "code": "APP-027",
            "name": "Ciclo de ajustes posterior a UAT",
            "phase": "Cierre",
            "unitLabel": "Ciclo",
            "defaultIncluded": true,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 4,
              "medium": 5.8,
              "high": 7.2
            },
            "defaultQuantity": 1
          }
        ]
      },
      {
        "code": "INT-01",
        "name": "Integración y automatización de procesos",
        "maturity": "02 · Optimización digital",
        "activities": [
          {
            "code": "INT-001",
            "name": "Levantamiento del proceso y puntos de integración",
            "phase": "Diagnóstico",
            "unitLabel": "Proceso",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 2.5,
              "medium": 3.625,
              "high": 4.5
            },
            "defaultQuantity": 1
          },
          {
            "code": "INT-002",
            "name": "Revisión de APIs, archivos o mecanismos disponibles",
            "phase": "Diagnóstico",
            "unitLabel": "Integración",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 2,
              "medium": 2.9,
              "high": 3.6
            },
            "defaultQuantity": 1
          },
          {
            "code": "INT-003",
            "name": "Diseño del mapeo de datos y transformaciones",
            "phase": "Diseño",
            "unitLabel": "Integración",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 3,
              "medium": 4.35,
              "high": 5.4
            },
            "defaultQuantity": 1
          },
          {
            "code": "INT-004",
            "name": "Diseño de manejo de errores y reintentos",
            "phase": "Diseño",
            "unitLabel": "Integración",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 1.7,
              "medium": 2.465,
              "high": 3.06
            },
            "defaultQuantity": 1
          },
          {
            "code": "INT-005",
            "name": "Configuración de credenciales y secretos",
            "phase": "Desarrollo",
            "unitLabel": "Entorno",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 1.2000000000000002,
              "medium": 1.5600000000000003,
              "high": 1.8600000000000003
            },
            "defaultQuantity": 1
          },
          {
            "code": "INT-006",
            "name": "Desarrollo de conector API estándar",
            "phase": "Desarrollo",
            "unitLabel": "Integración",
            "defaultIncluded": true,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 4.25,
              "medium": 6.1625,
              "high": 7.65
            },
            "defaultQuantity": 1
          },
          {
            "code": "INT-007",
            "name": "Importación o exportación por archivo",
            "phase": "Desarrollo",
            "unitLabel": "Formato",
            "defaultIncluded": false,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 3.2,
              "medium": 4.64,
              "high": 5.760000000000001
            },
            "defaultQuantity": 0
          },
          {
            "code": "INT-008",
            "name": "Implementación de webhook",
            "phase": "Desarrollo",
            "unitLabel": "Evento",
            "defaultIncluded": false,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 2.975,
              "medium": 4.31375,
              "high": 5.355
            },
            "defaultQuantity": 0
          },
          {
            "code": "INT-009",
            "name": "Automatización programada",
            "phase": "Automatización",
            "unitLabel": "Job",
            "defaultIncluded": true,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 2.4000000000000004,
              "medium": 3.1200000000000006,
              "high": 3.7200000000000006
            },
            "defaultQuantity": 1
          },
          {
            "code": "INT-010",
            "name": "Implementación de reglas de negocio y transformaciones",
            "phase": "Automatización",
            "unitLabel": "Regla",
            "defaultIncluded": true,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 1.275,
              "medium": 1.84875,
              "high": 2.295
            },
            "defaultQuantity": 3
          },
          {
            "code": "INT-011",
            "name": "Registro de ejecuciones y errores",
            "phase": "Observabilidad",
            "unitLabel": "Integración",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 1.3,
              "medium": 1.6900000000000002,
              "high": 2.015
            },
            "defaultQuantity": 1
          },
          {
            "code": "INT-012",
            "name": "Alertas de fallo de integración",
            "phase": "Observabilidad",
            "unitLabel": "Canal",
            "defaultIncluded": false,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 1.2000000000000002,
              "medium": 1.5600000000000003,
              "high": 1.8600000000000003
            },
            "defaultQuantity": 1
          },
          {
            "code": "INT-013",
            "name": "Pruebas con datos de ejemplo",
            "phase": "Calidad",
            "unitLabel": "Caso",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 1,
              "medium": 1.45,
              "high": 1.8
            },
            "defaultQuantity": 4
          },
          {
            "code": "INT-014",
            "name": "Prueba de volumen y límites",
            "phase": "Calidad",
            "unitLabel": "Prueba",
            "defaultIncluded": false,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 2.5,
              "medium": 3.625,
              "high": 4.5
            },
            "defaultQuantity": 1
          },
          {
            "code": "INT-015",
            "name": "Revisión de permisos y exposición de datos",
            "phase": "Seguridad",
            "unitLabel": "Integración",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 1.5,
              "medium": 2.175,
              "high": 2.7
            },
            "defaultQuantity": 1
          },
          {
            "code": "INT-016",
            "name": "Configuración en producción",
            "phase": "Despliegue",
            "unitLabel": "Entorno",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 1.6,
              "medium": 2.32,
              "high": 2.8800000000000003
            },
            "defaultQuantity": 1
          },
          {
            "code": "INT-017",
            "name": "Documentación y procedimiento operativo",
            "phase": "Cierre",
            "unitLabel": "Integración",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "hours": {
              "small": 2,
              "medium": 2.6,
              "high": 3.1
            },
            "defaultQuantity": 1
          }
        ]
      }
    ]
  }
};
