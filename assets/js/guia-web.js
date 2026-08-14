(function () {
    "use strict";

    var state = {
        step: 0,
        goals: [],
        industry: null,
        presence: [],
        content: [],
        actions: [],
        recommendations: []
    };

    var totalSteps = 8;
    var whatsappNumber = "56968374821";

    var data = {
        goals: [
            ["clientes", "Conseguir clientes", "Que nuevas personas te encuentren y te contacten.", "target"],
            ["reservas", "Recibir reservas", "Que elijan un servicio, fecha u horario.", "calendar-days"],
            ["servicios", "Mostrar mis servicios", "Explicar qué haces y cómo puedes ayudar.", "briefcase-business"],
            ["consultas", "Recibir consultas", "Llevar al visitante a WhatsApp o a un formulario.", "message-circle"],
            ["portafolio", "Mostrar mi trabajo", "Presentar proyectos, casos o resultados reales.", "images"],
            ["ventas", "Vender online", "Mostrar productos y facilitar pedidos o compras.", "shopping-cart"]
        ],
        industries: [
            ["salud", "Salud y bienestar", "Profesionales, centros, terapias y estética.", "heart-pulse"],
            ["belleza", "Belleza o barbería", "Barberías, salones, uñas y cuidado personal.", "scissors"],
            ["profesional", "Profesional independiente", "Asesoría y servicios especializados.", "user-round"],
            ["comercio", "Comercio o tienda", "Productos, stock, pedidos y ventas.", "store"],
            ["b2b", "Empresa o servicios B2B", "Servicios dirigidos a otras empresas.", "building-2"],
            ["otro", "Otro negocio", "Construcción, gastronomía, turismo u otro rubro.", "globe-2"]
        ],
        presence: [
            ["social", "Instagram o Facebook", "Uso redes sociales para mostrar mi negocio.", "instagram"],
            ["whatsapp", "WhatsApp", "Atiendo o coordino directamente por WhatsApp.", "message-circle"],
            ["maps", "Google Maps", "Tengo una ficha o ubicación visible.", "map-pin"],
            ["web", "Página web", "Ya cuento con un sitio web propio.", "monitor"],
            ["booking", "Sistema de reservas", "Uso una agenda o plataforma de reservas.", "calendar-check"],
            ["none", "Nada todavía", "Estoy comenzando mi presencia digital.", "rocket"]
        ],
        essentials: [
            ["Adaptable", "Se ve bien en celular y computador.", "smartphone"],
            ["Segura", "Cuenta con una conexión HTTPS.", "shield-check"],
            ["Optimizada", "Tiene una carga rápida y ordenada.", "gauge"],
            ["SEO inicial", "Incluye una base para buscadores.", "search"],
            ["Contacto claro", "Facilita el siguiente paso del visitante.", "mouse-pointer-click"]
        ],
        content: [
            ["services", "Servicios", "Qué ofreces y cómo ayudas a tus clientes.", "list-tree"],
            ["prices", "Precios o planes", "Valores, alternativas o planes disponibles.", "badge-dollar-sign"],
            ["about", "Sobre nosotros", "Historia, experiencia y propuesta de valor.", "building-2"],
            ["team", "Equipo o profesionales", "Quiénes están detrás del servicio.", "users-round"],
            ["gallery", "Galería o trabajos", "Resultados, proyectos o productos.", "images"],
            ["faq", "Preguntas frecuentes", "Respuestas antes del primer contacto.", "messages-square"]
        ],
        actions: [
            ["whatsapp", "Conversar por WhatsApp", "Un canal de contacto rápido y directo.", "message-circle"],
            ["form", "Enviar un formulario", "Antecedentes ordenados del interesado.", "file-text"],
            ["booking", "Reservar una hora", "Elegir un servicio, fecha u horario.", "calendar-check"],
            ["quote", "Pedir una cotización", "Enviar una solicitud con antecedentes.", "send"],
            ["shop", "Comprar o pedir", "Revisar un catálogo o iniciar una compra.", "shopping-cart"],
            ["account", "Ingresar a una cuenta", "Acceder a información o funciones privadas.", "lock-keyhole"]
        ]
    };

    var stepNames = [
        "Bienvenida",
        "Objetivos",
        "Tu negocio",
        "Situación actual",
        "Base incluida",
        "Contenido",
        "Acciones",
        "Recomendación",
        "Contacto"
    ];

    var selectors = {
        screens: document.querySelectorAll(".guide-screen"),
        main: document.getElementById("guideMain"),
        mainTop: document.getElementById("guideMainTop"),
        progressBar: document.getElementById("progressBar"),
        progressTrack: document.getElementById("progressTrack"),
        stepIndicator: document.getElementById("stepIndicator"),
        backButton: document.getElementById("backBtn"),
        nextButton: document.getElementById("nextBtn"),
        actionsBar: document.getElementById("actionsBar"),
        contactForm: document.getElementById("guideContactForm"),
        successScreen: document.getElementById("successScreen")
    };

    function refreshIcons() {
        if (window.lucide && typeof window.lucide.createIcons === "function") {
            window.lucide.createIcons();
        }
    }

    function findLabel(collection, id) {
        var item = collection.find(function (entry) {
            return entry[0] === id;
        });
        return item ? item[1] : id;
    }

    function isSelected(key, id, single) {
        return single ? state[key] === id : state[key].includes(id);
    }

    function toggleSelection(key, id, single, max) {
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

        if (max && current.length >= max) {
            var status = document.getElementById("goalsStatus");
            if (status) status.textContent = "Puedes elegir hasta " + max + " objetivos. Desmarca uno para cambiarlo.";
            return;
        }

        current.push(id);

        if (key === "presence" && id === "none") {
            state.presence = ["none"];
        } else if (key === "presence" && id !== "none") {
            state.presence = state.presence.filter(function (entry) {
                return entry !== "none";
            });
        }
    }

    function createChoice(item, key, single, max) {
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
            '<span class="guide-choice-check"><i data-lucide="check" aria-hidden="true"></i></span>',
            '<span class="guide-choice-head">',
            '<span class="guide-choice-icon"><i data-lucide="' + iconName + '" aria-hidden="true"></i></span>',
            "<strong>" + title + "</strong>",
            "</span>",
            "<small>" + description + "</small>"
        ].join("");

        button.addEventListener("click", function () {
            toggleSelection(key, id, single, max);
            renderAll();
        });

        return button;
    }

    function renderChoices(containerId, items, key, single, max) {
        var container = document.getElementById(containerId);
        if (!container) return;

        container.replaceChildren();
        items.forEach(function (item) {
            container.appendChild(createChoice(item, key, single, max));
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

    function includes(collection, id) {
        return collection.includes(id);
    }

    function getRecommendations() {
        var recommendations = [];

        if (includes(state.goals, "reservas") || includes(state.actions, "booking")) {
            recommendations.push(["Horarios y reglas de atención", "Ayudan a que el sistema de reservas muestre disponibilidad real y reduzca coordinaciones manuales."]);
        }
        if ((state.industry === "salud" || state.industry === "profesional") && !includes(state.content, "team")) {
            recommendations.push(["Perfil profesional", "Mostrar experiencia, especialidad y enfoque genera confianza antes del primer contacto."]);
        }
        if (state.industry === "belleza" && !includes(state.content, "gallery")) {
            recommendations.push(["Galería de resultados", "En este rubro, ver trabajos reales ayuda a decidir antes de reservar."]);
        }
        if (includes(state.goals, "clientes") && !includes(state.actions, "whatsapp") && !includes(state.actions, "form")) {
            recommendations.push(["Un canal de contacto visible", "El visitante debería poder dar el siguiente paso sin buscar tus datos."]);
        }
        if (includes(state.goals, "ventas") || includes(state.actions, "shop")) {
            recommendations.push(["Información de entrega o retiro", "Aclara el proceso y reduce preguntas antes de comprar o hacer un pedido."]);
        }
        if (!includes(state.content, "faq")) {
            recommendations.push(["Preguntas frecuentes", "Pueden resolver dudas repetidas antes de que una persona te contacte."]);
        }
        if (!includes(state.presence, "maps") && ["salud", "belleza", "comercio"].includes(state.industry)) {
            recommendations.push(["Presencia local", "Una ficha de ubicación bien conectada puede facilitar que te encuentren cerca de tu zona."]);
        }
        if (recommendations.length < 2) {
            recommendations.push(["Medición de contactos", "Saber qué botones y canales generan consultas permite mejorar la web con evidencia."]);
        }

        return recommendations.slice(0, 4);
    }

    function getSolution() {
        if (includes(state.actions, "account")) {
            return ["Solución web personalizada", "Tu proyecto incluye usuarios o información privada, por lo que se acerca a una aplicación web.", "APP"];
        }
        if (includes(state.actions, "shop") || includes(state.goals, "ventas")) {
            return ["Tienda online o solución comercial", "Una plataforma para mostrar productos, recibir pedidos y preparar el proceso de compra.", "SHOP"];
        }
        if (includes(state.actions, "booking") || includes(state.goals, "reservas")) {
            return ["Sitio web profesional con reservas", "Una presencia clara con un recorrido para elegir servicio, fecha u horario.", "BOOKING"];
        }
        if (includes(state.actions, "quote")) {
            return ["Sitio web profesional con captación", "Presenta tus servicios y convierte visitas en solicitudes de cotización ordenadas.", "LEAD"];
        }
        return ["Sitio web profesional", "Una presencia clara para presentar tu negocio, generar confianza y facilitar el contacto.", "WEB"];
    }

    function getMaturity() {
        if (includes(state.presence, "web") || includes(state.presence, "booking")) {
            return ["Optimización digital", "Ya tienes una base digital. El siguiente paso es mejorar la experiencia o automatizar procesos."];
        }
        if (includes(state.actions, "account") || includes(state.actions, "shop")) {
            return ["Evolución digital", "Tu proyecto incorpora funciones más avanzadas que una web informativa."];
        }
        return ["Primeros pasos", "Estamos armando una base clara para que te encuentren y te contacten con facilidad."];
    }

    function renderResult() {
        var solution = getSolution();
        var recommendations = getRecommendations();
        var resultTitle = document.getElementById("resultTitle");
        var resultCopy = document.getElementById("resultCopy");
        var finalTitle = document.getElementById("finalTitle");
        var finalSummary = document.getElementById("finalSummary");
        var tags = document.getElementById("resultTags");
        var recommendationBox = document.getElementById("recommendBox");
        var selectedTags = [];

        state.content.forEach(function (id) {
            selectedTags.push(findLabel(data.content, id));
        });
        state.actions.forEach(function (id) {
            selectedTags.push(findLabel(data.actions, id));
        });

        selectedTags = Array.from(new Set(selectedTags)).slice(0, 8);
        state.recommendations = recommendations.map(function (item) {
            return item[0];
        });

        resultTitle.textContent = solution[0];
        resultCopy.textContent = solution[1];
        finalTitle.textContent = solution[0];
        finalSummary.textContent = "Seleccionaste " + state.content.length + " secciones y " + state.actions.length + " funciones. ISM sumó " + recommendations.length + " sugerencias para revisar contigo.";

        tags.replaceChildren();
        (selectedTags.length ? selectedTags : ["Configuración inicial"]).forEach(function (label) {
            var chip = document.createElement("span");
            chip.className = "guide-tag";
            chip.textContent = label;
            tags.appendChild(chip);
        });

        recommendationBox.replaceChildren();
        recommendations.forEach(function (recommendation, index) {
            var card = document.createElement("article");
            card.className = "guide-recommendation" + (index < 2 ? " is-featured" : "");
            card.innerHTML = [
                '<span><i data-lucide="' + (index < 2 ? "star" : "plus") + '" aria-hidden="true"></i>' + (index < 2 ? "Recomendado" : "Complementario") + "</span>",
                "<h3>" + recommendation[0] + "</h3>",
                "<p>" + recommendation[1] + "</p>"
            ].join("");
            recommendationBox.appendChild(card);
        });
    }

    function updatePresenceLesson() {
        var lesson = document.getElementById("presenceLesson");
        if (!lesson) return;

        if (includes(state.presence, "social") && !includes(state.presence, "web")) {
            lesson.innerHTML = '<i data-lucide="lightbulb" aria-hidden="true"></i><p><strong>Redes y web cumplen roles distintos:</strong> las redes ayudan a descubrirte; tu web concentra información y acciones en un espacio propio.</p>';
        } else {
            lesson.innerHTML = '<i data-lucide="lightbulb" aria-hidden="true"></i><p><strong>Dato útil:</strong> redes sociales, WhatsApp y una web propia cumplen funciones diferentes y pueden trabajar juntas.</p>';
        }
    }

    function updateAside() {
        var activeNodes = {
            inicio: true,
            contenido: state.step >= 5 || state.content.length > 0,
            accion: state.step >= 6 || state.actions.length > 0,
            resultado: state.step >= 7
        };
        var maturity = getMaturity();

        Object.keys(activeNodes).forEach(function (name) {
            var node = document.querySelector('[data-node="' + name + '"]');
            if (node) node.classList.toggle("is-active", activeNodes[name]);
        });

        document.getElementById("maturityTitle").textContent = maturity[0];
        document.getElementById("maturityCopy").textContent = maturity[1];
    }

    function canContinue() {
        if (state.step === 1) return state.goals.length > 0;
        if (state.step === 2) return Boolean(state.industry);
        if (state.step === 3) return state.presence.length > 0;
        if (state.step === 5) return state.content.length > 0;
        if (state.step === 6) return state.actions.length > 0;
        return true;
    }

    function updateNavigation() {
        var progress = state.step === 0 ? 4 : Math.round((state.step / totalSteps) * 100);

        selectors.main.classList.toggle("is-welcome", state.step === 0);
        var nextLabel = "Continuar";

        selectors.screens.forEach(function (screen) {
            screen.classList.toggle("is-active", Number(screen.dataset.step) === state.step);
        });

        selectors.stepIndicator.textContent = state.step === 0
            ? "Bienvenida"
            : "Paso " + state.step + " de " + totalSteps + " · " + stepNames[state.step];
        selectors.progressBar.style.width = progress + "%";
        selectors.progressTrack.setAttribute("aria-valuenow", String(state.step));
        selectors.backButton.hidden = state.step === 0;
        selectors.nextButton.disabled = !canContinue();

        if (state.step === 0) nextLabel = "Comenzar";
        if (state.step === 7) nextLabel = "Revisar con ISM";
        if (state.step === 8) nextLabel = "Continuar por WhatsApp";

        selectors.nextButton.innerHTML = nextLabel + '<i data-lucide="arrow-right" aria-hidden="true"></i>';
    }

    function renderAll() {
        renderChoices("goalsGrid", data.goals, "goals", false, 3);
        renderChoices("industryGrid", data.industries, "industry", true);
        renderChoices("presenceGrid", data.presence, "presence", false);
        renderChoices("contentGrid", data.content, "content", false);
        renderChoices("actionsGrid", data.actions, "actions", false);
        renderResult();
        updatePresenceLesson();
        updateAside();
        updateNavigation();

        var goalsStatus = document.getElementById("goalsStatus");
        if (goalsStatus && state.goals.length < 3) {
            goalsStatus.textContent = state.goals.length
                ? "Has elegido " + state.goals.length + " de 3 objetivos posibles."
                : "Puedes seleccionar hasta 3 objetivos.";
        }

        refreshIcons();
    }

    function buildWhatsAppMessage() {
        var solution = getSolution();
        var formData = new FormData(selectors.contactForm);
        var business = String(formData.get("business") || "").trim() || "No indicado";
        var goals = state.goals.map(function (id) { return findLabel(data.goals, id); }).join(", ");
        var presence = state.presence.map(function (id) { return findLabel(data.presence, id); }).join(", ");
        var content = state.content.map(function (id) { return findLabel(data.content, id); }).join(", ");
        var actions = state.actions.map(function (id) { return findLabel(data.actions, id); }).join(", ");

        return [
            "Hola, Ignacio. Completé la Guía Web ISM y quiero revisar mi orientación.",
            "",
            "Nombre: " + String(formData.get("name") || "").trim(),
            "Negocio o empresa: " + business,
            "Correo: " + String(formData.get("email") || "").trim(),
            "Teléfono: " + String(formData.get("phone") || "").trim(),
            "",
            "Recomendación: " + solution[0],
            "Rubro: " + findLabel(data.industries, state.industry),
            "Objetivos: " + goals,
            "Presencia actual: " + presence,
            "Contenido: " + content,
            "Acciones: " + actions,
            "Sugerencias ISM: " + state.recommendations.join(", ")
        ].join("\n");
    }

    function submitGuide() {
        if (!selectors.contactForm.checkValidity()) {
            selectors.contactForm.reportValidity();
            return;
        }

        var whatsappUrl = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(buildWhatsAppMessage());
        var fallback = document.getElementById("whatsappFallback");

        fallback.href = whatsappUrl;
        selectors.screens.forEach(function (screen) {
            screen.classList.remove("is-active");
        });
        selectors.mainTop.hidden = true;
        selectors.actionsBar.hidden = true;
        selectors.main.classList.remove("is-welcome");
        selectors.successScreen.classList.add("is-visible");

        if (typeof window.trackEvent === "function") {
            window.trackEvent("guide_web_submit", {
                event_category: "conversion",
                solution_type: getSolution()[2],
                section: "guia-web"
            });
        }

        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
        selectors.successScreen.querySelector("h2").focus({ preventScroll: true });
        refreshIcons();
    }

    function moveToStep(nextStep) {
        state.step = Math.max(0, Math.min(totalSteps, nextStep));
        renderAll();

        if (window.matchMedia("(max-width: 980px)").matches) {
            selectors.main.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }

    function restartGuide() {
        state.step = 0;
        state.goals = [];
        state.industry = null;
        state.presence = [];
        state.content = [];
        state.actions = [];
        state.recommendations = [];
        selectors.contactForm.reset();
        selectors.mainTop.hidden = false;
        selectors.actionsBar.hidden = false;
        selectors.successScreen.classList.remove("is-visible");
        renderAll();
        selectors.main.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    selectors.nextButton.addEventListener("click", function () {
        if (state.step === 8) {
            submitGuide();
            return;
        }
        if (!canContinue()) return;
        moveToStep(state.step + 1);
    });

    selectors.backButton.addEventListener("click", function () {
        moveToStep(state.step - 1);
    });

    selectors.contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        submitGuide();
    });

    document.getElementById("restartBtn").addEventListener("click", restartGuide);

    renderEssentials();
    renderAll();
}());
