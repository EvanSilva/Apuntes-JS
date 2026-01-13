// hay que importar las funciones que se van a testear

const {
  inicio,
  suma,
  resta,
  multiplicar,
  dividir,
  calcular,
  main,
} = require("./CalculadoraJest");

// Se agrupan en bloques de tests con describe, para organizar mejor los tests.
describe("Primeros pasos con Jest", () => {
  test("Suma un numero positivo y uno negativo", () => {
    expect(suma(10, -3)).toBe(7);
  });
});

describe("Test de la función de inicio", () => {
  // necesitas conocer el comportamiento esperado de la función para hacer los tests, asi como los nombres de las variables que devuelve la función, en este caso num1 y num2, asi que compruebas que devuelve un objeto con esas propiedades y los valores correctos.

  test("convierte strings a números enteros correctamente", () => {
    expect(inicio("5", "10")).toEqual({ num1: 5, num2: 10 });
  });
  test("convierte strings a números decimales correctamente", () => {
    expect(inicio("5.5", "10.2")).toEqual({ num1: 5.5, num2: 10.2 });
  });
  test("convierte strings a números decimales correctamente", () => {
    expect(inicio("5.5", "10.2")).toEqual({ num1: 5.5, num2: 10.2 });
  });
  test("maneja números negativos", () => {
    expect(inicio(-5, -10)).toEqual({ num1: -5, num2: -10 });
  });
  test("retorna NaN para valores no numéricos", () => {
    expect(inicio("abc", 10)).toEqual({ num1: NaN, num2: 10 });
  });
  test("retorna NaN para strings vacíos", () => {
    expect(inicio("", "")).toEqual({ num1: NaN, num2: NaN });
  });
});

describe("Test de la función de suma", () => {
  test("suma dos números positivos", () => {
    expect(suma(5, 3)).toBe(8);
  });
  test("suma dos números negativos", () => {
    expect(suma(-5, -3)).toBe(-8);
  });
  test("suma un número positivo y uno negativo", () => {
    expect(suma(10, -3)).toBe(7);
  });
  test("suma con cero", () => {
    expect(suma(5, 0)).toBe(5);
    expect(suma(0, 5)).toBe(5);
  });
  test("suma números decimales", () => {
    expect(suma(5.5, 3.2)).toBe(8.7);
  });
  test("suma un número positivo y uno negativo", () => {
    expect(suma(1000000, 2000000)).toBe(3000000);
  });
});

describe("Test de la función de resta", () => {
  test("Resta dos números positivos", () => {
    expect(resta(10, 3)).toBe(7);
  });

  test("Resta con cero", () => {
    expect(resta(5, 0)).toBe(5);
    expect(resta(0, 5)).toBe(-5);
  });

  test("Resta números decimales", () => {
    expect(resta(10.5, 3.2)).toBe(7.3);
  });
});

describe("Test de la función de multiplicacion", () => {
  test("Multiplicar dos números positivos", () => {
    expect(multiplicar(5, 3)).toBe(15);
  });
  test("Multiplicar por cero", () => {
    expect(multiplicar(5, 0)).toBe(0);
    expect(multiplicar(0, 5)).toBe(0);
  });
  test("Multiplicar numeros decimales", () => {
    expect(multiplicar(2.5, 4)).toBe(10);
  });
  test("Multiplicar por numeros con resultado decimal", () => {
    expect(multiplicar(2.5, 3.2)).toBeCloseTo(8.0);
  });
});

describe("Test de la operación division", () => {
  test("Dividir dos numeros negativos", () => {
    expect(dividir(-10, 2)).toBe(-5);
    expect(dividir(10, -2)).toBe(-5);
    expect(dividir(-10, -2)).toBe(5);
  });
  test("Dividir numeros decimales", () => {
    expect(dividir(7.5, 2.5)).toBe(3);
  });
  test("Dividir con resultado decimal", () => {
    expect(dividir(10, 3)).toBeCloseTo(3, 0.05);
  });

  // cuando se espera que una función lance un error, se usa toThrow dentro de una función anónima que llama a la función que debe lanzar el error. Es un poco raro, pero es la forma correcta de testear errores en Jest dado que el toThrow necesita capturar la llamada a la función para verificar que lanza el error esperado, y si pones una llamada directa a dividir(10, 0) fuera de una función, el error se lanzaría inmediatamente y rompería el test.

  test("Lanzar error al dividir por cero", () => {
    expect(() => dividir(10, 0)).toThrow("División por cero no permitida");
  });

  test("Lanzar error al dividir por cero", () => {
    expect(() => dividir(10, -0)).toThrow("División por cero no permitida");
  });
});

describe("Test de la operación de calcular", () => {
  test("Calcular una suma correctamente", () => {
    expect(calcular("5", "+", "3")).toBe(8);
  });
  test("Calcular una resta correctamente", () => {
    expect(calcular("10", "-", "3")).toBe(7);
  });
  test("Calcular una resta correctamente", () => {
    expect(calcular("5", "*", "3")).toBe(15);
    expect(calcular("5", "x", "3")).toBe(15);
    expect(calcular("5", "X", "3")).toBe(15);
  });
  test("Manejar operaciones con cero", () => {
    expect(calcular("0", "+", "5")).toBe(5);
    expect(calcular("5", "*", "0")).toBe(0);
    expect(calcular("0", "-", "5")).toBe(-5);
  });

  test("manejo de errores", () => {
    expect(() => calcular("", "+", "")).toThrow(
      "Ambos argumentos deben ser números válidos"
    );
    expect(() => calcular("5", "+", "xyz")).toThrow(
      "Ambos argumentos deben ser números válidos"
    );
    expect(() => calcular("abc", "+", "3")).toThrow(
      "Ambos argumentos deben ser números válidos"
    );
    expect(() => calcular("10", "/", "0")).toThrow(
      "División por cero no permitida"
    );
  });
});
