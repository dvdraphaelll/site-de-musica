document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let slideWidth = document.querySelector(".slide").offsetWidth;
    let scrollAmount = 0;
    const slidesToScroll = 3; // Número de slides a rolar por clique

    nextBtn.addEventListener("click", function () {
        scrollAmount += slideWidth * slidesToScroll;
        slider.scrollTo({
            left: scrollAmount,
            behavior: "smooth"
        });

        // Se estiver chegando perto do final, clona os primeiros itens
        if (scrollAmount >= slider.scrollWidth - slider.clientWidth - (slideWidth * slidesToScroll)) {
            cloneSlides();
        }
    });

    prevBtn.addEventListener("click", function () {
        if (scrollAmount > 0) {
            scrollAmount -= slideWidth * slidesToScroll;
            slider.scrollTo({
                left: scrollAmount,
                behavior: "smooth"
            });
        }
    });

    function cloneSlides() {
        const slides = slider.children;
        const numSlides = slides.length;
        
        // Clona apenas o conjunto original de slides para evitar crescimento infinito
        for (let i = 0; i < numSlides; i++) {
            let clone = slides[i].cloneNode(true);
            slider.appendChild(clone);
        }
    }

    // Atualiza slideWidth ao redimensionar a tela
    window.addEventListener("resize", function () {
        slideWidth = document.querySelector(".slide").offsetWidth;
    });
});