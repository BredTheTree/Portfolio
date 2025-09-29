// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Dark mode functionality
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.querySelector('.theme-icon');

    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);

    // Update icon based on current theme
    if (currentTheme === 'dark') {
        themeIcon.textContent = '☀️';
    } else {
        themeIcon.textContent = '🌙';
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update icon
        themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });

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

    // Contact form functionality
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const message = document.getElementById('contact-message').value;
            
            // Create mailto URL
            const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
            const body = encodeURIComponent(
                `Name: ${name}\n` +
                `Email: ${email}\n\n` +
                `Message:\n${message}\n\n` +
                `---\nSent from Brady Librino's Portfolio Website`
            );
            
            const mailtoUrl = `mailto:savinravin123@gmail.com?subject=${subject}&body=${body}`;
            
            // Open email client
            window.location.href = mailtoUrl;
            
            // Show success message
            showFormStatus('Thank you for your message! Your email client should have opened with a pre-filled email.', 'success');
            
            // Reset form after a delay
            setTimeout(() => {
                contactForm.reset();
                hideFormStatus();
            }, 3000);
        });
    }

    function showFormStatus(message, type) {
        formStatus.textContent = message;
        formStatus.style.display = 'block';
        
        if (type === 'success') {
            formStatus.style.backgroundColor = '#10b981';
            formStatus.style.color = 'white';
        } else if (type === 'error') {
            formStatus.style.backgroundColor = '#ef4444';
            formStatus.style.color = 'white';
        }
    }

    function hideFormStatus() {
        formStatus.style.display = 'none';
    }
});