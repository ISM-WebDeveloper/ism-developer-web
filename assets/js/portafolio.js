const projects = [
    {
        id: "ism-presencia-digital",
        category: "Soluciones ISM",
        name: "ISM Presencia Digital",
        short: "Sitios y canales digitales profesionales",
        type: "Solución ISM / Presencia digital",
        status: "Disponible",
        accent: "#16bdf2",
        accentRgb: "22, 189, 242",
        url: null,
        summary: "Producto de ISM Developer para construir una presencia digital profesional, clara y escalable. La misma base se adapta al rubro, identidad y objetivos de cada cliente, incorporando sitio web, contacto, captación y funciones según necesidad.",
        metrics: [["Estado", "Disponible"], ["Tipo", "Solución ISM"], ["Enfoque", "Captación"], ["Casos", "3 publicados"]],
        stack: "Sitio web · Responsive · SEO inicial · Integraciones",
        journey: [
            {
                title: "Una solución adaptable a distintos rubros",
                description: "ISM Presencia Digital se implementa sobre una base profesional que se personaliza según marca, servicios, público y objetivos comerciales de cada negocio.",
                focus: "Producto",
                result: "Base reutilizable",
                image: "assets/img/portfolio/proestakis-web-principal.webp",
                alt: "Ejemplo de implementación corporativa de ISM Presencia Digital"
            },
            {
                title: "Puede incorporar funciones además del sitio",
                description: "Cuando el negocio lo necesita, la presencia digital puede conectarse con agendas, formularios, paneles privados u otros módulos sin reconstruir toda la solución desde cero.",
                focus: "Evolución",
                result: "Escalabilidad",
                image: "assets/img/portfolio/badia-nurse-shield-agenda.webp",
                alt: "Ejemplo de agenda conectada a una implementación de ISM Presencia Digital"
            },
            {
                title: "Casos reales que validan el producto",
                description: "Badia Nurse Shield, Constructora Proestakis y Lecasse IT Services muestran cómo la misma línea de producto puede adaptarse a salud, construcción y servicios tecnológicos.",
                focus: "Clientes ISM",
                result: "Validación",
                image: "assets/img/portfolio/lecasse-principal.webp",
                alt: "Ejemplo tecnológico de implementación de ISM Presencia Digital"
            }
        ],
        analysis: ["Negocios sin una presencia digital profesional", "Sitios que no explican bien los servicios", "Dependencia exclusiva de redes sociales o mensajería", "Necesidad de una base preparada para crecer"],
        actionPlan: ["Diseño responsive alineado con la marca", "Arquitectura de contenido y llamadas a la acción", "Contacto y canales comerciales", "SEO técnico inicial", "Integraciones según el alcance"],
        scalability: ["Agenda y reservas", "Catálogo o portafolio", "Paneles privados", "Automatizaciones e integraciones", "Nuevos módulos comerciales"]
    },
    {
        id: "ism-stock-control",
        category: "Soluciones ISM",
        name: "ISM Stock Control",
        short: "Inventario, bodegas y trazabilidad",
        type: "Solución ISM / Inventario y logística",
        status: "Producto activo",
        accent: "#22d3ee",
        accentRgb: "34, 211, 238",
        url: null,
        summary: "Sistema de ISM Developer para controlar stock, bodegas, recepciones, entregas, herramientas y movimientos con trazabilidad por usuario y operación. Está pensado para adaptarse a empresas con inventario físico y trabajo en terreno.",
        metrics: [["Estado", "Producto activo"], ["Foco", "Stock"], ["Operación", "Multi-bodega"], ["Acceso", "Roles"]],
        stack: "Bodegas · Stock · Movimientos · Roles · Trazabilidad",
        journey: [
            {
                title: "Visión central de inventario y operación",
                description: "El panel permite revisar existencias, movimientos y estado general desde una vista administrativa preparada para distintos roles y bodegas.",
                focus: "Administración",
                result: "Control central",
                image: "assets/img/portfolio/control-bodega-admin.webp",
                alt: "Panel administrador de ISM Stock Control"
            },
            {
                title: "Registro operativo desde terreno",
                description: "Recepciones, entregas, búsquedas y movimientos se registran desde una interfaz móvil para mantener la trazabilidad en el mismo punto donde ocurre la operación.",
                focus: "Operación móvil",
                result: "Trazabilidad",
                image: "assets/img/portfolio/control-bodega-operativo.webp",
                alt: "Interfaz operativa móvil de ISM Stock Control"
            }
        ],
        analysis: ["Inventario distribuido entre planillas y registros manuales", "Diferencias entre stock físico y registros", "Falta de trazabilidad por responsable", "Necesidad de operar desde dispositivos móviles"],
        actionPlan: ["Stock general y por bodega", "Recepción, entrega y movimientos", "Perfiles por rol", "Historial y bitácora", "Importación y exportación de información"],
        scalability: ["Nuevas bodegas y proyectos", "Alertas de stock y mantenimiento", "Flujos de aprobación", "Firma y evidencias", "Integración con compras y abastecimiento"]
    },
    {
        id: "ism-gestion-control",
        category: "Soluciones ISM",
        name: "ISM Gestión Control",
        short: "Gestión operacional y control interno",
        type: "Solución ISM / Gestión operacional",
        status: "En evolución",
        accent: "#34d399",
        accentRgb: "52, 211, 153",
        url: null,
        summary: "Plataforma de gestión operacional para centralizar recursos, responsables, movimientos y procesos internos. Su objetivo es reemplazar registros aislados por una operación trazable, ordenada y adaptable a distintas áreas de una organización.",
        metrics: [["Estado", "En evolución"], ["Tipo", "Solución ISM"], ["Foco", "Operaciones"], ["Modelo", "Modular"]],
        stack: "Procesos · Recursos · Roles · Registros · Reportes",
        journey: [
            {
                title: "Resumen operacional en un solo lugar",
                description: "Los indicadores principales y estados de operación se concentran en una vista para reducir la dispersión de información y facilitar el seguimiento diario.",
                focus: "Dashboard",
                result: "Visibilidad",
                image: "assets/img/project-ism-gestion-control-dashboard.svg",
                alt: "Vista conceptual del dashboard de ISM Gestión Control"
            },
            {
                title: "Recursos e inventario conectados con la gestión",
                description: "La solución permite relacionar existencias, responsables y movimientos dentro de un mismo flujo de control, sin limitarse a un único rubro.",
                focus: "Recursos",
                result: "Orden",
                image: "assets/img/project-ism-gestion-control-inventario.svg",
                alt: "Vista conceptual de recursos e inventario en ISM Gestión Control"
            },
            {
                title: "Procesos trazables y preparados para evolucionar",
                description: "La arquitectura modular permite incorporar nuevas unidades, permisos, flujos y reportes conforme crece la operación.",
                focus: "Operaciones",
                result: "Escalabilidad",
                image: "assets/img/project-ism-gestion-control-operaciones.svg",
                alt: "Vista conceptual de operaciones en ISM Gestión Control"
            }
        ],
        analysis: ["Información operacional distribuida", "Procesos manuales difíciles de auditar", "Falta de visibilidad sobre responsables y movimientos", "Necesidad de una herramienta adaptable a distintas áreas"],
        actionPlan: ["Modelo de usuarios y roles", "Registro central de operaciones", "Control de recursos y responsables", "Bitácora e historial", "Paneles y reportes según el proceso"],
        scalability: ["Nuevas áreas o unidades", "Flujos de aprobación", "Alertas y automatizaciones", "Integración con otros sistemas", "Indicadores y reportería avanzada"]
    },
    {
        id: "ism-boutique",
        category: "Soluciones ISM",
        name: "ISM Boutique",
        short: "Gestión comercial para boutiques",
        type: "Solución ISM / Comercio minorista",
        status: "En desarrollo",
        accent: "#f9a8d4",
        accentRgb: "249, 168, 212",
        url: null,
        summary: "Producto orientado a boutiques y pequeños comercios para centralizar productos, stock, ventas, clientes y seguimiento comercial desde una interfaz simple y adaptable al trabajo diario.",
        metrics: [["Estado", "En desarrollo"], ["Sector", "Retail"], ["Foco", "Ventas + stock"], ["Diseño", "Mobile first"]],
        stack: "Productos · Stock · Ventas · Clientes · Exportaciones",
        journey: [
            {
                title: "Producto en etapa de desarrollo",
                description: "La primera versión se está construyendo con foco en operación simple, control de productos, ventas y clientes para negocios de bajo y mediano flujo.",
                focus: "Producto",
                result: "Validación",
                statusVisual: {
                    stage: "Producto en desarrollo",
                    label: "ISM Boutique",
                    detail: "Stock · ventas · clientes · mobile first"
                }
            }
        ],
        analysis: ["Stock administrado manualmente", "Ventas sin historial central", "Dificultad para identificar clientes frecuentes", "Necesidad de operar fácilmente desde celular"],
        actionPlan: ["Catálogo y categorías", "Control de stock", "Registro de ventas", "Clientes y fidelización", "Exportación de información"],
        scalability: ["Catálogo público", "Alertas y promociones", "Reportes comerciales", "Integración con presencia digital", "Automatizaciones de seguimiento"]
    },
    {
        id: "badiasalud",
        category: "Clientes ISM",
        name: "Badia Nurse Shield",
        short: "Sitio web + agenda",
        type: "Cliente ISM / ISM Presencia Digital",
        status: "Publicado",
        accent: "#16bdf2",
        accentRgb: "22, 189, 242",
        url: "https://www.badiasalud.cl",
        summary: "Javier, enfermero con más de 10 años de experiencia, nos pidió ayuda para gestionar un sistema de agenda con reservas que integrara su presencia digital y le permitiera automatizar la gestión de sus servicios.",
        metrics: [["Estado", "Publicado"], ["Sector", "Salud"], ["Canal", "Sitio + agenda"], ["Gestión", "Panel privado"]],
        stack: "Sitio web · Agenda · Procedimientos · Supabase",
        journey: [
            {
                title: "Una presencia profesional que genera confianza",
                description: "El sitio presenta los servicios, experiencia y propuesta de atención domiciliaria desde una identidad propia, con acceso directo a la reserva.",
                focus: "Sitio web",
                result: "Confianza",
                image: "assets/img/portfolio/badia-nurse-shield-sitio.webp",
                alt: "Sitio web de Badia Nurse Shield para atención de enfermería domiciliaria"
            },
            {
                title: "Disponibilidad visible y conectada",
                description: "La agenda privada organiza horarios, cupos y días disponibles sobre datos reales, evitando cruces y facilitando la administración diaria.",
                focus: "Agenda",
                result: "Orden operativo",
                image: "assets/img/portfolio/badia-nurse-shield-agenda.webp",
                alt: "Panel privado de agenda y disponibilidad de Badia Nurse Shield"
            },
            {
                title: "Servicios y reglas gestionados desde un panel",
                description: "Procedimientos, precios, configuración profesional y reglas operativas quedan centralizados para que la solución pueda evolucionar sin depender de cambios manuales en el sitio.",
                focus: "Gestión interna",
                result: "Autonomía",
                image: "assets/img/portfolio/badia-nurse-shield-panel.webp",
                alt: "Panel de procedimientos y configuración profesional de Badia Nurse Shield"
            }
        ],
        analysis: ["Presentar servicios y experiencia con una identidad propia", "Reducir coordinación manual de horas", "Mantener disponibilidad y solicitudes en un único sistema", "Permitir crecimiento del catálogo y operación"],
        actionPlan: ["Sitio web profesional responsive", "Agenda conectada a disponibilidad real", "Panel privado para procedimientos y configuración", "Flujo de solicitudes y lista de espera", "Base preparada para nuevas automatizaciones"],
        scalability: ["Recordatorios y confirmaciones automáticas", "Historial de pacientes y solicitudes", "Nuevas prestaciones y zonas de cobertura", "Administración de múltiples profesionales"]
    },
    {
        id: "constructora-proestakis",
        category: "Clientes ISM",
        name: "Constructora Proestakis",
        short: "Presencia corporativa",
        type: "Cliente ISM / ISM Presencia Digital",
        status: "Publicado",
        accent: "#fb923c",
        accentRgb: "251, 146, 60",
        url: "https://constructora-proestakis.vercel.app/",
        summary: "Una vitrina digital para presentar experiencia, capacidad técnica y servicios desde un canal profesional propio orientado a nuevos clientes.",
        metrics: [["Estado", "Publicado"], ["Sector", "Construcción"], ["Enfoque", "Corporativo"], ["Experiencia", "Responsive"]],
        stack: "HTML5 · CSS3 · JavaScript · Vercel",
        journey: [
            {
                title: "La presencia corporativa en un entorno real",
                description: "La página principal se muestra dentro de un computador real para comunicar con claridad la marca, sus servicios y su propuesta desde el primer contacto.",
                focus: "Vista principal",
                result: "Credibilidad",
                image: "assets/img/portfolio/proestakis-web-principal.webp",
                alt: "Página principal de Constructora Proestakis mostrada en un computador"
            },
            {
                title: "Renovación presentada como experiencia visual",
                description: "La sección de renovación muestra trabajos antes y después dentro de una navegación real, facilitando la comprensión del resultado.",
                focus: "Renovación",
                result: "Evidencia",
                image: "assets/img/portfolio/proestakis-web-renovacion.webp",
                alt: "Sección de renovación de Constructora Proestakis mostrada durante una revisión en computador"
            },
            {
                title: "Servicios técnicos explicados en contexto",
                description: "La sección de electricidad industrial comunica alcance y capacidades técnicas mientras una persona navega el sitio desde un computador real.",
                focus: "Electricidad industrial",
                result: "Captación",
                image: "assets/img/portfolio/proestakis-web-electricidad.webp",
                alt: "Sección de electricidad industrial de Constructora Proestakis mostrada en un computador"
            }
        ],
        analysis: ["Falta de presencia digital consolidada", "Necesidad de respaldar experiencia y capacidades", "Mejorar la visibilidad de servicios", "Facilitar el contacto de nuevos clientes"],
        actionPlan: ["Sitio corporativo responsive", "Presentación de empresa y servicios", "Bloques de capacidad y experiencia", "Contacto directo y WhatsApp", "Base SEO inicial"],
        scalability: ["Portafolio ampliable de obras", "Formularios comerciales segmentados", "Agendamiento de visitas en terreno", "Módulos de seguimiento de proyectos"]
    },
    {
        id: "lecasse-it-services",
        category: "Clientes ISM",
        name: "Lecasse IT Services",
        short: "Presencia tecnológica",
        type: "Cliente ISM / ISM Presencia Digital",
        status: "Publicado",
        accent: "#38bdf8",
        accentRgb: "56, 189, 248",
        url: "https://lecasse.vercel.app/",
        summary: "Una presencia tecnológica que ordena servicios y propuesta de valor para que potenciales clientes entiendan rápidamente las capacidades de la empresa.",
        metrics: [["Estado", "Publicado"], ["Sector", "Tecnología"], ["Modelo", "B2B"], ["Objetivo", "Captación"]],
        stack: "HTML5 · CSS3 · JavaScript · Vercel",
        journey: [
            {
                title: "Soluciones empresariales presentadas en contexto",
                description: "La propuesta tecnológica se muestra dentro de una reunión real, ayudando a visualizar cómo Lecasse comunica capacidades para plataformas empresariales y misión crítica.",
                focus: "Soluciones empresariales",
                result: "Claridad",
                image: "assets/img/portfolio/lecasse-reunion-soluciones.webp",
                alt: "Equipo revisando las soluciones de Lecasse en una sala de reuniones"
            },
            {
                title: "Desarrollo de software conectado con la operación",
                description: "La solución se presenta en un notebook dentro de una sala de servidores, reforzando la relación entre software, infraestructura y trabajo técnico en terreno.",
                focus: "Software en terreno",
                result: "Integración",
                image: "assets/img/portfolio/lecasse-servidores-software.webp",
                alt: "Dos profesionales revisando el desarrollo de software de Lecasse en una sala de servidores"
            },
            {
                title: "Infraestructura empresarial desde un entorno profesional",
                description: "La página se muestra en un notebook dentro de una oficina, destacando servicios de infraestructura, cloud, seguridad y continuidad operacional en un contexto corporativo real.",
                focus: "Infraestructura empresarial",
                result: "Confianza",
                image: "assets/img/portfolio/lecasse-oficina-infraestructura.webp",
                alt: "Sitio de infraestructura empresarial de Lecasse mostrado en un notebook dentro de una oficina"
            }
        ],
        analysis: ["Oferta tecnológica difícil de comunicar", "Necesidad de fortalecer confianza y posicionamiento", "Servicios B2B con alto componente técnico", "Pocos puntos de conversión comercial"],
        actionPlan: ["Sitio corporativo responsive", "Presentación clara de líneas de servicio", "Jerarquía orientada a problemas del cliente", "Puntos de contacto visibles", "Base preparada para casos y oportunidades"],
        scalability: ["Casos de estudio", "Contenido técnico", "Formularios comerciales segmentados", "Integración con CRM y módulos B2B"]
    },
    {
        id: "tool-service-hours",
        category: "Soluciones ISM",
        name: "Control de horas de servicios",
        short: "HH, clientes y seguimiento",
        type: "Herramienta ISM / Gestión de servicios",
        status: "Disponible",
        accent: "#2563eb",
        accentRgb: "37, 99, 235",
        url: null,
        summary: "Centraliza horas de servicio, actividades, clientes y seguimiento comercial para reemplazar registros dispersos y mantener trazabilidad de lo ejecutado.",
        metrics: [["Estado", "Disponible"], ["Foco", "Horas de servicio"], ["Gestión", "Clientes"], ["Extensión", "B2B"]],
        stack: "Horas · Actividades · Clientes · Reportes",
        journey: [
            {
                title: "Acceso privado y controlado",
                description: "El sistema parte desde un acceso protegido para separar responsabilidades y mantener la información operativa disponible solo para los perfiles autorizados.",
                focus: "Acceso",
                result: "Control",
                image: "assets/img/portfolio/control-horas-login.webp",
                alt: "Pantalla de acceso privado del sistema de control de horas de servicio"
            },
            {
                title: "Seguimiento comercial conectado con la operación",
                description: "El módulo de oportunidades B2B permite complementar el control de horas con pipeline, responsables, montos y próximos pasos dentro de la misma solución.",
                focus: "Oportunidades B2B",
                result: "Seguimiento",
                image: "assets/img/portfolio/control-horas-b2b.webp",
                alt: "Panel de oportunidades B2B del sistema de control de horas de servicio"
            }
        ],
        analysis: ["Horas registradas en planillas o fuentes separadas", "Dificultad para consultar actividad por cliente", "Necesidad de respaldar gestión y cobro", "Seguimiento comercial desconectado de la operación"],
        actionPlan: ["Registro centralizado de actividades", "Consulta por cliente y responsable", "Reportes y exportaciones", "Acceso por roles", "Módulo comercial B2B opcional"],
        scalability: ["Facturación y valorización automática", "Integración con otros sistemas", "Indicadores por cliente y servicio", "Flujos comerciales y notificaciones"]
    },
    {
        id: "tool-service-sizing",
        category: "Soluciones ISM",
        name: "Dimensionador de servicios",
        short: "Alcance y estimación técnica",
        type: "Solución digital / Configuración y cotización",
        status: "Disponible",
        accent: "#12bce7",
        accentRgb: "18, 188, 231",
        url: null,
        summary: "Convierte servicios, actividades y cantidades en una estimación técnica ordenada para revisar alcance, esfuerzo y horas antes de preparar una cotización formal.",
        metrics: [["Estado", "Disponible"], ["Unidad", "HH"], ["Salida", "Resumen"], ["Enfoque", "Alcance"]],
        stack: "Servicios · Actividades · HH · Exportación",
        journey: [
            {
                title: "Configurar una solución desde servicios reales",
                description: "El usuario selecciona una línea, servicio y actividades para construir un alcance preliminar sin partir desde una hoja en blanco.",
                focus: "Configuración",
                result: "Orden",
                image: "assets/img/portfolio/dimensionador-servicios-general.webp",
                alt: "Vista principal del configurador de servicios ISM Developer"
            },
            {
                title: "Horas y alcance visibles mientras se decide",
                description: "El desglose muestra actividades, horas técnicas, contingencia y nivel de servicio para revisar el impacto de cada selección antes de cotizar.",
                focus: "Dimensionamiento",
                result: "Transparencia",
                image: "assets/img/portfolio/dimensionador-servicios-detalle.webp",
                alt: "Desglose de actividades y resumen técnico del configurador de servicios ISM Developer"
            }
        ],
        analysis: ["Cotizaciones dependientes de estimaciones poco estandarizadas", "Dificultad para explicar qué incluye cada servicio", "Riesgo de omitir actividades", "Necesidad de estimar antes de cotizar formalmente"],
        actionPlan: ["Catálogo estructurado de servicios y actividades", "Cálculo de horas técnicas", "Nivel de servicio automático", "Resumen consolidado", "Exportación para revisión comercial"],
        scalability: ["Precios y tarifas por especialidad", "Plantillas por rubro", "Cotización comercial automática", "Integración con CRM y seguimiento de oportunidades"]
    },
    {
        id: "tool-availability-agenda",
        category: "Soluciones ISM",
        name: "Control de disponibilidad con agenda",
        short: "Horarios, cupos y reservas",
        type: "Solución digital / Agendamiento",
        status: "Disponible",
        accent: "#0ea5e9",
        accentRgb: "14, 165, 233",
        url: null,
        summary: "Permite publicar disponibilidad y ordenar el agendamiento para que clientes y equipos trabajen sobre horarios realmente disponibles.",
        metrics: [["Estado", "Disponible"], ["Foco", "Disponibilidad"], ["Unidad", "Cupos"], ["Operación", "Agenda"]],
        stack: "Agenda · Disponibilidad · Horarios · Reservas",
        journey: [
            {
                title: "Un día activo con sus cupos calculados",
                description: "La interfaz muestra horario operativo, reservas ocupadas y cupos libres para que la disponibilidad real sea comprensible de inmediato.",
                focus: "Disponibilidad",
                result: "Visibilidad",
                image: "assets/img/portfolio/agenda-disponibilidad-dia-activo.webp",
                alt: "Panel de agenda con un día activo y cupos disponibles"
            },
            {
                title: "Días cerrados sin generar falsas reservas",
                description: "Cuando una fecha no tiene disponibilidad configurada, el sistema la presenta como cerrada y evita ofrecer horarios inexistentes.",
                focus: "Control de agenda",
                result: "Consistencia",
                image: "assets/img/portfolio/agenda-disponibilidad-dia-cerrado.webp",
                alt: "Panel de agenda con un día cerrado y sin cupos disponibles"
            }
        ],
        analysis: ["Coordinación manual de horarios", "Cruces de agenda", "Disponibilidad que cambia durante el mes", "Necesidad de mostrar cupos reales"],
        actionPlan: ["Agenda mensual configurable", "Cálculo de cupos", "Activación y bloqueo de días", "Visualización de reservas ocupadas", "Reglas de horario por servicio"],
        scalability: ["Recordatorios automáticos", "Pagos y confirmaciones", "Múltiples profesionales", "Integración con calendarios externos"]
    }
];


