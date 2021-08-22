var formListItem = document.getElementById("form");
var mouseeventListItem = document.getElementById("mouse-event");
var createHTMLelementsListItem = document.getElementById("create-elements");
var addItemsListItem = document.getElementById("add-items");
var addAndRemoveListItem = document.getElementById("add-and-remove");
var browserObjectModelListItem = document.getElementById("browser-object-model");

var createHTMLelementsHref = 'createElements.html';
var formeventsHref = 'form.html';
var mouseeventsHref = 'mouseEvents.html';
var addItemsHref = 'addToList.html';
var addAndRemoveItemsHref = 'addAndRemoveItems.html';
var browserObjectModelHref = 'browserOM.html';


createHTMLelementsListItem.addEventListener("click", function() {
  location.href = createHTMLelementsHref;
});

formListItem.addEventListener("click", function() {
  location.href = formeventsHref
});

mouseeventListItem.addEventListener("click", function() {
  location.href = mouseeventsHref;
});

addItemsListItem.addEventListener("click", function() {
  location.href = addItemsHref;
});

addAndRemoveListItem.addEventListener("click", function() {
  location.href = addAndRemoveItemsHref;
});

browserObjectModelListItem.addEventListener("click", function() {
  location.href = browserObjectModelHref;
})

