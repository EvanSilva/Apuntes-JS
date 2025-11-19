// Funciones: bloques de código reutilizables que se pueden llamar en cualquier parte del programa. Se definen con la palabra clave function, seguida del nombre de la función y los parámetros entre paréntesis. Los parámetros son variables que se pasan a la función cuando se llama.

function saludar(nombre) {
    console.log("Hola, " + nombre + "!");
}

// Llamada a la función con un argumento
saludar("Evan");

// Funciones con retorno: se pueden devolver valores desde una función usando la palabra clave return. Esto permite que la función devuelva un valor que se puede usar en otras partes del programa.    

function sumar(a, b) {
    return a + b;
}

// Llamada a la función y almacenamiento del resultado en una variable
let resultado = sumar(5, 3);
console.log("Resultado de la suma:", resultado);

// Podemos guardar el resultado de una operacion:
let resultadoGuardado = sumar(1, 10)
console.log("El resultado de resultadoGuardado es:" , resultadoGuardado)

