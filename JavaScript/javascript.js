const classesListItem = document.getElementById('classes');
// HTML elements
const createHTMLelementsListItem = document.getElementById("create-elements");
const addItemsListItem = document.getElementById("add-items");
const addAndRemoveListItem = document.getElementById("add-and-remove");
// Events
const formListItem = document.getElementById("form");
const mouseeventListItem = document.getElementById("mouse-event");
// Projects
const watchListItem = document.getElementById('watch-project');
// Notes
const browserObjectModelListItem = document.getElementById("browser-object-model");


// Links to HTML pages
const classesHref = 'class.html';
const createHTMLelementsHref = 'createElements.html';
const addItemsHref = 'addToList.html';
const addAndRemoveItemsHref = 'addAndRemoveItems.html';
const formeventsHref = 'form.html';
const mouseeventsHref = 'mouseEvents.html';
const browserObjectModelHref = 'browserOM.html';


classesListItem.addEventListener('click', function() {
  location.href = classesHref;
});

createHTMLelementsListItem.addEventListener("click", function() {
  location.href = createHTMLelementsHref;
});

addItemsListItem.addEventListener("click", function() {
  location.href = addItemsHref;
});

addAndRemoveListItem.addEventListener("click", function() {
  location.href = addAndRemoveItemsHref;
});

formListItem.addEventListener("click", function() {
  location.href = formeventsHref
});

mouseeventListItem.addEventListener("click", function() {
  location.href = mouseeventsHref;
});

browserObjectModelListItem.addEventListener("click", function() {
  location.href = browserObjectModelHref;
})

