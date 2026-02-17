/*
Importamos el modulo fs de Node 
*/
const { log } = require("console");
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



//Selecciona el indice del equipo local y lo guardamos en una varible:
let indiceLocal = Math.floor(Math.random() * equipos.length);

//Selecciona el indice del equipo visitante y lo guardamos en una varible:
let indiceVisitante = Math.floor(Math.random() * equipos.length);

//Evitamos que los indices de las varibles local/visitante sean iguales y se enfrente entre si el mismo equipo:
while (indiceLocal === indiceVisitante) {
  indiceVisitante = Math.floor(Math.random() * equipos.length);
};

//Una vez obtenidos los indices aleatorios los guardamos como objetos en != variables:
let equipoLocal = equipos[indiceLocal];
let equipoVisitante = equipos[indiceVisitante];


//funcion que recibe dos parametros (local, visitante) para simular el partido:
function partidoAleatorio(local, visitante) {
  let factor = 20;
  let fuerzaLocal = local.ataque + local.defensa
  let golesLocal = Math.floor(Math.random() * (fuerzaLocal/factor))
  let fuerzaVisitante = visitante.ataque + visitante.defensa
  let golesVisitante = Math.floor(Math.random() * (fuerzaVisitante/factor))
  let resultado = (`Resultado: ${local.equipo} ${golesLocal} - ${golesVisitante} ${visitante.equipo}`);
  return resultado;
};
console.log(partidoAleatorio(equipoLocal, equipoVisitante));
// console.log(partidoAleatorio(equipos[0], equipos[3]));
// let newTeam = {equipo: 'Sevilla', ataque: 79, defensa: 75};
// console.log(partidoAleatorio(newTeam, equipos[1]));










