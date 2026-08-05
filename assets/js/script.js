// POSICIÓN INICIAL Y NAVEGACIÓN INTERNA
// Todas las rutas del navbar apuntan a secciones reales de esta página y
// descuentan la altura del navbar para no ocultar los títulos.

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

const getSectionAnchorOffset = () => {
    const configuredOffset = Number.parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--section-anchor-offset")
    );

    return Number.isFinite(configuredOffset) ? configuredOffset : 100;
};

const scrollToSection = (target, behavior = "smooth") => {
    const targetTop = target.id === "inicio"
        ? 0
        : target.getBoundingClientRect().top + window.scrollY - getSectionAnchorOffset();

    window.scrollTo({
        top: Math.max(0, Math.round(targetTop)),
        left: 0,
        behavior
    });
};

const restoreRequestedPosition = () => {
    const targetId = decodeURIComponent(window.location.hash.slice(1));
    const target = targetId ? document.getElementById(targetId) : null;

    requestAnimationFrame(() => {
        if (target) {
            scrollToSection(target, "auto");
            return;
        }

        if (!targetId) {
            window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        }
    });
};

if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", restoreRequestedPosition, { once: true });
} else {
    restoreRequestedPosition();
}

window.addEventListener("pageshow", restoreRequestedPosition);

// NAVBAR PREMIUM

const navbar = document.getElementById("navbar");
const navToggle = document.getElementById("navToggle");
const primaryNav = document.getElementById("primaryNav");
let navbarHideTimer;

const setNavigationOpen = (isOpen) => {
    if (!navbar || !navToggle) return;

    navbar.classList.toggle("menu-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Cerrar menú principal" : "Abrir menú principal");
    navToggle.innerHTML = `<i data-lucide="${isOpen ? "x" : "menu"}"></i>`;

    if (window.lucide) {
        lucide.createIcons();
    }
};

navToggle?.addEventListener("click", () => {
    setNavigationOpen(!navbar?.classList.contains("menu-open"));
});

primaryNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setNavigationOpen(false));
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
        const href = link.getAttribute("href");
        if (!href || href === "#") return;

        const target = document.getElementById(decodeURIComponent(href.slice(1)));
        if (!target) return;

        event.preventDefault();
        setNavigationOpen(false);
        scrollToSection(target);

        if (window.location.hash !== href) {
            history.pushState(null, "", href);
        }
    });
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        setNavigationOpen(false);
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
        setNavigationOpen(false);
    }
});

window.addEventListener("scroll", () => {
    if (!navbar) return;

    if (window.innerWidth <= 600) {
        navbar.classList.remove("scrolled");
        navbar.classList.remove("nav-hidden");
        clearTimeout(navbarHideTimer);
        return;
    }

    if (navbar.classList.contains("menu-open")) {
        navbar.classList.remove("nav-hidden");
        clearTimeout(navbarHideTimer);
        return;
    }

    if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
        navbar.classList.remove("nav-hidden");

        clearTimeout(navbarHideTimer);
        navbarHideTimer = setTimeout(() => {
            navbar.classList.add("nav-hidden");
        }, 1500);
    } else {
        navbar.classList.remove("scrolled");
        navbar.classList.remove("nav-hidden");
        clearTimeout(navbarHideTimer);
    }
});

// REVEAL PREMIUM POR VIEWPORT
// Cada elemento se prepara con una entrada distinta y solo se activa cuando
// realmente entra en el área visible. El observer se desconecta después de
// la primera aparición para evitar repeticiones y conservar rendimiento.

const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const reduceMotion = reduceMotionQuery.matches;
const compactMotion = window.matchMedia("(max-width: 700px)").matches;

const setReveal = (element, variant = "fade-up", delay = 0) => {
    if (!element) return;

    element.classList.add("reveal");
    element.dataset.reveal = element.dataset.reveal || variant;
    element.style.setProperty("--reveal-delay", `${Math.max(0, Math.round(delay))}ms`);
};

const revealAll = (selector, variant = "fade-up", delay = 0) => {
    document.querySelectorAll(selector).forEach((element) => {
        setReveal(element, variant, delay);
    });
};

