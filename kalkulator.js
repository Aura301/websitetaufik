let currentNumber = '';
let previousNumber = '';
let operator = null;

function appendNumber(number) {
  if (currentNumber.length < 12) {
    currentNumber += number;
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById('display').value = currentNumber || '0';
}

function clearDisplay() {
  currentNumber = '';
  previousNumber = '';
  operator = null;
  updateDisplay();
}

function setOperation(op) {
  if (currentNumber === '') return;
  if (previousNumber !== '') {
    calculate();
  }
  operator = op;
  previousNumber = currentNumber;
  currentNumber = '';
}

function calculate() {
  if (previousNumber === '' || currentNumber === '' || operator === null) return;
  const num1 = parseFloat(previousNumber);
  const num2 = parseFloat(currentNumber);

  switch (operator) {
    case '+':
      currentNumber = (num1 + num2).toString();
      break;
    case '-':
      currentNumber = (num1 - num2).toString();
      break;
    case '*':
      currentNumber = (num1 * num2).toString();
      break;
    case '/':
      currentNumber = num2 !== 0 ? (num1 / num2).toString() : 'Error';
      break;
  }

  operator = null;
  previousNumber = '';
  updateDisplay();
}
