// ============================================
// MOBILE MENU TOGGLE
// ============================================

const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// ============================================
// DROPDOWN MENUS ON MOBILE
// ============================================

const dropdownItems = document.querySelectorAll('.nav-item.has-dropdown');

dropdownItems.forEach(item => {
    const navLink = item.querySelector('.nav-link');
    
    if (navLink) {
        navLink.addEventListener('click', (e) => {
            // Only handle click on mobile
            if (window.innerWidth <= 768) {
                e.preventDefault();
                item.classList.toggle('active');
            }
        });
    }
});

// ============================================
// NEWS SLIDER
// ============================================

class NewsSlider {
    constructor() {
        this.track = document.querySelector('.slider-track');
        this.prevButton = document.querySelector('.slider-prev');
        this.nextButton = document.querySelector('.slider-next');
        this.cards = document.querySelectorAll('.news-card');
        
        if (!this.track || !this.prevButton || !this.nextButton || this.cards.length === 0) {
            return;
        }
        
        this.currentIndex = 0;
        this.cardsPerView = this.getCardsPerView();
        this.totalSlides = Math.ceil(this.cards.length / this.cardsPerView);
        
        this.init();
    }
    
    getCardsPerView() {
        const width = window.innerWidth;
        if (width <= 480) return 1;
        if (width <= 768) return 1;
        if (width <= 1024) return 2;
        return 3;
    }
    
    init() {
        this.prevButton.addEventListener('click', () => this.prev());
        this.nextButton.addEventListener('click', () => this.next());
        
        // Auto-slide every 5 seconds
        this.autoSlideInterval = setInterval(() => this.next(), 5000);
        
        // Pause on hover
        this.track.addEventListener('mouseenter', () => {
            clearInterval(this.autoSlideInterval);
        });
        
        this.track.addEventListener('mouseleave', () => {
            this.autoSlideInterval = setInterval(() => this.next(), 5000);
        });
        
        // Handle resize
        window.addEventListener('resize', () => {
            this.cardsPerView = this.getCardsPerView();
            this.totalSlides = Math.ceil(this.cards.length / this.cardsPerView);
            this.goToSlide(0);
        });
    }
    
    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
        this.updateSlider();
    }
    
    next() {
        this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
        this.updateSlider();
    }
    
    goToSlide(index) {
        this.currentIndex = index;
        this.updateSlider();
    }
    
    updateSlider() {
        const cardWidth = this.cards[0].offsetWidth;
        const gap = 24; // var(--space-6)
        const offset = this.currentIndex * this.cardsPerView * (cardWidth + gap);
        
        this.track.style.transform = `translateX(-${offset}px)`;
        this.track.style.transition = 'transform 0.5s ease-in-out';
    }
}

// Initialize slider when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new NewsSlider();
});

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================
// SCROLL TO TOP BUTTON
// ============================================

const scrollTopButton = document.createElement('button');
scrollTopButton.className = 'scroll-top-button';
scrollTopButton.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 19V5M5 12l7-7 7 7"/>
    </svg>
`;
scrollTopButton.setAttribute('aria-label', 'Наверх');
document.body.appendChild(scrollTopButton);

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopButton.classList.add('visible');
    } else {
        scrollTopButton.classList.remove('visible');
    }
});

// Scroll to top on click
scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll(
        '.news-card, .link-card, .attention-item'
    );
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .scroll-top-button {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 48px;
        height: 48px;
        background-color: var(--color-accent-primary, #f59e0b);
        color: var(--color-bg-primary, #0f0f0f);
        border: none;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transform: translateY(20px);
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }
    
    .scroll-top-button.visible {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
    
    .scroll-top-button:hover {
        background-color: var(--color-accent-primary-hover, #fbbf24);
        transform: translateY(-4px);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
    }
    
    .scroll-top-button:active {
        transform: translateY(-2px);
    }
    
    @media (max-width: 768px) {
        .scroll-top-button {
            bottom: 20px;
            right: 20px;
            width: 44px;
            height: 44px;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// SEARCH FORM HANDLING
// ============================================

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');

if (searchForm && searchInput) {
    searchInput.addEventListener('focus', () => {
        searchForm.classList.add('focused');
    });
    
    searchInput.addEventListener('blur', () => {
        searchForm.classList.remove('focused');
    });
}

// ============================================
// LAZY LOADING IMAGES
// ============================================

const lazyImages = document.querySelectorAll('img[src*="resize_cache"]');

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.3s ease-in';
                
                img.onload = () => {
                    img.style.opacity = '1';
                };
                
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ============================================
// KEYBOARD NAVIGATION
// ============================================

document.addEventListener('keydown', (e) => {
    // ESC key to close mobile menu
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        mobileMenuToggle.focus();
    }
});

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Debounce function for resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized resize handler
const optimizedResize = debounce(() => {
    // Recalculate slider on resize
    if (window.NewsSlider) {
        window.NewsSlider.cardsPerView = window.NewsSlider.getCardsPerView();
        window.NewsSlider.totalSlides = Math.ceil(
            window.NewsSlider.cards.length / window.NewsSlider.cardsPerView
        );
        window.NewsSlider.goToSlide(0);
    }
}, 250);

window.addEventListener('resize', optimizedResize);

// ============================================
// ACCESSIBILITY ENHANCEMENTS
// ============================================

// Add ARIA labels dynamically
document.querySelectorAll('.nav-item.has-dropdown').forEach(item => {
    const dropdown = item.querySelector('.dropdown-menu');
    if (dropdown) {
        dropdown.setAttribute('role', 'menu');
    }
});

// Trap focus in mobile menu when open
if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            const firstLink = navMenu.querySelector('a');
            if (firstLink) {
                setTimeout(() => firstLink.focus(), 100);
            }
        }
    });
}

// ============================================
// INITIALIZATION
// ============================================

console.log('МБОУ СШ №11 - Сайт успешно загружен');
console.log('© 2026 Все права защищены');