const commercialProfiles = {
    "ism-presencia-digital": {
        kicker: "Solución ISM",
        title: "Una base profesional que se adapta al negocio.",
        badge: "Base reutilizable · Personalización por rubro",
        audienceTitle: "Para quién está pensado",
        audience: [
            "Empresas y profesionales que necesitan un canal digital propio.",
            "Negocios que dependen demasiado de redes sociales o mensajería.",
            "Equipos que quieren presentar servicios con mayor claridad y confianza.",
            "Proyectos que necesitan una base preparada para sumar agenda, catálogo o automatizaciones."
        ],
        capabilitiesTitle: "Qué puede incluir",
        capabilities: [
            "Sitio responsive alineado con la identidad de marca.",
            "Arquitectura comercial, formularios y llamadas a la acción.",
            "SEO técnico inicial, analítica y canales de contacto.",
            "Agenda, catálogo, paneles privados e integraciones según alcance."
        ],
        casesKicker: "Clientes ISM",
        casesTitle: "Una misma línea, adaptada a distintos rubros",
        cases: [
            { name: "Badia Nurse Shield", meta: "Salud · Web + agenda + gestión", status: "Publicado", projectId: "badiasalud" },
            { name: "Constructora Proestakis", meta: "Construcción · Presencia corporativa", status: "Publicado", projectId: "constructora-proestakis" },
            { name: "Lecasse IT Services", meta: "Tecnología · Servicios B2B", status: "Publicado", projectId: "lecasse-it-services" }
        ],
        casesNote: "Cada implementación conserva la base de la solución, pero se adapta a la marca, el rubro, los procesos y los objetivos del cliente.",
        model: "Base ISM + personalización + publicación",
        modelDetail: "Definimos el objetivo, adaptamos la experiencia y habilitamos las funciones que realmente necesita el negocio.",
        action: "Solicitar ISM Presencia Digital"
    },
    "ism-stock-control": {
        kicker: "Solución ISM",
        title: "Inventario y trazabilidad sin depender de registros dispersos.",
        badge: "Producto activo · Operación adaptable",
        audienceTitle: "Para quién está pensado",
        audience: [
            "Bodegas y faenas con entradas, entregas y movimientos frecuentes.",
            "Empresas con inventario distribuido entre proyectos o ubicaciones.",
            "Equipos que necesitan saber quién retiró, recibió o movió un recurso.",
            "Operaciones que requieren trazabilidad desde computador y celular."
        ],
        capabilitiesTitle: "Qué puede incluir",
        capabilities: [
            "Stock general, por proyecto y por bodega.",
            "Recepciones, entregas, devoluciones y movimientos.",
            "Usuarios, roles, bitácora e historial operacional.",
            "Importaciones, exportaciones, alertas, firma y evidencias según alcance."
        ],
        casesKicker: "Implementaciones",
        casesTitle: "La solución se valida en operaciones reales",
        cases: [
            { name: "Implementación operacional privada", meta: "Inventario · bodegas · trazabilidad", status: "Caso privado" }
        ],
        casesNote: "Las implementaciones de clientes se publican únicamente cuando existe autorización. La identidad de proyectos privados no se expone en el portafolio.",
        model: "Base ISM + configuración operacional",
        modelDetail: "Adaptamos bodegas, roles, movimientos, reglas y reportes a la operación real sin reconstruir el sistema desde cero.",
        action: "Solicitar ISM Stock Control"
    },
    "ism-gestion-control": {
        kicker: "Solución ISM",
        title: "Una capa de control para ordenar procesos y responsables.",
        badge: "Producto modular · En evolución",
        audienceTitle: "Para quién está pensado",
        audience: [
            "Empresas con procesos internos repartidos entre planillas y mensajes.",
            "Operaciones que necesitan asignar responsables y mantener historial.",
            "Equipos que administran recursos, solicitudes, estados o aprobaciones.",
            "Organizaciones que necesitan crecer por módulos sin perder trazabilidad."
        ],
        capabilitiesTitle: "Qué puede incluir",
        capabilities: [
            "Dashboard operacional y estados de proceso.",
            "Usuarios, roles, responsables y permisos por función.",
            "Registro de operaciones, recursos, movimientos y bitácora.",
            "Reportes, alertas, aprobaciones e integraciones según necesidad."
        ],
        casesKicker: "Validación de la solución",
        casesTitle: "Pilotos e implementaciones sin exponer proyectos privados",
        cases: [
            { name: "Piloto de gestión operacional", meta: "Recursos · responsables · procesos", status: "Piloto privado" }
        ],
        casesNote: "La solución se presenta de forma independiente del cliente. Cuando una implementación sea publicable, se incorporará como cliente e implementación asociado.",
        model: "Base modular + procesos del cliente",
        modelDetail: "Partimos desde módulos reutilizables y configuramos entidades, permisos, estados y flujos según el proceso que se necesita controlar.",
        action: "Solicitar ISM Gestión Control"
    },
    "ism-boutique": {
        kicker: "Solución ISM",
        title: "Gestión simple para vender, controlar stock y conocer clientes.",
        badge: "Mobile first · En desarrollo",
        audienceTitle: "Para quién está pensado",
        audience: [
            "Boutiques, tiendas de ropa y emprendimientos de accesorios.",
            "Negocios que venden desde celular, feria, redes sociales o local físico.",
            "Emprendimientos que necesitan controlar stock sin un ERP complejo.",
            "Tiendas que quieren construir historial de ventas y clientes frecuentes."
        ],
        capabilitiesTitle: "Qué puede incluir",
        capabilities: [
            "Productos, categorías, tallas, colores y stock.",
            "Ventas, clientes, historial y seguimiento comercial.",
            "Alertas, inventarios manuales y exportaciones.",
            "Catálogo o presencia digital conectada al control interno."
        ],
        casesKicker: "Primera implementación",
        casesTitle: "La solución se está construyendo junto a una operación real",
        cases: [
            { name: "Primera implementación comercial", meta: "Boutique · stock · ventas · clientes", status: "En desarrollo" }
        ],
        casesNote: "La primera implementación servirá para validar el flujo diario antes de publicar nuevos clientes e implementaciones.",
        model: "Base retail + identidad y operación del negocio",
        modelDetail: "La solución prioriza uso móvil, tareas simples y módulos que puedan crecer conforme aumenta la operación.",
        action: "Consultar ISM Boutique"
    }
};

