// Example: Highlight section on scroll into view
const sections = document.querySelectorAll('.profile-section');

const observerOptions = {
    root: null,
    threshold: 0.1
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});