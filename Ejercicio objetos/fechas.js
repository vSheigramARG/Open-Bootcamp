const hoy = new Date();

const fechaNac = new Date(1984, 7, 19);

const comparar = hoy > fechaNac;

const diaNac = fechaNac.getDate();
const mesNac = fechaNac.getMonth() +1;
const anyoNac = fechaNac.getFullYear();