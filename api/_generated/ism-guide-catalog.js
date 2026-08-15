/**
 * Catálogo técnico mínimo para la Guía Web ISM.
 *
 * ARCHIVO GENERADO: no editar manualmente.
 * Fuente: apps/configurador-servicios/catalog/Catalogo_Tecnico_Servicios_ISM_Developer_v2_3_Simplificado_LIMPIO.xlsx
 * Regeneración: npm --prefix apps/configurador-servicios run catalog:ism
 */
export const ismGuideTechnicalCatalog = {
  "schemaVersion": "2.0",
  "catalogVersion": "2.3",
  "hourlyRateUF": 0.7,
  "contingencyRate": 0.2,
  "calculationModel": "single-base-hours-final-adjustments",
  "area": {
    "id": "desarrollo-implementacion",
    "name": "Desarrollo e Implementación",
    "services": [
      {
        "code": "WEB-01",
        "name": "Sitio web profesional",
        "activities": [
          {
            "code": "WEB-001",
            "name": "Levantamiento y planificación inicial",
            "phase": "Planificación",
            "unitLabel": "Proyecto",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "baseHours": 1.5,
            "defaultQuantity": 1
          },
          {
            "code": "WEB-005",
            "name": "Preparación técnica y sistema visual base",
            "phase": "Preparación",
            "unitLabel": "Proyecto",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "baseHours": 2,
            "defaultQuantity": 1
          },
          {
            "code": "WEB-007",
            "name": "Navbar, navegación principal y menú móvil",
            "phase": "Interfaz",
            "unitLabel": "Componente",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "baseHours": 1.2,
            "defaultQuantity": 1
          },
          {
            "code": "WEB-008",
            "name": "Hero principal y llamada a la acción",
            "phase": "Interfaz",
            "unitLabel": "Componente",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "baseHours": 1.8,
            "defaultQuantity": 1
          },
          {
            "code": "WEB-009",
            "name": "Sección estándar de contenido",
            "phase": "Interfaz",
            "unitLabel": "Sección",
            "defaultIncluded": true,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "baseHours": 1,
            "defaultQuantity": 1
          },
          {
            "code": "WEB-010",
            "name": "Sección de servicios con tarjetas",
            "phase": "Interfaz",
            "unitLabel": "Sección",
            "defaultIncluded": true,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "baseHours": 1,
            "defaultQuantity": 1
          },
          {
            "code": "WEB-011",
            "name": "Galería o portafolio",
            "phase": "Interfaz",
            "unitLabel": "Sección",
            "defaultIncluded": false,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "baseHours": 1.5,
            "defaultQuantity": 1
          },
          {
            "code": "WEB-012",
            "name": "Testimonios o casos de éxito",
            "phase": "Interfaz",
            "unitLabel": "Sección",
            "defaultIncluded": false,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "baseHours": 1.5,
            "defaultQuantity": 1
          },
          {
            "code": "WEB-013",
            "name": "Preguntas frecuentes",
            "phase": "Interfaz",
            "unitLabel": "Sección",
            "defaultIncluded": false,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "baseHours": 1,
            "defaultQuantity": 1
          },
          {
            "code": "WEB-014",
            "name": "Formulario de contacto con envío por correo",
            "phase": "Conversión",
            "unitLabel": "Formulario",
            "defaultIncluded": false,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "baseHours": 1,
            "defaultQuantity": 1
          },
          {
            "code": "WEB-015",
            "name": "Footer y cierre de navegación",
            "phase": "Interfaz",
            "unitLabel": "Componente",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "baseHours": 1,
            "defaultQuantity": 1
          },
          {
            "code": "WEB-016",
            "name": "Página interna estándar",
            "phase": "Interfaz",
            "unitLabel": "Página",
            "defaultIncluded": false,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "baseHours": 1.5,
            "defaultQuantity": 1
          },
          {
            "code": "WEB-017",
            "name": "Integración de WhatsApp",
            "phase": "Integración ligera",
            "unitLabel": "Integración",
            "defaultIncluded": false,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "baseHours": 0.5,
            "defaultQuantity": 1
          },
          {
            "code": "WEB-018",
            "name": "Integración de redes sociales",
            "phase": "Integración ligera",
            "unitLabel": "Integración",
            "defaultIncluded": false,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "baseHours": 0.5,
            "defaultQuantity": 1
          },
          {
            "code": "WEB-019",
            "name": "Integración de mapa o ubicación",
            "phase": "Integración ligera",
            "unitLabel": "Integración",
            "defaultIncluded": false,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "baseHours": 0.5,
            "defaultQuantity": 1
          },
          {
            "code": "WEB-021",
            "name": "Carga y formato inicial de contenidos",
            "phase": "Contenido",
            "unitLabel": "Proyecto",
            "defaultIncluded": true,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "baseHours": 1.2,
            "defaultQuantity": 1
          },
          {
            "code": "WEB-022",
            "name": "Validación responsive y compatibilidad final",
            "phase": "Calidad",
            "unitLabel": "Proyecto",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "baseHours": 2,
            "defaultQuantity": 1
          },
          {
            "code": "WEB-023",
            "name": "SEO técnico inicial e indexabilidad",
            "phase": "SEO",
            "unitLabel": "Proyecto",
            "defaultIncluded": true,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "baseHours": 1.5,
            "defaultQuantity": 1
          },
          {
            "code": "WEB-026",
            "name": "Optimización técnica y accesibilidad básica",
            "phase": "Optimización",
            "unitLabel": "Proyecto",
            "defaultIncluded": true,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "baseHours": 1.5,
            "defaultQuantity": 1
          },
          {
            "code": "WEB-029",
            "name": "Analítica básica",
            "phase": "Analítica",
            "unitLabel": "Proyecto",
            "defaultIncluded": false,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "baseHours": 0.6,
            "defaultQuantity": 1
          },
          {
            "code": "WEB-030",
            "name": "QA funcional y ciclo consolidado de correcciones",
            "phase": "Calidad",
            "unitLabel": "Proyecto",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "baseHours": 1.5,
            "defaultQuantity": 1
          },
          {
            "code": "WEB-033",
            "name": "Publicación, dominio, SSL y entrega",
            "phase": "Publicación",
            "unitLabel": "Proyecto",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "baseHours": 1.5,
            "defaultQuantity": 1
          }
        ]
      },
      {
        "code": "APP-01",
        "name": "Sistema web o aplicación de gestión",
        "activities": [
          {
            "code": "APP-001",
            "name": "Levantamiento funcional, alcance y flujos principales",
            "phase": "Planificación",
            "unitLabel": "Proyecto",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "baseHours": 1.5,
            "defaultQuantity": 1
          },
          {
            "code": "APP-003",
            "name": "Modelo de datos y persistencia base",
            "phase": "Arquitectura",
            "unitLabel": "Proyecto",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "baseHours": 2.5,
            "defaultQuantity": 1
          },
          {
            "code": "APP-004",
            "name": "Diseño de roles y permisos",
            "phase": "Seguridad",
            "unitLabel": "Rol",
            "defaultIncluded": true,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "baseHours": 1,
            "defaultQuantity": 2
          },
          {
            "code": "APP-005",
            "name": "Arquitectura técnica, proyecto y ambientes",
            "phase": "Arquitectura",
            "unitLabel": "Proyecto",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "baseHours": 2,
            "defaultQuantity": 1
          },
          {
            "code": "APP-007",
            "name": "Wireframe de pantalla estándar",
            "phase": "UX/UI",
            "unitLabel": "Pantalla",
            "defaultIncluded": true,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "baseHours": 1,
            "defaultQuantity": 3
          },
          {
            "code": "APP-009",
            "name": "Shell de aplicación y sistema visual",
            "phase": "Frontend",
            "unitLabel": "Proyecto",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "baseHours": 2.5,
            "defaultQuantity": 1
          },
          {
            "code": "APP-010",
            "name": "Interfaz CRUD estándar",
            "phase": "Frontend",
            "unitLabel": "Pantalla",
            "defaultIncluded": true,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "baseHours": 2.5,
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
            "baseHours": 3.5,
            "defaultQuantity": 1
          },
          {
            "code": "APP-013",
            "name": "Servicio CRUD backend estándar",
            "phase": "Backend",
            "unitLabel": "Entidad",
            "defaultIncluded": true,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "baseHours": 2.3,
            "defaultQuantity": 3
          },
          {
            "code": "APP-014",
            "name": "Autenticación y recuperación de acceso",
            "phase": "Seguridad",
            "unitLabel": "Sistema",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "baseHours": 2.5,
            "defaultQuantity": 1
          },
          {
            "code": "APP-015",
            "name": "Autorización y protección por rol",
            "phase": "Seguridad",
            "unitLabel": "Rol",
            "defaultIncluded": true,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "baseHours": 1.5,
            "defaultQuantity": 2
          },
          {
            "code": "APP-016",
            "name": "Flujo de negocio estándar",
            "phase": "Funcionalidad",
            "unitLabel": "Flujo",
            "defaultIncluded": true,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "baseHours": 3,
            "defaultQuantity": 2
          },
          {
            "code": "APP-017",
            "name": "Notificación operativa por correo",
            "phase": "Notificaciones",
            "unitLabel": "Canal",
            "defaultIncluded": false,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "baseHours": 1,
            "defaultQuantity": 1
          },
          {
            "code": "APP-018",
            "name": "Exportación o reporte estándar",
            "phase": "Reportes",
            "unitLabel": "Formato",
            "defaultIncluded": false,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "baseHours": 1.5,
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
            "baseHours": 2.5,
            "defaultQuantity": 1
          },
          {
            "code": "APP-020",
            "name": "QA funcional, integración, permisos y UX",
            "phase": "Calidad",
            "unitLabel": "Proyecto",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "baseHours": 2.5,
            "defaultQuantity": 1
          },
          {
            "code": "APP-024",
            "name": "Configuración y despliegue de producción",
            "phase": "Despliegue",
            "unitLabel": "Entorno",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "baseHours": 1.5,
            "defaultQuantity": 1
          },
          {
            "code": "APP-025",
            "name": "Capacitación, documentación y ciclo UAT",
            "phase": "Cierre",
            "unitLabel": "Proyecto",
            "defaultIncluded": true,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "baseHours": 1.5,
            "defaultQuantity": 1
          }
        ]
      },
      {
        "code": "INT-01",
        "name": "Integración y automatización de procesos",
        "activities": [
          {
            "code": "INT-001",
            "name": "Levantamiento y diseño de integración",
            "phase": "Planificación",
            "unitLabel": "Integración",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "baseHours": 3,
            "defaultQuantity": 1
          },
          {
            "code": "INT-005",
            "name": "Credenciales, secretos y configuración segura",
            "phase": "Preparación",
            "unitLabel": "Entorno",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "baseHours": 1,
            "defaultQuantity": 1
          },
          {
            "code": "INT-006",
            "name": "Conector API estándar",
            "phase": "Desarrollo",
            "unitLabel": "Integración",
            "defaultIncluded": true,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "baseHours": 3.5,
            "defaultQuantity": 1
          },
          {
            "code": "INT-007",
            "name": "Intercambio por archivo",
            "phase": "Desarrollo",
            "unitLabel": "Formato",
            "defaultIncluded": false,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "baseHours": 2.2,
            "defaultQuantity": 1
          },
          {
            "code": "INT-008",
            "name": "Webhook estándar",
            "phase": "Desarrollo",
            "unitLabel": "Evento",
            "defaultIncluded": false,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "baseHours": 2,
            "defaultQuantity": 1
          },
          {
            "code": "INT-009",
            "name": "Automatización programada",
            "phase": "Automatización",
            "unitLabel": "Job",
            "defaultIncluded": true,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "baseHours": 2,
            "defaultQuantity": 1
          },
          {
            "code": "INT-010",
            "name": "Regla o transformación de negocio",
            "phase": "Automatización",
            "unitLabel": "Regla",
            "defaultIncluded": true,
            "mandatory": false,
            "validationStatus": "Preliminar",
            "baseHours": 1,
            "defaultQuantity": 2
          },
          {
            "code": "INT-011",
            "name": "Registro de ejecuciones y alertas básicas",
            "phase": "Observabilidad",
            "unitLabel": "Integración",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "baseHours": 1,
            "defaultQuantity": 1
          },
          {
            "code": "INT-013",
            "name": "QA de integración, datos, límites y seguridad",
            "phase": "Calidad",
            "unitLabel": "Integración",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "baseHours": 2,
            "defaultQuantity": 1
          },
          {
            "code": "INT-016",
            "name": "Producción, documentación y runbook",
            "phase": "Despliegue",
            "unitLabel": "Integración",
            "defaultIncluded": true,
            "mandatory": true,
            "validationStatus": "Preliminar",
            "baseHours": 1.5,
            "defaultQuantity": 1
          }
        ]
      }
    ]
  }
};
