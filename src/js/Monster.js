export default class Monster {
  constructor(name, hitPoints, damage, type) {
    this.name = name;
    this.hitPoints = hitPoints;
    this.damage = damage;
    this.type = type;
    this.treasure = {};
  }

  addTreasure(item) {
    this.treasure[item.name] = item
  };
};