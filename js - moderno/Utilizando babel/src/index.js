const BtnMediaSimple = document.querySelector('#ButtonMediaSimples')
const BtnMediaComposta = document.getElementById('ButtonMediaComposta')
const BtnMediana = document.getElementById('ButtonMediana')
const BtnModa = document.getElementById('ButtonModa')
let flag = 1

function validaPreenchimento(idInput, idArea, classeResultados, idDiv){
  const input = document.getElementById(idInput).value
  if(input == ''){
    let area = document.getElementById(idArea)
    const validacao = document.querySelectorAll('.'+classeResultados)
    if (validacao.length > 0){
      area.remove()
      area = document.createElement('section')
      area.id = idArea
      const div = document.getElementById(idDiv)
      div.appendChild(area)
    }
    const h3 = document.createElement('h3')
    h3.innerText = `preencha o input`
    h3.className = classeResultados
    area.append(h3)
  }else{
    flag = 0
  }
  return flag
}

function showResult(idArea, classeResultados, div2, result){
  let area = document.getElementById(idArea)
  const validacao = document.querySelectorAll('.'+classeResultados)
  const h3 = document.createElement('h3')
  h3.innerText = `Resultado: ${result}`
  h3.className = classeResultados
  if (validacao.length > 0){
    area.remove()
    area = document.createElement('section')
    area.id = idArea
    const div = document.getElementById(div2)
    div.appendChild(area)
  }
  area.append(h3)
}

function mediaSimple(...numbers){
  const sum = numbers.reduce((acc, number) => acc + parseFloat(number), 0)
  const media = sum / numbers.length
  return media
}

function mediaComposta(...numbers){
  let num = []
  let conta = 0
  const pesos = []
  const result = []
  let mediaP = 0
  for(let i = 0; i <= numbers.length - 1; i++){
    num = numbers[i].split('*')
    conta = parseFloat(num[0]) * (parseFloat(num[1] ?? 1))
    result.push(conta) 
    pesos.push(parseFloat(num[1]))
  }
  const somaPesos = pesos.reduce((acc, peso) => acc + (parseFloat(peso) ?? 1), 0) 
  const somaResultados = result.reduce((acc, results) => acc + parseFloat(results), 0)
  return mediaP = somaResultados/somaPesos
}

function Mediana(...numbers){
  numbers.sort((a,b)=> a-b)
  if (numbers.length % 2 == 0){
    const indiceMaior = (numbers.length / 2)
    const indiceMenor = indiceMaior - 1
    console.log()
    return (parseFloat(numbers[indiceMaior]) + parseFloat(numbers[indiceMenor])) / 2
  }else{
    const indiceMeio = (numbers.length / 2) - 0.5
    console.log(indiceMeio)
    return numbers[indiceMeio]
  }
}

function Moda(...numbers){
  const qtd = numbers.map(num => [
    num,
    numbers.filter((n)=> num === n).length 
  ])
  qtd.sort((a,b)=> b[1] - a[1])
  return qtd[0][0]
}

BtnMediaSimple.addEventListener('click', (ev) =>{
  validaPreenchimento('mediaSimples', 'resultAreaSimples', 'resultadosSimples', 'div1')
  if (flag == 0){
    const input = document.getElementById('mediaSimples').value
    const newInput = input.split('+')
    const result = mediaSimple(...newInput)
    document.getElementById('mediaSimples').value = ''
    showResult('resultAreaSimples', 'resultadosSimples', 'div1', result)
    flag = 1
  }
})

BtnMediaComposta.addEventListener('click', (ev) =>{
  validaPreenchimento('mediaComposta', 'resultAreaComposta', 'resultadosCompostos', 'div2')
  if (flag == 0){
    const input = document.getElementById('mediaComposta').value
    const newInput = input.split(',')
    const result = mediaComposta(...newInput)
    document.getElementById('mediaComposta').value = ''
    showResult('resultAreaComposta','resultadosCompostos', 'div2', result)
    flag = 1
  }
})

BtnMediana.addEventListener('click', (ev) =>{
  validaPreenchimento('Mediana', 'resultMediana', 'resultadosMediana', 'div3')
  if(flag == 0){
    const input = document.getElementById('Mediana').value
    const newInput = input.split(',')
    const result = Mediana(...newInput)
    document.getElementById('Mediana').value = ''
    showResult('resultMediana', 'resultadosMediana', 'div3', result)
    flag = 1
  }
})

BtnModa.addEventListener('click', ()=>{
  validaPreenchimento('Moda', 'resultModa', 'resultadosModa', 'div4')
  if(flag == 0){
    const input = document.getElementById('Moda').value
    const newInput = input.split(',')
    const result = Moda(...newInput)
    document.getElementById('Moda').value = ''
    showResult("resultModa", 'resultadosModa', 'div4', result)
    flag = 1
  }
  
})