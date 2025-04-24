document.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
    
  mobileMenu.addEventListener('click', () => {
    const isActive = navLinks.classList.toggle('active');
    navLinks.setAttribute('aria-hidden', !isActive);
        });
});
