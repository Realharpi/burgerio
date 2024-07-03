const responsive = () => {
    getViewWidth = window.innerWidth
    getViewHeight = window.innerHeight
    console.log(getViewWidth)
    getViewDiff = (getViewWidth / 16)
    getResult = getViewHeight / getViewDiff
    console.log(getResult)
    // 8 is my monitor. 7.7 is my laptop. 7.2 is with bookmark. 
    burgerSection = document.getElementById("burgers_section")

    console.log(burgerSection)
    if(getResult < 7 ) {
        burgerSection.style.height = "calc(100vh + 15rem)"
        console.log("Done!")
    } else if (getResult < 6)  {
        burgerSection.style.height = "calc(100vh + 18rem)"
    }
}

responsive();