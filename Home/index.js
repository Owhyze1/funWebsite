// import { javascript } from 'links.js';

const jsButton = document.getElementById("js");
const reactButton = document.getElementById('react');
const freeCodeCampButton = document.getElementById('freeCodeCamp');
const interviewButton = document.getElementById("interviewing");
const troubleshootingButton = document.getElementById('troubleshooting');
const hackForLaButton = document.getElementById("hackforla");

const troubleshootingHref = '/troubleshooting.html';
const reactHref = '/reactNotes.html';
const freeCodeCampHref = '/freecodecamp.html';


jsButton.addEventListener("click", function() {
  console.log('Button clicked');
  location.href = 'javascript.html';
});

reactButton.addEventListener('click', function() {
  location.href = reactHref;
});

freeCodeCampButton.addEventListener('click', function() {
  location.href = freeCodeCampHref;
});

interviewButton.addEventListener("click", function() {
  console.log('Opening interviewing page');
  location.href = 'interviewing.html';
});

hackforla.addEventListener("click", function() {
  console.log('Opening Hack for LA page');
  location.href = 'HackForLA.html';
});

troubleshootingButton.addEventListener('click', function() {
  location.href = troubleshootingHref;
});


