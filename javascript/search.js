// Filter posts by title or content
const searchInput = document.getElementById('post-search');
const posts = Array.from(document.querySelectorAll('.post'));

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    posts.forEach(post => {
        const title = post.querySelector('.post-title').textContent.toLowerCase();
        const excerpt = post.querySelector('.post-excerpt').textContent.toLowerCase();
        const matches = title.includes(query) || excerpt.includes(query);
        post.style.display = matches ? '' : 'none';
    });
});