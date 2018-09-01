// Checking to see if in a mobile broswer
const isMobile = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Smooth scrolling jquery function for navigation
$('a').click(function(){
  $('html, body').animate({
    scrollTop: $( $(this).attr('href') ).offset().top
  }, 750);
  return false;
});

// Toggle the mobile 'read more' section
let coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
};
