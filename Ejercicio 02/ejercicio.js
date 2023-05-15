isDeveloper = false;
const fechaNacimiento = new Date(1984, 7, 19);
const fechaLibro = new Date(1993, 0, 1);
const urlElInformePelicano = "https://es.wikipedia.org/wiki/El_informe_Pel%C3%ADcano_(novela)";
libroFavorito = {
    titulo: "El informe Pelícano",
    autor: "John Grisham",
    fecha: fechaLibro,
    url: urlElInformePelicano,
}

lista = ["Alejandro Espasandín", 38, isDeveloper, fechaNacimiento, libroFavorito]

console.log(lista);