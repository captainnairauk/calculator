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

console.log("Add: ", add(5, 3));
console.log("Subtract: ", subtract(5, 3));
console.log("Multiply: ", multiply(5, 3));
console.log("Divide: ", divide(6, 3));
console.log("Divide by zero: ", divide(5, 0));
