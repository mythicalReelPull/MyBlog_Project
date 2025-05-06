// javascript/gallery.js
document.addEventListener('DOMContentLoaded', () => {
    const slides = Array.from(document.querySelectorAll('.slide'));
    const prev = document.getElementById('prev-btn');
    const next = document.getElementById('next-btn');
    let index = 0;

    function show(i) {
        slides.forEach((s, j) => s.classList.toggle('active', j === i));
    }

    prev.addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length;
        show(index);
    });

    next.addEventListener('click', () => {
        index = (index + 1) % slides.length;
        show(index);
    });
});
