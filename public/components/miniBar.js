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
