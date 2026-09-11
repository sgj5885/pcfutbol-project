

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
    this.energy = 100;
    this.form = 100;
    this.morale = 100;
    
    function validateAttribute(attribute, value) {
      if (value < 0 || value > 100) {
        throw new Error (
          `Imposible crear el jugador: ${attribute} debe estar entre 0 y 100`
        )
      }
    };

    const playerAttributes = {
      speed, 
      dribbling,
      quality,
      agility,
      energy: this.energy,
      form: this.form,
      morale: this.morale,
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
    const playerRating = (this.calculateBaseRating() * 0.80) + (this.energy * 0.10) + (this.form * 0.06) + (this.morale * 0.04);
  //   return Math.round(playerRating);
    return playerRating;
  }
}
const newPlayer = new Player("Test Player", 19, "DEL", "DEL", 80, 83, 85, 88);
console.log(newPlayer);

console.log(newPlayer.calculateBaseRating());
console.log(newPlayer.calculatePlayerRating());

newPlayer.energy = 50;
console.log(newPlayer.calculateBaseRating());
console.log(newPlayer.calculatePlayerRating());


newPlayer.form= 150;
console.log(newPlayer);
