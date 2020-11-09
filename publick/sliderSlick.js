$(document).ready(function () {
   $('.sliderSlick').slick({
      arrows: true,
      dots: true,
      adaptiveHeight: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      autoplay: false,
      autoplaySpeed: 2000,
      pauseOnFocus: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      swipe: true,
      centerMode: true,
      variableWidth: true,
      rows: 1,
      slidesPerRow: 1,
      mobileFirst: false,
      responsive: [
         {
            breakpoint: 1400,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1
            }
         },
         {
            breakpoint: 1075,
               settings: {
               slidesToShow: 2,
               slidesToScroll: 1
            }
         },
         {
            breakpoint: 561,
               settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
         ]
      
   });
});