const revealGroup = ({
    groupSelector,
    itemSelector,
    variants = ["card-rise"],
    step = 80,
    maxDelay = 420
}) => {
    document.querySelectorAll(groupSelector).forEach((group) => {
        const items = [...group.querySelectorAll(itemSelector)];
        const motionFactor = compactMotion ? 0.62 : 1;

        items.forEach((element, index) => {
            const variant = variants[index % variants.length];
            const delay = Math.min(index * step * motionFactor, maxDelay * motionFactor);
            setReveal(element, variant, delay);
        });
    });
};

// Encabezados: una entrada limpia y consistente en todas las secciones.
revealAll(".section-title", "fade-up");

// Sobre mí: composición dividida para reforzar la lectura izquierda-derecha.
revealAll(".about-visual", "clip-left");
revealAll(".about-content", "fade-right", compactMotion ? 40 : 110);

// Servicios: tarjetas premium en cascada y nota final independiente.
revealGroup({
    groupSelector: ".service-showcase-grid",
    itemSelector: ":scope > .service-showcase-card",
    variants: ["card-rise", "soft-zoom"],
    step: 78,
    maxDelay: 390
});
revealAll(".service-showcase-note", "fade-up", compactMotion ? 40 : 120);

// Productos y madurez: entradas profundas pero discretas.
revealGroup({
    groupSelector: ".products-section .product-grid",
    itemSelector: ":scope > .product-card",
    variants: ["card-rise", "soft-zoom"],
    step: 88,
    maxDelay: 360
});
revealGroup({
    groupSelector: ".maturity-grid",
    itemSelector: ":scope > .maturity-card-premium",
    variants: ["clip-up", "soft-zoom"],
    step: 96,
    maxDelay: 360
});
revealAll(".maturity-note", "fade-up", compactMotion ? 40 : 120);

// Proceso: recorrido secuencial, legible y sin movimientos bruscos.
revealGroup({
    groupSelector: ".process-map",
    itemSelector: ":scope > .process-step",
    variants: ["fade-left", "card-rise", "fade-right"],
    step: 72,
    maxDelay: 360
});

// Stack: primero aparece el marco y luego cada tecnología en una cascada corta.
revealAll(".tools-panel", "soft-zoom");
revealGroup({
    groupSelector: ".tools-grid",
    itemSelector: ":scope > .tool-card",
    variants: ["pop"],
    step: 34,
    maxDelay: 410
});
revealAll(".tools-bottom-mark", "fade-up", compactMotion ? 30 : 100);

// Interfaces y portafolio: bloques grandes con entrada cinematográfica suave.
revealAll(".dashboard-mockup", "clip-up");
revealAll(".vault-shell", "soft-zoom");

// Preguntas frecuentes: columnas opuestas y preguntas en cascada.
revealAll(".faq-column:first-child", "fade-left");
revealAll(".faq-column:last-child", "fade-right", compactMotion ? 35 : 90);
revealGroup({
    groupSelector: ".faq-column",
    itemSelector: ":scope > .faq-item",
    variants: ["fade-up"],
    step: 48,
    maxDelay: 220
});

// Contacto y footer: cierre equilibrado de la experiencia.
revealAll(".contact-intro", "fade-left");
revealAll(".contact-form", "fade-right", compactMotion ? 35 : 100);
revealGroup({
    groupSelector: ".contact-points",
    itemSelector: ":scope > div",
    variants: ["fade-up"],
    step: 65,
    maxDelay: 180
});
revealGroup({
    groupSelector: ".footer-grid",
    itemSelector: ":scope > *",
    variants: ["fade-up", "soft-zoom"],
    step: 75,
    maxDelay: 300
});
revealAll(".footer-bottom", "fade-up", compactMotion ? 30 : 90);
revealAll(".floating-whatsapp", "pop", compactMotion ? 180 : 420);

const revealElements = [...document.querySelectorAll(".reveal")];

const activateReveal = (element) => {
    element.classList.add("is-revealed");
    element.removeAttribute("aria-hidden");
};

if (reduceMotion) {
    revealElements.forEach(activateReveal);
} else if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            activateReveal(entry.target);
            observer.unobserve(entry.target);
        });
    }, {
        root: null,
        // La animación comienza cuando el elemento ya entró en el viewport,
        // dejando un margen inferior para que el efecto sea visible completo.
        rootMargin: "0px 0px -20% 0px",
        threshold: 0.12
    });

    revealElements.forEach((element) => revealObserver.observe(element));
} else {
    const revealVisibleElements = () => {
        revealElements.forEach((element) => {
            if (element.classList.contains("is-revealed")) return;

            const rect = element.getBoundingClientRect();
            const entryLine = window.innerHeight * 0.80;
            const isInsideViewport = rect.top <= entryLine && rect.bottom >= 0;

            if (isInsideViewport) activateReveal(element);
        });
    };

    window.addEventListener("scroll", revealVisibleElements, { passive: true });
    window.addEventListener("resize", revealVisibleElements);
    window.addEventListener("pageshow", revealVisibleElements);
    requestAnimationFrame(revealVisibleElements);
}

