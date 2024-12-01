let slideIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-item');
    slideIndex += step;

    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    } else if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    const carousel = document.querySelector('.carousel-container');
    carousel.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Auto play every 3 seconds
setInterval(() => {
    moveSlide(1);
}, 3000);

function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('show');
}
