let winner, turn, playerOneLocation, playerTwoLocation, playerLocation, purpleSquares, greenSquares, blueSquares, orangeSquares, redSquares, yellowSquares

let deck1 = []
let deck2 = []

let cardToRemove, cardPicked

//--------------------------------------------------------------------

const message = document.querySelector('#message')
const gameBoard = document.querySelector('#board')
const resetBtn = document.getElementById('reset-button')


let boardSquares = document.querySelectorAll('.box')

let deck1El = document.getElementById('deck-1')
let deck2El = document.getElementById('deck-2')

//------------------------------------------------------------------------

resetBtn.addEventListener('click', init)

document.getElementById('card-button').addEventListener('click', handleClick)

//------------------------------------------------------//

init()

function init() {
  turn = 1
  winner = null
  playerLocation = 0
  playerOneLocation = 0
  playerTwoLocation = 0
  message.innerText = `It's time for player ${turn === 1 ? 'One' : 'Two'} to choose a card!`
  boardColors = ['g1', 'p1', 'r1', 'y1', 'o1', 'b1', 'g2', 'p2', 'y2', 'r2', 'b2', 'p3', 'y3', 'g3', 'o2', 'r3', 'b3', 'p4', 'y4', 'g4', 'o3', 'r4', 'b4', 'p5', 'g5', 'y5', 'r5', 'o4', 'g6', 'y6', 'p6', 'b5']
  deck1 = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'o1', 'o2', 'o3', 'o4', 'o5', 'o6', 'o7', 'p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'r7', 'y1', 'y2', 'y3', 'y4', 'y5', 'y6', 'y7']
  deck2 = []
  render()

}

// STRETCH GOAL - modal at init for game directions 

//----------------- CARD DECK FUNCTIONALITY ------------------------//
function handleClick(evt) {
  if (deck1.length > 0) {
    let randIdx = Math.floor(Math.random() * deck1.length)
    cardPicked = deck1.splice(randIdx, 1)
    deck2.push(cardPicked)
    // let squareId
    // boardSquares[squareId] = turn
    cardToBoard(cardPicked)
    renderCards(cardPicked)
    render()
    // turn *= -1
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
//----------------------------------------------------//

function render() {
  boardSquares.forEach((square, idx) => {
    // square.style.background = boardColors[idx]
    // console.log('finding current square', square.id.substring(2))
    if (playerLocation === parseInt(square.id.substring(2))) {
      square.classList.add('playerOneToken')
      boardSquares[idx].innerHTML = 'x'
      // console.log('match')
    } else {
      square.classList.remove('playerOneToken')
      boardSquares[idx].innerHTML = ''
    }
  })

// function render() {
//   boardSquares.forEach((square, idx) => {
//     if (turn === 1) {
//       if (turn === 1 && playerOneLocation === parseInt(square.id.substring(2))) {
//         square.classList.add('playerOneToken')
//         boardSquares[idx].innerHTML = 'x'
//         // console.log('match')
//       } else {
//         // boardSquares[playerOneLocation].innerHTML = ''
//         // boardSquares.classList.remove('playerOneToken')
//         // boardSquares[idx].innerHTML = ''

//       }
//     }
//     // square.style.background = boardColors[idx]
//     // console.log('finding current square', square.id.substring(2))
//     if (turn === -1) {
//       if (turn === -1 && playerTwoLocation === parseInt(square.id.substring(2))) {
//         square.classList.add('playerTwoToken')
//         boardSquares[idx].innerHTML = 'o'
//       } 
//       // square[playerTwoLocation].innerHTML = ''
//       // boardSquares.classList.remove('playerTwoToken')
//         // boardSquares[idx].innerHTML = ''
//     }
//   })

  if (!winner) {
    message.innerText = `It's time for player ${turn === 1 ? 'One' : 'Two'} to choose a card!`
  } else {
    message.innerText = `Congratulations player ${winner === 1 ? 'One' : 'Two'}!`
  }
}

function cardToBoard(cardPicked) {
  playerLocation += 1
  console.log(playerLocation, 'player')
  for (i = playerLocation; i < boardColors.length; i++) {
    console.log('card picked', cardPicked[0])
    console.log(cardPicked[0][0], boardColors[i][0])
    if (cardPicked[0][0] === boardColors[i][0]) {
      console.log('match found on', i)
      return playerLocation = i
    }
  }
}

// if cardPicked doesn't equal boardColors[i], then  playerLocation
// 

// function cardToBoard(cardPicked) {
//   if (turn === 1) {
//   // console.log(playerLocation, 'player')
//   for (i = playerOneLocation; i < boardColors.length; i++) {
//     // console.log('card picked', cardPicked[0])
//     // console.log(cardPicked[0][0], boardColors[i][0])
//     if (cardPicked[0][0] === boardColors[i][0]) {
//       // console.log('match found on', i)
//       console.log(playerOneLocation, 'player1')
//       return playerOneLocation = i
//     }
//   }
//   } else if (turn === -1) {
//   for (i = playerTwoLocation; i < boardColors.length; i++) {
//     if (cardPicked[0][0] === boardColors[i][0]) {
//       console.log(playerTwoLocation, 'player2')
//       return playerTwoLocation = i
//     }
//   }
// }
// }






// ----------------------- IF USING HANDLECLICK ------//
// ------ user would need to click on the spot corresponding to the card color

// handleClick function to move game piece to the corresponding board spot

// obtain the index of the square that has been clicked 

// make sure that ONLY the next square of specified color CAN be clicked 

// update the board array (index should be changed to only allow the lowest possible to be clicked now)

// game piece is moved to corresponding game spot (in accordance with the index in board array)


// ----- player turn is changed ----//
// change turn of player (turn variable)


// --------- WINNER FUNCTION -----------//
// determine win conditions (player one clicks index X - last spot on board), etc. 


// there can be no tie, someone reaches the finish line first. 
// return null if winner function is not evaluated to true 
// render()

// ------------- RESTART GAME BUTTON ---------//
// run init function if restart button is pressed 


// ---------------------------------------------------------------------------------------------

// ------- Random Planning (conceptual) ----------// 

// color that pops up in card deck should correspond with the first of that same color in an array - making it only possible for the player to click on that specific square on the game board (first in array, second in array, etc. until player reaches the end of the game board and win condition is met)

// would be nicer if the player piece automatically moves to the first available color of card turned over (STRETCH GOAL) (would have to connect the card deck colors with game board color arrays and move the piece there automatically?)

// single player game (the player will play both #1 and #2 until someone reaches the finish castle - win condition)

// player 1 (holds 1)
//player 2 (holds -1)

// each square will map to a corresponding index in corresponding color array
// index 0 - X (dependent upon actual board length and number of colored spots present in length)

// allow for both players to be on the same square 

// use modal upon first entering the page for game directions (bootstrap)- STRETCH GOAL