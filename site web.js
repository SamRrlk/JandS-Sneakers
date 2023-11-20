const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

showSlide(currentIndex);
