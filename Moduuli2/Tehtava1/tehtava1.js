'use strict';

function reverseNumbers() {
    var number = [
        document.getElementById('num1').value,
        document.getElementById('num2').value,
        document.getElementById('num3').value,
        document.getElementById('num4').value,
        document.getElementById('num5').value
    ];

    var result = "";

    // Loop through the numbers array in reverse order
    for (var i = number.length - 1; i >= 0; i--) {
        result += number[i] + "<br>";
    }

    // Display the result in the 'result' paragraph
    document.getElementById('result').innerHTML = result;
}
