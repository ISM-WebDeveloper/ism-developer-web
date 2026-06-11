// NAVBAR PREMIUM
// Agrega una clase cuando el usuario baja con scroll

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// REVEAL PREMIUM CON DELAY ESCALONADO

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach((element, index) => {

        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {

            setTimeout(() => {
                element.classList.add("active");
            }, index * 120);

        }

    });

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);



// LUCIDE ICONS
// Convierte los <i data-lucide=""> en iconos SVG

lucide.createIcons();


// FAQ / PREGUNTAS FRECUENTES
// Abre y cierra cada pregunta al hacer clic

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});