const caseProductRelations = {
    "badiasalud": {
        productId: "ism-presencia-digital",
        productName: "ISM Presencia Digital",
        title: "Una implementación real de ISM Presencia Digital.",
        adapted: ["Identidad y propuesta de servicios", "Agenda y disponibilidad", "Panel privado de gestión", "Experiencia orientada a pacientes"],
        proves: ["La presencia digital puede evolucionar a sistema", "Una misma base puede incorporar agenda", "La solución se adapta a un profesional independiente"]
    },
    "constructora-proestakis": {
        productId: "ism-presencia-digital",
        productName: "ISM Presencia Digital",
        title: "Una implementación corporativa de ISM Presencia Digital.",
        adapted: ["Identidad corporativa", "Servicios y capacidad técnica", "Portafolio visual", "Contacto comercial"],
        proves: ["El producto funciona en servicios técnicos", "Puede comunicar experiencia y confianza", "La estructura se adapta a venta B2B"]
    },
    "lecasse-it-services": {
        productId: "ism-presencia-digital",
        productName: "ISM Presencia Digital",
        title: "Una implementación tecnológica de ISM Presencia Digital.",
        adapted: ["Servicios tecnológicos", "Propuesta B2B", "Arquitectura de contenido", "Contacto y posicionamiento"],
        proves: ["La base se adapta a una oferta técnica", "Permite ordenar servicios complejos", "Mantiene una identidad propia por cliente"]
    }
};

