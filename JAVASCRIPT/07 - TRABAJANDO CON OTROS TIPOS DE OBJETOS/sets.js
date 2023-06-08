// Sets o conjuntos
const array = [1, 2, 3, 4, 6, 1, 2, 5, "Hola", {id: 5}, {id: 5}, "Hola"];

//Lo que nos permiten asegurarnos los SET es que no va a haber valores duplicados
const miSet = new Set(array);
console.log(array)
console.log(miSet)

// .add()

miSet.add(9);
console.log(miSet)
miSet.add(2);
console.log(miSet)

// .delete()
miSet.delete("Hola")
console.log(miSet)

// .clear()
//miSet.clear() // Si descomento me borra todo el set de miSet
console.log(miSet)

// .has()
console.log(miSet.has(4))
console.log(miSet.has(40))

// .size
console.log(miSet.size)

miSet.forEach(valor => {
    console.log(valor)
})

const it_miSet = miSet.values()
console.log(it_miSet)

const ar_miSet = [...miSet]
console.log(ar_miSet)
