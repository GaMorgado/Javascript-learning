const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

soma = 0
for(let i = 0; i < personagens.length; i++){
  soma += personagens[i].nivel
}

alert(soma)

//map - transformações de arrays

//const nomes = []

//for(let i = 0; i < personagens.length; i++){
//  nomes.push(personagens[i].nome)
//}

//console.log(nomes)

//const nomes = personagens.map(function (personagem){
 // return personagem.nome
//})

//console.log(nomes)

//console.log(personagens)

//filter

//const orcs = []

//for (let i = 0; i < personagens.length; i++) {
// if (personagens[i].raca === "Orc"){
// orcs.push(personagens[i])
// }
//}

//console.log(orcs)

//const orcs = personagens.filter(function(personagem){
 // return personagem.raca === "Orc"
//})

//console.log(orcs)

//reduce

//const nivelTotal = personagens.reduce(function())

//const nivelTotal = personagens.reduce(function (valorAcumulado, personagem){
 // return valorAcumulado + personagem.nivel  
 // }, 0)

//console.log(nivelTotal)

//const racas = personagens.reduce(function (valorAcumulado, personagem){
 // if( valorAcumulado[personagem.raca]){
  //  valorAcumulado[personagem.raca].push(personagem)
  //} else {
   // valorAcumulado[personagem.raca] = [personagem]
//  }

 // return valorAcumulado
//}, {})

//console.log(racas)

//sort(ordenar)

/*personagens.sort(function(a, b){
  return a.nivel - b.nivel
})

console.log(personagens)

//para não afetar o array utilize o slice()

const personagens_Ordenados = personagens.slice().sort(function(a, b){
  return b.nivel - a.nivel
})

console.log(personagens_Ordenados)
*/