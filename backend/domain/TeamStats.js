export class TeamStats {
  constructor() {
    this.played = 0;
    this.wins = 0;
    this.draws = 0;
    this.losses = 0;
    this.goalsFor = 0;
    this.goalsAgainst = 0;
    this.points = 0;
  }

  updateStats(goalsFor, goalsAgainst) {
    if (goalsFor > goalsAgainst) {
      this.played += 1;
      this.wins += 1;
      this.goalsFor += goalsFor;
      this.goalsAgainst += goalsAgainst
      this.points += 3;
    }
    else if(goalsFor < goalsAgainst) {
      this.played += 1;
      this.losses += 1;
      this.goalsFor += goalsFor;
      this.goalsAgainst += goalsAgainst;
    }
    else {
      this.played += 1;
      this.draws += 1;
      this.points += 1;
      this.goalsFor += goalsFor;
      this.goalsAgainst += goalsAgainst;
    }
  } 
}

const newStats = new TeamStats();
newStats.updateStats(2, 1);
console.log(newStats);

// Next match:
newStats.updateStats(0, 5);
console.log(newStats);


// Next match:
newStats.updateStats(1, 1);
console.log(newStats);










