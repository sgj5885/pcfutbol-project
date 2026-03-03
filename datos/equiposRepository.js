/*
Importamos el modulo fs de Node 
*/
const fs = require("fs");
const { get } = require("http");
/*
Utilizamos path para poder utilizar rutas absolutas/__relativas
*/
const path = require("path");

/* Utilizamos fs para poder leer los archivos que estan en la carpeta JSON
fs = file system (modulo de Node que permite leer y escribir archivos desde nuestro disco).
Parsear JSON --> convertir el texto del archivo en objetos JS manipulables
*/
const archivoEquipos = path.join(__dirname, "./equipos.json");
const { equipos } = JSON.parse(fs.readFileSync(archivoEquipos, "utf-8"));



// module.exports = { archivoEquipos };

function getEquipos() {
  return equipos;   // Devolveremos un Array de equipos que contiene toda la liga.
};

module.exports = { getEquipos };
