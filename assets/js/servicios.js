const legacyServices = [
    {
        id: "presencia-digital",
        name: "Servicios de Presencia Digital",
        short: "Sitios web profesionales y escalables",
        type: "Visibilidad / Confianza / Conversión",
        accent: "#31bdf4",
        accentRgb: "49, 189, 244",
        summary: "Construimos una presencia digital clara, profesional y preparada para convertir visitas en oportunidades reales para tu negocio.",
        metrics: [["Objetivo", "Ser visible"], ["Experiencia", "Responsive"], ["Canales", "Web + WhatsApp"], ["Base", "Escalable"]],
        scope: "Diseño estratégico / Desarrollo web / Responsive / SEO inicial / Conversión",
        plans: [
            {
                name: "Presencia Esencial",
                description: "Para negocios que necesitan comenzar con una página clara, profesional y lista para recibir contactos.",
                image: "assets/img/presencia-esencial-preview.jpg",
                alt: "Vista de una propuesta de presencia digital esencial",
                focus: "Inicio profesional",
                result: "Visibilidad",
                items: ["Landing page simple", "Diseño responsive", "WhatsApp y redes", "Formulario básico"]
            },
            {
                name: "Presencia Profesional",
                description: "Para marcas o servicios que requieren más secciones, una estructura comercial sólida y comunicación completa.",
                image: "assets/img/presencia-profesional-preview.jpg",
                alt: "Vista de una propuesta de presencia digital profesional",
                focus: "Estructura comercial",
                result: "Confianza",
                items: ["Más contenido", "Secciones estratégicas", "Mejor narrativa", "Optimización visual"]
            },
            {
                name: "Presencia Corporativa",
                description: "Para proyectos que necesitan diferenciación visual, interacciones avanzadas y una experiencia de mayor nivel.",
                image: "assets/img/presencia-premium-preview.jpg",
                alt: "Vista de una propuesta de presencia digital premium",
                focus: "Diferenciación",
                result: "Experiencia premium",
                items: ["Diseño avanzado", "Interacciones premium", "Mayor personalización", "Preparada para escalar"]
            }
        ],
        analysis: ["Falta de presencia digital profesional", "Imagen de marca poco consistente", "Baja accesibilidad y visibilidad de los servicios", "Pocos canales para generar contactos"],
        action: ["Sitio web profesional personalizado", "Diseño responsive", "Presentación de empresa y servicios", "Formulario, WhatsApp y SEO inicial"],
        scalability: ["Catálogo o nuevas secciones", "Agenda y automatización de contactos", "Integraciones con sistemas de gestión", "Estrategia de contenido y posicionamiento"]
    },
    {
        id: "desarrollo-digital",
        name: "Servicio de Desarrollo Digital",
        short: "Soporte, mantención y evolución",
        type: "Operación / Seguridad / Mejora continua",
        accent: "#34d399",
        accentRgb: "52, 211, 153",
        summary: "Mantenemos tu plataforma operativa, actualizada y preparada para crecer, con acompañamiento técnico según el ritmo de tu negocio.",
        metrics: [["Objetivo", "Continuidad"], ["Seguimiento", "Periódico"], ["Soporte", "Directo"], ["Evolución", "Planificada"]],
        scope: "Soporte preventivo / Actualizaciones / Rendimiento / Seguridad / Evolución",
        plans: [
            {
                name: "Soporte Base",
                description: "Para mantener el sitio operativo y atender hasta 2 solicitudes que no superen 2 horas mensuales.",
                image: "assets/img/soporte-base-preview.jpg",
                alt: "Panel visual del plan Soporte Base",
                focus: "Prevención",
                result: "Estabilidad",
                items: ["Revisión mensual", "Hasta 2 solicitudes o 2 horas", "Soporte preventivo", "Canal directo"]
            },
            {
                name: "Mantención Activa",
                description: "Para negocios que actualizan campañas, imágenes, textos o información de forma recurrente.",
                image: "assets/img/soporte-activo-preview.jpg",
                alt: "Panel visual del plan Mantención Activa",
                focus: "Actualización",
                result: "Vigencia",
                items: ["Hasta 5 solicitudes o 5 horas", "Actualización de textos", "Optimización visual", "Revisión preventiva mensual"]
            },
            {
                name: "Evolución Continua",
                description: "Para plataformas que deben incorporar nuevas funciones, integraciones y mejoras estratégicas en el tiempo.",
                image: "assets/img/soporte-evolucion-preview.jpg",
                alt: "Panel visual del plan Evolución Continua",
                focus: "Crecimiento",
                result: "Escalabilidad",
                items: ["Nuevas secciones", "Mejoras funcionales", "Acompañamiento técnico", "Plan de crecimiento"]
            }
        ],
        analysis: ["Sitio sin mantenimiento periódico", "Contenido o información desactualizada", "Riesgo de fallos sin respaldo técnico", "Necesidad de evolucionar sin reconstruir"],
        action: ["Diagnóstico del estado actual", "Calendario de revisión y actualizaciones", "Canal directo para solicitudes", "Priorización de mejoras técnicas"],
        scalability: ["Automatización de respaldos y alertas", "Monitoreo de rendimiento", "Nuevos módulos e integraciones", "Hoja de ruta de evolución trimestral"]
    },
    {
        id: "asesorias-digitales",
        name: "Servicio de Asesorías Digitales",
        short: "Diagnóstico y decisiones con criterio",
        type: "Análisis / Estrategia / Planificación",
        accent: "#f9a8d4",
        accentRgb: "249, 168, 212",
        summary: "Transformamos ideas, dudas o problemas digitales en un diagnóstico claro y un plan de acción viable antes de invertir en desarrollo.",
        metrics: [["Objetivo", "Decidir mejor"], ["Formato", "Personalizado"], ["Entrega", "Plan de acción"], ["Enfoque", "Negocio"]],
        scope: "Diagnóstico / Arquitectura / Experiencia de usuario / Priorización / Hoja de ruta",
        plans: [
            {
                name: "Comenzando de 0",
                description: "Ordenamos la idea antes de construir: objetivo, estructura, contenido, estilo y prioridades reales.",
                image: "assets/img/asesoria-inicial-preview.jpg",
                alt: "Panel visual de asesoría digital inicial",
                focus: "Definición",
                result: "Ruta clara",
                items: ["Definición de alcance", "Mapa de secciones", "Prioridad de contenido", "Ruta de trabajo"]
            },
            {
                name: "Revisión Web",
                description: "Revisamos qué funciona, qué confunde al usuario y qué conviene mejorar antes de invertir en cambios.",
                image: "assets/img/asesoria-revision-preview.jpg",
                alt: "Panel visual de revisión web",
                focus: "Experiencia actual",
                result: "Oportunidades",
                items: ["Revisión visual", "Experiencia de usuario", "Contenido y claridad", "Prioridades de mejora"]
            },
            {
                name: "Auditoría Digital",
                description: "Analizamos la solución actual para detectar brechas de estructura, comunicación y capacidad de crecimiento.",
                image: "assets/img/asesoria-auditoria-preview.jpg",
                alt: "Panel visual de auditoría digital",
                focus: "Diagnóstico integral",
                result: "Plan técnico",
                items: ["Detección de brechas", "Análisis de estructura", "Propuesta de mejoras", "Ruta de escalabilidad"]
            }
        ],
        analysis: ["Objetivos digitales poco definidos", "Dudas sobre alcance, costo o prioridades", "Experiencia web con puntos de fricción", "Inversión tecnológica sin una hoja de ruta"],
        action: ["Sesión de levantamiento y contexto", "Revisión de presencia y procesos actuales", "Priorización por impacto y esfuerzo", "Documento con recomendaciones accionables"],
        scalability: ["Acompañamiento durante la implementación", "Revisión de resultados y nuevas prioridades", "Automatización de procesos detectados", "Estrategia digital por etapas"]
    }
];

