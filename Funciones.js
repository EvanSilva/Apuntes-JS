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

// Una función anónima es una función sin nombre que se puede asignar a una variable o pasar como argumento a otra función. Se definen usando la palabra clave function sin un nombre.

// () => {}

const saludarAnonimo = function(nombre) {
    console.log(`Hola, ${nombre} !`);
}

saludarAnonimo("Cesar");

// Funciones flecha (arrow functions): una forma más concisa de escribir funciones anónimas. Se definen usando la sintaxis () => {}. Si la función tiene un solo parámetro, los paréntesis son opcionales. Si la función tiene una sola expresión, las llaves y la palabra clave return son opcionales. 

const sumarFlecha = (a, b) => a + b;
let resultadoFlecha = sumarFlecha(7, 2);
console.log("Resultado de la suma con función flecha:", resultadoFlecha);

// Funciones como parámetros: las funciones se pueden pasar como argumentos a otras funciones. Esto permite crear funciones de orden superior que pueden manipular otras funciones.

function ejecutarFuncion(funcion, valor) {
    return funcion(valor);
}

let resultadoEjecutar = ejecutarFuncion(saludarAnonimo, "Liliana");
