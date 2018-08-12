// Declaring global variables
let skillsWrapper = document.getElementById('skills-wrapper'),
    clientLinks = document.getElementById('client-links'),
    headerCTA = document.getElementById('header-cta');

const isMobile = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile()) {
    headerCTA.href = "tel:+4046415876";
    headerCTA.textContent = "Call for pricing";
} else {
    headerCTA.href = "mailto:kevin.agricola@gmail.com";
    headerCTA.textContent = "Email for pricing";
}

function addSocialLinks(id) {
  let container = document.getElementById(id);

  profileLinks.forEach(index => {
    container.innerHTML +=
    `<div class="social-icon">
        <a href="${index.url}" target="_blank">
            <i class="${index.className}"></1>
        </a>
     </div>`
  })
};
addSocialLinks("social-links");


// Adds the skill columns with icons and description
for (var i = 0; i < skills.length; i++) {
    skillsWrapper.innerHTML +=
     `<div class="skill">
          <img class="skill-icons" src="${skills[i].icon}" alt="${skills[i].skill}"/>
          <h4 class="skill-header">${skills[i].skill}</h4>
          <p class="skill-text">${skills[i].text}</p>
      </div>`;
};

// Adds client links to skills section
for (var i = 0; i < clients.length; i++) {
    clientLinks.innerHTML +=
    `<div class="client-wrapper">
        <a href="${clients[i].url}" target="_blank">
            <img class="client-image" src="${clients[i].icon}" alt="${clients[i].client}"/>
        </a>
     </div>`
};

// Smooth scrolling jquery function for navigation
$('a').click(function(){
  $('html, body').animate({
    scrollTop: $( $(this).attr('href') ).offset().top
  }, 750);
  return false;
});

// Handles adding a classname to an element when the screen is scrolled up a certain distance
window.onscroll = function() {handleScroll()};

function handleScroll() {
    let stickyHeader = document.getElementsByClassName('sticky-header')[0],
        topButton = document.getElementById('top-button');

    if (document.body.scrollTop < 450 || document.documentElement.scrollTop < 450) {
        stickyHeader.className = "sticky-header";
        topButton.className = "";
    }
    // Slides the quote into view
    if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
        document.getElementById("company-quote").className = "slideUp";
        document.getElementById('cite').className = "slideUp";
        stickyHeader.className = "sticky-header show";
        topButton.className = "show";
    }
    // Slides the skills columns into view
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        let skills = skillsWrapper.childNodes;
        let i = skills.length;

        while(i--) {
          skills[i].style.transition = `all 1.${i * 4}s`;
          skills[i].className = "slideUp";
        }

    }
}

addSocialLinks("social-footer");
