const services = [
    {
        id: "presencia-digital",
        name: "Presencia Digital",
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
                image: "assets/img/presencia-esencial-preview.png",
                alt: "Vista de una propuesta de presencia digital esencial",
                focus: "Inicio profesional",
                result: "Visibilidad",
                items: ["Landing page simple", "Diseño responsive", "WhatsApp y redes", "Formulario básico"]
            },
            {
                name: "Presencia Profesional",
                description: "Para marcas o servicios que requieren más secciones, una estructura comercial sólida y comunicación completa.",
                image: "assets/img/presencia-profesional-preview.png",
                alt: "Vista de una propuesta de presencia digital profesional",
                focus: "Estructura comercial",
                result: "Confianza",
                items: ["Más contenido", "Secciones estratégicas", "Mejor narrativa", "Optimización visual"]
            },
            {
                name: "Presencia Premium",
                description: "Para proyectos que necesitan diferenciación visual, interacciones avanzadas y una experiencia de mayor nivel.",
                image: "assets/img/presencia-premium-preview.png",
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
        id: "planes-de-continuidad",
        name: "Planes de Continuidad",
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
                description: "Para mantener el sitio operativo, resolver ajustes menores y contar con respaldo técnico cuando sea necesario.",
                image: "assets/img/soporte-base-preview.png",
                alt: "Panel visual del plan Soporte Base",
                focus: "Prevención",
                result: "Estabilidad",
                items: ["Revisión mensual", "Ajustes pequeños", "Soporte preventivo", "Canal directo"]
            },
            {
                name: "Mantención Activa",
                description: "Para negocios que actualizan campañas, imágenes, textos o información de forma recurrente.",
                image: "assets/img/soporte-activo-preview.png",
                alt: "Panel visual del plan Mantención Activa",
                focus: "Actualización",
                result: "Vigencia",
                items: ["Cambios mensuales", "Actualización de textos", "Optimización visual", "Mejoras continuas"]
            },
            {
                name: "Evolución Continua",
                description: "Para plataformas que deben incorporar nuevas funciones, integraciones y mejoras estratégicas en el tiempo.",
                image: "assets/img/soporte-evolucion-preview.png",
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
        name: "Asesorías Digitales",
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
                image: "assets/img/asesoria-inicial-preview.png",
                alt: "Panel visual de asesoría digital inicial",
                focus: "Definición",
                result: "Ruta clara",
                items: ["Definición de alcance", "Mapa de secciones", "Prioridad de contenido", "Ruta de trabajo"]
            },
            {
                name: "Revisión Web",
                description: "Revisamos qué funciona, qué confunde al usuario y qué conviene mejorar antes de invertir en cambios.",
                image: "assets/img/asesoria-revision-preview.png",
                alt: "Panel visual de revisión web",
                focus: "Experiencia actual",
                result: "Oportunidades",
                items: ["Revisión visual", "Experiencia de usuario", "Contenido y claridad", "Prioridades de mejora"]
            },
            {
                name: "Auditoría Digital",
                description: "Analizamos la solución actual para detectar brechas de estructura, comunicación y capacidad de crecimiento.",
                image: "assets/img/asesoria-auditoria-preview.png",
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

const serviceNav = document.getElementById("serviceNav");
const visualTrack = document.getElementById("visualTrack");
const copyTrack = document.getElementById("copyTrack");
const sliderDots = document.getElementById("sliderDots");
const progressLine = document.getElementById("progressLine");
const currentSlideLabel = document.getElementById("currentSlide");
const totalSlidesLabel = document.getElementById("totalSlides");
const syncedSlider = document.getElementById("syncedSlider");
const requestedService = new URLSearchParams(window.location.search).get("servicio");
let currentService = null;
let currentSlide = 0;
let pointerStartX = null;

const pad = (value) => String(value).padStart(2, "0");

function renderNavigation() {
    serviceNav.innerHTML = services.map((service) => `
        <button class="project-nav-item" type="button" data-service="${service.id}">
            <span class="nav-dot" aria-hidden="true"></span>
            <span class="nav-copy"><strong>${service.name}</strong><small>${service.short}</small></span>
        </button>
    `).join("");

    serviceNav.querySelectorAll("[data-service]").forEach((button) => {
        button.addEventListener("click", () => selectService(button.dataset.service));
    });
}

function renderMetrics(service) {
    document.getElementById("serviceMetrics").innerHTML = service.metrics.map(([label, value]) => `
        <div class="metric"><span>${label}</span><strong>${value}</strong></div>
    `).join("");
}

function renderPlans(service) {
    visualTrack.innerHTML = service.plans.map((plan, index) => `
        <article class="visual-slide">
            <div class="screen-frame">
                <img src="${plan.image}" alt="${plan.alt}" loading="${index ? "lazy" : "eager"}">
                <span class="screen-badge">${plan.focus}</span>
            </div>
        </article>
    `).join("");

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
        ["search-check", "Análisis de la necesidad", "Lo que revisamos antes de proponer una solución.", service.analysis],
        ["list-checks", "Plan de acción", "Cómo convertimos el diagnóstico en pasos concretos.", service.action],
        ["chart-no-axes-combined", "Escalabilidad", "Opciones que pueden sumarse sobre la misma estrategia.", service.scalability]
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

function selectService(id, options = {}) {
    const service = services.find((item) => item.id === id) || services[0];
    currentService = service;
    currentSlide = 0;
    document.body.classList.add("service-dashboard");
    document.documentElement.style.setProperty("--accent", service.accent);
    document.documentElement.style.setProperty("--accent-rgb", service.accentRgb);
    document.title = `${service.name} | ISM Developer`;
    document.getElementById("serviceType").textContent = service.type;
    document.getElementById("serviceTitle").textContent = service.name;
    document.getElementById("serviceSummary").textContent = service.summary;
    document.getElementById("serviceScope").textContent = service.scope;

    serviceNav.querySelectorAll("[data-service]").forEach((button) => {
        const active = button.dataset.service === service.id;
        button.classList.toggle("active", active);
        button.setAttribute("aria-current", active ? "page" : "false");
    });

    renderMetrics(service);
    renderPlans(service);
    renderTechnical(service);
    setSlide(0);

    const url = new URL(window.location.href);
    url.searchParams.set("servicio", service.id);
    window.history.replaceState({ service: service.id }, "", url);
    document.body.classList.remove("sidebar-open");
    if (window.lucide) window.lucide.createIcons();
    if (!options.initial && window.innerWidth > 820) window.scrollTo({ top: 0, behavior: "smooth" });
}

function setSlide(index) {
    if (!currentService) return;
    const total = currentService.plans.length;
    currentSlide = (index + total) % total;
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

const openSidebar = () => document.body.classList.add("sidebar-open");
const closeSidebar = () => document.body.classList.remove("sidebar-open");
document.getElementById("sidebarToggle").addEventListener("click", openSidebar);
document.getElementById("sidebarClose").addEventListener("click", closeSidebar);
document.getElementById("sidebarBackdrop").addEventListener("click", closeSidebar);

function updateClock() {
    document.getElementById("dashboardClock").textContent = new Intl.DateTimeFormat("es-CL", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    }).format(new Date());
}

renderNavigation();
selectService(requestedService, { initial: true });
updateClock();
setInterval(updateClock, 30000);
