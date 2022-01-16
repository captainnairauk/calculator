function add(a, b) {
    let answer = parseFloat(a) + parseFloat(b);
    return answer;
}//adds two numbers

function subtract(a, b) {
    let answer = parseFloat(a) - parseFloat(b);
    return answer;
}//subtracts two numbers

function multiply(a, b) {
    let answer = parseFloat(a) * parseFloat(b);
    return answer;
}//multiplies two numbers

function divide(a, b) {
    let answer = parseFloat(a) / parseFloat(b);
    return answer;
}//divides two numbers

function operate(a, operator, b) {
    if (operator === "+") {
        return add(a, b).toFixed(2);
    } else if (operator === "-") {
        return subtract(a, b).toFixed(2);
    } else if (operator === "x") {
        return multiply(a, b).toFixed(2);
    } else {
        return divide(a, b).toFixed(2);
    }
}//calls operators (add, subtract, etc) on two numbers and returns the result

const lowerDisplay = document.querySelector(".lower-display");
const upperDisplay = document.querySelector(".upper-display");
const numButtons = document.querySelectorAll(".key");
const operators = document.querySelectorAll(".operator");
const allClear = document.querySelector("#AC");
const undo = document.querySelector("#undo");

let array1 = [];
let array2 = [];

for (let button of numButtons) {
    lowerDisplay.textContent="0";
    button.addEventListener("click", function (e) {
        let numbers = e.target.textContent;
        lowerDisplay.textContent = lowerDisplay.textContent + numbers;
        if (lowerDisplay.textContent.includes(".")) {
            document.getElementById("decimal").disabled = true;
        }
    });
};//displays the innerText of numericals(0-9) & decimal point

for (let operator of operators) {
    operator.addEventListener("click", function (e) {
        let operator = e.target.textContent;
        array1.push(lowerDisplay.textContent);
        array2.push(operator);
        let a = array1[array1.length - 2];
        let b = array1[array1.length - 1];
        let c = array2[array2.length - 2];
        let d = array2[array2.length - 1];
        document.getElementById("decimal").disabled = false;
        upperDisplay.textContent = lowerDisplay.textContent + operator;
        lowerDisplay.textContent = "";
        console.table(array1);
        console.table(array2);
        console.log(a);
        console.log(b);
        if (d === "=") {
            upperDisplay.textContent = a + c + b + d;
            lowerDisplay.textContent = operate(a, c, b);
            document.getElementById("decimal").disabled = true;
        }
        else if (c === "+") {
            upperDisplay.textContent = operate(a, c, b) + d;
            lowerDisplay.textContent = "";
            array1.push(operate(a, c, b));
        }
        else if (c === "-") {
            upperDisplay.textContent = operate(a, c, b) + d;
            lowerDisplay.textContent = "";
            array1.push(operate(a, c, b));
        }
        else if (c === "x") {
            upperDisplay.textContent = operate(a, c, b) + d;
            lowerDisplay.textContent = "";
            array1.push(operate(a, c, b));
        }
        else if (c === "÷") {
            upperDisplay.textContent = operate(a, c, b) + d;
            lowerDisplay.textContent = "";
            array1.push(operate(a, c, b));
        }
    });

};//displays the innerText of operators(+,-,etc.)

allClear.addEventListener("click", function () {
    lowerDisplay.textContent = "";
    upperDisplay.textContent = "";
    location.reload();
}); //wipes out existing data.


undo.addEventListener("click", function () {
    lowerDisplay.textContent = lowerDisplay.textContent.substring(0, lowerDisplay.textContent.length - 1);
    lowerDisplay.textContent;
}); //this is backspace button, user can undo if they click the wrong number.
