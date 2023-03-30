function verificarpalindromo() {
  // 1.Paso
    let cadena = document.getElementById("cadena").value;
  
// 2.Paso
    cadena = cadena.toLowerCase().replace(/\s/g, "");
  
    // 3.Paso
    let cadenainvertida = cadena.split("").reverse().join("");
  
    // 4.Paso
    if (cadena === cadenainvertida) {
      document.getElementById("resultado").innerHTML = `La palabra "${cadena}" es un palindromo.`;
    } else {
      document.getElementById("resultado").innerHTML = `La palabra "${cadena}" no es un palindromo.`;
    }
  }