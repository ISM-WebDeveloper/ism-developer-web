// INICIO SIEMPRE EN HERO
// Evita que el navegador restaure una posicion previa o un hash antiguo al recargar.

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

const startAtHero = () => {
    if (window.location.hash) {
        history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
    });
};

startAtHero();
window.addEventListener("DOMContentLoaded", startAtHero);
window.addEventListener("load", startAtHero);
window.addEventListener("pageshow", startAtHero);

// NAVBAR PREMIUM
// Agrega una clase cuando el usuario baja con scroll

const navbar = document.getElementById("navbar");
let navbarHideTimer;

window.addEventListener("scroll", () => {
    if (!navbar) return;

    if (window.innerWidth <= 600) {
        navbar.classList.remove("scrolled");
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

// REVEAL PREMIUM
// Aplica entradas suaves a bloques, títulos y tarjetas sin depender de editar cada sección a mano.

const autoRevealSelectors = [
    ".section-title",
    ".contact-intro",
    ".contact-form",
    ".faq-column",
    ".footer-grid > *",
    ".footer-bottom",
    ".floating-whatsapp"
];

autoRevealSelectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((element) => {
        element.classList.add("reveal");
    });
});

const revealGroups = [
    ".cards",
    ".process-map",
    ".presence-showcase",
    ".faq-grid",
    ".footer-grid",
    ".contact-shell"
];

revealGroups.forEach((selector) => {
    document.querySelectorAll(selector).forEach((group) => {
        [...group.querySelectorAll(":scope > .reveal")].forEach((element, index) => {
            element.style.setProperty("--reveal-delay", `${Math.min(index * 90, 360)}ms`);
        });
    });
});

const revealElements = document.querySelectorAll(".reveal");

function revealVisibleElements() {
    revealElements.forEach((element) => {
        if (element.classList.contains("active")) return;

        const rect = element.getBoundingClientRect();
        const isInsideViewport = rect.top < window.innerHeight * 0.88 && rect.bottom > 0;

        if (isInsideViewport) {
            element.classList.add("active");
        }
    });
}

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        });
    }, {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.12
    });

    revealElements.forEach((element) => revealObserver.observe(element));
} else {
    window.addEventListener("scroll", revealVisibleElements, { passive: true });
    window.addEventListener("resize", revealVisibleElements);
    window.addEventListener("load", revealVisibleElements);
    requestAnimationFrame(revealVisibleElements);
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

// CARRUSELES PRESENCIA DIGITAL
// Cada carrusel funciona de forma independiente con botones y puntos.

const presenceCarousels = document.querySelectorAll("[data-presence-carousel]");

presenceCarousels.forEach((carousel) => {
    const slides = [...carousel.querySelectorAll(".presence-slide")];
    const copySlides = [...carousel.closest(".presence-block")?.querySelectorAll(".presence-copy-slide") || []];
    const dotsContainer = carousel.querySelector(".presence-dots");
    const prevButton = carousel.querySelector("[data-carousel-prev]");
    const nextButton = carousel.querySelector("[data-carousel-next]");
    let activeIndex = 0;

    if (!slides.length || !dotsContainer) return;

    slides.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.className = "presence-dot";
        dot.addEventListener("click", () => setPresenceSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = [...dotsContainer.querySelectorAll(".presence-dot")];

    function setPresenceSlide(index) {
        activeIndex = (index + slides.length) % slides.length;

        slides.forEach((slide, slideIndex) => {
            slide.classList.toggle("active", slideIndex === activeIndex);
        });

        copySlides.forEach((slide, slideIndex) => {
            slide.classList.toggle("active", slideIndex === activeIndex);
        });

        dots.forEach((dot, dotIndex) => {
            dot.classList.toggle("active", dotIndex === activeIndex);
        });
    }

    prevButton?.addEventListener("click", () => setPresenceSlide(activeIndex - 1));
    nextButton?.addEventListener("click", () => setPresenceSlide(activeIndex + 1));
    setPresenceSlide(0);
});

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
            const hasPublicLink = node.dataset.link && !node.dataset.link.includes("#contacto");
            inspectorLink.hidden = !hasPublicLink;

            if (hasPublicLink) {
                inspectorLink.href = node.dataset.link;
                inspectorLink.textContent = node.dataset.action || "Ver proyecto";
                inspectorLink.setAttribute("target", "_blank");
                inspectorLink.setAttribute("rel", "noopener noreferrer");
            }
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
            buildVaultIndex(category);
            setProjectData(firstVisibleNode);

            if (shouldScroll) {
                scrollProjectIntoView(firstVisibleNode);
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
        if (node.dataset.link && !node.querySelector(".vault-mobile-action")) {
            const action = document.createElement("span");
            action.className = "vault-mobile-action";
            action.textContent = node.dataset.action || "Ver proyecto";

            action.addEventListener("click", (event) => {
                event.stopPropagation();

                if (node.dataset.link.startsWith("#")) {
                    window.location.href = node.dataset.link;
                    return;
                }

                window.open(node.dataset.link, "_blank", "noopener,noreferrer");
            });

            node.appendChild(action);
        }

        node.addEventListener("mouseenter", () => setProjectData(node));
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

        window.open(`https://wa.me/56968374821?text=${encodeURIComponent(whatsappText)}`, "_blank");
    });
}



// LUCIDE ICONS
// Convierte los <i data-lucide=""> en iconos SVG

if (window.lucide) {
    lucide.createIcons();
}


// FAQ / PREGUNTAS FRECUENTES
// Abre y cierra cada pregunta al hacer clic

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    if (!question) return;

    question.addEventListener("click", () => {
        const isActive = item.classList.toggle("active");
        question.setAttribute("aria-expanded", isActive);
    });
});







