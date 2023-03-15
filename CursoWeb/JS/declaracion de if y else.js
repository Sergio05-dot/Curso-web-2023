var hour = new Date().getHours();
var saludo;

if (hour >=6 && hour <=12) {
    saludo = "Buenos días";
}
else if (hour >=12 && hour <=19) {
    saludo = "Buenas tardes";
}
else {
    saludo = "Buenas noches";
}
document.getElementById("buenas").innerHTML = saludo;