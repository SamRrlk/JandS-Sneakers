const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentSlide = 0;

function showSlide(slideIndex) {
    if (slideIndex < 0) {
        currentSlide = slides.length - 1;
    } else if (slideIndex >= slides.length) {
        currentSlide = 0;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[currentSlide].style.display = 'block';
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

showSlide(currentSlide);
