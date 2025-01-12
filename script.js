// Calculator Variables
let firstOperand = "";
let secondOperand = "";
let currentOperator = null;
let shouldResetDisplay = false;

// Get DOM Elements
const display = document.getElementById("display");
const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.getElementById("equals");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
const dotButton = document.getElementById("dot");

// Basic Math Functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b === 0 ? null : a / b);

// Operate Function
function operate(a, b, operator) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return null;
  }
}

// Reset the display
function resetDisplay() {
  display.textContent = "0";
  shouldResetDisplay = false;
}

// Clear all calculator data
function clearAll() {
  firstOperand = "";
  secondOperand = "";
  currentOperator = null;
  resetDisplay();
}

// Append number to display
function appendNumber(number) {
  if (display.textContent === "0" || shouldResetDisplay) resetDisplay();
  display.textContent += number;
}

// Set the operator
function setOperator(operator) {
  if (currentOperator !== null) evaluate();
  firstOperand = display.textContent;
  currentOperator = operator;
  shouldResetDisplay = true;
}

// Evaluate the current operation
function evaluate() {
  if (currentOperator === null || shouldResetDisplay) return;
  if (currentOperator === "/" && display.textContent === "0") {
    display.textContent = "Cannot divide by zero!";
    return;
  }
  secondOperand = display.textContent;
  display.textContent = roundResult(
    operate(firstOperand, secondOperand, currentOperator)
  );
  firstOperand = display.textContent;
  currentOperator = null;
}

// Round result to 3 decimal places
function roundResult(result) {
  return Math.round(result * 1000) / 1000;
}

// Delete the last digit
function deleteLastCharacter() {
  display.textContent = display.textContent.slice(0, -1) || "0";
}

// Add a decimal point
function appendDot() {
  if (shouldResetDisplay) resetDisplay();
  if (!display.textContent.includes(".")) display.textContent += ".";
}

// Handle keyboard input
function handleKeyboardInput(e) {
  if (e.key >= "0" && e.key <= "9") {
    appendNumber(e.key);
  } else if (e.key === ".") {
    appendDot();
  } else if (e.key === "Enter" || e.key === "=") {
    evaluate();
  } else if (e.key === "Backspace") {
    deleteLastCharacter();
  } else if (e.key === "Escape") {
    clearAll();
  } else if (["+", "-", "*", "/"].includes(e.key)) {
    setOperator(e.key);
  }
  // Ignore any other keys
}

// Event Listeners
numberButtons.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);

operatorButtons.forEach((button) =>
  button.addEventListener("click", () => setOperator(button.dataset.operator))
);

equalsButton.addEventListener("click", evaluate);
clearButton.addEventListener("click", clearAll);
deleteButton.addEventListener("click", deleteLastCharacter);
dotButton.addEventListener("click", appendDot);

window.addEventListener("keydown", handleKeyboardInput);
