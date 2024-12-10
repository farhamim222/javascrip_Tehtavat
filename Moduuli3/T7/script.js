
window.onload = function () {
    // Get the elements
    const triggerElement = document.getElementById("trigger");
    const targetImage = document.getElementById("target");

    // Event: Mouse over
    triggerElement.addEventListener("mouseover", function () {
        targetImage.src = "picB.jpg"; // Change to picB.jpg
    });

    // Event: Mouse out
    triggerElement.addEventListener("mouseout", function () {
        targetImage.src = "picA.jpg"; // Change back to picA.jpg
    });
};
