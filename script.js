// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});

// Intersection Observer for animations
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

// Observe elements for animation
document.querySelectorAll('.step-card, .feature-card, .quote-card, .faq-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Screenshots carousel functionality
const screenshotsCarousel = document.querySelector('.screenshots-carousel');
if (screenshotsCarousel) {
    let isDown = false;
    let startX;
    let scrollLeft;

    screenshotsCarousel.addEventListener('mousedown', (e) => {
        isDown = true;
        screenshotsCarousel.style.cursor = 'grabbing';
        startX = e.pageX - screenshotsCarousel.offsetLeft;
        scrollLeft = screenshotsCarousel.scrollLeft;
    });

    screenshotsCarousel.addEventListener('mouseleave', () => {
        isDown = false;
        screenshotsCarousel.style.cursor = 'grab';
    });

    screenshotsCarousel.addEventListener('mouseup', () => {
        isDown = false;
        screenshotsCarousel.style.cursor = 'grab';
    });

    screenshotsCarousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - screenshotsCarousel.offsetLeft;
        const walk = (x - startX) * 2;
        screenshotsCarousel.scrollLeft = scrollLeft - walk;
    });
}

// Add touch support for mobile
if (screenshotsCarousel) {
    let touchStartX = 0;
    let touchEndX = 0;

    screenshotsCarousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    screenshotsCarousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left
                screenshotsCarousel.scrollBy({
                    left: 300,
                    behavior: 'smooth'
                });
            } else {
                // Swipe right
                screenshotsCarousel.scrollBy({
                    left: -300,
                    behavior: 'smooth'
                });
            }
        }
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded, initializing...');
    
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Set cursor for screenshots carousel
    if (screenshotsCarousel) {
        screenshotsCarousel.style.cursor = 'grab';
    }
    
    // Ensure modals start hidden
    const privacyModal = document.getElementById('privacyModal');
    const termsModal = document.getElementById('termsModal');
    
    if (privacyModal) {
        privacyModal.classList.remove('show');
        console.log('Privacy modal initialized and hidden');
    } else {
        console.error('Privacy modal not found');
    }
    
    if (termsModal) {
        termsModal.classList.remove('show');
        console.log('Terms modal initialized and hidden');
    } else {
        console.error('Terms modal not found');
    }
    
    // Check if modals are visible
    setTimeout(() => {
        if (privacyModal && privacyModal.classList.contains('show')) {
            console.warn('Privacy modal is visible on load!');
        }
        if (termsModal && termsModal.classList.contains('show')) {
            console.warn('Terms modal is visible on load!');
        }
    }, 1000);
});

// Modal functions
function openPrivacyModal() {
    console.log('Opening privacy modal...');
    const modal = document.getElementById('privacyModal');
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        console.log('Privacy modal opened successfully');
    } else {
        console.error('Privacy modal element not found');
    }
}

function closePrivacyModal() {
    console.log('Closing privacy modal...');
    const modal = document.getElementById('privacyModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto'; // Restore scrolling
        console.log('Privacy modal closed successfully');
    } else {
        console.error('Privacy modal element not found');
    }
}

function openTermsModal() {
    console.log('Opening terms modal...');
    const modal = document.getElementById('termsModal');
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        console.log('Terms modal opened successfully');
    } else {
        console.error('Terms modal element not found');
    }
}

function closeTermsModal() {
    console.log('Closing terms modal...');
    const modal = document.getElementById('termsModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto'; // Restore scrolling
        console.log('Terms modal closed successfully');
    } else {
        console.error('Terms modal element not found');
    }
}

// Close modal when clicking outside of it
document.addEventListener('DOMContentLoaded', () => {
    const privacyModal = document.getElementById('privacyModal');
    const termsModal = document.getElementById('termsModal');
    
    if (privacyModal) {
        privacyModal.addEventListener('click', (e) => {
            if (e.target === privacyModal) {
                closePrivacyModal();
            }
        });
    }
    
    if (termsModal) {
        termsModal.addEventListener('click', (e) => {
            if (e.target === termsModal) {
                closeTermsModal();
            }
        });
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const privacyModal = document.getElementById('privacyModal');
        const termsModal = document.getElementById('termsModal');
        
        if (privacyModal && privacyModal.classList.contains('show')) {
            closePrivacyModal();
        }
        
        if (termsModal && termsModal.classList.contains('show')) {
            closeTermsModal();
        }
    }
});
