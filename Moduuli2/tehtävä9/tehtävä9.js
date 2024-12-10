// Function to filter even numbers from the input array
function even(array) {
    let evenArray = [];  // Create a new array to store even numbers

    // Loop through the original array and check for even numbers
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {  // If the number is even
            evenArray.push(array[i]);  // Add it to the evenArray
        }
    }

    return evenArray;  // Return the array containing even numbers
}

// Hardcoded array of numbers
const originalArray = [2, 7, 4];

// Call the even() function and store the result in a new array
const evenNumbersArray = even(originalArray);

// Print both the original array and the new array to the console
console.log("Original Array:", originalArray);
console.log("Even Numbers Array:", evenNumbersArray);
