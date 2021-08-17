var select_all = document.getElementById("select-all");

var shirtCheckbox = document.getElementById("t-shirt");
var waterBottleCheckbox = document.getElementById("water-bottle");
var magnetCheckbox = document.getElementById("magnet");

var souvenirCheckboxes = document.querySelectorAll("[name='souvenirs']");



if (select_all) {

  if (souvenirCheckboxes) {
    select_all.addEventListener('click', function() {
      for (let i = 0; i < souvenirCheckboxes.length; i++) {
        souvenirCheckboxes[i].checked = select_all.checked;
      }
    });

    for (let i = 0; i < souvenirCheckboxes.length; i++) {
      souvenirCheckboxes[i].addEventListener("click", function() {
        select_all.checked = individualCheckboxListener(souvenirCheckboxes);
      });
    }
  }

}


function individualCheckboxListener(checkboxGroup) {
  var initialCheckedStatus = checkboxGroup[0].checked;
  if (checkboxGroup) {
    for (let i = 1; i < checkboxGroup.length; i++) {
      if (initialCheckedStatus !== checkboxGroup[i].checked) {
        return false;
      }
    }
    return initialCheckedStatus;
  }
}



