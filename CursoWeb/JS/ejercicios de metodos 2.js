function compararLetras(texto1, texto2) {
    // Obtener las dos primeras y dos últimas letras de cada texto
    let primeraLetraTexto1 = texto1.charAt(0);
    let segundaLetraTexto1 = texto1.charAt(1);
    let ultimaLetraTexto1 = texto1.charAt(texto1.length - 1);
    let penultimaLetraTexto1 = texto1.charAt(texto1.length - 2);
    
    let primeraLetraTexto2 = texto2.charAt(0);
    let segundaLetraTexto2 = texto2.charAt(1);
    let ultimaLetraTexto2 = texto2.charAt(texto2.length - 1);
    let penultimaLetraTexto2 = texto2.charAt(texto2.length - 2);
  
    // Comparar las dos primeras y dos últimas letras de cada texto
    if (primeraLetraTexto1 === primeraLetraTexto2 &&
        segundaLetraTexto1 === segundaLetraLetra2 &&
        ultimaLetraTexto1 === ultimaLetraTexto2 &&
        penultimaLetraTexto1 === penultimaLetraTexto2) {document.getElementById("resultado") = "Las dos primeras letras son IGUALES.";
      return "Las dos primeras y dos últimas letras son iguales.";
    } else {document.getElementById("resultado2").innerHTML = "Las dos primeras letras son DIFERENTES.";
      return "Las dos primeras y dos últimas letras son diferentes.";
    }
    
  }