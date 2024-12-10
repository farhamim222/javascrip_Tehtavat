// JavaScript to read form input and display the name
window.onload = function () {
    // Get the form element
    const form = document.getElementById("nameForm");

    // Add a submit event listener to the form
    form.addEventListener("submit", function (event) {
        // Prevent the default form submission action
        event.preventDefault();

        // Get the first name and last name input values using attribute selectors
        const firstName = document.querySelector("input[name='firstName']").value;
        const lastName = document.querySelector("input[name='lastName']").value;

        // Display the full name in the paragraph with id "target"
        const targetParagraph = document.getElementById("target");
        targetParagraph.textContent = `Your name is ${firstName} ${lastName}`;
    });
};