const categoryOrder = ["Soluciones ISM", "Clientes ISM"];
const categoryIcons = {
    "Soluciones ISM": "boxes",
    "Clientes ISM": "users-round"
};
const primarySolutionIds = new Set([
    "ism-presencia-digital",
    "ism-stock-control",
    "ism-gestion-control",
    "ism-boutique"
]);
const projectNav = document.getElementById("projectNav");
const visualTrack = document.getElementById("visualTrack");
const copyTrack = document.getElementById("copyTrack");
const sliderDots = document.getElementById("sliderDots");
const progressLine = document.getElementById("progressLine");
const currentSlideLabel = document.getElementById("currentSlide");
const totalSlidesLabel = document.getElementById("totalSlides");
const syncedSlider = document.getElementById("syncedSlider");
const routeLoader = document.getElementById("routeLoader");
const projectAliases = {
    "tool-warehouse-control": "ism-stock-control",
    "control-gestion": "ism-stock-control"
};
const rawRequestedProject = new URLSearchParams(window.location.search).get("proyecto");
let requestedProject = projectAliases[rawRequestedProject] || rawRequestedProject;

const visiblePortfolioProjects = projects.filter((project) =>
    project.category === "Clientes ISM" || primarySolutionIds.has(project.id)
);
const defaultProjectId = "badiasalud";

