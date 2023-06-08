// Métodos de cadena de texto (parte 3)
//https://regexr.com

let texto_largo = "Clarín es un periódico argentino con sede en la ciudad de Buenos Aires. Fue fundado el 28 de agosto de 1945, por Roberto Noble. El periodico hace parte del Grupo Clarín y su director actualmente es Héctor Magnetto."

//Busca cuantas veces se repite una palabra
console.log(texto_largo.match(/Clarín/g))

//Busca si existe la palabra dentro del texto
console.log(texto_largo.includes("Clarín"))

//Saber si un texto empieza con una palabra
console.log(texto_largo.startsWith("Clarín"))

//Saber si un texto termina con una palabra
console.log(texto_largo.endsWith("Magnetto."))