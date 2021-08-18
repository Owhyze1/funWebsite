var form = document.getElementById("order-form");

var firstName = document.getElementById("first-name");
var lastName = document.getElementById("last-name");
var checkboxes = document.querySelectorAll("[name='souvenirs']");

var submitButton = document.getElementById("submit-button");

var display = document.getElementById("display-div");


var first;
var last;


if (form) {

  form.addEventListener("submit", function(e) {
    e.preventDefault();
  });

  if (firstName) {
    firstName.addEventListener("input", function(e) {
      first = e.target.value;
    });
  }

  if (lastName) {
    lastName.addEventListener("input", function(e) {
      last = e.target.value;
    });
  }

  if (submitButton) {
    submitButton.addEventListener("click", function(e) {
       if (first && last && display) {

        displayCustomerOrder(display, first, last, checkboxes);
      }
    });
  }
}

function displayCustomerOrder(display, first, last, checkboxes) {
  var customer = document.createTextNode(`${first} ${last}`);
  var pCustomer = createElem("p");

  var checkout = createElem(null, true, "Checkout");
  var pTitle = createElem("p");
  pTitle.appendChild(checkout);
  pTitle.style.fontWeight = "bold";

  display.appendChild(pTitle);
  display.appendChild(pCustomer);
  pCustomer.appendChild(customer);
  

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      var p = createElem("p");
      var item = createElem(null, true, checkboxes[i].value);
      p.appendChild(item);
      display.appendChild(p);
    }
  }
}

function createElem(type, needTextNode, text) {
  if (needTextNode) {
    return document.createTextNode(text);
  }
  if (type)
    return document.createElement(type);
}