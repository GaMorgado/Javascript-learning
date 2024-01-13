function dobro(x){
  alert("O dobro de "  + x + " é " + (x * 2))
}

function dizerHi(name = "malandro"){
  alert("Olá, " + name + "!")
}

function soma(a, b) {
  alert("O resultado da soma de " + a + "+" + b + "=" + (a + b))
}

function usuario(nome, email, senha, tipo = "Adm"){
  const usuari = {
    nome,
    email,
    senha,
    tipo
  }
  console.log(usuari)
}

function novo_usuario(nome, email, senha, tipo = "adm"){
  const usuari = {
    nome,
    email,
    senha,
    tipo
  }
  console.log(usuari)
}

novo_usuario("morgs", "admS","morgs@gmail.com", "123")


//evitando muitos parametros

function criando_Novo_boneco(usuario){
  usuario.nome
  usuario.endereço
  usuario.telefone
  usuario.casamento

console.log(usuario)
}

const dadosUsuario = {
  nome: "morgs",
  endereço: "Correia Lima",
  telefone: "952019808",
  casamento: "não"
}

criando_Novo_boneco(dadosUsuario)

