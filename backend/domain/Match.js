import { Goal } from "./Goal.js";

export class Match {
  #goals;
  #status;
  #period;

  constructor(homeTeam, awayTeam) {
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this.#goals = [];
    this.cards = [];
    this.injuries = [];
    this.#status = "scheduled";
    this.#period = null;
  }
  // Looks for the "in_progress" status to start a match and register a goal, card o injury.
  #inProgressMatch() {
    if (this.#status !== "in_progress") {
      throw new Error("The match is not in progress")
    }
  }

  get goalsMatch() {
    return this.#goals.slice();  //Devuelve un array de todos los goles que se marcan en un partido
  }

  get matchStatus() {
    return this.#status;
  }
  
  get score() {
    const homeTeam = this.goalsMatch.filter( goal => goal.team === this.homeTeam);
    const awayTeam = this.goalsMatch.filter( goal => goal.team === this.awayTeam); 

    return {
      home: homeTeam.length,
      away: awayTeam.length,
    };
  }
  // Switch the status from scheduled to in_progress to start the match.
  startMatch() {
    if (this.#status !== "scheduled") {
      throw new Error("The match is not scheduled");
    };
    this.#status = "in_progress";
    this.#period = "first_half_in_progress"
  }

  halfTime() {
    if (this.#inProgressMatch() && this.#period !== "first_half_in_progress") {
    };
    this.#status = "halftime";
    
  }

  resumeMatch() {
    if(this.#status !== "halftime") {
      throw new Error("This action is not allowed, the match is halftime")
    };
    this.#status = "in_progress";
    this.#period = "second_half_in_progress"
  }

  finishMatch() {
    if (this.#status !== "in_progress" && this.#period !== "second_half_in_progress") {
      throw new Error("The status should be in progress and the period should be 2nd half to finish the match")
    };

    this.#status = "finished";
  }


  registerGoal(goal) {
    this.#inProgressMatch();  

    if (goal.team !== this.homeTeam && goal.team !== this.awayTeam) {
      throw new Error (`This ${goal.team} does not belong to this match`)
    };
    return this.#goals.push(goal);
  }


}

const newMatch = new Match("R. Madrid", "Rayo Vallecano");
console.log(newMatch.matchStatus);
newMatch.startMatch();
console.log(newMatch.matchStatus);

const goal1 = new Goal("Cucurella", 15, "R. Madrid");
// console.log(goal1);
newMatch.registerGoal(goal1);
console.log(newMatch.goalsMatch);

newMatch.halfTime();
console.log(newMatch.matchStatus);
const goal2 = new Goal("Mbappe", 58, "R. Madrid");
// console.log(goal2);
// newMatch.registerGoal(goal2);
// console.log(newMatch.goalsMatch);

newMatch.resumeMatch();
console.log(newMatch.matchStatus);

newMatch.registerGoal(goal2);
console.log(newMatch.goalsMatch);

newMatch.finishMatch();
console.log(newMatch.matchStatus);
const goal3 = new Goal("Onesimo", 112, "Rayo Vallecano");
newMatch.registerGoal(goal3);
console.log(newMatch.goalsMatch);





















 





