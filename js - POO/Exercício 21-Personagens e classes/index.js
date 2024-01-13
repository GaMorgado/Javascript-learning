import { thief } from "./Thief.js";
import { Warrior } from "./Warrior.js";
import { Mage } from "./Mage.js";

const Nicolas = new thief('Nicolas', 140, 22, 8)
const Otavio = new Mage('Otavio', 90, 4, 2, 24)
const Morgs = new Warrior('Morgs', 200, 14, 12, 4, 'defesa')

console.table({Morgs,Nicolas, Otavio})


Nicolas.attackTheTarget(Morgs)

Morgs.changePosition()

Morgs.attackTheTarget(Nicolas)

Otavio.attackTheTarget(Nicolas)

Otavio.attackTheTarget(Morgs)

Otavio.healingUp(Morgs)

console.table({Morgs,Nicolas, Otavio})