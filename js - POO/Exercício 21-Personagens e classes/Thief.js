import { Character } from "./Character.js";

export class thief extends Character{
  constructor(name, HP, atk, def){
    super(name, HP, atk, def)
  }
  attackTheTarget(target){
    if(target.defense >= this.attack){
      console.log(`não causa dano`)
    }else{
      target.HP -= 2 * (this.attack - target.defense)
    }
  }
}