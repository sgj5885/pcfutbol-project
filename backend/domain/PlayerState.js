const INITIAL_ENERGY = 100;
const MIN_ENERGY = 20;
const MAX_ENERGY = 100;
const INITIAL_FORM = 100;
const MIN_FORM = 0;
const MAX_FORM = 100;
const INITIAL_MORALE = 100;
const MAX_MORALE = 100;
const MIN_MORALE = 0; 


const add = (a, b) => (a + b);
const subtract = (a, b) => (a - b);

// Getter para propiedades privadas de una clase:
export class PlayerState {
  #energy;
  #form;
  #morale;

  constructor () {
    this.#energy = INITIAL_ENERGY;
    this.#form = INITIAL_FORM;
    this.#morale = INITIAL_MORALE;
  }
  // Regala interna de validación de tipo de dato que introducimos mediante value.
  #validateValue(value) {
    if (value < 0 || typeof value !== "number" || !Number.isFinite(value)) {
      throw new Error(`El valor introducido no es valido`);
    };
  }
  // Getters para obtenerlos valores de las propiedades del constructor:
  get playerEnergy() {
    return this.#energy;
  }
  
  get playerForm() {
    return this.#form;
  }
  
  get playerMorale() {
    return this.#morale;
  }
  
  
  
  #calculateAndLimitValue(value1, value2, operation, min, max) {
    const result = operation(value1, value2);
    
    if (result < min) {
      return min
    }
    else if (result > max) {
      return max
    }
    else {
      return result;
    }
    
  }
  
  // ENERGY:
  // Recover Energy:
  
  recoverEnergy(addEnergy) {
    this.#validateValue(addEnergy);
    const actualEnergy = this.#energy;
    
    const energyValue = this.#calculateAndLimitValue(actualEnergy, addEnergy, add, MIN_ENERGY, MAX_ENERGY);
    
    this.#energy = energyValue;
  };
  // Reduce Energy:
  reduceEnergy(discountValue) {
    this.#validateValue(discountValue);
    
    const actualEnergy = this.#energy;
    const energyValue = this.#calculateAndLimitValue(actualEnergy, discountValue, subtract, MIN_ENERGY, MAX_ENERGY)
    
    this.#energy = energyValue;
  };
  
  //FORM:
  // Recover Form:
  recoverForm(addValue) {
    this.#validateValue(addValue);
    const actualForm = this.#form;
    const calculatedForm = this.#calculateAndLimitValue(actualForm, addValue, add, MIN_FORM, MAX_FORM);
    
    this.#form = calculatedForm;
    
  }
  // Reduce Form:
  reduceForm(reductionValue) {
    this.#validateValue(reductionValue);
    const actualForm = this.#form;
    const calculatedForm = this.#calculateAndLimitValue(actualForm, reductionValue, subtract, MIN_FORM, MAX_FORM);
    
    this.#form = calculatedForm
  }
  
  //MORALE:
  // Recover Morale:
  recoverMorale(addValue) {
    this.#validateValue(addValue);
    const actualMorale = this.#morale;
    const calculatedMorale = this.#calculateAndLimitValue(actualMorale, addValue, add, MIN_MORALE, MAX_MORALE);
    
    this.#morale = calculatedMorale;
  }
  // Reduce Morale:
  reduceMorale(reductionValue) {
    this.#validateValue(reductionValue);
    const actualMorale = this.#morale;
    const calculatedMorale = this.#calculateAndLimitValue(actualMorale, reductionValue, subtract, MIN_MORALE, MAX_MORALE);
    
    this.#morale = calculatedMorale;
  }
  
}

const newPlayerState = new PlayerState();













