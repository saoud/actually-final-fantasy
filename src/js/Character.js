export default class Character {
  constructor (name, characterClass, hitPoints, strength, toughness, mind) {
    this.name = name;
    this.characterClass = characterClass;
    this.hitPoints = hitPoints;
    this.strength = strength;
    this.toughness = toughness;
    this.mind = mind;
    this.level = 1;
    this.equipment = {};
  }
}