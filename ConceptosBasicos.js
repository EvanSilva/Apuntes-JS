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

/*

Usando else if para múltiples condiciones

if (CONDICION_1) {
    // Código si CONDICION_1 es true
} else if (CONDICION_2) {
    // Código si CONDICION_2 es true
} else {
    // Código si ninguna condición es true
} 

*/


const color = "rojo";

if (color === "verde") {

    console.log("Puedes pasar")

} else if (color === "amarillo"){

    console.log("Precaución")

} else if (color === "rojo"){
    
    console.log("No puedes pasar")

} else {

    console.log("Color inválido")

}


// En caso de tener muchas condiciones, es mejor usar switch, default es lo mismo que else, por eso los breaks son necesarios para que no siga ejecutando el resto de casos.


switch (color){

    case "verde":
        console.log("Puedes pasar");
        break;
    case "amarillo":
        console.log("Precaución");
        break;
    case "rojo":
        console.log("No puedes pasar");
        break;
    default:
        console.log("Color inválido");
        break;
}

/*

Loops: estructuras de repetición

while(condición): se usa cuando no se sabe cuantas veces se repetirá el bloque de código.
do while(condición): similar a while, pero garantiza que el bloque de código se ejecute al menos una vez.

for(inicialización; condición, suma): se usa cuando se sabe cuantas veces se repetirá el bloque de código.
for each: se usa para iterar sobre elementos de una colección (como arrays).

*/

let numWhile = 0;
let numDoWhile = 0;
// Podriamos usar num++ que es un atajo para sumar 1, se llama syntax sugar, o azucar de sintactico

while (numWhile < 11) {

    console.log("Número actual (while):", numWhile);
    numWhile++; // Incrementar num en 1

};


do {

numDoWhile++;
console.log("Número actual (do while):", numDoWhile);

} while (numDoWhile < 10);

// Bucle for: se usa cuando se sabe cuántas veces se repetirá el bloque de código. i se usa como contador, se inicializa en 0, se incrementa en 1 y se compara con una condición. Hay una estandarizacion para el uso de for, que es usar i como contador, aunque se puede usar cualquier nombre.

for (let i = 0; i < 10; i++) {
    console.log("Número actual (for):", i);
}


// Bucle for each: se usa para iterar sobre elementos de una colección (como arrays). Se usa el nombre del array y se itera sobre sus elementos.
const array = [1, 2, 3, 4, 5];

// hay funciones que vienen por defecto en los arrays, como forEach, map, filter, reduce, etc. Estas funciones son métodos de los arrays y se pueden usar para iterar sobre sus elementos.
array.forEach(function(elemento) {
    console.log("Elemento actual (for each):", elemento);
});

//Ahora lo haremos con un for each clásico, que es lo mismo pero con una sintaxis diferente. Estamos creando la variable elemento que representa el elemento actual del array en cada iteración del bucle, asi podemos conseguir su valor en cada iteración.
for (let elemento of array) {
    console.log("Elemento actual (for each clásico):", elemento);
}   


// Arrays: estructuras de datos que almacenan múltiples valores en una sola variable. Se definen con corchetes [] y los elementos se separan por comas.
const frutas = ["manzana", "banana", "cereza"];
console.log("Array de frutas:", frutas);
console.log("Primera fruta:", frutas[0]); // Acceder al primer elemento del array
console.log("Segunda fruta:", frutas[1]); // Acceder al segundo elemento del array
console.log("Tercera fruta:", frutas[2]); // Acceder al tercer elemento del array
console.log("Número de frutas:", frutas.length); // Obtener la longitud del array

// Agregar un elemento al final del array
frutas.push("naranja");
console.log("Array de frutas después de push:", frutas);

// Eliminar el último elemento del array
frutas.pop();
console.log("Array de frutas después de pop:", frutas); 

// Eliminar el primer elemento del array
frutas.shift();
console.log("Array de frutas después de shift:", frutas);

// Agregar un elemento al inicio del array
frutas.unshift("fresa");
console.log("Array de frutas después de unshift:", frutas);

// Podemos usar slice para obtener una parte del array, sin modificar el array original. El numero que determina el primer indice es inclusivo, y el segundo indice es exclusivo. Y las posiciones las contamos desde 0.
let citricos = frutas.slice(1, 3);

console.log("Array de cítricos (slice):", citricos);
console.log("Array de frutas original después de slice:", frutas);

// Podemos usar splice para eliminar o reemplazar elementos en el array original. El primer número es el índice donde empezar, el segundo número es cuántos elementos eliminar, y los siguientes números son los elementos que se van a agregar en esa posición.

frutas.splice(1, 1, "kiwi");
console.log("Array de frutas después de splice:", frutas);

// Podemos usar indexOf para encontrar la posición de un elemento en el array.
let posicionCereza = frutas.indexOf("cereza");
console.log("Posición de 'cereza' en el array de frutas:", posicionCereza);

// Podemos usar join para unir los elementos del array en una cadena de texto.
let frutasString = frutas.join(", ");
console.log("Array de frutas como cadena de texto (join):", frutasString);

// Si queremos que en nuestro array no se repitan elementos, podemos usar Set, que es una estructura de datos que almacena valores únicos.
let numeros = [1, 2, 2, 3, 4, 4, 5];
let numerosUnicos = [...new Set(numeros)];
console.log("Números únicos usando Set:", numerosUnicos);

// Podemos usar map para transformar los elementos de un array y crear uno nuevo. Map sirve para aplicar una función a cada elemento del array original y devolver un nuevo array con los resultados.
let numerosMultiplicados = numeros.map(function(num) {
    return num * 2;
});
console.log("Números multiplicados por 2 usando map:", numerosMultiplicados);

// Podemos usar filter para filtrar los elementos de un array según una condición y crear uno nuevo. Filter sirve para crear un nuevo array con los elementos que cumplen una condición específica.
let numerosPares = numeros.filter(function(num) {
    return num % 2 === 0;
});
console.log("Números pares usando filter:", numerosPares);