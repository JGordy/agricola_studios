// Checking to see if in a mobile broswer
const isMobile = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Smooth scrolling jquery function for navigation
$('a').click(function(){
  $('html, body').animate({
    scrollTop: $( $(this).attr('href') ).offset().top
  }, 750);
  return false;
});
