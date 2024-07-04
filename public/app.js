// Page loader
window.onload = () => {
  body.classList.add("no_scroll"); // Add scroll on load

  setTimeout(() => {
    document.body.removeChild(document.querySelector(".loader_container")); // Remove .loader_container class
    body.classList.remove("no_scroll"); // Remove 'no_scroll' class
  }, 100);
};

// SECTION => HEADER

// when Hamburger menu is open - No Scroll feature
const menuButton = document.querySelector(".menu_button"); // Replace with your button selector
const body = document.body;

let isMenuOpen = false; // Flag to track menu state

menuButton.addEventListener("click", function () {
  isMenuOpen = !isMenuOpen; // Toggle flag
  body.classList.toggle("no_scroll", isMenuOpen); // Add/remove class based on flag
});

const menuLinks = document.querySelectorAll(".menu_button li");
const menuCheckbox = document.querySelector(".menu_button .menuCheckbox");

menuLinks.forEach((eachLink) => {
  eachLink.addEventListener("click", () => {
    if (body.classList.contains("no_scroll")) {
      menuCheckbox.checked = false;
    }
  });
});


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
