'use strict';

/**
 * navbar toggle & Smooth Scroll Fix
 */
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll(".navbar-link"); // Added for navigation

const navElems = [navOpenBtn, navCloseBtn];

for (let i = 0; i < navElems.length; i++) {
  navElems[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
}

// VentureMond Fix: Close mobile menu when a link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});

/**
 * search toggle
 */
const searchContainer = document.querySelector("[data-search-wrapper]");
const searchBtn = document.querySelector("[data-search-btn]");

if(searchBtn) {
    searchBtn.addEventListener("click", function () {
      searchContainer.classList.toggle("active");
    });
}

/**
 * whishlist & cart toggle (VentureMond Logic)
 */
const panelBtns = document.querySelectorAll("[data-panel-btn]");
const sidePanels = document.querySelectorAll("[data-side-panel]");

for (let i = 0; i < panelBtns.length; i++) {
  panelBtns[i].addEventListener("click", function () {
    let clickedElemDataValue = this.dataset.panelBtn;
    for (let i = 0; i < sidePanels.length; i++) {
      if (clickedElemDataValue === sidePanels[i].dataset.sidePanel) {
        sidePanels[i].classList.toggle("active");
      } else {
        sidePanels[i].classList.remove("active");
      }
    }
  });
}

/**
 * back to top
 */
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if(backTopBtn) {
    window.scrollY >= 100 ? backTopBtn.classList.add("active")
      : backTopBtn.classList.remove("active");
  }
});

/**
 * VentureMond Extra: Gallery Image Hover Animation Fix
 * Ensures images in gallery respond to user interaction
 */
const productDisplay = document.querySelector("[data-product-display]");
const productThumbnails = document.querySelectorAll("[data-product-thumbnail]");

if(productThumbnails.length > 0) {
    for (let i = 0; i < productThumbnails.length; i++) {
      productThumbnails[i].addEventListener("click", function () {
        productDisplay.src = this.src;
        productDisplay.classList.add("fade-anim");
    
        setTimeout(function () {
          productDisplay.classList.remove("fade-anim");
        }, 250);
      });
    }
}

/**
 * Smooth Scroll for Navigation Links
 * Fixes the "Broken Links" feedback from manager
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId !== "#") {
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});