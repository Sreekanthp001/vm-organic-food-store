'use strict';

// VentureMond Organic Cart Logic
let cart = JSON.parse(localStorage.getItem('vm_organic_cart')) || [];

/**
 * Navbar Toggle
 */
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

[navOpenBtn, navCloseBtn].forEach(btn => {
  btn?.addEventListener("click", () => navbar.classList.toggle("active"));
});

/**
 * Add to Cart Functionality
 * Deentho gallery lo unna items ni select cheskovachu
 */
function initGalleryAction() {
  const galleryCards = document.querySelectorAll('.gallery-card');
  
  galleryCards.forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', function() {
      const productName = this.querySelector('h3').innerText;
      const productImg = this.querySelector('img').src;
      
      const item = {
        name: productName,
        image: productImg,
        price: 10, // Default price as static
        quantity: 1
      };
      
      cart.push(item);
      localStorage.setItem('vm_organic_cart', JSON.stringify(cart));
      alert(`${productName} added to VentureMond Organic Cart!`);
      updateCartBadge();
    });
  });
}

function updateCartBadge() {
  const badge = document.querySelector('.cart-badge');
  if(badge) badge.innerText = cart.length;
}

// Initialize on load
window.onload = () => {
  initGalleryAction();
  updateCartBadge();
};

/**
 * Smooth Scroll Fix for Nav Links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({ behavior: 'smooth' });
  });
});