const services = [
    {
        id: "desarrollo-implementacion",
        name: "Desarrollo e Implementación",
        short: "Construcción de soluciones digitales",
        type: "Diseño / Desarrollo / Integración",
        accent: "#31bdf4",
        accentRgb: "49, 189, 244",
        summary: "Diseño y construcción de soluciones digitales, sitios, apps, integraciones y automatización.",
        scope: "Sitios web / Apps / Sistemas / Integraciones / Automatización",
        idealFor: "Pymes y profesionales que necesitan lanzar una presencia digital, digitalizar un proceso o conectar herramientas que hoy funcionan de forma separada.",
        problem: "La operación depende de tareas manuales, información dispersa o canales digitales que no representan correctamente al negocio.",
        benefits: ["Una solución alineada con un objetivo de negocio", "Experiencia responsive y accesible", "Menos pasos manuales e información mejor organizada", "Base técnica preparada para crecer por etapas"],
        scopeItems: ["Levantamiento y definición de alcance", "Arquitectura de información y experiencia", "Desarrollo frontend y lógica necesaria", "Integraciones acordadas, pruebas y publicación"],
        process: ["Diagnóstico del problema", "Propuesta y alcance", "Diseño y desarrollo", "Pruebas, entrega y seguimiento"],
        cta: {
            label: "Evaluar una solución a medida",
            title: "Convirtamos tu necesidad en un alcance claro y construible."
        },
        plans: [{
            name: "Construcción digital",
            description: "Convertimos una necesidad de negocio en una solución usable, responsive y preparada para operar.",
            image: "assets/img/presencia-profesional-preview.jpg",
            alt: "Vista de una solución digital desarrollada por ISM Developer",
            focus: "Implementación",
            result: "Solución operativa",
            items: ["Diseño funcional", "Desarrollo responsive", "Integraciones", "Puesta en marcha"]
        }],
        analysis: ["Objetivo y usuarios", "Proceso que se debe resolver", "Requisitos e integraciones", "Alcance y prioridades"],
        action: ["Arquitectura de la solución", "Diseño de experiencia", "Desarrollo e integración", "Pruebas y publicación"],
        scalability: ["Nuevos módulos", "Automatización adicional", "Integración con otras plataformas", "Evolución por etapas"]
    },
    {
        id: "mantenimiento-evolucion",
        name: "Mantenimiento y Evolución",
        short: "Mejora funcional continua",
        type: "Actualización / Corrección / Optimización",
        accent: "#34d399",
        accentRgb: "52, 211, 153",
        summary: "Actualizaciones, correcciones, mejoras funcionales, parches y optimización continua.",
        scope: "Actualizaciones / Correcciones / Parches / Mejoras / Optimización",
        idealFor: "Sitios y sistemas que ya están publicados y necesitan atención periódica, correcciones o una evolución controlada.",
        problem: "La plataforma pierde vigencia, acumula incidencias o requiere cambios sin un canal, prioridades ni límites de atención definidos.",
        benefits: ["Continuidad técnica con alcance mensual conocido", "Solicitudes priorizadas y trazables", "Actualizaciones y respaldos programados", "Evolución sin reconstrucciones innecesarias"],
        scopeItems: ["Revisión del estado actual", "Corrección de incidencias dentro de la bolsa contratada", "Actualización de contenido o configuración existente", "Programación de respaldos y actualizaciones según el plan"],
        process: ["Recepción y clasificación", "Estimación dentro de la bolsa", "Ejecución y revisión", "Cierre con registro de horas y pendientes"],
        cta: {
            label: "Revisar mi plataforma",
            title: "Definamos el nivel de mantenimiento que realmente necesita tu plataforma."
        },
        plans: [
            {
                name: "Soporte Base",
                description: "Cobertura acotada para mantener un sitio o sistema estable y atender solicitudes puntuales sobre lo ya implementado.",
                image: "assets/img/soporte-base-preview.jpg",
                alt: "Panel visual del plan Soporte Base",
                focus: "Continuidad básica",
                result: "Estabilidad",
                items: ["Hasta 2 solicitudes al mes", "Bolsa máxima de 2 horas", "Revisión técnica mensual", "Canal directo"],
                terms: {
                    included: "Hasta 2 solicitudes que, en conjunto, no superen 2 horas al mes. Una solicitud incluida modifica texto, imagen o configuración dentro de una sección o función existente.",
                    response: "Respuesta inicial dentro de 2 días hábiles.",
                    channel: "Lunes a viernes, de 09:00 a 18:00 hora de Chile, mediante WhatsApp o correo.",
                    backups: "Un respaldo mensual de archivos y base de datos cuando la infraestructura lo permita, más revisión mensual de actualizaciones técnicas.",
                    exclusions: "No incluye nuevas secciones o funciones, rediseño, carga masiva de contenido, integraciones, licencias ni costos de terceros.",
                    separate: "Urgencias fuera de horario y cualquier trabajo que exceda las 2 horas se estima y cotiza antes de ejecutarse."
                }
            },
            {
                name: "Mantención Activa",
                description: "Para plataformas con actualizaciones recurrentes de contenido, configuración y correcciones sobre funciones existentes.",
                image: "assets/img/soporte-activo-preview.jpg",
                alt: "Panel visual del plan Mantención Activa",
                focus: "Actualización recurrente",
                result: "Vigencia",
                items: ["Hasta 5 solicitudes al mes", "Bolsa máxima de 5 horas", "Priorización semanal", "Revisión preventiva"],
                terms: {
                    included: "Hasta 5 solicitudes que, en conjunto, no superen 5 horas al mes. Cada solicitud debe intervenir contenido, estilos o configuración ya existentes.",
                    response: "Respuesta inicial dentro de 1 día hábil.",
                    channel: "Lunes a viernes, de 09:00 a 18:00 hora de Chile, mediante WhatsApp o correo.",
                    backups: "Respaldo quincenal de archivos y base de datos cuando aplique, revisión mensual de actualizaciones y comprobación básica posterior.",
                    exclusions: "No incluye módulos nuevos, cambios de arquitectura, migraciones, rediseño completo, producción de textos o imágenes ni costos de terceros.",
                    separate: "Las tareas que excedan la bolsa de 5 horas o requieran un alcance nuevo se cotizan por separado antes de comenzar."
                }
            },
            {
                name: "Evolución Planificada",
                description: "Bolsa mensual para priorizar correcciones y mejoras funcionales acotadas sin perder control del alcance.",
                image: "assets/img/soporte-evolucion-preview.jpg",
                alt: "Panel visual del plan Evolución Planificada",
                focus: "Mejora programada",
                result: "Evolución",
                items: ["Bolsa máxima de 10 horas", "Backlog mensual priorizado", "Incidencias y mejoras", "Revisión de avance"],
                terms: {
                    included: "Hasta 10 horas mensuales distribuidas entre incidencias y mejoras priorizadas. Cada tarea se estima y descuenta de la bolsa antes de ejecutarse.",
                    response: "Respuesta inicial dentro de 4 horas hábiles para una incidencia que impida operar y dentro de 1 día hábil para solicitudes normales.",
                    channel: "Lunes a viernes, de 09:00 a 18:00 hora de Chile, mediante WhatsApp, correo y lista de trabajo compartida.",
                    backups: "Respaldo semanal cuando la infraestructura lo permita, revisión mensual de actualizaciones y respaldo previo a cambios de riesgo.",
                    exclusions: "No incluye desarrollo de módulos completos, migraciones, integraciones mayores, soporte fuera de horario, licencias ni servicios de terceros.",
                    separate: "Todo trabajo estimado fuera de la bolsa o que cambie el alcance funcional se presenta como cotización independiente."
                }
            }
        ],
        analysis: ["Estado actual", "Incidencias recurrentes", "Deuda técnica", "Prioridades de evolución"],
        action: ["Diagnóstico inicial", "Plan de mantenimiento", "Ejecución de mejoras", "Revisión periódica"],
        scalability: ["Nuevas funciones", "Optimización avanzada", "Integraciones", "Hoja de ruta trimestral"]
    },
    {
        id: "monitoreo-observabilidad",
        name: "Monitoreo y Observabilidad",
        short: "Visibilidad del estado operativo",
        type: "Disponibilidad / Rendimiento / Trazabilidad",
        accent: "#22d3ee",
        accentRgb: "34, 211, 238",
        summary: "Supervisión de disponibilidad, rendimiento, alertas, métricas, logs y trazabilidad.",
        scope: "Disponibilidad / Métricas / Alertas / Logs / Rendimiento",
        idealFor: "Plataformas cuya disponibilidad o velocidad afecta la atención, las ventas o un proceso operativo.",
        problem: "Los fallos se detectan tarde y no existe información suficiente para entender cuándo comenzó una degradación o qué componente está involucrado.",
        benefits: ["Detección temprana de interrupciones", "Indicadores claros de disponibilidad y rendimiento", "Alertas por canales acordados", "Historial técnico para investigar incidentes"],
        scopeItems: ["Definición de servicios e indicadores críticos", "Configuración de comprobaciones y métricas", "Alertas y registro técnico", "Revisión periódica de hallazgos"],
        process: ["Identificación de riesgos", "Definición de indicadores", "Configuración y prueba", "Seguimiento y ajuste"],
        cta: {
            label: "Definir mi monitoreo",
            title: "Identifiquemos qué debe vigilarse antes de que una falla afecte tu operación."
        },
        plans: [{
            name: "Observabilidad operativa",
            description: "Reunimos señales clave para conocer el estado de la plataforma y anticipar fallos o degradaciones.",
            image: "assets/img/asesoria-revision-preview.jpg",
            alt: "Panel visual de monitoreo y observabilidad",
            focus: "Supervisión",
            result: "Visibilidad",
            items: ["Disponibilidad", "Alertas", "Métricas de rendimiento", "Logs y trazabilidad"]
        }],
        analysis: ["Servicios críticos", "Indicadores necesarios", "Riesgos operativos", "Canales de alerta"],
        action: ["Definición de métricas", "Configuración de monitoreo", "Alertas y trazabilidad", "Revisión de resultados"],
        scalability: ["Paneles avanzados", "Alertas automatizadas", "Historial de rendimiento", "Análisis preventivo"]
    },
    {
        id: "respaldo-continuidad",
        name: "Respaldo y Continuidad Operacional",
        short: "Protección y recuperación",
        type: "Respaldo / Retención / Recuperación",
        accent: "#60a5fa",
        accentRgb: "96, 165, 250",
        summary: "Protección de datos, retención, restauración, RPO/RTO y recuperación ante incidentes.",
        scope: "Respaldo / Retención / Restauración / RPO-RTO / Continuidad",
        idealFor: "Negocios que dependen de datos, archivos o configuraciones cuya pérdida detendría o dificultaría la operación.",
        problem: "Existen copias sin una política clara, no se ha probado la restauración o no están definidos los tiempos y pérdidas aceptables.",
        benefits: ["Copias con frecuencia y retención definidas", "Responsables y procedimiento de recuperación", "Pruebas de restauración documentadas", "Objetivos RPO y RTO acordados"],
        scopeItems: ["Inventario de datos y dependencias", "Política de respaldo y retención", "Configuración o revisión de copias", "Prueba de restauración y plan de recuperación"],
        process: ["Clasificación de información", "Definición de RPO/RTO", "Implementación", "Prueba y documentación"],
        cta: {
            label: "Preparar mi continuidad",
            title: "Definamos cómo recuperar tu operación antes de necesitarlo."
        },
        plans: [{
            name: "Continuidad operacional",
            description: "Definimos cómo proteger, conservar y recuperar información para reducir el impacto de un incidente.",
            image: "assets/img/soporte-base-preview.jpg",
            alt: "Panel visual de respaldo y continuidad operacional",
            focus: "Recuperación",
            result: "Continuidad",
            items: ["Política de respaldo", "Retención de datos", "Pruebas de restauración", "Objetivos RPO/RTO"]
        }],
        analysis: ["Datos críticos", "Tolerancia a pérdidas", "Tiempos de recuperación", "Dependencias operativas"],
        action: ["Política de respaldos", "Retención y protección", "Pruebas de restauración", "Plan de recuperación"],
        scalability: ["Copias redundantes", "Restauración automatizada", "Continuidad por servicio", "Simulacros periódicos"]
    },
    {
        id: "ciberseguridad-proteccion",
        name: "Ciberseguridad y Protección Digital",
        short: "Reducción de riesgos digitales",
        type: "Hardening / Accesos / Respuesta",
        accent: "#818cf8",
        accentRgb: "129, 140, 248",
        summary: "Hardening, control de accesos, parches, vulnerabilidades y respuesta ante incidentes.",
        scope: "Hardening / Accesos / Parches / Vulnerabilidades / Incidentes",
        idealFor: "Sitios y sistemas que manejan cuentas, información operativa o accesos administrativos y necesitan reducir riesgos básicos.",
        problem: "Permisos amplios, configuraciones débiles o actualizaciones pendientes aumentan la exposición ante errores e incidentes.",
        benefits: ["Accesos mejor controlados", "Configuraciones y actualizaciones priorizadas", "Menor superficie de exposición", "Ruta inicial de respuesta ante incidentes"],
        scopeItems: ["Revisión de accesos y configuraciones", "Priorización de hallazgos", "Aplicación de controles acordados", "Documento de medidas y respuesta"],
        process: ["Inventario de activos", "Revisión y priorización", "Corrección controlada", "Verificación y recomendaciones"],
        cta: {
            label: "Solicitar revisión de seguridad",
            title: "Revisemos los accesos y configuraciones críticas de tu plataforma."
        },
        plans: [{
            name: "Protección digital",
            description: "Fortalecemos configuraciones, accesos y prácticas operativas para disminuir la superficie de riesgo.",
            image: "assets/img/asesoria-auditoria-preview.jpg",
            alt: "Panel visual de ciberseguridad y protección digital",
            focus: "Protección",
            result: "Menor riesgo",
            items: ["Hardening", "Control de accesos", "Gestión de parches", "Respuesta ante incidentes"]
        }],
        analysis: ["Activos y accesos", "Configuración actual", "Vulnerabilidades", "Capacidad de respuesta"],
        action: ["Revisión de seguridad", "Priorización de riesgos", "Aplicación de controles", "Plan de respuesta"],
        scalability: ["Autenticación reforzada", "Revisión continua", "Registro de eventos", "Protocolos de incidentes"]
    },
    {
        id: "soporte-gestion",
        name: "Soporte y Gestión de Servicios",
        short: "Acompañamiento operacional",
        type: "Mesa de ayuda / Incidentes / SLA",
        accent: "#f9a8d4",
        accentRgb: "249, 168, 212",
        summary: "Mesa de ayuda, incidentes, solicitudes, cambios, SLA y seguimiento operacional.",
        scope: "Mesa de ayuda / Incidentes / Solicitudes / Cambios / Seguimiento",
        idealFor: "Equipos que necesitan un canal único para reportar incidentes, pedir cambios y conocer el estado de cada solicitud.",
        problem: "Las solicitudes llegan por distintos medios, no tienen prioridad definida y resulta difícil saber qué está pendiente o quién debe responder.",
        benefits: ["Canal y horario de atención conocidos", "Priorización por impacto", "Seguimiento de cada caso", "Límites y tiempos de respuesta explícitos"],
        scopeItems: ["Recepción y registro de casos", "Clasificación de incidentes y solicitudes", "Resolución dentro de la bolsa contratada", "Informe de casos atendidos y pendientes"],
        process: ["Ingreso por canal acordado", "Clasificación y respuesta inicial", "Resolución o estimación", "Cierre y registro"],
        cta: {
            label: "Ordenar mi soporte",
            title: "Definamos un canal, prioridades y tiempos de atención para tu equipo."
        },
        plans: [
            {
                name: "Mesa de Ayuda Base",
                description: "Canal de soporte para equipos con un volumen acotado de consultas e incidencias sobre una plataforma existente.",
                image: "assets/img/soporte-base-preview.jpg",
                alt: "Panel visual del plan Mesa de Ayuda Base",
                focus: "Atención ordenada",
                result: "Seguimiento",
                items: ["Hasta 5 solicitudes al mes", "Bolsa máxima de 3 horas", "Registro de casos", "Resumen mensual"],
                terms: {
                    included: "Hasta 5 solicitudes que, en conjunto, no superen 3 horas al mes. Incluye consultas, revisión de incidentes y cambios de configuración existente.",
                    response: "Respuesta inicial dentro de 1 día hábil.",
                    channel: "Lunes a viernes, de 09:00 a 18:00 hora de Chile, mediante WhatsApp o correo.",
                    backups: "El plan no reemplaza un servicio de respaldo. Antes de una corrección con riesgo se genera una copia puntual cuando el acceso técnico lo permite.",
                    exclusions: "No incluye desarrollo, capacitación formal, administración de proveedores, recuperación de datos, licencias ni atención fuera de horario.",
                    separate: "Casos que superen 3 horas, requieran desarrollo o dependan de terceros se diagnostican y cotizan por separado."
                }
            },
            {
                name: "Gestión Operacional",
                description: "Seguimiento más frecuente para equipos que necesitan priorización de incidentes y una bolsa de atención mensual.",
                image: "assets/img/soporte-activo-preview.jpg",
                alt: "Panel visual del plan Gestión Operacional",
                focus: "Continuidad del servicio",
                result: "Control operativo",
                items: ["Hasta 10 solicitudes al mes", "Bolsa máxima de 8 horas", "Priorización por impacto", "Informe mensual"],
                terms: {
                    included: "Hasta 10 solicitudes que, en conjunto, no superen 8 horas al mes. Cada caso queda clasificado, estimado y registrado antes de su resolución.",
                    response: "Respuesta inicial dentro de 4 horas hábiles para incidentes que impidan operar y dentro de 1 día hábil para solicitudes normales.",
                    channel: "Lunes a viernes, de 09:00 a 18:00 hora de Chile, mediante WhatsApp, correo y lista de casos compartida.",
                    backups: "Respaldo puntual antes de cambios de riesgo cuando aplique y coordinación con el plan de mantenimiento o continuidad contratado.",
                    exclusions: "No incluye guardia 24/7, desarrollo de módulos, migraciones, recuperación forense, licencias, infraestructura ni costos de terceros.",
                    separate: "Horas adicionales, urgencias fuera de horario y trabajos que cambien el alcance funcional se cotizan antes de ejecutarse."
                }
            }
        ],
        analysis: ["Canales actuales", "Tipos de solicitudes", "Prioridades y responsables", "Tiempos de atención"],
        action: ["Canal de soporte", "Clasificación de casos", "Seguimiento operacional", "Revisión de niveles de servicio"],
        scalability: ["Portal de solicitudes", "Base de conocimiento", "Automatización de respuestas", "Reportes de servicio"]
    }
];

