let pokemon = "Charmander" // escopo externo

function evoluir() {
  pokemon = "Charmeleon"  //escopo interno(dentro de funções, if, while)
}

console.log(pokemon)
evoluir()
console.log(pokemon)

