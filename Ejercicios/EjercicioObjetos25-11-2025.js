// Tenemos que crear un objeto de JS con 3 claves
// 2 de ellas deben tener tipos de dato distitos
// La tercera clave debe tener una función como valor


let persona = {
    nombre: "Juanma",
    edad: 69,
    funcion: function saludar() {
        console.log(`${this.nombre} tiene ${this.edad}`);
    }
};

persona.funcion()