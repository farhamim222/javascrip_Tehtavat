// JavaScript code to create and populate <article> elements dynamically
window.onload = function () {
    // Array of data (picArray)
    const picArray = [
        {
            title: "Beautiful Landscape",
            medium_image: "landscape.jpg",
            caption: "A serene view of the mountains.",
            description: "This image showcases a breathtaking mountain landscape with lush greenery and a vibrant sky."
        },
        {
            title: "City Skyline",
            medium_image: "city.jpg",
            caption: "The city at dusk.",
            description: "The city comes alive with lights as the sun sets, offering a perfect skyline view."
        },
        {
            title: "Forest Trail",
            medium_image: "forest.jpg",
            caption: "A peaceful forest trail.",
            description: "Experience the tranquility of walking through a quiet forest trail surrounded by tall trees."
        }
    ];

    // Find the <section> element
    const sectionElement = document.querySelector("section");

    // Loop through the picArray and create <article> elements
    for (let i = 0; i < picArray.length; i++) {
        const pic = picArray[i]; // Current object in the array

        // Create the <article> element
        const article = document.createElement("article");
        article.classList.add("card"); // Add the "card" class

        // Create the heading
        const heading = document.createElement("h2");
        heading.textContent = pic.title;
        article.appendChild(heading);

        // Create the <figure> element
        const figure = document.createElement("figure");

        // Create the <img> element
        const img = document.createElement("img");
        img.src = pic.medium_image; // Set the image source
        img.alt = pic.title; // Set the alt attribute
        figure.appendChild(img);

        // Create the <figcaption> element
        const figcaption = document.createElement("figcaption");
        figcaption.textContent = pic.caption; // Set the caption text
        figure.appendChild(figcaption);

        // Append the <figure> to the <article>
        article.appendChild(figure);

        // Create the <p> element for the description
        const paragraph = document.createElement("p");
        paragraph.textContent = pic.description;
        article.appendChild(paragraph);

        // Append the <article> to the <section>
        sectionElement.appendChild(article);
    }
};
