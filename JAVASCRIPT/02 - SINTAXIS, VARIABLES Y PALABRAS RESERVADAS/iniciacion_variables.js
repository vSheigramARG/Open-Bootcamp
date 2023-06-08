// Declarar variales
var variable;
let variableLet;

//Declarar constantes
const constante = "Hola, soy una constante";
console.log(constante);
// constante = "Adiós" // Nos da un error

var a = 1;
console.log(a);

a = 4;
console.log(a);

let b = 3;
console.log(b);

b = 5;
console.log(b);

// var vs let

//ejemplo var
var variable = "Hola soy una variable VAR";

for (var i = 0; i < 3; i++) {
    var variable = "Soy la segunda variable VAR"
}

console.log(variable);

//ejemplo let
let varLet = "Hola soy una variable LET";

for (let i = 0; i < 3; i++) {
    let varLet = "Soy la segunda variable LET"
}

console.log(varLet);

// Saber tipo de variable - typeof
console.log(typeof false);
console.log(typeof varLet);
console.log(typeof variableLet);

let c = 4;
console.log(typeof c);
c = "4";
console.log(typeof c);