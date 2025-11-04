document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll
    document.querySelectorAll('.main-nav .nav-link, .btn[href^="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
            const href = a.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 86;
                    const elementPosition = target.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({ top: elementPosition - headerOffset, behavior: 'smooth' });
                }
            }
        });
    });

    // Reveal on scroll
    const revealEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealEls.forEach(el => io.observe(el));
});
