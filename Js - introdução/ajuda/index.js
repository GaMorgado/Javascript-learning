const empregos = []
let confirmar

function menu(){
  let option = parseFloat(prompt("Bem vindo ao cadastro de vagas de emprego" +
  "\ntemos: " + empregos.length + " empregos cadastrados" +
  "\nO que deseja?" +
  "\n1) Listar vagas disponiveis" + 
  "\n2) Criar uma vaga" + 
  "\n3) Visualizar uma vaga" + 
  "\n4) Inscrever um candidato em uma vaga" +
  "\n5) Excluir uma vaga" + 
  "\n6) Sair"
  ))  
  return option
}

function executar(){
  let option
  do {
    option = menu(1)
    switch(option){
      case 1:
        if (empregos.length > 0){
          empregos.forEach(function (emprego, indexEmprego){
            alert("Indice: " + indexEmprego + 
            "\nNome da vaga: " + emprego.nome +
            "\nCandidatos: " + emprego.candidatos.length)
          })
        }else{
          alert("Não há empregos")
        }
        break
      case 2:
          const vaga = {}
          vaga.nome = prompt("Digite o nome da vaga que deseja cadastrar:")
          vaga.desc = prompt("Descreva a vaga")
          vaga.datalimite = prompt("Digite a data lime")
          vaga.candidatos = []
          confirmar = confirm("Você deseja salvar a vaga com nome: " + vaga.nome +
          "\ndescrição: " + vaga.desc +
          "\ndata limite: " + vaga.datalimite)
          if (confirmar){
            empregos.push(vaga)
            alert("Vaga cadastrada com sucesso!")
          }else{
            alert("Operação cancelada, voltando ao menu")
          }
        break
      case 3:
        if (empregos.length > 0){
          let indiceDaVaga = parseFloat(prompt("Digite o indice da vaga que deseja consultar"))
          let depara = empregos[indiceDaVaga]
          const candidatosTextos = empregos[indiceDaVaga].candidatos.reduce(function (txtFinal, candidato){
            return txtFinal + "\n - " + candidato
          }
          , "")
          if (depara == undefined || depara == null){
            alert("Indice de vaga indisponivel")
          }else{
            alert("Indice: " + indiceDaVaga +
            "\nnome da vaga: " + empregos[indiceDaVaga].nome + 
            "\ndescrição: " + empregos[indiceDaVaga].desc +
            "\ndata limite: " + empregos[indiceDaVaga].datalimite +
            "\nquantidade candidatos: " + empregos[indiceDaVaga].candidatos.length + 
            "\nNome candidatos: " + candidatosTextos
            )
          }
        }else{
          alert("Não há empregos")
        }
        break
      case 4:
          if (empregos.length > 0){
            const nomeCanditato = prompt("Digite o nome do candidato para cadastrar: ")
            const indiceDesejado = parseFloat(prompt("Digite o indice da vaga desejado: "))
            confirmar = confirm("Deseja candidatar para a vaga: " + empregos[indiceDesejado].nome)
            if(confirmar){
              empregos[indiceDesejado].candidatos.push(nomeCanditato)
            }else{
              alert("Operação cancelada, voltando ao menu")
            }}else{
              alert("Não há empregos")
            }
          break
      case 5:
          if (empregos.length > 0){
            const indiceExcluir = parseFloat(prompt("Digite o indice da vaga desejado para exclusão: "))
            confirmar = confirm("Deseja excluir a vaga: " + empregos[indiceExcluir].nome)
            if (confirmar){
              empregos.splice(indiceExcluir, 1)
            }else{
              alert("Operação cancelada, voltando ao menu")
            }
          }else{
            alert("Não há empregos")
          }
        break
      case 6:
          alert("Finalizando")
        break
      default:
        alert("Opção inválida")
    }
  } while (option != 6);
}

executar()