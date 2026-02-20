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

// //Selecciona el indice del equipo local y lo guardamos en una varible:
// let indiceLocal = Math.floor(Math.random() * equipos.length);

// //Selecciona el indice del equipo visitante y lo guardamos en una varible:
// let indiceVisitante = Math.floor(Math.random() * equipos.length);

// //Evitamos que los indices de las varibles local/visitante sean iguales y se enfrente entre si el mismo equipo:
// while (indiceLocal === indiceVisitante) {
//   indiceVisitante = Math.floor(Math.random() * equipos.length);
// };

// //Una vez obtenidos los indices aleatorios los guardamos como objetos en != variables:
// let equipoLocal = equipos[indiceLocal];
// let equipoVisitante = equipos[indiceVisitante];


/* Funcion que recibe dos parametros (local, visitante) 
simulando el partido y devolviendonos los goles en un objeto: */
function partidoAleatorio(local, visitante) {
  let factor = 20;
  let fuerzaLocal = (local.ataque + local.defensa)/ factor
  let golesLocal = Math.floor(Math.random() * fuerzaLocal)
  let fuerzaVisitante = (visitante.ataque + visitante.defensa)/ factor
  let golesVisitante = Math.floor(Math.random() * fuerzaVisitante)
  // Aqui guardamos el resultado en un objeto --> SOLO DEVUELVE GOLES
  return { golesLocal, golesVisitante};
};


let partidos = [];

for (let i = 0; i < equipos.length; i++) {
  for (let j = 0; j < equipos.length; j++) {
    if (i !== j) {
      let resultados = partidoAleatorio(equipos[i], equipos[j]);
      // Destructuring: Extraemos las propiedades del objeto en variables (Objeto return en la funcion).
      let { golesLocal, golesVisitante } = resultados
      ligaCompleta = partidos.push({
        local: equipos[i].equipo,
        visitante: equipos[j].equipo,
        golesLocal,
        golesVisitante,
      });
    };
  };
};
// p === partido:

partidos.forEach(p => {
  console.log(`${p.local} ${p.golesLocal} - ${p.golesVisitante} ${p.visitante}`)
});


/* CLASIFICACIÓN COMPLETA: */
// e === equipo:
// Añadimos propiedades nuevas a cada equipo del array de equipos: (Iteramos por el array equipos):
equipos.forEach(e => {
  e.puntos = 0;
  e.golesAFavor = 0;
  e.golesEnContra = 0;
  e.diferenciaDeGoles = 0;
});
partidos.forEach(p => {
  p.local
});









