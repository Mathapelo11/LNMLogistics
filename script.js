// Mobile Hamburger Navigation Menu Controller
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-active');
        
        if (navLinks.classList.contains('mobile-active')) {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.backgroundColor = '#ffffff';
            navLinks.style.padding = '30px';
            navLinks.style.borderBottom = '3px solid var(--gold-accent)';
            navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.05)';
            navLinks.style.zIndex = '999';
        } else {
            navLinks.style.display = 'none';
        }
    });
}