// Marca la sección activa para futuros detalles visuales y depuración.
if ("IntersectionObserver" in window && !reduceMotion) {
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle("is-in-view", entry.isIntersecting);
        });
    }, {
        rootMargin: "-18% 0px -18% 0px",
        threshold: 0.05
    });

    document.querySelectorAll("main > section, footer").forEach((section) => {
        sectionObserver.observe(section);
    });
}

// ANIMACIÓN SOBRE MÍ
// Alterna el foco de los pins del visual izquierdo.

const aboutOrbit = document.querySelector(".about-orbit");
const aboutPins = document.querySelectorAll(".about-orbit-pin");
let aboutPinIndex = 0;
let aboutPinTimer;

const setAboutPin = (index) => {
    if (!aboutPins.length) return;

    aboutPins.forEach((pin) => pin.classList.remove("is-active"));
    aboutPinIndex = (index + aboutPins.length) % aboutPins.length;
    aboutPins[aboutPinIndex].classList.add("is-active");
};

if (aboutPins.length && !aboutOrbit?.classList.contains("image-test")) {
    const startAboutPinCycle = () => {
        clearInterval(aboutPinTimer);
        aboutPinTimer = setInterval(() => {
            setAboutPin(aboutPinIndex + 1);
        }, 3200);
    };

    startAboutPinCycle();

    aboutPins.forEach((pin, index) => {
        pin.addEventListener("mouseenter", () => {
            clearInterval(aboutPinTimer);
            setAboutPin(index);
        });

        pin.addEventListener("mouseleave", startAboutPinCycle);
        pin.addEventListener("focus", () => {
            clearInterval(aboutPinTimer);
            setAboutPin(index);
        });

        pin.addEventListener("blur", startAboutPinCycle);
    });
}

// ISM PROJECT VAULT
// Filtra proyectos, actualiza el inspector y abre una vista expandida dentro de la sección.

const vaultSection = document.querySelector(".project-vault-section");

