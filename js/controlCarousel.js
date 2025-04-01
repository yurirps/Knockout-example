function initializeCarousel() {
    const carouselWrapper = document.querySelector(".carousel");
    const prevButton = document.getElementById("prevBtn");
    const nextButton = document.getElementById("nextBtn");

    let currentIndex = 0;
    let itemsToShow = window.innerWidth <= 768 ? 1 : 4; // 1 item para mobile, 4 para desktop
    const itemWidth = 266; // Largura de cada item (ajuste se necessário)
    let totalItems = 0;

    function updateCarousel() {
        totalItems = document.querySelectorAll(".carousel-item").length;
        if (totalItems > 0) {
            const translateX = -(currentIndex * itemWidth) + "px";
            carouselWrapper.style.transform = `translateX(${translateX})`;
        }
    }

    nextButton.addEventListener("click", () => {
        totalItems = document.querySelectorAll(".carousel-item").length;
        if (currentIndex + itemsToShow < totalItems) {
            currentIndex += itemsToShow;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    });

    prevButton.addEventListener("click", () => {
        totalItems = document.querySelectorAll(".carousel-item").length;
        if (currentIndex - itemsToShow >= 0) {
            currentIndex -= itemsToShow;
        } else {
            currentIndex = Math.max(0, totalItems - itemsToShow);
        }
        updateCarousel();
    });

    // Atualiza quantidade de itens a mostrar ao redimensionar a tela
    window.addEventListener("resize", () => {
        itemsToShow = window.innerWidth <= 768 ? 1 : 4;
        updateCarousel();
    });

    updateCarousel();
}
