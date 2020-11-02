


const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const back = document.querySelector('body');
const menuList = document.querySelector('.menu__list');

headerBurger.onclick = function () {
   headerBurger.classList.toggle('active');
   headerMenu.classList.toggle('active');
   back.classList.toggle('lock');
}

menuList.onclick = function () {
   menuList.classList.remove('active');
   back.classList.toggle('lock');
}

