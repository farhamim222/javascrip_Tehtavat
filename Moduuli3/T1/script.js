
window.onload = function() {
    // Find the element with id "target"
    const targetElement = document.getElementById("target");

    // Add the list items using innerHTML
    targetElement.innerHTML = `
        <ul>
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
        </ul>
    `;
};
