// ------------------------- variables ---------------------------//
let isWinner, turn, playerOneLocation, playerTwoLocation, purpleSquares, greenSquares, blueSquares, orangeSquares, redSquares, yellowSquares

let deck1 = []
let deck2 = []

let cardToRemove, cardPicked

//----------------------------- cached element references -------------------------------//

const message = document.querySelector('#message')
const gameBoard = document.querySelector('#board')
const resetBtn = document.getElementById('reset-button')

let boardSquares = document.querySelectorAll('.box')

let deck1El = document.getElementById('deck-1')
let deck2El = document.getElementById('deck-2')

const startSquare = document.getElementById('sq0')

const playerOneToken = document.createElement("div")
const playerTwoToken = document.createElement("div")

const winSquare = document.getElementById('sq31')

//---------------------------- event listeners --------------------------------------------//

resetBtn.addEventListener('click', init)

document.getElementById('card-button').addEventListener('click', handleClick)

//------------------------ init function ------------------------------//
init()

function init() {
  turn = 1
  isWinner = null
  playerOneToken.classList.add('playerOneToken')
  playerTwoToken.classList.add('playerTwoToken')
  startSquare.appendChild(playerOneToken)
  startSquare.appendChild(playerTwoToken)
  playerOneLocation = 0
  playerTwoLocation = 0
  message.innerText = `It's time for player ${turn === 1 ? 'One' : 'Two'} to choose a card!`
  boardColors = ['g1', 'p1', 'r1', 'y1', 'o1', 'b1', 'g2', 'p2', 'y2', 'r2', 'b2', 'p3', 'y3', 'g3', 'o2', 'r3', 'b3', 'p4', 'y4', 'g4', 'o3', 'r4', 'b4', 'p5', 'g5', 'y5', 'r5', 'o4', 'g6', 'y6', 'p6', 'b5']
  deck1 = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'o1', 'o2', 'o3', 'o4', 'o5', 'o6', 'o7', 'p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'r7', 'y1', 'y2', 'y3', 'y4', 'y5', 'y6', 'y7']
  deck2 = []
  render()

}

//----------------- card deck functions & handleClick ------------------------//
function handleClick(evt) {
  if (deck1.length > 0) {
    let randIdx = Math.floor(Math.random() * deck1.length)
    cardPicked = deck1.splice(randIdx, 1)
    deck2.push(cardPicked)
    cardToBoard(cardPicked)
    renderCards(cardPicked)
    isWinner = winner() 
    render()
    turn *= -1
  }
}

function renderCards() {
  deck2El.classList.remove('outline')
  if (deck2.length > 1) {
    deck2El.classList.remove(cardToRemove)
  }
  cardToRemove = cardPicked
  deck2El.classList.add(cardPicked)
  if (deck2.length === 26) {
    deck2El.classList.add('shadow')
    deck1El.classList.remove('shadow')
  }
  if (deck1.length === 0) {
    deck1El.classList.add('outline')
    deck1El.classList.remove('back')
  }
}

//------------------------- render function ---------------------------//
function render() {
  if (turn === 1) {
    boardSquares.forEach((square, idx) => {
      square.style.background = boardColors[idx]
      if (playerOneLocation === parseInt(square.id.substring(2))) {
        square.appendChild(playerOneToken)
      }
    })
  } else {
    boardSquares.forEach((square, idx) => {
      square.style.background = boardColors[idx]
      if (playerTwoLocation === parseInt(square.id.substring(2))) {
        square.appendChild(playerTwoToken)
      }
    })
  }
  if (isWinner) {
    message.innerText = `Congratulations player ${isWinner === 1 ? 'One' : 'Two'}!`
  } else {
    message.innerText = `It's time for player ${turn === 1 ? 'One' : 'Two'} to choose a card!`
  } 
}

//-------------- function connecting card deck to board ------------//
function cardToBoard(cardPicked) {
  if (turn === 1) {
    playerOneLocation += 1
    for (i = playerOneLocation; i < boardColors.length; i++) {
      if (cardPicked[0][0] === boardColors[i][0]) {
        return playerOneLocation = i
      }
    }
  } else {
    playerTwoLocation += 1
    for (i = playerTwoLocation; i < boardColors.length; i++) {
      if (cardPicked[0][0] === boardColors[i][0]) {
        return playerTwoLocation = i
      }
    }
  }
}

//-------------- winner function ---------------------------------//
function winner() {
  if (playerOneLocation === parseInt(winSquare.id.substring(2))) return playerOneLocation
  if (playerTwoLocation === parseInt(winSquare.id.substring(2))) return playerTwoLocation
}

