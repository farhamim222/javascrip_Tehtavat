'use strict';

// Function to simulate a dice roll (returns a random number between 1 and 6)
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Main function that keeps rolling the dice until it gets a 6
function rollUntilSix() {
    let rolls = [];  // Array to store all dice rolls

    while (true) {
        let result = rollDice();  // Get a dice roll result

        // Add the result to the rolls array
        rolls.push(result);

        // If the result is 6, stop the loop
        if (result === 6) {
            break;
        }
    }

    // Display the results in an unordered list (<ul>) on the page
    let ul = document.createElement('ul');  // Create a <ul> element
    rolls.forEach(function(roll) {
        let li = document.createElement('li');  // Create a <li> element for each roll
        li.textContent = roll;  // Set the text content of the <li> to the roll result
        ul.appendChild(li);  // Append the <li> to the <ul>
    });

    // Append the <ul> to the body or any other container element
    document.body.appendChild(ul);
}
