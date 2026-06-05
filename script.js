document.addEventListener('DOMContentLoaded', () => {
    const logoContainer = document.querySelector('.logo-container');
    const logo = document.querySelector('#main-logo');

    // Logo hover animation removed per user request

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
});
