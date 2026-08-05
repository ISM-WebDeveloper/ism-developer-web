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
        return (!style || (style.display !== "none" && style.visibility !== "hidden")) && element.offsetParent !== null;
    }

    function getFocusable(container) {
        return toArray(container.querySelectorAll(
            'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )).filter(isVisible);
    }

    function enhanceIcons() {
        toArray(document.querySelectorAll("svg.lucide, i[data-lucide]")).forEach(function (icon) {
            icon.setAttribute("aria-hidden", "true");
            icon.setAttribute("focusable", "false");
        });
    }

    function enhanceSidebar() {
        var sidebar = document.getElementById("projectSidebar");
        var toggle = document.getElementById("sidebarToggle");
        var close = document.getElementById("sidebarClose");
        var backdrop = document.getElementById("sidebarBackdrop");
        if (!sidebar || !toggle) return;
        var lastFocus = null;

        function isMobile() {
            return window.innerWidth <= 820;
        }

        function isOpen() {
            return document.body.classList.contains("sidebar-open");
        }

        function syncState() {
            var open = isOpen();
            toggle.setAttribute("aria-expanded", String(open));
            toggle.setAttribute("aria-controls", "projectSidebar");
            var hiddenSidebar = isMobile() && !open;
            sidebar.setAttribute("aria-hidden", String(hiddenSidebar));
            if ("inert" in sidebar) sidebar.inert = hiddenSidebar;
            toArray(sidebar.querySelectorAll("a[href], button:not([disabled])")).forEach(function (control) {
                if (hiddenSidebar) {
                    if (!control.hasAttribute("data-a11y-tabindex")) {
                        control.setAttribute("data-a11y-tabindex", control.getAttribute("tabindex") || "");
                    }
                    control.setAttribute("tabindex", "-1");
                } else {
                    var previous = control.getAttribute("data-a11y-tabindex");
                    if (previous) control.setAttribute("tabindex", previous);
                    else control.removeAttribute("tabindex");
                    control.removeAttribute("data-a11y-tabindex");
                }
            });
            if (backdrop) backdrop.setAttribute("aria-hidden", String(!open));
            document.body.classList.toggle("portfolio-navigation-open", open && isMobile());

            toArray(sidebar.querySelectorAll(".nav-group")).forEach(function (group) {
                var items = group.querySelector(".nav-group-items");
                var expanded = group.classList.contains("expanded");
                if (!items) return;
                items.setAttribute("aria-hidden", String(!expanded));
                if ("inert" in items) items.inert = !expanded;
            });
        }

        toggle.addEventListener("click", function () {
            lastFocus = toggle;
            window.setTimeout(function () {
                syncState();
                if (isOpen() && isMobile()) {
                    var first = sidebar.querySelector(".sidebar-close, .project-nav button");
                    if (first) first.focus();
                }
            }, 0);
        });

        if (close) close.addEventListener("click", function () {
            window.setTimeout(function () {
                syncState();
                if (lastFocus) lastFocus.focus();
            }, 0);
        });

        if (backdrop) backdrop.addEventListener("click", function () {
            window.setTimeout(function () {
                syncState();
                if (lastFocus) lastFocus.focus();
            }, 0);
        });

        document.addEventListener("keydown", function (event) {
            if (!isOpen() || !isMobile()) return;
            if (event.key === "Escape" || event.keyCode === 27) {
                event.preventDefault();
                document.body.classList.remove("sidebar-open");
                syncState();
                toggle.focus();
                return;
            }
            if (event.key !== "Tab" && event.keyCode !== 9) return;
            var focusable = getFocusable(sidebar);
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

        if (window.MutationObserver) {
            new MutationObserver(syncState).observe(document.body, { attributes: true, attributeFilter: ["class"] });
            new MutationObserver(syncState).observe(sidebar, { subtree: true, attributes: true, attributeFilter: ["class"] });
        }
        window.addEventListener("resize", syncState);
        syncState();
    }

    function enhanceProjectNavigation() {
        var nav = document.getElementById("projectNav");
        var live = document.getElementById("portfolioProjectStatus");
        if (!nav) return;

        function sync() {
            toArray(nav.querySelectorAll(".nav-group-toggle")).forEach(function (toggle) {
                var group = toggle.closest(".nav-group");
                var expanded = Boolean(group && group.classList.contains("expanded"));
                toggle.setAttribute("aria-expanded", String(expanded));
            });

            var active = nav.querySelector(".project-nav-item.active");
            toArray(nav.querySelectorAll(".project-nav-item")).forEach(function (button) {
                var selected = button === active;
                if (selected) button.setAttribute("aria-current", "page");
                else button.removeAttribute("aria-current");
            });

            if (live && active) {
                var name = active.querySelector("strong");
                live.textContent = "Proyecto cargado: " + (name ? name.textContent : "proyecto");
            }
        }

        nav.addEventListener("click", function () { window.setTimeout(sync, 0); });
        if (window.MutationObserver) {
            new MutationObserver(sync).observe(nav, { subtree: true, childList: true, attributes: true, attributeFilter: ["class"] });
        }
        sync();
    }

    function enhanceCarousel() {
        var slider = document.getElementById("syncedSlider");
        var visualTrack = document.getElementById("visualTrack");
        var copyTrack = document.getElementById("copyTrack");
        var dots = document.getElementById("sliderDots");
        var current = document.getElementById("currentSlide");
        var total = document.getElementById("totalSlides");
        var progress = document.getElementById("progressLine");
        var status = document.getElementById("portfolioSlideStatus");
        if (!slider || !visualTrack || !copyTrack) return;

        slider.setAttribute("role", "region");
        slider.setAttribute("aria-label", "Recorrido visual del proyecto");
        slider.setAttribute("aria-describedby", "portfolioCarouselHelp portfolioSlideStatus");

        function syncSlides() {
            var currentIndex = Math.max(0, Number.parseInt(current ? current.textContent : "1", 10) - 1);
            var totalCount = Math.max(1, Number.parseInt(total ? total.textContent : "1", 10));
            var visualSlides = toArray(visualTrack.children);
            var copySlides = toArray(copyTrack.children);

            visualSlides.forEach(function (slide, index) {
                var active = index === currentIndex;
                slide.setAttribute("role", "group");
                slide.setAttribute("aria-roledescription", "diapositiva");
                slide.setAttribute("aria-label", (index + 1) + " de " + totalCount);
                slide.setAttribute("aria-hidden", String(!active));
                if ("inert" in slide) slide.inert = !active;
            });

            copySlides.forEach(function (slide, index) {
                var active = index === currentIndex;
                slide.setAttribute("aria-hidden", String(!active));
                if ("inert" in slide) slide.inert = !active;
            });

            toArray(dots ? dots.querySelectorAll("button") : []).forEach(function (button, index) {
                var active = index === currentIndex;
                button.setAttribute("aria-pressed", String(active));
                if (active) button.setAttribute("aria-current", "true");
                else button.removeAttribute("aria-current");
            });

            if (progress) {
                var progressContainer = progress.parentElement;
                if (progressContainer) {
                    progressContainer.setAttribute("role", "progressbar");
                    progressContainer.setAttribute("aria-label", "Avance del recorrido visual");
                    progressContainer.setAttribute("aria-valuemin", "1");
                    progressContainer.setAttribute("aria-valuemax", String(totalCount));
                    progressContainer.setAttribute("aria-valuenow", String(currentIndex + 1));
                    progressContainer.setAttribute("aria-valuetext", "Vista " + (currentIndex + 1) + " de " + totalCount);
                }
            }

            var activeCopy = copySlides[currentIndex];
            var heading = activeCopy ? activeCopy.querySelector("h3") : null;
            if (status) {
                status.textContent = "Vista " + (currentIndex + 1) + " de " + totalCount + (heading ? ": " + heading.textContent : "");
            }
        }

        slider.addEventListener("keydown", function (event) {
            if (event.key === "Home") {
                event.preventDefault();
                var firstDot = dots && dots.querySelector("button");
                if (firstDot) firstDot.click();
            }
            if (event.key === "End") {
                event.preventDefault();
                var allDots = dots ? dots.querySelectorAll("button") : [];
                if (allDots.length) allDots[allDots.length - 1].click();
            }
        });

        [document.getElementById("slidePrev"), document.getElementById("slideNext"), dots].forEach(function (element) {
            if (element) element.addEventListener("click", function () { window.setTimeout(syncSlides, 0); });
        });

        if (window.MutationObserver) {
            new MutationObserver(syncSlides).observe(visualTrack, { childList: true });
            new MutationObserver(syncSlides).observe(copyTrack, { childList: true });
            if (current) new MutationObserver(syncSlides).observe(current, { childList: true, characterData: true, subtree: true });
        }
        syncSlides();
    }

    function enhanceExternalLink() {
        var link = document.getElementById("externalProjectLink");
        var title = document.getElementById("projectTitle");
        if (!link || !title) return;

        function sync() {
            link.setAttribute("aria-label", "Visitar " + title.textContent + "; se abre en una pestaña nueva");
        }

        if (window.MutationObserver) {
            new MutationObserver(sync).observe(title, { childList: true, characterData: true, subtree: true });
        }
        sync();
    }

    function enhancePrivacy() {
        var checkbox = document.getElementById("privacyAnalyticsToggle");
        if (checkbox) checkbox.setAttribute("role", "switch");
        var backdrop = document.querySelector(".privacy-modal-backdrop");
        if (backdrop) backdrop.setAttribute("aria-hidden", "true");
    }

    function initialize() {
        enhanceIcons();
        enhanceSidebar();
        enhanceProjectNavigation();
        enhanceCarousel();
        enhanceExternalLink();
        enhancePrivacy();
        window.setTimeout(enhanceIcons, 120);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initialize);
    } else {
        initialize();
    }
}(window, document));
