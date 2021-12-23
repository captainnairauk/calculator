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

function operator(a, b, operator) {
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

const buttons = document.querySelectorAll(".key");
for (let button of buttons) {
    button.addEventListener("click", function (e) {
        let numbers = e.target.textContent;
        para.textContent = para.textContent+numbers;
        if(para.textContent.length>9){
            output.addEventListener(function)
            // let integer = parseInt(para.textContent);
            // let exponents = integer.toExponential(2);
            // para.textContent=exponents;
            // console.log(integer);
        }
    });
}//displays the innerText after pressing the buttons (0-9)



const output = document.querySelector(".output");
const para = document.createElement("p");
para.classList.add("content");
output.appendChild(para);






