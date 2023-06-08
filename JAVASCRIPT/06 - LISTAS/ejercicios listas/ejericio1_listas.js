const arrayCompras = ["Ojo de bife", "Lechuga", "Tomate", "Cebolla", "Provoleta", "Sal", "Pimienta", "Morrón"];

arrayCompras.push("Aceite de Girasol");

arrayCompras.pop();

const arrayPeliculas = [
    {titulo: "Volver al futuro",
    director: "Robert Zemeckis",
    fecha: 1985},
    {titulo: "Volver al futuro II",
    director: "Robert Zemeckis",
    fecha: 1989},
    {titulo: "The Matrix Resurrections",
    director: "Lana Wachowski",
    fecha: 2021}
];

const peliculasNuevas = arrayPeliculas.filter(pel => pel.fecha > 2009);

const peliculasDirectores = arrayPeliculas.map(dir => dir.director);

const peliculasTitulos = arrayPeliculas.map(tit => tit.titulo);

const directoresYTitulos = (peliculasDirectores.concat(peliculasTitulos));

const directoresYTitulosPropagacion = [...peliculasDirectores, ...peliculasTitulos];