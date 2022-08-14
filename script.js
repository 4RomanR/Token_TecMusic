var menuBurger = document.querySelector('.menu_burger');
var menuDespliegue = document.querySelector('.menu-hamb')

menuBurger.addEventListener('click', toggleMenuMovil);

function  toggleMenuMovil(){
    menuDespliegue.classList.toggle('inactive');
}