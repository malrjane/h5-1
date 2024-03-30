import Character from "../character";
test("name should be no less 2", () => {
  expect(() => new Character('a', 'Bowman')).toThrowError(new Error ('incorrect name'));
});

test("name should be no more 10 words", () => {
  expect(() => new Character('antropologist', 'Bowman')).toThrowError(new Error ('incorrect name'));
});

test('type should be as types', () => {
  expect(() => new Character('Player', 'Hero')).toThrowError(new Error('incorrect type'));
});

test('the right name length', () => {
  const character = new Character('Player', 'Magician');
  expect(character.name).toBe('Player');
});

test('the right type', () => {
  const character = new Character('Player', 'Magician');
  expect(character.type).toBe('Magician');
});

test('the right name length and the right type', () => {
  const character = new Character('Player', 'Magician');
  const result = {
    name: 'Player',
    type: 'Magician',
    health: 100,
    level: 1,
  };
  expect(character).toMatchObject(result);
});