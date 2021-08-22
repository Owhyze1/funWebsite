// import { javascript } from 'links.js';

var button = document.getElementById("js");
var interviewButton = document.getElementById("interviewing");
var hackForLaButton = document.getElementById("hackforla");

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