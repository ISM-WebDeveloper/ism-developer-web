(function (window, document) {
    "use strict";

    var root = document.documentElement;
    var compactMotion = false;
    var reducedMotion = false;
    var pending = [];
    var sections = [];
    var ticking = false;
    var requestFrame = window.requestAnimationFrame || function (callback) {
        return window.setTimeout(callback, 16);
    };

    try {
        compactMotion = window.matchMedia && window.matchMedia("(max-width: 700px)").matches;
        reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch (error) {
        compactMotion = false;
        reducedMotion = false;
    }

    function hasClass(element, className) {
        return (" " + element.className + " ").indexOf(" " + className + " ") !== -1;
    }

    function addClass(element, className) {
        if (!element || hasClass(element, className)) return;
        element.className = element.className ? element.className + " " + className : className;
    }

    function removeClass(element, className) {
        if (!element) return;
        element.className = (" " + element.className + " ")
            .replace(" " + className + " ", " ")
            .replace(/^\s+|\s+$/g, "");
    }

    function toArray(nodeList) {
        var result = [];
        var index;
        for (index = 0; index < nodeList.length; index += 1) {
            result.push(nodeList[index]);
        }
        return result;
    }

    function setReveal(element, variant, delay) {
        if (!element) return;

        addClass(element, "reveal");
        if (!element.getAttribute("data-reveal")) {
            element.setAttribute("data-reveal", variant || "fade-up");
        }

        element.style.transitionDelay = Math.max(0, Math.round(delay || 0)) + "ms";
    }

    function revealAll(selector, variant, delay) {
        var elements = document.querySelectorAll(selector);
        var index;
        for (index = 0; index < elements.length; index += 1) {
            setReveal(elements[index], variant, delay);
        }
    }

    function revealGroup(groupSelector, itemSelector, variants, step, maxDelay) {
        var groups = document.querySelectorAll(groupSelector);
        var groupIndex;
        var motionFactor = compactMotion ? 0.78 : 1;

        for (groupIndex = 0; groupIndex < groups.length; groupIndex += 1) {
            var items = groups[groupIndex].querySelectorAll(itemSelector);
            var itemIndex;

            for (itemIndex = 0; itemIndex < items.length; itemIndex += 1) {
                var variant = variants[itemIndex % variants.length];
                var delay = Math.min(itemIndex * step * motionFactor, maxDelay * motionFactor);
                setReveal(items[itemIndex], variant, delay);
            }
        }
    }


    function revealDirectChildren(groupSelector, variants, step, maxDelay) {
        var groups = document.querySelectorAll(groupSelector);
        var groupIndex;
        var motionFactor = compactMotion ? 0.78 : 1;

        for (groupIndex = 0; groupIndex < groups.length; groupIndex += 1) {
            var items = groups[groupIndex].children;
            var itemIndex;

            for (itemIndex = 0; itemIndex < items.length; itemIndex += 1) {
                var variant = variants[itemIndex % variants.length];
                var delay = Math.min(itemIndex * step * motionFactor, maxDelay * motionFactor);
                setReveal(items[itemIndex], variant, delay);
            }
        }
    }

    function prepareRevealElements() {
        revealAll(".section-title", "fade-up", 0);
        revealAll(".about-visual", "clip-left", 0);
        revealAll(".about-content", "fade-right", compactMotion ? 90 : 170);

        revealGroup(".service-showcase-grid", ".service-showcase-card", ["card-rise", "soft-zoom"], 125, 650);
        revealAll(".service-showcase-note", "fade-up", compactMotion ? 100 : 220);

        revealGroup(".products-section .product-grid", ".product-card", ["card-rise", "soft-zoom"], 135, 620);
        revealGroup(".maturity-grid", ".maturity-card-premium", ["clip-up", "soft-zoom"], 145, 650);
        revealAll(".maturity-note", "fade-up", compactMotion ? 100 : 220);

        revealGroup(".process-map", ".process-step", ["fade-left", "card-rise", "fade-right"], 115, 580);

        revealAll(".tools-panel", "soft-zoom", 0);
        revealGroup(".tools-grid", ".tool-card", ["pop"], 70, 700);
        revealAll(".tools-bottom-mark", "fade-up", compactMotion ? 80 : 180);

        revealAll(".dashboard-mockup", "clip-up", 0);
        revealAll(".vault-shell", "soft-zoom", 0);

        var faqColumns = document.querySelectorAll(".faq-column");
        if (faqColumns.length > 0) setReveal(faqColumns[0], "fade-left", 0);
        if (faqColumns.length > 1) setReveal(faqColumns[faqColumns.length - 1], "fade-right", compactMotion ? 80 : 160);
        revealGroup(".faq-column", ".faq-item", ["fade-up"], 90, 360);

        revealAll(".contact-intro", "fade-left", 0);
        revealAll(".contact-form", "fade-right", compactMotion ? 85 : 170);
        revealGroup(".contact-points", "div", ["fade-up"], 110, 360);
        revealDirectChildren(".footer-grid", ["fade-up", "soft-zoom"], 120, 480);
        revealAll(".footer-bottom", "fade-up", compactMotion ? 75 : 160);

        pending = toArray(document.querySelectorAll(".reveal"));
        sections = toArray(document.querySelectorAll("main > section, footer"));
    }

    function activateReveal(element) {
        addClass(element, "is-revealed");
        element.removeAttribute("aria-hidden");
    }

    function updateSections(viewportHeight) {
        var index;
        var topLimit = viewportHeight * 0.18;
        var bottomLimit = viewportHeight * 0.82;

        for (index = 0; index < sections.length; index += 1) {
            var rect = sections[index].getBoundingClientRect();
            var inView = rect.bottom > topLimit && rect.top < bottomLimit;
            if (inView) addClass(sections[index], "is-in-view");
            else removeClass(sections[index], "is-in-view");
        }
    }

    function revealVisibleElements() {
        var viewportHeight = window.innerHeight || root.clientHeight || 800;
        var entryLine = viewportHeight * (compactMotion ? 0.88 : 0.78);
        var nextPending = [];
        var index;

        ticking = false;

        for (index = 0; index < pending.length; index += 1) {
            var element = pending[index];
            var rect = element.getBoundingClientRect();
            var isInsideViewport = rect.top <= entryLine && rect.bottom >= 0;

            if (isInsideViewport) activateReveal(element);
            else nextPending.push(element);
        }

        pending = nextPending;
        updateSections(viewportHeight);
    }

    function scheduleRevealCheck() {
        if (ticking) return;
        ticking = true;
        requestFrame(revealVisibleElements);
    }

    function initialize() {
        prepareRevealElements();
        addClass(root, "motion-ready");
        if (reducedMotion) addClass(root, "motion-reduced");
        root.setAttribute("data-motion-engine", "compat-scroll");

        window.addEventListener("scroll", scheduleRevealCheck, false);
        window.addEventListener("resize", scheduleRevealCheck, false);
        window.addEventListener("orientationchange", scheduleRevealCheck, false);
        window.addEventListener("pageshow", scheduleRevealCheck, false);
        window.addEventListener("hashchange", scheduleRevealCheck, false);

        requestFrame(function () {
            requestFrame(scheduleRevealCheck);
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initialize, false);
    } else {
        initialize();
    }
}(window, document));
