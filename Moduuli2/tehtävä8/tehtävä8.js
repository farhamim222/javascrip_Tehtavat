// Function to concatenate array elements into a single string
function concat(array) {
    let result = "";  // Initialize an empty string to store the result

    // Loop through each element in the array and add it to the result string
    for (let i = 0; i < array.length; i++) {
        result += array[i];  // Concatenate each string element
    }

    return result;  // Return the concatenated string
}

// Hardcoded array of strings
const names = ["Johnny", "DeeDee", "Joey", "Marky"];

// Call the concat function and store the result
const concatenatedString = concat(names);

// Print the result to the console (for debugging purposes)
console.log(concatenatedString);

// To display the result in the HTML document, we can use this:
document.body.innerHTML = `<h2>Concatenated String:</h2><p>${concatenatedString}</p>`;

