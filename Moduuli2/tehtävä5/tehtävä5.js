'use strict';

function collectNumbers() {
    let numbers = [];

    while (true) {
        let userInput = prompt("Enter a number:");
        let number = parseInt(userInput);  // Convert input to an integer

        // If the input is a valid number
        if (!isNaN(number)) {
            // Check if the number is already in the array
            if (numbers.includes(number)) {
                alert("This number has already been entered. Stopping the program.");
                break;  // Stop the loop if the number is already entered
            }

            // Add the new number to the array
            numbers.push(number);
        } else {
            alert("Please enter a valid number.");
        }
    }

    // Sort the numbers array in ascending order
    numbers.sort(function(a, b) {
        return a - b;  // Sorting in ascending order
    });

    // Print the sorted numbers to the console
    console.log("The given numbers in ascending order:");
    console.log(numbers);
}
