Display player's money count
Ask for bet

2 cards dealt to dealer and player
If !21 (player/dealer) -- enter loop:

TURN LOOP:
--- Add values in player hand array
--- Choice to hit or stand
--- If hit, add card from random deck to player hand
--- Dealer chooses hit or stand/asseses until value is 17

Compare hands:
	If player < 21 and player < dealer, then player wins
	If dealer < 21 and dealer > player, then dealer wins
	if player === dealer, tie


Global variables
	array - starting deck
	array - random deck
	array - player hand
	array - dealer hand

functions: 

add values in hand arrays
calculate bets

var startingDeck = [
	
	twoD: { image: "img tag",
		    value: 2 },
	twoC: { image: "img tag",
		  value: 2 },
 	twoS: { image: "img tag",
 		  value: 2 },
 	twoH: { image: "img tag",
 		  value: 2},
 	threeD: { image: "img tag",
 		  value: 3},
 	threeC: { image: "img tag",
 		  value: 3},
 	threeS: { image: "img tag", 
 		  value: 3},
 	threeH: { image: "img tag", 
 		  value: 3},
 	fourD: { image: "img tag", 
 		  value: 4},
 	fourC: { image: "img tag", 
 		  value: 4},
 	fourH: { image: "img tag",
 		  value: 4},
 	fiveS: { image: "img tag",
 		  value: 5},
 	fiveD: { image: "img tag",
 		  value: 5},
 	fiveC: { image: "img tag",
 		  value: 5},
 	fiveS: { image: "img tag", 
 		  value: 5},
 	sixD: { image: "img tag",
 		  value: 6},
 	sixC: { image: "img tag",
 		  value: 6},
 	sixS: { image: "img tag", 
 		  value: 6},
 	sixH: { image: "img tag", 
 		  value: 6},
 	sevenD: { image: "img tag",
 		  value: 7},
 	sevenC: { image: "img tag",
 		  value: 7},
 	sevenS: { image: "img tag", 
 		  value: 7},
 	sevenH: { image: "img tag", 
 		  value: 7},
 	eightD: { image: "img tag",
 		  value: 8},
 	eightC: { image: "img tag",
 		  value: 8},
 	eightS: { image: "img tag", 
 		  value: 8},
 	eightH: { image: "img tag", 
 		  value: 8},
 	nineD: { image: "img tag",
 		  value: 9},
 	nineC: { image: "img tag",
 		  value: 9},
 	nineS: { image: "img tag", 
 		  value: 9},
 	nineH: { image: "img tag", 
 		  value: 9},
 	tenD: { image: "img tag",
 		  value: 10},
 	tenC: { image: "img tag",
 		  value: 10},
 	tenS: { image: "img tag", 
 		  value: 10},
 	tenH: { image: "img tag", 
 		  value: 10},
 	jackD: { image: "img tag",
 		  value: 10},
 	jackC: { image: "img tag",
 		  value: 10},
 	jackS: { image: "img tag", 
 		  value: 10},
 	jackH: { image: "img tag", 
 		  value: 10},
 	queenD: { image: "img tag",
 		  value: 10},
 	queenC: { image: "img tag",
 		  value: 10},
 	queenS: { image: "img tag", 
 		  value: 10},
 	queenH: { image: "img tag", 
 		  value: 10},
 	kingD: { image: "img tag",
 		  value: 10},
 	kingC: { image: "img tag",
 		  value: 10},
 	kingS: { image: "img tag", 
 		  value: 10},
 	kingH: { image: "img tag", 
 		  value: 10},
 	aceD: { image: "img tag",
 		  value: 11},
 	aceC: { image: "img tag",
 		  value: 11},
 	aceS: { image: "img tag", 
 		  value: 11},
 	aceH: { image: "img tag", 
 		  value: 11},
];	  

