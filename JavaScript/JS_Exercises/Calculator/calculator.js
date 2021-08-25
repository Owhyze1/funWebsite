const allButtons = document.querySelectorAll('button');
const digits = document.querySelectorAll('[class="digits"]');
const calculatorScreen = document.getElementById('screen');

let screenText = '';

console.log(digits);

// all buttons should display their text on the screen
if (digits && calculatorScreen) {
  for (let i = 0; i < digits.length; i++) {
    digits[i].addEventListener('click', function(e) {
      screenText += e.target.innerHTML;
      calculatorScreen.innerHTML = screenText;
    });
  }
}


function validateScreenText(text) {
  /*
    - prevent duplicate arithmetic operators

  */
}