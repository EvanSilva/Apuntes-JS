let pps = ["Juanma", "Evan", "Cesar", "Alejandro", "Liliana"];
console.log("Número de personas:", pps.length)

console.log("-----", "Usando for loop", "-----");
// Con for loop
for (let i = 0; i < pps.length; i++) {
    console.log("Persona en la posición", i, "es:", pps[i]);
}

console.log("\n" ,"-----", "Usando for each", "-----");
// Con for each
for (let persona of pps) {
    console.log("Persona:", persona);
}

console.log("\n" ,"-----", "Usando forEach method", "-----");

console.log("Listado de personas usando forEach:");
pps.forEach(persona => console.log(persona));