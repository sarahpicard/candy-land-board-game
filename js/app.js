// DEFINE VARIABLES
// variables - winner, turn, tie, playerLocation(?), greenSquares, purpleSquares, blueSquares, orangeSquares, redSquares, yellowSquares 

// CACHED ELEMENT REFERENCES 
// message 
// whole game board
// card deck 
// reset game button 

// EVENT LISTENERS   
// click on card deck 
// click on reset button 


// ------- Random Planning (conceptual) ----------// 
// color that pops up in card deck should correspond with the first of that same color in an array - making it only possible for the player to click on that specific square on the game board (first in array, second in array, etc. until player reaches the end of the game board and win condition is met)

// would be nicer if the player piece automatically moves to the first available color of card turned over (STRETCH GOAL) (would have to connect the card deck colors with game board color arrays and move the piece there automatically?)

// single player game (the player will play both #1 and #2 until someone reaches the finish castle - win condition)

// player 1 (holds 1)
//player 2 (holds -1)

// each square will map to a corresponding index in corresponding color array
// index 0 - X (dependent upon actual board length and number of colored spots present in length)

// allow for both players to be on the same square 

//------------------------------------------------------//
// INIT FUNCTION 
// message: player one's turn
// card deck should be blank (not showing a color) and says "turn over" - player needs to click on the card deck to start. 
// winner = false (will later hold 1 or -1 dependent upon player winning)
// tie = false
// turn = player 1 
// player location = pre-square 1
// waiting for user (player 1) to click the deck 
// array representing green squares
// array representing purple squares
// array representing blue squares
// array representing orange squares 
// array representing red squares
// array representing yellow squares

// render()

//----------------------------------------------------//
// RENDER FUNCTION 
// loops over each individual color array (representing each of that colors square on the board)
  // for each iteration...
  // use the index(s) of the iteration to access the corresponding color in the card deck
        // need to seperate each array (if else statements to find the array that corresponds to the card deck)
// render message stating who's turn it is 
// render win message if there is a win (congratulations!)
// render tie message if there is a tie? 

// ----------------------- IF USING HANDLECLICK ------//
// ------ user would need to click on the spot corresponding to the card color
// handleClick function to move game piece to the corresponding board spot
// obtain the index of the square that has been clicked 
// make sure that ONLY the next square of specified color CAN be clicked 
// update the board array (index should be changed to only allow the lowest possible to be clicked now)







