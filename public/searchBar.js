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

