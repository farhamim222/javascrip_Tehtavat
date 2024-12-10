// When the form is submitted, execute the search
document.getElementById("searchForm").addEventListener("submit", function (event) {
  event.preventDefault();  // Prevent the form from submitting normally

  const query = document.getElementById("query").value;  // Get the value from the input field
  if (query) {
    // Fetch data from TVMaze API
    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then(response => response.json())  // Parse the JSON response
      .then(data => {
        // Display the result in the console
        console.log(data);

        // Display the result on the page
        const resultsContainer = document.getElementById("results");
        resultsContainer.textContent = JSON.stringify(data, null, 2);  // Pretty print JSON
      })
      .catch(error => {
        console.error("Error fetching data:", error);  // Handle any errors
      });
  } else {
    alert("Please enter a TV series name.");
  }
});
