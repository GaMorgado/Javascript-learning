//criando a função calculate
function calculate(){
  const showResult = document.getElementById('result')
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

export { calculate }