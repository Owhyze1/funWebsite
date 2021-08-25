var allButtons = document.querySelectorAll('button');
var calculatorScreen = document.getElementById('screen');

// all buttons should display their text on the screen
if (allButtons && calculatorScreen) {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', function(e) {
      calculatorScreen.innerHTML = e.target.innerHTML;
    });
  }
}