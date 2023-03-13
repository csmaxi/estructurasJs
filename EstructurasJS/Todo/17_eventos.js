//Agregar un evento a un elemento HTML usando addEventListener()

// Obtener un elemento del DOM
let elemento = document.getElementById('id_del_elemento');

// Agregar un evento al elemento
elemento.addEventListener('nombre_del_evento', function() {
  // Acciones a realizar cuando ocurre el evento
});

// Eliminar un evento del elemento
elemento.removeEventListener('nombre_del_evento', function() {
  // Acciones a eliminar cuando ocurre el evento
});

//Agregar un evento a un elemento HTML: para agregar un evento a un elemento HTML, se puede utilizar la propiedad 'on[NombreEvento]'.Por ejemplo, para agregar un evento de click a un botón con el id "miBoton":

let miBoton = document.getElementById("miBoton");
miBoton.onclick = function() {
  // código a ejecutar cuando se haga clic en el botón
};
