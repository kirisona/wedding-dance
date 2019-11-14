let menuToggle = document.querySelector('.menu');
let menu = document.querySelector('.header__list');

menuToggle.addEventListener('click', function(e) {
    menu.classList.toggle('active');
});

$(".slider").slick({

    // normal options...
    slidesToShow: 1,
  slidesToScroll: 1,
  
    // the magic
    responsive: [{
  
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          infinite: true
        }
  
      }, {
  
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: true
        }
  
      }, {
  
        breakpoint: 300,
        settings: "unslick" // destroys slick
  
      }]
  });