import { TeamStats } from "./TeamStats.js";

export class Club {
  constructor(name, squad) {
    this.name = name;
    if (!Array.isArray(squad)) {
      throw new Error (`squad is not an array`);
    }
    this.squad = squad;
    this.stats = new TeamStats();
  }
    

}

const newClub = new Club ("R. Betis", ["Isco"]);
const newClub2 = new Club("R.Madrid", ["Mbappe"]);
// console.log(newClub);
// console.log(newClub2);
console.log(newClub.stats === newClub2.stats);

