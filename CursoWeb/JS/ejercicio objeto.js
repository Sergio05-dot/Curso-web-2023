var persona = {

    nombre : "Sergio", apellido : "Souza",
    
    edad : 53,
    
    colorOjos : "negros"
    
    };
    
    document.getElementById("demo").innerHTML = persona.nombre + " tiene " + persona.edad + " a�os y " + "tiene los ojos" + persona.colorOjos ;

    // ejemplo con una funcion y metodo;

    var person = {
        // Propiedades

        // Atributos
        firstName: "John",
        lastName: "Doe", 
        id: 5566,
        // M�todo
        fullName: function () {
          return this.firstName + " " + this.lastName + " " + this.id;
        }
      };
      document.getElementById("objetocomplejo").innerHTML = person.fullName();