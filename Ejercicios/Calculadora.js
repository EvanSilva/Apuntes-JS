//node calculadora.js 3 + 5
const [,,op1,op,op2] = process.argv;

switch (op){

    case "+":
        console.log(sumar(op1, op2));
        break;
    case "-":
        console.log(restar(op1, op2));
        break;
    case "*":
        console.log(multiplicar(op1, op2));
        break;
    case "/":
        console.log(dividir(op1, op2));
        break;
    default :
        console.log("Esta operación no es válida");
        break;


}

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
    let resultado = a / b;
    return resultado;
}

