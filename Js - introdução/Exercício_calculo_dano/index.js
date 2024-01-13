const name01 = prompt("digite o nome do seu atacante")
let power = parseFloat(prompt("Digite o poder de ataque do seu personagem"))

const name02 = prompt("digite o nome do defensor")
let health = parseFloat(prompt("Digite a quantidade de vida do defensor"))
let defense = parseFloat(prompt("Digite o poder de defesa do defensor"))
const shield = prompt("Ele possui escudo? por favor responder sim ou não")

if(power > defense && shield === "sim"){    
    let full_damage = (power - defense) / 2
    let new_health = health - full_damage
    alert("A vida do defensor é: " + new_health + "\no dano foi de: " + full_damage + "\no defensor possui escudo: " + shield + "\nsua defesa: " + defense)
} else if(power > defense && shield === "não"){
    let damage = power - defense
    let new_health = health - damage
    alert("A vida do defensor é: " + new_health + "\nso dano foi de: " + damage + "\no defensor possui escudo: " + shield + "\nsua defesa: " + defense)
} else if(power <= defense){
    alert("Você não deu dano e o " + name02 + " continua com " + health)
} else{
  alert("não pudemos concluir seu jogo")
}