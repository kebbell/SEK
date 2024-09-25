(function ($) {
  "use strict";

  // PRELOADER
  $(window).on('load', function() {
    $('.preloader').delay(500).slideUp('slow');
  });

  // NAVBAR
  $(".navbar").headroom();

  $('.navbar-collapse a').click(function() {
    $(".navbar-collapse").collapse('hide');
  });

  // Image loading logic
  $(window).on('load', function() {
    const images = document.querySelectorAll('.slick-custom img');
    let loadedCount = 0;

    images.forEach((img) => {
      if (img.complete) {
        loadedCount++;
      } else {
        img.addEventListener('load', function() {
          loadedCount++;
          checkIfAllImagesLoaded();
        });

        img.addEventListener('error', function() {
          console.error(`Failed to load image: ${img.src}`);
        });
      }
    });

    checkIfAllImagesLoaded();

    function checkIfAllImagesLoaded() {
      if (loadedCount === images.length) {
        console.log("All images loaded, starting slideshow...");
        startSlideshow();
      }
    }
  });

  // Slideshow initialization
  function startSlideshow() {
    $('.slick-slideshow').slick({
      autoplay: true,
      infinite: true,
      arrows: false,
      fade: true,
      dots: true,
    });

    // Optional: If you have testimonial slideshows
    $('.slick-testimonial').slick({
      arrows: false,
      dots: true,
    });
  }
})(window.jQuery);

