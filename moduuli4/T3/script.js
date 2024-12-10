document.getElementById("searchForm").addEventListener("submit", function (event) {
  event.preventDefault();  // Prevent the form from submitting and reloading the page

  const query = document.getElementById("query").value;

  if (query) {

    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then(response => response.json())  // Parse the response to JSON
      .then(data => {

        const resultsContainer = document.getElementById("results");
        resultsContainer.innerHTML = '';  // Clear any existing results


        data.forEach(tvShow => {

          const article = document.createElement("article");


          const showDetails = document.createElement("div");
          showDetails.classList.add("show-details");

          const img = document.createElement("img");
          img.src = tvShow.show.image?.medium || ''; // Optional chaining for missing images
          img.alt = tvShow.show.name || 'No image available'; // Fallback text for missing images

          const h2 = document.createElement("h2");
          h2.textContent = tvShow.show.name;

          const link = document.createElement("a");
          link.href = tvShow.show.url;
          link.textContent = 'More details';
          link.target = "_blank"; // Open link in new tab

          showDetails.appendChild(img);
          showDetails.appendChild(h2);
          showDetails.appendChild(link);

          const showSummary = document.createElement("div");
          showSummary.classList.add("show-summary");
          showSummary.innerHTML = tvShow.show.summary || 'No summary available';  // Fallback for missing summary

          article.appendChild(showDetails);
          article.appendChild(showSummary);

          resultsContainer.appendChild(article);
        });
      })
      .catch(error => {

        console.error("Error fetching data:", error);
      });
  } else {

    alert("Please enter a TV series name.");
  }
});
