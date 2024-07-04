const sliderImage = document.querySelectorAll(".image_item");
const prevSliderBtn = document.querySelector(".slider_buttons .back_arrow");
const nextSliderBtn = document.querySelector(".slider_buttons .next_arrow");
const currentCounter = document.querySelector(".slideshow_counter_current"); // Get the slider counter
let currentimage = 0;
let intervalImages;

// Function to display a specific image
function showImage(n) {
  sliderImage.forEach((image, index) => {
    image.classList.remove("active");
    if (index === n) {
      image.classList.add("active");
      currentCounter.innerText = currentimage + 1; // Display the correct slider number
    }
  });
}

// Function to handle automatic rotation (optional)
function nextImage() {
  currentimage = (currentimage + 1) % sliderImage.length;
  showImage(currentimage);
}

showImage(currentimage); // Start the slider with the first image

function timerImages() {
  clearInterval(intervalImages); // Clear any existing interval before starting a new one
  intervalImages = setInterval(nextImage, 10000); // Start the interval with ID stored in intervalId
}

// Event listeners for navigation buttons
prevSliderBtn.addEventListener("click", () => {
  currentimage = (currentimage - 1 + sliderImage.length) % sliderImage.length;
  showImage(currentimage);
  timerImages();
});

nextSliderBtn.addEventListener("click", () => {
  nextImage();
  timerImages();
});

timerImages();

// Touch Slider for the image
const sliderContainer = document.querySelector(".touch_slider");
let startX = 0;
let swiped = false;

sliderContainer.addEventListener("touchstart", (event) => {
  event.preventDefault();
  event.stopPropagation();
  startX = event.touches[0].clientX;
  swiped = false;
});

sliderContainer.addEventListener("touchmove", (event) => {
  event.preventDefault();
  event.stopPropagation();
  const deltaX = event.touches[0].clientX - startX;
  const threshold = 100;

  if (!swiped && Math.abs(deltaX) > threshold) {
    swiped = true;
    const numSlides = sliderImage.length;

    if (deltaX > 0) {
      // Swipe right (previous)
      currentimage = (currentimage - 1 + numSlides) % numSlides;
    } else {
      // Swipe left (next)
      currentimage = (currentimage + 1) % numSlides;
    }

    // Handle special cases for first and last slide
    if (currentimage === 0 && deltaX > 0) {
      currentimage = numSlides - 1; // Wrap to last on swipe right from first
    } else if (currentimage === numSlides - 1 && deltaX < 0) {
      currentimage = 0; // Wrap to first on swipe left from last
    }

    showImage(currentimage); // Update active image based on swipe
    timerImages(); // Restart timer on any swipe (previous or next)
  }
});
