//Objetos

let objeto = {
    propiedad1: valor1,
    propiedad2: valor2,
    //...
    propiedadN: valorN
  };
  
//Para acceder a una propiedad de un objeto, se utiliza la sintaxis de punto('.') o la sintaxis de corchetes ('[]'). Por ejemplo:

let persona = {
    nombre: 'Juan',
    edad: 30,
    casado: false
  };
  
  console.log(persona.nombre);  // salida: Juan
  console.log(persona['edad']);  // salida: 30
  

//También es posible agregar o modificar propiedades de un objeto utilizando la sintaxis de punto o corchetes. Por ejemplo:

persona.apellido = 'Pérez';
persona['casado'] = true;

//eliminar

persona.email = "juan@example.com";
delete persona.edad; 

//Además, los objetos en JavaScript también pueden tener métodos, que son funciones que se definen dentro del objeto.Para definir un método en un objeto, se utiliza la misma sintaxis que para definir una funcion, pero dentro del objeto.Por ejemplo:

let persona = {
    nombre: 'Juan',
    edad: 30,
    casado: false,
    saludar: function() {
      console.log(`Hola, mi nombre es ${this.nombre}`);
    }
  };
  
  persona.saludar();  // salida: Hola, mi nombre es Juan
  

