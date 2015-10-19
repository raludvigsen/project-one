
// // Our deal function will return a random card
// var playerDeal = function() {
//   card = Math.floor(Math.random()*52+1);
//   return card;
// };

// // Deal out our first hand

// ///////GLOBAL VARIABLES 

// var playerCard1 = playerDeal();
// var playerCard2 = playerDeal();

// var dealerCard1 = dealerHand();
// var dealerCard2 = dealerHand();

// // This function takes a card as a parameter and returns the value
// // of that card
// var getValue = function(card) {
//   // if its a face card, number should be set to 10        
//     if(card % 13 === 0 || card % 13 > 10  ) {
//         return 10;
//     }
//   // What if it's an ace?
//     else if (card % 13 === 1) {
//         return 11;
//     // Otherwise, we just want its number value
//     } else {
//         return card % 13;
//     }
// }
        
// // Score the hand
// function playerScore() {
//   return getValue(playerCard1) + getValue(playerCard2);
// }

// var dealerHand = function () {
//   dealerCard = Math.floor(Math.random() * 52 +1);
//   return dealerCard;
// }



// function dealerScore () {
//   return getValue(dealerCard1) + getValue(dealerCard2);
// }


// console.log("Dealer cards are " + dealerCard1 + " and " + dealerCard2 + " for a score of " + dealerScore(dealerCard1, dealerCard2));


// console.log("You have cards " + playerCard1 + " and " + playerCard2 +
//         " for a score of " + playerScore(playerCard1, playerCard2));


// // var playerHit = function () {
// //   if (playerScore < 21)

// // }






var startingDeck = [

        { name: 'Ace', value : 1, suit: 'clubs' },
        { name: '2', value : 2, suit: 'clubs' },
        { name: '3', value: 3, suit: 'clubs' },
        { name: '4', value: 4 , suit: 'clubs' },
        { name: '5', value: 5, suit: 'clubs' },
        { name: '6', value: 6, suit: 'clubs' },
        { name: '7', value: 7, suit: 'clubs' },
        { name: '8', value: 8, suit: 'clubs' },
        { name: '9', value: 9, suit: 'clubs' },
        { name: '10', value: 10, suit: 'clubs' },
        { name: 'Jack', value: 10, suit: 'clubs' },
        { name: 'Queen', value: 10, suit: 'clubs' },
        { name: 'King', value: 10, suit: 'clubs' },
        { name: 'Ace', value : 1, suit: 'diamonds' },
        { name: '2', value : 2, suit: 'diamonds' },
        { name: '3', value: 3, suit: 'diamonds' },
        { name: '4', value: 4 , suit: 'diamonds' },
        { name: '5', value: 5, suit: 'diamonds' },
        { name: '6', value: 6, suit: 'diamonds' },
        { name: '7', value: 7, suit: 'diamonds' },
        { name: '8', value: 8, suit: 'diamonds' },
        { name: '9', value: 9, suit: 'diamonds' },
        { name: '10', value: 10, suit: 'diamonds' },
        { name: 'Jack', value: 10, suit: 'diamonds' },
        { name: 'Queen', value: 10, suit: 'diamonds' },
        { name: 'King', value: 10, suit: 'diamonds' },
        { name: 'Ace', value : 1, suit: 'hearts' },
        { name: '2', value : 2, suit: 'hearts' },
        { name: '3', value: 3, suit: 'hearts' },
        { name: '4', value: 4 , suit: 'hearts' },
        { name: '5', value: 5, suit: 'hearts' },
        { name: '6', value: 6, suit: 'hearts' },
        { name: '7', value: 7, suit: 'hearts' },
        { name: '8', value: 8, suit: 'hearts' },
        { name: '9', value: 9, suit: 'hearts' },
        { name: '10', value: 10, suit: 'hearts' },
        { name: 'Jack', value: 10, suit: 'hearts' },
        { name: 'Queen', value: 10, suit: 'hearts' },
        { name: 'King', value: 10, suit: 'hearts' },
        { name: 'Ace', value : 1, suit: 'diamonds' },
        { name: '2', value : 2, suit: 'diamonds' },
        { name: '3', value: 3, suit: 'diamonds' },
        { name: '4', value: 4 , suit: 'diamonds' },
        { name: '5', value: 5, suit: 'diamonds' },
        { name: '6', value: 6, suit: 'diamonds' },
        { name: '7', value: 7, suit: 'diamonds' },
        { name: '8', value: 8, suit: 'diamonds' },
        { name: '9', value: 9, suit: 'diamonds' },
        { name: '10', value: 10, suit: 'diamonds' },
        { name: 'Jack', value: 10, suit: 'diamonds' },
        { name: 'Queen', value: 10, suit: 'diamonds' },
        { name: 'King', value: 10, suit: 'diamonds' }
];  

var playerHand = new Array();
var dealerHand = new Array();


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
shuffle(startingDeck);
console.log(startingDeck);

playerHand.push(startingDeck[0]);
playerHand.push(startingDeck[1]);
dealerHand.push(startingDeck[2]);
dealerHand.push(startingDeck[3]);
console.log(playerHand);
console.log(dealerHand);

var playerHandValue = (playerHand[0].value + playerHand[1].value);
var dealerHandValue = (dealerHand[0].value + dealerHand[1].value);

console.log(playerHandValue);
console.log(dealerHandValue);

var playerHandDisplay = document.createElement("div");
var playerHandDisplay.innerHTML = "You were dealt the " + playerHand[0].name + " of " + playerHand[0].suit + " and the " + playerHand[1].name + " of " playerHand[1].suit + " for a value of " + playerHandValue;
playerHandDisplay.body.appendChild(handInfo);

console.log(playerHandDisplay);



var hitBut = document.getElementById("hit");

