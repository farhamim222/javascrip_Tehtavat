window.onload = function () {
    const picArray = [
        {
            title: "Beautiful Landscape",
            medium_image: "lsm.jpg",
            caption: "A serene view of the mountains.",
            description: "This image showcases a breathtaking mountain landscape with lush greenery and a vibrant sky."
        },
        {
            title: "City Skyline",
            medium_image: "city skyline.jpg",
            caption: "The city at dusk.",
            description: "The city comes alive with lights as the sun sets, offering a perfect skyline view."
        },
        {
            title: "Forest Trail",
            medium_image: "forest trail.jpg",
            caption: "A peaceful forest trail.",
            description: "Experience the tranquility of walking through a quiet forest trail surrounded by tall trees."
        }
    ];

    // Reference the <section> element where the articles will be added
    const sectionElement = document.getElementById("articleSection");

    // Reference modal elements
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const closeModal = document.getElementById("closeModal");

    // Loop through the picArray and create <article> elements
    picArray.forEach(item => {
        // Create <article>
        const article = document.createElement("article");
        article.classList.add("card");

        // Create and append the <h2> title
        const title = document.createElement("h2");
        title.textContent = item.title;
        article.appendChild(title);

        // Create and append the <figure>
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        img.src = item.medium_image;
        img.alt = item.title; // Alt attribute
        figure.appendChild(img);

        const caption = document.createElement("figcaption");
        caption.textContent = item.caption;
        figure.appendChild(caption);

        article.appendChild(figure);

        // Create and append the <p> description
        const description = document.createElement("p");
        description.textContent = item.description;
        article.appendChild(description);

        // Add click event to open the modal
        article.addEventListener("click", function () {
            modalImage.src = item.large_image; // Set the large image
            modalImage.alt = item.title; // Set the alt text
            modal.showModal(); // Open the modal
        });

        // Append the article to the section
        sectionElement.appendChild(article);
    });

    // Event to close the modal
    closeModal.addEventListener("click", function () {
        modal.close(); // Close the modal
    });
};
