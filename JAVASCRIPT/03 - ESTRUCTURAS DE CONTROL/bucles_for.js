// Bucles For
for (let i = 0; i < 10; i++) {
    // Esto es el bucle
    console.log (i);
}

let lista = [1, 4, 6, 2, 3, 7, 10, 12];
for (let i = 0; i <lista.length; i++) {
    console.log (lista[i])
}

// Estructura for...of
for (let valor of lista) {
    console.log(valor)
}

// Estructura forEach
lista.forEach(valor => {
    console.log(valor)
})

// Estructura for...in
let persona = {
    nombre: "Alejandro",
    apellido: "Espasandín",
    edad: 34,
    isDeveloper: false,
}
console.log(persona.nombre);
let prop = "edad";
console.log(persona[prop]);

for (let propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad])
}