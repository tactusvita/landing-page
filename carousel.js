class Carousel {
    constructor(element) {
        this.carousel = element;
        this.cards = Array.from(element.querySelectorAll('.carousel-card'));
        this.currentIndex = 0;

        this.createDots();

        element.querySelector('.carousel-left').addEventListener('click', () => this.prev());
        element.querySelector('.carousel-right').addEventListener('click', () => this.next());

        this.updateCarousel();
    }

    createDots() {
        const dotsContainer = this.carousel.querySelector('.carousel-dots');
        
        this.cards.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = 'carousel-dot';
            dot.addEventListener('click', () => this.goToSlide(index));
            dotsContainer.appendChild(dot);
        });
        
        this.dots = Array.from(dotsContainer.children);
    }

    goToSlide(index) {
        this.cards[this.currentIndex].classList.remove('active');
        this.dots[this.currentIndex].classList.remove('active');
        
        this.currentIndex = index;
        this.updateCarousel();
    }
    
    next() {
        this.goToSlide((this.currentIndex + 1) % this.cards.length);
    }

    prev() {
        this.goToSlide((this.currentIndex - 1 + this.cards.length) % this.cards.length);
    }

    updateCarousel() {
        this.cards[this.currentIndex].classList.add('active');
        this.dots[this.currentIndex].classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => new Carousel(carousel));
})
