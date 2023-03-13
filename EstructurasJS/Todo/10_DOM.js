//Manipulacion del DOM

// Obtener un elemento por su ID
let elemento = document.getElementById('id_del_elemento');

// Obtener elementos por su etiqueta
let elementos = document.getElementsByTagName('etiqueta');

// Obtener elementos por su clase
let elementos = document.getElementsByClassName('nombre_de_clase');

// Acceder a propiedades y atributos de un elemento
elemento.propiedad;
elemento.getAttribute('atributo');

// Modificar propiedades y atributos de un elemento
elemento.propiedad = valor;
elemento.setAttribute('atributo', valor);

// Añadir un evento a un elemento
elemento.addEventListener('evento', funcion);

// Crear un nuevo elemento
let nuevoElemento = document.createElement('etiqueta');

// Agregar un nuevo elemento al DOM
elementoPadre.appendChild(nuevoElemento);

// Eliminar un elemento del DOM
elementoPadre.removeChild(elemento);

//Recorrido del DOM

function recorrerDOM(elemento) {
    // Procesar el elemento actual
    // ...
  
    // Recorrer los elementos hijos del elemento actual
    let hijos = elemento.children;
    for (let i = 0; i < hijos.length; i++) {
      recorrerDOM(hijos[i]);
    }
  }
  
  // Llamar a la función con el elemento raíz del DOM
  recorrerDOM(document.documentElement);
  

  
