let deck = [];
const deckStart = [
  { rank: "2", value: 2, suitEmoji: "♡", suit: "hearts" },
  { rank: "3", value: 3, suitEmoji: "♡", suit: "hearts" },
  { rank: "4", value: 4, suitEmoji: "♡", suit: "hearts" },
  { rank: "5", value: 5, suitEmoji: "♡", suit: "hearts" },
  { rank: "6", value: 6, suitEmoji: "♡", suit: "hearts" },
  { rank: "7", value: 7, suitEmoji: "♡", suit: "hearts" },
  { rank: "8", value: 8, suitEmoji: "♡", suit: "hearts" },
  { rank: "9", value: 9, suitEmoji: "♡", suit: "hearts" },
  { rank: "10", value: 10, suitEmoji: "♡", suit: "hearts" },
  { rank: "J", value: 10, suitEmoji: "♡", suit: "hearts" },
  { rank: "Q", value: 10, suitEmoji: "♡", suit: "hearts" },
  { rank: "K", value: 10, suitEmoji: "♡", suit: "hearts" },
  { rank: "A", value: 0, suitEmoji: "♡", suit: "hearts" },

  { rank: "2", value: 2, suitEmoji: "♢", suit: "diamonds" },
  { rank: "3", value: 3, suitEmoji: "♢", suit: "diamonds" },
  { rank: "4", value: 4, suitEmoji: "♢", suit: "diamonds" },
  { rank: "5", value: 5, suitEmoji: "♢", suit: "diamonds" },
  { rank: "6", value: 6, suitEmoji: "♢", suit: "diamonds" },
  { rank: "7", value: 7, suitEmoji: "♢", suit: "diamonds" },
  { rank: "8", value: 8, suitEmoji: "♢", suit: "diamonds" },
  { rank: "9", value: 9, suitEmoji: "♢", suit: "diamonds" },
  { rank: "10", value: 10, suitEmoji: "♢", suit: "diamonds" },
  { rank: "J", value: 10, suitEmoji: "♢", suit: "diamonds" },
  { rank: "Q", value: 10, suitEmoji: "♢", suit: "diamonds" },
  { rank: "K", value: 10, suitEmoji: "♢", suit: "diamonds" },
  { rank: "A", value: 0, suitEmoji: "♢", suit: "diamonds" },

  { rank: "2", value: 2, suitEmoji: "♧", suit: "clubs" },
  { rank: "3", value: 3, suitEmoji: "♧", suit: "clubs" },
  { rank: "4", value: 4, suitEmoji: "♧", suit: "clubs" },
  { rank: "5", value: 5, suitEmoji: "♧", suit: "clubs" },
  { rank: "6", value: 6, suitEmoji: "♧", suit: "clubs" },
  { rank: "7", value: 7, suitEmoji: "♧", suit: "clubs" },
  { rank: "8", value: 8, suitEmoji: "♧", suit: "clubs" },
  { rank: "9", value: 9, suitEmoji: "♧", suit: "clubs" },
  { rank: "10", value: 10, suitEmoji: "♧", suit: "clubs" },
  { rank: "J", value: 10, suitEmoji: "♧", suit: "clubs" },
  { rank: "Q", value: 10, suitEmoji: "♧", suit: "clubs" },
  { rank: "K", value: 10, suitEmoji: "♧", suit: "clubs" },
  { rank: "A", value: 0, suitEmoji: "♧", suit: "clubs" },

  { rank: "2", value: 2, suitEmoji: "♤", suit: "spades" },
  { rank: "3", value: 3, suitEmoji: "♤", suit: "spades" },
  { rank: "4", value: 4, suitEmoji: "♤", suit: "spades" },
  { rank: "5", value: 5, suitEmoji: "♤", suit: "spades" },
  { rank: "6", value: 6, suitEmoji: "♤", suit: "spades" },
  { rank: "7", value: 7, suitEmoji: "♤", suit: "spades" },
  { rank: "8", value: 8, suitEmoji: "♤", suit: "spades" },
  { rank: "9", value: 9, suitEmoji: "♤", suit: "spades" },
  { rank: "10", value: 10, suitEmoji: "♤", suit: "spades" },
  { rank: "J", value: 10, suitEmoji: "♤", suit: "spades" },
  { rank: "Q", value: 10, suitEmoji: "♤", suit: "spades" },
  { rank: "K", value: 10, suitEmoji: "♤", suit: "spades" },
  { rank: "A", value: 0, suitEmoji: "♤", suit: "spades" },
];

deck = deckStart;

let bankroll = 1000;
let wagerAmount = 100;