const serviceNav = document.getElementById("serviceNav");
const visualTrack = document.getElementById("visualTrack");
const copyTrack = document.getElementById("copyTrack");
const sliderDots = document.getElementById("sliderDots");
const progressLine = document.getElementById("progressLine");
const currentSlideLabel = document.getElementById("currentSlide");
const totalSlidesLabel = document.getElementById("totalSlides");
const syncedSlider = document.getElementById("syncedSlider");
const requestedParams = new URLSearchParams(window.location.search);
const requestedService = requestedParams.get("servicio");
const requestedOption = requestedParams.get("opcion");
let currentService = null;
let currentSlide = 0;
let pointerStartX = null;

const pad = (value) => String(value).padStart(2, "0");
const slugify = (value) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const serviceIcons = {
    "desarrollo-implementacion": "code-2",
    "mantenimiento-evolucion": "refresh-cw",
    "monitoreo-observabilidad": "activity",
    "respaldo-continuidad": "database-backup",
    "ciberseguridad-proteccion": "shield-check",
    "soporte-gestion": "headset"
};
const serviceImageDimensions = {
    "assets/img/presencia-profesional-preview.jpg": [1280, 853],
    "assets/img/soporte-base-preview.jpg": [1280, 801],
    "assets/img/soporte-activo-preview.jpg": [1280, 853],
    "assets/img/soporte-evolucion-preview.jpg": [1280, 853],
    "assets/img/asesoria-revision-preview.jpg": [1280, 801],
    "assets/img/asesoria-auditoria-preview.jpg": [1280, 801]
};

