//La sintaxis básica de async / await es la siguiente:

async function myFunction() {
    try {
      // Hacer algo asincrónico, como una llamada a una API o una tarea larga
      const result = await asyncTask(); // la función asyncTask() debe devolver una promesa
  
      // Hacer algo con los datos resultantes
    } catch (error) {
      // Manejar el error
    }
  }
  
  
  //Tambien es posible utilizar 'async' / 'await' con múltiples promesas, utilizando 'promises.all()' para esperar que se resuelvan todas las promesas.La sintaxis es la siguiente:

  async function miFuncion() {
    try {
      const resultados = await Promise.all([promesa1, promesa2, promesa3]);
      // Código para manejar los resultados
    } catch (error) {
      // Código para manejar el error
    }
  }
  