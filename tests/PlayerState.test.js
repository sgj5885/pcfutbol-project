import test from "node:test";
import assert from "node:assert/strict";
import { Player } from "../backend/domain/Player.js";

test("A player start with a 100 of Energy", () => {
  const player = new Player("Pirri", 32, "Lateral Izquierdo", "DEF", 93, 65, 79, 87);
  const totalEnergy = player.playerState.playerEnergy;
  
  assert.equal(totalEnergy, 100);
  
});

test("A player reduce 30 of its Energy", () => {
  const player = new Player("Pirri", 32, "Lateral Izquierdo", "DEF", 93, 65, 79, 87);
  player.playerState.reduceEnergy(30);
  const newEnergy = player.playerState.playerEnergy 
  assert.equal(newEnergy, 70);
  
});

test("A test to try if min values are available", () => {
  const player = new Player("Jose Mari", 19, "Delantero", "DEL", 93, 88, 83, 85);
  
  player.playerState.reduceEnergy(95);
  
  assert.equal(player.playerState.playerEnergy, 20);
});

test("A test to try if max values are available", () => {
  const player = new Player("Maradona", 25, "Delantero", "DEL", 97, 88, 99, 98);
  player.playerState.recoverEnergy(30);
  assert.equal(player.playerState.playerEnergy, 100);
});

test("A test to try if a value is allowed", () => {
  const player = new Player("Rivaldo", 22, "Media Punta", "MPC", 94, 97, 96, 98);
  assert.throws(() => {
    player.playerState.reduceEnergy(-10);
  });
});


// (name, age, position, role, speed, dribbling, quality, agility)