const userHandElement = document.getElementById("user-hand");
const dealerHandElement = document.getElementById("dealer-hand");
const userScoreElement = document.getElementById("user_score");
const dealerScoreElement = document.getElementById("dealer_score");
const outcomeInterface = document.getElementById("outcome_interface");
const wagerElement = document.getElementById("wager_amount");
const bankrollElement = document.getElementById("bankroll");
const doubleDownBtn = document.getElementById("doubledown-btn");
const hitBtn = document.getElementById("hit-btn");
const stayBtn = document.getElementById("stay-btn");
const splitBtn = document.getElementById("split-btn");

bankrollElement.innerHTML = bankroll;

// it would almost be nice just to have methods directly attached to my hands objects...
const cardHands = {
  dealerCards: [
    { rank: "3", value: 3, suitEmoji: "♡", suit: "hearts" },
    { rank: "J", value: 10, suitEmoji: "♤", suit: "spades" },
  ],
  userCards: [
    { rank: "5", value: 5, suitEmoji: "♡", suit: "hearts" },
    { rank: "5", value: 5, suitEmoji: "♢", suit: "diamonds" },
  ],
};

const userCards = cardHands.userCards;
const dealerCards = cardHands.dealerCards;
const userCard1 = cardHands.userCards[0];

const score = {
  dealer: 0,
  user: 0,
};
// const dealerScore = dealerCards.reduce((sum, card) => sum + card.value, 0);

// const userScore = userCards.reduce((sum, card) => sum + card.value, 0);

function initialDeal() {
  // cardHands.userCards.push(currentlyBeingDealtCard("user"));
  // cardHands.userCards.push(currentlyBeingDealtCard("user")); // add setTimeout for dealing realism, removed initially     for       simplicity and sanity

  // dealerCards.push(currentlyBeingDealtCard("dealer"));
  // dealerCards.push(currentlyBeingDealtCard("dealer"));

  // console.log("userCards in initialDeal", userCards);
  // console.log("dealerCards in initialDeal", dealerCards);

  // add setTimeout for dealing realism
  updateScore();
  updateScoreElements();

  if (score.user >= 9 && score.user <= 11) {
    doubleDownBtn.disabled = false;
  }

  //pair SPLIT hand  logic --- type of thing that should be a function? Performance issues? *****
  const firstCard = userCards[0].value;
  const secondCard = userCards[1].value;
  if (firstCard === secondCard) {
    splitBtn.disabled = false;
  }

  userCards.forEach((card) => addCardToHandElement(card, "user"));
  dealerCards.forEach((card) => addCardToHandElement(card, "dealer"));

  if (score.user === 21 && score.dealer !== 21) {
    console.log("Congrats on BlackJack!");
    settleGame("win", 1.5);
  }
  if (score.user === 21 && score.dealer === 21) {
    settleGame("tie");
  }
  if (score.user !== 21 && score.dealer === 21) {
    settleGame("lose");
  }
}

initialDeal();

