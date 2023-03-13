// Estructura

class NombreDeLaClase {
    constructor(parametro1, parametro2, ...) {
      this.propiedad1 = parametro1;
      this.propiedad2 = parametro2;
      // ...
    }
  
    metodo1() {
      // Código a ejecutar para el método 1
    }
  
    metodo2() {
      // Código a ejecutar para el método 2
    }
    // ...
  }

  // Aquí hay un ejemplo de como se puede utilizar una clase en JavaScript para definir un objeto "Persona":

  class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    saludar() {
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
  }
  
  const juan = new Persona("Juan", 30);
  juan.saludar(); // Salida: Hola, mi nombre es Juan y tengo 30 años.
  
  