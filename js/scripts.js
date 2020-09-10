$(document).ready(() => {
  $(window).scroll(() => {
    if(this.scrollY > 20){
      $(".navbar").addClass("sticky");
    }else{
      $(".navbar").removeClass("sticky");
    }
  });

  $(".menu-toggler").click(() => {
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active")
  });
});