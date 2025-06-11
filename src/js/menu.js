document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.querySelector('.menu-overlay');

    toggle.addEventListener('click', function () {
        navLinks.classList.add('open');
        overlay.classList.add('active');
    });

    overlay.addEventListener('click', function () {
        navLinks.classList.remove('open');
        overlay.classList.remove('active');
    });
});