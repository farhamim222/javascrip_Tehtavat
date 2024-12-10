// JavaScript to parse and calculate user input
window.onload = function () {
    // Get references to the input field, button, and result paragraph
    const calculationInput = document.getElementById("calculation");
    const calculateButton = document.getElementById("calculate");
    const resultParagraph = document.getElementById("result");

    // Function to parse and calculate the input
    calculateButton.addEventListener("click", function () {
        const input = calculationInput.value.trim(); // Get the user's input and trim whitespace

        let result;

        // Check for addition
        if (input.includes("+")) {
            const [operand1, operand2] = input.split("+").map(Number);
            if (isNaN(operand1) || isNaN(operand2)) {
                resultParagraph.textContent = "Result: Invalid input.";
                return;
            }
            result = operand1 + operand2;

        // Check for subtraction
        } else if (input.includes("-")) {
            const [operand1, operand2] = input.split("-").map(Number);
            if (isNaN(operand1) || isNaN(operand2)) {
                resultParagraph.textContent = "Result: Invalid input.";
                return;
            }
            result = operand1 - operand2;

        // Check for multiplication
        } else if (input.includes("*")) {
            const [operand1, operand2] = input.split("*").map(Number);
            if (isNaN(operand1) || isNaN(operand2)) {
                resultParagraph.textContent = "Result: Invalid input.";
                return;
            }
            result = operand1 * operand2;

        // Check for division
        } else if (input.includes("/")) {
            const [operand1, operand2] = input.split("/").map(Number);
            if (isNaN(operand1) || isNaN(operand2)) {
                resultParagraph.textContent = "Result: Invalid input.";
                return;
            }
            if (operand2 === 0) {
                resultParagraph.textContent = "Result: Division by zero is not allowed.";
                return;
            }
            result = Math.floor(operand1 / operand2); // Integer division

        // Invalid input
        } else {
            resultParagraph.textContent = "Result: Invalid input. Use +, -, *, or /.";
            return;
        }

        // Display the result
        resultParagraph.textContent = `Result: ${result}`;
    });
};
