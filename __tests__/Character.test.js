import Character from '../src/js/Character.js';

describe('Character', () => {

  let Cloud;
  
  beforeEach(() => {
    Cloud = new Character("Cloud", "Soldier", 12, 7, 7, 4);
  });

  test('It should create a new character with stats at level 1', () => {
    expect(Cloud.name).toEqual("Cloud");
    expect(Cloud.characterClass).toEqual("Soldier");
    expect(Cloud.hitPoints).toEqual(12);
    expect(Cloud.strength).toEqual(7);
    expect(Cloud.toughness).toEqual(7);
    expect(Cloud.mind).toEqual(4);
    expect(Cloud.level).toEqual(1);
    expect(Cloud.equipment).toEqual({});
    expect(Cloud.buffs).toEqual({});
  });

  test('It should add a level to an existing character', () => {
    Cloud.levelUp();
    expect(Cloud.level).toEqual(2);
  });
  
  test('It should add an item to inventory', () => {
    let busterSword = {name: "Buster Sword", bonus:"+1"}
    Cloud.addItemToInventory(busterSword);
    expect(Cloud.equipment).toEqual({"Buster Sword": {"bonus": "+1", "name": "Buster Sword"}});
  });

  test('It should add a type and bonus to buff', () => {
    let strengthBuff = {type: "Strength Buff", bonus:"+5"}
    Cloud.buffAdd(strengthBuff);
    expect(Cloud.buffs).toEqual({"Strength Buff": {"type": "Strength Buff", "bonus": "+5"}});
  }); 
}); 
