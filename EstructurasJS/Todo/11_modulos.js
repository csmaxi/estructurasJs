//Módulos

// Definir un módulo
const miModulo = (function() {
    // Variables y funciones privadas
    let miVariablePrivada = 'Hola';
    
    function miFuncionPrivada() {
      console.log(miVariablePrivada);
    }
    
    // Retornar un objeto con funciones públicas
    return {
      miFuncionPublica: function() {
        miFuncionPrivada();
      }
    };
  })();
  
  // Utilizar una función pública del módulo
  miModulo.miFuncionPublica();

  

  //moduloA.js

  function sumar(a, b) {
    return a + b;
  }
  
  export { sumar };

  //moduloB.js

  import { sumar } from './moduloA.js';

let resultado = sumar(2, 3);
console.log(resultado); // Output: 5
import { sumar } from './moduloA.js';

let resultado = sumar(2, 3);
console.log(resultado); // Output: 5

  
  