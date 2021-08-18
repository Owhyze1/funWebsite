var formListItem = document.getElementById("form");
var mouseeventListItem = document.getElementById("mouse-event");
var createHTMLelementsListItem = document.getElementById("create-elements");
var addItemsListItem = document.getElementById("add-items");
var addAndRemoveListItem = document.getElementById("add-and-remove");
var browserObjectModelListItem = document.getElementById("browser-object-model");

var createHTMLelementsHref ="Z:/home/owhyze1/coding/websitePractice/html/createElements.html";
var formeventsHref = "Z:/home/owhyze1/coding/websitePractice/html/form.html";
var mouseeventsHref = "Z:/home/owhyze1/coding/websitePractice/html/mouseEvents.html";
var addItemsHref = "Z:/home/owhyze1/coding/websitePractice/html/addToList.html";
var addAndRemoveItemsHref = "Z:/home/owhyze1/coding/websitePractice/html/addAndRemoveItems.html";
var browserObjectModelHref = "Z:/home/owhyze1/coding/websitePractice/html/browserOM.html"


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

