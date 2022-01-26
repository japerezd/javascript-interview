const close = document.querySelector('.close');
const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');

close.addEventListener('click', toggleNavbar);

menu.addEventListener('click', toggleNavbar)

function toggleNavbar() {
    nav.classList.toggle('open');
}