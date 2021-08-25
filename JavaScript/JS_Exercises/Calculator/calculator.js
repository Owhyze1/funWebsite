const allButtons = document.querySelectorAll('button');
const digits = document.querySelectorAll('[class="digits"]');
const operators = document.querySelectorAll('[class="operators"]');

const clearButton = document.getElementById('clear');
const equalButton = document.getElementById('equal')
const calculatorScreen = document.getElementById('screen');

let screenText = '';
let currentOperator = '';


// all buttons should display their text on the screen, except clear(C) and equal(=)
if (digits && calculatorScreen) {
  for (let i = 0; i < digits.length; i++) {
    digits[i].addEventListener('click', function(e) {
      screenText += e.target.innerHTML;
      calculatorScreen.innerHTML = screenText;
      // console.log(`Text: ${screenText}`);
    });
  }
}

if (operators) {
  for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function(e) {
      if (currentOperator === '' && screenText !== '') {
        currentOperator = e.target.innerHTML;
        console.log(`Operator: ${currentOperator}`);
        screenText += ` ${currentOperator} `;
        calculatorScreen.innerHTML = screenText;
        // console.log(`Text: ${screenText}`);
      }
    });
  }
}

if (clearButton) {
  clearButton.addEventListener('click', function() {
    deleteCurrentExpression();
    calculatorScreen.innerHTML = '';
    console.log(`Cleared? --> ${currentOperator === '' && screenText === '' && calculatorScreen.innerHTML === ''}`);
  });
}


if (equalButton) {
  equalButton.addEventListener('click', function() {
    let pattern = /(\+|\-|\*|\/)/;
    let expression = screenText.split(pattern);

    let result = '';

    if (screenText !== '') {
      console.log(`Expression: ${expression}`);

      let first = Number(expression[0]);
      let arithmeticOperator = expression[1];
      let second = Number(expression[2]);

      if (first && second) {
        if (arithmeticOperator === '+') {
          result = first + second;
        } else if (arithmeticOperator === '-') {
          result = first - second;
        } else if (arithmeticOperator === '*') {
          result = first * second;
        } else if (arithmeticOperator === '/') {
          result = first / second;
        }

        screenText += ` = ${result}`;
        calculatorScreen.innerHTML = screenText;
        // prepare for possible new calculation
        deleteCurrentExpression();
      }
    }
  });

  function deleteCurrentExpression() {
    screenText = '';
    currentOperator = '';
  }
}