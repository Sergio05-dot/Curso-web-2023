function compararLetras() {
      // Obtener los valores de los campos de texto
      let texto1 = document.getElementById("texto1").value;
      let texto2 = document.getElementById("texto2").value;

      // Obtener las dos primeras letras de cada texto
      let letra1Texto1 = texto1.charAt(0);
      let letra2Texto1 = texto1.charAt(1);
      let letra1Texto2 = texto2.charAt(0);
      let letra2Texto2 = texto2.charAt(1);

      // Comparar las dos primeras letras de cada texto
      if (letra1Texto1 === letra1Texto2 && letra2Texto1 === letra2Texto2) {
        document.getElementById("resultado").innerHTML = "Las dos primeras letras son IGUALES.";
      } else {
        document.getElementById("resultado").innerHTML = "Las dos primeras letras son DIFERENTES.";
      }
    }