if (!visiblePortfolioProjects.some((project) => project.id === requestedProject)) {
    requestedProject = defaultProjectId;
}
let currentProject = null;
let currentSlide = 0;
let pointerStartX = null;

const pad = (value) => String(value).padStart(2, "0");

function renderNavigation() {
    const requestedCategory = projects.find((project) => project.id === requestedProject)?.category || categoryOrder[0];

    projectNav.innerHTML = categoryOrder.map((category) => {
        const items = visiblePortfolioProjects.filter((project) => project.category === category);
        const categoryId = `category-${category.toLowerCase().replace(/\s+/g, "-")}`;
        const expanded = category === requestedCategory;
        return `
            <div class="nav-group${expanded ? " expanded" : ""}" data-category-group="${category}">
                <button class="nav-group-toggle" type="button" aria-expanded="${expanded}" aria-controls="${categoryId}" title="${category}">
                    <i class="nav-group-icon" data-lucide="${categoryIcons[category]}"></i>
                    <span>${category}</span>
                    <span class="nav-group-count">${items.length}</span>
                </button>
                <div class="nav-group-items" id="${categoryId}">
                    ${items.map((project) => {
                        return `
                            <button class="project-nav-item" type="button" data-project="${project.id}">
                                <span class="nav-dot" aria-hidden="true"></span>
                                <span class="nav-copy"><strong>${project.name}</strong><small>${project.short}</small></span>
                            </button>`;
                    }).join("")}
                </div>
            </div>`;
    }).join("");

    projectNav.querySelectorAll(".nav-group-toggle").forEach((toggle) => {
        toggle.addEventListener("click", () => {
            const group = toggle.closest(".nav-group");
            if (document.body.classList.contains("sidebar-collapsed")) {
                document.body.classList.remove("sidebar-collapsed");
                group.classList.add("expanded");
                toggle.setAttribute("aria-expanded", "true");
                return;
            }
            const expanded = !group.classList.contains("expanded");
            group.classList.toggle("expanded", expanded);
            toggle.setAttribute("aria-expanded", String(expanded));
        });
    });

    projectNav.querySelectorAll("[data-project]").forEach((button) => {
        button.addEventListener("click", () => selectProject(button.dataset.project));
    });
}

