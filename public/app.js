// Page loader
window.onload = () => {
  body.classList.add("no_scroll"); // Add scroll on load

  setTimeout(() => {
    document.body.removeChild(document.querySelector(".loader_container")); // Remove .loader_container class
    body.classList.remove("no_scroll"); // Remove 'no_scroll' class
  }, 100);
};

// SECTION => HEADER
// SEARCH BAR - Close Icon
const searchInput = document.getElementById("searchInput");
const searchClearIcon = document.querySelector(".fa-xmark");

searchInput.addEventListener("input", () => {
  if (searchInput.value.trim() !== "") {
    searchClearIcon.classList.add("show");
  } else {
    searchClearIcon.classList.remove("show");
  }
});

searchClearIcon.addEventListener("click", () => {
  searchInput.value = "";
  searchClearIcon.classList.remove("show");
  searchInput.focus(); // Keep the input focused after clearing
});

// Search bar typing animation
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const baseText = "Search for ";
  const words = ["Burgers...", "Pizzas..."];
  let currentWordIndex = 0;
  let isDeleting = false;
  let text = words[currentWordIndex];
  let charIndex = text.length;
  let delay = 100; // Typing delay

  function type() {
    if (isDeleting) {
      if (charIndex > 0) {
        charIndex--;
        searchInput.placeholder = baseText + text.substring(0, charIndex);
      } else {
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length;
        text = words[currentWordIndex];
        setTimeout(type, 500); // Pause before typing the new word
        return;
      }
    } else {
      if (charIndex < text.length) {
        charIndex++;
        searchInput.placeholder = baseText + text.substring(0, charIndex);
      } else {
        isDeleting = true;
        setTimeout(type, 2000); // Pause before deleting
        return;
      }
    }
    setTimeout(type, delay);
  }

  type(); // Initial call
});


// when Hamburger menu is open - No Scroll feature
const menuButton = document.querySelector(".menu_button"); // Replace with your button selector
const body = document.body;

let isMenuOpen = false; // Flag to track menu state

menuButton.addEventListener("click", function () {
  isMenuOpen = !isMenuOpen; // Toggle flag
  body.classList.toggle("no_scroll", isMenuOpen); // Add/remove class based on flag
});

const menuLinks = document.querySelectorAll(".menu_button li")
const menuCheckbox = document.querySelector(".menu_button .menuCheckbox")

menuLinks.forEach((eachLink) => {
  eachLink.addEventListener('click', () => {
    if(body.classList.contains("no_scroll")){
      menuCheckbox.checked = false;
    }
  })
})


// Dark Theme
const checkbox = document.getElementById('toggle_daynight');       // Get the checkbox
const isDarkTheme = localStorage.getItem('darkTheme') === 'true';   // localStorage is used to save the user's theme preference, so it persists across page reloads.

if (isDarkTheme) {
    document.body.classList.add('dark_theme');
    checkbox.checked = true;
}

checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        document.body.classList.add('dark_theme');
        localStorage.setItem('darkTheme', 'true');
    } else {
        document.body.classList.remove('dark_theme');
        localStorage.setItem('darkTheme', 'false');
    }
});


// START Mini Nav Bar
// Scrolling by Dragging the Bar
activate_subtopnav_scroll = 0;
from_scrollpos = -1;
current_scrollpos = -1;
goto_tut = 1;
function startscrolling_subtopnav(event) {
  event.preventDefault();
  from_scrollpos = event.clientX;
  activate_subtopnav_scroll = 1;
}
function scrolling_subtopnav(event) {
  current_scrollpos = event.clientX;
  if (current_scrollpos == from_scrollpos) return false;
  event.preventDefault();
  if (event.buttons == 0) return false;
  var scrollspeed;
  if (activate_subtopnav_scroll == 1) {
    goto_tut = 0;
    scrollspeed = current_scrollpos - from_scrollpos;
    scrollspeed = Math.abs(scrollspeed);
    if (current_scrollpos < from_scrollpos) {
     document.getElementById("left_btn").style.display = "block";     
     document.getElementById("subtopnav").scrollLeft += scrollspeed;        
    } else {
      document.getElementById("subtopnav").scrollLeft -= scrollspeed;        
    }
    scrollbtn_visible();
    from_scrollpos = current_scrollpos;
  }
}
function endscrolling_subtopnav(event) {
  event.preventDefault();
  activate_subtopnav_scroll = 0;
  from_scrollpos = -1;
  current_scrollpos = -1;
}
function pellessii(event) {
  if (goto_tut == 0) {
    event.preventDefault();  
    goto_tut = 1;
    return false;
  }
}

