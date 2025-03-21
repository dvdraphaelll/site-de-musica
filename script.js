document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let slideWidth = document.querySelector(".slide").offsetWidth;
    let scrollAmount = 0;

    nextBtn.addEventListener("click", function () {
        scrollAmount += slideWidth;
        slider.scrollTo({
            left: scrollAmount,
            behavior: "smooth"
        });

        // Se estiver chegando perto do final, clonamos os primeiros itens
        if (scrollAmount >= slider.scrollWidth - slider.clientWidth - slideWidth) {
            cloneSlides();
        }
    });

    prevBtn.addEventListener("click", function () {
        if (scrollAmount > 0) {
            scrollAmount -= slideWidth;
            slider.scrollTo({
                left: scrollAmount,
                behavior: "smooth"
            });
        }
    });

    function cloneSlides() {
        const slides = Array.from(slider.children);
        slides.forEach(slide => {
            let clone = slide.cloneNode(true);
            slider.appendChild(clone);
        });
    }
});