function renderMetrics(project) {
    document.getElementById("projectMetrics").innerHTML = project.metrics.map(([label, value]) => `
        <div class="metric"><span>${label}</span><strong>${value}</strong></div>
    `).join("");
}

function renderSlides(project) {
    visualTrack.innerHTML = project.journey.map((slide, index) => {
        const visual = slide.image
            ? `<img src="${slide.image}" alt="${slide.alt}" loading="${index ? "lazy" : "eager"}" decoding="async">`
            : `<div class="project-status-visual" role="img" aria-label="${slide.statusVisual.label}: ${slide.statusVisual.stage}">
                    <span>${slide.statusVisual.stage}</span>
                    <strong>${slide.statusVisual.label}</strong>
                    <small>${slide.statusVisual.detail}</small>
               </div>`;

        return `
            <article class="visual-slide">
                <div class="screen-frame">
                    ${visual}
                    <span class="screen-badge">${slide.focus}</span>
                </div>
            </article>`;
    }).join("");

    copyTrack.innerHTML = project.journey.map((slide) => `
        <article class="copy-slide">
            <h3>${slide.title}</h3>
            <p>${slide.description}</p>
            <div class="copy-detail">
                <div><span>Foco</span><strong>${slide.focus}</strong></div>
                <div><span>Resultado</span><strong>${slide.result}</strong></div>
            </div>
        </article>
    `).join("");

    sliderDots.innerHTML = project.journey.map((slide, index) => `
        <button class="slider-dot" type="button" data-slide="${index}" aria-label="Ver ${slide.title}"></button>
    `).join("");

    sliderDots.querySelectorAll("[data-slide]").forEach((button) => {
        button.addEventListener("click", () => setSlide(Number(button.dataset.slide)));
    });

    totalSlidesLabel.textContent = pad(project.journey.length);
}

