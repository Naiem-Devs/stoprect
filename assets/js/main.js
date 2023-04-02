(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  // owlCarousel
  $(".hero_Slider").owlCarousel({
    loop: true,
    margin: 20,
    items: 1,
    navText: [
      '<i class="far fa-angle-left"></i>',
      '<i class="far fa-angle-right"></i>'
    ],
    nav: true,
    dots: false
  });

 
})(jQuery);
