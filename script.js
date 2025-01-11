let firstNumber = null;
let operator = null;
let secondNumber = null;

firstNumber = 3;
operator = "+";
secondNumber = 5;

console.log(`Operation: ${firstNumber} ${operator} ${secondNumber}`);


function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b == 0) {
    return "Error: Division by zero is undefined.";
  }
  return a / b;
}

