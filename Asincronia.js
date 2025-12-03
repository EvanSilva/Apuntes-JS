// setTimeout sirve para ejecutar una función después de un retraso específico en milisegundos. Es util para tareas que requieren esperar un tiempo antes de ejecutarse.

console.log("Inicio");

setTimeout(() => {
  console.log("Esto se muestra después de 2 segundos");
}, 0);

// Este fin se ejecutará inmediatamente después de iniciar el temporizador, sin esperar los 2 segundos, aunque esté al final del código.

console.log("Fin");

// Función que simula intentar despertarnos, puede fallar, o puede no fallar, la idea es comprobar el manejo de errores con promesas.
function despertarnos() {
  return new Promise((resolve, reject) => {
    console.log("Intentando despertarte");

    setTimeout(() => {
      const exito = Math.random() > 0.3; // 70% de probabilidad de éxito

      if (exito) {
        console.log("Te has despertado");
        resolve("Despertado");
      } else {
        console.log("Error al despertarte");
        reject("No se pudo despertar");
      }
    }, 1800);
  });
}

// Función que simula intentar desayunar, puede fallar, o puede no fallar, la idea es comprobar el manejo de errores con promesas, si no nos despertamos, no podemos desayunar.

function desayunar() {
  return new Promise((resolve, reject) => {
    console.log("Intentando desayunar");

    setTimeout(() => {
      const exito = Math.random() > 0.4; // 60% de probabilidad de éxito

      if (exito) {
        console.log("Has desayunado");
        resolve("Desayunado");
      } else {
        console.log("Error al desayunar");
        reject("No se pudo desayunar");
      }
    }, 1800);
  });
}

// Manejamos las promesas con async/await para que se ejecuten de forma asíncrona y podamos manejar los errores de forma más sencilla. Las llamadas asincronas se ejecutan en el orden en que se llaman, pero no bloquean el hilo principal, permitiendo que otras operaciones se realicen mientras esperan.

async function rutinaMatutina() {
  try {
    const despertado = await despertarnos();
    const desayunado = await desayunar();
  } catch (error) {
    console.error("Error en la rutina matutina:", error);
  }
}

// Llamamos a la función rutinaMatutina para iniciar el proceso de despertarse y desayunar.
rutinaMatutina();

// Nota: Las funciones despertarnos y desayunar simulan un proceso que puede fallar, por lo que es importante manejar los errores adecuadamente para evitar que el programa se detenga inesperadamente. 
