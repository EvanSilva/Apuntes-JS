const args = process.argv

//node calculadora.js 3 + 5
const [,,op1,op,op2] = process.argv;

// Comprobante de que el núemero de argumentos es 5, y que el tercer y quinto argumentos de la lista sean números.

comprobante()

// Función que traduce los datos a float. 

var op1f = parseFloat(op1)
var op2f = parseFloat(op2)

switch (op){

    case "+":
        console.log(sumar(op1f, op2f));
        break;
    case "-":
        console.log(restar(op1f, op2f));
        break;
    case "*":
    case "X":
    case "x":
        console.log(multiplicar(op1f, op2f));
        break;
    case "/":
    case ":":
        console.log(dividir(op1f, op2f));
        break;
    default :
        console.log("Esta operación no es válida, solo se admiten los operadores suma (+), resta (-), multiplcación (*, x, X) división (/, :)");
        process.exit(1)
        break;


}

// Funciones separadas para encapsular y escalar a futuro.
function sumar (a, b){
    let resultado = a + b;
    return resultado;
}

function restar (a, b){
    let resultado = a - b;
    return resultado;
}

function multiplicar (a, b){
    let resultado = a * b;
    return resultado;
}

function dividir (a, b){

    if (a === 0 || b === 0){

        console.log("No se puede dividir por cero");
        process.exit(1);

    }

    let resultado = a / b;
    return resultado;
}

function comprobante () {

    
    if (args.lenght > 5 || args.lenght < 5) {

        console.log("El número de argumentos que has introducido es diferente a tres")
        process.exit(1)

    }

    if (isNaN(op1) || isNaN(op2)){

        console.log("El primer y tercer argumento argumentos deben ser números");
        process.exit(1);

    }
    
}

