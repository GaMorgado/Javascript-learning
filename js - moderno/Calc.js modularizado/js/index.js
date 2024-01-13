import { copy } from "./InputSaida.js"
import { calculate } from "./calculate.js"
import { TemaChange } from "./TrocaTema.js"
import { PressKey, clear } from "./teclas.js"
import clickButton from "./Botoes.js"

//adicionando o evento de tecla clicada no input de cERRORntas quando uma tecla é pressionada 
document.getElementById('input')  .addEventListener('keydown', PressKey)

//adicionando função para o botão de 'clear' na calculadora
document.getElementById('clearButton').addEventListener('click', clear)

//adicionando a funcionalidade dos botões conseguirem transmitir seus valores para o input, pegando todos os botoes com a classe 'charkey'
const charkeys = document.querySelectorAll('.charkey')
//personalizando a função para cada botão
charkeys.forEach(function(charkey){
  //adicionando a função de click em específico para o botão atual
  charkey.addEventListener('click', clickButton)
})
//atribuindo a função de calculate para o botão 'equal'
document.getElementById('equalButton').addEventListener('click', calculate)

//adicionando o evento de click no botão "Dark/Light"
document.getElementById('SwitchTheme').addEventListener('click', TemaChange)

//adicionando o evento de click no botão de copiar
 document.getElementById('copy').addEventListener("click", copy)