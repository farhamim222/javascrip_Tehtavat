// JavaScript code to dynamically create <option> elements using createElement and appendChild
window.onload = function () {
    // Array of students with their IDs
    const students = [
        { id: "2345768", name: "John" },
        { id: "2134657", name: "Paul" },
        { id: "5423679", name: "Jones" }
    ];

    // Find the target element
    const targetElement = document.getElementById("target");

    // Create a <select> element
    const select = document.createElement("select");

    // Loop through the students array and create <option> elements
    for (let i = 0; i < students.length; i++) {
        const option = document.createElement("option"); // Create an <option> element
        option.value = students[i].id; // Set the value attribute
        option.textContent = students[i].name; // Set the visible text
        select.appendChild(option); // Append the <option> to the <select> element
    }

    // Append the <select> element to the target element
    targetElement.appendChild(select);
};
