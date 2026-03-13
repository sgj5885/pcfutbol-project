// BROWSE VERSION //

import { equipos as equiposDatos } from "./datos/equiposBrowser.js";
// console.log(equiposDatos);
import { Equipo } from "./logica/Equipo.js";
import { Temporada } from "./logica/temporada.js";



const instanciasEquipos = equiposDatos.map(e => {
  return new Equipo(e.equipo, e.ataque, e.defensa)
});

const temporada = new Temporada(instanciasEquipos)
window.temporada = temporada;




