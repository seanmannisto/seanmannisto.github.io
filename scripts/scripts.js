// scripts.js
document.addEventListener('DOMContentLoaded', (event) => {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('visible');
    });
});
