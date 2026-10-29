import { PlayerState } from "./PlayerState.js";

export class Player {
  constructor (name, age, position, role, speed, dribbling, quality, agility) {
    this.name = name;
    this.age = age;
    this.position = position;
    this.role = role;
    this.speed = speed
    this.dribbling = dribbling;
    this.quality = quality;
    this.agility = agility;
    this.playerState = new PlayerState();
    
    function validateAttribute(attribute, value) {
      if (value < 0 || value > 100) {
        throw new Error (
          `Imposible crear el jugador: ${attribute} debe estar entre 0 y 100`
        )
      }
    };
    // Objeto creado/utilizado para validar los atributos iniciales del jugador. 
    const playerAttributes = {
      speed, 
      dribbling,
      quality,
      agility,
    }
    
    const attributesValues = Object.entries(playerAttributes);
    for (const [attribute, value] of attributesValues) {
      validateAttribute(attribute, value)
    }

    
  }

  // Player Behaviour:

  // Player capacity:
  calculateBaseRating() {
    const baseRating = (this.quality * 0.375) + (this.speed * 0.25) + (this.dribbling * 0.1875) + (this.agility * 0.1875)
    // return Math.round(baseRating);
    return baseRating;
  }

  // Efective current capacity:
  calculatePlayerRating() {
    const playerRating = (this.calculateBaseRating() * 0.80) + (this.playerState.playerEnergy * 0.10) + (this.playerState.playerForm * 0.06) + (this.playerState.playerMorale * 0.04);
  //   return Math.round(playerRating);
    return playerRating;
  }

  reduceEnergy(value) {
    this.playerState.reduceEnergy(value)
  }
}
// const newPlayerA = new Player("Test PlayerA", 19, "DEL", "DEL", 80, 83, 85, 88);
// const newPlayerB = new Player("Test PlayerB", 22, "DEL", "DEL", 87, 83, 85, 88);


// // console.log(newPlayerB.playerState === newPlayerA.playerState);



// newPlayerA.reduceEnergy(30);
// console.log(newPlayerA);





