
var navMain = document.querySelector('.page-header__menu');
var navToggleClose = document.querySelector('.page-header__menu-toggle-cross');
var navToggleOpen = document.querySelector('.page-header__menu-toggle-burger');

navMain.classList.remove('page-header__menu--nojs');

navToggleClose.addEventListener('click', function(){
if (navMain.classList.contains('page-header__menu--close'))
{
navMain.classList.remove('page-header__menu--close');
navMain.classList.add('page-header__menu--open');
} else {
navMain.classList.remove('page-header__menu--open');
navMain.classList.add('page-header__menu--close');
}
});

    navToggleOpen.addEventListener('click', function(){
  if (navMain.classList.contains('page-header__menu--open'))
  {
    navMain.classList.remove('page-header__menu--open');
    navMain.classList.add('page-header__menu--close');
  } else {
      navMain.classList.remove('page-header__menu--close');
      navMain.classList.add('page-header__menu--open');
    }
});
