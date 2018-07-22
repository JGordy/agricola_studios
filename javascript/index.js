// Declaring global variables
let header = document.getElementById('header'),
    skillsWrapper = document.getElementById('skills-wrapper'),
    work = document.getElementById('work'),
    footer = document.getElementById('footer');

for (var i = 0; i < skills.length; i++) {
  skillsWrapper.innerHTML +=
   `<div>
      <img src="${skills[i].icon}"/>
    </div>`;
}
