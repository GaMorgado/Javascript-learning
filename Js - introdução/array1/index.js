const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)
//add elementos
//push - add no final da lista
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

// unshift - add no inicio da lista
tamanho = arr.unshift("Boromir")
console.log(arr)
console.log(tamanho)

// pop = remover no final 
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

// shift = remover no inicio

ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

//pesquisar por um elemento
//includes
const inclui = arr.includes("Gandalf")
console.log(inclui)

//indexOf- pesquisar por index
const indice = arr.indexOf("Gandalf")
console.log(indice)

//slice - cortar e concatenar (o final ele n pega)
const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

//concatenar = concat
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)

//substituição dos elementos - splice
const itemRemoved = sociedade.splice(indice, 1, "gandalf, o cinzento")
console.log(sociedade)
console.log(itemRemoved)

//ITERAR SOBRE OS ELEMENTOS
for(let indice = 0; indice < sociedade.length; indice++){
  const elemento = sociedade[indice]
  console.log(elemento + " se encontra na posição " + indice)
}