// Declaring global variables
let header = document.getElementById('header'),
    skillsWrapper = document.getElementById('skills-wrapper'),
    clientLinks = document.getElementById('client-links'),
    work = document.getElementById('work'),
    footer = document.getElementById('footer');

// Adds the skill columns with icons and description
for (var i = 0; i < skills.length; i++) {
    skillsWrapper.innerHTML +=
     `<div>
          <img class="skill-icons" src="${skills[i].icon}" alt="${skills[i].skill}"/>
          <h4 class="skill-header">${skills[i].skill}</h4>
          <p class="skill-text">${skills[i].text}</p>
      </div>`;
};


for (var i = 0; i < clients.length; i++) {
    clientLinks.innerHTML +=
    `<div class="client-wrapper">
        <a href="${clients[i].url}">
            <img class="client-image" src="${clients[i].icon}" alt="${clients[i].client}"/>
        </a>
     </div>`
};
