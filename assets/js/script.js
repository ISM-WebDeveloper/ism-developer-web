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
// PORTAFOLIO ISM · LANDING
// Presenta casos reales, soluciones reutilizables y pilotos activos sin extender la landing.
const portfolioSection = document.querySelector(".ism-portfolio-section");
if (portfolioSection) {
  const portfolioTabs = [...portfolioSection.querySelectorAll("[data-portfolio-tab]")];
  const portfolioPanel = document.getElementById("portfolioPanel");
  const portfolioStatus = document.getElementById("portfolioSelectionStatus");
  const portfolioData = {
    clients: [

      {
        id: "badiasalud",
        name: "Badia Nurse Shield",
        label: "Caso de éxito · ISM Presencia Digital",
        status: "Publicado",
        type: "Caso de éxito",
        description: "Presencia profesional conectada con agenda y gestión privada para facilitar reservas y reducir coordinación manual.",
        useCase: "Ejemplo real de cómo ISM Presencia Digital puede evolucionar desde una web profesional hacia una solución con agenda y panel privado.",
        stack: "TypeScript · Tailwind CSS · Supabase · Vercel",
        icon: "calendar-check",
        link: "portafolio.html?proyecto=badiasalud",
        images: [
          { src: "assets/img/portfolio/badia-nurse-shield-sitio.webp", alt: "Sitio web de Badia Nurse Shield", label: "Sitio web" },
          { src: "assets/img/portfolio/badia-nurse-shield-agenda.webp", alt: "Agenda de Badia Nurse Shield", label: "Agenda" },
          { src: "assets/img/portfolio/badia-nurse-shield-panel.webp", alt: "Panel de Badia Nurse Shield", label: "Gestión interna" }
        ]
      },
      {
        id: "constructora-proestakis",
        name: "Constructora Proestakis",
        label: "Caso de éxito · ISM Presencia Digital",
        status: "Publicado",
        type: "Caso de éxito",
        description: "Presencia corporativa para comunicar experiencia, capacidad técnica y servicios desde un canal profesional propio.",
        useCase: "Ejemplo real de adaptación de ISM Presencia Digital a una empresa de construcción y servicios técnicos.",
        stack: "HTML5 · CSS3 · JavaScript · Vercel",
        icon: "truck",
        link: "portafolio.html?proyecto=constructora-proestakis",
        images: [
          { src: "assets/img/portfolio/proestakis-principal.webp", alt: "Sitio corporativo de Constructora Proestakis", label: "Vista principal" },
          { src: "assets/img/portfolio/proestakis-cifras.webp", alt: "Capacidades de Constructora Proestakis", label: "Capacidad técnica" },
          { src: "assets/img/portfolio/proestakis-propuesta.webp", alt: "Propuesta de valor de Constructora Proestakis", label: "Propuesta de valor" }
        ]
      },
      {
        id: "lecasse-it-services",
        name: "Lecasse IT Services",
        label: "Caso de éxito · ISM Presencia Digital",
        status: "Publicado",
        type: "Caso de éxito",
        description: "Presencia tecnológica diseñada para ordenar servicios y explicar una propuesta B2B de forma clara y profesional.",
        useCase: "Ejemplo real de adaptación de ISM Presencia Digital a una empresa de servicios tecnológicos.",
        stack: "HTML5 · CSS3 · JavaScript · Vercel",
        icon: "server",
        link: "portafolio.html?proyecto=lecasse-it-services",
        images: [
          { src: "assets/img/portfolio/lecasse-principal.webp", alt: "Sitio de Lecasse IT Services", label: "Vista principal" },
          { src: "assets/img/portfolio/lecasse-servicios.webp", alt: "Servicios de Lecasse IT Services", label: "Servicios" },
          { src: "assets/img/portfolio/lecasse-hero.webp", alt: "Propuesta principal de Lecasse IT Services", label: "Propuesta principal" }
        ]
      }
    
    ],
    dev: [

      {
        name: "Control de horas de servicios",
        status: "Herramienta ISM",
        description: "Centraliza horas, actividades, clientes y reportes para mantener trazabilidad de servicios ejecutados.",
        features: ["Horas", "Actividades", "Clientes", "Reportes"]
      },
      {
        name: "Dimensionador de servicios",
        status: "Herramienta ISM",
        description: "Estandariza el levantamiento de alcance, esfuerzo y actividades antes de preparar una cotización formal.",
        features: ["Servicios", "Actividades", "HH", "Exportación"]
      },
      {
        name: "Control de disponibilidad con agenda",
        status: "Herramienta ISM",
        description: "Organiza disponibilidad, horarios y reservas para reducir mensajes y cruces de agenda.",
        features: ["Agenda", "Disponibilidad", "Horarios", "Reservas"]
      }
    
    ]
  };
  const iconMarkup = (name) => `<i data-lucide="${name}" aria-hidden="true"></i>`;
  const renderGallery = (item) => {
    const [firstImage] = item.images;
    const renderMainImage = (image) => image.pending
      ? `<div class="ism-portfolio-image-placeholder" data-portfolio-main-placeholder>
          <i data-lucide="monitor" aria-hidden="true"></i>
          <strong>${image.label}</strong>
          <span>Espacio preparado para imagen real de interfaz</span>
       </div>`
      : `<img src="${image.src}" alt="${image.alt}" width="960" height="540" loading="lazy" decoding="async" data-portfolio-main-image>`;
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
  const renderDetail = (item) => `
    <div class="ism-portfolio-detail">
      ${renderGallery(item)}
      <div class="ism-portfolio-copy">
        <div class="ism-portfolio-copy-top">
          <span class="ism-portfolio-copy-type">${item.type}</span>
          <span class="ism-portfolio-copy-status">${item.status}</span>
        </div>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <div class="ism-portfolio-use-case"><strong>Puede ayudarte si:</strong> ${item.useCase}</div>
        <div class="ism-portfolio-stack">${item.stack}</div>
        <a class="ism-portfolio-detail-link" href="${item.link}" data-track-event="project_click"
          data-track-category="portfolio" data-track-label="${item.name}">
          Ver detalle <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  `;
  const renderWorkbench = (items, selectedIndex, selectorLabel) => {
    const selectedItem = items[selectedIndex];
    return `
      <div class="ism-portfolio-workbench${selectorLabel === "Casos de éxito" ? " is-tools" : ""}">
        <div class="ism-portfolio-selector">
          <span class="ism-portfolio-selector-label">${selectorLabel}</span>
          ${items.map((item, index) => `
            <button class="ism-portfolio-item-button${index === selectedIndex ? " is-active" : ""}" type="button"
              aria-pressed="${index === selectedIndex}" data-portfolio-item-index="${index}">
              <span class="ism-portfolio-item-icon">${iconMarkup(item.icon)}</span>
              <span class="ism-portfolio-item-copy">
                <strong>${item.name}</strong>
                <small>${item.label}</small>
              </span>
              <span class="ism-portfolio-item-status">${item.status}</span>
            </button>
          `).join("")}
        </div>
        ${renderDetail(selectedItem)}
      </div>
    `;
  };
  const renderDevelopment = () => `
    <div class="ism-portfolio-dev-grid">
      ${portfolioData.dev.map((project) => `
        <article class="ism-portfolio-dev-card">
          <span class="ism-portfolio-dev-badge">${project.status}</span>
          <h3>${project.name}</h3>
          <p>${project.description}</p>
          <ul class="ism-portfolio-dev-list" aria-label="Características confirmadas de ${project.name}">
            ${project.features.map((feature) => `<li>${feature}</li>`).join("")}
          </ul>
        </article>
      `).join("")}
    </div>
  `;
  const state = {
    tab: "clients",
    selected: { clients: 0 }
  };
  const syncLucide = () => {
    if (window.lucide?.createIcons) {
      window.lucide.createIcons();
    }
  };
  const updateGalleryImage = (item, imageIndex) => {
    if (!portfolioPanel) return;
    const image = item.images[imageIndex];
    const media = portfolioPanel.querySelector("[data-portfolio-main-media]");
    const caption = portfolioPanel.querySelector("[data-portfolio-media-caption]");
    if (!image || !media || !caption) return;
    media.classList.add("is-changing");
    window.setTimeout(() => {
      media.querySelector("[data-portfolio-main-image], [data-portfolio-main-placeholder]")?.remove();
      if (image.pending) {
        const placeholder = document.createElement("div");
        placeholder.className = "ism-portfolio-image-placeholder";
        placeholder.setAttribute("data-portfolio-main-placeholder", "");
        placeholder.innerHTML = `<i data-lucide="monitor" aria-hidden="true"></i><strong>${image.label}</strong><span>Espacio preparado para imagen real de interfaz</span>`;
        media.prepend(placeholder);
      } else {
        const nextImage = document.createElement("img");
        nextImage.src = image.src;
        nextImage.alt = image.alt;
        nextImage.width = 960;
        nextImage.height = 540;
        nextImage.loading = "lazy";
        nextImage.decoding = "async";
        nextImage.setAttribute("data-portfolio-main-image", "");
        media.prepend(nextImage);
      }
      caption.textContent = image.label;
      portfolioPanel.querySelectorAll("[data-portfolio-image-index]").forEach((button) => {
        const active = Number(button.dataset.portfolioImageIndex) === imageIndex;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
      });
      media.classList.remove("is-changing");
      syncLucide();
    }, 120);
  };
  const bindPanelInteractions = () => {
    if (!portfolioPanel) return;
    const items = portfolioData.clients;
    portfolioPanel.querySelectorAll("[data-portfolio-item-index]").forEach((button) => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.portfolioItemIndex);
        state.selected[state.tab] = index;
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
  const renderCurrentPanel = () => {
    if (!portfolioPanel) return;
    portfolioPanel.classList.remove("is-switching");
    void portfolioPanel.offsetWidth;
    portfolioPanel.classList.add("is-switching");
    if (state.tab === "clients") {
      portfolioPanel.innerHTML = renderWorkbench(portfolioData.clients, state.selected.clients, "Casos de éxito");
    } else {
      portfolioPanel.innerHTML = renderDevelopment();
    }
    const activeTab = portfolioTabs.find((tab) => tab.dataset.portfolioTab === state.tab);
    if (activeTab) portfolioPanel.setAttribute("aria-labelledby", activeTab.id);
    if (portfolioStatus) {
      if (state.tab === "dev") {
        portfolioStatus.textContent = "Mostrando herramientas complementarias de ISM Developer.";
      } else {
        const current = portfolioData.clients[state.selected.clients];
        portfolioStatus.textContent = `Mostrando ${current.name}.`;
      }
    }
    bindPanelInteractions();
    syncLucide();
  };
  portfolioTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      state.tab = tab.dataset.portfolioTab;
      portfolioTabs.forEach((item) => {
        const active = item === tab;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-selected", String(active));
        item.tabIndex = active ? 0 : -1;
      });
      renderCurrentPanel();
      if (window.trackEvent) {
        window.trackEvent("portfolio_tab_open", {
          event_category: "portfolio",
          event_label: tab.textContent.trim(),
          section: "proyectos"
        });
      }
    });
    tab.addEventListener("keydown", (event) => {
      let nextIndex = null;
      if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (index + 1) % portfolioTabs.length;
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (index - 1 + portfolioTabs.length) % portfolioTabs.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = portfolioTabs.length - 1;
      if (nextIndex === null) return;
      event.preventDefault();
      portfolioTabs[nextIndex].focus();
      portfolioTabs[nextIndex].click();
    });
  });
  renderCurrentPanel();
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
  const messageField = document.getElementById("contactMensaje");
  const productContext = document.getElementById("contactProductContext");
  const productContextTitle = document.getElementById("contactProductContextTitle");
  const productContextText = document.getElementById("contactProductContextText");

  const contactParams = new URLSearchParams(window.location.search);
  const requestedProductId = contactParams.get("producto");
  const requestedServiceId = contactParams.get("servicio");

  const productNames = {
    "ism-presencia-digital": "ISM Presencia Digital",
    "ism-stock-control": "ISM Stock Control",
    "ism-gestion-control": "ISM Gestión Control",
    "ism-boutique": "ISM Boutique"
  };

  const productPrompts = {
    "ism-presencia-digital": "Cuéntanos qué necesita comunicar, captar o automatizar tu presencia digital.",
    "ism-stock-control": "Cuéntanos cómo manejas hoy stock, bodegas, entregas o movimientos.",
    "ism-gestion-control": "Cuéntanos qué proceso interno necesitas ordenar, controlar o hacer trazable.",
    "ism-boutique": "Cuéntanos cómo manejas hoy productos, stock, ventas y clientes."
  };

  const productContextMessages = {
    "ism-presencia-digital": "Evaluaremos alcance, contenido, captación e integraciones necesarias para tu negocio.",
    "ism-stock-control": "Evaluaremos bodegas, movimientos, roles, trazabilidad y necesidades de operación.",
    "ism-gestion-control": "Evaluaremos procesos, responsables, estados, registros y módulos de gestión.",
    "ism-boutique": "Evaluaremos catálogo, stock, ventas, clientes y operación mobile first."
  };

  const serviceNames = {
    "desarrollo-implementacion": "Desarrollo e Implementación",
    "mantenimiento-evolucion": "Mantenimiento y Evolución",
    "monitoreo-observabilidad": "Monitoreo y Observabilidad",
    "respaldo-continuidad": "Respaldo y Continuidad Operacional",
    "ciberseguridad-proteccion": "Ciberseguridad y Protección Digital",
    "soporte-gestion": "Soporte y Gestión de Servicios"
  };

  if (requestedProductId && productNames[requestedProductId] && serviceSelect) {
    serviceSelect.value = productNames[requestedProductId];

    if (messageField && !messageField.value) {
      messageField.placeholder = productPrompts[requestedProductId];
    }

    if (productContext && productContextTitle && productContextText) {
      productContext.hidden = false;
      productContextTitle.textContent = productNames[requestedProductId];
      productContextText.textContent = productContextMessages[requestedProductId];
    }

    window.trackEvent?.("product_interest_prefilled", {
      event_category: "conversion",
      product_interest: requestedProductId,
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
      product_interest: requestedProductId || "",
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
