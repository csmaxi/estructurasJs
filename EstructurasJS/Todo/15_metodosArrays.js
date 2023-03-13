// push(): agrega uno o más elementos al final del array.

let numeros = [1, 2, 3];
numeros.push(4, 5);
console.log(numeros); // [1, 2, 3, 4, 5]

// pop(): elimina el ultimo elemento del array y lo devuelve.

let numeros = [1, 2, 3];
let ultimoNumero = numeros.pop();
console.log(ultimoNumero); // 3
console.log(numeros); // [1, 2]

//shift(): elimina el primer elemento del array y lo devuelve.

let numeros = [1, 2, 3];
let primerNumero = numeros.shift();
console.log(primerNumero); // 1
console.log(numeros); // [2, 3]

//unshift(): agrega uno o mas elementos al inicio del array.

let numeros = [1, 2, 3];
numeros.unshift(4, 5);
console.log(numeros); // [4, 5, 1, 2, 3]


//slice(): devuelve una copia de una sección del array especificada por los índices de inicio y finalización.

let numeros = [1, 2, 3, 4, 5];
let subArray = numeros.slice(2, 4);
console.log(subArray); // [3, 4]

//splice(): elimina, remplaza o agrega elementos a una posición especifica del array.


let numeros = [1, 2, 3, 4, 5];
numeros.splice(2, 2, 6, 7);
console.log(numeros); // [1, 2, 6, 7, 5]


//forEach(): ejecuta una función para cada elemento del array.

let numeros = [1, 2, 3];
numeros.forEach(numero => {
  console.log(numero);
});
// 1
// 2
// 3

//map(): crea un nuevo array con los resultados de la aplicación de una función a cada elemento del array original.

let numeros = [1, 2, 3];
let dobles = numeros.map(numero => numero * 2);
console.log(dobles); // [2, 4, 6]

//filter(): crea un nuevo array con los elementos del array original que pasan una prueba especificada en una función.

let numeros = [1, 2, 3];
let impares = numeros.filter(numero => numero % 2 !== 0);
console.log(impares); // [1, 3]


//reduce(): aplica una función acumuladora a cada elemento del array para reducirlo a un único valor.

let numeros = [1, 2, 3];
let suma = numeros.reduce((acumulado, numero) => acumulado + numero, 0);
console.log(suma); // 6
