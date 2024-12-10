// JavaScript to perform the calculation
window.onload = function () {
    // Get references to the input fields, dropdown, button, and result paragraph
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const operationSelect = document.getElementById("operation");
    const calculateButton = document.getElementById("calculate");
    const resultParagraph = document.getElementById("result");

    // Function to perform the calculation
    calculateButton.addEventListener("click", function () {
        // Get the values from the inputs and the selected operation
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const operation = operationSelect.value;

        // Check for invalid inputs
        if (isNaN(num1) || isNaN(num2)) {
            resultParagraph.textContent = "Result: Please enter valid numbers.";
            return;
        }

        // Perform the selected operation
        let result;
        if (operation === "add") {
            result = num1 + num2;
        } else if (operation === "subtract") {
            result = num1 - num2;
        } else if (operation === "multiply") {
            result = num1 * num2;
        } else if (operation === "divide") {
            if (num2 === 0) {
                resultParagraph.textContent = "Result: Division by zero is not allowed.";
                return;
            }
            result = num1 / num2;
        }

        // Display the result
        resultParagraph.textContent = `Result: ${result}`;
    });
};
