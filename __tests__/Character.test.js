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
  })
}) 