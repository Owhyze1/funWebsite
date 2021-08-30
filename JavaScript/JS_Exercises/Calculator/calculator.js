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
      screenText;
    });
  }

  document.body.addEventListener('keypress', function(e) {
    let key = e.keyCode;

    if (key >= 48 && key <= 57) {
      screenText += e.key;
    } else if (key === 13 || key === 61) {
      console.log('Equal Key');
      calculate(screenText);
    } else if (key === 42) {
      screenText = addOperator(`*`, screenText);
    } else if (key === 43) {
      screenText = addOperator(`+`, screenText);
    } else if (key === 45) {
      screenText = addOperator('-', screenText);
    } else if (key === 47) {
      screenText = addOperator('/', screenText);
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

function addOperator(operator, expression) {
  let length = expression.length;

  // check to see if an operator was already added to the expression. If so, replace with new operator chosen
  if (isOperator(expression[length - 1])) {
    return expression.slice(0, length - 1) + operator;
  }
  return expression + operator;
}

if (clearButton) {
  clearButton.addEventListener('click', function() {
    deleteCurrentExpression();
    calculatorScreen.innerHTML = '';
  });
}

if (equalButton) {
  equalButton.addEventListener('click', function() {
    if (isOperator(screenText[screenText.length - 1]) || screenText === '') {
      alert('Choose a number');
    } else {
      calculate(screenText);
    }
  });
}


function calculate(string) {
  let numbers = string.split(/\D/);
  let op = string.split(/\d+/);
  op = op.slice(1, op.length - 1);

  console.log(string);

  let multiplyOrDivide = (string, op, numbers, operator) => {
    let index = op.indexOf(operator);
    if (index === -1) {
      return false;
    } else {
      let value;
      if (operator === '*') {
        value = numbers[index] * numbers[index + 1];
      } else if (operator === '/') {
        value = numbers[index] / numbers[index + 1];
      }
      op.splice(index, 1);
      numbers.splice(index, 2, value);
      // console.log('NEW');
      // console.log(numbers);
      // console.log(op);
    }
  }
  multiplyOrDivide(string, op, numbers, '*');
  multiplyOrDivide(string, op, numbers, '/');

  let addOrSubtract = (string, op, numbers) => {
    let result = numbers[0];
    for (let i = 0; i < op.length; i++) {
      if (op[i] === '+') {
        result += Number(numbers[i + 1]);
      } else if (op[i] === '-') {
        result -= Number(numbers[i + 1]);
      }
    }
    console.log(`Result: ${result}`);
    return result;
  }
  let result = addOrSubtract(string, op, numbers);
  calculatorScreen.innerHTML = String(result);
}

function deleteCurrentExpression() {
  screenText = '';
  currentOperator = '';
}

function isOperator(op) {
  if (op === '+' || op === '-' || op === '/' || op === '*') {
    return true;
  }
  return false;
}