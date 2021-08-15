var inputElement = document.getElementById("add-items-input");
var addButton = document.getElementById("add-button");
var list = document.getElementById("list");

var text;

if (inputElement) {
  inputElement.addEventListener("input", function(e) {
    text = e.target.value;
  });

  inputElement.addEventListener("keyup", function(e) {
    if (e.key === "Enter") {
      if (text) addItem(text);
    }
  })
} else {
  console.log("ERROR: check input element")
}

if (addButton) {
  addButton.addEventListener("click", function() {

    if (inputElement && text) {
      addItem(text);
    } else {
      if (text) console.log("ERROR: check for input element");
      else alert("Enter text");
    }
  });
} else {
  console.log("ERROR: Check for button");
}

function addItem(itemText) {
  if (list) {
    var listElement = document.createElement("li");
    listElement.appendChild(document.createTextNode(itemText));
    list.appendChild(listElement);

    inputElement.value = null;
    text = null;
  } else {
    console.log("ERROR: Check for list elements");
  }
}