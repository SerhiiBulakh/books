
let slideIndex = 1;
showSlides(slideIndex);


function plusSlide() {
    showSlides(slideIndex += 1);
}


function minusSlide() {
    console.log('asfaf')
    showSlides(slideIndex -= 1);  
}


function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("item-img");
  
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
   
  if(slides.length != 0)  slides[slideIndex - 1].style.display = "block";
 
}


export {plusSlide,currentSlide,showSlides,minusSlide}