if (vaultSection) {
    const vaultTabs = vaultSection.querySelectorAll(".vault-tab");
    const vaultNodes = vaultSection.querySelectorAll(".vault-node");
    const vaultInspector = vaultSection.querySelector(".vault-inspector");
    const inspectorVisual = vaultSection.querySelector(".inspector-visual");
    const inspectorType = document.getElementById("vaultInspectorType");
    const inspectorName = document.getElementById("vaultInspectorName");
    const inspectorStatus = document.getElementById("vaultInspectorStatus");
    const inspectorTech = document.getElementById("vaultInspectorTech");
    const inspectorDescription = document.getElementById("vaultInspectorDescription");
    const inspectorStage = document.getElementById("vaultInspectorStage");
    const inspectorDate = document.getElementById("vaultInspectorDate");
    const inspectorLink = document.getElementById("vaultInspectorLink");
    const tabCounters = vaultSection.querySelectorAll("[data-vault-count]");
    const vaultTrack = vaultSection.querySelector(".vault-track");
    const prevArrow = vaultSection.querySelector(".vault-arrow-prev");
    const nextArrow = vaultSection.querySelector(".vault-arrow-next");
    const vaultIndex = vaultSection.querySelector(".vault-index");

    const getPreviewClass = (node) => {
        const preview = node.querySelector(".vault-preview");
        return [...preview.classList].find((className) => className.startsWith("preview-"));
    };

    const syncVaultIndex = (activeNode) => {
        if (!vaultIndex) return;

        vaultIndex.querySelectorAll(".vault-index-button").forEach((button) => {
            button.classList.toggle("active", button.dataset.vaultTarget === activeNode.dataset.name);
        });
    };

    const syncVaultStack = (activeNode) => {
        const visibleNodes = [...vaultNodes].filter((node) => !node.classList.contains("is-hidden"));
        const activeIndex = visibleNodes.indexOf(activeNode);
        const totalNodes = visibleNodes.length;

        visibleNodes.forEach((node, index) => {
            let offset = index - activeIndex;

            if (totalNodes > 1) {
                if (offset > totalNodes / 2) offset -= totalNodes;
                if (offset < -totalNodes / 2) offset += totalNodes;
            }

            const distance = Math.abs(offset);

            node.classList.toggle("is-before", offset < 0);
            node.classList.toggle("is-after", offset > 0);
            node.classList.toggle("is-stack-visible", distance <= 2);
            node.style.setProperty("--stack-distance", distance);
            node.style.setProperty("--stack-offset", offset);
        });
    };

    const setProjectData = (node) => {
        const preview = node.querySelector(".vault-preview");
        const previewClass = getPreviewClass(node);

        vaultNodes.forEach((item) => item.classList.remove("active"));
        node.classList.add("active");

        if (vaultInspector) {
            const nodeStyles = getComputedStyle(node);
            vaultInspector.style.setProperty("--project-accent", nodeStyles.getPropertyValue("--project-accent"));
            vaultInspector.style.setProperty("--project-glow", nodeStyles.getPropertyValue("--project-glow"));
            vaultInspector.classList.remove("is-switching");
            void vaultInspector.offsetWidth;
            vaultInspector.classList.add("is-switching");
        }

        if (inspectorVisual && preview) {
            inspectorVisual.className = `inspector-visual ${previewClass}`;
            inspectorVisual.innerHTML = preview.innerHTML;
        }

        inspectorType.textContent = node.dataset.type;
        inspectorName.textContent = node.dataset.name;
        inspectorStatus.textContent = node.dataset.status;
        inspectorTech.textContent = node.dataset.tech;
        inspectorDescription.textContent = node.dataset.description;
        inspectorStage.textContent = node.dataset.stage;
        inspectorDate.textContent = node.dataset.date;

        if (inspectorLink) {
            inspectorLink.hidden = false;
            inspectorLink.href = `portafolio.html?proyecto=${encodeURIComponent(node.dataset.projectId)}`;
            inspectorLink.textContent = node.dataset.caseStudy === "true" ? "Ver caso de estudio" : "Ver proyecto";
            inspectorLink.dataset.trackLabel = `${inspectorLink.textContent}: ${node.dataset.name}`;
            inspectorLink.dataset.projectId = node.dataset.projectId;
            inspectorLink.removeAttribute("target");
            inspectorLink.removeAttribute("rel");
        }

        const mobileDetail = node.querySelector(".vault-mobile-detail");
        if (mobileDetail) {
            mobileDetail.textContent = node.dataset.description;
        }

        syncVaultStack(node);
        syncVaultIndex(node);
    };

    const buildVaultIndex = (category) => {
        if (!vaultIndex) return;

        vaultIndex.innerHTML = "";

        [...vaultNodes]
            .filter((node) => node.dataset.category === category)
            .forEach((node, index) => {
                const button = document.createElement("button");
                button.type = "button";
                button.className = "vault-index-button";
                button.dataset.vaultTarget = node.dataset.name;
                button.setAttribute("aria-label", node.dataset.name);
                button.innerHTML = "<span></span>";

                button.addEventListener("click", () => {
                    setProjectData(node);
                    scrollProjectIntoView(node);
                });

                vaultIndex.appendChild(button);
            });
    };

    const scrollProjectIntoView = (node) => {
        if (!vaultTrack || window.innerWidth > 760) return;

        node.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start"
        });
    };

    const filterVault = (category, shouldScroll = false) => {
        let firstVisibleNode = null;

        vaultNodes.forEach((node) => {
            const isVisible = node.dataset.category === category;
            node.classList.toggle("is-hidden", !isVisible);
            node.classList.remove("is-before", "is-after");
            node.style.removeProperty("--stack-distance");
            node.style.removeProperty("--stack-offset");

            if (isVisible && !firstVisibleNode) {
                firstVisibleNode = node;
            }
        });

        if (firstVisibleNode) {
            const preferredNode = [...vaultNodes].find((node) => (
                node.dataset.category === category && node.dataset.caseStudy === "true"
            ));
            buildVaultIndex(category);
            setProjectData(preferredNode || firstVisibleNode);

            if (shouldScroll) {
                scrollProjectIntoView(preferredNode || firstVisibleNode);
            }
        }
    };

    tabCounters.forEach((counter) => {
        const category = counter.dataset.vaultCount;
        counter.textContent = [...vaultNodes].filter((node) => node.dataset.category === category).length;
    });

    vaultTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            vaultTabs.forEach((item) => item.classList.remove("active"));
            tab.classList.add("active");
            filterVault(tab.dataset.vaultFilter, true);
        });
    });

    let vaultScrollTimer;

    vaultTrack?.addEventListener("scroll", () => {
        if (window.innerWidth > 760) return;

        clearTimeout(vaultScrollTimer);
        vaultScrollTimer = setTimeout(() => {
            const visibleNodes = [...vaultNodes].filter((node) => !node.classList.contains("is-hidden"));
            const trackRect = vaultTrack.getBoundingClientRect();

            const nearestNode = visibleNodes.reduce((nearest, node) => {
                const nodeRect = node.getBoundingClientRect();
                const distance = Math.abs(nodeRect.left - trackRect.left);

                if (!nearest || distance < nearest.distance) {
                    return { node, distance };
                }

                return nearest;
            }, null);

            if (nearestNode?.node) {
                setProjectData(nearestNode.node);
            }
        }, 80);
    });

    vaultNodes.forEach((node) => {
        node.dataset.trackEvent = "project_click";
        node.dataset.trackCategory = "portfolio";
        node.dataset.trackLabel = node.dataset.name;

        if (node.dataset.projectId && !node.querySelector(".vault-mobile-action")) {
            const action = document.createElement("span");
            action.className = "vault-mobile-action";
            action.textContent = node.dataset.caseStudy === "true" ? "Ver caso de estudio" : "Ver proyecto";

            action.addEventListener("click", (event) => {
                event.stopPropagation();

                window.trackEvent("project_click", {
                    event_category: "portfolio",
                    event_label: action.textContent,
                    project_id: node.dataset.projectId,
                    section: "proyectos"
                });
                window.location.href = `portafolio.html?proyecto=${encodeURIComponent(node.dataset.projectId)}`;
            });

            node.appendChild(action);
        }

        node.addEventListener("focus", () => setProjectData(node));
        node.addEventListener("click", () => setProjectData(node));

        node.addEventListener("mousemove", (event) => {
            const rect = node.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width) * 100;
            const y = ((event.clientY - rect.top) / rect.height) * 100;

            node.style.setProperty("--mx", `${x}%`);
            node.style.setProperty("--my", `${y}%`);
        });
    });

    const scrollVault = (direction) => {
        const visibleNodes = [...vaultNodes].filter((node) => !node.classList.contains("is-hidden"));
        const activeIndex = visibleNodes.findIndex((node) => node.classList.contains("active"));
        const nextIndex = (activeIndex + direction + visibleNodes.length) % visibleNodes.length;

        if (visibleNodes[nextIndex]) {
            setProjectData(visibleNodes[nextIndex]);
        }
    };

    prevArrow?.addEventListener("click", () => scrollVault(-1));
    nextArrow?.addEventListener("click", () => scrollVault(1));

    filterVault("presencias");
}


