function calculator() {
    // Get user input for the two numbers and the operation
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Enter the operation (+, -, *, /, %):");

    let result;

    // Perform the selected operation
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            // Check for division by zero
            if (num2 === 0) {
                alert("Error: Division by zero is not allowed.");
                return;
            }
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        default:
            alert("Invalid operation! Please enter one of +, -, *, /, %.");
            return;
    }

    // Display the result
    alert(`The result of ${num1} ${operation} ${num2} = ${result}`);
}

// Run the calculator
calculator();
