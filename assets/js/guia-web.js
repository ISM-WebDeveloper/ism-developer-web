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
        "Exportar o contactar"
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
        actionsBar: document.getElementById("actionsBar")
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
        selectors.nextButton.hidden = state.step === 8;
        selectors.nextButton.disabled = !canContinue();
        selectors.actionsBar.classList.toggle("is-final", state.step === 8);

        if (state.step === 0) nextLabel = "Comenzar";
        if (state.step === 7) nextLabel = "Ver opciones de salida";

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

        document.getElementById("continueWhatsappBtn").href = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(buildWhatsAppMessage());

        refreshIcons();
    }

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

    function setExportStatus(message) {
        var status = document.getElementById("exportStatus");
        if (status) status.textContent = message;
    }

    function trackExport(format) {
        if (typeof window.trackEvent === "function") {
            window.trackEvent("guide_web_export", {
                event_category: "engagement",
                export_format: format,
                solution_type: getSolution()[2],
                section: "guia-web"
            });
        }
    }

    function downloadBlob(blob, filename) {
        var url = URL.createObjectURL(blob);
        var link = document.createElement("a");

        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.setTimeout(function () {
            URL.revokeObjectURL(url);
        }, 1000);
    }

    function csvCell(value) {
        return '"' + String(value).replace(/"/g, '""') + '"';
    }

    function exportExcel() {
        var rows = [
            ["Guía Web ISM", "Resumen de orientación"],
            ["Fecha", new Date().toLocaleDateString("es-CL")]
        ].concat(getSummaryRows());
        var csv = "sep=;\r\n" + rows.map(function (row) {
            return row.map(csvCell).join(";");
        }).join("\r\n");

        downloadBlob(
            new Blob(["\ufeff", csv], { type: "text/csv;charset=utf-8" }),
            "orientacion-web-ism.csv"
        );
        setExportStatus("Excel preparado: la descarga comenzó correctamente.");
        trackExport("excel_csv");
    }

    function normalizePdfText(value) {
        return String(value)
            .replace(/[–—]/g, "-")
            .replace(/[“”]/g, '"')
            .replace(/[‘’]/g, "'")
            .normalize("NFC")
            .replace(/[^\x20-\xFF]/g, "");
    }

    function escapePdfText(value) {
        return normalizePdfText(value)
            .replace(/\\/g, "\\\\")
            .replace(/\(/g, "\\(")
            .replace(/\)/g, "\\)");
    }

    function wrapPdfText(value, maxLength) {
        var words = normalizePdfText(value).split(/\s+/).filter(Boolean);
        var lines = [];
        var current = "";

        words.forEach(function (word) {
            var candidate = current ? current + " " + word : word;
            if (candidate.length <= maxLength) {
                current = candidate;
            } else {
                if (current) lines.push(current);
                current = word;
            }
        });

        if (current) lines.push(current);
        return lines.length ? lines : [""];
    }

    function createPdfBlob() {
        var entries = [];
        var rows = getSummaryRows();
        var pages = [[]];
        var pageIndex = 0;
        var y = 742;

        entries.push({ text: "ISM DEVELOPER", size: 9, bold: true, color: "0.03 0.56 0.75", after: 14 });
        entries.push({ text: "Orientación Web ISM", size: 22, bold: true, color: "0.05 0.12 0.2", after: 8 });
        entries.push({ text: "Resumen generado el " + new Date().toLocaleDateString("es-CL"), size: 9, bold: false, color: "0.38 0.45 0.52", after: 18 });

        rows.forEach(function (row) {
            var valueLines = wrapPdfText(row[1], 88);
            entries.push({ text: row[0].toUpperCase(), size: 8, bold: true, color: "0.03 0.56 0.75", after: 4 });
            valueLines.forEach(function (line, index) {
                entries.push({
                    text: line,
                    size: 10,
                    bold: false,
                    color: "0.15 0.22 0.3",
                    after: index === valueLines.length - 1 ? 10 : 3
                });
            });
        });

        entries.forEach(function (entry) {
            var height = entry.size * 1.25 + entry.after;
            if (y - height < 52) {
                pageIndex += 1;
                pages.push([]);
                y = 742;
            }
            entry.y = y;
            pages[pageIndex].push(entry);
            y -= height;
        });

        var objects = [];
        objects[1] = "<< /Type /Catalog /Pages 2 0 R >>";
        objects[3] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>";
        objects[4] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>";

        var pageIds = [];
        pages.forEach(function (page, index) {
            var pageId = 5 + index * 2;
            var contentId = pageId + 1;
            var commands = ["q 0.03 0.56 0.75 rg 44 764 524 3 re f Q"];

            page.forEach(function (entry) {
                commands.push([
                    "BT /" + (entry.bold ? "F2" : "F1") + " " + entry.size + " Tf",
                    entry.color + " rg",
                    "1 0 0 1 44 " + entry.y.toFixed(2) + " Tm",
                    "(" + escapePdfText(entry.text) + ") Tj ET"
                ].join(" "));
            });

            commands.push(
                "BT /F1 8 Tf 0.45 0.51 0.57 rg 1 0 0 1 44 28 Tm (ISM Developer - Página " + (index + 1) + " de " + pages.length + ") Tj ET"
            );

            var streamData = commands.join("\n") + "\n";
            pageIds.push(pageId + " 0 R");
            objects[pageId] = "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents " + contentId + " 0 R >>";
            objects[contentId] = "<< /Length " + streamData.length + " >>\nstream\n" + streamData + "endstream";
        });

        objects[2] = "<< /Type /Pages /Kids [" + pageIds.join(" ") + "] /Count " + pages.length + " >>";

        var pdf = "%PDF-1.4\n%âãÏÓ\n";
        var offsets = [0];
        var index;

        for (index = 1; index < objects.length; index += 1) {
            offsets[index] = pdf.length;
            pdf += index + " 0 obj\n" + objects[index] + "\nendobj\n";
        }

        var xrefOffset = pdf.length;
        pdf += "xref\n0 " + objects.length + "\n0000000000 65535 f \n";
        for (index = 1; index < objects.length; index += 1) {
            pdf += String(offsets[index]).padStart(10, "0") + " 00000 n \n";
        }
        pdf += "trailer\n<< /Size " + objects.length + " /Root 1 0 R >>\nstartxref\n" + xrefOffset + "\n%%EOF";

        var bytes = new Uint8Array(pdf.length);
        for (index = 0; index < pdf.length; index += 1) {
            bytes[index] = pdf.charCodeAt(index) & 255;
        }

        return new Blob([bytes], { type: "application/pdf" });
    }

    function exportPdf() {
        downloadBlob(createPdfBlob(), "orientacion-web-ism.pdf");
        setExportStatus("PDF preparado: la descarga comenzó correctamente.");
        trackExport("pdf");
    }

    function buildWhatsAppMessage() {
        return [
            "Hola, Ignacio. Completé la Guía Web ISM y quiero revisar esta orientación:",
            ""
        ].concat(getSummaryRows().map(function (row) {
            return row[0] + ": " + row[1];
        })).join("\n");
    }

    function handleWhatsApp() {
        setExportStatus("WhatsApp está abriendo con tu orientación completa.");
        trackExport("whatsapp");
    }

    function moveToStep(nextStep) {
        state.step = Math.max(0, Math.min(totalSteps, nextStep));
        renderAll();
    }

    selectors.nextButton.addEventListener("click", function () {
        if (!canContinue()) return;
        moveToStep(state.step + 1);
    });

    selectors.backButton.addEventListener("click", function () {
        moveToStep(state.step - 1);
    });

    document.getElementById("exportExcelBtn").addEventListener("click", exportExcel);
    document.getElementById("exportPdfBtn").addEventListener("click", exportPdf);
    document.getElementById("continueWhatsappBtn").addEventListener("click", handleWhatsApp);

    renderEssentials();
    renderAll();
}());