function renderNavigation() {
    const initialServiceId = services.some((service) => service.id === requestedService) ? requestedService : services[0].id;

    serviceNav.innerHTML = services.map((service) => {
        const expanded = service.id === initialServiceId;
        const groupId = `service-group-${service.id}`;
        return `
            <div class="nav-group service-group${expanded ? " expanded" : ""}" data-service-group="${service.id}">
                <button class="nav-group-toggle" type="button" aria-expanded="${expanded}" aria-controls="${groupId}" title="${service.name}">
                    <i class="nav-group-icon" data-lucide="${serviceIcons[service.id]}"></i>
                    <span>${service.name}</span>
                </button>
                <div class="nav-group-items" id="${groupId}">
                    ${service.plans.map((plan, index) => `
                        <button class="project-nav-item" type="button" data-service="${service.id}" data-plan="${index}"
                            data-track-event="service_select" data-track-category="services"
                            data-track-label="${service.name}: ${plan.name}" data-service-id="${service.id}">
                            <span class="nav-dot" aria-hidden="true"></span>
                            <span class="nav-copy"><strong>${plan.name}</strong><small>${plan.focus}</small></span>
                        </button>
                    `).join("")}
                </div>
            </div>`;
    }).join("");

    serviceNav.querySelectorAll(".nav-group-toggle").forEach((toggle) => {
        toggle.addEventListener("click", () => {
            const selectedGroup = toggle.closest(".nav-group");
            if (document.body.classList.contains("sidebar-collapsed")) {
                document.body.classList.remove("sidebar-collapsed");
                serviceNav.querySelectorAll(".nav-group").forEach((group) => {
                    const expanded = group === selectedGroup;
                    group.classList.toggle("expanded", expanded);
                    group.querySelector(".nav-group-toggle").setAttribute("aria-expanded", String(expanded));
                });
                return;
            }
            const willExpand = !selectedGroup.classList.contains("expanded");
            serviceNav.querySelectorAll(".nav-group").forEach((group) => {
                const expanded = group === selectedGroup && willExpand;
                group.classList.toggle("expanded", expanded);
                group.querySelector(".nav-group-toggle").setAttribute("aria-expanded", String(expanded));
            });
        });
    });

    serviceNav.querySelectorAll("[data-service]").forEach((button) => {
        button.addEventListener("click", () => selectService(button.dataset.service, { planIndex: Number(button.dataset.plan) }));
    });
}

