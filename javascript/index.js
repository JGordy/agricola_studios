// Declaring global variables
let skillsWrapper = document.getElementById('skills-wrapper'),
    clientLinks = document.getElementById('client-links');

// Changing the CTA in the sticky header based on mobile
function renderHeaderCTA() {
  let stickyHeaderCTA = document.getElementById('header-cta');
  if (isMobile()) {
      stickyHeaderCTA.href = "tel:+4046415876";
      stickyHeaderCTA.textContent = "Call for pricing";
  } else {
      stickyHeaderCTA.href = "mailto:kevin.agricola@gmail.com";
      stickyHeaderCTA.textContent = "Email for pricing";
  };
};
renderHeaderCTA();

function renderMenuItems(id) {
  let menu = document.getElementById(id);

  navLinks.forEach(index => {
    menu.innerHTML +=
    `<a href=${index.href}>${index.text}</a>`
  })
};
if (!isMobile()) {
  renderMenuItems("menu");
  renderMenuItems("sticky-menu");
};

function renderStoryCopy() {
  let contentWrapper;

  if (isMobile()) {
      contentWrapper = document.getElementById('about-founder');
  } else {
      contentWrapper = document.getElementById('blurb');
      contentWrapper.innerHTML =
      `<h1><span class="bold">Hello</span> There</h1>`;
  };

  story.forEach(index => {
      contentWrapper.innerHTML +=
      `<p>${index}</p>`;
  });

};
renderStoryCopy();


function renderSocialLinks(id) {
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
renderSocialLinks("social-links");

function renderServices() {
  for (var i = 0; i < skills.length; i++) {
      skillsWrapper.innerHTML +=
       `<div class="skill">
            <img class="skill-icons" src="${skills[i].icon}" alt="${skills[i].skill}"/>
            <h4 class="skill-header">${skills[i].skill}</h4>
            <p class="skill-text">${skills[i].text}</p>
        </div>`;
  };
}
renderServices();

function renderClientLinks() {
  for (var i = 0; i < clients.length; i++) {
      clientLinks.innerHTML +=
      `<div class="client-wrapper">
          <a href="${clients[i].url}" target="_blank">
              <img class="client-image" src="${clients[i].icon}" alt="${clients[i].client}"/>
          </a>
       </div>`
  };
}
renderClientLinks();

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
        let skills = skillsWrapper.childNodes,
            delay = 1;

        for (let i = 0; i < skills.length; i++) {
          skills[i].style.transition = `all ${delay}s`;
          skills[i].className = "slideUp";
          delay += 0.5;
        }

    }
}

renderSocialLinks("social-footer");

function renderContactLinks(id) {
  let footer = document.getElementById(id);

  contactLinks.forEach(index => {
    footer.innerHTML +=
    `<p>
        <i class="${index.icon}"></i>
        ${index.label}
     </p>
     <a href=${index.href}>
          ${index.text}
     </a>`;
  })
};
renderContactLinks("contact-links");
