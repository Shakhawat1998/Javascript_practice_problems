const prompt = require("prompt-sync")();


function simpleCalculator() {
    const num1 = parseFloat(prompt("Enter first number: "));
    const num2 = parseFloat(prompt("Enter second number: "));
    const operation = prompt("Enter operation (+, -, *, /): ");

    let result;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;35
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Cannot divide by zero";
            }
            break;
        default:
            result = "Invalid operation";
    }

    console.log("Result: " + result);
}

simpleCalculator();
