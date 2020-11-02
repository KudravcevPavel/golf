


let headerBurger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.header__menu');
let back = document.querySelector('body');
let menuList = document.querySelector('.menu__list');

headerBurger.onclick = function () {
   headerBurger.classList.toggle('active');
   headerMenu.classList.toggle('active');
   back.classList.toggle('lock');
}

menuList.onclick = function () {
   menuList.classList.remove('active');
   back.classList.toggle('lock');
}

