function calcular (a, b, operacao){
  console.log("você está fazendo uma operação")
  const elemento = operacao(a, b)
  return elemento
}

function somar(x, y){
  console.log("Você está fazendo uma soma")
  return x + y
}

console.log(calcular(2, 5, somar))

console.log(calcular(4, 4, function (x, y){
  return x + y
}))

function exibirElemento(elemento, indice, array){
  console.log({
    elemento,
    indice,
    array
  })
}

const lista = ["maça", "banana", "laranja", "melao", "pessego"]

for(let i = 0; i < lista.length; i++){
  exibirElemento(lista[i], i, lista)
}

lista.forEach(exibirElemento)

lista.forEach(function(aviaoEle, indio, arraya){
  console.log({
    aviaoEle,
    indio,
    arraya
  }
  )
})