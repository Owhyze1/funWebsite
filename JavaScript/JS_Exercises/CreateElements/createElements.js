var buttonToAddAfterList = document.getElementById("addAfterList");
var buttonToAddBeforeList = document.getElementById("addBeforeList");
var resetButton = document.getElementById("reset");

var list = document.getElementById("list");
var listItems = document.querySelectorAll("ul#list > li");


var count = listItems.length + 1;

buttonToAddAfterList.addEventListener("click", function() {
  var newListElement = createListElement("List Item " + count);

  count += 1;
  list.appendChild(newListElement);
});

buttonToAddBeforeList.addEventListener("click", function() {
  var newListElement = createListElement("List Item " + count);

  count += 1;
  list.insertBefore(newListElement, list.firstElementChild);
});

resetButton.addEventListener("click", function() {
  var container = document.getElementById("container");
  var childAfterOriginalList = list.nextSibling;
  var replacementList = document.createElement("ul");
  replacementList.id = "list";

  for (let i = 0; i < listItems.length; i++) {
    replacementList.appendChild(listItems[i]);
  }

  if (list && container) {
    container.removeChild(list);

    if (childAfterOriginalList)
      container.insertBefore(replacementList, childAfterOriginalList);
    else
      container.appendChild(replacementList);

    list = replacementList;
    count = list.childNodes.length + 1;
  }
});


function createListElement(text) {
  var listElem = document.createElement('li');
  listElem.appendChild(document.createTextNode(text));
  return listElem;
}