function renderPlans(service) {
    const hasMultiplePlans = service.plans.length > 1;
    document.querySelector(".showcase-controls").hidden = !hasMultiplePlans;
    document.querySelector(".slider-progress").hidden = !hasMultiplePlans;

    visualTrack.innerHTML = service.plans.map((plan, index) => {
        const [width, height] = serviceImageDimensions[plan.image] || [1280, 853];
        return `
        <article class="visual-slide">
            <div class="screen-frame">
                <img src="${plan.image}" alt="${plan.alt}" width="${width}" height="${height}"
                    loading="${index ? "lazy" : "eager"}" decoding="async">
                <span class="screen-badge">${plan.focus}</span>
            </div>
        </article>`;
    }).join("");

    copyTrack.innerHTML = service.plans.map((plan) => `
        <article class="copy-slide">
            <h3>${plan.name}</h3>
            <p>${plan.description}</p>
            <ul class="service-plan-list">${plan.items.map((item) => `<li>${item}</li>`).join("")}</ul>
            <div class="copy-detail">
                <div><span>Foco</span><strong>${plan.focus}</strong></div>
                <div><span>Resultado</span><strong>${plan.result}</strong></div>
            </div>
        </article>
    `).join("");

    sliderDots.innerHTML = service.plans.map((plan, index) => `
        <button class="slider-dot" type="button" data-slide="${index}" aria-label="Ver ${plan.name}"></button>
    `).join("");
    sliderDots.querySelectorAll("[data-slide]").forEach((button) => {
        button.addEventListener("click", () => setSlide(Number(button.dataset.slide)));
    });
    totalSlidesLabel.textContent = pad(service.plans.length);
}

