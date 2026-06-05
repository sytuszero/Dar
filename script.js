const logoContainer = document.querySelector('.logo-container');
const logo = document.querySelector('#main-logo');

// Add staggered animation to links
    const links = document.querySelectorAll('.social-link');
    links.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(20px)';
        setTimeout(() => {
            link.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 400 + (index * 200));
    });

    // Showcase Slideshow Logic
    const slides = document.querySelectorAll('.slide');
    const container = document.querySelector('.slideshow-container');
    const animations = ['anim-slide-x', 'anim-slide-y', 'anim-zoom', 'anim-flip'];
    
    if (slides.length > 0) {
        let currentSlide = 0;
        setInterval(() => {
            const prevSlide = currentSlide;
            currentSlide = (currentSlide + 1) % slides.length;
            
            const randomAnim = animations[Math.floor(Math.random() * animations.length)];
            animations.forEach(anim => container.classList.remove(anim));
            container.classList.add(randomAnim);
            
            slides[prevSlide].classList.remove('active');
            slides[prevSlide].classList.add('exit');
            
            slides[currentSlide].classList.remove('exit');
            
            setTimeout(() => {
                slides[currentSlide].classList.add('active');
            }, 50);
        }, 3500);
    }
