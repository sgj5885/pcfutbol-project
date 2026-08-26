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
    this.jornadas = [];  // Genera la competicion
    this.resultadosJornadas = []; //Alimenta la pantalla de resultados
    this.jornadaActual = 0;
    this.historialLiga = [];
  }
  
  generarCalendario() {
    let copiaEquipos = this.equipos.slice();
    let numeroJornadas = copiaEquipos.length - 1;
    this.jornadas = [];
    for (let i = 0; i < numeroJornadas; i++) {                   // Bucle para generar cada jornada y meterlo dentro de jornadas
      let jornada = [];
      for (let j = 0; j < copiaEquipos.length / 2; j++) {        // Bucle para partidos dentro de una jornada //
        let partido = {
          equipoLocal: copiaEquipos[j],
          equipoVisitante: copiaEquipos[copiaEquipos.length - 1 - j]
        };
        jornada.push(partido)       // Metemos cada partido de la jornada dentro de la jornada
      }
      let ultimoEquipo = copiaEquipos.pop();
      copiaEquipos.splice(1, 0, ultimoEquipo)
      this.jornadas.push(jornada);  // Metemos cada jornada con los partidos dentro del array de jornadas
    }
    return this.jornadas
  }

  simularSiguienteJornada() {

    if (this.jornadaActual >= this.jornadas.length) {
      console.log('¡¡Temporada Finalizada!!');

      let clasificación = this.obtenerClasificacion();
    
      // let campeón = clasificación[0].equipo;
      // let subcampeón = clasificación[1].equipo;
      let clasificaciónTemp = [];
      
      for (let i = 0; i < clasificación.length; i++) {
        clasificaciónTemp.push(
          {
          posicion: i + 1,
          equipo: clasificación[i].equipo,
          puntos: clasificación[i].puntos,
          DG: clasificación[i].diferenciaDeGoles,
          }
        );
      }

      let infoTemporada = {
      temporada: 'Temporada 25/26',  // This should be dynamic data in orther to keep going with following seasons.
      CAMPEÓN: clasificaciónTemp[0].equipo,
      SUBCAMPEÓN: clasificaciónTemp[1].equipo,
      CLASIFICACIÓN: clasificaciónTemp,
      };

      this.historialLiga.push(infoTemporada);
    
      
      this.reiniciarTemporada();
      this.generarCalendario();
      return;
    }

    let jornada = this.jornadas[this.jornadaActual];
    let resultadosJornada = [];

    for (let i = 0; i < jornada.length; i++) {
      let partido = jornada[i]; // Array de objetos con los partidos de la jornada i.
      let resultado = partidoAleatorio(partido.equipoLocal, partido.equipoVisitante); // Objeto que contiene los goles del partido ejecutado.
      // De este modo modificamos las estadisticas de cada equipo en cada partido.
      partido.equipoLocal.registrarPartido(resultado.golesLocal, resultado.golesVisitante);
      partido.equipoVisitante.registrarPartido(resultado.golesVisitante, resultado.golesLocal);

      // partidoFinal representa un partido.
      let partidoFinal = {
        local: partido.equipoLocal.equipo,
        visitante: partido.equipoVisitante.equipo,
        golesLocal: resultado.golesLocal,
        golesVisitante: resultado.golesVisitante
      };
      resultadosJornada.push(partidoFinal);

    }
    this.resultadosJornadas.push(
      {
      jornada: this.jornadaActual +1,
      partidos: resultadosJornada,
      }
    );
    this.jornadaActual++;
  }

  mostrarResultadosJornada(numeroJornada) {
    return this.resultadosJornadas.find(item => item.jornada === numeroJornada);
  }

  obtenerResultadosTemporada() {
    let resultadosJornadas = this.resultadosJornadas.slice();
  }

  
  // Alimenta la pantalla de Clasificación.
  obtenerClasificacionGeneral() {
    let copiaEquipos = this.equipos.slice();
    
    copiaEquipos.sort((a, b) => {
      if (b.puntos === a.puntos) {
        return b.diferenciaDeGoles - a.diferenciaDeGoles
      } 
      else  { 
        return b.puntos - a.puntos;
      }
      // (b.puntos === a.puntos && b.diferenciaDeGoles !== a.diferenciaDeGoles)
    })
    return copiaEquipos;
  }

  mostrarClasificacionGeneral() {
    let obtenerClasificacion = this.obtenerClasificacionGeneral();

    console.log('Clasificación:')
    for (let i = 0; i < obtenerClasificacion.length; i++) {
      console.log(`${i + 1}. ${obtenerClasificacion[i].equipo} | PTS: ${obtenerClasificacion[i].puntos} | DG: ${obtenerClasificacion[i].diferenciaDeGoles} | PJ: ${obtenerClasificacion[i].partidosJugados} | PG: ${obtenerClasificacion[i].partidosGanados} | PE: ${obtenerClasificacion[i].partidosEmpatados} | PP: ${obtenerClasificacion[i].partidosPerdidos} | GF: ${obtenerClasificacion[i].golesAFavor} | GC: ${obtenerClasificacion[i].golesEnContra}`);
    }
  }

  reiniciarTemporada() {
    this.equipos;
    this.partidos = [];
    this.jornadas = [];
    this.jornadaActual = 0;
    for (let i = 0; i < this.equipos.length; i++) {
      this.equipos[i].reiniciarEstadisticas();
    }
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

}

/* NODE VERSION */
// module.exports = { Temporada };








