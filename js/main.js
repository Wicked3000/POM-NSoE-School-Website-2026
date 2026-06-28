const track = document.querySelector(".hero-track");
const slides = document.querySelectorAll(".hero-slide");
const prevBtn = document.querySelector(".hero-arrow.left");
const nextBtn = document.querySelector(".hero-arrow.right");
const dotsContainer = document.querySelector(".hero-dots");
const heroSection = document.querySelector(".hero");
const scrollDownButton = document.querySelector(".scroll-down");

let currentIndex = 0;
let autoSlide;
let startX = 0;
let endX = 0;

function startAutoSlide(){
    autoSlide = setInterval(nextSlide, 15000);
}

function stopAutoSlide(){
    clearInterval(autoSlide);
}

function updateSlider() {
    if (!track || slides.length === 0) return;

    slides.forEach(slide => slide.classList.remove("active"));
    const dots = document.querySelectorAll(".hero-dots span");
    dots.forEach(dot => dot.classList.remove("active"));

    slides[currentIndex].classList.add("active");
    if (dots[currentIndex]) {
        dots[currentIndex].classList.add("active");
    }

    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    if (slides.length === 0) return;
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}

function prevSlide() {
    if (slides.length === 0) return;
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
}

function initializeHeroSlider() {
    if (!track || slides.length === 0 || !prevBtn || !nextBtn || !dotsContainer) return;

    slides.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.addEventListener("click", () => {
            currentIndex = index;
            updateSlider();
        });
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".hero-dots span");
    if (dots.length > 0) {
        dots[0].classList.add("active");
    }

    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);

    if (heroSection) {
        heroSection.addEventListener("mouseenter", stopAutoSlide);
        heroSection.addEventListener("mouseleave", startAutoSlide);
    }

    track.addEventListener("touchstart", e => {
        startX = e.touches[0].clientX;
    });

    track.addEventListener("touchend", e => {
        endX = e.changedTouches[0].clientX;
        if (startX - endX > 50) nextSlide();
        if (endX - startX > 50) prevSlide();
    });

    updateSlider();
    startAutoSlide();
}

if (scrollDownButton) {
    scrollDownButton.addEventListener("click", () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });
    });
}

initializeHeroSlider();

function initializeRevealAnimations() {
    // Auto-add reveal classes to subpage content sections, headings, and intro blocks
    const autoRevealTargets = document.querySelectorAll(
        "main h1, main h2, main h3, main .story, main .life-card, main .testimonial-card, main .timeline-item, main .fac-card, main .src-card, main .dept-card, main .calendar-container, main .team-grid .member, main .testimonial-card, main .gallery-item, main .photo-grid, main .principal-text, main .principal-image, main .card"
    );

    autoRevealTargets.forEach(element => {
        if (
            !element.classList.contains("reveal") &&
            !element.classList.contains("reveal-left") &&
            !element.classList.contains("reveal-right") &&
            !element.classList.contains("reveal-scale")
        ) {
            element.classList.add("reveal");
        }
    });

    // Get all elements with reveal animation classes
    const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0,
        rootMargin: "0px 0px -180px 0px"
    });

    revealElements.forEach(element => revealObserver.observe(element));

    // Also handle section show class for page blocks
    const sectionTargets = document.querySelectorAll('main section');
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0,
        rootMargin: "0px 0px -180px 0px"
    });

    sectionTargets.forEach(section => sectionObserver.observe(section));
}


if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeRevealAnimations);
} else {
    initializeRevealAnimations();
}

// Counter Animation
const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = +counter.getAttribute("data-target");
            let count = 0;

            const updateCount = () => {
                const increment = target / 100;
                count += increment;

                if (count < target) {
                    counter.innerText = Math.ceil(count);
                    requestAnimationFrame(updateCount);
                } else {
                    counter.innerText = target;
                }
            };

            updateCount();
            counterObserver.unobserve(counter);
        }
    });
}, { threshold: 0.6 });

counters.forEach(counter => counterObserver.observe(counter));

// Progress Bar
const progressBar = document.querySelector(".scroll-progress");

if (progressBar) {
    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        progressBar.style.width = progress + "%";
    });
}

// Scroll to Top Button
function initScrollToTop() {
    let scrollToTopBtn = document.getElementById("scrollToTop");
    
    // Create button if it doesn't exist
    if (!scrollToTopBtn) {
        scrollToTopBtn = document.createElement("button");
        scrollToTopBtn.id = "scrollToTop";
        scrollToTopBtn.className = "scroll-to-top";
        scrollToTopBtn.setAttribute("aria-label", "Scroll to top");
        scrollToTopBtn.innerHTML = "&uarr;";
        document.body.appendChild(scrollToTopBtn);
    }

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }
    });

    scrollToTopBtn.addEventListener("click", () => {
        const scrollDuration = 1200;
        const scrollStart = window.scrollY;
        const scrollTop = 0;
        const difference = scrollStart - scrollTop;
        const startTime = performance.now();

        function easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        }

        function scroll(currentTime) {
            const elapsed = currentTime - startTime;
            const run = easeInOutQuad(elapsed / scrollDuration);
            window.scrollTo(0, scrollStart - difference * run);
            
            if (elapsed < scrollDuration) {
                requestAnimationFrame(scroll);
            }
        }

        requestAnimationFrame(scroll);
    });
}


if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollToTop);
} else {
    initScrollToTop();
}

