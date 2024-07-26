let displayNumber = '';

function populate(num){
    displayNumber += num;
}


let firstNumber = '';
let secondNumber = '';
let operator = '';

const numbers = [];
numbers.push(document.querySelector("button.zero"));
numbers.push(document.querySelector("button.one"));
numbers.push(document.querySelector("button.two"));
numbers.push(document.querySelector("button.three"));
numbers.push(document.querySelector("button.four"));
numbers.push(document.querySelector("button.five"));
numbers.push(document.querySelector("button.six"));
numbers.push(document.querySelector("button.seven"));
numbers.push(document.querySelector("button.eight"));
numbers.push(document.querySelector("button.nine"));


const operations = [];
operations.push(document.querySelector("button.plus"));
operations.push(document.querySelector("button.minus"));
operations.push(document.querySelector("button.times"));
operations.push(document.querySelector("button.divide"));

const equalToButton = document.querySelector("button.equal-to");
const clearButton = document.querySelector("button.clear");

const display = document.querySelector(".display");

for (let number of numbers){
    number.addEventListener("click", () => {
        populate(number.textContent);
        display.textContent = displayNumber;
    });
}

for (let operation of operations){
    operation.addEventListener("click", () => {
        if (!firstNumber){ 
            firstNumber = displayNumber;
            displayNumber = '';
        }
        else if (!secondNumber){
            secondNumber = displayNumber;
            displayNumber = operate(firstNumber, operator, secondNumber);
            if (displayNumber == "Can't divide by zero!"){
                display.textContent = displayNumber;
                displayNumber = '';
                operator = '';
            }
            else {
                display.textContent = Math.round(displayNumber*10000)/10000;
            }
            firstNumber = displayNumber;
            secondNumber = '';
            displayNumber = '';
        }
        operator = operation.textContent;
    });
}

equalToButton.addEventListener("click", () => {
    if (firstNumber){
        secondNumber = displayNumber;
        displayNumber = operate(firstNumber, operator, secondNumber);
        if (displayNumber == "Can't divide by zero!"){
            display.textContent = displayNumber;
            displayNumber = '';
            operator = '';
        }
        else {
            display.textContent = Math.round(displayNumber*10000)/10000;
        }
        firstNumber = '';
        secondNumber = '';
        operator = '';
    }
});

clearButton.addEventListener("click", () => {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    displayNumber = '';
    display.textContent = +displayNumber;
});



function add(a, b){
    return (a+b);
};

function substract(a, b){
    return (a-b);
};

function multiply(a, b){
    return (a*b);
};

function divide(a, b){
    return (a/b);
}

function operate(firstNumber, operator, secondNumber){
    firstNumber = +firstNumber;
    secondNumber = +secondNumber;
    let result = 0;
    switch (operator){
        case "+":
            result = add(firstNumber, secondNumber);
            break;
        
        case "-":
            result = substract(firstNumber, secondNumber);
            break;
        
        case "×":
            result = multiply(firstNumber, secondNumber);
            break;
        
        case "÷":
            if (secondNumber == 0){
                firstNumber = '';
                secondNumber = '';
                operator = '';
                displayNumber = '';
                result = "Can't divide by zero!";
            }
            else {
                result = divide(firstNumber, secondNumber);
            }
            break;
    }
    return result;
}
