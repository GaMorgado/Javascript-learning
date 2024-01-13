const name = prompt("Quem está acessando?")
let money = parseFloat(prompt("Quanto dinheiro você tem?"))
alert("você tem: " + money + " reais")
let valor = 0
let option

do{
  option = parseFloat(prompt("Qual operação você deseja realizar? \n1-Adicionar dinhero. \n2-retirar dinheiro. \n3-cancelar"))
  switch(option){
    case 1:
      valor = parseFloat(prompt("quanto você deseja adicionar?"))
      money += valor
      alert("Agora o saldo " + name + " é de " + (money) + " reais")
      break
    case 2:
      valor = parseFloat(prompt("quanto você deseja retirar?"))
      money -= valor
      alert("Agora o saldo " + name + " é de " + (money) + " reais")
      break
    case 3:
      alert("Você cancelou a operação")
      break
    default:
      alert("Opção inválida")
  }
} while(option != 3)

alert("Operação cancelada, obrigado e volte sempre!")