function renderTechnical(service) {
    const cards = [
        ["users", "Ideal para", service.idealFor, null],
        ["circle-alert", "Problema que resuelve", service.problem, null],
        ["badge-check", "Beneficios", "Cambios concretos que busca producir el servicio.", service.benefits],
        ["list-checks", "Alcance", "Componentes considerados al definir la propuesta.", service.scopeItems],
        ["route", "Proceso", "Etapas de trabajo desde el diagnóstico hasta el cierre.", service.process]
    ];

    document.getElementById("technicalGrid").classList.add("service-detail-grid");
    document.getElementById("technicalGrid").innerHTML = cards.map(([icon, title, description, items]) => `
        <article class="technical-card">
            <span class="tech-icon"><i data-lucide="${icon}"></i></span>
            <h3>${title}</h3>
            <p>${description}</p>
            ${items ? `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>` : ""}
        </article>
    `).join("");
}

function renderPlanTerms(service, plan) {
    const section = document.getElementById("planTermsSection");
    const grid = document.getElementById("planTermsGrid");
    const name = document.getElementById("planTermsName");
    const terms = plan?.terms;

    section.hidden = !terms;
    if (!terms) {
        grid.innerHTML = "";
        name.textContent = "";
        return;
    }

    const cards = [
        ["clock-3", "Solicitudes u horas incluidas", terms.included],
        ["timer", "Tiempo de respuesta", terms.response],
        ["messages-square", "Horario y canal", terms.channel],
        ["database-backup", "Respaldos y actualizaciones", terms.backups],
        ["circle-slash-2", "Exclusiones", terms.exclusions],
        ["file-plus-2", "Cotizado por separado", terms.separate]
    ];

    name.textContent = plan.name;
    grid.innerHTML = cards.map(([icon, title, description]) => `
        <article class="plan-term-card">
            <span class="tech-icon"><i data-lucide="${icon}"></i></span>
            <div>
                <h3>${title}</h3>
                <p>${description}</p>
            </div>
        </article>
    `).join("");
}

