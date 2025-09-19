// Data
const services = [
    {
        name: "Diseño + Depilación con Pinzas + Botox",
        duration: "45 minutos",
        price: "15 €",
        category: "Cejas",
        icon: "scissors"
    },
    {
        name: "LASH LIFT. Rizado de pestañas + Tinte + Botox",
        duration: "55 minutos",
        price: "45 €",
        category: "Pestañas",
        icon: "eye"
    },
    {
        name: "SKINCARE. Limpieza Facial Profunda",
        duration: "1 hora 20 minutos",
        price: "65 €",
        category: "Facial",
        icon: "sparkles"
    },
    {
        name: "RETOQUE de cualquier Técnica de Micropigmentación",
        duration: "1 hora 40 minutos",
        price: "125 €",
        category: "Micropigmentación",
        icon: "heart"
    },
    {
        name: "GLASS SKIN - Microneedling Phibright",
        duration: "2 horas",
        price: "165 €",
        category: "Facial",
        icon: "sparkles"
    },
    {
        name: "PHIBROWS. Microblading de Cejas Pelo a Pelo",
        duration: "3 horas",
        price: "375 €",
        category: "Micropigmentación",
        icon: "scissors"
    },
    {
        name: "POWDER BROWS. Micropigmentación de Cejas Efecto Difuminado",
        duration: "3 horas",
        price: "365 €",
        category: "Micropigmentación",
        icon: "scissors"
    },
    {
        name: "VELVET BROWS. Micro de Cejas COMBO de Pelo a Pelo + Powder",
        duration: "3 horas",
        price: "390 €",
        category: "Micropigmentación",
        icon: "scissors"
    }
];

const reviews = [
    {
        text: "Me realicé una limpieza facial profunda y dermapen, y quedé encantado. El trato fue súper profesional, el ambiente muy limpio y acogedor. Mi piel quedó más luminosa, suave y con mejor textura. Totalmente recomendable!",
        treatment: "Depilación de cejas con hilo",
        reviewer: "Jorge",
        time: "hace 3 meses"
    },
    {
        text: "Encantada con los resultados! Me hice un retoque de cejas y la micropigmentación de labios, y el cambio ha sido espectacular. El trato fue muy profesional, el ambiente súper agradable y el resultado final, natural y hermoso. Repetiré sin duda!",
        treatment: "Microblading",
        reviewer: "Diana",
        time: "hace 3 meses"
    },
    {
        text: "Todo perfecto! Encantada con Andreia, sin duda volvere!",
        treatment: "Tratamientos de cejas o pestañas",
        reviewer: "Julia",
        time: "hace 4 meses"
    }
];

const workingHours = [
    { day: "Lunes", hours: "10:00–22:00" },
    { day: "Martes", hours: "10:00–22:00" },
    { day: "Miércoles", hours: "10:00–22:00" },
    { day: "Jueves", hours: "10:00–22:00" },
    { day: "Viernes", hours: "10:00–22:00" },
    { day: "Sábado", hours: "10:00–22:00" },
    { day: "Domingo", hours: "10:00–22:00" }
];

// DOM Elements
let selectedService = null;
const modal = document.getElementById('service-modal');
const modalTitle = document.getElementById('modal-title');
const modalPrice = document.getElementById('modal-price');
const modalDuration = document.getElementById('modal-duration');
const modalCategory = document.getElementById('modal-category');
const modalClose = document.getElementById('modal-close');
const modalReservar = document.getElementById('modal-reservar');

// Utility Functions
function createIcon(iconName) {
    const icon = document.createElement('i');
    icon.setAttribute('data-lucide', iconName);
    return icon;
}

function createStars(count = 5) {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'review-stars';
    
    for (let i = 0; i < count; i++) {
        const star = createIcon('star');
        star.className = 'star filled';
        starsContainer.appendChild(star);
    }
    
    return starsContainer;
}

// Render Functions
function renderServices() {
    const servicesGrid = document.getElementById('services-grid');
    
    services.forEach((service, index) => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.style.animationDelay = `${index * 0.1}s`;
        
        serviceCard.innerHTML = `
            <div class="service-header">
                <div class="service-info">
                    <div class="service-meta">
                        <i data-lucide="${service.icon}" class="service-icon"></i>
                        <span class="service-category">${service.category}</span>
                    </div>
                    <h4 class="service-title">${service.name}</h4>
                </div>
                <div class="service-price">${service.price}</div>
            </div>
            <div class="service-duration">
                <i data-lucide="clock"></i>
                <span>${service.duration}</span>
            </div>
        `;
        
        serviceCard.addEventListener('click', () => openServiceModal(service));
        servicesGrid.appendChild(serviceCard);
    });
}

function renderReviews() {
    const reviewsGrid = document.getElementById('reviews-grid');
    
    reviews.forEach((review, index) => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';
        reviewCard.style.animationDelay = `${(index + services.length) * 0.1}s`;
        
        const starsHtml = Array(5).fill('<i data-lucide="star" class="star filled"></i>').join('');
        
        reviewCard.innerHTML = `
            <div class="review-stars">
                ${starsHtml}
            </div>
            <div class="review-meta">
                ${review.treatment} • ${review.time}
            </div>
            <p class="review-text">"${review.text}"</p>
            <p class="review-author">- ${review.reviewer}</p>
        `;
        
        reviewsGrid.appendChild(reviewCard);
    });
}

function renderWorkingHours() {
    const hoursList = document.getElementById('hours-list');
    
    workingHours.forEach(schedule => {
        const hoursItem = document.createElement('div');
        hoursItem.className = 'hours-item';
        
        hoursItem.innerHTML = `
            <span class="hours-day">${schedule.day}</span>
            <span class="hours-time">${schedule.hours}</span>
        `;
        
        hoursList.appendChild(hoursItem);
    });
}

