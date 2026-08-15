/**
 * Guía Web ISM · Lógica principal
 * Versión de parche: P5.0
 *
 * Responsabilidades:
 * - Mantener el estado temporal de la guía en el navegador.
 * - Renderizar preguntas, progreso, estructura del proyecto y resultado.
 * - Aplicar reglas determinísticas de recomendación y madurez digital.
 * - Registrar recomendaciones aceptadas, descartadas o pendientes.
 * - Validar los datos del prospecto y enviarlos a /api/pre-cotizacion.
 * - Ejecutar Turnstile y adjuntar un token de seguridad de un solo uso.
 *
 * Importante:
 * - La guía utiliza lenguaje comercial simple; no expone arquitectura ni HH.
 * - La tarifa y la estimación técnica se calculan exclusivamente en el servidor.
 */
(function () {
    "use strict";

    // =====================================================================
    // 01. ESTADO DE SESIÓN
    // Se conserva únicamente mientras la persona recorre la guía.
    // =====================================================================

    var state = {
        step: 0,
        goals: [],
        industry: null,
        presence: [],
        content: [],
        actions: [],
        recommendationDecisions: {},
        contact: {
            name: "",
            business: "",
            email: "",
            phone: "",
            consent: false
        },
        security: {
            turnstileToken: "",
            turnstileWidgetId: null,
            turnstileReady: false,
            turnstileLoading: false
        }
    };

    // =====================================================================
    // 02. CATÁLOGO VISIBLE Y CONFIGURACIÓN DE LA EXPERIENCIA
    // Textos simples orientados al cliente; no contienen detalle técnico/HH.
    // =====================================================================

    var totalSteps = 8;

    var data = {
        goals: [
            ["clientes", "Conseguir clientes", "Que nuevas personas te encuentren y te contacten.", "target"],
            ["reservas", "Recibir reservas", "Que elijan un servicio, fecha u horario.", "calendar-check"],
            ["servicios", "Mostrar mis servicios", "Explicar qué haces y cómo puedes ayudar.", "layers-3"],
            ["consultas", "Recibir consultas", "Llevar al visitante a un canal de contacto.", "message-square"],
            ["portafolio", "Mostrar mi trabajo", "Presentar proyectos, casos o resultados reales.", "panel-top"],
            ["ventas", "Vender online", "Mostrar productos y facilitar pedidos o compras.", "truck"],
            ["procesos", "Digitalizar un proceso", "Reducir tareas manuales, coordinaciones o registros repetitivos.", "workflow"]
        ],
        industries: [
            ["salud", "Salud y bienestar", "Profesionales, centros, terapias y estética.", "badge-check"],
            ["belleza", "Belleza y cuidado personal", "Barberías, salones, uñas y servicios afines.", "sparkles"],
            ["profesional", "Profesional independiente", "Asesorías y servicios especializados.", "pencil-ruler"],
            ["comercio", "Comercio o tienda", "Productos, stock, pedidos y ventas.", "truck"],
            ["gastronomia", "Gastronomía", "Restaurantes, cafeterías y servicios de comida.", "layers-3"],
            ["turismo", "Turismo o alojamiento", "Experiencias, reservas, hospedaje y actividades.", "route"],
            ["construccion", "Construcción o servicios técnicos", "Obras, mantención y servicios especializados.", "settings"],
            ["b2b", "Empresa o servicios B2B", "Servicios dirigidos principalmente a otras empresas.", "handshake"],
            ["otro", "Otro negocio", "Si tu actividad no encaja en las alternativas anteriores.", "rocket"]
        ],
        presence: [
            ["social", "Instagram o Facebook", "Uso redes sociales para mostrar mi negocio.", "messages-square"],
            ["whatsapp", "WhatsApp", "Atiendo o coordino directamente por WhatsApp.", "message-square"],
            ["maps", "Google Maps", "Tengo una ficha o ubicación visible.", "route"],
            ["web", "Página web", "Ya cuento con un sitio web propio.", "monitor"],
            ["booking", "Sistema de reservas", "Uso una agenda o plataforma de reservas.", "calendar-check"],
            ["shop", "Tienda online", "Ya vendo o recibo pedidos mediante una plataforma.", "truck"],
            ["none", "Nada todavía", "Estoy comenzando mi presencia digital.", "rocket"]
        ],
        essentials: [
            ["Adaptable", "Se ve bien en celular y computador.", "monitor"],
            ["Segura", "Cuenta con una conexión HTTPS.", "shield-check"],
            ["Optimizada", "Tiene una carga rápida y ordenada.", "trending-up"],
            ["SEO inicial", "Incluye una base para buscadores.", "search-check"],
            ["Contacto claro", "Facilita el siguiente paso del visitante.", "message-square"]
        ],
        content: [
            ["services", "Servicios", "Qué ofreces y cómo ayudas a tus clientes.", "layers-3"],
            ["prices", "Precios o planes", "Valores, alternativas o planes disponibles.", "database"],
            ["about", "Sobre nosotros", "Historia, experiencia y propuesta de valor.", "panel-top"],
            ["team", "Equipo o profesionales", "Quiénes están detrás del servicio.", "handshake"],
            ["gallery", "Galería o trabajos", "Resultados, proyectos o productos.", "monitor"],
            ["faq", "Preguntas frecuentes", "Respuestas antes del primer contacto.", "messages-square"]
        ],
        actions: [
            ["whatsapp", "Conversar por WhatsApp", "Un canal de contacto rápido y directo.", "message-square"],
            ["form", "Enviar un formulario", "Antecedentes ordenados del interesado.", "panel-top"],
            ["booking", "Reservar una hora", "Elegir un servicio, fecha u horario.", "calendar-check"],
            ["quote", "Pedir una cotización", "Enviar una solicitud con antecedentes.", "send"],
            ["shop", "Comprar o hacer un pedido", "Revisar productos e iniciar una compra.", "truck"],
            ["account", "Ingresar a una cuenta", "Acceder a información o funciones privadas.", "shield-check"],
            ["automation", "Automatizar una tarea", "Reducir pasos repetitivos o coordinaciones manuales.", "workflow"],
            ["integration", "Conectar con otro sistema", "Compartir información con una plataforma que ya utilizas.", "server"]
        ]
    };

    var stepNames = [
        "Bienvenida",
        "Objetivos",
        "Tu negocio",
        "Situación actual",
        "Contenido",
        "Acciones",
        "Recomendación",
        "Datos y envío",
        "Confirmación"
    ];

    // =====================================================================
    // 03. REFERENCIAS DEL DOM
    // Elementos persistentes consultados durante todo el recorrido.
    // =====================================================================

    var selectors = {
        screens: document.querySelectorAll(".guide-screen"),
        main: document.getElementById("guideMain"),
        progressBar: document.getElementById("progressBar"),
        progressTrack: document.getElementById("progressTrack"),
        stepIndicator: document.getElementById("stepIndicator"),
        backButton: document.getElementById("backBtn"),
        nextButton: document.getElementById("nextBtn"),
        actionsBar: document.getElementById("actionsBar")
    };

    // =====================================================================
    // 04. UTILIDADES GENERALES Y MANEJO DE SELECCIONES
    // =====================================================================

    /** Regenera los iconos Lucide insertados dinámicamente. */
    function refreshIcons() {
        if (window.lucide && typeof window.lucide.createIcons === "function") {
            window.lucide.createIcons();
        }
    }

    function findItem(collection, id) {
        return collection.find(function (entry) {
            return entry[0] === id;
        });
    }

    function findLabel(collection, id) {
        var item = findItem(collection, id);
        return item ? item[1] : id;
    }

    function includes(collection, id) {
        return collection.includes(id);
    }

    function isSelected(key, id, single) {
        return single ? state[key] === id : state[key].includes(id);
    }

    function toggleSelection(key, id, single) {
        if (single) {
            state[key] = id;
            return;
        }

        var current = state[key];
        var existingIndex = current.indexOf(id);

        if (existingIndex >= 0) {
            current.splice(existingIndex, 1);
            return;
        }

        current.push(id);

        // "Nada todavía" es excluyente respecto del resto de presencia digital.
        if (key === "presence" && id === "none") {
            state.presence = ["none"];
        } else if (key === "presence" && id !== "none") {
            state.presence = state.presence.filter(function (entry) {
                return entry !== "none";
            });
        }
    }

    // =====================================================================
    // 05. COMPONENTES DINÁMICOS DE OPCIONES
    // =====================================================================

    /** Crea una tarjeta seleccionable y mantiene aria-pressed sincronizado. */
    function createChoice(item, key, single) {
        var id = item[0];
        var title = item[1];
        var description = item[2];
        var iconName = item[3];
        var selected = isSelected(key, id, single);
        var button = document.createElement("button");

        button.type = "button";
        button.className = "guide-choice" + (selected ? " is-selected" : "");
        button.dataset.id = id;
        button.setAttribute("aria-pressed", String(selected));
        button.innerHTML = [
            '<span class="guide-choice-head">',
            '<span class="guide-choice-icon"><i data-lucide="' + iconName + '" aria-hidden="true"></i></span>',
            '<span class="guide-choice-copy">',
            "<strong>" + title + "</strong>",
            "<small>" + description + "</small>",
            "</span>",
            "</span>"
        ].join("");

        button.addEventListener("click", function () {
            toggleSelection(key, id, single);
            pruneRecommendationDecisions();
            renderAll();
        });

        return button;
    }

    function renderChoices(containerId, items, key, single) {
        var container = document.getElementById(containerId);
        if (!container) return;

        container.replaceChildren();
        items.forEach(function (item) {
            container.appendChild(createChoice(item, key, single));
        });
    }

    function renderEssentials() {
        var container = document.getElementById("essentialsGrid");
        if (!container) return;

        container.replaceChildren();
        data.essentials.forEach(function (item) {
            var card = document.createElement("article");
            card.className = "guide-essential";
            card.innerHTML = [
                '<span class="guide-essential-icon"><i data-lucide="' + item[2] + '" aria-hidden="true"></i></span>',
                "<strong>" + item[0] + "</strong>",
                "<small>" + item[1] + "</small>"
            ].join("");
            container.appendChild(card);
        });
    }

    // =====================================================================
    // 06. MOTOR DE ORIENTACIÓN ISM
    // Reglas determinísticas que convierten respuestas simples en sugerencias.
    // =====================================================================

    function recommendation(id, title, description, shortLabel, icon, featured) {
        return {
            id: id,
            title: title,
            description: description,
            shortLabel: shortLabel || title,
            icon: icon || "plus",
            featured: Boolean(featured)
        };
    }

    /** Devuelve recomendaciones contextuales sin repetir lo que el usuario ya eligió. */
    function getRecommendations() {
        var recommendations = [];

        if ((includes(state.goals, "reservas") || includes(state.actions, "booking"))) {
            recommendations.push(recommendation(
                "availability",
                "Horarios y disponibilidad",
                "Ayudan a que una reserva muestre opciones claras y reduzca coordinaciones manuales.",
                "Horarios",
                "calendar-check",
                true
            ));
        }

        if ((state.industry === "salud" || state.industry === "profesional") && !includes(state.content, "team")) {
            recommendations.push(recommendation(
                "professional-profile",
                "Perfil profesional",
                "Mostrar experiencia, especialidad y enfoque genera confianza antes del contacto.",
                "Perfil profesional",
                "pencil-ruler",
                true
            ));
        }

        if ((state.industry === "belleza" || state.industry === "construccion") && !includes(state.content, "gallery")) {
            recommendations.push(recommendation(
                "portfolio-gallery",
                "Galería de trabajos",
                "Ver resultados reales ayuda a evaluar la calidad antes de consultar.",
                "Galería",
                "monitor",
                true
            ));
        }

        if ((includes(state.goals, "clientes") || includes(state.goals, "consultas")) && !includes(state.actions, "whatsapp") && !includes(state.actions, "form")) {
            recommendations.push(recommendation(
                "contact-channel",
                "Un canal de contacto visible",
                "El visitante debería poder dar el siguiente paso sin buscar tus datos.",
                "Contacto",
                "message-square",
                true
            ));
        }

        if ((includes(state.goals, "ventas") || includes(state.actions, "shop")) && state.industry !== "b2b") {
            recommendations.push(recommendation(
                "delivery-info",
                "Entrega, despacho o retiro",
                "Aclarar cómo recibirá su compra reduce dudas antes de hacer un pedido.",
                "Entrega o retiro",
                "truck",
                false
            ));
        }

        if (!includes(state.content, "faq")) {
            recommendations.push(recommendation(
                "faq",
                "Preguntas frecuentes",
                "Resuelven dudas repetidas antes de que una persona tenga que escribirte.",
                "Preguntas frecuentes",
                "messages-square",
                false
            ));
        }

        if (!includes(state.presence, "maps") && ["salud", "belleza", "comercio", "gastronomia", "turismo"].includes(state.industry)) {
            recommendations.push(recommendation(
                "local-presence",
                "Ubicación y presencia local",
                "Facilita que personas cercanas encuentren tu negocio y sepan cómo llegar.",
                "Ubicación",
                "route",
                false
            ));
        }

        if (includes(state.goals, "procesos") && !includes(state.actions, "automation") && !includes(state.actions, "integration")) {
            recommendations.push(recommendation(
                "process-review",
                "Revisar el proceso actual",
                "Antes de automatizar conviene identificar qué pasos se repiten, quién participa y dónde se pierde tiempo.",
                "Proceso actual",
                "workflow",
                true
            ));
        }

        if (includes(state.actions, "integration")) {
            recommendations.push(recommendation(
                "integration-scope",
                "Definir qué información se conecta",
                "Una integración necesita dejar claro qué datos entran, salen y cuándo deben sincronizarse.",
                "Datos a integrar",
                "server",
                true
            ));
        }

        if (recommendations.length < 2) {
            recommendations.push(recommendation(
                "measurement",
                "Medición de contactos",
                "Conocer qué botones generan consultas permite mejorar la solución con evidencia.",
                "Analítica básica",
                "trending-up",
                false
            ));
        }

        return recommendations.slice(0, 4);
    }

    /** Elimina decisiones antiguas si una recomendación deja de aplicar. */
    function pruneRecommendationDecisions() {
        var validIds = getRecommendations().map(function (item) { return item.id; });
        Object.keys(state.recommendationDecisions).forEach(function (id) {
            if (!validIds.includes(id)) delete state.recommendationDecisions[id];
        });
    }

    function setRecommendationDecision(id, decision) {
        if (state.recommendationDecisions[id] === decision) {
            delete state.recommendationDecisions[id];
        } else {
            state.recommendationDecisions[id] = decision;
        }
        renderAll();
    }

    function getRecommendationDecision(id) {
        return state.recommendationDecisions[id] || "pending";
    }

    /** Clasifica el proyecto en una solución inicial sin exponer códigos al usuario. */
    function getSolution() {
        if (includes(state.actions, "integration")) {
            return ["Integración o solución conectada", "Tu proyecto necesita intercambiar información con otra plataforma o sistema.", "INT"];
        }
        if (includes(state.actions, "automation") || includes(state.goals, "procesos")) {
            return ["Solución digital con automatización", "El foco está en reducir tareas manuales y ordenar un proceso de tu negocio.", "AUTOMATION"];
        }
        if (includes(state.actions, "account")) {
            return ["Aplicación web personalizada", "Tu proyecto incorpora usuarios o información privada y supera una web informativa tradicional.", "APP"];
        }
        if (includes(state.actions, "shop") || includes(state.goals, "ventas")) {
            return ["Tienda online o solución comercial", "Una experiencia para mostrar productos, recibir pedidos y preparar el proceso de compra.", "SHOP"];
        }
        if (includes(state.actions, "booking") || includes(state.goals, "reservas")) {
            return ["Sitio web profesional con reservas", "Una presencia clara con un recorrido para elegir servicio, fecha u horario.", "BOOKING"];
        }
        if (includes(state.actions, "quote")) {
            return ["Sitio web profesional con captación", "Presenta tus servicios y convierte visitas en solicitudes de cotización ordenadas.", "LEAD"];
        }
        return ["Sitio web profesional", "Una presencia clara para presentar tu negocio, generar confianza y facilitar el contacto.", "WEB"];
    }

    /**
     * Prioridad de madurez: Evolución > Consolidación > Optimización > Primeros pasos.
     * Así una función avanzada nunca queda clasificada por debajo de una web existente.
     */
    function getMaturity() {
        var advanced = includes(state.actions, "account") || includes(state.actions, "automation") || includes(state.actions, "integration") || includes(state.goals, "procesos");
        var transactional = includes(state.actions, "shop") || includes(state.actions, "booking") || includes(state.goals, "ventas") || includes(state.goals, "reservas");
        var existingBase = includes(state.presence, "web") || includes(state.presence, "booking") || includes(state.presence, "shop");
        var somePresence = existingBase || includes(state.presence, "social") || includes(state.presence, "whatsapp") || includes(state.presence, "maps");

        if (advanced) {
            return ["Evolución digital", "Tu proyecto ya incorpora procesos, usuarios o conexiones que requieren una solución más avanzada."];
        }
        if (transactional && existingBase) {
            return ["Consolidación digital", "Ya tienes una base y ahora buscas convertirla en una experiencia más completa para tus clientes."];
        }
        if (somePresence) {
            return ["Optimización digital", "Ya cuentas con presencia digital; ahora estamos ordenando cómo convertirla en una experiencia más útil."];
        }
        return ["Primeros pasos", "Estamos construyendo una base clara para que te encuentren, entiendan tu propuesta y puedan avanzar."];
    }

    // =====================================================================
    // 07. RESULTADO, RECOMENDACIONES Y ESTRUCTURA VISUAL DEL PROYECTO
    // =====================================================================

    function getAcceptedRecommendations() {
        return getRecommendations().filter(function (item) {
            return getRecommendationDecision(item.id) === "accepted";
        });
    }

    function getRejectedRecommendations() {
        return getRecommendations().filter(function (item) {
            return getRecommendationDecision(item.id) === "rejected";
        });
    }

    function renderRecommendationCard(item) {
        var decision = getRecommendationDecision(item.id);
        var card = document.createElement("article");
        var headerLabel = item.featured ? "Recomendado" : "Complementario";

        card.className = "guide-recommendation" + (item.featured ? " is-featured" : "") + " is-" + decision;
        card.innerHTML = [
            '<span class="guide-recommendation-label"><i data-lucide="' + item.icon + '" aria-hidden="true"></i>' + headerLabel + "</span>",
            "<h3>" + item.title + "</h3>",
            "<p>" + item.description + "</p>",
            '<div class="guide-recommendation-actions">',
            '<button type="button" class="guide-recommendation-button guide-recommendation-button--accept" data-decision="accepted"><i data-lucide="badge-check" aria-hidden="true"></i>' + (decision === "accepted" ? "Agregado" : "Agregar") + "</button>",
            '<button type="button" class="guide-recommendation-button guide-recommendation-button--reject" data-decision="rejected"><i data-lucide="x" aria-hidden="true"></i>' + (decision === "rejected" ? "Descartado" : "Ahora no") + "</button>",
            "</div>"
        ].join("");

        card.querySelectorAll("[data-decision]").forEach(function (button) {
            button.addEventListener("click", function () {
                setRecommendationDecision(item.id, button.dataset.decision);
            });
        });

        return card;
    }

    function renderResult() {
        var solution = getSolution();
        var recommendations = getRecommendations();
        var accepted = getAcceptedRecommendations();
        var resultTitle = document.getElementById("resultTitle");
        var resultCopy = document.getElementById("resultCopy");
        var finalTitle = document.getElementById("finalTitle");
        var finalSummary = document.getElementById("finalSummary");
        var tags = document.getElementById("resultTags");
        var recommendationBox = document.getElementById("recommendBox");
        var selectedTags = [];

        state.content.forEach(function (id) { selectedTags.push(findLabel(data.content, id)); });
        state.actions.forEach(function (id) { selectedTags.push(findLabel(data.actions, id)); });
        accepted.forEach(function (item) { selectedTags.push(item.shortLabel); });

        selectedTags = Array.from(new Set(selectedTags)).slice(0, 10);

        resultTitle.textContent = solution[0];
        resultCopy.textContent = solution[1];
        finalTitle.textContent = solution[0];
        finalSummary.textContent = accepted.length
            ? "Incorporaste " + accepted.length + (accepted.length === 1 ? " sugerencia" : " sugerencias") + " de ISM a tu orientación inicial."
            : "Tu configuración queda lista para que ISM revise el alcance contigo.";

        tags.replaceChildren();
        (selectedTags.length ? selectedTags : ["Configuración inicial"]).forEach(function (label) {
            var chip = document.createElement("span");
            chip.className = "guide-tag";
            chip.textContent = label;
            tags.appendChild(chip);
        });

        recommendationBox.replaceChildren();
        recommendations.forEach(function (item) {
            recommendationBox.appendChild(renderRecommendationCard(item));
        });
    }

    function updatePresenceLesson() {
        var lesson = document.getElementById("presenceLesson");
        if (!lesson) return;

        if (includes(state.presence, "social") && !includes(state.presence, "web")) {
            lesson.innerHTML = '<i data-lucide="lightbulb" aria-hidden="true"></i><p><strong>Tu red social ya aporta visibilidad:</strong> una web puede ordenar la información y concentrar las acciones importantes.</p>';
        } else if (includes(state.presence, "web")) {
            lesson.innerHTML = '<i data-lucide="search-check" aria-hidden="true"></i><p><strong>Ya tienes una base:</strong> podemos enfocarnos en mejorar el recorrido o incorporar nuevas funciones.</p>';
        } else if (includes(state.presence, "none")) {
            lesson.innerHTML = '<i data-lucide="rocket" aria-hidden="true"></i><p><strong>Partir desde cero también es una ventaja:</strong> podemos ordenar la solución desde el objetivo principal.</p>';
        } else {
            lesson.innerHTML = '<i data-lucide="lightbulb" aria-hidden="true"></i><p><strong>Cada canal cumple un rol:</strong> ahora veremos cómo reunirlos en una experiencia más clara.</p>';
        }
    }

    /** Construye la estructura lateral con secciones y acciones reales del proyecto. */
    function getProjectNodes() {
        var nodes = [{ label: "Inicio", detail: "Punto de entrada", icon: "target", kind: "base" }];

        state.content.forEach(function (id) {
            var item = findItem(data.content, id);
            if (item) nodes.push({ label: item[1], detail: "Contenido", icon: item[3], kind: "content" });
        });

        state.actions.forEach(function (id) {
            var item = findItem(data.actions, id);
            if (item) nodes.push({ label: item[1], detail: "Acción", icon: item[3], kind: "action" });
        });

        getAcceptedRecommendations().forEach(function (item) {
            nodes.push({ label: item.shortLabel, detail: "Sugerencia agregada", icon: item.icon, kind: "recommendation" });
        });

        return nodes;
    }

    function renderProjectMap() {
        var container = document.getElementById("projectMap");
        if (!container) return;

        var nodes = getProjectNodes();

        // P5: mostramos todos los elementos elegidos. Si la estructura crece,
        // el contenedor lateral usa scroll en lugar de resumir con “+ N elementos”.
        container.replaceChildren();
        nodes.forEach(function (node) {
            var item = document.createElement("div");
            item.className = "guide-map-node is-active" + (node.kind === "recommendation" ? " is-recommended" : "");
            item.innerHTML = [
                '<span><i data-lucide="' + node.icon + '" aria-hidden="true"></i></span>',
                "<div><strong>" + node.label + "</strong><small>" + node.detail + "</small></div>"
            ].join("");
            container.appendChild(item);
        });
    }

    function updateAside() {
        var maturity = getMaturity();
        renderProjectMap();
        document.getElementById("maturityTitle").textContent = maturity[0];
        document.getElementById("maturityCopy").textContent = maturity[1];
    }

    // =====================================================================
    // 08. NAVEGACIÓN, PROGRESO Y VALIDACIÓN DE CADA PASO
    // =====================================================================

    function canContinue() {
        if (state.step === 1) return state.goals.length > 0;
        if (state.step === 2) return Boolean(state.industry);
        if (state.step === 3) return state.presence.length > 0;
        if (state.step === 4) return state.content.length > 0;
        if (state.step === 5) return state.actions.length > 0;
        return true;
    }

    function updateNavigation() {
        var progress = state.step === 0 ? 4 : Math.round((state.step / totalSteps) * 100);
        var nextLabel = "Continuar";

        selectors.main.classList.toggle("is-welcome", state.step === 0);
        selectors.main.classList.toggle("is-success", state.step === 8);

        var experience = document.querySelector(".guide-experience");
        if (experience) experience.classList.toggle("is-success", state.step === 8);

        selectors.screens.forEach(function (screen) {
            screen.classList.toggle("is-active", Number(screen.dataset.step) === state.step);
        });

        selectors.stepIndicator.textContent = state.step === 0
            ? "Bienvenida"
            : "Paso " + state.step + " de " + totalSteps + " · " + stepNames[state.step];
        selectors.progressBar.style.width = progress + "%";
        selectors.progressTrack.setAttribute("aria-valuenow", String(state.step));
        selectors.backButton.hidden = state.step === 0 || state.step === 8;
        selectors.nextButton.hidden = state.step >= 7;
        selectors.nextButton.disabled = !canContinue();
        selectors.actionsBar.classList.toggle("is-final", state.step === 7);
        selectors.actionsBar.hidden = state.step === 8;

        if (state.step === 0) nextLabel = "Comenzar";
        if (state.step === 6) nextLabel = "Continuar con mi solicitud";

        selectors.nextButton.innerHTML = nextLabel + '<i data-lucide="send" aria-hidden="true"></i>';
    }

    function renderAll() {
        renderChoices("goalsGrid", data.goals, "goals", false);
        renderChoices("industryGrid", data.industries, "industry", true);
        renderChoices("presenceGrid", data.presence, "presence", false);
        renderChoices("contentGrid", data.content, "content", false);
        renderChoices("actionsGrid", data.actions, "actions", false);
        renderResult();
        updatePresenceLesson();
        updateAside();
        updateNavigation();

        var goalsStatus = document.getElementById("goalsStatus");
        if (goalsStatus) {
            goalsStatus.textContent = state.goals.length
                ? "Has elegido " + state.goals.length + (state.goals.length === 1 ? " objetivo." : " objetivos.")
                : "Puedes seleccionar más de un objetivo.";
        }

        refreshIcons();
    }

    // =====================================================================
    // 09. VERIFICACIÓN ANTISPAM · CLOUDFLARE TURNSTILE
    // El sitekey es público y se obtiene desde una Function; el secret jamás
    // llega al navegador. El token generado se valida nuevamente en servidor.
    // =====================================================================

    function setTurnstileStatus(message, tone) {
        var status = document.getElementById("turnstileStatus");
        if (!status) return;

        status.textContent = message;
        status.dataset.tone = tone || "info";
    }

    function setTurnstileToken(token) {
        state.security.turnstileToken = String(token || "");
        state.security.turnstileReady = Boolean(state.security.turnstileToken);

        var button = document.getElementById("submitPrequoteBtn");
        var block = document.getElementById("turnstileBlock");

        if (button && !button.getAttribute("aria-busy")) {
            button.disabled = !state.security.turnstileReady;
        }

        if (block) {
            block.classList.toggle("is-verified", state.security.turnstileReady);
        }

        if (state.security.turnstileReady) {
            setTurnstileStatus("Verificación lista.", "success");
        }
    }

    function resetTurnstile(message) {
        setTurnstileToken("");

        if (window.turnstile && state.security.turnstileWidgetId !== null) {
            try {
                window.turnstile.reset(state.security.turnstileWidgetId);
            } catch (error) {
                console.warn("Guía Web ISM · Turnstile reset:", error);
            }
        }

        setTurnstileStatus(message || "Completa nuevamente la verificación de seguridad.", "error");
    }

    function waitForTurnstileApi(timeoutMs) {
        var startedAt = Date.now();

        return new Promise(function (resolve, reject) {
            function check() {
                if (window.turnstile && typeof window.turnstile.render === "function") {
                    resolve(window.turnstile);
                    return;
                }

                if (Date.now() - startedAt >= timeoutMs) {
                    reject(new Error("Turnstile no cargó dentro del tiempo esperado."));
                    return;
                }

                window.setTimeout(check, 100);
            }

            check();
        });
    }

    async function prepareTurnstile() {
        if (state.security.turnstileReady || state.security.turnstileWidgetId !== null || state.security.turnstileLoading) return;

        var container = document.getElementById("turnstileWidget");
        var button = document.getElementById("submitPrequoteBtn");
        if (!container || !button) return;

        state.security.turnstileLoading = true;
        button.disabled = true;
        setTurnstileStatus("Preparando verificación segura…", "info");

        try {
            var configResponse = await fetch("/api/turnstile-config", {
                method: "GET",
                headers: { Accept: "application/json" },
                cache: "no-store"
            });
            var config = await configResponse.json().catch(function () { return {}; });

            if (!configResponse.ok || !config.siteKey) {
                throw new Error(config.error || "Turnstile no está configurado.");
            }

            var turnstile = await waitForTurnstileApi(8_000);
            state.security.turnstileWidgetId = turnstile.render(container, {
                sitekey: config.siteKey,
                theme: "dark",
                size: "flexible",
                language: "es",
                appearance: "interaction-only",
                action: "prequote",
                callback: function (token) {
                    setTurnstileToken(token);
                },
                "expired-callback": function () {
                    resetTurnstile("La verificación expiró. Inténtalo nuevamente.");
                },
                "error-callback": function () {
                    setTurnstileToken("");
                    setTurnstileStatus("No pudimos completar la verificación. Inténtalo nuevamente.", "error");
                }
            });
        } catch (error) {
            console.error("Guía Web ISM · Turnstile:", error);
            setTurnstileToken("");
            setTurnstileStatus("La verificación de seguridad no está disponible. Recarga la página e inténtalo nuevamente.", "error");
        } finally {
            state.security.turnstileLoading = false;
        }
    }

    // =====================================================================
    // 10. RESUMEN COMERCIAL Y PAYLOAD PARA ISM
    // La decisión de cada recomendación queda registrada para el levantamiento.
    // =====================================================================

    function getContactData() {
        return {
            name: document.getElementById("contactName").value.trim(),
            business: document.getElementById("contactBusiness").value.trim(),
            email: document.getElementById("contactEmail").value.trim(),
            phone: document.getElementById("contactPhone").value.trim(),
            consent: document.getElementById("contactConsent").checked
        };
    }

    function setSubmitStatus(message, tone) {
        var status = document.getElementById("submitStatus");
        if (!status) return;

        status.textContent = message;
        status.dataset.tone = tone || "info";
    }

    /** Construye el contrato de datos enviado al backend. */
    function buildSubmissionPayload() {
        var solution = getSolution();
        var maturity = getMaturity();
        var contact = getContactData();
        var recommendations = getRecommendations();

        state.contact = contact;

        return {
            schemaVersion: "1.3",
            source: "guia-web-ism",
            submittedAt: new Date().toISOString(),
            contact: contact,
            project: {
                industry: {
                    id: state.industry,
                    label: findLabel(data.industries, state.industry) || "No indicado"
                },
                goals: state.goals.map(function (id) { return { id: id, label: findLabel(data.goals, id) }; }),
                presence: state.presence.map(function (id) { return { id: id, label: findLabel(data.presence, id) }; }),
                content: state.content.map(function (id) { return { id: id, label: findLabel(data.content, id) }; }),
                actions: state.actions.map(function (id) { return { id: id, label: findLabel(data.actions, id) }; })
            },
            recommendation: {
                title: solution[0],
                description: solution[1],
                type: solution[2],
                maturity: { title: maturity[0], description: maturity[1] },
                suggestions: recommendations.map(function (item) {
                    return {
                        id: item.id,
                        title: item.title,
                        description: item.description,
                        decision: getRecommendationDecision(item.id)
                    };
                })
            },
            serviceCommitment: {
                initialResponseWithinBusinessHours: 48
            },
            security: {
                turnstileToken: state.security.turnstileToken
            }
        };
    }

    function validateContactForm() {
        var form = document.getElementById("prequoteForm");
        var contact = getContactData();

        if (!form.checkValidity()) {
            form.reportValidity();
            setSubmitStatus("Completa los campos obligatorios antes de enviar.", "error");
            return false;
        }

        if (contact.name.length < 2) {
            setSubmitStatus("Indica un nombre válido para poder identificar tu solicitud.", "error");
            document.getElementById("contactName").focus();
            return false;
        }

        if (contact.phone.replace(/\D/g, "").length < 8) {
            setSubmitStatus("Revisa el teléfono o WhatsApp ingresado.", "error");
            document.getElementById("contactPhone").focus();
            return false;
        }

        return true;
    }

    // =====================================================================
    // 11. ENVÍO DE LA PRECOTIZACIÓN
    // =====================================================================

    async function submitPrequote(event) {
        event.preventDefault();

        var honeypot = document.getElementById("companyWebsite");
        var button = document.getElementById("submitPrequoteBtn");

        if (honeypot && honeypot.value) {
            setSubmitStatus("Solicitud recibida.", "success");
            return;
        }

        if (!validateContactForm()) return;

        if (!state.security.turnstileToken) {
            setTurnstileStatus("Completa la verificación de seguridad antes de enviar.", "error");
            setSubmitStatus("Falta completar la verificación de seguridad.", "error");
            await prepareTurnstile();
            return;
        }

        var payload = buildSubmissionPayload();
        button.disabled = true;
        button.setAttribute("aria-busy", "true");
        setSubmitStatus("Enviando tu levantamiento a ISM Developer…", "info");

        try {
            var response = await fetch("/api/pre-cotizacion", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });
            var result = await response.json().catch(function () { return {}; });

            if (!response.ok) {
                if (response.status === 403 || result.code === "TURNSTILE_FAILED") {
                    resetTurnstile("La verificación no pudo validarse. Completa una nueva verificación.");
                } else {
                    // El token es de un solo uso; ante cualquier error del backend se renueva.
                    resetTurnstile("Renovamos la verificación para que puedas volver a intentarlo.");
                }
                throw new Error(result.error || "No fue posible enviar la solicitud.");
            }

            setSubmitStatus("Solicitud enviada correctamente.", "success");

            var contact = getContactData();
            var successCopy = document.getElementById("successCopy");
            if (successCopy) {
                var firstName = contact.name.split(/\s+/)[0] || "";
                successCopy.textContent = firstName
                    ? firstName + ", recibimos tu levantamiento inicial. Lo revisaremos personalmente antes de contactarte."
                    : "Recibimos tu levantamiento inicial. Lo revisaremos personalmente antes de contactarte.";
            }

            if (typeof window.trackEvent === "function") {
                window.trackEvent("guide_web_prequote_submit", {
                    event_category: "lead",
                    solution_type: getSolution()[2],
                    section: "guia-web"
                });
            }

            // P5: el éxito no queda reducido a una línea bajo el botón; se
            // transforma en el último paso completo de la experiencia (8/8).
            moveToStep(8);
        } catch (error) {
            console.error("Guía Web ISM:", error);
            setSubmitStatus("No pudimos enviar tu solicitud en este momento. Inténtalo nuevamente o contáctanos desde el sitio.", "error");
            button.disabled = false;
        } finally {
            button.removeAttribute("aria-busy");
        }
    }

    // =====================================================================
    // 12. CONTROL DE PASOS, EVENTOS E INICIALIZACIÓN
    // =====================================================================

    function moveToStep(nextStep) {
        state.step = Math.max(0, Math.min(totalSteps, nextStep));
        renderAll();

        if (state.step === 7) {
            prepareTurnstile();
        }
    }

    selectors.nextButton.addEventListener("click", function () {
        if (!canContinue()) return;
        moveToStep(state.step + 1);
    });

    selectors.backButton.addEventListener("click", function () {
        moveToStep(state.step - 1);
    });

    document.getElementById("prequoteForm").addEventListener("submit", submitPrequote);

    renderEssentials();
    renderAll();
}());
