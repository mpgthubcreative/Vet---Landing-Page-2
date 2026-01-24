// Service Carousel Navigation
const servicesWrapper = document.querySelector('.services-wrapper');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

if (servicesWrapper && arrowLeft && arrowRight) {
    
    arrowLeft.addEventListener('click', () => {
        servicesWrapper.scrollLeft -= 380;
    });

    arrowRight.addEventListener('click', () => {
        servicesWrapper.scrollLeft += 380;
    });
}

// Testimonial Carousel Navigation
const testimonialsSlider = document.querySelector('.testimonials-slider');
const testimonialArrowLeft = document.querySelector('.testimonial-arrow-left');
const testimonialArrowRight = document.querySelector('.testimonial-arrow-right');

if (testimonialsSlider && testimonialArrowLeft && testimonialArrowRight) {
    
    testimonialArrowLeft.addEventListener('click', () => {
        testimonialsSlider.scrollLeft -= 500;
    });

    testimonialArrowRight.addEventListener('click', () => {
        testimonialsSlider.scrollLeft += 500;
    });
}
