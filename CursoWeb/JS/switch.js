var mes;var dia;

switch (new Date().getMonth()) {

    case 0:

        mes = "Enero"; break;

    case 1:

        mes = "Febrero"; break;

    case 2:

        mes = "Marzo"; break;

    case 3:

        mes = "Abril"; break;

    case 4:

        mes = "Mayo"; break;

    case 5:

        mes = "Junio"; break;

    case 6:

        mes = "Julio"; break;
    case 7:

        mes = "Agosto"; break;
    case 8:

        mes = "Septiembre"; break;    
    case 9:

        mes = "Octubre"; break;
    case 10:

        mes = "Noviembre"; break;
    case 11:

        mes = "Diciembre"; break;
}

switch (new Date().getDay()){
    case 0:

    dia = "Lunes"; break;

case 1:

    dia = "Martes"; break;

case 2:

    dia = "Miercoles"; break;

case 3:

    dia = "Jueves"; break;

case 4:

    dia = "Viernes"; break;

case 5:

    dia = "Sabado"; break;

case 6:

    dia = "Domingo"; break;

}
document.getElementById("texto").innerHTML = "Hoy es " + dia + " y el mes es " + mes;

