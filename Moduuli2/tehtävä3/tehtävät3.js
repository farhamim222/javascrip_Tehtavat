'use strict';
function reverseNumbers(){

    const dogNames = [
        document.getElementById('dog1').value,
        document.getElementById('dog2').value,
        document.getElementById('dog3').value,
        document.getElementById('dog4').value,
        document.getElementById('dog5').value,
        document.getElementById('dog6').value
    ];


    dogNames.sort().reverse();


    let html = "<ul>";
    for (const name of dogNames) {
        html += `<li>${name}</li>`;
    }
    html += "</ul>";


    document.getElementById('output').innerHTML = html;
}
