const multiplicar = (a, b) => (a * b);
const divide = (a, b) => (a / b);
const sumar = (a, b) => (a + b);
const restar = (a, b) => (a - b);

var x = multiplicar(4, 3);
var y = divide(8, 3);
var z = sumar(4, 7);
var w = restar(6, 8);



// function multiplicar(a, b) {
//     return a * b;
// }

// function divide(a, b) {
//     return a / b;
// }

// function sumar(a, b) {
//     return a + b;
// }

// function restar(a, b) {
//     return a - b;
// }


document.getElementById("Flecha").innerHTML = x
document.getElementById("Flecha1").innerHTML = y
document.getElementById("Flecha2").innerHTML = z
document.getElementById("Flecha3").innerHTML = w

