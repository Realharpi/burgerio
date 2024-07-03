const responsive = () => {
    getViewWidth = window.innerWidth
    getViewHeight = window.innerHeight
    getViewDiff = (getViewWidth / 16)
    getResult = getViewHeight / getViewDiff
    // console.log(getViewWidth)            This is for testing purpose only.
    console.log(getResult)               //This is for testing purpose only.
    // 8 is my monitor. 7.7 is my laptop. 7.2 is with bookmark. 
    burgersSection = document.getElementById("burgers_section")
    drinksSection = document.getElementById("drinks_section")
    countdownSection = document.getElementById("countdown_section")
    googleMapsSection = document.querySelector(".googleMaps_section")

    if(getResult < 7.5 && getResult > 6.6) {
        burgersSection.style.height = "calc(100vh + 15rem)"
    } else if (getResult < 6.5 && getResult > 5.6)  {
        burgersSection.style.height = "calc(100vh + 20rem)"
        drinksSection.style.height = "calc(100vh + 15rem)"
        googleMapsSection.style.height = "calc(100vh + 15rem)"
    } else if (getResult < 5.5 )  {
        burgersSection.style.height = "calc(100vh + 30rem)"
        drinksSection.style.height = "calc(100vh + 20rem)"
        countdownSection.style.height = "calc(100vh + 15rem)"
        googleMapsSection.style.height = "calc(100vh + 20rem)"
    }
}

responsive();

window.addEventListener("resize", responsive)