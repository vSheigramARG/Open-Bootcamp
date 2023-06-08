// .sort() -> Método que modifica el array
const array = [2, 5, 9, 15, 1, 2, 0, 4]

console.log(array)

array.sort((a, b) => {
    if (a < b) {
        return +1
    } else if (a > b) {
        return -1
    } else {
        return 0
    }
})

console.log(array)

// Ordernar únicamanete arrays numéricos
const arrayNumerico = [4, 1, 7, 3, 1, 3, 56, 1, 546]

arrayNumerico.sort((a, b) => a - b)
console.log(arrayNumerico);

arrayNumerico.sort((a, b) => b - a)
console.log(arrayNumerico);

// Interesante en arrays de objetos
const listaObjetos = [
    {nombre: "Leire", edad: 35},
    {nombre: "Gorka", edad: 34},
    {nombre: "Juan", edad: 23},
    {nombre: "Lucía", edad: 54},
    {nombre: "Alejandro", edad: 34},
    {nombre: "Raúl", edad: 21}
]

listaObjetos.sort((a, b) => {
    if (a.edad < b.edad) {
        return -1
    } else if (a.edad > b.edad) {
        return +1
    } else {
        return 0
    }
})
console.log(listaObjetos)

listaObjetos.sort((a, b) => b.edad - a.edad)
console.log(listaObjetos)