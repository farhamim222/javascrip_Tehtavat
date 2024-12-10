'use strict';

function getParticipants() {
    // Get the number of participants
    let numParticipants = prompt("Enter the number of participants:");

    // Ensure the input is a number and greater than 0
    numParticipants = parseInt(numParticipants);
    if (isNaN(numParticipants) || numParticipants <= 0) {
        alert("Please enter a valid number of participants.");
        return;
    }

    let participants = [];

    // Get names of participants
    for (let i = 0; i < numParticipants; i++) {
        let name = prompt("Enter the name of participant " + (i + 1) + ":");
        participants.push(name);
    }

    // Sort names alphabetically
    participants.sort();

    // Display the names in an ordered list
    let resultHtml = "<ol>";
    for (let i = 0; i < participants.length; i++) {
        resultHtml += "<li>" + participants[i] + "</li>";
    }
    resultHtml += "</ol>";

    // Show the result on the webpage
    document.getElementById("result").innerHTML = resultHtml;
}
