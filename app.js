const navLinks = document.querySelector('.nav-links');
const hamburger = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');

const navLink1 = document.getElementById('nav-link1');
const navLink2 = document.getElementById('nav-link2');
const navLink3 = document.getElementById('nav-link3');

const wrap = document.querySelector('.wrapper');


// listen for individual clicks
navLink1.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  wrap.classList.toggle('w-active');
});
navLink2.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  wrap.classList.toggle('w-active');
});
navLink3.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  wrap.classList.toggle('w-active');
});

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