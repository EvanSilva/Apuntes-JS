// const entero =  -4;
// const decimal = 7.8;

// console.log("Número entero:", entero);
// console.log("Número decimal:", decimal);

// console.log("Tipo de 'entero':", typeof entero);
// console.log("Tipo de 'decimal':", typeof decimal);

// + -> suma 
// - -> resta
// * -> multiplicación
// / -> división
// ^ -> potencia
// ** -> potencia
// % -> módulo (residuo de una división)

let op1 = 6;
let op2 = 4;
let res = op1 % op2;

// usando comillas simples
console.log("El residuo de", op1, "dividido entre", op2, "es:", res);

// usando comillas dobles y template strings
console.log(`El resto de ${op1} dividido entre ${op2} es: ${res}`);


// Ejercicio concatenación nombre + apellido 

let nombre = "Evan";
let apellido1 = "Silva";
let apellido2 = "González";

console.log("Mi nombre es " + nombre + " " + apellido1 + " " + apellido2 )

// Se pueden usar el simbolo de "+", el de "," y las template strings para concatenar textos y variables.


// Los booleans son valores lógicos que pueden ser true (verdadero) o false (falso).
let verdadero = true;
let falso = false;
console.log("Valor de 'verdadero':", verdadero);

let boolean = (5 > 3); // true
console.log("¿5 es mayor que 3?", boolean);
console.log("Tipo de 'boolean':", typeof boolean);

let boolean2 = (2 == 3); // false
console.log("¿2 es igual a 3?", boolean2);
console.log("Tipo de 'boolean2':", typeof boolean2);

// Operadores lógicos
// && -> AND (y)
// || -> OR (o)
// !  -> NOT (no)
// == -> igualdad
// != -> desigualdad
// === -> igualdad estricta (valor y tipo)
// !== -> desigualdad estricta (valor y tipo)
// >  -> mayor que
// <  -> menor que
// >= -> mayor o igual que
// <= -> menor o igual que
// !< -> no es menor que
// !> -> no es mayor que

/*

Ejemplo:

if (PREDICADO_LOGICO) {
    // Código a ejecutar si el predicado es true
} else {
    // Código a ejecutar si el predicado es false
}

*/

let edad = 17;
let ciclo = "Superior";

if (edad >= 18) {
    console.log("Eres mayor de edad, puedes salir de Teis.");
} else {
    console.log("Eres menor de edad. no puedes salir de Teis.");
}


// Ejercicio: combinar dos condiciones

if (edad >= 18 && ciclo === "Superior") {
    console.log("Eres mayor de edad y estás en un ciclo superior, puedes salir de Teis.");
} else {
    console.log("Eres menor de edad o no estás en un ciclo superior, no puedes salir de Teis.");
}