// const { count } = require("console");

/* Este módulo será responsable de generar todas las jornadas y mantener la temporada completa */

/* CREACION DE JORNADAS Y TEMPORADAS: */ 
/* NODE VERSION */
// const { partidoAleatorio } = require("./simulador.js");
/* BROWSER VERSION */
import { partidoAleatorio } from "./simulador.js"

export class Temporada {
  constructor (equipos) {
    this.equipos = equipos;
    this.partidos = [];
    this.jornadas = [];
    // console.log(this.equipos);
    // console.log(this.partidos);
  }
  simularPartido(equipoLocal, equipoVisitante) {
    let resultado = partidoAleatorio(equipoLocal, equipoVisitante);
    // console.log(resultado);
    let golesLocal = resultado.golesLocal
    let golesVisitante = resultado.golesVisitante
    let infoLocal = equipoLocal.registrarPartido(golesLocal, golesVisitante);
    let infoVistante = equipoVisitante.registrarPartido(golesVisitante, golesLocal);
    let infoPartido = this.partidos.push({
      equipoLocal,
      equipoVisitante,
      golesLocal,
      golesVisitante
    })
    
    
  } 

  simularTemporada() {
    for (let i = 0; i < this.equipos.length; i++) {
      for (let j = i + 1; j < this.equipos.length; j++) {
        this.simularPartido(this.equipos[i], this.equipos[j]);
      };
    };
  };
  
  obtenerClasificacion() {
    const copiaEquipos = this.equipos.slice()
    let clasificacionTemp = copiaEquipos.sort((a, b) => {
      if (b.puntos !== a.puntos) return b.puntos - a.puntos;
      if (b.diferenciaDeGoles !== a.diferenciaDeGoles) return b.diferenciaDeGoles - a.diferenciaDeGoles;
      return b.golesAFavor - a.golesAFavor
    })
    return clasificacionTemp;
  }

  mostrarInfoEquipo(nombreEquipo) {
    let infoEquipo = this.equipos.find((item) => item.equipo === nombreEquipo);
    // console.log(infoEquipo);
    let partidosJugados = this.partidos.filter((partido => {
      // console.log(item)
      return (partido.equipoLocal.equipo === nombreEquipo || partido.equipoVisitante.equipo === nombreEquipo)
    }));
    return {
      PJ: partidosJugados.length,
      puntos: infoEquipo.puntos,
      GF: infoEquipo.golesAFavor,
      GC: infoEquipo.golesEnContra,
      DG: infoEquipo.diferenciaDeGoles
    };
    
  };

  // reiniciarTemporada() {}
}

/* NODE VERSION */
// module.exports = { Temporada };








