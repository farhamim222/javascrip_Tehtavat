'use strict';

function collectNumbers() {
    let numbers = [];

    // Keep asking for numbers until the user enters zero
    while (true) {
        let userInput = prompt("Enter a number (enter 0 to stop):");
        let number = parseInt(userInput);  // Convert input to integer

        // If the input is zero, stop the loop
        if (number === 0) {
            break;
        }

        // If the input is a valid number, add it to the array
        if (!isNaN(number)) {
            numbers.push(number);
        } else {
            alert("Please enter a valid number.");
        }
    }

    // Sort the numbers array from largest to smallest
    numbers.sort(function(a, b) {
        return b - a;  // Sorting in descending order
    });

    // Print the sorted numbers to the console
    console.log("Numbers in descending order:");
    console.log(numbers);
}
