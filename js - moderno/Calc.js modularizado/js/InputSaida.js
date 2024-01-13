//pegando o botão de copiar o valor para a area de transferência 
const buttonCopy = document.getElementById('copy')

const showResult = document.getElementById('result')

function copy(){
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
  
}

export {copy}