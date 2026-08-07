const projects = [
    {
        id: "badiasalud",
        category: "Casos reales",
        name: "Badia Nurse Shield",
        short: "Sitio web + agenda",
        type: "Caso real / Salud y agendamiento",
        status: "Publicado",
        accent: "#16bdf2",
        accentRgb: "22, 189, 242",
        url: "https://www.badiasalud.cl",
        summary: "Una presencia profesional conectada con agenda y gestión privada para reducir coordinación manual, ordenar la disponibilidad y facilitar nuevas solicitudes de atención.",
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
        category: "Casos reales",
        name: "Constructora Proestakis",
        short: "Presencia corporativa",
        type: "Caso real / Construcción",
        status: "Publicado",
        accent: "#fb923c",
        accentRgb: "251, 146, 60",
        url: "https://constructora-proestakis.vercel.app/",
        summary: "Una vitrina digital para presentar experiencia, capacidad técnica y servicios desde un canal profesional propio orientado a nuevos clientes.",
        metrics: [["Estado", "Publicado"], ["Sector", "Construcción"], ["Enfoque", "Corporativo"], ["Experiencia", "Responsive"]],
        stack: "HTML5 · CSS3 · JavaScript · Vercel",
        journey: [
            {
                title: "Una portada que comunica solidez",
                description: "La primera vista presenta el rubro, propuesta de valor y experiencia de forma inmediata para reforzar confianza desde el primer contacto.",
                focus: "Vista principal",
                result: "Credibilidad",
                image: "assets/img/portfolio/proestakis-principal.webp",
                alt: "Vista principal del sitio corporativo de Constructora Proestakis"
            },
            {
                title: "Capacidad técnica respaldada con información concreta",
                description: "Cifras y capacidades ayudan a dimensionar la experiencia de la empresa sin obligar al visitante a recorrer grandes bloques de texto.",
                focus: "Capacidad técnica",
                result: "Claridad",
                image: "assets/img/portfolio/proestakis-cifras.webp",
                alt: "Bloque de capacidades y cifras del sitio de Constructora Proestakis"
            },
            {
                title: "Una propuesta de valor fácil de entender",
                description: "Los servicios y fortalezas se organizan visualmente para convertir la experiencia técnica en argumentos comerciales claros.",
                focus: "Propuesta de valor",
                result: "Captación",
                image: "assets/img/portfolio/proestakis-propuesta.webp",
                alt: "Propuesta de valor del sitio de Constructora Proestakis"
            }
        ],
        analysis: ["Falta de presencia digital consolidada", "Necesidad de respaldar experiencia y capacidades", "Mejorar la visibilidad de servicios", "Facilitar el contacto de nuevos clientes"],
        actionPlan: ["Sitio corporativo responsive", "Presentación de empresa y servicios", "Bloques de capacidad y experiencia", "Contacto directo y WhatsApp", "Base SEO inicial"],
        scalability: ["Portafolio ampliable de obras", "Formularios comerciales segmentados", "Agendamiento de visitas en terreno", "Módulos de seguimiento de proyectos"]
    },
    {
        id: "lecasse-it-services",
        category: "Casos reales",
        name: "Lecasse IT Services",
        short: "Presencia tecnológica",
        type: "Caso real / Tecnología B2B",
        status: "Publicado",
        accent: "#38bdf8",
        accentRgb: "56, 189, 248",
        url: "https://lecasse.vercel.app/",
        summary: "Una presencia tecnológica que ordena servicios y propuesta de valor para que potenciales clientes entiendan rápidamente las capacidades de la empresa.",
        metrics: [["Estado", "Publicado"], ["Sector", "Tecnología"], ["Modelo", "B2B"], ["Objetivo", "Captación"]],
        stack: "HTML5 · CSS3 · JavaScript · Vercel",
        journey: [
            {
                title: "Servicios tecnológicos presentados con claridad",
                description: "La vista principal resume capacidades y posicionamiento para que una oferta técnica compleja sea comprensible desde los primeros segundos.",
                focus: "Vista principal",
                result: "Claridad",
                image: "assets/img/portfolio/lecasse-principal.webp",
                alt: "Vista principal del sitio de Lecasse IT Services"
            },
            {
                title: "La oferta organizada por necesidad",
                description: "Las líneas de servicio se presentan en bloques visuales que conectan problemas habituales del cliente con capacidades concretas.",
                focus: "Servicios",
                result: "Orientación",
                image: "assets/img/portfolio/lecasse-servicios.webp",
                alt: "Tarjetas de servicios de Lecasse IT Services"
            },
            {
                title: "Una propuesta principal con identidad técnica",
                description: "Jerarquía, color y llamadas a la acción refuerzan una imagen profesional y reducen pasos entre interés y contacto.",
                focus: "Propuesta principal",
                result: "Conversión",
                image: "assets/img/portfolio/lecasse-hero.webp",
                alt: "Propuesta principal del sitio de Lecasse IT Services"
            }
        ],
        analysis: ["Oferta tecnológica difícil de comunicar", "Necesidad de fortalecer confianza y posicionamiento", "Servicios B2B con alto componente técnico", "Pocos puntos de conversión comercial"],
        actionPlan: ["Sitio corporativo responsive", "Presentación clara de líneas de servicio", "Jerarquía orientada a problemas del cliente", "Puntos de contacto visibles", "Base preparada para casos y oportunidades"],
        scalability: ["Casos de estudio", "Contenido técnico", "Formularios comerciales segmentados", "Integración con CRM y módulos B2B"]
    },
    {
        id: "tool-service-hours",
        category: "Soluciones digitales",
        name: "Control de horas de servicios",
        short: "HH, clientes y seguimiento",
        type: "Solución digital / Gestión de servicios",
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
        category: "Soluciones digitales",
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
        category: "Soluciones digitales",
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
    },
    {
        id: "tool-warehouse-control",
        category: "Soluciones digitales",
        name: "Control de bodega",
        short: "Stock y trazabilidad",
        type: "Solución digital / Inventario",
        status: "Disponible",
        accent: "#22d3ee",
        accentRgb: "34, 211, 238",
        url: null,
        summary: "Centraliza existencias, movimientos y responsables para que bodegas y operaciones mantengan información trazable y actualizada desde terreno.",
        metrics: [["Estado", "Disponible"], ["Foco", "Inventario"], ["Uso", "Móvil"], ["Control", "Trazabilidad"]],
        stack: "Stock · Movimientos · Bodegas · Trazabilidad",
        journey: [
            {
                title: "Administración general desde el móvil",
                description: "El panel administrador resume usuarios, productos, alertas, movimientos y valor del stock para entregar una visión ejecutiva de la operación.",
                focus: "Administración",
                result: "Visibilidad",
                image: "assets/img/portfolio/control-bodega-admin.webp",
                alt: "Panel administrador móvil de la herramienta de control de bodega"
            },
            {
                title: "Operación directa en el punto donde ocurre",
                description: "El usuario de bodega puede buscar, recibir y entregar artículos desde un flujo móvil diseñado para registrar movimientos sin volver a planillas de papel.",
                focus: "Operación móvil",
                result: "Trazabilidad",
                image: "assets/img/portfolio/control-bodega-operativo.webp",
                alt: "Interfaz móvil operativa de la herramienta de control de bodega"
            }
        ],
        analysis: ["Existencias distribuidas entre registros manuales", "Dificultad para conocer stock y ubicación", "Falta de trazabilidad por usuario", "Necesidad de registrar movimientos desde terreno"],
        actionPlan: ["Consulta y búsqueda de artículos", "Recepción y entrega digital", "Control de inventario por bodega", "Historial de movimientos", "Acceso diferenciado por roles"],
        scalability: ["Múltiples bodegas y proyectos", "Alertas de stock y mantenimiento", "Importación y exportación de inventario", "Integración con compras y abastecimiento"]
    },
    {
        id: "suizcorp",
        category: "En desarrollo",
        name: "SuizCorp",
        short: "Piloto de control de bodega",
        type: "Piloto activo / Inventario y logística",
        status: "Piloto activo",
        accent: "#22d3ee",
        accentRgb: "34, 211, 238",
        url: null,
        summary: "Piloto real de control de bodegas, inventario, movimientos, herramientas y trazabilidad con roles diferenciados para operación, supervisión y administración.",
        metrics: [["Estado", "Piloto activo"], ["Bodegas", "2"], ["Enfoque", "Stock"], ["Acceso", "Roles"]],
        stack: "Bodegas · Stock · Movimientos · Roles",
        journey: [
            {
                title: "Panel administrador del piloto",
                description: "La implementación permite revisar indicadores globales y administrar la operación desde una vista móvil adaptada al contexto del piloto.",
                focus: "Administración",
                result: "Control central",
                image: "assets/img/portfolio/control-bodega-admin.webp",
                alt: "Panel administrador del piloto SuizCorp"
            },
            {
                title: "Flujo operativo para usuario de bodega",
                description: "Recepción, entrega, búsqueda y otras acciones se concentran en una interfaz móvil para registrar movimientos directamente desde la operación.",
                focus: "Bodega",
                result: "Registro en terreno",
                image: "assets/img/portfolio/control-bodega-operativo.webp",
                alt: "Interfaz operativa del piloto SuizCorp"
            }
        ],
        analysis: ["Control distribuido entre bodegas", "Necesidad de operar desde dispositivos móviles", "Diferencias entre stock físico y registros", "Trazabilidad por usuario y movimiento"],
        actionPlan: ["Roles de trabajador, supervisor y administrador", "Recepción, entrega, préstamo y devolución", "Importación de inventario", "Stock general y por bodega", "Bitácora y evidencias"],
        scalability: ["Más proyectos y bodegas", "Alertas y mantenimiento", "Flujos de aprobación", "Reportería e integración con abastecimiento"]
    },
    {
        id: "hospital-felix-bulnes",
        category: "En desarrollo",
        name: "Hospital Félix Bulnes",
        short: "Bodega periférica hospitalaria",
        type: "Piloto en desarrollo / Logística en salud",
        status: "En desarrollo",
        accent: "#34d399",
        accentRgb: "52, 211, 153",
        url: null,
        summary: "Piloto orientado a una bodega periférica hospitalaria para mejorar control de existencias, movimientos y registro operacional desde dispositivos móviles.",
        metrics: [["Estado", "En desarrollo"], ["Sector", "Salud"], ["Foco", "Bodega periférica"], ["Uso", "Móvil"]],
        stack: "Bodega periférica · Stock · Movimientos · Uso móvil",
        journey: [
            {
                title: "Piloto en etapa de implementación",
                description: "El alcance está orientado a digitalizar el control de una bodega periférica, manteniendo trazabilidad de existencias y movimientos sin presentar como terminadas funciones que aún están en desarrollo.",
                focus: "Bodega periférica",
                result: "Validación",
                statusVisual: {
                    stage: "Piloto en desarrollo",
                    label: "Hospital Félix Bulnes",
                    detail: "Stock · movimientos · operación móvil"
                }
            }
        ],
        analysis: ["Registros manuales en una bodega periférica", "Necesidad de conocer existencias actualizadas", "Trazabilidad de entradas y salidas", "Acceso operativo desde dispositivos móviles"],
        actionPlan: ["Modelo de stock por bodega", "Registro digital de movimientos", "Perfiles operativos", "Consulta móvil de existencias", "Bitácora de responsables"],
        scalability: ["Nuevas unidades y bodegas", "Alertas por consumo", "Reportes por unidad", "Integración con sistemas institucionales"]
    }
];

