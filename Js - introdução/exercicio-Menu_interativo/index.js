  let options
  
  do{
    options = parseFloat(prompt("Olá, bem vindo ao site\nEscolha uma das opções \n 1)\n 2)\n 3)\n 4)\n 5)Encerrar"))
    switch(options){
      case 1:{
        alert("Muito bem, você escolheu a opção 1")
        break
      }
      case 2:{
        alert("Muito bem, você escolheu a opção 2")
        break
      }
      case 3:{
        alert("Muito bem, você escolheu a opção 3")
        break
      }
      case 4:{
        alert("Muito bem, você escolheu a opção 4")
        break
      }
      case 5:{
        alert("Muito bem, você escolheu a opção 5, finalizando...")
      break
      }
      default:{
        alert("Opção inválida")
      }
    }
  } while(options != 5)

alert("você finalizou o programa")