/* 2 img slider JavaScript for auto-slide */
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}, 2000);

// JavaScript for Navbar Toggle (Optional)

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
