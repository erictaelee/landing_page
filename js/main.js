//Carousel 
let slidePosition = 0;
const slides = document.getElementsByClassName('slide__bg');
const totalSlides = slides.length;


document.getElementById('slideshow__button--next')
  .addEventListener("click", function () {
    moveToNextSlide();
  });

document.getElementById('slideshow__button--prev')
  .addEventListener("click", function () {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('slideshow__item--visible');
    slide.classList.add('slideshow__item--hidden');
  }
  slides[slidePosition].classList.add('slideshow__item--visible')
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  updateSlidePosition();
}