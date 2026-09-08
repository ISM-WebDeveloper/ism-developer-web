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
// Gestionado por assets/js/reveal-compat.js para ofrecer una entrada
// consistente en Edge, Chrome, Firefox, Safari y navegadores sin
// IntersectionObserver.
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
const portfolioSection = document.querySelector(".ism-portfolio-section");
if (portfolioSection) {
  const portfolioPanel = document.getElementById("portfolioPanel");
  const portfolioStatus = document.getElementById("portfolioSelectionStatus");
  const portfolioTabs = [...portfolioSection.querySelectorAll("[data-portfolio-tab]")];
  const portfolioDataNode = document.getElementById("ismPortfolioData");
  let portfolioData = { solutions: [], clients: [] };
  if (portfolioDataNode) {
    try {
      portfolioData = JSON.parse(portfolioDataNode.textContent || "{}");
    } catch (error) {
      console.error("No fue posible cargar el catálogo principal de soluciones.", error);
    }
  }
  const portfolioIconPaths = {
    "monitor-smartphone": `<rect x="3" y="4" width="13" height="10" rx="2"/><path d="M7 19h5M9.5 14v5"/><rect x="17" y="7" width="4" height="9" rx="1"/>`,
    "shopping-bag": `<path d="M6 8h12l1 12H5L6 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/>`,
    "calendar-check": `<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/><path d="m8 15 2 2 4-4"/>`,
    "briefcase-business": `<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/>`,
    "layout-dashboard": `<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="4" rx="1"/><rect x="14" y="11" width="7" height="10" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>`,
    "package-search": `<path d="m3 7 9-4 9 4-9 4-9-4Z"/><path d="M3 7v10l9 4 4-1.8M21 7v6"/><path d="M12 11v10"/><circle cx="18" cy="17" r="3"/><path d="m20.2 19.2 1.8 1.8"/>`,
    "settings-2": `<path d="M4 6h8M16 6h4M14 4v4M4 12h3M11 12h9M9 10v4M4 18h10M18 18h2M16 16v4"/>`,
    "sparkles": `<path d="m12 3 1.1 3.1L16 7.2l-2.9 1.1L12 11l-1.1-2.7L8 7.2l2.9-1.1L12 3Z"/><path d="m18 12 .8 2.2L21 15l-2.2.8L18 18l-.8-2.2L15 15l2.2-.8L18 12Z"/><path d="m6 13 1 2.8L10 17l-3 1.2L6 21l-1-2.8L2 17l3-1.2L6 13Z"/>`,
    "truck": `<path d="M3 6h11v9H3zM14 10h4l3 3v2h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>`,
    "server": `<rect x="4" y="3" width="16" height="7" rx="2"/><rect x="4" y="14" width="16" height="7" rx="2"/><path d="M8 6h.01M8 17h.01M12 6h5M12 17h5"/>`
  };
  const iconMarkup = (name) => {
    const paths = portfolioIconPaths[name];
    return paths
      ? `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`
      : `<i data-lucide="${name}" aria-hidden="true"></i>`;
  };
  const renderGallery=(item) => {
    const [firstImage] = item.images;
    const renderMainImage = (image) => image.pending
      ? `<div class="ism-portfolio-image-placeholder" data-portfolio-main-placeholder>
          <i data-lucide="monitor" aria-hidden="true"></i>
          <strong>${image.label}</strong>
          <span>Espacio preparado para imagen real de interfaz</span>
       </div>`
      : `<img src="${image.src}" alt="${image.alt}" width="960" height="540" loading="lazy" decoding="async" data-portfolio-main-image style="object-fit:${image.fit === "contain" ? "contain" : "cover"} !important;object-position:center !important;">`;
    return `
      <div class="ism-portfolio-gallery">
        <div class="ism-portfolio-main-media" data-portfolio-main-media>
          ${renderMainImage(firstImage)}
          <span class="ism-portfolio-media-caption" data-portfolio-media-caption>${firstImage.label}</span>
        </div>
        <div class="ism-portfolio-thumbs" data-count="${item.images.length}" aria-label="Vistas disponibles de ${item.name}">
          ${item.images.map((image, index) => `
            <button class="ism-portfolio-thumb${image.pending ? " is-pending" : ""}${index === 0 ? " is-active" : ""}" type="button"
              aria-label="Mostrar ${image.label} de ${item.name}" aria-pressed="${index === 0}"
              data-portfolio-image-index="${index}">
              ${image.pending
                ? `<span class="ism-portfolio-thumb-placeholder"><i data-lucide="monitor" aria-hidden="true"></i><small>${image.label}</small></span>`
                : `<img src="${image.src}" alt="" width="240" height="135" loading="lazy" decoding="async">`}
            </button>
          `).join("")}
        </div>
      </div>
    `;
  };
  const renderDetail=(item) => {
    const isSolution = item.type === "Solución ISM";
    const commercialMarkup = isSolution && item.price ? `
      <div class="ism-portfolio-commercial" aria-label="Información comercial de ${item.name}">
        <div class="ism-portfolio-commercial-card">
          <i data-lucide="wallet-cards" aria-hidden="true"></i>
          <span>Implementación inicial</span>
          <strong>Desde ${item.price}</strong>
        </div>
        <div class="ism-portfolio-commercial-card">
          <i data-lucide="clock-3" aria-hidden="true"></i>
          <span>Plazo estimado</span>
          <strong>${item.timeline}</strong>
        </div>
        <div class="ism-portfolio-commercial-card">
          <i data-lucide="shield-check" aria-hidden="true"></i>
          <span>Continuidad administrada</span>
          <strong>Desde ${item.monthly} / mes</strong>
          <small>Opcional</small>
        </div>
      </div>
      <p class="ism-portfolio-commercial-note">${item.commercialNote}</p>
    ` : "";

    return `
      <div class="ism-portfolio-detail${isSolution ? "" : " is-client"}">
        ${renderGallery(item)}
        <div class="ism-portfolio-copy">
          <div class="ism-portfolio-copy-top">
            <span class="ism-portfolio-copy-type">${item.type}</span>
            ${isSolution && item.version ? `<span class="ism-portfolio-version-badge">${item.version}</span>` : ""}
          </div>
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          ${commercialMarkup}
          <div class="ism-portfolio-use-case"><strong>Puede ayudarte si:</strong> ${item.useCase}</div>
          <div class="ism-portfolio-stack">${item.stack}</div>
          <a class="ism-portfolio-detail-link" href="${item.link}"
            data-track-event="${isSolution ? "solution_quote_click" : "project_click"}"
            data-track-category="${isSolution ? "solutions" : "portfolio"}"
            data-track-label="${item.name}"
            ${isSolution ? `data-solution-quote="true" data-solution-id="${item.id}" data-solution-name="${item.name}"` : ""}>
            ${item.ctaLabel || "Ver implementación"} <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    `;
  };
  const renderWorkbench = (items, selectedIndex, selectorLabel) => {
    const selectedItem = items[selectedIndex];
    return `
      <div class="ism-portfolio-workbench${items.length > 4 ? " is-tools" : ""}">
        <div class="ism-portfolio-selector">
          ${selectorLabel ? `<span class="ism-portfolio-selector-label">${selectorLabel}</span>` : ""}
          ${items.map((item, index) => `
            <button class="ism-portfolio-item-button${index === selectedIndex ? " is-active" : ""}" type="button"
              aria-pressed="${index === selectedIndex}" data-portfolio-item-index="${index}">
              <span class="ism-portfolio-item-icon">${iconMarkup(item.icon)}</span>
              <span class="ism-portfolio-item-copy">
                <strong>${item.name}</strong>
                <small>${item.label}</small>
              </span>
            </button>
          `).join("")}
        </div>
        ${renderDetail(selectedItem)}
      </div>
    `;
  };
  const state = {
    tab: "solutions",
    selected: { clients: 0, solutions: 0 }
  };
  const syncLucide = () => {
    if (window.lucide?.createIcons) {
      window.lucide.createIcons();
    }
  };

  const portfolioMotionEnabled = () => {
    const forced = document.documentElement.classList.contains("motion-forced");
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    return forced || !reduced;
  };

  const animateElement = (element, keyframes, options) => {
    if (!element || !portfolioMotionEnabled() || typeof element.animate !== "function") return null;
    try {
      return element.animate(keyframes, options);
    } catch (error) {
      return null;
    }
  };

  const animatePortfolioEntrance = () => {
    if (!portfolioPanel || !portfolioMotionEnabled()) return;

    const detail = portfolioPanel.querySelector(".ism-portfolio-detail");
    const gallery = portfolioPanel.querySelector(".ism-portfolio-gallery");
    const thumbs = portfolioPanel.querySelector(".ism-portfolio-thumbs");
    const activeItem = portfolioPanel.querySelector(".ism-portfolio-item-button.is-active");
    const copyNodes = [
      portfolioPanel.querySelector(".ism-portfolio-copy-top"),
      portfolioPanel.querySelector(".ism-portfolio-copy h3"),
      portfolioPanel.querySelector(".ism-portfolio-copy > p"),
      portfolioPanel.querySelector(".ism-portfolio-commercial"),
      portfolioPanel.querySelector(".ism-portfolio-commercial-note"),
      portfolioPanel.querySelector(".ism-portfolio-use-case"),
      portfolioPanel.querySelector(".ism-portfolio-stack"),
      portfolioPanel.querySelector(".ism-portfolio-detail-link")
    ].filter(Boolean);

    animateElement(
      detail,
      [
        { opacity: 0.82 },
        { opacity: 1 }
      ],
      { duration: 680, easing: "cubic-bezier(.2,.72,.24,1)", fill: "both" }
    );

    animateElement(
      gallery,
      [
        { opacity: 0.78, transform: "translateX(-7px) scale(.996)" },
        { opacity: 1, transform: "translateX(0) scale(1)" }
      ],
      { duration: 760, easing: "cubic-bezier(.2,.72,.24,1)", fill: "both" }
    );

    animateElement(
      thumbs,
      [
        { opacity: 0.78, transform: "translateY(4px)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      { duration: 620, delay: 150, easing: "cubic-bezier(.2,.72,.24,1)", fill: "both" }
    );

    copyNodes.forEach((node, index) => {
      animateElement(
        node,
        [
          { opacity: 0.78, transform: "translateX(7px) translateY(2px)" },
          { opacity: 1, transform: "translateX(0) translateY(0)" }
        ],
        {
          duration: 640,
          delay: 110 + index * 58,
          easing: "cubic-bezier(.2,.72,.24,1)",
          fill: "both"
        }
      );
    });

    animateElement(
      activeItem,
      [
        { transform: "scale(.985)", boxShadow: "0 0 0 rgba(56,189,248,0)" },
        { transform: "scale(1)", boxShadow: "0 10px 24px rgba(0,0,0,.16)" }
      ],
      { duration: 520, delay: 90, easing: "cubic-bezier(.2,.72,.24,1)", fill: "both" }
    );
  };

  const animatePortfolioExit = async () => {
    if (!portfolioPanel || !portfolioMotionEnabled()) return;
    const detail = portfolioPanel.querySelector(".ism-portfolio-detail");
    if (!detail) return;

    const animation = animateElement(
      detail,
      [
        { opacity: 1, transform: "translateY(0) scale(1)" },
        { opacity: 0.82, transform: "translateY(-2px) scale(.999)" }
      ],
      { duration: 170, easing: "cubic-bezier(.4,0,.2,1)", fill: "both" }
    );

    if (animation?.finished) {
      try {
        await animation.finished;
      } catch (error) {
        // La animación puede cancelarse si el usuario cambia rápidamente de opción.
      }
    }
  };

  const updateGalleryImage = async (item, imageIndex) => {
    if (!portfolioPanel) return;
    const image = item.images[imageIndex];
    const media = portfolioPanel.querySelector("[data-portfolio-main-media]");
    const caption = portfolioPanel.querySelector("[data-portfolio-media-caption]");
    if (!image || !media || !caption) return;

    const currentVisual = media.querySelector("[data-portfolio-main-image], [data-portfolio-main-placeholder]");
    const outgoing = animateElement(
      currentVisual,
      [
        { opacity: 1, transform: "scale(1)" },
        { opacity: 0.42, transform: "scale(.997)" }
      ],
      { duration: 190, easing: "cubic-bezier(.4,0,.2,1)", fill: "both" }
    );
    animateElement(
      caption,
      [
        { opacity: 1, transform: "translateY(0)" },
        { opacity: 0.45, transform: "translateY(2px)" }
      ],
      { duration: 180, easing: "cubic-bezier(.4,0,.2,1)", fill: "both" }
    );

    if (outgoing?.finished) {
      try {
        await outgoing.finished;
      } catch (error) {
        // Continuamos con el reemplazo aunque se cancele la salida.
      }
    }

    currentVisual?.remove();
    let nextVisual;

    if (image.pending) {
      nextVisual = document.createElement("div");
      nextVisual.className = "ism-portfolio-image-placeholder";
      nextVisual.setAttribute("data-portfolio-main-placeholder", "");
      nextVisual.innerHTML = `<i data-lucide="monitor" aria-hidden="true"></i><strong>${image.label}</strong><span>Espacio preparado para imagen real de interfaz</span>`;
    } else {
      nextVisual = document.createElement("img");
      nextVisual.src = image.src;
      nextVisual.alt = image.alt;
      nextVisual.width = 960;
      nextVisual.height = 540;
      nextVisual.loading = "lazy";
      nextVisual.decoding = "async";
      nextVisual.style.setProperty("object-fit", image.fit === "contain" ? "contain" : "cover", "important");
      nextVisual.style.setProperty("object-position", "center", "important");
      nextVisual.style.objectPosition = "center";
      nextVisual.setAttribute("data-portfolio-main-image", "");
    }

    media.prepend(nextVisual);
    caption.textContent = image.label;

    portfolioPanel.querySelectorAll("[data-portfolio-image-index]").forEach((button) => {
      const active = Number(button.dataset.portfolioImageIndex) === imageIndex;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    syncLucide();

    requestAnimationFrame(() => {
      animateElement(
        nextVisual,
        [
          { opacity: 0.42, transform: "scale(1.004) translateY(1px)" },
          { opacity: 1, transform: "scale(1) translateY(0)" }
        ],
        { duration: 680, easing: "cubic-bezier(.2,.72,.24,1)", fill: "both" }
      );
      animateElement(
        caption,
        [
          { opacity: 0.45, transform: "translateY(2px)" },
          { opacity: 1, transform: "translateY(0)" }
        ],
        { duration: 480, delay: 160, easing: "cubic-bezier(.2,.72,.24,1)", fill: "both" }
      );
    });
  };
  const bindPanelInteractions = () => {
    if (!portfolioPanel) return;
    const items = portfolioData[state.tab];
    portfolioPanel.querySelectorAll("[data-portfolio-item-index]").forEach((button) => {
      button.addEventListener("click", () => {
        state.selected[state.tab] = Number(button.dataset.portfolioItemIndex);
        renderCurrentPanel();
      });
    });
    portfolioPanel.querySelectorAll("[data-portfolio-image-index]").forEach((button) => {
      button.addEventListener("click", () => {
        const item = items[state.selected[state.tab]];
        updateGalleryImage(item, Number(button.dataset.portfolioImageIndex));
      });
    });
  };
  let portfolioRenderToken = 0;
  const renderCurrentPanel = async ({ animate = true } = {}) => {
    if (!portfolioPanel) return;
    const token = ++portfolioRenderToken;

    if (animate && portfolioPanel.firstElementChild) {
      await animatePortfolioExit();
      if (token !== portfolioRenderToken) return;
    }

    portfolioTabs.forEach((tab) => {
      const active = tab.dataset.portfolioTab === state.tab;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
    });

    const items = portfolioData[state.tab];
    const selectedIndex = state.selected[state.tab];
    const selectorLabel = state.tab === "solutions" ? "Soluciones ISM" : "";
    const current = items[selectedIndex];
    portfolioPanel.innerHTML = renderWorkbench(items, selectedIndex, selectorLabel);
    portfolioPanel.setAttribute("aria-label", state.tab === "solutions" ? "Soluciones ISM" : "Clientes ISM");
    if (portfolioStatus) portfolioStatus.textContent = `Mostrando ${current.name}.`;

    bindPanelInteractions();
    syncLucide();
    requestAnimationFrame(() => requestAnimationFrame(animatePortfolioEntrance));
  };

  portfolioTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      state.tab = tab.dataset.portfolioTab === "solutions" ? "solutions" : "clients";
      renderCurrentPanel();
    });
  });

  renderCurrentPanel({ animate: false });
}
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
  const messageField = document.getElementById("contactMensaje");

  const contactParams = new URLSearchParams(window.location.search);
  const requestedProductId = contactParams.get("producto");
  const requestedServiceId = contactParams.get("servicio");

  const productAliases = {
    "ism-stock-control": "ism-stock",
    "ism-gestion-control": "ism-control",
    "tool-service-hours": "ism-project",
    "tool-service-sizing": "ism-configurador",
    "tool-availability-agenda": "ism-reservas",
    "guia-web": "ism-asistente"
  };
  const normalizedRequestedProductId = productAliases[requestedProductId] || requestedProductId;

  const productNames = {
    "ism-presencia-digital": "ISM Presencia Digital",
    "ism-boutique": "ISM Boutique",
    "ism-reservas": "ISM Reservas",
    "ism-project": "ISM Project",
    "ism-control": "ISM Control",
    "ism-stock": "ISM Stock",
    "ism-configurador": "ISM Configurador",
    "ism-asistente": "ISM Asistente"
  };

  const productPrompts = {
    "ism-presencia-digital": "Cuéntanos qué necesita comunicar, captar o mejorar tu presencia digital.",
    "ism-boutique": "Cuéntanos qué productos quieres mostrar y cómo recibes hoy las consultas de tus clientes.",
    "ism-reservas": "Cuéntanos cómo coordinas hoy horarios, disponibilidad y reservas.",
    "ism-project": "Cuéntanos cómo registras hoy horas, actividades, clientes y proyectos.",
    "ism-control": "Cuéntanos qué procesos, responsables o módulos necesitas centralizar.",
    "ism-stock": "Cuéntanos cómo manejas hoy stock, bodegas, entregas o movimientos.",
    "ism-configurador": "Cuéntanos qué servicios, variables u opciones debería poder configurar tu cliente o equipo.",
    "ism-asistente": "Cuéntanos qué preguntas debería responder tu cliente y qué recomendación quieres entregar al final."
  };

  const serviceNames = {
    "desarrollo-implementacion": "Desarrollo e Implementación",
    "mantenimiento-evolucion": "Mantenimiento y Evolución",
    "monitoreo-observabilidad": "Monitoreo y Observabilidad",
    "respaldo-continuidad": "Respaldo y Continuidad Operacional",
    "ciberseguridad-proteccion": "Ciberseguridad y Protección Digital",
    "soporte-gestion": "Soporte y Gestión de Servicios"
  };

  if (normalizedRequestedProductId && productNames[normalizedRequestedProductId] && serviceSelect) {
    serviceSelect.value = productNames[normalizedRequestedProductId];

    if (messageField && !messageField.value) {
      messageField.placeholder = productPrompts[normalizedRequestedProductId];
    }


    window.trackEvent?.("product_interest_prefilled", {
      event_category: "conversion",
      product_interest: normalizedRequestedProductId,
      section: "contacto"
    });
  } else if (requestedServiceId && serviceNames[requestedServiceId] && serviceSelect) {
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
      `Solución / servicio de interés: ${servicio}`,
      "",
      `Mensaje: ${mensaje}`
    ].join("\n");
    window.trackEvent("contact_form_submit", {
      event_category: "conversion",
      service_interest: servicio,
      product_interest: normalizedRequestedProductId || "",
      section: "contacto"
    });
    window.open(
      `https://wa.me/56968374821?text=${encodeURIComponent(whatsappText)}`,
      "_blank",
      "noopener,noreferrer"
    );
  });
}