function selectService(id, options = {}) {
    const service = services.find((item) => item.id === id) || services[0];
    currentService = service;
    currentSlide = Number.isInteger(options.planIndex) ? options.planIndex : 0;
    document.body.classList.add("service-dashboard");
    document.documentElement.style.setProperty("--accent", service.accent);
    document.documentElement.style.setProperty("--accent-rgb", service.accentRgb);
    document.title = `${service.name} | ISM Developer`;
    document.getElementById("serviceType").textContent = service.type;
    document.getElementById("serviceTitle").textContent = service.name;
    document.getElementById("serviceSummary").textContent = service.summary;
    document.getElementById("serviceScope").textContent = service.scope;

    const contactUrl = `index.html?servicio=${encodeURIComponent(service.id)}#contacto`;
    const primaryCta = document.getElementById("servicePrimaryCta");
    const bottomCta = document.getElementById("serviceBottomCta");
    const whatsAppCta = document.getElementById("serviceWhatsAppCta");
    const whatsAppMessage = `Hola, Ignacio. Quiero conversar sobre ${service.name} con ISM Developer.`;

    primaryCta.href = contactUrl;
    primaryCta.innerHTML = `${service.cta.label}<i data-lucide="arrow-up-right"></i>`;
    primaryCta.dataset.trackLabel = service.cta.label;
    primaryCta.dataset.serviceId = service.id;
    primaryCta.dataset.trackDestination = "contacto";

    bottomCta.href = contactUrl;
    bottomCta.innerHTML = `${service.cta.label}<i data-lucide="arrow-up-right"></i>`;
    bottomCta.dataset.trackLabel = service.cta.label;
    bottomCta.dataset.serviceId = service.id;
    bottomCta.dataset.trackDestination = "contacto";

    whatsAppCta.href = `https://wa.me/56968374821?text=${encodeURIComponent(whatsAppMessage)}`;
    whatsAppCta.dataset.trackLabel = `WhatsApp: ${service.name}`;
    whatsAppCta.dataset.serviceId = service.id;

    document.getElementById("serviceBottomKicker").textContent = service.short;
    document.getElementById("serviceBottomTitle").textContent = service.cta.title;

    const activeGroup = serviceNav.querySelector(`[data-service-group="${service.id}"]`);
    serviceNav.querySelectorAll(".nav-group").forEach((group) => {
        const expanded = group === activeGroup;
        group.classList.toggle("expanded", expanded);
        group.querySelector(".nav-group-toggle").setAttribute("aria-expanded", String(expanded));
    });

    renderPlans(service);
    renderTechnical(service);
    setSlide(currentSlide);
    document.body.classList.remove("sidebar-open");
    if (window.lucide) window.lucide.createIcons();
    if (!options.initial && window.innerWidth > 820) window.scrollTo({ top: 0, behavior: "smooth" });
}

