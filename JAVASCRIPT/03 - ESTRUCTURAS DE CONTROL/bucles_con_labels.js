// Labels en bucles

// Ejemplo sin etiquetas
let unidades = 0;
let decenas = 0;

while (true) {
    while (true) {
        console.log (`El número actual es: ${decenas}${unidades}`)
        unidades++
        if (unidades === 10) {
            unidades = 0;
            break
        }
    }
    decenas++
    if (decenas === 2) {
        console.log(`El numero actual es: ${decenas}${unidades}`)
        break
    }
}

// Ejemplo con etiquetas

uni = 0;
dec = 0;

bucleDec: while (true) {
    bucleUni: while (true) {
        console.log (`El número actual es: ${dec}${uni}`)
        uni++
        if (uni === 10) {
            uni = 0;
            break bucleUni
        }
        if (dec === 2) {
            break bucleDec
        }
    }
    dec++
}