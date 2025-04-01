function initializeCarousel() {
    const carouselWrapper = document.querySelector(".carousel");
    const prevButton = document.getElementById("prevBtn");
    const nextButton = document.getElementById("nextBtn");

    let currentIndex = 0;
    const itemsToShow = 4;
    const itemWidth = 266;
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

    updateCarousel();
}