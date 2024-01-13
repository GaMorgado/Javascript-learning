function escalar(){
  //pega o valor dos inputs para cadastro
  const PlayerPos = document.getElementById('input-pos').value
  const PlayerName = document.getElementById('input-name').value
  const PlayerCam = document.getElementById('input-cam').value

  //confirmação do usuário
  const confirma = confirm("Deseja concluir o cadastro de: " + PlayerName +
  "\nPosição: " + PlayerPos + 
  "\nCamisa: " + PlayerCam
  )

  if (confirma == true){
  //pegando a area de lista
  const listArea = document.getElementById('list-area')  

  //setando o Ul do jogador
  const PlayerUl = document.createElement('ul')
  PlayerUl.id = PlayerCam

  //setando o Li do nome do jogador
  const PlayerNameLi = document.createElement('li')
  PlayerNameLi.innerText = 'Jogador: ' + PlayerName
  
  //setando o Li da posição do jogador
  const PlayerPosLi = document.createElement('li')
  PlayerPosLi.innerText = 'Posição: ' + PlayerPos

  //setando o Li da camisa do jogador
  const PlayerCamLi = document.createElement('li')
  PlayerCamLi.innerText = 'Camisa:  ' + PlayerCam
  
  //Adicionando os campos na lista
  PlayerUl.append(PlayerNameLi, PlayerPosLi, PlayerCamLi)

  //adicionando a lista na seção
  listArea.appendChild(PlayerUl)
  
  //resetando campos
  document.getElementById('input-pos').value = ''
  document.getElementById('input-name').value = '' 
  document.getElementById('input-cam').value = ''
  }else{
    //apagando os valores anteriores do inputs
    document.getElementById('input-pos').value = ''
    document.getElementById('input-name').value = '' 
    document.getElementById('input-cam').value = ''
    return
  }
}

function remover(){
  //pegando o valor do input para seleção do jogador
  const removedPlayer = document.getElementById('input-remove').value

  const confirma = confirm("Deseja excluir o jogador de camisa: " + removedPlayer)

  if (confirma == true){
    //pegando a area de lista
    const listArea = document.getElementById('list-area')  
    
    //selecionando as listas
    const listas = document.getElementById(removedPlayer)

    //removendo jogador
    listArea.removeChild(listas)
}
  //apagando os valores anteriores do input camisa em remover
  document.getElementById('input-remove').value = ''
}