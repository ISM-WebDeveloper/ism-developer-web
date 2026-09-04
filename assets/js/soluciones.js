(() => {
  "use strict";

  function initEvidenceLightbox() {
    const buttons = [...document.querySelectorAll("[data-evidence-image]")];
    if (!buttons.length) return;

    const lightbox = document.createElement("div");
    lightbox.className = "solution-lightbox";
    lightbox.hidden = true;
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.setAttribute("aria-label", "Vista ampliada");

    lightbox.innerHTML = `
      <div class="solution-lightbox__dialog">
        <button class="solution-lightbox__close" type="button" aria-label="Cerrar vista ampliada">
          <i data-lucide="x"></i>
        </button>
        <img class="solution-lightbox__image" alt="">
        <p class="solution-lightbox__caption"></p>
      </div>
    `;

    document.body.appendChild(lightbox);

    const image = lightbox.querySelector(".solution-lightbox__image");
    const caption = lightbox.querySelector(".solution-lightbox__caption");
    const closeButton = lightbox.querySelector(".solution-lightbox__close");
    let lastTrigger = null;

    function closeLightbox() {
      lightbox.hidden = true;
      document.body.classList.remove("solution-lightbox-open");
      if (lastTrigger) lastTrigger.focus();
    }

    function openLightbox(button) {
      const src = button.dataset.evidenceImage;
      const alt = button.dataset.evidenceAlt || "";
      const text = button.dataset.evidenceCaption || alt;

      if (!src) return;

      lastTrigger = button;
      image.src = src;
      image.alt = alt;
      caption.textContent = text;
      lightbox.hidden = false;
      document.body.classList.add("solution-lightbox-open");
      closeButton.focus();

      if (window.lucide) window.lucide.createIcons();
    }

    buttons.forEach((button) => {
      button.addEventListener("click", () => openLightbox(button));
    });

    closeButton.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) closeLightbox();
    });

    document.addEventListener("keydown", (event) => {
      if (!lightbox.hidden && event.key === "Escape") {
        closeLightbox();
      }
    });
  }

  window.addEventListener("DOMContentLoaded", () => {
    initEvidenceLightbox();
  });
})();