// Scrolling by holding down the buttons
var scrollspeed = 1;
var scrollinterval
function scrollmenow(n) {
  scrollinterval = window.setInterval(function() {
    scrollspeed = scrollspeed * 1.1;
    if (scrollspeed > 10) {scrollspeed = 10;}

    // If n is 1, right button was clicked. If n is -1, left button was clicked.
    if (n == 1) {   
      document.getElementById("subtopnav").scrollLeft += scrollspeed;  
    } else if (n == -1) {
      document.getElementById("subtopnav").scrollLeft -= scrollspeed;  
    }
    scrollbtn_visible();
  }, 10);
}

var previousScroll = 0;
var nextScroll = 0;
function scrollbtn_visible() {
  var currentScroll = document.getElementById("subtopnav").scrollLeft;      // Get the scroll

  // If we haven't scrolled at all
  if (currentScroll < 1) {
    document.getElementById("left_btn").style.display = "none";    
  } else {
    document.getElementById("left_btn").style.display = "block";    
  }

  // when we click on the scroll button, we always get a new scroll value.
  // Here if the current scroll is bigger than 1 meaning we have already scrolled and it's as same as previous scrill meaning we have reached the end then we will increase the value of next scroll
  if (currentScroll > 1 && currentScroll == previousScroll) {
    nextScroll++;
  } else {
    nextScroll = 0;  
  }

  // When the value of next scroll is increased meaning we are at the end for sure. The next scroll is always 0 but when we reach the end, it goes up 1, 2, 3, 4...
  if (nextScroll > 3) {
    document.getElementById("right_btn").style.display = "none";    
  } else if (nextScroll === 0) {    // if the next scroll value become 0 again, meaning we are not at the end anymore.
    document.getElementById("right_btn").style.display = "block";  
  }
  previousScroll = document.getElementById("subtopnav").scrollLeft;
}

function stopscrollmenow() {
  scrollspeed = 1;
  window.clearInterval(scrollinterval);
}

// Scrolling the clicking the right buttons
function scrollRightClick() {
  var subtopnav = document.getElementById("subtopnav");
  // Determine the new scroll position
  var newScrollPosition = subtopnav.scrollLeft + 100;
  // Scroll smoothly to the new position
  subtopnav.scrollTo({
    left: newScrollPosition,
    behavior: 'smooth',
  });
  scrollbtn_visible();
}

// Scrolling the clicking the left buttons
function scrollLeftClick() {
  var subtopnav = document.getElementById("subtopnav");
  // Determine the new scroll position
  var newScrollPosition = subtopnav.scrollLeft - 100;
  // Scroll smoothly to the new position
  subtopnav.scrollTo({
    left: newScrollPosition,
    behavior: 'smooth',
  });
  scrollbtn_visible();
}


// SECTION => SlideShow
// Slider Show
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

showImage(currentimage);    // Start the slider with the first image

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

// Info-Box
activate_info_iicontainer_scroll = 0;
from_scrollpos_info_iicontainer = -1;
current_scrollpos_info_iicontainer = -1;
goto_tut_info_iicontainer = 1;

