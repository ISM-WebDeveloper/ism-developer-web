(function () {
  "use strict";
  var GA_MEASUREMENT_ID = "G-B1FE9EK441";
  var analyticsLoaded = false;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };
  function analyticsAllowed() {
    return Boolean(window.ISMPrivacy && window.ISMPrivacy.hasAnalyticsConsent());
  }
  function loadAnalytics() {
    if (analyticsLoaded || !analyticsAllowed()) return;
    analyticsLoaded = true;
    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      cookie_flags: "SameSite=Lax;Secure"
    });
    if (!document.querySelector('script[data-ism-analytics="true"]')) {
      var analyticsScript = document.createElement("script");
      analyticsScript.async = true;
      analyticsScript.dataset.ismAnalytics = "true";
      analyticsScript.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(GA_MEASUREMENT_ID);
      document.head.appendChild(analyticsScript);
    }
  }
  function handleConsent(event) {
    var consent = event && event.detail;
    if (consent && consent.analytics) {
      loadAnalytics();
    }
  }
  document.addEventListener("ism:consent-ready", handleConsent);
  document.addEventListener("ism:consent-change", handleConsent);
  if (analyticsAllowed()) {
    loadAnalytics();
  }
  window.trackEvent = function trackEvent(eventName, params) {
    if (!eventName || !analyticsLoaded || !analyticsAllowed()) return;
    var eventParams = params || {};
    eventParams.page_location = window.location.href;
    eventParams.page_path = window.location.pathname;
    window.gtag("event", eventName, eventParams);
  };
  function getTrackingLabel(element) {
    var visibleText = element.innerText ? element.innerText.replace(/\s+/g, " ").trim() : "";
    return element.dataset.trackLabel
      || visibleText
      || element.getAttribute("aria-label")
      || element.getAttribute("title")
      || "Sin etiqueta";
  }
  function getTrackingSection(element) {
    var explicitSection = element.dataset.trackSection;
    if (explicitSection) return explicitSection;
    var section = element.closest("section, header, footer, aside");
    return section ? (section.id || section.classList[0] || "general") : "general";
  }
  document.addEventListener("click", function (event) {
    if (!analyticsLoaded || !analyticsAllowed()) return;
    var element = event.target.closest("a, button");
    if (!element) return;
    var isAnchor = element.tagName && element.tagName.toLowerCase() === "a";
    var linkUrl = isAnchor ? element.href : undefined;
    var commonParams = {
      event_category: element.dataset.trackCategory || "engagement",
      event_label: getTrackingLabel(element),
      section: getTrackingSection(element)
    };
    if (element.dataset.trackEvent) {
      window.trackEvent(element.dataset.trackEvent, Object.assign({}, commonParams, {
        destination: element.dataset.trackDestination || linkUrl,
        service_id: element.dataset.serviceId,
        project_id: element.dataset.projectId
      }));
      return;
    }
    if (linkUrl && /(?:wa\.me|whatsapp\.com|api\.whatsapp\.com)/i.test(linkUrl)) {
      window.trackEvent("whatsapp_click", Object.assign({}, commonParams, {
        event_category: "conversion",
        link_url: linkUrl
      }));
      return;
    }
    if (isAnchor && new URL(element.href, window.location.href).hash === "#contacto") {
      window.trackEvent("cta_click", Object.assign({}, commonParams, {
        event_category: "conversion",
        destination: "contacto",
        link_url: linkUrl
      }));
      return;
    }
    if (linkUrl && linkUrl.indexOf("mailto:") === 0) {
      window.trackEvent("email_click", Object.assign({}, commonParams, {
        event_category: "contact",
        link_url: linkUrl
      }));
      return;
    }
    if (linkUrl && linkUrl.indexOf("tel:") === 0) {
      window.trackEvent("phone_click", Object.assign({}, commonParams, {
        event_category: "contact",
        link_url: linkUrl
      }));
    }
  });
}());
