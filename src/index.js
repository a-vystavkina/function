export default function Character(name, type) {
  if (name.length < 2 || name.length > 10 || !'Bowman, Swordsman, Magician, Daemon, Undead, Zombie'.includes(type)) {
    throw new Error('Неверно задан персонаж');
  }
  this.name = name;
  this.type = type;
  this.health = 100;
  this.level = 1;
  let attack;
  let defence;
  switch (type) {
    case 'Bowman':
      attack = 25;
      defence = 25;
      break;
    case 'Swordsman':
      attack = 40;
      defence = 10;
      break;
    case 'Magician':
      attack = 10;
      defence = 40;
      break;
    case 'Daemon':
      attack = 10;
      defence = 40;
      break;
    case 'Undead':
      attack = 25;
      defence = 25;
      break;
    default:
      attack = 40;
      defence = 10;
      break;
  }
  this.attack = attack;
  this.defence = defence;
}