// FORMULARIO DE CONTACTO
// Arma una solicitud ordenada y la envía por WhatsApp.

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    const serviceSelect = document.getElementById("contactServicio");
    const requestedServiceId = new URLSearchParams(window.location.search).get("servicio");
    const serviceNames = {
        "desarrollo-implementacion": "Desarrollo e Implementación",
        "mantenimiento-evolucion": "Mantenimiento y Evolución",
        "monitoreo-observabilidad": "Monitoreo y Observabilidad",
        "respaldo-continuidad": "Respaldo y Continuidad Operacional",
        "ciberseguridad-proteccion": "Ciberseguridad y Protección Digital",
        "soporte-gestion": "Soporte y Gestión de Servicios"
    };

    if (requestedServiceId && serviceNames[requestedServiceId] && serviceSelect) {
        serviceSelect.value = serviceNames[requestedServiceId];
    }

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const nombre = formData.get("nombre")?.trim();
        const empresa = formData.get("empresa")?.trim() || "No indicado";
        const whatsapp = formData.get("whatsapp")?.trim();
        const servicio = formData.get("servicio")?.trim();
        const mensaje = formData.get("mensaje")?.trim() || "Quiero conversar mi idea con más detalle.";

        const whatsappText = [
            "Hola, Ignacio. Quiero conversar un proyecto con ISM Developer.",
            "",
            `Nombre: ${nombre}`,
            `Empresa o negocio: ${empresa}`,
            `WhatsApp: ${whatsapp}`,
            `Servicio de interés: ${servicio}`,
            "",
            `Mensaje: ${mensaje}`
        ].join("\n");

        window.trackEvent("contact_form_submit", {
            event_category: "conversion",
            service_interest: servicio,
            section: "contacto"
        });

        window.open(
            `https://wa.me/56968374821?text=${encodeURIComponent(whatsappText)}`,
            "_blank",
            "noopener,noreferrer"
        );
    });
}



