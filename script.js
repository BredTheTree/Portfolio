// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const nav = document.querySelector('nav');
const navLinks = document.querySelector('.nav-links');
const menuButton = document.createElement('button');
menuButton.classList.add('menu-button');
menuButton.innerHTML = '☰';
nav.insertBefore(menuButton, navLinks);

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});