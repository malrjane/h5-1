export default class Character {
  constructor(name, type) {
    if(name.length < 2 || name.length > 10) {
      throw new Error('incorrect name');
    } else {
      this.name = name;
    }
    
    const types = [
      "Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"
    ];
    if(types.indexOf(type) === -1) {
      throw new Error('incorrect type');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
    this.attack = 25;
    this.defence = 25;
  }
}