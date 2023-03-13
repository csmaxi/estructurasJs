//Promesas

const promise = new Promise((resolve, reject) => {
    // Hacer algo asíncrono
    // ...
  
    // Si se completa la tarea satisfactoriamente, llamar a resolve()
    resolve('Datos completados exitosamente');
  
    // Si hay algún error, llamar a reject()
    reject('Error al completar los datos');
  });
  
  // Llamar a la promesa usando then() y catch()
  promise
    .then((result) => {
      // Hacer algo con el resultado
    })
    .catch((error) => {
      // Manejar el error
    });
  
    //Si se resuelve o rechaza:

    miPromesa.finally(function() {
        // Código que se ejecutará siempre
      });
      
//Resumen

new Promise(function(resolve, reject) {
    // Cuerpo de la promesa
  }).then(function(resultado) {
    // Código para manejar el resultado
  }).catch(function(error) {
    // Código para manejar el error
  }).finally(function() {
    // Código que se ejecutará siempre
  });
  