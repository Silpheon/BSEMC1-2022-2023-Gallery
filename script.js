$(document).ready(function () {




    let modalhtml =""

    for(let i=1;i <= 55; i++){
        modalhtml+=`<div id="myModal${i}" class="modal">
        <span class="close${i} close">&times;</span>
        <img class="modal-content" id="img0${i}">
        <div class="caption" id="caption${i}"></div>
        </div>`

        console.log(modalhtml)
    }
    $(".Modals").append(modalhtml);





    // Carousel
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
// Carousel End
});


function openImageModal(ID){
  console.log(ID)

    // Get the modal
var modal = document.getElementById("myModal"+ID);
console.log(modal)
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg"+ID);
var modalImg = document.getElementById("img0"+ID);
var captionText = document.getElementById("caption"+ID);

  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close"+ID)[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
}