// cards needs to have one simple source of truth/state
// the nice thing about blackjack is there are so many edge cases, but they aren't bland old type issues
// handle split -- splitting 2 aces might be a one - off
// handle flipping dealer card at showdown
function updateScore() {
  // here's where I need to handle the ace dichotomy
  // doing a lot of identical things twice here but need to to stay sane for now, only handle so much abstraction at once lol

  let numbDealerAces = dealerCards.reduce((aceCount, card) => {
    return card.rank === "A" ? aceCount + 1 : aceCount;
  }, 0);
  let numbUserAces = userCards.reduce((aceCount, card) => {
    return card.rank === "A" ? aceCount + 1 : aceCount;
  }, 0);
  let dealerNonAces = dealerCards.filter((card) => card.type !== "A");
  let userNonAces = userCards.filter((card) => card.type !== "A");
  let dealerNonAcesTotal = dealerNonAces.reduce(
    (sum, card) => sum + card.value,
    0
  );
  let userNonAcesTotal = userNonAces.reduce((sum, card) => sum + card.value, 0);

  // Logic here is a little simpler than i expected because you're never going to have more than one ace > 11
  // Which means either all the aces will all be worth 1 or one will be 11 and the rest must be 1s
  //
  switch (numbDealerAces) {
    case 0:
      score.dealer = dealerNonAcesTotal;
      break;
    case 1:
      if (dealerNonAcesTotal <= 10) {
        score.dealer = dealerNonAcesTotal + 11;
      } else {
        score.dealer = dealerNonAcesTotal + 1;
      }
      break;
    case 2: // 10 1 11
      if (dealerNonAcesTotal <= 9) {
        score.dealer = dealerNonAcesTotal + 12;
      } else {
        score.dealer = dealerNonAcesTotal + 2;
      }
      break;
    case 3:
      if (dealerNonAcesTotal <= 8) {
        score.dealer = dealerNonAcesTotal + 13;
      } else {
        score.dealer = dealerNonAcesTotal + 3;
      }
      break;
    case 4:
      if (dealerNonAcesTotal <= 7) {
        score.dealer = dealerNonAcesTotal + 14;
      } else {
        score.dealer = dealerNonAcesTotal + 4;
      }
      break;
  }

  switch (numbUserAces) {
    case 0:
      score.user = userNonAcesTotal;
      break;
    case 1:
      if (userNonAcesTotal <= 10) {
        score.user = userNonAcesTotal + 11;
      } else {
        score.user = userNonAcesTotal + 1;
      }
      break;
    case 2: // 10 1 11
      if (userNonAcesTotal <= 9) {
        score.user = userNonAcesTotal + 12;
      } else {
        score.user = userNonAcesTotal + 2;
      }
      break;
    case 3:
      if (userNonAcesTotal <= 8) {
        score.user = userNonAcesTotal + 13;
      } else {
        score.user = userNonAcesTotal + 3;
      }
      break;
    case 4:
      if (userNonAcesTotal <= 7) {
        score.user = userNonAcesTotal + 14;
      } else {
        score.user = userNonAcesTotal + 4;
      }
      break;
  }

  console.log(score);
}
// function updateScore() {
//   const computeDealerScore = dealerCards.reduce(
//     (sum, card) => sum + card.value,
//     0
//   );
//   console.log("userCards inside updateScore:", userCards);
//   const computeUserScore = userCards.reduce((sum, card) => sum + card.value, 0);

//   score.user = computeUserScore;
//   score.dealer = computeDealerScore;
//   console.log(score.user, score.dealer, "inside updateScore()");
// }

function updateScoreElements() {
  dealerScoreElement.innerHTML = "";
  userScoreElement.innerHTML = "";
  dealerScoreElement.innerHTML = score.dealer;
  userScoreElement.innerHTML = score.user;
}

function hitUser() {
  userCards.push(currentlyBeingDealtCard("user"));
  updateScore();
  console.log(score, "inside hitUser");
  updateScoreElements();
  if (score.user > 21) {
    settleGame("lose");
  }
  // compareTotals();
}

function currentlyBeingDealtCard(player) {
  const randomCardPositionInDeck = Math.ceil(Math.random() * deck.length) - 1;
  const actualCard = deck[randomCardPositionInDeck];
  // remove the currently being dealt card from the deck

  if (player === "user" && userCards.length === 0) {
    addCardToHandElement(deck[13], player);
    deck.splice(deck[13], 1);
    return;
  } else if (player === "user" && userCards.length === 1) {
    addCardToHandElement(deck[0], player);
    deck.splice(deck[0], 1);
    return;
  } else {
    addCardToHandElement(actualCard, player);
    deck.splice(randomCardPositionInDeck, 1);
    return actualCard;
  }

  // return actualCard; // currentlyBeingDealtCard to be dealt to Dealer or User hand
}

function addCardToHandElement(card, player) {
  const cardElement = document.createElement("div");
  const suitElement = document.createElement("div");
  const rightRankElement = document.createElement("div");
  const leftRankElement = document.createElement("div");

  rightRankElement.textContent = card.rank;
  rightRankElement.classList.add("rank", "rankRightSide");
  leftRankElement.textContent = card.rank;
  leftRankElement.classList.add("rank", "rankLeftSide");
  suitElement.textContent = card.suitEmoji;
  suitElement.classList.add("suit");
  cardElement.classList.add("card");

  if (player === "dealer" && dealerCards.length === 0) {
    cardElement.classList.add("card-back");
    dealerHandElement.appendChild(cardElement);
  } else if (player === "user") {
    cardElement.classList.add("card-face");
    cardElement.appendChild(leftRankElement);
    cardElement.appendChild(suitElement);
    cardElement.appendChild(rightRankElement);

    userHandElement.appendChild(cardElement);
  } else {
    cardElement.classList.add("card-face");
    cardElement.appendChild(leftRankElement);
    cardElement.appendChild(suitElement);
    cardElement.appendChild(rightRankElement);

    dealerHandElement.appendChild(cardElement);
  }
}

