// const { log } = require("console");
// const { type, arch } = require("os");
// const { connect } = require("http2");

const { getEquipos } = require("./datos/equiposRepository.js")
const { Equipo } = require("./logica/Equipo.js")
const { Temporada } = require("./logica/temporada.js")



let newInstancias = getEquipos().map(e => {
  return new Equipo(e.equipo, e.ataque, e.defensa)
});
// console.log(newInstancias);
const temporada = new Temporada(newInstancias)




temporada.simularPartido(temporada.equipos[0], temporada.equipos[1]);

// console.log(temporada)

