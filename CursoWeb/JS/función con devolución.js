var x= multiplica(4, 3);
var y= divide(8, 3);
var z= sumar(4, 7);
var w= restar(6, 8);
document.getElementById("mult").innerHTML= "El resultado de multiplicar 4*3 es "+ x;
document.getElementById("div").innerHTML= "El resultado de dividir 8/3 es "+ y;
document.getElementById("sum").innerHTML= "El resultado de sumar 4+7 es "+ z;
document.getElementById("res").innerHTML= "El resultado de restar 6-8 es "+ w;


function multiplica (a, b) {
    return a * b;
}
function divide (a, b) {
    return a / b;
}
function sumar (a, b) {
    return a + b;
}
function restar (a, b) {
    return a - b;
}