// .some()
const array = [3, 7, 2, 4, 7, 9, 42, 35, 7865, 23, -2]

const res = array.some(valor => valor < 0)
console.log(res)

const existe = array.some(valor => valor === 0)
console.log(existe)

const listaObjetos = [
    {nombre: "Leire", edad: 35},
    {nombre: "Gorka", edad: 34},
    {nombre: "Juan", edad: 23},
    {nombre: "Lucía", edad: 54},
    {nombre: "Alejandro", edad: 34},
    {nombre: "Raúl", edad: 21}
]

const existeAlejandro = listaObjetos.some(persona => persona.nombre === "Alejandro")
console.log(existeAlejandro)

const existePedro = listaObjetos.some(persona => persona.nombre === "Pedro")
console.log(existePedro)

// Cómo obtener una lista a partir de un objeto iterable
const str = "Hola soy Alejandro"
console.log(str[5])

const ar_str = Array.from(str)
console.log(ar_str)

const set = new Set([2, 3, "hola", 4])
const ar_set = Array.from(set)
console.log(ar_set)

const keys = array.keys()
console.log(keys)

const ar_keys = Array.from(keys)
console.log(ar_keys)