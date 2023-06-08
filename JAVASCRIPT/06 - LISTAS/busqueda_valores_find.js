// Iterar los valores de una lista
const array = ["Hola", 2, 5, 90.2, false, undefined];
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
};

// Forma ES6 (más eficiente) .forEach
let suma = 0;
const arrayNums = [3, 6, 2, 77, 2, 3, 93, 19]
arrayNums.forEach(valor => {
    suma += valor;
    console.log(valor)
});
console.log(suma);

// Búsqueda de un valor dentro de una lista .find()
// Encontrar el elemento 90.2
const variable = array.find(valor => {
    if (valor === 90.2) {
        return true;
    }
})

console.log(variable);

const listaObjetos = [
    {nombre: "Leire", edad: 35},
    {nombre: "Gorka", edad: 34},
    {nombre: "Juan", edad: 23},
    {nombre: "Lucía", edad: 54},
    {nombre: "Alejandro", edad: 34},
    {nombre: "Raúl", edad: 21}
]

const objeto = listaObjetos.find (o => o.nombre === "Juan")
console.log(objeto.edad);

const { edad } = listaObjetos.find(o => o.nombre === "Lucía")
console.log(edad)