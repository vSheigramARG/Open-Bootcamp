// ¿Cómo obtener una lista a partir de otra .slice()
const array = ["hola", 1, 2, 3, true, null, "adiós"];

// .slice NO MODIFICA EL VALOR DEL ARRAY ORIGINAL
console.log(array.slice(1, 4));
const array2 = array.slice(1, 4);
console.log(array2);

const array3 = array.slice(2, -2);
console.log(array3);

