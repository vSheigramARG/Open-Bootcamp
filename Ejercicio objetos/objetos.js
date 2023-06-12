const datos = {
    nombre: "Alejandro",
    apellido: "Espasandín",
    edad: 38,
    altura: 178,
    eresDesarrollador: false
}

const edad = datos.edad;

const lista = [
    {
        ...datos
    }, {
        nombre: "Matías",
        apellido: "Naveiro",
        edad: 38,
        altura: 188,
        esDesarrollador: false
    }, {
        nombre: "Adrián",
        apellido: "Moretti",
        edad: 38,
        altura: 173,
        esDesarrollador: true
    }
];

const listaOrdenada = lista.sort((a, b) => b.edad - a.edad);

console.log(listaOrdenada);