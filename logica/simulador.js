/* Funcion que recibe dos parametros (local, visitante) 
simulando el partido y devolviendonos los goles en un objeto: */
function partidoAleatorio(equipoLocal, equipoVisitante) {
  let factor = 20;
  let fuerzaLocal = (equipoLocal.ataque + equipoLocal.defensa)/ factor
  let golesLocal = Math.floor(Math.random() * fuerzaLocal)
  let fuerzaVisitante = (equipoVisitante.ataque + equipoVisitante.defensa)/ factor
  let golesVisitante = Math.floor(Math.random() * fuerzaVisitante)
  // Aqui guardamos el resultado en un objeto --> SOLO DEVUELVE GOLES
  return { golesLocal, golesVisitante };
};


/* Exportacion de modulos que podemos usar en otros archivos */
module.exports = { partidoAleatorio };