function setSlide(index) {
    if (!currentService) return;
    const total = currentService.plans.length;
    currentSlide = (index + total) % total;
    const currentPlan = currentService.plans[currentSlide];
    const transform = `translateX(-${currentSlide * 100}%)`;
    visualTrack.style.transform = transform;
    copyTrack.style.transform = transform;
    currentSlideLabel.textContent = pad(currentSlide + 1);
    progressLine.style.width = `${((currentSlide + 1) / total) * 100}%`;
    sliderDots.querySelectorAll(".slider-dot").forEach((dot, dotIndex) => {
        const active = dotIndex === currentSlide;
        dot.classList.toggle("active", active);
        dot.setAttribute("aria-current", active ? "true" : "false");
    });

    renderPlanTerms(currentService, currentPlan);

    serviceNav.querySelectorAll("[data-service][data-plan]").forEach((button) => {
        const active = button.dataset.service === currentService.id && Number(button.dataset.plan) === currentSlide;
        button.classList.toggle("active", active);
        button.setAttribute("aria-current", active ? "page" : "false");
    });

    if (window.lucide) window.lucide.createIcons();

    const url = new URL(window.location.href);
    url.searchParams.set("servicio", currentService.id);
    url.searchParams.set("opcion", slugify(currentPlan.name));
    window.history.replaceState({ service: currentService.id, option: currentSlide }, "", url);
}

document.getElementById("slidePrev").addEventListener("click", () => setSlide(currentSlide - 1));
document.getElementById("slideNext").addEventListener("click", () => setSlide(currentSlide + 1));
syncedSlider.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") setSlide(currentSlide - 1);
    if (event.key === "ArrowRight") setSlide(currentSlide + 1);
});
syncedSlider.addEventListener("pointerdown", (event) => {
    pointerStartX = event.clientX;
    syncedSlider.setPointerCapture?.(event.pointerId);
});
syncedSlider.addEventListener("pointerup", (event) => {
    if (pointerStartX === null) return;
    const delta = event.clientX - pointerStartX;
    pointerStartX = null;
    if (Math.abs(delta) > 48) setSlide(currentSlide + (delta < 0 ? 1 : -1));
});

const openSidebar = () => {
    document.body.classList.remove("sidebar-collapsed");
    if (window.innerWidth <= 820) document.body.classList.add("sidebar-open");
};
const closeSidebar = () => document.body.classList.remove("sidebar-open");
const collapseSidebar = () => {
    document.body.classList.remove("sidebar-open");
    if (window.innerWidth > 820) document.body.classList.toggle("sidebar-collapsed");
};
document.getElementById("sidebarToggle").addEventListener("click", openSidebar);
document.getElementById("sidebarClose").addEventListener("click", closeSidebar);
document.getElementById("sidebarCollapse").addEventListener("click", collapseSidebar);
document.getElementById("sidebarBackdrop").addEventListener("click", closeSidebar);

function updateClock() {
    document.getElementById("dashboardClock").textContent = new Intl.DateTimeFormat("es-CL", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    }).format(new Date());
}

renderNavigation();
const initialService = services.find((service) => service.id === requestedService) || services[0];
const initialPlanIndex = Math.max(0, initialService.plans.findIndex((plan) => slugify(plan.name) === requestedOption));
selectService(initialService.id, { initial: true, planIndex: initialPlanIndex });
updateClock();
setInterval(updateClock, 30000);
