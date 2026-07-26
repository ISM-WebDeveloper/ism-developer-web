const GA_MEASUREMENT_ID = "G-B1FE9EK441";

window.dataLayer = window.dataLayer || [];
window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
};

window.gtag("js", new Date());
window.gtag("config", GA_MEASUREMENT_ID);

if (!document.querySelector(`script[src*="${GA_MEASUREMENT_ID}"]`)) {
    const analyticsScript = document.createElement("script");
    analyticsScript.async = true;
    analyticsScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(analyticsScript);
}

window.trackEvent = function trackEvent(eventName, params = {}) {
    if (!eventName || typeof window.gtag !== "function") return;

    window.gtag("event", eventName, {
        page_location: window.location.href,
        page_path: window.location.pathname,
        ...params
    });
};

const getTrackingLabel = (element) => {
    const visibleText = element.innerText?.replace(/\s+/g, " ").trim();
    return element.dataset.trackLabel
        || visibleText
        || element.getAttribute("aria-label")
        || element.getAttribute("title")
        || "Sin etiqueta";
};

const getTrackingSection = (element) => {
    const explicitSection = element.dataset.trackSection;
    if (explicitSection) return explicitSection;

    const section = element.closest("section, header, footer, aside");
    return section?.id || section?.classList?.[0] || "general";
};

document.addEventListener("click", (event) => {
    const element = event.target.closest("a, button");
    if (!element) return;

    const linkUrl = element instanceof HTMLAnchorElement ? element.href : undefined;
    const commonParams = {
        event_category: element.dataset.trackCategory || "engagement",
        event_label: getTrackingLabel(element),
        section: getTrackingSection(element)
    };

    if (element.dataset.trackEvent) {
        window.trackEvent(element.dataset.trackEvent, {
            ...commonParams,
            destination: element.dataset.trackDestination || linkUrl,
            service_id: element.dataset.serviceId,
            project_id: element.dataset.projectId
        });
        return;
    }

    if (linkUrl && /(?:wa\.me|whatsapp\.com|api\.whatsapp\.com)/i.test(linkUrl)) {
        window.trackEvent("whatsapp_click", {
            ...commonParams,
            event_category: "conversion",
            link_url: linkUrl
        });
        return;
    }

    if (element instanceof HTMLAnchorElement && new URL(element.href, window.location.href).hash === "#contacto") {
        window.trackEvent("cta_click", {
            ...commonParams,
            event_category: "conversion",
            destination: "contacto",
            link_url: linkUrl
        });
        return;
    }

    if (linkUrl?.startsWith("mailto:")) {
        window.trackEvent("email_click", {
            ...commonParams,
            event_category: "contact",
            link_url: linkUrl
        });
        return;
    }

    if (linkUrl?.startsWith("tel:")) {
        window.trackEvent("phone_click", {
            ...commonParams,
            event_category: "contact",
            link_url: linkUrl
        });
    }
});
