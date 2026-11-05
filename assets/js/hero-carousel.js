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
    const pictures = new WeakMap();
    const readingTime = 5000;
    const fadeTime = window.getComputedStyle(carousel).getPropertyValue("--hero-fade-duration").trim();
    const fadeDuration = (Number.parseFloat(fadeTime) || 0) * (fadeTime.endsWith("ms") ? 1 : 1000);
    let current = 0;
    let timer;
    let fadeEndsAt = 0;
    let request = 0;
    let paused = false;
    let hovered = false;
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

    function canRotate() {
        return !paused && !reducedMotion.matches && !document.hidden && inView &&
            !hovered && !carousel.contains(document.activeElement);
    }

    function schedule() {
        window.clearTimeout(timer);
        if (!canRotate()) return;
        const fadeRemaining = Math.max(0, fadeEndsAt - performance.now());
        timer = window.setTimeout(() => show(current + 1), fadeRemaining + readingTime);
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

        if (trigger && slides[current].contains(document.activeElement)) trigger.focus();
        if (next !== current && !reducedMotion.matches) fadeEndsAt = performance.now() + fadeDuration;
        current = next;
        update();
        if (trigger) status.textContent = `Diapositiva ${next + 1} de ${slides.length}. ${titles[next]}`;
        schedule();
    }

    function syncRotation() {
        if (reducedMotion.matches) fadeEndsAt = 0;
        rotation.hidden = reducedMotion.matches;
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
    carousel.addEventListener("pointerenter", event => {
        if (event.pointerType === "touch") return;
        hovered = true;
        schedule();
    });
    carousel.addEventListener("pointerleave", () => {
        hovered = false;
        schedule();
    });
    carousel.addEventListener("focusin", schedule);
    carousel.addEventListener("focusout", () => queueMicrotask(schedule));
    document.addEventListener("visibilitychange", schedule);
    reducedMotion.addEventListener("change", syncRotation);

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
