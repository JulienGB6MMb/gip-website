window.onload = function () {
  const carouselInnerSlider = document.querySelector('.content_inner_slider');
  const carouselImages = document.querySelectorAll('.content_inner_slider > img');
  const totalImages = carouselImages.length;
  let counter = 0;
  const timer = 1500;

  function moveSliderToIndex(index) {
    carouselInnerSlider.style.transform = `translateX(-${index * 100}%)`;
  }

  function handleNextImage() {
    if (window.innerWidth < 600) {
      // Mobile: Show 1 image at a time
      if (counter === totalImages - 1) {
        counter = 0;
      } else {
        counter++;
      }
    } else {
      // Tablet and desktop: Show 2 images at a time
      if (counter >= totalImages - 2) {
        counter = 0;
      } else {
        counter += 2;
      }
    }
    moveSliderToIndex(counter);
  }

  setInterval(handleNextImage, timer);
};


$(document).ready(function() {
  // Wanneer er op een afbeelding wordt geklikt
  $('#gallery img').click(function() {
    var imgSrc = $(this).attr('src');

    // De bron van de afbeelding in de modale inhoud bijwerken
    $('#modalImg').attr('src', imgSrc);

    // Het modaalvenster tonen
    $('#myModal').show();
  });

  // Wanneer er op het modaalvenster wordt geklikt
  $('#myModal').click(function() {
    // Het modaalvenster verbergen
    $('#myModal').hide();
  });
});


