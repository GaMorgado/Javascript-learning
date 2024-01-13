export class Character{
  constructor(name, HP, atk, def){
    this.name = name
    this.HP = HP
    this.attack = atk
    this.defense = def
  }
  attackTheTarget(target){
    if(target.defense >= this.attack){
      console.log(`não causa dano`)
    }else{
      target.HP -= this.attack - target.defense
    }
  }
}