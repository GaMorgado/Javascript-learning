//pegando o botão de add nova tech
const buttonNewTech = document.getElementById('newTechButton')
//pegando o formulario  presente no html
const formArea = document.getElementById('form-area')
//criando a lista final dos desenvolvedores cadastrados
const devs = []
//criando a variável para diferenciar as linhas 
let inputRows = 0
//add evento ao botao
buttonNewTech.addEventListener('click', function(ev){
  //previnindo comportamento de carregamento automatico da pagina
  ev.preventDefault()
  //pegando a lista para inserir as linhas de formulario
  const userlist = document.getElementById('userlist')
  //criando cada formulario com ids diferentes
  const user = document.createElement('li')
  const rowIndex = inputRows
  inputRows++
  user.id = 'inputRow-' + rowIndex
  user.className = 'inputRow'
  //criando o label do campo de nome da tech do formulario
  const nameTechlabel = document.createElement('label')
  nameTechlabel.htmlFor = 'nameTech-' + rowIndex
  nameTechlabel.innerText = "Tecnologia: "
  //criando nome da tecnologia específica
  const nameTechInput = document.createElement('input')
  nameTechInput.type = 'text'
  nameTechInput.id = 'nameTech-' + rowIndex
  nameTechInput.className = 'inputsForm'
  //criando label do input radio(experiencia) 1 opção
  const ExpTechLabel1 = document.createElement('label')
  ExpTechLabel1.htmlFor = 'inputsFormRadio1+' + rowIndex
  ExpTechLabel1.innerText = '0-2 anos' 
  //criando input do tipo radio(experiencia) 1 opção
  const ExpTechInput1 = document.createElement('input')
  ExpTechInput1.type = 'radio'
  ExpTechInput1.id = 'inputsFormRadio1+' + rowIndex
  ExpTechInput1.name = 'ExpTech' + rowIndex
  ExpTechInput1.value = '0-2 anos'
  //criando label do input radio(experiencia) 2 opção
  const ExpTechLabel2 = document.createElement('label')
  ExpTechLabel2.htmlFor = 'inputsFormRadio2+' + rowIndex
  ExpTechLabel2.innerText = '3-4 anos' 
  //criando input do tipo radio(experiencia) 2 opção
  const ExpTechInput2 = document.createElement('input')
  ExpTechInput2.type = 'radio'
  ExpTechInput2.id = 'inputsFormRadio2+' + rowIndex
  ExpTechInput2.name = 'ExpTech' + rowIndex
  ExpTechInput2.value = '3-4 anos'
 //criando label do input radio(experiencia) 3 opção
  const ExpTechLabel3 = document.createElement('label')
  ExpTechLabel3.htmlFor = 'inputsFormRadio3+' + rowIndex
  ExpTechLabel3.innerText = '5+ anos'
  //criando input do tipo radio(experiencia) 3 opção
  const ExpTechInput3 = document.createElement('input')
  ExpTechInput3.type = 'radio'
  ExpTechInput3.id = 'inputsFormRadio3+' + rowIndex
  ExpTechInput3.name = 'ExpTech' + rowIndex
  ExpTechInput3.value = '5+ anos'
  //criando o botão de remover a linha pelo id que demos 
  const buttonToRemove = document.createElement('button')
  buttonToRemove.id = 'ButtonTtoRemove'
  buttonToRemove.innerText = 'Remover linha'
  //adicionando tudo a pagina html
  user.append(nameTechlabel, nameTechInput, ExpTechInput1, ExpTechLabel1, ExpTechInput2, ExpTechLabel2, ExpTechInput3, ExpTechLabel3, buttonToRemove)
  userlist.appendChild(user)
  //criando a função de remover do botão de remover
  buttonToRemove.addEventListener('click', function(ev){
    //previnindo comportamento de carregamento automatico da pagina
    ev.preventDefault()
    //selecionando a linha para remoção conforme o id dela
    const userToDelete = document.getElementById("inputRow-" + rowIndex)
    userToDelete.remove()
  })

})
//adicionando a opção de submit para o formulário
formArea.addEventListener('submit', function(ev){
  //previnindo comportamento de carregamento automatico da pagina
  ev.preventDefault()
  //pegando valor do nome do dev
  const nameDev = document.getElementById('inputName')
  //pegando todas as linhas e colocando em uma nodelist
  const inputRows = document.querySelectorAll('.inputRow')
  //Criando um array para organizar informações das tecnologias
  let technologies = []
  //foreach para cada linha
  inputRows.forEach(function (row){
    //selecionando o id específico + os inputs com classe = inputsForm ou seja : #inputRow1.inputsform
    const techname = document.querySelector('#' + row.id + ' input[class="inputsForm"]').value
    //selecionando o id específico + os inputs com classe = inputsForm ou seja : #inputRow1.type=Radio:checked
    const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
    //colocando o nome da tecnologia e a experiencia no array de tecnologia
    technologies.push({name: techname, exp: techExp})
  })
  //criando um objeto para cada dev
  const newDev = {Name: nameDev.value, technologies: technologies}
  //adicionando o dev na lista final de todos os devs cadastrados
  devs.push(newDev)
  alert('Cadastro feito com sucesso')
  //Limpando forms
  nameDev.value = ''
  //quando o forms é enviado ele apaga as linhas de input
  inputRows.forEach(function(rows){
    rows.remove()
  })
  console.log(devs)
})
