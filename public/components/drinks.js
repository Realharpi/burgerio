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