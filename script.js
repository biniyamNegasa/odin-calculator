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
    switch (operator){
        case "+":
            add(firstNumber, secondNumber);
            break;
        
        case "-":
            substract(firstNumber, secondNumber);
            break;
        
        case "*":
            multiply(firstNumber, secondNumber);
            break;
        
        case "/":
            divide(firstNumber, secondNumber);
            break;
    }
}

let firstNumber;
let secondNumber;
let operator;

