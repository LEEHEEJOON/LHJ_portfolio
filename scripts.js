const navbar = document.querySelector('#navbar');
const hamburger = document.querySelector(
  '#navbar .container .nav-bar .nav-list .hamburger'
);
const mobile_menu = document.querySelector(
  '#navbar .container .nav-bar .nav-list .navbar-menu'
);

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 300) {
    navbar.style.backgroundColor = '#29323c';
  } else {
    navbar.style.backgroundColor = 'transparent';
  }
});

// menu_item.forEach((item) => {
//   item.addEventListener('click', () => {
//     hamburger.classList.toggle('active');
//     mobile_menu.classList.toggle('active');
//   });
// });
