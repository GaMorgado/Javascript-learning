alert("Bem vindo ao consultório médico")
let pacient_list = []
let option

do{
  let pacient = ""
  for (let i = 0; i < pacient_list.length; i++){
    pacient += (i + 1) + "° - " + pacient_list[i] + "\n"
  }

  option = parseFloat(prompt("Bem vindo a fila de espera do nosso consultório" + "\nA lista de espera é: \n" + pacient + "\nVoce deseja: \n" + "1) Novo paciente\n2) Consultar paciente\n3) Sair"))
  switch(option){
    case 1:
      let new_pacient = prompt("digite o nome do novo paciente")
      pacient_list.push(new_pacient)
      alert("o paciente: " + new_pacient + " foi adicionado a fila" + "\nFila atual: " + pacient_list)
      break
    case 2:
        if(pacient_list == 0){
          alert("não há pacientes")
        }else{
          let consultado = pacient_list.shift()
          alert("O paciente: " + consultado + "; foi atendido")
        }
      break
    case 3:
      alert("Finalizando o programa...")
      break
    default:
      alert("Opção inválida")
  }
} while(option !== 3) 