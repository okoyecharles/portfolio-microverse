const navLinks = document.querySelector('.nav-links');
const hamburger = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');

const navLink = Array.from(document.querySelectorAll('.nav-link'));

const wrap = document.querySelector('.wrapper');

// this will loop over each link when clicked
navLink.forEach((link) => link.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  wrap.classList.toggle('w-active');
}));

// listen for hamburger click
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  wrap.classList.toggle('w-active');
});

// listen for close button click
closeMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  wrap.classList.toggle('w-active');
});