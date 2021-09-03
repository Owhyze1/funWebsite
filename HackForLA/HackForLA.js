const frontendElem = document.getElementById('frontend');
const backendElem = document.getElementById('backend');

const frontendHref = '/frontend.html';
const backendHref = '/backend.html';


frontendElem.addEventListener('click', function() {
  location.href = frontendHref;
});

backendElem.addEventListener('click', function() {
  location.href = backendHref;
});


