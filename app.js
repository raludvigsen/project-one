
// Our deal function will return a random card
var playerDeal = function() {
  card = Math.floor(Math.random()*52+1);
  return card;
};

// Deal out our first hand
var playerCard1 = playerDeal();
var playerCard2 = playerDeal();

// This function takes a card as a parameter and returns the value
// of that card
var getValue = function(card) {
  // if its a face card, number should be set to 10        
    if(card % 13 === 0 || card % 13 > 10  ) {
        return 10;
    }
  // What if it's an ace?
    else if (card % 13 === 1) {
        return 11;
    // Otherwise, we just want its number value
    } else {
        return card % 13;
    }
}
        
// Score the hand
function playerScore() {
  return getValue(playerCard1) + getValue(playerCard2);
}

var dealerHand = function () {
  dealerCard = Math.floor(Math.random() * 52 +1);
  return dealerCard;
}

var dealerCard1 = dealerHand();
var dealerCard2 = dealerHand();

function dealerScore () {
  return getValue(dealerCard1) + getValue(dealerCard2);
}


console.log("Dealer cards are " + dealerCard1 + " and " + dealerCard2 + " for a score of " + dealerScore(dealerCard1, dealerCard2));


console.log("You have cards " + playerCard1 + " and " + playerCard2 +
        " for a score of " + playerScore(playerCard1, playerCard2));


var playerHit = function () {
  if (playerScore < 21)
}