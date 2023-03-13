// estructura básica

{
    "clave1": "valor1",
    "clave2": "valor2",
    "clave3": "valor3"
  }
  
// para crear un objeto JSON, se utiliza una sintaxis similar a la de los objetos en JavasCript,pero los nombres de las propiedades deben estar entre comillas dobles y separadas por comas:

let persona = {
    "nombre": "Juan",
    "apellido": "Pérez",
    "edad": 30
  };

//para convertir un objeto JavaScript a formato JSON, se utiliza el método 'JSON.stringify()';

let persona = {
    "nombre": "Juan",
    "apellido": "Pérez",
    "edad": 30
  };
  
  let personaJSON = JSON.stringify(persona);
  console.log(personaJSON); // {"nombre":"Juan","apellido":"Pérez","edad":30}

//para convertir un objeto JSON a formato JavaScript, se utiliza el método 'JSON.parse():

let personaJSON = '{"nombre":"Juan","apellido":"Pérez","edad":30}';
let persona = JSON.parse(personaJSON);
console.log(persona); // { nombre: 'Juan', apellido: 'Pérez', edad: 30 }
