'use strict';

// Function to simulate a dice roll with a custom number of sides
function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;  // Generate a number between 1 and 'sides'
}

// Main function that rolls the dice until it hits the maximum value
function rollUntilMax() {
    let rolls = [];  // Array to store all dice rolls
    let sides = parseInt(prompt("Enter the number of sides on the dice:"));

    // Validate that sides is a valid number and greater than 1
    if (isNaN(sides) || sides < 2) {
        alert("Please enter a valid number greater than 1 for the number of sides.");
        return;
    }

    // Roll the dice until we get the maximum value (sides)
    while (true) {
        let result = rollDice(sides);  // Get a dice roll result

        // Add the result to the rolls array
        rolls.push(result);

        // If the result is equal to the maximum value, stop the loop
        if (result === sides) {
            break;
        }
    }

    // Create a <ul> element to display the results on the page
    let ul = document.createElement('ul');
    rolls.forEach(function(roll) {
        let li = document.createElement('li');  // Create a <li> element for each roll
        li.textContent = roll;  // Set the text content of the <li> to the roll result
        ul.appendChild(li);  // Append the <li> to the <ul>
    });

    // Append the <ul> to the body or another container
    document.body.appendChild(ul);
}
