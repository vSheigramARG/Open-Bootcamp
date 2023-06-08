// Listas o arrays o arreglos
const lista = [1, "hola", true, undefined, null];
const lista2 = new Array(2, "hola", true, undefined, null);
const lista3 = new Array(3);
lista3[0] = "Soy el primer elemento, index 0";
const lista4 = [lista, lista2, lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

// Objetos
const autoJOK440 = {
    marca: "Volskwagen",
    modelo: "Fox",
    motor: 1.6,
    isWhite: false,
    puertas: 3,
    services: ["10.000kms", "20.000kms", "30.000kms", "50.000kms", "80.000kms" ,"100.000kms", "125.000kms", "150.000kms"],
    caja: {
        tipo: "manual",
        marca: "Volskwagen",
        origen: "Córdoba, Bs. As. Argentina",
        marchas: 5,
    }
}

autoJOK440.anyo = 2011;
autoJOK440.marca = "VW";
autoJOK440.caja.marca = "VW";

console.log(autoJOK440.services);
console.log(autoJOK440.caja);
console.log(autoJOK440.caja.tipo);
console.log(autoJOK440.anyo);
console.log(autoJOK440);

// Fechas
// Librerías de apoyo. Moment.js
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10); // Utilizando los milisegundos
console.log(fecha_milis);

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena);

const fecha_valores = new Date(1984, 7, 19);
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const anyo = ahora.getFullYear();
console.log(dia, mes, anyo);