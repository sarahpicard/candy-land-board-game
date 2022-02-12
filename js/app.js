// DEFINE VARIABLES
let winner, turn, playerLocation, greenSquares, purpleSquares, blueSquares, orangeSquares, redSquares, yellowSquares

let deck1 = []
let deck2 = []

let cardToRemove, cardPicked


// CACHED ELEMENT REFERENCES 

const message = document.querySelector('#message')
const gameBoard = document.querySelector('#board')
const resetBtn = document.querySelector('.reset-btn')


let boardSquares = document.querySelectorAll('.box')

let deck1El = document.getElementById('deck-1')
let deck2El = document.getElementById('deck-2')


// EVENT LISTENERS   
// click on restart button 
resetBtn.addEventListener('click', init)

boardSquares.addEventListener('click', handleClickBoard)

document.getElementById('card-button').addEventListener('click', handleClick)


//------------------------------------------------------//

init()

function init() {
  // player location = pre-square 1

  turn = 1
  winner = null
  message.innerText = `It's time for player ${turn === 1 ? 'One' : 'Two'} to choose a card!`
  greenSquares = []
  purpleSquares = []
  blueSquares = []
  orangeSquares = []
  redSquares = []
  yellowSquares = []
  deck1 = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'o1', 'o2', 'o3', 'o4', 'o5', 'o6', 'o7', 'p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'r7', 'y1', 'y2', 'y3', 'y4', 'y5', 'y6', 'y7']
  render()

}
// STRETCH GOAL - modal at init for game directions 




//----------------------------------------------------//
// RENDER FUNCTION 
function render() {
  
}
// loops over each individual color array (representing each of that colors square on the board)
// for each iteration...
// use the index(s) of the iteration to access the corresponding color in the card deck
// need to seperate each array (if else statements to find the array that corresponds to the card deck)
// render message stating who's turn it is 
// render win message if there is a win (congratulations!)


// FINISH THIS FUNCTION //
// connects to a click of each individual board square 
function handleClickBoard(event) {
}

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


//----------------- CARD DECK FUNCTIONALITY ------------------------//


// init()

// function init() {
//   deck1 = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'o1', 'o2', 'o3', 'o4', 'o5', 'o6', 'o7', 'p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'r7', 'y1', 'y2', 'y3', 'y4', 'y5', 'y6', 'y7']
// }

function handleClick() {
  if (deck1.length > 0) {
    let randIdx = Math.floor(Math.random() * deck1.length)
    cardPicked = deck1.splice(randIdx, 1)[0]
    deck2.push(cardPicked)
    render(cardPicked)
  }
}


function render() {
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