const solutionQuoteDialog = document.getElementById("solutionQuoteDialog");
if (solutionQuoteDialog) {
  const solutionQuoteProductName = document.getElementById("solutionQuoteProductName");
  const quoteCloseButtons = [...solutionQuoteDialog.querySelectorAll("[data-solution-quote-cancel]")];
  const quoteRoutes = [...solutionQuoteDialog.querySelectorAll("[data-solution-quote-route]")];

  let quoteContext = { id: "", name: "" };

  const configuratorProductAliases = {
    "ism-stock": "ism-stock-control",
    "ism-control": "ism-gestion-control",
    "ism-project": "tool-service-hours",
    "ism-configurador": "tool-service-sizing",
    "ism-reservas": "tool-availability-agenda",
    "ism-asistente": "guia-web"
  };

  const contactPromptMap = {
    "ism-presencia-digital": "Cuéntanos qué necesita comunicar, captar o mejorar tu presencia digital.",
    "ism-boutique": "Cuéntanos qué productos quieres mostrar y cómo recibes hoy las consultas de tus clientes.",
    "ism-reservas": "Cuéntanos cómo coordinas hoy horarios, disponibilidad y reservas.",
    "ism-project": "Cuéntanos cómo registras hoy horas, actividades, clientes y proyectos.",
    "ism-control": "Cuéntanos qué procesos, responsables o módulos necesitas centralizar.",
    "ism-stock": "Cuéntanos cómo manejas hoy stock, bodegas, entregas o movimientos.",
    "ism-configurador": "Cuéntanos qué servicios, variables u opciones debería poder configurar tu cliente o equipo.",
    "ism-asistente": "Cuéntanos qué preguntas debería responder tu cliente y qué recomendación quieres entregar al final."
  };

  const openSolutionQuoteDialog = (productId, productName) => {
    quoteContext = { id: productId || "", name: productName || "Solución ISM" };
    if (solutionQuoteProductName) solutionQuoteProductName.textContent = quoteContext.name;

    if (typeof solutionQuoteDialog.showModal === "function") {
      solutionQuoteDialog.showModal();
      requestAnimationFrame(() => {
        window.lucide?.createIcons?.();
        solutionQuoteDialog.querySelector("[data-solution-quote-route]")?.focus();
      });
    }
  };

  const closeSolutionQuoteDialog = () => {
    if (solutionQuoteDialog.open) solutionQuoteDialog.close();
  };

  const trackQuoteRoute = (route) => {
    window.trackEvent?.("solution_quote_route_click", {
      event_category: "conversion",
      product_interest: quoteContext.id,
      solution_name: quoteContext.name,
      quote_route: route,
      section: "portfolio-popup"
    });
  };

  const openConfigurator = () => {
    const product = configuratorProductAliases[quoteContext.id] || quoteContext.id;
    const params = new URLSearchParams({ servicio: "desarrollo-implementacion" });
    if (product) params.set("producto", product);
    if (quoteContext.name) params.set("solucion", quoteContext.name);
    window.location.href = `configurador/?${params.toString()}`;
  };

  const openAssistant = () => {
    const params = new URLSearchParams();
    if (quoteContext.id) params.set("producto", quoteContext.id);
    if (quoteContext.name) params.set("solucion", quoteContext.name);
    params.set("origen", "catalogo-soluciones");
    window.location.href = `guia-web/?${params.toString()}`;
  };

  const openContactForm = () => {
    closeSolutionQuoteDialog();
    const contactSection = document.getElementById("contacto");
    const contactSelect = document.getElementById("contactServicio");
    const messageField = document.getElementById("contactMensaje");
    const nameField = document.getElementById("contactNombre");

    if (contactSelect && quoteContext.name) {
      const matchingOption = [...contactSelect.options].find((option) => option.value === quoteContext.name);
      if (matchingOption) contactSelect.value = quoteContext.name;
    }
    if (messageField && !messageField.value) {
      messageField.placeholder = contactPromptMap[quoteContext.id] || `Cuéntanos qué necesitas resolver con ${quoteContext.name}.`;
    }

    contactSection?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => nameField?.focus({ preventScroll: true }), 650);
  };

  const openWhatsApp = () => {
    const message = [
      "Hola, Ignacio. Quiero cotizar una solución con ISM Developer.",
      "",
      `Solución de interés: ${quoteContext.name}`,
      "Quiero revisar si se adapta a mi necesidad y conocer el alcance inicial."
    ].join("\n");
    window.open(
      `https://wa.me/56968374821?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  document.addEventListener("click", (event) => {
    const quoteButton = event.target.closest("[data-solution-quote='true']");
    if (!quoteButton) return;
    event.preventDefault();
    openSolutionQuoteDialog(quoteButton.dataset.solutionId, quoteButton.dataset.solutionName);
  });

  quoteCloseButtons.forEach((button) => button.addEventListener("click", closeSolutionQuoteDialog));

  solutionQuoteDialog.addEventListener("click", (event) => {
    if (event.target === solutionQuoteDialog) closeSolutionQuoteDialog();
  });

  quoteRoutes.forEach((button) => {
    button.addEventListener("click", () => {
      const route = button.dataset.solutionQuoteRoute;
      trackQuoteRoute(route);
      if (route === "configurator") return openConfigurator();
      if (route === "assistant") return openAssistant();
      if (route === "form") return openContactForm();
      if (route === "whatsapp") return openWhatsApp();
    });
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
// Solo el CTA Configurar este servicio abre la confirmación.
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
// SLIDER COLABORACIÓN ISM
// Carrusel simple con navegación manual y autoplay cada 5 segundos.
const collaborationSlider = document.querySelector('[data-collaboration-slider]');
if (collaborationSlider) {
  const slides = [...collaborationSlider.querySelectorAll('.collaboration-slide')];
  const dots = [...collaborationSlider.querySelectorAll('[data-collaboration-dot]')];
  const prevBtn = collaborationSlider.querySelector('[data-collaboration-prev]');
  const nextBtn = collaborationSlider.querySelector('[data-collaboration-next]');
  let activeIndex = slides.findIndex((slide) => slide.classList.contains('is-active'));
  let sliderTimer;
  if (activeIndex < 0) activeIndex = 0;
  const renderCollaborationSlide = (newIndex) => {
    const previousIndex = activeIndex;
    activeIndex = (newIndex + slides.length) % slides.length;
    slides.forEach((slide, index) => {
      const isActive = index === activeIndex;
      slide.classList.toggle('is-active', isActive);
      slide.classList.toggle('is-leaving-left', index === previousIndex && previousIndex !== activeIndex);
      slide.setAttribute('aria-hidden', String(!isActive));
    });
    dots.forEach((dot, index) => {
      const isActive = index === activeIndex;
      dot.classList.toggle('is-active', isActive);
      dot.setAttribute('aria-selected', String(isActive));
    });
  };
  const startCollaborationAutoplay = () => {
    clearInterval(sliderTimer);
    sliderTimer = setInterval(() => {
      renderCollaborationSlide(activeIndex + 1);
    }, 5000);
  };
  prevBtn?.addEventListener('click', () => {
    renderCollaborationSlide(activeIndex - 1);
    startCollaborationAutoplay();
  });
  nextBtn?.addEventListener('click', () => {
    renderCollaborationSlide(activeIndex + 1);
    startCollaborationAutoplay();
  });
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      renderCollaborationSlide(index);
      startCollaborationAutoplay();
    });
  });
  collaborationSlider.addEventListener('mouseenter', () => clearInterval(sliderTimer));
  collaborationSlider.addEventListener('mouseleave', startCollaborationAutoplay);
  collaborationSlider.addEventListener('focusin', () => clearInterval(sliderTimer));
  collaborationSlider.addEventListener('focusout', startCollaborationAutoplay);
  renderCollaborationSlide(activeIndex);
  startCollaborationAutoplay();
}
// STORY SLIDER | COLABORACIÓN ISM
// Sección completa con autoplay cada 8 segundos y navegación manual.
const storySlider = document.querySelector('[data-story-slider]');
if (storySlider) {
  const slides = [...storySlider.querySelectorAll('[data-story-slide]')];
  const dots = [...storySlider.querySelectorAll('[data-story-dot]')];
  const prevButton = storySlider.querySelector('[data-story-prev]');
  const nextButton = storySlider.querySelector('[data-story-next]');
  let currentStory = slides.findIndex((slide) => slide.classList.contains('is-active'));
  let storyTimer;
  if (currentStory < 0) currentStory = 0;
  const showStory = (index) => {
    currentStory = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === currentStory;
      slide.classList.toggle('is-active', isActive);
      slide.setAttribute('aria-hidden', String(!isActive));
    });
    dots.forEach((dot, dotIndex) => {
      const isActive = dotIndex === currentStory;
      dot.classList.toggle('is-active', isActive);
      dot.setAttribute('aria-selected', String(isActive));
    });
  };
  const restartStoryAutoplay = () => {
    clearInterval(storyTimer);
    storyTimer = setInterval(() => {
      showStory(currentStory + 1);
    }, 8000);
  };
  prevButton?.addEventListener('click', () => {
    showStory(currentStory - 1);
    restartStoryAutoplay();
  });
  nextButton?.addEventListener('click', () => {
    showStory(currentStory + 1);
    restartStoryAutoplay();
  });
  dots.forEach((dot, dotIndex) => {
    dot.addEventListener('click', () => {
      showStory(dotIndex);
      restartStoryAutoplay();
    });
  });
  storySlider.addEventListener('mouseenter', () => clearInterval(storyTimer));
  storySlider.addEventListener('mouseleave', restartStoryAutoplay);
  storySlider.addEventListener('focusin', () => clearInterval(storyTimer));
  storySlider.addEventListener('focusout', restartStoryAutoplay);
  showStory(currentStory);
  restartStoryAutoplay();
}