function startscrolling_info_iicontainer(event) {
  event.preventDefault();
  from_scrollpos_info_iicontainer = event.clientX;
  activate_info_iicontainer_scroll = 1;
}
function scrolling_info_iicontainer(event) {
  current_scrollpos_info_iicontainer = event.clientX;
  if (current_scrollpos_info_iicontainer == from_scrollpos_info_iicontainer) return false;
  event.preventDefault();
  if (event.buttons == 0) return false;
  var scrollspeed_info_iicontainer;
  if (activate_info_iicontainer_scroll == 1) {
    goto_tut_info_iicontainer = 0;
    scrollspeed_info_iicontainer = current_scrollpos_info_iicontainer - from_scrollpos_info_iicontainer;
    scrollspeed_info_iicontainer = Math.abs(scrollspeed_info_iicontainer);
    if (current_scrollpos_info_iicontainer < from_scrollpos_info_iicontainer) {
     document.getElementById("left_btn_info").style.display = "block";     
     document.getElementById("info_iicontainer").scrollLeft += scrollspeed_info_iicontainer;        
    } else {
      document.getElementById("info_iicontainer").scrollLeft -= scrollspeed_info_iicontainer;        
    }
    scrollbtn_visible();
    from_scrollpos_info_iicontainer = current_scrollpos_info_iicontainer;
  }
}
function endscrolling_info_iicontainer(event) {
  event.preventDefault();
  activate_info_iicontainer_scroll = 0;
  from_scrollpos_info_iicontainer = -1;
  current_scrollpos_info_iicontainer = -1;
}
function pellessii_info_iicontainer(event) {
  if (goto_tut_info_iicontainer == 0) {
    event.preventDefault();  
    goto_tut_info_iicontainer = 1;
    return false;
  }
}
var scrollspeed_info_iicontainer = 1;
var scrollinterval_info_iicontainer
function scroll_info(n) {
  scrollinterval_info_iicontainer = window.setInterval(function() {
    scrollspeed_info_iicontainer = scrollspeed_info_iicontainer * 1.1;
    if (scrollspeed_info_iicontainer > 10) {scrollspeed_info_iicontainer = 10;}
    if (n == 1) {
      document.getElementById("info_iicontainer").scrollLeft += scrollspeed_info_iicontainer;  
    } else {
      document.getElementById("info_iicontainer").scrollLeft -= scrollspeed_info_iicontainer;  
      
    }
    scrollbtn_visible_info_iicontainer();
  }, 10);
}

var previousScroll_info_iicontainer = 0;
var nextScroll_info_iicontainer = 0;
function scrollbtn_visible_info_iicontainer() {
  var currentScroll = document.getElementById("info_iicontainer").scrollLeft;      // Get the scroll

  // If we haven't scrolled at all
  if (currentScroll < 1) {
    document.getElementById("left_btn_info").style.display = "none";    
  } else {
    document.getElementById("left_btn_info").style.display = "block";    
  }

  // when we click on the scroll button, we always get a new scroll value.
  // Here if the current scroll is bigger than 1 meaning we have already scrolled and it's as same as previous scrill meaning we have reached the end then we will increase the value of next scroll
  if (currentScroll > 1 && currentScroll == previousScroll) {
    nextScroll++;
  } else {
    nextScroll = 0;  
  }

  // When the value of next scroll is increased meaning we are at the end for sure. The next scroll is always 0 but when we reach the end, it goes up 1, 2, 3, 4...
  if (nextScroll > 3) {
    document.getElementById("right_btn_info").style.display = "none";    
  } else if (nextScroll === 0 && window.innerWidth <= 1050) {    // if the next scroll value become 0 again, meaning we are not at the end anymore.
    document.getElementById("right_btn_info").style.display = "block";  
  }
  previousScroll = document.getElementById("info_iicontainer").scrollLeft;
}

window.addEventListener("resize", () => {
  if(window.innerWidth > 1050){
    document.getElementById("right_btn_info").style.display = "none"; 
  }
});

// Scrolling will stop
function stopscroll_info() {
  scrollspeed_info_iicontainer = 1;
  window.clearInterval(scrollinterval_info_iicontainer);
}

