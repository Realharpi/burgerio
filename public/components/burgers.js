const burgerContainer = document.querySelector('.burgers_container');

// Fetch the burger data from the JSON file
fetch('components/burgers.json')
  .then(response => response.json())
  .then(data => {
    displayBurgers(data.burgers);
  })
  .catch(error => console.error('Error fetching the burger data:', error));

// Function to display the burgers from JSON
function displayBurgers(burgers) {
  
  burgers.forEach(burger => {
    // Create a div to hold details for each burger.
    const burgerDiv = document.createElement('div');
    burgerDiv.classList.add('burgers_item');

    // Create an image element for the burger.
    const imgBurger = document.createElement('img');
    imgBurger.classList.add('burgers_image')
    imgBurger.src = burger.image;
    imgBurger.alt = burger.name;
    burgerDiv.appendChild(imgBurger);     // Image goes under the 'burgers_item' div.




    // *** Select Burger***             // EventListener is like a small listening/tracking device which we attach to item and listen/track them
    imgBurger.addEventListener('click', () => {

      const selectIcon = imgBurger.nextElementSibling;

      if (selectIcon.classList.contains("burgerSelected")) {
        selectIcon.remove()
      } else {
        // Create a div to hold the checked ICON.
      const checkedDiv = document.createElement('div');
      checkedDiv.classList.add('burgerSelected');

      // Create an image element for the logo.
      const imgChecked = document.createElement('img');
      imgChecked.src = "images/check.png";
      imgChecked.alt = "checked";
      checkedDiv.appendChild(imgChecked);     // Logo goes under burgers_logo div

      imgBurger.insertAdjacentElement('afterend', checkedDiv);
      }
      
    })




    // ***Add LOGO***
    if (burger.logo) {
      // Create a div to hold logo for burger's that have logo data.
      const logoDiv = document.createElement('div');
      logoDiv.classList.add('burgers_logo');
      burgerDiv.appendChild(logoDiv)

      // Create an image element for the logo.
      const imgLogo = document.createElement('img');
      imgLogo.src = burger.logo;
      imgLogo.alt = "logo";
      logoDiv.appendChild(imgLogo);     // Logo goes under burgers_logo div
    }

    // Create a div to hold burger's name and price.
    const textDiv = document.createElement('div');
    textDiv.classList.add('burgers_text');
    burgerDiv.appendChild(textDiv)    // This div goes under 'burgers_item' div.

    // Create a paragraph element for the burger name
    const name = document.createElement('p');
    name.textContent = burger.name;
    textDiv.appendChild(name);

    // Create a paragraph element for the burger price
    const price = document.createElement('p');
    price.textContent = `$${burger.price.toFixed(2)}`;
    textDiv.appendChild(price);

    // Append the burger div to the container
    burgerContainer.appendChild(burgerDiv);
  });
}

