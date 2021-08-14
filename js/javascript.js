var formListItem = document.getElementById("form");
var mouseeventListItem = document.getElementById("mouse-event");
var createHTMLelementsListItem = document.getElementById("create-elements");
var addItemsListItem = document.getElementById("add-items");

var createHTMLelementsHref ="Z:/home/owhyze1/coding/websitePractice/html/createElements.html";
var formeventsHref = "Z:/home/owhyze1/coding/websitePractice/html/form.html";
var mouseeventsHref = "Z:/home/owhyze1/coding/websitePractice/html/mouseEvents.html";
var addItemsHref = "Z:/home/owhyze1/coding/websitePractice/html/addToList.html";


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

