(function (window, document) {
    "use strict";

    var raf = window.requestAnimationFrame || function (callback) {
        return window.setTimeout(callback, 16);
    };

    function toArray(collection) {
        return Array.prototype.slice.call(collection || []);
    }

    function isVisible(element) {
        if (!element || element.hidden) return false;
        var style = window.getComputedStyle ? window.getComputedStyle(element) : null;
        return (!style || (style.visibility !== "hidden" && style.display !== "none")) && element.offsetParent !== null;
    }

    function getFocusable(container) {
        if (!container) return [];
        return toArray(container.querySelectorAll(
            'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), dialog[open], [tabindex]:not([tabindex="-1"])'
        )).filter(isVisible);
    }

    function focusWithoutScroll(element) {
        if (!element || typeof element.focus !== "function") return;
        if (!element.hasAttribute("tabindex") && !/^(A|BUTTON|INPUT|SELECT|TEXTAREA)$/.test(element.tagName)) {
            element.setAttribute("tabindex", "-1");
        }
        try {
            element.focus({ preventScroll: true });
        } catch (error) {
            element.focus();
        }
    }

    function enhanceLucideIcons() {
        toArray(document.querySelectorAll("svg.lucide, i[data-lucide]")).forEach(function (icon) {
            icon.setAttribute("aria-hidden", "true");
            icon.setAttribute("focusable", "false");
        });
    }

    function enhanceInternalNavigation() {
        var navLinks = toArray(document.querySelectorAll('.premium-navbar a[href^="#"]'));
        var sections = toArray(document.querySelectorAll("header[id], main > section[id]"));
        var ticking = false;

        toArray(document.querySelectorAll('a[href^="#"]')).forEach(function (link) {
            link.addEventListener("click", function () {
                var href = link.getAttribute("href");
                if (!href || href === "#") return;
                var target = document.getElementById(decodeURIComponent(href.slice(1)));
                if (!target) return;
                window.setTimeout(function () {
                    focusWithoutScroll(target);
                }, 720);
            });
        });

        function updateCurrentSection() {
            ticking = false;
            if (!navLinks.length || !sections.length) return;

            var offset = (window.innerHeight || 800) * 0.34;
            var current = sections[0];
            sections.forEach(function (section) {
                if (section.getBoundingClientRect().top <= offset) current = section;
            });

            navLinks.forEach(function (link) {
                var isCurrent = link.getAttribute("href") === "#" + current.id;
                if (isCurrent) link.setAttribute("aria-current", "location");
                else link.removeAttribute("aria-current");
            });
        }

        function scheduleCurrentSection() {
            if (ticking) return;
            ticking = true;
            raf(updateCurrentSection);
        }

        window.addEventListener("scroll", scheduleCurrentSection, { passive: true });
        window.addEventListener("resize", scheduleCurrentSection);
        window.addEventListener("pageshow", scheduleCurrentSection);
        scheduleCurrentSection();

        if (window.location.hash) {
            var requested = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
            if (requested) window.setTimeout(function () { focusWithoutScroll(requested); }, 0);
        }
    }

    function enhanceMobileNavigation() {
        var navbar = document.getElementById("navbar");
        var toggle = document.getElementById("navToggle");
        var menu = document.getElementById("primaryNav");
        if (!navbar || !toggle || !menu) return;

        function isMobile() {
            return window.innerWidth <= 1024;
        }

        function isOpen() {
            return navbar.classList.contains("menu-open");
        }

        function syncNavigationState() {
            var open = isOpen();
            toggle.setAttribute("aria-expanded", String(open));
            if (isMobile()) {
                menu.setAttribute("aria-hidden", String(!open));
                if ("inert" in menu) menu.inert = !open;
                toArray(menu.querySelectorAll("a[href]")).forEach(function (link) {
                    if (!open) {
                        if (!link.hasAttribute("data-a11y-tabindex")) {
                            link.setAttribute("data-a11y-tabindex", link.getAttribute("tabindex") || "");
                        }
                        link.setAttribute("tabindex", "-1");
                    } else {
                        var previous = link.getAttribute("data-a11y-tabindex");
                        if (previous) link.setAttribute("tabindex", previous);
                        else link.removeAttribute("tabindex");
                        link.removeAttribute("data-a11y-tabindex");
                    }
                });
            } else {
                menu.removeAttribute("aria-hidden");
                if ("inert" in menu) menu.inert = false;
                toArray(menu.querySelectorAll("a[href]")).forEach(function (link) {
                    var previous = link.getAttribute("data-a11y-tabindex");
                    if (previous) link.setAttribute("tabindex", previous);
                    else link.removeAttribute("tabindex");
                    link.removeAttribute("data-a11y-tabindex");
                });
            }
            document.body.classList.toggle("mobile-navigation-open", open && isMobile());
        }

        toggle.addEventListener("click", function () {
            window.setTimeout(function () {
                syncNavigationState();
                if (isOpen() && isMobile()) {
                    var firstLink = menu.querySelector("a[href]");
                    if (firstLink) firstLink.focus();
                }
            }, 0);
        });

        document.addEventListener("keydown", function (event) {
            if (!isOpen() || !isMobile()) return;

            if (event.key === "Escape" || event.keyCode === 27) {
                window.setTimeout(function () {
                    syncNavigationState();
                    toggle.focus();
                }, 0);
                return;
            }

            if (event.key !== "Tab" && event.keyCode !== 9) return;
            var focusable = getFocusable(navbar);
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
        }, true);

        toArray(menu.querySelectorAll("a[href]")).forEach(function (link) {
            link.addEventListener("click", function () {
                window.setTimeout(syncNavigationState, 0);
            });
        });

        window.addEventListener("resize", syncNavigationState);
        syncNavigationState();
    }

    function enhanceServiceDialog() {
        var dialog = document.getElementById("serviceConfiguratorDialog");
        if (!dialog) return;
        var cancel = dialog.querySelector("[data-configurator-cancel]");

        function focusDialogStart() {
            if (dialog.open && cancel) window.setTimeout(function () { cancel.focus(); }, 0);
        }

        if (window.MutationObserver) {
            new MutationObserver(focusDialogStart).observe(dialog, { attributes: true, attributeFilter: ["open"] });
        }

        toArray(document.querySelectorAll("[data-configurator-link]")).forEach(function (link) {
            link.addEventListener("click", function () {
                window.setTimeout(focusDialogStart, 0);
            });
        });
    }

    function enhanceVault() {
        var section = document.querySelector(".project-vault-section");
        if (!section) return;

        var tabs = toArray(section.querySelectorAll('[role="tab"]'));
        var panel = document.getElementById("vaultPanel");
        var status = document.getElementById("vaultSelectionStatus");
        var nodes = toArray(section.querySelectorAll(".vault-node"));
        var syncPending = false;

        function syncVault() {
            syncPending = false;
            var activeTab = section.querySelector(".vault-tab.active") || tabs[0];
            tabs.forEach(function (tab) {
                var selected = tab === activeTab;
                tab.setAttribute("aria-selected", String(selected));
                tab.setAttribute("tabindex", selected ? "0" : "-1");
            });
            if (panel && activeTab) panel.setAttribute("aria-labelledby", activeTab.id);

            nodes.forEach(function (node) {
                var hidden = node.classList.contains("is-hidden");
                node.hidden = hidden;
                node.setAttribute("aria-hidden", String(hidden));
                node.tabIndex = hidden ? -1 : 0;
                if ("inert" in node) node.inert = hidden;
                node.setAttribute("aria-pressed", String(!hidden && node.classList.contains("active")));
            });

            toArray(section.querySelectorAll(".vault-index-button")).forEach(function (button) {
                button.setAttribute("aria-pressed", String(button.classList.contains("active")));
            });

            var activeNode = section.querySelector(".vault-node.active:not(.is-hidden)");
            if (status && activeNode) {
                status.textContent = "Proyecto seleccionado: " + (activeNode.dataset.name || "proyecto");
            }
        }

        function scheduleSync() {
            if (syncPending) return;
            syncPending = true;
            raf(syncVault);
        }

        tabs.forEach(function (tab, index) {
            tab.addEventListener("click", scheduleSync);
            tab.addEventListener("keydown", function (event) {
                var nextIndex = null;
                if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (index + 1) % tabs.length;
                if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (index - 1 + tabs.length) % tabs.length;
                if (event.key === "Home") nextIndex = 0;
                if (event.key === "End") nextIndex = tabs.length - 1;
                if (nextIndex === null) return;
                event.preventDefault();
                tabs[nextIndex].focus();
                tabs[nextIndex].click();
            });
        });

        nodes.forEach(function (node) {
            node.addEventListener("click", scheduleSync);
            node.addEventListener("focus", scheduleSync);
        });

        if (window.MutationObserver) {
            new MutationObserver(scheduleSync).observe(section, {
                subtree: true,
                childList: true,
                attributes: true,
                attributeFilter: ["class"]
            });
        }

        scheduleSync();
    }

    function enhanceFaq() {
        var questions = toArray(document.querySelectorAll(".faq-question"));
        if (!questions.length) return;

        function syncFaq() {
            questions.forEach(function (question) {
                var answerId = question.getAttribute("aria-controls");
                var answer = answerId ? document.getElementById(answerId) : null;
                if (!answer) return;
                var expanded = question.getAttribute("aria-expanded") === "true";
                answer.setAttribute("aria-hidden", String(!expanded));
                if ("inert" in answer) answer.inert = !expanded;
            });
        }

        questions.forEach(function (question, index) {
            question.addEventListener("click", function () { window.setTimeout(syncFaq, 0); });
            question.addEventListener("keydown", function (event) {
                var targetIndex = null;
                if (event.key === "ArrowDown") targetIndex = (index + 1) % questions.length;
                if (event.key === "ArrowUp") targetIndex = (index - 1 + questions.length) % questions.length;
                if (event.key === "Home") targetIndex = 0;
                if (event.key === "End") targetIndex = questions.length - 1;
                if (targetIndex === null) return;
                event.preventDefault();
                questions[targetIndex].focus();
            });
        });

        syncFaq();
    }

    function enhanceContactForm() {
        var form = document.getElementById("contactForm");
        if (!form) return;
        var status = document.getElementById("contactFormStatus");
        var fields = toArray(form.querySelectorAll("input, select, textarea"));

        fields.forEach(function (field) {
            field.addEventListener("invalid", function () {
                field.setAttribute("aria-invalid", "true");
                if (status) status.textContent = "Revisa los campos obligatorios antes de continuar.";
            });
            field.addEventListener("input", function () {
                if (field.checkValidity()) field.removeAttribute("aria-invalid");
            });
            field.addEventListener("change", function () {
                if (field.checkValidity()) field.removeAttribute("aria-invalid");
            });
        });

        form.addEventListener("submit", function () {
            fields.forEach(function (field) { field.removeAttribute("aria-invalid"); });
            if (status) status.textContent = "Solicitud preparada. Se abrirá WhatsApp en una pestaña nueva.";
        });
    }

    function enhancePrivacyInterface() {
        var banner = document.getElementById("privacyBanner");
        var modal = document.getElementById("privacyPreferencesModal");
        if (banner) {
            var copy = banner.querySelector(".privacy-banner-copy p");
            if (copy && !copy.id) copy.id = "privacyBannerDescription";
            if (copy) banner.setAttribute("aria-describedby", copy.id);
        }
        if (modal) {
            var modalText = modal.querySelector(".privacy-option p");
            if (modalText && !modalText.id) modalText.id = "privacyModalDescription";
            if (modalText) modal.setAttribute("aria-describedby", modalText.id);
            var backdrop = modal.querySelector(".privacy-modal-backdrop");
            if (backdrop) backdrop.setAttribute("aria-hidden", "true");
            var checkbox = modal.querySelector("#privacyAnalyticsToggle");
            if (checkbox) checkbox.setAttribute("role", "switch");
        }
    }

    function initialize() {
        enhanceLucideIcons();
        enhanceInternalNavigation();
        enhanceMobileNavigation();
        enhanceServiceDialog();
        enhanceVault();
        enhanceFaq();
        enhanceContactForm();
        enhancePrivacyInterface();

        window.setTimeout(enhanceLucideIcons, 120);
        if (window.MutationObserver) {
            var iconPending = false;
            new MutationObserver(function (mutations) {
                var shouldRefresh = mutations.some(function (mutation) {
                    return toArray(mutation.addedNodes).some(function (node) {
                        if (node.nodeType !== 1) return false;
                        var isIcon = typeof node.matches === "function" && node.matches("svg.lucide, i[data-lucide]");
                        var containsIcon = typeof node.querySelector === "function" && node.querySelector("svg.lucide, i[data-lucide]");
                        return Boolean(isIcon || containsIcon);
                    });
                });
                if (!shouldRefresh || iconPending) return;
                iconPending = true;
                raf(function () {
                    iconPending = false;
                    enhanceLucideIcons();
                });
            }).observe(document.body, { childList: true, subtree: true });
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initialize);
    } else {
        initialize();
    }
}(window, document));
