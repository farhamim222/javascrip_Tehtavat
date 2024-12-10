// Function to fetch a random Chuck Norris joke
function getRandomJoke() {
    // Send a request to the chucknorris.io API
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())  // Parse the JSON response
        .then(data => {
            // Print only the 'value' property (the joke) to the console
            console.log(data.value);
        })
        .catch(error => {
            // Handle any errors that occur during the fetch
            console.error('Error fetching joke:', error);
        });
}

// Call the function to retrieve and print a random joke
getRandomJoke();
