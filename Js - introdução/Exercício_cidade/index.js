const name = prompt("qual seu nome?")
let travel = prompt("Você já viajou para alguma cidade? (sim/não)")
let quantidade_de_viagens = 0
let city = ""

while(travel === "sim"){
  city += prompt("qual o nome dessa cidade?") + "\n"
  let travel = prompt("tem mais outras cidades?")
  quantidade_de_viagens++
  if(travel === "não"){
    break
  }
}

alert(name + " já visitou " + quantidade_de_viagens + " cidades" + "\nAs cidades foram:\n" + city)