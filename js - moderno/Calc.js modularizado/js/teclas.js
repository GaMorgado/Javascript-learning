import { calculate } from "./calculate.js"

//separando os caracteres permitidos para digitar no input de contas
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

const showResult = document.getElementById('result')

function PressKey(ev){
  const input = document.getElementById('input')
  //previnindo o comportamento padrão de digitar para aparecer apenas os caracteres desejados
    ev.preventDefault()
    //selecionaod apenas os caracteres da lista
    if(allowedKeys.includes(ev.key)){
      //adicionando o valor do caractere no input
      input.value += ev.key
      //limpando o input de resultado 
      showResult.value = ''
      return
    }
    //adicionando a tecla 'Backspac' nas teclas permitidas
    if(ev.key === 'Backspace'){
      //adicionando a função do backspace
      input.value = input.value.slice(0, -1)
    }
    //adicionando a tecla 'Enter' nas teclas permitidas
    if(ev.key === 'Enter'){
      //atribuindo a função calcular para a tecla enter
      calculate()
      //focando no input de contas
      input.focus()
    }
}

function clear(){
  //limpando campos
  input.value = ''
  showResult.value = ''
  showResult.classList.remove('error')
}

export {PressKey, clear}