hitBut.onClick = function () {
    for (var i = 3; i < 52; i++) {
        playerHand.push(startingDeck[i]);
    }
}


/////I need to get two cards for dealer and player out of this^







///then I need to display the total value of each's hand.

// ///user input-- hit/stand-- if hit( add to value, display another card )
//   if the player goes over 21, dealer wins, vice versa
//     but dealer always stops at 17






// ///////////////////////
// What is a card?
// - Criteria for all k:v pairs


// name
// value
// available -- "true/false"


// What is a deck? 
// - storage for all cards
// ////52 Cards---Object array

// How do I build one?

// How do I deal cards randomized to players?

// ////Math(floor/random)-- conditions to 

// Hands have to be calculated value
// (- Ace check) Joe said i can make this a bonus

// Win/loss conditions
// Bust check
// BlackJack


// Bare minimum DOM visualization
// - Some sort of representation of cards
// - buttons to hit, stay
// - Deal button to start game

// • A function should do 1 thing well
// • Break down Pseudo code into 1 action

////========================================================
// var playerIndex = new Array();

// var playerHand = new Array();
// var playerHandSuit = new Array();
// var dealerHand = new Array();
// var dealerHandSuit = new Array ();

// var playerHandValueHard = 0;
// var playerHandValueSoft = 0;

// var dealerHandValue = 0;
// var dealerHandValueSoft = 0;

// var playerNumber = 0;
// var numberOfPlayers = 1;

// var playerCardNumber = 0;

// function stick () {

//     playerIndex[playerNumber] = {playerHand, playerHandSuit, playerHandValueHard, playerHandValueSoft};
//     playerNumber = playerNumber + 1;
//     if (playerNumber >= numberOfPlayers) {

//     }

// }

// function dealerHit () {

//     dealerHand[playerCardNumber] = card[0];
//     dealerHandSuit[playerCardNumber] = suit;
//     dealerHandValueHard = playerHandValueHard + card[1];
//     dealerHandValueSoft = playerHandValueSoft + card[2];

// }


// function playerHit () {

//     playerCardNumber = playerCardNumber + 1;
//     var suit = randSuit();
//     var card = randCard();
    
//     playerHand[playerCardNumber] = card[0];
//     playerHandSuit[playerCardNumber] = suit;
//     playerHandValueHard = playerHandValueHard + card[1];
//     playerHandValueSoft = playerHandValueSoft + card[2];

// }

// function randCard() {
//     var cardArray = new Array ();
//     var randCard = random (1, 13);
//     switch(randCard) {
//         case 1:
//             cardArray[0] = "A";
//             cardArray[1] = 1;
//             cardArray[2] = 11;
//             break;
//         case 11:
//             cardArray[0] = "J";
//             cardArray[1] = 10;
//             cardArray[2] = 10;
//             break;
//         case 12:
//             cardArray[0] = "Q";
//             cardArray[1] = 10;
//             cardArray[2] = 10;
//             break;
//         case 13:
//             cardArray[0] = "K";
//             cardArray[1] = 10;
//             cardArray[2] = 10;
//             break;
//         default:
//             cardArray[0] = randCard;
//             cardArray[1] = randCard;
//             cardArray[2] = randCard;
//     }
//     return cardArray;

// }

// function randSuit () {
//     var suit;
//     rand = random(0, 3);
//     switch(rand) {
//         case 0:
//             suit = "hearts"
//             break;
//         case 1: 
//             suit = "Spades"
//             break;
//         case 2:
//             suit = "Diamonds"
//             break;
//         case 3:
//             suit = "Clubs"
//             break;
//         default: 
//             alert("error getting suit");
//     }

//     return suit;
// }

// function random (x,y) {
//         ///
//     return Math.floor(Math.random()*(y-x+1))+ x;
// }
////==============================================================



/////===============================================================
// function random(maxValue) {
// day = new Date();
// hour = day.getHours();
// min = day.getMinutes();
// sec = day.getSeconds();
// return (((hour + 1) * (min + 1) * sec) % maxValue) + 1;}

// function pickSuit() {
//     suit = random(4);
//         if(suit == 1)
//             return "Spades";
//         if(suit == 2)
//             return "Clubs";
//         if(suit == 3)
//             return "Diamonds";
//         if(suit == 4)
//             return "Hearts";
// }

// function cardName(card) {
//     if(card == 1)
//         return "Ace";
//     if(card == 11)
//         return "Jack";
//     if(card == 12)
//         return "Queen";
//     if(card == 13)
//         return "King";
//         return "" + card;
// }

// function cardValue(card) {
// if(card == 1)
//     return 11;
// if(card > 10)
//     return 10;
//     return card;
// }

// function PickACard(strWho) {
//     card = random(13);
//     suit = pickSuit();
//     return cardValue(card);
// }

// function NewHand(form) {
//     form.dealer.value = 0;
//     form.you.value = 0;
//     form.dealer.value = eval(form.dealer.value) + PickACard("Dealer");
//     form.you.value = eval(form.you.value) + PickACard("You");
// }

// function Dealer(form) {
//     while(form.dealer.value < 17) {
//         form.dealer.value = eval(form.dealer.value) + PickACard("Dealer");
//     }
// }

// function User(form) {
//     form.you.value = eval(form.you.value) + PickACard("You");
//         if(form.you.value > 21) {
//             alert("You busted!");
//         }
// }

// function LookAtHands(form) {
//     if(form.dealer.value > 21) {
//         alert("House busts!  You win!");
//     }   
//     else if(form.you.value > form.dealer.value) {
//         alert("You win!");
//     }
//     else if(form.dealer.value == form.you.value) {
//         alert("Push!");
//     }
//     else {
//         alert("House wins!");
//     }
// }
/////=========================================================





