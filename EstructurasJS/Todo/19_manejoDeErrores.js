//Manejo de errores

try {
    // código que puede generar un error
  } catch (error) {
    // código que se ejecuta en caso de error
  }
  
//ejemplo:

try {
    let x = y + 1; // la variable 'i' no esta definida
  } catch (error) {
    console.log('Se ha producido un error: ' + error.message);
  }
  
//Además del bloque 'try-catch', tambien se puede usar la palabra clave 'finally' para ejecutar el código que debe ejecutarse siempre,tanto si se ha producido un error como si no. La sintaxis es la siguiente:

try {
    // código que puede generar un error
  } catch (error) {
    // código que se ejecuta en caso de error
  } finally {
    // código que se ejecuta siempre
  }
  