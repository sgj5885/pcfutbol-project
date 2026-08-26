export class PartidaRepository {
  // constructor (archivo) {

  // }

    async guardarPartida(partida) {
      try {
        const ruta = "./partidas/partida1.json";
        const texto = JSON.stringify(partida);
        await writeFile(ruta, texto);
      }
      catch(error) {
        console.error(error)
        throw error
      }
    }

    async cargarPartida(nombrePartida) {
      try {
        const ruta = `./partidas/${nombrePartida}.json`;
        const contenidoArchivo = await readFile(ruta, "utf-8");
        const datos = JSON.parse(contenidoArchivo); // Objeto plano que necesitamos para reconstruir una nueva clase;
      } 
      catch(error) {
        console.error(error)
        throw error
    }

    }

    borrarPartida(nombrePartida) {

    }

    listarPartidas() {

    }
}


class PartidaError extends Error {
  constructor(message) {
    super(message)
  }
}