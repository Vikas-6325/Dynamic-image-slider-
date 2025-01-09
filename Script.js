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

// Optional: Auto-slide
let autoSlideInterval;
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 3000); // Change interval as needed
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Add event listeners for navigation (if needed)
// ...

// Start auto-sliding (optional)
startAutoSlide(); 
