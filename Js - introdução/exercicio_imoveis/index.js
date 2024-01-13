alert("bem vindo a corretora de imóveis")
const Imoveis = []
let opcoes

do{
  opcoes = parseFloat(prompt("-Menu interativo da corretora-\n" + "Imóveis cadastrados: "+ Imoveis.length + "\n1) Cadastro de imóvel\n" + "2) Mostrar todos os imóveis salvos\n" + "3) Cancelar operação"))
  switch(opcoes) {
    case 1:
      const Imovel = {}
      Imovel.name = prompt("Digite o nome do proprietário: ")
      Imovel.qntDeQuartos = prompt("Digite a quantidade de quartos: ")
      Imovel.qntDeBanheiros = prompt("Digite a quantidade de Banheiros: ")
      Imovel.garagem = prompt("Há garagem?")

      const confirmacao = confirm("Você deseja salvar esse imóvel?\n" + "Proprietário: " + Imovel.name + "\nQuantidade de quartos: " + Imovel.qntDeQuartos + "\nQuantidade de banheiros: " + Imovel.qntDeBanheiros + "\nHá garagem: " + Imovel.garagem)
      
      if(confirmacao == true){
        Imoveis.push(Imovel)
        alert("Cadastro realizado com sucesso")
      }else{
        alert("Voltando ao menu")
      }
      break
    case 2:
      for(let i = 0; i < Imoveis.length; i++){
        alert(
          "Imovel " + (i + 1) +
          "\nProprietário: " + Imoveis[i].name +
          "\nQuantidade de quartos " + Imoveis[i].qntDeQuartos +
          "\nQuantidade de banheiros: " + Imoveis[i].qntDeBanheiros +
          "\nHá garagem: " + Imoveis[i].garagem 
        )
      }
      break
    case 3:
      alert("Você cancelou a operação")
      break
    default:
      alert("Opção inválida")
      break
  }
}while(opcoes !== 3)
