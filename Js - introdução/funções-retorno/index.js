function calcular_media(a, b) {
  const media = (a + b) / 2
  return media
}

const resultado = calcular_media(4, 6)
console.log(resultado)

function cirar_Produto(nome, preco){
  const produto = {
    nome,  //nome: nome 
    preco,  //preco: preco
    estoque: 1
  }
  return produto
}

console.log(cirar_Produto("Notebook Intel Core i3 16gb ram", 4000))

function areaRetangulo(base, altura){
  return base * altura
}
function areaQuadrado(lado){
  return areaRetangulo(lado, lado)
}
//console.log(areaRetangulo(7, 24))

//console.log(areaQuadrado(9))


//apenas 1 return

function hi() {
  let texto = ";;;"
  return texto
  texto = "ola mundo"
  console.log(texto)
}

console.log(hi())

function maioridade(idade){
  if(idade >= 18){
    return "Maior de idade"
  } else {
    return "Menor de idade"
  }
}

console.log(maioridade(17))