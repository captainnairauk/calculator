function add(a, b) {
    return parseInt(a) + parseInt(b);
}//adds two numbers

function subtract(a, b) {
    return parseInt(a) - parseInt(b);
}//subtracts two numbers

function multiply(a, b) {
    return parseInt(a) * parseInt(b);
}//multiplies two numbers

function divide(a, b) {
    return parseInt(a) / parseInt(b);
}//divides two numbers

function operator(a, operator, b) {
    if (operator == add) {
        return add(a, b);
    } else if (operator == subtract) {
        return subtract(a, b);
    } else if (operator == multiply) {
        return multiply(a, b);
    } else {
        return divide(a, b);
    }
}//calls operators (add, subtract, etc) on two numbers and returns the result

const lowerDisplay = document.querySelector(".lower-display");
const upperDisplay = document.querySelector(".upper-display");
const numButtons = document.querySelectorAll(".key");
const operators = document.querySelectorAll(".operator");
const dot = document.querySelector(".dot");

let array1 = [];
let array2 = [];
let x = "0";
let y = "0";

for (let button of numButtons) {
    button.addEventListener("click", function (e) {
        let numbers = e.target.textContent;
        lowerDisplay.textContent = lowerDisplay.textContent + numbers;
        array1.push(lowerDisplay.textContent);
        x = array1[array1.length - 1];
        console.log(x);
    });
};//displays the innerText of numericals(0-9)

for (let operator of operators) {
    operator.addEventListener("click", function (e) {
        let operator = e.target.textContent;
        upperDisplay.textContent = lowerDisplay.textContent + operator;
        lowerDisplay.textContent="";   
    });
};//displays the innerText of operators(+,-,etc.)

// populateOp();

// let numbers = e.target.textContent;
// para.textContent = para.textContent+numbers;
// return para.textContent;
// if(para.textContent.length>9){
//     output.addEventListener(function)
//     let integer = parseInt(para.textContent);
//     let exponents = integer.toExponential(2);
//     para.textContent=exponents;
//     console.log(integer);
// }







