// Constructores:

// function Equipo(equipo, ataque, defensa) {
//   this.equipo = equipo;
//   this.ataque = ataque;
//   this.defensa = defensa;
//   this.puntos = 0;
//   this.golesAFavor = 0;
//   this.golesEnContra = 0;
//   this.diferenciaDeGoles = 0;
// };

// Equipo.prototype.descripcionEquipo = function() {
//   return (`${this.equipo} tiene estas stats: AT: ${this.ataque} DF: ${this.defensa}`)
// };

//Class:

export class Equipo {
  constructor (equipo, ataque, defensa) {
    this.equipo = equipo;
    this.ataque = ataque;
    this.defensa = defensa;
    this.puntos = 0;
    this.golesAFavor = 0;
    this.golesEnContra = 0;
    this.diferenciaDeGoles = 0;
    this.partidosJugados = 0;
    this.partidosGanados = 0;
    this.partidosEmpatados = 0;
    this.partidosPerdidos = 0;
  }
  registrarPartido(golesAFavor, golesEnContra) {
    this.partidosJugados += 1;
    this.golesAFavor += golesAFavor
    this.golesEnContra += golesEnContra
    this.diferenciaDeGoles = this.golesAFavor - this.golesEnContra
    if (golesAFavor > golesEnContra) {
      this.puntos += 3
      this.partidosGanados += 1
    } 
    else if (golesAFavor === golesEnContra) {
      this.puntos += 1
      this.partidosEmpatados += 1
    } 
    else {
      this.puntos += 0
      this.partidosPerdidos += 1
    }
  }
  reiniciarEstadisticas() {
    this.puntos = 0;
    this.golesAFavor = 0;
    this.golesEnContra = 0;
    this.diferenciaDeGoles = 0;
    this.partidosJugados = 0;
    this.partidosGanados = 0;
    this.partidosEmpatados = 0;
    this.partidosPerdidos = 0;
  }
}
// module.exports = { Equipo };


