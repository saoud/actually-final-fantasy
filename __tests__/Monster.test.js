import Monster from '../src/js/Monster.js';

describe('Monster', () => {
  let It;

  beforeEach(() => {
    It = new Monster("It", 20, 4, "Psychic");
  });

  test('It should create a new monster with stats', () => {
    expect(It.name).toEqual("It");
    expect(It.hitPoints).toEqual(20);
    expect(It.damage).toEqual(4);
    expect(It.type).toEqual("Psychic");
    expect(It.treasure).toEqual({});
  });

  test('It should add a treasure object to the monster object', ()=> {
    let clownMakeup = {name: "Clown makeup", bonus: "+1 mind"};
    It.addTreasure(clownMakeup);
    expect(It.treasure).toEqual({"Clown makeup": {"name": "Clown makeup", "bonus": "+1 mind"}});
  });
});