// When the player's turn comes, they place a bet equal to the original bet, and the dealer gives the player just one card, which is placed face down and is not turned up until the bets are settled at the end of the hand.
function doubleDown() {
  stayBtn.disabled = true;
  hitBtn.disabled = true;
  doubleDownBtn.disabled = true;
  wagerAmount = wagerAmount + wagerAmount;
  wagerElement.innerHTML = wagerAmount;
  userCards.push(currentlyBeingDealtCard("user"));

  updateScore();
  updateScoreElements();
  dealerShowdown();
}

// function computeTotal(hand) {
//   // here's where I need to handle the ace dichotomy
//   let handScore = 0;
//   let numberOfAces = hand.reduce((aceCount, card) => {
//     return card.rank === "A" ? aceCount + 1 : aceCount;
//   }, 0);
//   let handWithNoAces = hand.filter((card) => card.type !== "A");
//   let handWithNoAcesTotal = handWithNoAces.reduce(
//     (sum, card) => sum + card.value,
//     0
//   );

// Logic here is a little simpler than i expected because you're never going to have more than one ace > 11
// Which means either all the aces will all be worth 1 or one will be 11 and the rest must be 1s
//
//   switch (numberOfAces) {
//     case 0:
//       handScore = handWithNoAcesTotal;
//       break;
//     case 1:
//       if (handWithNoAcesTotal <= 10) {
//         handScore = handWithNoAcesTotal + 11;
//       } else {
//         handScore = handWithNoAcesTotal + 1;
//       }
//       break;
//     case 2: // 10 1 11
//       if (handWithNoAcesTotal <= 9) {
//         handScore = handWithNoAcesTotal + 12;
//       } else {
//         handScore = handWithNoAcesTotal + 2;
//       }
//       break;
//     case 3:
//       if (handWithNoAcesTotal <= 8) {
//         handScore = handWithNoAcesTotal + 13;
//       } else {
//         handScore = handWithNoAcesTotal + 3;
//       }
//       break;
//     case 4:
//       if (handWithNoAcesTotal <= 7) {
//         handScore = handWithNoAcesTotal + 14;
//       } else {
//         handScore = handWithNoAcesTotal + 4;
//       }
//       break;
//   }
//   console.log("number of aces:", numberOfAces);

// }

function compareTotals() {
  if (userScore > 21) {
    console.log("You busted, you lose");
    settleGame("lose");
  } else if (userScore < 21) {
    console.log(`click hit if you would like another card`);
    console.log(`click stay if you want to stay with what you have`);
  } else {
    console.log("You've got 21!!!");
  }
}

function settleGame(outcome, blackjackMultiplier = 1) {
  if (outcome === "lose") {
    bankroll -= wagerAmount;
    handleOutcomeInterface(outcome);
  } else if (outcome === "win") {
    bankroll += wagerAmount * blackjackMultiplier;
    handleOutcomeInterface(outcome);
  } else {
    console.log("breaking Even");
    handleOutcomeInterface(outcome);
  }
  bankrollElement.innerHTML = bankroll;
  console.log(bankroll);
  // disable buttons here, then re-enable on newHand();
}

function dealerShowdown() {
  // When the dealer has served every player, the dealers face-down card is turned up. If the total is 17 or more, it must stand. If the total is 16 or under, they must take a card. The dealer must continue to take cards until the total is 17 or more, at which point the dealer must stand. If the dealer has an ace, and counting it as 11 would bring the total to 17 or more (but not over 21), the dealer must count the ace as 11 and stand. The dealer's decisions, then, are automatic on all plays, whereas the player always has the option of taking one or more cards.
  stayBtn.disabled = true;
  hitBtn.disabled = true;
  //   flipDealerCardUp();
  if (score.dealer === 21 && score.user === 21) {
    settleGame("tie");
  } else if (score.dealer > 21) {
    settleGame("win");
  } else if (score.dealer < 17) {
    dealerCards.push(currentlyBeingDealtCard("dealer"));
    updateScore();
    updateScoreElements();

    dealerShowdown();
  } else if (score.dealer > 16) {
    if (score.dealer > score.user) {
      settleGame("lose");
    } else if (score.dealer === score.user) {
      settleGame("tie");
    } else {
      settleGame("win");
    }
  }
}

function handleOutcomeInterface(outcome) {
  outcomeInterface.innerHTML = `You ${outcome}`;
}

function resetGame() {
  dealerCards.splice(0, dealerCards.length); // reset game
  userCards.splice(0, userCards.length);

  wager = 0;
  userHandElement.innerHTML = "";
  dealerHandElement.innerHTML = "";
  outcomeInterface.innerHTML = "";
  stayBtn.disabled = false;
  hitBtn.disabled = false;

  deck = deckStart;
}

function newHand() {
  resetGame();

  initialDeal();
  compareTotals();
}
