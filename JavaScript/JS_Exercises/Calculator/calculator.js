const allButtons = document.querySelectorAll('button');
const digits = document.querySelectorAll('[class="digits"]');
const operators = document.querySelectorAll('[class="operators"]');

const clearButton = document.getElementById('clear');
const equalButton = document.getElementById('equal')
const calculatorScreen = document.getElementById('screen');

let screenText = '';

// all buttons should display their text on the screen, except clear(C) and equal(=)
if (digits && calculatorScreen) {
  for (let i = 0; i < digits.length; i++) {
    digits[i].addEventListener('click', function(e) {
      screenText += e.target.innerHTML;
      calculatorScreen.innerHTML = screenText;
      console.log(`Text: ${screenText}`);
    });
  }

  document.body.addEventListener('keypress', function(e) {
    let key = e.keyCode;

    if (key >= 48 && key <= 57) {
      screenText += e.key;
    } else if (key === 13 || key === 61) {
      screenText = addOperator(` = `, screenText);
      calculate(screenText);
    } else if (key === 42) {
      screenText = addOperator(` * `, screenText);
    } else if (key === 43) {
      screenText = addOperator(` + `, screenText);
    } else if (key === 45) {
      screenText = addOperator(` - `, screenText);
    } else if (key === 47) {
      screenText = addOperator(` / `, screenText);
    }
    calculatorScreen.innerHTML = screenText;
  });
}

if (operators) {
  for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function(e) {

      if (screenText !== '') {
        screenText = addOperator(e.target.innerHTML, screenText);
        calculatorScreen.innerHTML = screenText;
      }
    });
  }
}

if (clearButton) {
  clearButton.addEventListener('click', function() {
    deleteCurrentExpression();
    calculatorScreen.innerHTML = '';
  });
}

if (equalButton) {
  equalButton.addEventListener('click', function() {
    console.log('Click event for equal button');
    calculate(screenText);
  });
}

function deleteCurrentExpression() {
  screenText = '';
  currentOperator = '';
}

function calculate(string) {
  let expression = string.split(' ');
  console.log(expression);
}

function addOperator(operator, expression) {
  let length = expression.length;
  operator = ` ${operator} `;

  if (expression[length - 1] === ' ') {
    return expression.slice(0, length - 3) + operator;
  }
  return expression + operator;
}