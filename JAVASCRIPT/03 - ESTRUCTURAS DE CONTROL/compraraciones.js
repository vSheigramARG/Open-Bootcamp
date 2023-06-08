// Compraraciones
// Igualdad

let a = 5;
let b = "5";

// Solo compara el valor
if (a==b) {
    console.log ("La variable a es igual a la variable b - Igualdad débil")
}

// Compara el valor y el tipo
if (a===b) {
    console.log ("La variable a es igual a la variable b - Igualdad fuerte")
}

// Desigualdad
let c = 4;
let d = 10;

if (c != d) {
    console.log ("La variable c es distinta a la variable d - Desigualdad débil")
}

if (c !== d) {
    console.log ("La variable c es distinta a la variable d - Desigualdad fuerte")
}

// Mayores y menores
let max = 10;
let min = 5;

if (max > min) {
    console.log ("max es mayor que min")
}
if (max >= 10) {
    console.log ("max es mayor o igual que min")
}

if (min < max) {
    console.log ("min es menor que max")
}
if (min <= max) {
    console.log ("min es menor o igual que max")
}