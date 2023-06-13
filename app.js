window.addEventListener('load', function () {
  const carouselInnerSlider = document.querySelector('.content_inner_slider');
  const carouselImages = document.querySelectorAll('.content_inner_slider > img');
  const totalImages = carouselImages.length;
  let counter = 0;
  const timer = 3000; // Aanpassen naar gewenste interval (in milliseconden)

  function moveSliderToIndex(index) {
    carouselInnerSlider.style.transform = `translateX(-${index * 100 / totalImages}%)`;
  }

  function handleNextImage() {
    if (window.innerWidth < 600) {
      // Mobiel: Toon 1 afbeelding per keer
      if (counter === totalImages - 1) {
        counter = 0;
      } else {
        counter++;
      }
    } else {
      // Desktop: Toon 3 afbeeldingen per keer
      if (counter >= totalImages - 3) {
        counter = 0;
      } else {
        counter += 3;
      }
    }
    moveSliderToIndex(counter);
  }

  setInterval(handleNextImage, timer);
});




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
})


// Voeg klikgebeurtenis toe aan de hamburger-menu-items
const menuItems = document.querySelectorAll(".menu-wrap .menu > div > div > ul > li > a");
menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    // Sluit de hamburgermenu
    const toggler = document.getElementById("hamburgerToggle");
    toggler.checked = false;
  });
});


function openModal(imgElement) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImg.src = imgElement.src;
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Voeg klikgebeurtenis toe aan de afbeeldingen
const images = document.querySelectorAll(".gallery img");
images.forEach((image) => {
  image.addEventListener("click", () => {
    const src = image.src;
    openModal(src);
  });
});

// Voeg klikgebeurtenis toe aan de close-knop
const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", closeModal);

// Sluit de modale weergave wanneer er buiten de afbeelding wordt geklikt
window.addEventListener("click", (event) => {
  const modal = document.querySelector(".modal");
  if (event.target === modal) {
    closeModal();
  }
});

document.getElementById("navbarToggler").addEventListener("click", function () {
  this.classList.toggle("open");
  document.getElementById("navbarNav").classList.toggle("open");
});

$(document).ready(function () {
  $(".container ul.toggle").click(function () {
    $(this).toggleClass("active");
    $(".container .sidebar").toggleClass("active");
  });
});

$(document).ready(function () {
  $("img").click(function () {
    var t = $(this).attr("src");
    $(".modal-body").html("<img src='" + t + "' class='modal-img'>");
    $("#myModal").modal();
  });

  $("video").click(function () {
    var v = $("video > source");
    var t = v.attr("src");
    $(".modal-body").html(
      "<video class='model-vid' controls><source src='" +
        t +
        "' type='video/mp4'></source></video>"
    );
    $("#myModal").modal();
  });
});

// Voeg klikgebeurtenis toe aan de hamburger-menu-items
const menuitems = document.querySelectorAll(".menu-wrap .menu > div > div > ul > li > a");
const toggler = document.getElementById("hamburgerToggle");

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    // Sluit de hamburgermenu
    toggler.checked = false;
  });
});

// Voeg klikgebeurtenis toe aan de sectielinks in het hamburgermenu
const sectionLinks = document.querySelectorAll(".menu-wrap .menu > div > div > ul > li > a[href^='#']");

sectionLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Voorkom standaard scrollgedrag

    const target = document.querySelector(link.getAttribute("href"));
    const yOffset = -60; // Aanpassen aan je ontwerplayout

    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });

    // Sluit de hamburgermenu
    toggler.checked = false;
  });
});


// Voeg klikgebeurtenis toe aan de links in het menu
const menuLinks = document.querySelectorAll(".menu a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const toggler = document.querySelector(".toggler");
    toggler.checked = false;
  });
});