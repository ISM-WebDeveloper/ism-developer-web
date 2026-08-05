(function () {
    "use strict";

    var STORAGE_KEY = "ism_privacy_consent_v1";
    var CONSENT_VERSION = 1;
    var previousFocus = null;
    var modal = null;
    var banner = null;

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag() {
        window.dataLayer.push(arguments);
    };

    window.gtag("consent", "default", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        wait_for_update: 500
    });

    window.gtag("set", "ads_data_redaction", true);
    window.gtag("set", "url_passthrough", false);

    function safeParse(value) {
        try {
            return JSON.parse(value);
        } catch (error) {
            return null;
        }
    }

    function readConsent() {
        var stored = null;
        try {
            stored = safeParse(window.localStorage.getItem(STORAGE_KEY));
        } catch (error) {
            stored = null;
        }

        if (!stored || stored.version !== CONSENT_VERSION || typeof stored.analytics !== "boolean") {
            return null;
        }

        return stored;
    }

    function writeConsent(analyticsAllowed) {
        var consent = {
            version: CONSENT_VERSION,
            necessary: true,
            analytics: Boolean(analyticsAllowed),
            updatedAt: new Date().toISOString()
        };

        try {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
        } catch (error) {
            // El sitio sigue funcionando aunque el navegador bloquee localStorage.
        }

        return consent;
    }

    function clearAnalyticsCookies() {
        var names = document.cookie.split(";");
        var hostnameParts = window.location.hostname.split(".");
        var domainCandidates = [window.location.hostname];

        if (hostnameParts.length >= 2) {
            domainCandidates.push("." + hostnameParts.slice(-2).join("."));
        }

        names.forEach(function (cookieEntry) {
            var name = cookieEntry.split("=")[0].trim();
            if (name === "_ga" || name.indexOf("_ga_") === 0 || name === "_gid" || name === "_gat") {
                document.cookie = name + "=; Max-Age=0; path=/; SameSite=Lax";
                domainCandidates.forEach(function (domain) {
                    document.cookie = name + "=; Max-Age=0; path=/; domain=" + domain + "; SameSite=Lax";
                });
            }
        });
    }

    function dispatchConsentEvent(name, consent) {
        var event;
        try {
            event = new CustomEvent(name, { detail: consent });
        } catch (error) {
            event = document.createEvent("CustomEvent");
            event.initCustomEvent(name, false, false, consent);
        }
        document.dispatchEvent(event);
    }

    function applyConsent(consent, shouldDispatch) {
        var analyticsState = consent && consent.analytics ? "granted" : "denied";

        window.gtag("consent", "update", {
            analytics_storage: analyticsState,
            ad_storage: "denied",
            ad_user_data: "denied",
            ad_personalization: "denied"
        });

        if (analyticsState === "denied") {
            clearAnalyticsCookies();
        }

        document.documentElement.setAttribute("data-analytics-consent", analyticsState);

        if (shouldDispatch) {
            dispatchConsentEvent("ism:consent-change", consent);
        }
    }

    function getFocusableElements(container) {
        return Array.prototype.slice.call(container.querySelectorAll(
            'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )).filter(function (element) {
            return !element.hasAttribute("hidden") && element.offsetParent !== null;
        });
    }

    function closePreferences() {
        if (!modal || modal.hidden) return;
        modal.hidden = true;
        document.body.classList.remove("privacy-modal-open");
        if (previousFocus && typeof previousFocus.focus === "function") {
            previousFocus.focus();
        }
    }

    function openPreferences() {
        if (!modal) return;
        previousFocus = document.activeElement;
        var currentConsent = readConsent();
        var checkbox = modal.querySelector("#privacyAnalyticsToggle");
        checkbox.checked = Boolean(currentConsent && currentConsent.analytics);
        modal.hidden = false;
        document.body.classList.add("privacy-modal-open");
        window.setTimeout(function () {
            var focusable = getFocusableElements(modal);
            if (focusable.length) focusable[0].focus();
        }, 0);
    }

    function hideBanner() {
        if (banner) banner.hidden = true;
    }

    function saveChoice(analyticsAllowed) {
        var consent = writeConsent(analyticsAllowed);
        applyConsent(consent, true);
        hideBanner();
        closePreferences();
    }

    function createInterface() {
        var wrapper = document.createElement("div");
        wrapper.innerHTML = [
            '<section class="privacy-banner" id="privacyBanner" role="region" aria-labelledby="privacyBannerTitle" hidden>',
            '  <div class="privacy-banner-copy">',
            '    <span class="privacy-eyebrow">Privacidad</span>',
            '    <h2 id="privacyBannerTitle">Tú decides sobre las estadísticas</h2>',
            '    <p>Usamos almacenamiento esencial para recordar tu elección. Google Analytics solo se activa si aceptas las estadísticas.</p>',
            '    <a href="privacidad.html">Revisar política de privacidad</a>',
            '  </div>',
            '  <div class="privacy-banner-actions">',
            '    <button type="button" class="privacy-button privacy-button-ghost" data-privacy-reject>Solo esenciales</button>',
            '    <button type="button" class="privacy-button privacy-button-secondary" data-privacy-preferences>Preferencias</button>',
            '    <button type="button" class="privacy-button privacy-button-primary" data-privacy-accept>Aceptar estadísticas</button>',
            '  </div>',
            '</section>',
            '<div class="privacy-modal" id="privacyPreferencesModal" role="dialog" aria-modal="true" aria-labelledby="privacyModalTitle" hidden>',
            '  <div class="privacy-modal-backdrop" data-privacy-close></div>',
            '  <div class="privacy-modal-panel" role="document">',
            '    <div class="privacy-modal-head">',
            '      <div>',
            '        <span class="privacy-eyebrow">Centro de privacidad</span>',
            '        <h2 id="privacyModalTitle">Configura tu preferencia</h2>',
            '      </div>',
            '      <button type="button" class="privacy-modal-close" aria-label="Cerrar preferencias" data-privacy-close>×</button>',
            '    </div>',
            '    <div class="privacy-option privacy-option-required">',
            '      <div>',
            '        <strong>Almacenamiento esencial</strong>',
            '        <p>Permite recordar tu elección de privacidad y mantener funciones básicas del sitio.</p>',
            '      </div>',
            '      <span class="privacy-required-badge">Siempre activo</span>',
            '    </div>',
            '    <label class="privacy-option" for="privacyAnalyticsToggle">',
            '      <div>',
            '        <strong>Estadísticas de uso</strong>',
            '        <p>Activa Google Analytics para medir visitas e interacciones y mejorar el sitio. No usamos personalización publicitaria.</p>',
            '      </div>',
            '      <span class="privacy-switch">',
            '        <input id="privacyAnalyticsToggle" type="checkbox">',
            '        <span aria-hidden="true"></span>',
            '      </span>',
            '    </label>',
            '    <div class="privacy-modal-footer">',
            '      <a href="privacidad.html">Leer política completa</a>',
            '      <button type="button" class="privacy-button privacy-button-primary" data-privacy-save>Guardar preferencias</button>',
            '    </div>',
            '  </div>',
            '</div>'
        ].join("");

        while (wrapper.firstChild) {
            document.body.appendChild(wrapper.firstChild);
        }

        banner = document.getElementById("privacyBanner");
        modal = document.getElementById("privacyPreferencesModal");

        document.querySelectorAll("[data-privacy-settings], [data-privacy-preferences]").forEach(function (button) {
            button.addEventListener("click", openPreferences);
        });

        document.querySelectorAll("[data-privacy-close]").forEach(function (button) {
            button.addEventListener("click", closePreferences);
        });

        var rejectButton = document.querySelector("[data-privacy-reject]");
        var acceptButton = document.querySelector("[data-privacy-accept]");
        var saveButton = document.querySelector("[data-privacy-save]");

        if (rejectButton) rejectButton.addEventListener("click", function () { saveChoice(false); });
        if (acceptButton) acceptButton.addEventListener("click", function () { saveChoice(true); });
        if (saveButton) saveButton.addEventListener("click", function () {
            var checkbox = document.getElementById("privacyAnalyticsToggle");
            saveChoice(Boolean(checkbox && checkbox.checked));
        });

        document.addEventListener("keydown", function (event) {
            if (!modal || modal.hidden) return;

            if (event.key === "Escape" || event.keyCode === 27) {
                event.preventDefault();
                closePreferences();
                return;
            }

            if (event.key === "Tab" || event.keyCode === 9) {
                var focusable = getFocusableElements(modal);
                if (!focusable.length) return;
                var first = focusable[0];
                var last = focusable[focusable.length - 1];

                if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last.focus();
                } else if (!event.shiftKey && document.activeElement === last) {
                    event.preventDefault();
                    first.focus();
                }
            }
        });

        var storedConsent = readConsent();
        if (storedConsent) {
            applyConsent(storedConsent, false);
            hideBanner();
        } else {
            applyConsent({ analytics: false }, false);
            banner.hidden = false;
        }

        dispatchConsentEvent("ism:consent-ready", storedConsent || { analytics: false });
    }

    window.ISMPrivacy = {
        storageKey: STORAGE_KEY,
        getConsent: readConsent,
        hasAnalyticsConsent: function () {
            var consent = readConsent();
            return Boolean(consent && consent.analytics);
        },
        openPreferences: openPreferences,
        setAnalyticsConsent: function (allowed) {
            saveChoice(Boolean(allowed));
        }
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", createInterface);
    } else {
        createInterface();
    }
}());
