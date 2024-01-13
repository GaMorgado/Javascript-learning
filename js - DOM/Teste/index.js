const buttonStart = document.getElementById('buttonStart')
const boardRegions = document.querySelectorAll('.BoardGame span')
const turn = document.getElementById('turn')
let vBoard = []

buttonStart.addEventListener('click', initialize)

function restart(){
  const player1 = document.getElementById('OutputPlayer1').innerText
  const player1Name = player1.split(":")
  turn.innerText = 'Turno de' + player1Name[1]
  vBoard = [['', '', ''], ['', '', ''], ['', '', '']]
  boardRegions.forEach(function(element){
    element.classList.remove('win')
    element.innerText = ''
    element.addEventListener('click', HandleClick)
    element.style.cursor = 'pointer'
});
}

function initialize(){
  const player1Name = document.getElementById('Player1Input').value
  const player2Name = document.getElementById('Player2Input').value
  
  const player1 = document.getElementById('player1')
  const player2 = document.getElementById('player2')

  if (player1Name == '' || player2Name == ''){
    alert('Preencha os campos de nome, por favor')
    return
  }

  player1.remove()
  player2.remove()
  buttonStart.remove()

  turn.innerText = 'Turno de ' + player1Name
  turn.className = 'turn'
  
  const OutputPlayer1 = document.getElementById('player1Name')
  OutputPlayer1.innerText = 'Player 1: ' + player1Name
  OutputPlayer1.id = 'OutputPlayer1'
  const OutputPlayer2 = document.getElementById('player2Name')
  OutputPlayer2.innerText = 'Player 2: ' + player2Name
  OutputPlayer2.id = 'OutputPlayer2'

  const board = document.querySelector('.BoardGame')
  board.id = 'gameArea'

  vBoard = [['', '', ''], ['', '', ''], ['', '', '']]
  boardRegions.forEach(function(element){
    element.classList.remove('win')
    element.innerText = ''
    element.addEventListener('click', HandleClick)
});

  const restartButton = document.createElement('button')
  restartButton.innerText = 'Reiniciar'
  restartButton.classList = 'button'
  restartButton.addEventListener('click', restart)

  const main = document.getElementById('MainContent')

  main.appendChild(restartButton)
}

function handleWin(regions){
  regions.forEach(function(region){
    document.querySelector('[data-region="' + region + '"]').classList.add('win')
  })
  const player1 = document.getElementById('OutputPlayer1').innerText
  const player1Name = player1.split(":")
  const player2 = document.getElementById('OutputPlayer2').innerText
  const player2Name = player2.split(":")
  if (turn.innerText == 'Turno de' + player1Name[1]){
    turn.innerText = 'Turno de' + player2Name[1]
  }else{
    turn.innerText = 'Turno de' + player1Name[1]
  }
  boardRegions.forEach(function(element){
   element.style.cursor = 'default' 
  })
  const player = document.getElementById('turn').innerText
  const playerName = player.split(" ")
  turn.innerHTML = '<h3>Venceu: '+ playerName[2] +'</h3>'
  
}

function disabledRegion(span){
  span.style.cursor = 'default'
  span.removeEventListener('click', HandleClick)
}

function getWinRegions(){
  const winRegions = []
  if(vBoard[0][0] && vBoard[0][0] === vBoard[0][1] && vBoard[0][0] === vBoard[0][2])
    winRegions.push("0.0", "0.1", "0.2")
  if(vBoard[1][0] && vBoard[1][0] === vBoard[1][1] && vBoard[1][1] === vBoard[1][2])
    winRegions.push("1.0", "1.1", "1.2")
  if(vBoard[2][0] && vBoard[2][0] === vBoard[2][1] && vBoard[2][0] === vBoard[2][2])
    winRegions.push("2.0", "2.1", "2.2")
  if(vBoard[0][0] && vBoard[0][0] === vBoard[1][0] && vBoard[0][0] === vBoard[2][0])
    winRegions.push("0.0", "1.0", "2.0")
  if(vBoard[0][1] && vBoard[0][1] === vBoard[1][1] && vBoard[0][1] === vBoard[2][1])
    winRegions.push("0.1", "1.1", "2.1")
  if(vBoard[0][2] && vBoard[0][2] === vBoard[1][2] && vBoard[0][2] === vBoard[2][2])
    winRegions.push("0.2", "1.2", "2.2")
  if(vBoard[0][0] && vBoard[0][0] === vBoard[1][1] && vBoard[0][0] === vBoard[2][2])
    winRegions.push("0.0", "1.1", "2.2")
  if(vBoard[0][2] && vBoard[0][2] === vBoard[1][1] && vBoard[0][2] === vBoard[2][0])
    winRegions.push("0.2", "1.1", "2.0")
  return winRegions
}

function HandleClick(ev){
  const span = ev.currentTarget
  const player1 = document.getElementById('OutputPlayer1').innerText
  const player1Name = player1.split(":")
  const player2 = document.getElementById('OutputPlayer2').innerText
  const player2Name = player2.split(":")
  const region = span.dataset.region
  const rowColumnPair = region.split('.')
  const row = rowColumnPair[0]
  const column = rowColumnPair[1]
  if (turn.innerText == 'Turno de' + player1Name[1]){
    span.innerText = 'X'
    vBoard[row][column] = 'X'
    turn.innerText = 'Turno de' + player2Name[1]
  }else{
    span.innerText = 'O'
    vBoard[row][column] = 'O'
    turn.innerText = 'Turno de' + player1Name[1]
  }
  console.clear()
  console.table(vBoard)
  disabledRegion(span)
  const winRegions = getWinRegions()
  if (winRegions.length > 0){
    handleWin(winRegions)
    boardRegions.forEach(function(region){
      region.removeEventListener('click', HandleClick)
    })
  }else if(vBoard.flat().includes('')){
    console.log('continuando')
  }else{
    turn.innerHTML = "<h3>Empate</h3>"
  }
}
