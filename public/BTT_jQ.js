
// @ts-nocheck  // This tells VS Code to ignore type errors for '$'

// BTT => Back To Top
$(document).ready(function () {
    // Back to top
  var amountScrolled = 200;

  $(window).scroll(function() {
    if ( $(window).scrollTop() > amountScrolled ) {
      $('button.BTT').addClass('show');
    } else {
      $('button.BTT').removeClass('show');
    }
  });

  // When the button is clicked
  $('button.BTT').click(function() {

    // Temporarily disable smooth scroll from HTML
    $('html').css('scroll-behavior', 'auto');

    // Scroll to top
    $('html, body').animate({scrollTop: 0}, 800);

    // Re-enable smooth scroll after a short delay
    setTimeout(function() {
      $('html').css('scroll-behavior', 'smooth');
    }, 800);

    return false;
  });
})