
  (function ($) {
  
  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').delay(500).slideUp('slow'); // set duration in brackets    
    });

    // NAVBAR
    $(".navbar").headroom();

    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    $('.slick-slideshow').slick({
      autoplay: true,
      infinite: true,
      arrows: false,
      fade: true,
      dots: true,
    });

    $('.slick-testimonial').slick({
      arrows: false,
      dots: true,
    });
    
  })(window.jQuery);

  window.onload = function() {
    const images = document.querySelectorAll('.slick-custom img');
    let loadedCount = 0;

    images.forEach((img) => {
        if (img.complete) {
            // Image is already loaded
            loadedCount++;
        } else {
            img.addEventListener('load', () => {
                loadedCount++;
                checkIfAllImagesLoaded();
            });

            img.addEventListener('error', () => {
                console.error(`Failed to load image: ${img.src}`);
            });
        }
    });

    checkIfAllImagesLoaded();

    function checkIfAllImagesLoaded() {
        if (loadedCount === images.length) {
            console.log("All images loaded, starting slideshow...");
            startSlideshow(); // Call your slideshow initialization function here
        }
    }
};

function startSlideshow() {
    // Your slideshow initialization code here
}

console.log(`Loading image: ${img.src}`);

setTimeout(() => {
  startSlideshow();
}, 500); // Adjust the time as needed

console.log(`Image dimensions: ${img.width}x${img.height}`);
