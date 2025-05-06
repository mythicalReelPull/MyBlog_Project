// Toggle the visibility of the main menu (for both index and about pages)
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('menu-toggle');
    const mainMenu = document.getElementById('main-menu');
    if (!toggleBtn || !mainMenu) return;

    toggleBtn.addEventListener('click', () => {
        mainMenu.classList.toggle('hidden');
    });
});
