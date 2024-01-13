//pegando input para realizar as contas
const input = document.getElementById('input')  
//pegando input para apresentar o resultado
const showResult = document.getElementById('result')
//pegando classe no css para muudar o tema para claro ou escuro
const root = document.querySelector(':root')
//pegando a tag main para controlar as cores da pagina
const main = document.getElementById('mainContent')

//separando os caracteres permitidos para digitar no input de contas
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
//adicionando o evento de tecla clicada no input de contas quando uma tecla é pressionada 
input.addEventListener('keydown', function(ev){
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
})

//adicionando a funcionalidade dos botões conseguirem transmitir seus valores para o input, pegando todos os botoes com a classe 'charkey'
const charkeys = document.querySelectorAll('.charkey')
//personalizando a função para cada botão
charkeys.forEach(function(charkey){
  //adicionando a função de click em específico para o botão atual
  charkey.addEventListener('click', function(){
    //adicionando o valor no input que estã no data-value do botão no html
    input.value += charkey.dataset.value
    //limpando o input de resultado 
    showResult.value = ''
    //removendo classe erro caso anteriormente tenha apresentado erro na conta
    showResult.classList.remove('error')
  })
})
//adicionando função para o botão de 'clear' na calculadora
document.getElementById('clearButton').addEventListener('click', function(){
  //limpando campos
  input.value = ''
  showResult.value = ''
  showResult.classList.remove('error')
})

//atribuindo a função de calculate para o botão 'equal'
document.getElementById('equalButton').addEventListener('click', calculate)
//criando a função calculate
function calculate(){
  //mudando o valor do input para erro(tratamento de possível erro)
  showResult.value = 'ERROR'
  //adicionando a classe error que muda o background color para vermelho do input de resultados
  showResult.classList.add('error')
  //pega o valor apresentado no input de conta e realiza as operações, graças a função eval
  const resultado = eval(input.value)
  //removendo a classe error caso eval funcione(não é perceptivel a alteração caso a conta seja válida)
  showResult.classList.remove('error')
  //mostrando o resultado no input de resultado
  showResult.value = resultado
  //resentado o valor do input de conta
  input.value = ''
}
//adicionando o evento de click no botão "Dark/Light"
document.getElementById('SwitchTheme').addEventListener('click', function(){
  if(main.dataset.theme === 'dark'){
    //alterando as variaveis do css para mudar as cores padrões 
    root.style.setProperty('--bg-color' , "#F4998D")
    root.style.setProperty('--font-color', '#090809')
    root.style.setProperty('--primary-color', '#F40000')
    root.style.setProperty('--border-color', '#6B3FA0')
    //adicionando a classe 'light' no main para sinalizar a alteração 
    main.dataset.theme = 'light'
  }else{
    //alterando as variaveis do css para retornar ao tema padrão
    root.style.setProperty('--bg-color' , "#212529")
    root.style.setProperty('--font-color', '#f1f5f9')
    root.style.setProperty('--primary-color', '#4dff91')
    root.style.setProperty('--border-color', '#666')
    //adicionando a classe 'dark' no main para sinalizar a alteração
    main.dataset.theme = 'dark'
  }
})

//pegando o botão de copiar o valor para a area de transferência 
const buttonCopy = document.getElementById('copy')

//adicionando o evento de click no botão de copiar
buttonCopy.addEventListener("click", function(){
  //verificando se ja foi copiado ou é necessário copiar
  if(buttonCopy.innerText === 'Copy'){
    //transferindo o valor do input de resultado para a área de transferência 
    navigator.clipboard.writeText(showResult.value)
    buttonCopy.classList.add('success')
    buttonCopy.innerText = 'Copied'
  }else{
    //remove a classe 'success' e volta a funcionalidade padrao do botão
    buttonCopy.classList.remove('success')
    buttonCopy.innerText = 'Copy'
  }
  
})