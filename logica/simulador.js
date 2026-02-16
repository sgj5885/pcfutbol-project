/*
Importamos el modulo fs de Node 
*/
const fs = require("fs");
const { type } = require("os");
/*
Utilizamos path para poder utilizar rutas relativas
*/
const path = require("path");

/* Utilizamos fs para poder leer los archivos que estan en la carpeta JSON
fs = file system (modulo de Node que permite leer y escribir archivos desde nuestro disco).
Parsear JSON --> convertir el texto del archivo en objetos JS manipulables
*/
const archivoEquipos = path.join(__dirname, "../datos/equipos.json");
const { equipos } = JSON.parse(fs.readFileSync(archivoEquipos, "utf-8"));

// const equipos = objeto.equipos

// console.log(typeof(equipos));

// console.log(equipos[0]);

let equipoBarça = equipos[1];
let plantillaBarça = equipoBarça.plantilla;
console.log(typeof(plantillaBarça))
console.log(plantillaBarça[2].media);


let home = Math.floor(Math.random() * equipos.length);
let guest = Math.floor(Math.random() * equipos.length);

function match(home, guest) {
  if (home !== guest) {
    console.log(`${home} * ${guest} = ${home * guest}`);
  } else {
    console.log(home);
    console.log(guest);
    guest = Math.floor(Math.random() * equipos.length);
    console.log(`${home} + ${guest} = ${home + guest}`);
  };
};

match(home, guest);










