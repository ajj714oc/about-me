// JavaScript for image slider
let currentIndex = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

function showSlide(index) {
  // Hide all slides
  slides.forEach(slide => {
    slide.style.display = 'none';
  });

  // Show the slide at the given index
  slides[index].style.display = 'block';
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function previousSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

// Display the first slide
showSlide(currentIndex);

// Auto slide
setInterval(nextSlide, 2000); // Change slide every 2 seconds
