const showResult = document.getElementById('result')

function clickButton(ev){
  //adicionando o valor no input que estã no data-value do botão no html
  input.value += ev.currentTarget.dataset.value
  //limpando o input de resultado 
  showResult.value = ''
  //removendo classe erro caso anteriormente tenha apresentado erro na conta
  showResult.classList.remove('error')
}

export default clickButton