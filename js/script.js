const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');
const btnHamburgerT = document.querySelector('.hamburger-top');
const btnHamburgerM = document.querySelector('.hamburger-middle');
const btnHamburgerB = document.querySelector('.hamburger-bottom');

btn.addEventListener('click', navToggle);

function navToggle() {
  btn.classList.toggle('open');
  menu.classList.toggle('show-menu');
  btnHamburgerT.classList.toggle('black');
  btnHamburgerM.classList.toggle('black');
  btnHamburgerB.classList.toggle('black');
}
