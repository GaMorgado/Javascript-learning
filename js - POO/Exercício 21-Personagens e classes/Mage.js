import { Character } from "./Character.js";

export class Mage extends Character{
  constructor(name, HP, atk, def, MP){
    super(name, HP, atk, def)
    this.MP = MP
  }
  attackTheTarget(target){
    this.attack = this.attack + this.MP
    if(target.defense >= this.attack){
      console.log("Não foi possível causar dano")
    }else{
      target.HP -= this.attack - target.defense 
    }
    this.attack = this.attack - this.MP
  }
  healingUp(target){
    target.HP += 2 * this.MP
  }
}