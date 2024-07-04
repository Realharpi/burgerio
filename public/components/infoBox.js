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
    scrollbtn_visible_info_iicontainer();
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
  console.log(currentScroll)

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
  if (nextScroll > 3 || currentScroll >= 700) {
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
  scrollbtn_visible_info_iicontainer();
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
  scrollbtn_visible_info_iicontainer();
}
