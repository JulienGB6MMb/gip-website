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
}); //EOF Document.ready
