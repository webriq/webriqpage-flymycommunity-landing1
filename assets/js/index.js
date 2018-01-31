$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 63) /* .header-top height */ {
      $('#menu').addClass('fixed');
    } else {
      $('#menu').removeClass('fixed');
    }
  });
});


$(document).ready(function(){

  TweenMax.from('#slider-content span', 1.25, {opacity: "0", y: -20} )
  TweenMax.from('#slider-content h1', 2, {x:30, opacity: "0", delay: 1.5})

});
