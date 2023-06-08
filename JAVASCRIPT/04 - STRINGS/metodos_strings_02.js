// Métodos strings - Parte II
let input = "Escorpio";
let db = "escorpio";

// toLowerCase() - toUpperCase()
console.log(input.toLowerCase());
console.log(input.toUpperCase());
console.log(input.toLowerCase() === db.toLowerCase());
console.log(input.toUpperCase() === db.toUpperCase());
console.log(input.toLowerCase() === db.toUpperCase());
console.log(input.toUpperCase() === db.toLowerCase());

//Formas de concatenar dos strings
let str_1 = "Hola, soy la primera cadena.";
let str_2 = "Y yo soy la segunda cadena.";

// Mejor práctica
console.log(str_1.concat(" ", str_2));
//Peor práctica por el riesgo de que sume
console.log(str_1 + " " + str_2);
console.log(`${str_1} ${str_2}`);

// Eliminar espacios al inicio y al final
let str_3 = "    Hola soy un string con espacios al final.   ";
console.log(str_3.length);

//trim()
console.log(str_3.trim().length);
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd().length);

// Obtener el caracter que hay en cierta posición
let str_4 = "Hola, soy el string número 4";
console.log(str_4.charAt(10));
console.log(str_4[6]);

//Obtener la posición de una palabra dentro de un string
let str_5 = "Clarín es un periódico argentino con sede en la ciudad de Buenos Aires. Fue fundado el 28 de agosto de 1945, por Roberto Noble. El periodico hace parte del Grupo Clarín y su director actualmente es Héctor Magnetto.";
console.log(str_5.indexOf("Roberto"));
console.log(str_5.charAt(113));
console.log(str_5.indexOf("Robeto"));

//Obtener la posición de una palabra dentro de un string
let str_6 = "Clarín es un periódico argentino con sede en la ciudad de Buenos Aires. Fue fundado el 28 de agosto de 1945, por Roberto Noble. El periodico hace parte del Grupo Clarín y su director actualmente es Héctor Roberto Magnetto."
console.log(str_6.indexOf("Roberto"));
console.log(str_6.charAt(113));
console.log(str_6.lastIndexOf("Roberto"));
console.log(str_6.charAt(205));