// Modal Functions
function openServiceModal(service) {
    selectedService = service;
    modalTitle.textContent = service.name;
    modalPrice.textContent = service.price;
    modalDuration.innerHTML = `<i data-lucide="clock"></i> ${service.duration}`;
    modalCategory.textContent = service.category;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Re-initialize Lucide icons in modal
    if (window.lucide) {
        lucide.createIcons();
    }
}

function closeServiceModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    selectedService = null;
}

// WhatsApp Integration
function openWhatsApp(message = '') {
    const phoneNumber = '34642814899'; // ONIC Beauty WhatsApp number
    const defaultMessage = message || 'Hola! Me gustaría reservar una cita en ONIC Beauty.';
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

function handleReservation() {
    if (selectedService) {
        const message = `Hola! Me gustaría reservar una cita para el servicio: ${selectedService.name} (${selectedService.price}, ${selectedService.duration}).`;
        openWhatsApp(message);
        closeServiceModal();
    } else {
        openWhatsApp();
    }
}

// Smooth Scrolling
function smoothScrollTo(element) {
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Intersection Observer for Animations
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards
    document.querySelectorAll('.service-card, .review-card, .info-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Event Listeners
function setupEventListeners() {
    // Reservation buttons
    document.getElementById('reservar-btn').addEventListener('click', handleReservation);
    document.getElementById('footer-reservar-btn').addEventListener('click', handleReservation);
    
    // Modal events
    modalClose.addEventListener('click', closeServiceModal);
    modalReservar.addEventListener('click', handleReservation);
    
    // Close modal on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeServiceModal();
        }
    });
    
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeServiceModal();
        }
    });
    
    // WhatsApp button
    document.getElementById('whatsapp-btn').addEventListener('click', () => {
        openWhatsApp();
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            smoothScrollTo(target);
        });
    });
}

// Loading Animation
function showLoadingAnimation() {
    const cards = document.querySelectorAll('.service-card, .review-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Image Carousel
let currentSlide = 0;
const totalSlides = 5;
let carouselInterval;

function updateCarousel() {
    const wrapper = document.getElementById('carousel-wrapper');
    const dots = document.querySelectorAll('.carousel-dot');
    
    if (wrapper) {
        wrapper.style.transform = `translateX(-${currentSlide * 20}%)`;
    }
    
    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateCarousel();
}

function startCarouselAutoplay() {
    carouselInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

function stopCarouselAutoplay() {
    if (carouselInterval) {
        clearInterval(carouselInterval);
    }
}

function setupCarousel() {
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const dots = document.querySelectorAll('.carousel-dot');
    const carouselContainer = document.querySelector('.carousel-container');
    
    // Navigation buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            stopCarouselAutoplay();
            startCarouselAutoplay(); // Restart autoplay
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            stopCarouselAutoplay();
            startCarouselAutoplay(); // Restart autoplay
        });
    }
    
    // Dots navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            stopCarouselAutoplay();
            startCarouselAutoplay(); // Restart autoplay
        });
    });
    
    // Pause autoplay on hover
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', stopCarouselAutoplay);
        carouselContainer.addEventListener('mouseleave', startCarouselAutoplay);
    }
    
    // Touch/swipe support for mobile
    let startX = 0;
    let endX = 0;
    
    if (carouselContainer) {
        carouselContainer.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        carouselContainer.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            handleSwipe();
        });
    }
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide(); // Swipe left - next slide
            } else {
                prevSlide(); // Swipe right - previous slide
            }
            stopCarouselAutoplay();
            startCarouselAutoplay();
        }
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            stopCarouselAutoplay();
            startCarouselAutoplay();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            stopCarouselAutoplay();
            startCarouselAutoplay();
        }
    });
    
    // Start autoplay
    startCarouselAutoplay();
}

// Initialize Application
function init() {
    // Render content
    renderServices();
    renderReviews();
    renderWorkingHours();
    
    // Setup event listeners
    setupEventListeners();
    
    // Setup carousel
    setupCarousel();
    
    // Initialize Lucide icons
    if (window.lucide) {
        lucide.createIcons();
    }
    
    // Setup animations
    setTimeout(() => {
        setupIntersectionObserver();
        showLoadingAnimation();
    }, 100);
    
    // Add loading class to body
    document.body.classList.add('loaded');
}

// Performance Optimization
function preloadImages() {
    // Preload any critical images here if needed
    const imageUrls = [
        // Add any image URLs that need preloading
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Error Handling
window.addEventListener('error', (e) => {
    console.error('Application error:', e.error);
    // Could implement user-friendly error reporting here
});

// Accessibility Enhancements
function setupAccessibility() {
    // Add ARIA labels and roles where needed
    const modal = document.getElementById('service-modal');
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-labelledby', 'modal-title');
    modal.setAttribute('aria-hidden', 'true');
    
    // Focus management for modal
    const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length > 0) {
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];
        
        modal.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusable) {
                        e.preventDefault();
                        lastFocusable.focus();
                    }
                } else {
                    if (document.activeElement === lastFocusable) {
                        e.preventDefault();
                        firstFocusable.focus();
                    }
                }
            }
        });
    }
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        init();
        setupAccessibility();
        preloadImages();
    });
} else {
    init();
    setupAccessibility();
    preloadImages();
}

// Export functions for potential testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        services,
        reviews,
        workingHours,
        openServiceModal,
        closeServiceModal,
        handleReservation,
        openWhatsApp
    };
}
