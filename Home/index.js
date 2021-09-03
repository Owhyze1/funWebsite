// import { javascript } from 'links.js';

const button = document.getElementById("js");
const interviewButton = document.getElementById("interviewing");
const hackForLaButton = document.getElementById("hackforla");
const troubleshootingElem = document.getElementById('troubleshooting');
const reactElem = document.getElementById('react');

const troubleshootingHref = '/troubleshooting.html';
const reactHref = '/reactNotes.html';


button.addEventListener("click", function() {
  console.log('Button clicked');
  location.href = 'javascript.html';
});

interviewButton.addEventListener("click", function() {
  console.log('Opening interviewing page');
  location.href = 'interviewing.html';
});

hackforla.addEventListener("click", function() {
  console.log('Opening Hack for LA page');
  location.href = 'HackForLA.html';
});

troubleshootingElem.addEventListener('click', function() {
  location.href = troubleshootingHref;
});

reactElem.addEventListener('click', function() {
  location.href = reactHref;
});