// Scrolling the clicking the right buttons
function scrollRightInfo() {
  var iicontainer = document.getElementById("info_iicontainer");
  // Determine the new scroll position
  var newScrollPosition = iicontainer.scrollLeft + 100;
  // Scroll smoothly to the new position
  iicontainer.scrollTo({
    left: newScrollPosition,
    behavior: 'smooth',
  });
  scrollbtn_visible();
}

// Scrolling the clicking the left buttons
function scrollLeftInfo() {
  var iicontainer = document.getElementById("info_iicontainer");
  // Determine the new scroll position
  var newScrollPosition = iicontainer.scrollLeft - 100;
  // Scroll smoothly to the new position
  iicontainer.scrollTo({
    left: newScrollPosition,
    behavior: 'smooth',
  });
  scrollbtn_visible();
}

// SECTION => Burgers
// Select Burgers
getBurgers = document.querySelectorAll(".burgers_item img");
getBurgers.forEach((eachBurger) => {
  eachBurger.addEventListener("click", (eBurger) => {
    const selectIcon = eachBurger.nextElementSibling;

    if (selectIcon.classList.contains("show")) {
      selectIcon.classList.remove("show");
    } else {
      selectIcon.classList.add("show");
    }
  });
});

// SECTION => Drinks SlideShow
const drinkItem = document.querySelectorAll(".drinks_item");
const prevDrinksBtn = document.querySelector(".drinks_buttons .back_arrow");
const nextDrinksBtn = document.querySelector(".drinks_buttons .next_arrow");
let currentDrinkNum = 0; let intervalDrinks; let currentDrinkItem; let next1Drink; let next2Drink; let next3Drink;

// Function to display a specific drink
function showDrinks(currentDrinkNum) {
  currentDrinkItem = drinkItem[currentDrinkNum];
  next1Drink = drinkItem[currentDrinkNum + 1];
  next2Drink = drinkItem[currentDrinkNum + 2];
  next3Drink = drinkItem[currentDrinkNum + 3];

  // Number of drinks will change according to the screen size.
  if (window.innerWidth > 1200) {
    currentDrinkItem.classList.add("active");
    next1Drink.classList.add("active");
    next2Drink.classList.add("active");
    next3Drink.classList.add("active");
  } else if (window.innerWidth < 1200 && window.innerWidth >= 960) {
    currentDrinkItem.classList.add("active");
    next1Drink.classList.add("active");
    next2Drink.classList.add("active");
  } else if (window.innerWidth < 960 && window.innerWidth >= 700) {
    currentDrinkItem.classList.add("active");
    next1Drink.classList.add("active");
  } else if (window.innerWidth < 700) {
    currentDrinkItem.classList.add("active");
  }

  if (currentDrinkItem.previousElementSibling === null) {
  } else {
    currentDrinkItem.previousElementSibling.classList.remove("active");
  }

  // This code is a failsafe. To make sure that no other item has active class. I will loop and remove all the active classes from other items.
  drinkItem.forEach((singleDrinkItem, index) => {
    if (
      index !== currentDrinkNum &&
      index !== currentDrinkNum + 1 &&
      index !== currentDrinkNum + 2 &&
      index !== currentDrinkNum + 3
    ) {
      singleDrinkItem.classList.remove("active");
    }
  });
}

// Function to handle automatic rotation
function nextDrink() {
  currentDrinkNum = (currentDrinkNum + 1) % drinkItem.length;
  if (currentDrinkNum >= 9) {
    currentDrinkNum = 0;
    showDrinks(currentDrinkNum);
  } else {
    showDrinks(currentDrinkNum);
  }
}

// Timer
function timerDrinks() {
  clearInterval(intervalDrinks); // Clear any existing interval before starting a new one
  intervalDrinks = setInterval(nextDrink, 10000); // Start the interval with ID stored in intervalId
}

