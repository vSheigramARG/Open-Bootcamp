// Casos muy específicos - break, continue
let lista = [1, 2 , 3, 4, 5, 6, 7, 8];

// Paso por pantalla lista completa
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i])
}

// Paso por pantalla la lista hasta que llegue al break
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i])

    if (lista[i] > 5) {
        break;
    }
}

// Paso por pantalla la lista hasta omitiendo resultado y hasta que llegue al break
for (let i = 0; i < lista.length; i++) {
    if (lista[i] === 3) {
        continue;
    }

    console.log(lista[i])

    if (lista[i] > 5) {
        break;
    }
}