// LUCIDE ICONS
// Convierte los <i data-lucide=""> en iconos SVG

if (window.lucide) {
    lucide.createIcons();
}


// FAQ / PREGUNTAS FRECUENTES
// Todas las respuestas comienzan cerradas. Solo una pregunta puede permanecer abierta.

const faqItems = [...document.querySelectorAll(".faq-item")];

const closeFaqItem = (item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    if (!question || !answer) return;

    item.classList.remove("is-open");
    question.setAttribute("aria-expanded", "false");
    answer.setAttribute("aria-hidden", "true");
    answer.style.maxHeight = "0px";
};

faqItems.forEach((item, index) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    if (!question || !answer) return;

    const questionId = `faq-question-${index + 1}`;
    const answerId = `faq-answer-${index + 1}`;
    question.id = questionId;
    question.setAttribute("aria-controls", answerId);
    answer.id = answerId;
    answer.setAttribute("role", "region");
    answer.setAttribute("aria-labelledby", questionId);

    // Estado inicial explícito: evita aperturas causadas por otras clases o por el historial del navegador.
    closeFaqItem(item);

    question.addEventListener("click", () => {
        const shouldOpen = !item.classList.contains("is-open");

        faqItems.forEach(closeFaqItem);

        if (!shouldOpen) return;

        item.classList.add("is-open");
        question.setAttribute("aria-expanded", "true");
        answer.setAttribute("aria-hidden", "false");
        answer.style.maxHeight = `${answer.scrollHeight}px`;
    });
});

// CONFIGURADOR DE SERVICIOS
// Las tarjetas conservan su href como respaldo y muestran una confirmación antes de navegar.

const configuratorLinks = document.querySelectorAll("[data-configurator-link]");
const configuratorDialog = document.getElementById("serviceConfiguratorDialog");
const configuratorDescription = document.getElementById("serviceConfiguratorDescription");
const configuratorConfirm = configuratorDialog?.querySelector("[data-configurator-confirm]");
const configuratorCancel = configuratorDialog?.querySelector("[data-configurator-cancel]");
let configuratorOriginCard = null;

const closeConfiguratorDialog = () => {
    if (!configuratorDialog?.open) return;

    configuratorDialog.close();
    configuratorOriginCard?.focus();
    configuratorOriginCard = null;
};

configuratorLinks.forEach((card) => {
    card.addEventListener("click", (event) => {
        // Mantiene disponibles abrir en pestaña nueva y otros comportamientos nativos del enlace.
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) {
            return;
        }

        const destination = card.href;
        const serviceName = card.dataset.serviceName || "el servicio seleccionado";

        if (!configuratorDialog || typeof configuratorDialog.showModal !== "function") {
            const shouldContinue = window.confirm(
                `¿Quieres configurar tu servicio?\n\nServicio seleccionado: ${serviceName}`
            );

            if (!shouldContinue) {
                event.preventDefault();
            }

            return;
        }

        event.preventDefault();
        configuratorOriginCard = card;

        if (configuratorDescription) {
            configuratorDescription.textContent =
                `Abriremos una configuración guiada para “${serviceName}” y conservaremos esta selección.`;
        }

        if (configuratorConfirm) {
            configuratorConfirm.href = destination;
            configuratorConfirm.dataset.serviceName = serviceName;
        }

        configuratorDialog.showModal();
    });
});

configuratorCancel?.addEventListener("click", closeConfiguratorDialog);

configuratorConfirm?.addEventListener("click", () => {
    const serviceName = configuratorConfirm.dataset.serviceName || "Servicio no indicado";

    if (typeof window.trackEvent === "function") {
        window.trackEvent("service_configurator_confirm", {
            event_category: "conversion",
            service_name: serviceName,
            section: "servicios"
        });
    }
});

configuratorDialog?.addEventListener("click", (event) => {
    if (event.target === configuratorDialog) {
        closeConfiguratorDialog();
    }
});

configuratorDialog?.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeConfiguratorDialog();
});
