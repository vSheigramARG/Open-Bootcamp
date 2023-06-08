// Métodos más utilizados con strings
// ¿Cómo obtener la longitud de un string?
let str = "Hola soy un string";
console.log(str.length);

// ¿Cómo obtener partes de strings?
// slice() substring() substr()
let slice_str = str.slice(5, 10);
console.log(slice_str)

let substring_str = str.substring (5, 10);
console.log(substring_str);

let substr_str = str.substr (5, 10);
console.log(substr_str);

// ¿Cómo reemplazar parte del contenido de un string?
let cadena = "Hola mi nombre es Ale";
console.log(cadena);

// Al utilizar strings sólo reemplaza la primera instancia
console.log(cadena.replace('Ale', 'Alejandro'));

let texto_largo = "Clarín es un periódico argentino con sede en la ciudad de Buenos Aires. Fue fundado el 28 de agosto de 1945, por Roberto Noble. El periodico hace parte del Grupo Clarín y su director actualmente es Héctor Magnetto."

// Al utilizar strings sólo reemplaza la primera instancia
console.log(texto_largo.replace('es', 'ES'));

// Al utilizar la expresión regular /g (global), reemplaza todas las instancias
console.log(texto_largo.replace(/la/g, 'LA'));