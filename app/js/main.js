$(function () { }

);

const header = document.querySelector('.header');
const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const bodyLock = document.querySelector('body');

headerBurger.addEventListener('click', function () {
    headerBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');
    bodyLock.classList.toggle('lock');
    header.classList.toggle('active');
});