function renderTechnical(project) {
    const relation = caseProductRelations[project.id];
    const cards = relation
        ? [
            ["search-check", "Punto de partida", "Necesidades concretas que justificaron la implementación.", project.analysis],
            ["badge-check", "Solución implementada", "Elementos entregados para responder al contexto del cliente.", project.actionPlan],
            ["waypoints", "Evolución posible", "Capacidades que pueden incorporarse sobre la misma base.", project.scalability]
        ]
        : [
            ["search-check", "Necesidad que aborda", "Situaciones donde esta herramienta puede aportar orden o trazabilidad.", project.analysis],
            ["list-checks", "Qué resuelve", "Funciones principales incluidas en el alcance actual.", project.actionPlan],
            ["chart-no-axes-combined", "Cómo puede crecer", "Evoluciones posibles sobre la misma herramienta.", project.scalability]
        ];

    document.getElementById("technicalGrid").innerHTML = cards.map(([icon, title, description, items]) => `
        <article class="technical-card">
            <span class="tech-icon"><i data-lucide="${icon}"></i></span>
            <h3>${title}</h3>
            <p>${description}</p>
            <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>
    `).join("");
}


function renderCommercial(project) {
    const section = document.getElementById("commercialSection");
    if (!section) return;

    const profile = commercialProfiles[project.id];
    const relation = caseProductRelations[project.id];
    const audienceTitle = document.getElementById("commercialAudienceTitle");
    const capabilitiesTitle = document.getElementById("commercialCapabilitiesTitle");

    section.classList.toggle("is-product-profile", Boolean(profile));
    section.classList.toggle("is-case-profile", Boolean(relation));
    section.classList.toggle("is-tool-profile", false);

    let view;
    let solutionId = null;

    if (profile) {
        view = profile;
        solutionId = project.id;
    } else if (relation) {
        view = {
            kicker: "Cliente ISM",
            title: relation.title,
            badge: `Implementación de ${relation.productName}`,
            audienceTitle: "Qué se adaptó al cliente",
            audience: relation.adapted,
            capabilitiesTitle: "Qué demuestra esta implementación",
            capabilities: relation.proves
        };
        solutionId = relation.productId;
    } else {
        view = {
            kicker: "Portafolio ISM",
            title: "Una herramienta creada para ordenar una tarea concreta.",
            badge: "Herramienta complementaria",
            audienceTitle: "Cuándo puede ser útil",
            audience: project.analysis.slice(0, 4),
            capabilitiesTitle: "Qué resuelve",
            capabilities: project.actionPlan.slice(0, 4)
        };
    }

    document.getElementById("commercialKicker").textContent = view.kicker;
    document.getElementById("commercialTitle").textContent = view.title;
    document.getElementById("commercialBadge").textContent = view.badge;
    audienceTitle.textContent = view.audienceTitle;
    capabilitiesTitle.textContent = view.capabilitiesTitle;
    document.getElementById("commercialAudience").innerHTML = view.audience.map((item) => `<li>${item}</li>`).join("");
    document.getElementById("commercialCapabilities").innerHTML = view.capabilities.map((item) => `<li>${item}</li>`).join("");

    const actionEyebrow = document.getElementById("portfolioActionEyebrow");
    const actionTitle = document.getElementById("portfolioActionTitle");
    const actionDescription = document.getElementById("portfolioActionDescription");
    const whatsapp = document.getElementById("portfolioActionWhatsapp");
    const configurator = document.getElementById("portfolioActionConfigurator");
    const assistant = document.getElementById("portfolioActionAssistant");
    const form = document.getElementById("portfolioActionForm");

    const referenceName = profile ? project.name : relation ? relation.productName : project.name;

    if (profile) {
        actionEyebrow.textContent = "¿Quieres esta solución para tu empresa?";
        actionTitle.textContent = `Revisa ${project.name} según tu necesidad.`;
        actionDescription.textContent = "Elige la forma más cómoda de evaluar alcance, resolver dudas o solicitar una propuesta.";
    } else if (relation) {
        actionEyebrow.textContent = "¿Quieres una solución similar para tu empresa?";
        actionTitle.textContent = `Podemos adaptar ${relation.productName} a tu contexto.`;
        actionDescription.textContent = "Usa uno de estos canales para revisar tu necesidad sin recorrer más páginas.";
    } else {
        actionEyebrow.textContent = "¿Quieres evaluar esta herramienta?";
        actionTitle.textContent = "Revisemos si encaja en tu operación.";
        actionDescription.textContent = "Puedes conversar directo o definir primero el alcance con una herramienta ISM.";
    }

    const productQuery = solutionId ? `?producto=${encodeURIComponent(solutionId)}` : "";
    configurator.href = `configurador/${productQuery}`;
    assistant.href = "guia-web/";
    form.href = solutionId
        ? `index.html?producto=${encodeURIComponent(solutionId)}#contacto`
        : "index.html#contacto";

    whatsapp.href = `https://wa.me/56968374821?text=${encodeURIComponent(`Hola, quiero revisar ${referenceName} para mi empresa.`)}`;
}
function selectProject(id, options = {}) {
    const project = visiblePortfolioProjects.find((item) => item.id === id) || visiblePortfolioProjects[0];
    currentProject = project;
    currentSlide = 0;

    document.documentElement.style.setProperty("--accent", project.accent);
    document.documentElement.style.setProperty("--accent-rgb", project.accentRgb);
    document.title = `${project.name} | Portafolio ISM | ISM Developer`;
    document.getElementById("projectType").textContent = project.type;
    document.getElementById("projectTitle").textContent = project.name;
    document.getElementById("projectSummary").textContent = project.summary;
    document.getElementById("techStack").textContent = project.stack;

    const externalLink = document.getElementById("externalProjectLink");
    const externalLinkLabel = document.getElementById("externalProjectLinkLabel");
    const primaryLink = project.url;

    externalLink.hidden = !primaryLink;
    if (primaryLink) {
        externalLink.href = primaryLink;
        externalLinkLabel.textContent = "Visitar proyecto";
        externalLink.target = "_blank";
        externalLink.rel = "noopener noreferrer";
    }

    projectNav.querySelectorAll("[data-project]").forEach((button) => {
        const isActive = button.dataset.project === project.id;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-current", isActive ? "true" : "false");

        if (isActive) {
            const group = button.closest(".nav-group");
            group?.classList.add("expanded");
            group?.querySelector(".nav-group-toggle")?.setAttribute("aria-expanded", "true");
        }
    });

    renderMetrics(project);
    renderSlides(project);
    renderTechnical(project);
    renderCommercial(project);
    setSlide(0);

    const url = new URL(window.location.href);
    url.searchParams.set("proyecto", project.id);
    window.history.replaceState({ project: project.id }, "", url);
    document.body.classList.remove("sidebar-open");

    if (window.lucide) window.lucide.createIcons();
    if (!options.initial && window.innerWidth > 820) {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}

function setSlide(index) {
    if (!currentProject) return;
    const total = currentProject.journey.length;
    currentSlide = (index + total) % total;
    const translate = `translateX(-${currentSlide * 100}%)`;
    visualTrack.style.transform = translate;
    copyTrack.style.transform = translate;
    currentSlideLabel.textContent = pad(currentSlide + 1);
    progressLine.style.width = `${((currentSlide + 1) / total) * 100}%`;

    sliderDots.querySelectorAll(".slider-dot").forEach((dot, dotIndex) => {
        const active = dotIndex === currentSlide;
        dot.classList.toggle("active", active);
        dot.setAttribute("aria-current", active ? "true" : "false");
    });
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
const portfolioProjectCount = document.getElementById("portfolioProjectCount");
if (portfolioProjectCount) portfolioProjectCount.textContent = "4 soluciones · 3 clientes";
selectProject(requestedProject, { initial: true });
updateClock();
setInterval(updateClock, 30000);

requestAnimationFrame(() => {
    routeLoader.classList.remove("visible");
    if (window.lucide) window.lucide.createIcons();
});
