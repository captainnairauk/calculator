function add(a, b) {
    return a + b;
}//adds two numbers

function subtract(a, b) {
    return a - b;
}//subtracts two numbers

function multiply(a, b) {
    return a * b;
}//multiplies two numbers

function divide(a, b) {
    return a / b;
}//divides two numbers

function operate(a, operator, b) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "x") {
        return multiply(a, b);
    } else {
        return divide(a, b);
    }
}//calls operators (add, subtract, etc) on two numbers and returns the result

// console.log(operate(78,"/",2));
const lowerDisplay = document.querySelector(".lower-display");
const upperDisplay = document.querySelector(".upper-display");
const numButtons = document.querySelectorAll(".key");
const operators = document.querySelectorAll(".operator");
const dot = document.querySelector(".dot");

let array1 = ["0"];
let array2 = ["0"];



for (let button of numButtons) {
    button.addEventListener("click", function (e) {
        let numbers = e.target.textContent;
        lowerDisplay.textContent = lowerDisplay.textContent + numbers;
    });
};//displays the innerText of numericals(0-9)

for (let operator of operators) {
    operator.addEventListener("click", function (e) {
        let operator = e.target.textContent;
        array2.push(operator);
        upperDisplay.textContent = lowerDisplay.textContent + operator;
        array1.push(lowerDisplay.textContent);
        lowerDisplay.textContent = "";
        let a = array1[array1.length - 2];
        let b = array1[array1.length - 1];
        let c = array2[array2.length - 2];
        let d = array2[array2.length - 1];
        console.table(a);
        if (operator === "=") {
            upperDisplay.textContent = a + c + b + d;
            lowerDisplay.textContent = operate(a, c, b);
        }
        // lowerDisplay.textContent="";
    });
};//displays the innerText of operators(+,-,etc.)









