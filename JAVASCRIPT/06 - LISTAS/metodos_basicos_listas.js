// ¿Cómo trabajar con listas?
let array = [1, 2, 3, 4, 5, 6];
let var1 = "35";
let array1 = [1, "2", "string", false, {id: 1}, null, undefined, var1];

console.log(array1);


// Acceder a los valores de un array a través de su posición
console.log(array1[0]);
console.log(array1[1]);
console.log(array1[2]);
console.log(array1[3]);
console.log(array1[4]);
console.log(array1[5]);
console.log(array1[6]);
console.log(array1[7]);
// Tipo de elementos
console.log(typeof array1[0]);
console.log(typeof array1[1]);
console.log(typeof array1[2]);
console.log(typeof array1[3]);
console.log(typeof array1[4]);
console.log(typeof array1[5]);
console.log(typeof array1[6]);
console.log(typeof array1[7]);


// Métodos para introducir nuevos valores a nuestros arrays
// Introducir valores al final
// .push() .unshift() => Mutan el valor de nuestro array
array1.push("final", 25, 100, true);
console.log(array1);

// Introducir valores al principio
array1.unshift("inicio", 38, NaN, false);
console.log(array1);

// Métodos para eliminar nuevos valores a nuestros arrays
// .pop() .shift() => Mutan el valor de nuestro array
// Eliminar último elemento
array1.pop();
console.log(array1);

// Eliminar primer elemento
array1.shift();
console.log(array1);

// Método para eliminar, modificar o añadir valores en nuestro array
// .splice(indice, numValoresAEliminar)
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
array2.splice(2, 3);
console.log(array2);

//Añadir valores .splice(indice, 0, valores)
array2.splice(2, 0, "hola");
console.log(array2);

//Modificar valores
array2.splice(2, 1, 3);
console.log(array2);