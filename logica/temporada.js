/* Este módulo será responsable de generar todas las jornadas y mantener la temporada completa */

/* CREACION DE JORNADAS Y TEMPORADAS: */ 

const { partidoAleatorio } = require("./simulador.js")


class Temporada {
  constructor (equipos) {
    this.equipos = equipos
    this.partidos = []
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
    // console.log(this.partidos);
  } 
}

module.exports = { Temporada };



// let jornada = []; // Una Jornada sera una Array de partidos.
// const temporada = []; // una temporada sera un Array de jornadas.


// Generar la primera jornada:

// for (let i = 0; i < equipos.length; i++) {
//   for (let j = 0; j < equipos.length; j++) {
//     if (i !== j) {
//       let resultadosJornada = partidoAleatorio(equipos[i], equipos[j]);
//       // console.log(resultadosJornada);
//       let { golesLocal, golesVisitante } = resultadosJornada;
//       jornada.push({
//         local: equipos[i],
//         visitante: equipos[j],
//         golesLocal,
//         golesVisitante,
//       });
//     };
//   };
// };
// console.log(jornada);


/* CLASIFICACIÓN COMPLETA: */

// Inicialización de estadísticas:

// e === equipo:
// Añadimos propiedades nuevas a cada equipo del array de equipos: (Iteramos por el array equipos):
// equipos.forEach(e => {
//   e.puntos = 0;
//   e.golesAFavor = 0;
//   e.golesEnContra = 0;
//   e.diferenciaDeGoles = 0;
// });

// /* Recorrido de partidos para actualizar stats */
// // p === partido:
// partidos.forEach(p => {
//   p.local.golesAFavor += p.golesLocal;
//   p.local.golesEnContra += p.golesVisitante;
//   p.visitante.golesAFavor += p.golesVisitante;
//   p.visitante.golesEnContra += p.golesLocal;
//   p.local.diferenciaDeGoles = p.local.golesAFavor - p.local.golesEnContra;
//   p.visitante.diferenciaDeGoles = p.visitante.golesAFavor - p.visitante.golesEnContra;
//   if (p.golesLocal > p.golesVisitante) {
//     p.local.puntos += 3;
//     p.visitante.puntos += 0;
//   } else if (p.golesLocal === p.golesVisitante) {
//     p.local.puntos += 1;
//     p.visitante.puntos += 1;
//   } else {
//     p.local.puntos += 0;
//     p.visitante.puntos += 3;
//   }
// });
// // a y b son objetos del array por lo que tenemos que acceder a sus propiedades:
// let clasificacion = equipos.sort((a, b)=> {
//   if (b.puntos !== a.puntos) return b.puntos - a.puntos;
//   if (b.diferenciaDeGoles !== a.diferenciaDeGoles) return b.diferenciaDeGoles - a.diferenciaDeGoles;
//   return b.golesAFavor - a.golesAFavor
// });


// clasificacion.forEach((e, index) => {
//   console.log(`${index + 1} .${e.equipo} - Pts: ${e.puntos}, GF: ${e.golesAFavor}, GC: ${e.golesEnContra}, DG: ${e.diferenciaDeGoles}`);
// });


/* GENERACION DE PARTIDOS!!: */

// let partidos = [];

// for (let i = 0; i < equipos.length; i++) {
//   for (let j = 0; j < equipos.length; j++) {
//     if (i !== j) {
//       let resultados = partidoAleatorio(equipos[i], equipos[j]);
//       // Destructuring: Extraemos las propiedades del objeto en variables (Objeto return en la funcion).
//       let { golesLocal, golesVisitante } = resultados
//       partidos.push({
//         local: equipos[i], // Refrenciamos a los objetos del array equipos
//         visitante: equipos[j],
//         golesLocal,
//         golesVisitante,
//       });
//     };
//   };
// };