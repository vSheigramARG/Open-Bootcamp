// Trabajar con métodos más avanzados
// .map() .filter() .reduce()

const array = ["San Sebastián", "Madrid", "Barcelona", "Alicante", "Bilbao"];

array.forEach (v => {console.log(v)});

const newArray = array.map((valor, indice) => `${indice + 1} - ${valor}`);
console.log(newArray);

const listaObjetos = [
    {nombre: "Leire", edad: 35},
    {nombre: "Gorka", edad: 34},
    {nombre: "Juan", edad: 23},
    {nombre: "Lucía", edad: 54},
    {nombre: "Alejandro", edad: 34},
    {nombre: "Raúl", edad: 21}
]
const personasMayores = listaObjetos.filter(obj => {
    if (obj.edad >30) {
        return true
    } else {
        return false
    }
})
console.log(personasMayores)

const personasMayores2 = listaObjetos.filter(obj => obj.edad > 40)
console.log(personasMayores2);

const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Alejandro")
console.log(nuevaLista)

const valores = [3, 56, 23, 5, 90, 100]
const suma = valores.reduce((acumulado, actual, indice, arrayOriginal) => {
    console.log(acumulado)
    console.log(actual)
    console.log(indice)
    console.log(arrayOriginal)
    return acumulado + actual
})
console.log(suma)
