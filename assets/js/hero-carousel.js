(() => {
    const carousel = document.querySelector("[data-hero-carousel]");
    if (!carousel || carousel.hasAttribute("data-hero-ready")) return;

    const slides = [...carousel.querySelectorAll("[data-hero-slide]")];
    const controls = carousel.querySelector("[data-hero-controls]");
    if (slides.length < 2 || !controls) return;

    const rotation = controls.querySelector("[data-hero-rotation]");
    const dotGroup = controls.querySelector("[data-hero-dots]");
    const status = controls.querySelector("[data-hero-status]");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const motionMode = new URLSearchParams(window.location.search).get("motion");
    const pictures = new WeakMap();
    const readingTime = 5000;
    const layers = slides.flatMap(slide => [slide, ...slide.children]);
    let current = 0;
    let timer;
    let rotationDueAt = 0;
    let fadeEndsAt = 0;
    let request = 0;
    let paused = shouldReduceMotion();
    let hold = null;
    let inView = true;

    function prepare(slide) {
        const picture = slide.querySelector("[data-hero-image]");
        if (!picture) return;
        if (!pictures.has(picture)) {
            picture.src = picture.dataset.heroImage;
            // Keep the dark background and usable copy if the image cannot load.
            pictures.set(picture, picture.decode().catch(() => picture.remove()));
        }
        return pictures.get(picture);
    }

    function shouldReduceMotion() {
        return motionMode === "reduced" || (motionMode !== "full" && reducedMotion.matches);
    }

    function canRotate() {
        return !paused && !hold && !document.hidden && inView &&
            !slides[current].contains(document.activeElement);
    }

    function schedule(remaining) {
        window.clearTimeout(timer);
        rotationDueAt = 0;
        if (!canRotate()) return;
        const now = performance.now();
        const delay = remaining ?? (Math.max(0, fadeEndsAt - now) + readingTime);
        rotationDueAt = now + delay;
        timer = window.setTimeout(() => {
            rotationDueAt = 0;
            show(current + 1);
        }, delay);
    }

    function update() {
        slides.forEach((slide, index) => {
            const active = index === current;
            slide.inert = !active;
            if (active) slide.removeAttribute("aria-hidden");
            else slide.setAttribute("aria-hidden", "true");

            if (active) dots[index].setAttribute("aria-current", "true");
            else dots[index].removeAttribute("aria-current");
        });
    }

    async function show(index, trigger) {
        const next = (index + slides.length) % slides.length;
        const latest = ++request;
        window.clearTimeout(timer);
        await prepare(slides[next]);
        if (latest !== request) return;
        if (!trigger && !canRotate()) {
            schedule();
            return;
        }

        if (next !== current && slides[current].contains(document.activeElement)) {
            (trigger || dots[next]).focus({ preventScroll: true });
        }
        if (next !== current) {
            const duration = window.getComputedStyle(carousel).getPropertyValue("--hero-fade-duration").trim();
            const durationMs = (Number.parseFloat(duration) || 0) * (duration.endsWith("ms") ? 1 : 1000);
            fadeEndsAt = performance.now() + durationMs;
        }
        current = next;
        update();
        if (trigger) status.textContent = `Diapositiva ${next + 1} de ${slides.length}. ${titles[next]}`;
        if (canRotate()) prepare(slides[(current + 1) % slides.length]);
        schedule();
    }

    function syncRotation() {
        const reduce = shouldReduceMotion();
        if (reduce) fadeEndsAt = 0;
        carousel.toggleAttribute("data-hero-reduced-motion", reduce);
        rotation.toggleAttribute("data-paused", paused);
        rotation.setAttribute("aria-label", paused ? "Reanudar rotación automática" : "Pausar rotación automática");
        schedule();
    }

    const titles = slides.map(slide => slide.querySelector("h1, h2").textContent.trim().replace(/\s+/g, " "));
    const dots = titles.map((title, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.setAttribute("aria-label", `Diapositiva ${index + 1}: ${title}`);
        button.addEventListener("click", () => show(index, button));
        dotGroup.append(button);
        return button;
    });

    controls.addEventListener("keydown", event => {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
        event.preventDefault();
        show(current + (event.key === "ArrowRight" ? 1 : -1), event.target);
    });
    rotation.addEventListener("click", () => {
        paused = !paused;
        syncRotation();
    });
    carousel.addEventListener("pointerdown", event => {
        if (event.button !== 0 || hold) return;
        const now = performance.now();
        const transitions = layers.flatMap(layer => layer.getAnimations?.() ?? []).filter(animation =>
            ["opacity", "background-color", "visibility"].includes(animation.transitionProperty) &&
            animation.playState === "running");
        hold = {
            pointerId: event.pointerId,
            startedAt: now,
            remaining: rotationDueAt ? Math.max(0, rotationDueAt - now) : undefined,
            transitions,
        };
        transitions.forEach(animation => animation.pause());
        schedule();
    });

    function releaseHold(event) {
        if (!hold || (event.type !== "blur" && event.pointerId !== hold.pointerId)) return;
        if (fadeEndsAt > hold.startedAt) fadeEndsAt += performance.now() - hold.startedAt;
        hold.transitions.forEach(animation => {
            if (animation.playState === "paused") animation.play();
        });
        const { remaining } = hold;
        hold = null;
        schedule(remaining);
    }

    window.addEventListener("pointerup", releaseHold, true);
    window.addEventListener("pointercancel", releaseHold, true);
    window.addEventListener("blur", releaseHold);
    document.addEventListener("visibilitychange", () => schedule());
    carousel.addEventListener("focusin", () => schedule());
    carousel.addEventListener("focusout", () => queueMicrotask(() => schedule()));
    reducedMotion.addEventListener("change", () => {
        if (shouldReduceMotion()) paused = true;
        syncRotation();
    });

    if ("IntersectionObserver" in window) {
        new IntersectionObserver(([entry]) => {
            inView = entry.isIntersecting;
            schedule();
        }).observe(carousel);
    }

    // Download the second photo at low priority after the first view has loaded.
    function preloadNext() {
        if (canRotate()) prepare(slides[(current + 1) % slides.length]);
    }
    if (document.readyState === "complete") preloadNext();
    else window.addEventListener("load", preloadNext, { once: true });

    update();
    carousel.setAttribute("data-hero-ready", "");
    slides.forEach(slide => { slide.hidden = false; });
    controls.hidden = false;
    syncRotation();
})();
