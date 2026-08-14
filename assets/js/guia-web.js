/**
 * Guía Web ISM · Lógica principal
 * Versión de parche: P1.1
 *
 * Responsabilidades de este archivo:
 * - Mantener el estado temporal de la guía en el navegador.
 * - Renderizar opciones, progreso, recomendaciones y resumen.
 * - Validar los datos de contacto del prospecto.
 * - Construir el payload comercial y enviarlo a /api/pre-cotizacion.
 *
 * Importante: la tarifa interna (0,7 UF/HH) nunca se muestra al prospecto.
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
        recommendations: [],
        contact: {
            name: "",
            business: "",
            email: "",
            phone: "",
            consent: false
        }
    };

    // =====================================================================
    // 02. CONFIGURACIÓN Y CATÁLOGO VISIBLE
    // Datos simples orientados al cliente; no contienen detalle técnico/HH.
    // =====================================================================

    var totalSteps = 8;

    var data = {
        goals: [
            ["clientes", "Conseguir clientes", "Que nuevas personas te encuentren y te contacten.", "target"],
            ["reservas", "Recibir reservas", "Que elijan un servicio, fecha u horario.", "calendar-check"],
            ["servicios", "Mostrar mis servicios", "Explicar qué haces y cómo puedes ayudar.", "layers-3"],
            ["consultas", "Recibir consultas", "Llevar al visitante a WhatsApp o a un formulario.", "message-square"],
            ["portafolio", "Mostrar mi trabajo", "Presentar proyectos, casos o resultados reales.", "panel-top"],
            ["ventas", "Vender online", "Mostrar productos y facilitar pedidos o compras.", "truck"]
        ],
        industries: [
            ["salud", "Salud y bienestar", "Profesionales, centros, terapias y estética.", "badge-check"],
            ["belleza", "Belleza o barbería", "Barberías, salones, uñas y cuidado personal.", "sparkles"],
            ["profesional", "Profesional independiente", "Asesoría y servicios especializados.", "pencil-ruler"],
            ["comercio", "Comercio o tienda", "Productos, stock, pedidos y ventas.", "truck"],
            ["b2b", "Empresa o servicios B2B", "Servicios dirigidos a otras empresas.", "handshake"],
            ["otro", "Otro negocio", "Construcción, gastronomía, turismo u otro rubro.", "rocket"]
        ],
        presence: [
            ["social", "Instagram o Facebook", "Uso redes sociales para mostrar mi negocio.", "messages-square"],
            ["whatsapp", "WhatsApp", "Atiendo o coordino directamente por WhatsApp.", "message-square"],
            ["maps", "Google Maps", "Tengo una ficha o ubicación visible.", "route"],
            ["web", "Página web", "Ya cuento con un sitio web propio.", "monitor"],
            ["booking", "Sistema de reservas", "Uso una agenda o plataforma de reservas.", "calendar-check"],
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
            ["shop", "Comprar o pedir", "Revisar un catálogo o iniciar una compra.", "truck"],
            ["account", "Ingresar a una cuenta", "Acceder a información o funciones privadas.", "shield-check"]
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
        "Datos y envío"
    ];

    // =====================================================================
    // 03. REFERENCIAS DEL DOM
    // Se centralizan los elementos persistentes para evitar búsquedas repetidas.
    // =====================================================================

    var selectors = {
        screens: document.querySelectorAll(".guide-screen"),
        main: document.getElementById("guideMain"),
        mainTop: document.getElementById("guideMainTop"),
        progressBar: document.getElementById("progressBar"),
        progressTrack: document.getElementById("progressTrack"),
        stepIndicator: document.getElementById("stepIndicator"),
        backButton: document.getElementById("backBtn"),
        nextButton: document.getElementById("nextBtn"),
        actionsBar: document.getElementById("actionsBar")
    };

    // =====================================================================
    // 04. UTILIDADES GENERALES Y SELECCIÓN
    // =====================================================================

    /** Regenera los iconos Lucide insertados dinámicamente. */
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

    /** Crea una tarjeta seleccionable y sincroniza su estado accesible. */
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
            "</span>",
        ].join("");

        button.addEventListener("click", function () {
            toggleSelection(key, id, single);
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

    function includes(collection, id) {
        return collection.includes(id);
    }

    // =====================================================================
    // 06. MOTOR DE ORIENTACIÓN ISM
    // Reglas determinísticas: convierten respuestas simples en sugerencias.
    // =====================================================================

    /** Devuelve un máximo de cuatro recomendaciones contextuales. */
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

    /** Clasifica el proyecto en una solución comercial inicial. */
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

    /** Estima el momento digital para explicar el siguiente paso al usuario. */
    function getMaturity() {
        if (includes(state.presence, "web") || includes(state.presence, "booking")) {
            return ["Optimización digital", "Ya tienes una base digital. El siguiente paso es mejorar la experiencia o automatizar procesos."];
        }
        if (includes(state.actions, "account") || includes(state.actions, "shop")) {
            return ["Evolución digital", "Tu proyecto incorpora funciones más avanzadas que una web informativa."];
        }
        return ["Primeros pasos", "Estamos armando una base clara para que te encuentren y te contacten con facilidad."];
    }

    // =====================================================================
    // 07. RENDERIZADO DE RESULTADOS, PANEL LATERAL Y NAVEGACIÓN
    // =====================================================================

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
        selectors.nextButton.hidden = state.step === 8;
        selectors.nextButton.disabled = !canContinue();
        selectors.actionsBar.classList.toggle("is-final", state.step === 8);

        if (state.step === 0) nextLabel = "Comenzar";
        if (state.step === 7) nextLabel = "Continuar con mi solicitud";

        selectors.nextButton.innerHTML = nextLabel + '<i data-lucide="arrow-right" aria-hidden="true"></i>';
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
                : "Puedes seleccionar todos los objetivos que correspondan.";
        }


        refreshIcons();
    }

    // =====================================================================
    // 08. RESUMEN COMERCIAL Y DATOS DEL PROSPECTO
    // Estas funciones preparan la información que llegará a ISM.
    // =====================================================================

    function selectedLabels(collection, selected) {
        var labels = selected.map(function (id) {
            return findLabel(collection, id);
        });

        return labels.length ? labels.join(", ") : "No seleccionado";
    }

    function getSummaryRows() {
        var solution = getSolution();
        var recommendations = getRecommendations().map(function (item) {
            return item[0] + ": " + item[1];
        });

        return [
            ["Recomendación", solution[0]],
            ["Descripción", solution[1]],
            ["Rubro", findLabel(data.industries, state.industry) || "No indicado"],
            ["Objetivos", selectedLabels(data.goals, state.goals)],
            ["Presencia actual", selectedLabels(data.presence, state.presence)],
            ["Contenido", selectedLabels(data.content, state.content)],
            ["Acciones", selectedLabels(data.actions, state.actions)],
            ["Sugerencias ISM", recommendations.join(" | ")]
        ];
    }

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

    /**
     * Construye el contrato de datos enviado al backend.
     * La sección `internal` es exclusiva para ISM y no se renderiza en la UI.
     */
    function buildSubmissionPayload() {
        var solution = getSolution();
        var maturity = getMaturity();
        var contact = getContactData();
        var recommendations = getRecommendations();

        state.contact = contact;

        return {
            schemaVersion: "1.0",
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
                    return { title: item[0], description: item[1] };
                })
            },
            serviceCommitment: {
                initialResponseWithinBusinessHours: 48
            },
            internal: {
                hourlyRateUF: 0.7,
                hourlyRateVisibleToProspect: false
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
    // 09. VALIDACIÓN Y ENVÍO DE LA PRECOTIZACIÓN
    // =====================================================================

    /** Envía el levantamiento al endpoint server-side y comunica el resultado. */
    async function submitPrequote(event) {
        event.preventDefault();

        var honeypot = document.getElementById("companyWebsite");
        var button = document.getElementById("submitPrequoteBtn");

        if (honeypot && honeypot.value) {
            setSubmitStatus("Solicitud recibida.", "success");
            return;
        }

        if (!validateContactForm()) return;

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
                throw new Error(result.error || "No fue posible enviar la solicitud.");
            }

            setSubmitStatus("Solicitud enviada. Revisaremos tu levantamiento y te responderemos dentro de las primeras 48 horas hábiles.", "success");

            if (typeof window.trackEvent === "function") {
                window.trackEvent("guide_web_prequote_submit", {
                    event_category: "lead",
                    solution_type: getSolution()[2],
                    section: "guia-web"
                });
            }
        } catch (error) {
            console.error("Guía Web ISM:", error);
            setSubmitStatus("No pudimos enviar tu solicitud en este momento. Inténtalo nuevamente o contáctanos desde el sitio.", "error");
            button.disabled = false;
        } finally {
            button.removeAttribute("aria-busy");
        }
    }

    // =====================================================================
    // 10. CONTROL DE PASOS, EVENTOS E INICIALIZACIÓN
    // =====================================================================

    function moveToStep(nextStep) {
        state.step = Math.max(0, Math.min(totalSteps, nextStep));
        renderAll();
    }

    // Eventos principales de navegación.
    selectors.nextButton.addEventListener("click", function () {
        if (!canContinue()) return;
        moveToStep(state.step + 1);
    });

    selectors.backButton.addEventListener("click", function () {
        moveToStep(state.step - 1);
    });

    // El formulario controla el cierre comercial de la guía.
    document.getElementById("prequoteForm").addEventListener("submit", submitPrequote);

    // Render inicial: carga contenido fijo y sincroniza toda la interfaz.
    renderEssentials();
    renderAll();
}());
