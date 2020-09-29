const menu_toggler = document.querySelector(' .navbar .nav-list .menu-toggler');
const mobile_menu = document.querySelector('.navbar .container .nav-list ul');
const menu_item = document.querySelectorAll(
  '.navbar .container .nav-list ul li a'
);
const navbar = document.querySelector('.navbar');

menu_toggler.addEventListener('click', () => {
  menu_toggler.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 200) {
    navbar.style.backgroundColor = 'rgb(31, 30, 30)';
  } else {
    navbar.style.backgroundColor = 'transparent';
  }
});

menu_item.forEach((item) => {
  item.addEventListener('click', () => {
    menu_toggler.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  });
});