const categoryOrder = ["Casos reales", "Soluciones digitales", "En desarrollo"];
const categoryIcons = {
    "Casos reales": "badge-check",
    "Soluciones digitales": "panels-top-left",
    "En desarrollo": "flask-conical"
};
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
    "control-gestion": "tool-warehouse-control",
    "cipapp": "suizcorp",
    "hfbapp": "hospital-felix-bulnes"
};
const rawRequestedProject = new URLSearchParams(window.location.search).get("proyecto");
const requestedProject = projectAliases[rawRequestedProject] || rawRequestedProject;
let currentProject = null;
let currentSlide = 0;
let pointerStartX = null;

const pad = (value) => String(value).padStart(2, "0");

function renderNavigation() {
    const requestedCategory = projects.find((project) => project.id === requestedProject)?.category || categoryOrder[0];

    projectNav.innerHTML = categoryOrder.map((category) => {
        const items = projects.filter((project) => project.category === category);
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
    const cards = [
        ["search-check", "Análisis para el cliente", "Necesidades y oportunidades identificadas durante la asesoría.", project.analysis],
        ["list-checks", "Plan de acción", "Solución propuesta para responder a los objetivos del proyecto.", project.actionPlan],
        ["chart-no-axes-combined", "Escalabilidad", "Evoluciones que pueden implementarse sobre la misma base.", project.scalability]
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

function selectProject(id, options = {}) {
    const project = projects.find((item) => item.id === id) || projects[0];
    currentProject = project;
    currentSlide = 0;

    document.documentElement.style.setProperty("--accent", project.accent);
    document.documentElement.style.setProperty("--accent-rgb", project.accentRgb);
    document.title = `${project.name} | Portafolio ISM Developer`;
    document.getElementById("projectType").textContent = project.type;
    document.getElementById("projectTitle").textContent = project.name;
    document.getElementById("projectSummary").textContent = project.summary;
    document.getElementById("techStack").textContent = project.stack;

    const externalLink = document.getElementById("externalProjectLink");
    externalLink.hidden = !project.url;
    if (project.url) externalLink.href = project.url;

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
if (portfolioProjectCount) portfolioProjectCount.textContent = `${projects.length} elementos disponibles`;
selectProject(requestedProject, { initial: true });
updateClock();
setInterval(updateClock, 30000);

requestAnimationFrame(() => {
    routeLoader.classList.remove("visible");
    if (window.lucide) window.lucide.createIcons();
});
