function generarNumeros() {
	// Generar 6 números aleatorios con el bucle for clásico
	let numerosAleatorios = '';
	for(let i = 0; i < 6; i++){
		numerosAleatorios += Math.floor(Math.random() * 100) + 1 + ' ';
	}

	// Generar 6 números aleatorios con el bucle for of
	let numerosFijos = '';
	let numeros = [10, 20, 30, 40, 50, 60];
	for(let numero of numeros){
		numerosFijos += numero + ' ';
	}

	// Mostrar los números generados en el HTML
	document.getElementById("numerosGenerados").innerHTML = `Números aleatorios generados con el bucle for clásico: ${numerosAleatorios} <br> Números aleatorios generados con el bucle for of: ${numerosFijos}`;
}

function Trescolores() {
    let Colorines= '';
    let Colores   = ["Amarillo", "Azul", "Verde"]
    for(let Color of Colores ) {
        Colorines += Color + ' ';
    }
    document.getElementById("Colores").innerHTML = `Colores generados con el bucle for of: ${Colorines}`;
}
