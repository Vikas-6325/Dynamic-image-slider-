const slider = document.querySelector('.slider');
let currentIndex = 0;
const slides = slider.children;
const slideWidth = slides[0].clientWidth;

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

let autoSlideInterval;
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 3000); 
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

startAutoSlide(); 
