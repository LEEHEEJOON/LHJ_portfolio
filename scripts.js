// $(document).ready(() => {
//   $(window).scroll(() => {
//     if (this.scrollY > 20) {
//       $('.navbar').addClass('sticky');
//     } else {
//       $('.navbar').removeClass('sticky');
//     }
//   });

//   $('.menu-toggler').click(() => {
//     $(this).toggleClass('active');
//     $('.navbar-menu').toggleClass('active');
//   });
// });

const hamburger = document.querySelector(
  '.header .nav-bar .nav-list .hamburger'
);
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
});
