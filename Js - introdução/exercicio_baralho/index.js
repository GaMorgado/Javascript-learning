alert("Bem vindo ao jogo de baralho")
let baralho = []
let opcoes 

do{
  opcoes = parseFloat(prompt("No jogo temos as cartas: " + baralho.length + "\nO que deseja fazer? \n1) Adicionar uma carta \n2) Puxar uma carta \n3) Sair"))
  switch(opcoes){
    case 1:
      let new_carta = prompt("Qual carta você deseja adicionar?")
      baralho.push(new_carta)
      alert("A carta: " + new_carta + "; foi adicionada")
      break
    case 2:
        let carta_retirada = baralho.pop() 
        if(!carta_retirada){
          alert("não há carta no baralho")  
        }else{
          alert("Você puxou a carta " + carta_retirada)
        }
      break
    case 3:
      alert("Finalizando o jogo...")
      break
    default: 
      alert("Opção inválida")
      break
  }
}while(opcoes !== 3)