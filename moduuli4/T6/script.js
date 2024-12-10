// Function to fetch jokes based on the search term
function searchJokes(searchTerm) {
    // Make an API request to the Chuck Norris jokes search endpoint
    fetch(`https://api.chucknorris.io/jokes/search?query=${searchTerm}`)
        .then(response => response.json())  // Parse the JSON response
        .then(data => {
            // Clear previous jokes from the container
            const jokeContainer = document.getElementById('joke-container');
            jokeContainer.innerHTML = '';  // Clear previous jokes

            // Check if there are any jokes in the response
            if (data.result && data.result.length > 0) {
                // Loop through each joke and display it in the desired format
                data.result.forEach(joke => {
                    // Create an article element for each joke
                    const article = document.createElement('article');
                    const paragraph = document.createElement('p');
                    paragraph.textContent = joke.value;  // Add the joke text
                    article.appendChild(paragraph);  // Append the paragraph to the article

                    // Append the article to the joke container
                    jokeContainer.appendChild(article);
                });
            } else {
                // If no jokes found, display a message
                jokeContainer.innerHTML = '<p>No jokes found for that search term.</p>';
            }
        })
        .catch(error => {
            // Handle any errors that occur during the fetch
            console.error('Error fetching jokes:', error);
        });
}

// Handle form submission
const form = document.getElementById('search-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting normally
    const searchTerm = document.getElementById('search-input').value;  // Get the search term
    if (searchTerm) {
        searchJokes(searchTerm);  // Call the function to search for jokes
    }
});
