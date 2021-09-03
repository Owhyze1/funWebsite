
var inputElement = document.getElementById("input-element");

var addButton = document.getElementById("add-button");
var updateButton = document.getElementById("update-button");
var removeButton = document.getElementById("remove-button");
var trashcanButtons = document.querySelectorAll("button#trash-can");

var list = document.getElementById("list");

if (inputElement) {
  var text;

  inputElement.addEventListener("input", function(e) {
    text = e.target.value;
  });

  if (list) {
    inputElement.addEventListener("keyup", function(e) {
      if (e.key === "Enter") {
        if (text) {
          list.appendChild(addListItem(text));
          text = null;
        }
      }
    });

    if (addButton) {
      addButton.addEventListener("click", function() {
        if (text) {
          list.appendChild(addListItem(text));
          text = null;
        }
      });
    }

    if (updateButton) {
      updateButton.addEventListener("click", function() {
        if (text) {
          var first = list.firstElementChild;
          if (first) {
            list.replaceChild(addListItem(text), first);
            text = null;
          }
        }
      });
    }
  }
} else {
  console.log("ERROR: check input");
}

if (removeButton) {
  removeButton.addEventListener("click", function() {
    if (list) {
      var first = list.firstElementChild;
      if (first)
        list.removeChild(first);
    }
  });
}

if (trashcanButtons) {
  for (let i = 0; i < trashcanButtons.length; i++) {
    addListenerToTrashcan(trashcanButtons[i]);
  }
}

function addListenerToTrashcan(trashcanIcon) {
  trashcanIcon.addEventListener("click", function(e) {
    var ancestors = e.path;
      for (let i = 0; i < ancestors.length; i++) {
        if (ancestors[i].nodeName === "LI") {
          list.removeChild(ancestors[i]);
          break;
        }
      }
  });
}

function addListItem(itemText) {
  var image = document.createElement("img");
  image.src = "/trashcan.jpg";

  var button = document.createElement("button");
  button.appendChild(image);
  button.id = "trash-can";
  addListenerToTrashcan(button);

  var listItem = document.createElement("li");
  listItem.appendChild(document.createTextNode(itemText));
  listItem.appendChild(button);

  inputElement.value = null;
  return listItem;
}