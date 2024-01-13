import { Character } from "./Character.js";

export class Warrior extends Character{
  constructor(name, HP, atk, def, shield, position){
    super(name, HP, atk, def)
    this.shield = shield
    this.position = position
    if(this.position == 'defesa'){
      this.defense += shield
    }
  }
  attackTheTarget(target){
    if(this.position == 'ataque'){
      if(target.defense >= this.attack){
        console.log(`não causa dano`)
      }else{
        target.HP -= (this.attack - target.defense)
      }
    }
  }
  changePosition(){
    if(this.position == 'ataque'){
      this.defense += this.shield
      this.position = 'defesa'
    }else{
      this.defense -= this.shield
      this.position = 'ataque'
    }
  }
}