// Back button
prevDrinksBtn.addEventListener("click", () => {
  currentDrinkNum = (currentDrinkNum - 1 + drinkItem.length) % drinkItem.length;
  showDrinks(currentDrinkNum);
  timerDrinks();
});

// Next button
nextDrinksBtn.addEventListener("click", () => {
  nextDrink();
  timerDrinks();
});

// Start the slider with the first image
showDrinks(currentDrinkNum);

// Start the timer when page loads
timerDrinks();

// Check width on window resize
window.addEventListener("resize", nextDrink);

// Select Drinks
getDrinks = document.querySelectorAll(".drinks_item img");
getDrinks.forEach((eachDrink) => {
  eachDrink.addEventListener("click", (eDrink) => {
    const selectIcon = eachDrink.nextElementSibling;
    
    if (selectIcon.classList.contains("show")) {
      selectIcon.classList.remove("show");
    } else {
      selectIcon.classList.add("show");
    }
  });
});

// SECTION => Countdown
const targetTime = Date.now() + 10 * 60 * 60 * 1000; // Milliseconds in 10 hours

function updateClock() {
  const currentTime = Date.now();
  const difference = targetTime - currentTime;

  // Calculate remaining time in hours, minutes, seconds
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  // Format time with leading zeros
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  // Update the countdown display
  document.querySelector(".clock").innerHTML = formattedTime;

  // Check if countdown has reached zero
  if (difference <= 0) {
    clearInterval(intervalCountdown);
    document.querySelector(".clock").innerHTML = "Time's Up!";
  }
}

const intervalCountdown = setInterval(updateClock, 1000);

updateClock(); // Initial update

// START of Google Maps
// Initialize and add the map
function initMap() {
  // Location of Toronto
  const toronto = { lat: 43.69, lng: -79.39 };

  // Create the map
  const map = new google.maps.Map(document.getElementById("googleMaps"), {
    zoom: 12, // Adjust the map with zoom level
    center: toronto, // Adjust the pivot point of the map
  });

  // Create the AdvancedMarkerElement
  const marker = new google.maps.marker.AdvancedMarkerElement({
    position: toronto,
    map: map,
  });

  // END of Google Maps

  // SECTION => CONTACT FORM
  //Submitting form to Google Sheets
  var form = document.getElementById("sheetdb-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(form.action, {
      method: "POST",
      body: new FormData(document.getElementById("sheetdb-form")),
    })
      .then((response) => response.json())
      .then((html) => {
        showModal(); // show Submission modal
        form.reset(); // Reset/Clear the form
      });
  });

  // *******Modals & Animation*********
  let backdrop = document.querySelector(".backdrop");
  let modalDone = document.querySelector(".section_modal .done");
  let modalContainer = document.querySelector(".modaldrop");

  function showModal() {
    setTimeout(showModalDone, 1);
    function showModalDone() {
      addAnimation(modalDone);

      setTimeout(stopModal, 3000);

      function stopModal() {
        removeModal();
        setTimeout(timeOut, 3000);
      }
    }
  }

  function addAnimation(modalDone) {
    backdrop.classList.add("animIn");
    modalDone.classList.add("animIn");
    modalContainer.classList.add("active");
  }

  function removeModal() {
    modalDone.classList.add("animOut");
    backdrop.classList.add("animOut");

    setTimeout(timeOut, 500);
  }

  function timeOut() {
    modalDone.classList.remove("animIn");
    backdrop.classList.remove("animIn");
    modalContainer.classList.remove("active");
    modalDone.classList.remove("animOut");
    backdrop.classList.remove("animOut");
  }

  // SECTION =>FOOTER

  // Automate YEAR in Footer.
  // When the document is ready (content loaded)
  document.addEventListener("DOMContentLoaded", function () {
    // Get the span element with id "currentYear"
    const yearSpan = document.getElementById("currentYear");
    // Get the current year
    const currentYear = new Date().getFullYear();
    // Set the text content of the span to the current year
    yearSpan.textContent = currentYear;
  });
}
