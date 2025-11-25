// Los objetos en javaScript son colecciones de pares clave-valor. Cada clave es una cadena (string) que identifica un valor asociado, que puede ser de cualquier tipo de dato, incluyendo otros objetos o funciones.

// Definición de un objeto persona. ESTO ES JSON AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA.

let persona = {
    nombre: "Juanma",
    edad: 25,
    esEstudiante: true,
    habilidades: ["JavaScript", "HTML", "CSS"],
    direccion: {
        calle: "Calle Falsa 123",
        ciudad: "Madrid",
        pais: "España"
    },
    funcion: function saludar() {
        console.log("Hola, mi nombre es " + this.nombre);
    }
};

// Acceso a las propiedades del objeto
console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);
console.log("¿Es estudiante?", persona.esEstudiante);
console.log("Habilidades:", persona.habilidades.join(", "));
console.log("Ciudad:", persona.direccion.ciudad);
persona.funcion();

// Modificación de las propiedades del objeto

console.log("\n", "-----", "Modificación de propiedades", "-----");
persona.edad = 26;
persona.direccion.calle = "Avenida Siempre Viva 742";
console.log("Edad actualizada:", persona.edad);
console.log("Calle actualizada:", persona.direccion.calle);