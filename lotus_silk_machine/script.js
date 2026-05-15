document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer to animate panels on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.3
    });

    const panels = document.querySelectorAll('.text-content');
    panels.forEach(panel => {
        observer.observe(panel);
    });
});
