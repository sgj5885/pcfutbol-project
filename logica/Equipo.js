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

class Equipo {
  constructor (equipo, ataque, defensa) {
    this.equipo = equipo;
    this.ataque = ataque;
    this.defensa = defensa;
    this.puntos = 0;
    this.golesAFavor = 0;
    this.golesEnContra = 0;
    this.diferenciaDeGoles = 0;
  }
  registrarPartido(golesAFavor, golesEnContra) {
    this.golesAFavor += golesAFavor
    this.golesEnContra += golesEnContra
    this.diferenciaDeGoles += this.golesAFavor - this.golesEnContra
    if (golesAFavor > golesEnContra) {
      this.puntos += 3;
    } else if (golesAFavor === golesEnContra) {
      this.puntos += 1;
    } else {
      this.puntos += 0
    }
  }
}
module.exports = { Equipo };

