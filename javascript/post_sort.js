// Ensures posts are sorted by their <time datetime="YYYY-MM-DD"> value
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('posts-list');
    const posts = Array.from(container.querySelectorAll('article.post'));

    posts.sort((a, b) => {
        const dateA = new Date(a.querySelector('time').getAttribute('datetime'));
        const dateB = new Date(b.querySelector('time').getAttribute('datetime'));
        return dateB - dateA; // newest first; switch to dateA - dateB for oldest first
    });

    // Re-append in new order
    posts.forEach(post => container.appendChild(post));
});