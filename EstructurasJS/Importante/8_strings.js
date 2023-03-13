//Strings

let mensaje = 'Hola Mundo';
let nombre = "Juan";
let direccion = "Calle 123";


//Tambien se pueden utilizar backticks(`) para crear strings con interpolación de variables y expresiones:

let edad = 25;
let mensaje = `Tengo ${edad} años`;

//Los strings tienen propiedades y métodos que se pueden utilizar para manipularlos. Algunos de los métodos más comunes incluyen:

// length: devuelve la longitud del string.

// indexOf(): devuelve la posición del primer carácter de la subcadena especificada.

// slice(): devuelve una subcadena a partir de una posición de inicio y, opcionalmente, una posición de finalización.

// toUpperCase(): devuelve el string en mayúsculas.

// toLowerCase(): devuelve el string en minúsculas.



let mensaje = "Hola Mundo";
console.log(mensaje.length); // muestra 10
console.log(mensaje.indexOf('Mundo')); // muestra 5
console.log(mensaje.slice(0, 4)); // muestra "Hola"
console.log(mensaje.toUpperCase()); // muestra "HOLA MUNDO"
console.log(mensaje.toLowerCase()); // muestra "hola mundo"

