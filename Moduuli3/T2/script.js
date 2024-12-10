window.onload = function () {

    const targetElement = document.getElementById("target");


    const ul = document.createElement("ul");

    // Create and append the first list item
    const li1 = document.createElement("li");
    li1.textContent = "First item";
    ul.appendChild(li1);


    const li2 = document.createElement("li");
    li2.textContent = "Second item";
    li2.classList.add("my-item"); // Add class "my-item" to the second item
    ul.appendChild(li2);


    const li3 = document.createElement("li");
    li3.textContent = "Third item";
    ul.appendChild(li3);

   
    targetElement.appendChild(ul);
};
