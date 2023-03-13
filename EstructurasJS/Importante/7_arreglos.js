//Arrays

let miArray = [elemento1, elemento2, elemento3, ..., elementoN];

//Tambien es posible crear un arreglo vacío y luego agregar elementos a él usando el método "push()" de los arreglos en JavaScript:

let miArray = [];
miArray.push(elemento1);
miArray.push(elemento2);
miArray.push(elemento3);
//...
miArray.push(elementoN);

//Acceder a elementos del arreglo:

let miArray = [elemento1, elemento2, elemento3, ..., elementoN];
let primerElemento = miArray[0]; // Accede al primer elemento del arreglo (elemento1)
let tercerElemento = miArray[2]; // Accede al tercer elemento del arreglo (elemento3)

//Agregar elementos al arreglo"

let miArray = [elemento1, elemento2, elemento3];
miArray.push(elemento4); // Agrega un elemento al final del arreglo (miArray será [elemento1, elemento2, elemento3, elemento4])

//Eliminar elementos del arreglo:

let miArray = [elemento1, elemento2, elemento3];
miArray.pop(); // Elimina el último elemento del arreglo (miArray será [elemento1, elemento2])

//Recorrer el arreglo

let miArray = [elemento1, elemento2, elemento3];
for (let i = 0; i < miArray.length; i++) {
  console.log(miArray[i]); // Imprime cada elemento del arreglo en la consola
}





