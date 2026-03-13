// NODE VERSION //

// const { log } = require("console");
// const { type, arch } = require("os");
// const { connect } = require("http2");

const { getEquipos } = require("./datos/equiposRepository.js")
const { Equipo } = require("./logica/Equipo.js")
const { Temporada } = require("./logica/temporada.js")

/* 
Vamos a transformar el array de equipo que recibimos de getEquipos,
despues creamos nuevas Instancias de la class Equipo
*/
let newInstancias = getEquipos().map(e => {
  return new Equipo(e.equipo, e.ataque, e.defensa)
});
// console.log(newInstancias);

// Utizamos la clase generada en temporada para crear nuevas Instancias de Temporada //
const temporada = new Temporada(newInstancias)
// console.log(temporada.equipos)



// temporada.simularPartido(temporada.equipos[0], temporada.equipos[1]);
temporada.simularTemporada();
// // console.log(temporada.partidos);
console.log(temporada.obtenerClasificacion());
// console.log(temporada.mostrarInfoEquipo('Real Madrid'));




