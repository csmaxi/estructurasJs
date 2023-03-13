//Sintaxis


function callback(parametro1, parametro2, ...){
    //cuerpo de la función callback
  }
  
//Estructura

function doSomething(param1, param2, callback) {
    // Hacer algo con los parámetros
    // ...
    
    // Ejecutar el callback
    callback();
  }
  
  function callback() {
    // Hacer algo después de que la función doSomething termine
  }
  
  // Llamar a la función doSomething y pasar el callback como argumento
  doSomething('param1', 'param2', callback);
  