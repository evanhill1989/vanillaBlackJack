let dealerCards = [];
let userCards = [];
let deck = [];

let bankroll = 1000;
let wagerAmount = 100;

let userScore = 0;
let dealerScore = 0;

const userHandElement = document.getElementById("user-cards");
const dealerHandElement = document.getElementById("dealer-cards");
const userScoreElement = document.getElementById("user_score");
const dealerScoreElement = document.getElementById("dealer_score");
const outcomeInterface = document.getElementById("outcome_interface");

// handle multiple aces logic

function computeTotal(hand) {
  // here's where I need to handle the ace dichotomy
  let handScore = 0;
  let numberOfAces = hand.reduce((aceCount, card) => {
    return card.rank === "A" ? aceCount + 1 : aceCount;
  }, 0);
  let handWithNoAces = hand.filter((card) => card.type !== "A");
  let handWithNoAcesTotal = handWithNoAces.reduce(
    (sum, card) => sum + card.value,
    0
  );

  switch (numberOfAces) {
    case 0:
      handScore = handWithNoAcesTotal;
      break;
    case 1:
      if (handWithNoAcesTotal < 11) {
        handScore = handWithNoAcesTotal + 11;
      } else {
        handScore = handWithNoAcesTotal + 1;
      }
      break;
    case 2:
      handScore = handWithNoAcesTotal;
      break;
    case 3:
      handScore = handWithNoAcesTotal;
      break;
    case 4:
      handScore = handWithNoAcesTotal;
      break;
  }
  console.log("number of aces:", numberOfAces);
  return handScore;
}

function updateScoreElements() {
  dealerScoreElement.innerHTML = "";
  userScoreElement.innerHTML = "";
  dealerScoreElement.innerHTML = dealerScore;
  userScoreElement.innerHTML = userScore;
  //   const userScoreNode = document.createElement("div");
  //   const dealerScoreNode = document.createElement("div");

  //   userScoreNode.textContent = userScore;
  //   userScoreElement.appendChild(userScore);
  //   dealerScoreNode.textContent = dealerScore;
  //   dealerScoreElement.appendChild(dealerScore);
}

function addCardToHand(card, player) {
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
  cardElement.classList.add(card.suit);

  cardElement.appendChild(leftRankElement);
  cardElement.appendChild(suitElement);
  cardElement.appendChild(rightRankElement);
  player === "dealer"
    ? dealerHandElement.appendChild(cardElement)
    : userHandElement.appendChild(cardElement);
}

function currentlyBeingDealtCard(player) {
  const currentDeckLength = deck.length;
  const randomCardPositionInDeck = Math.ceil(Math.random() * deck.length) - 1;
  const actualCard = deck[randomCardPositionInDeck];
  deck.splice(randomCardPositionInDeck, 1); // remove the currently being dealt card from the deck
  console.log(currentDeckLength);
  if (player === "dealer") {
    addCardToHand(actualCard, player);
  }
  if (player === "user") {
    addCardToHand(actualCard, player);
  }

  return actualCard; // currentlyBeingDealtCard to be dealt to Dealer or User hand
}

function initialDeal() {
  dealerCards.push(currentlyBeingDealtCard("dealer"));
  dealerCards.push(currentlyBeingDealtCard("dealer"));

  userCards.push(currentlyBeingDealtCard("user"));
  userCards.push(currentlyBeingDealtCard("user")); // add setTimeout for dealing realism, removed initially     for       simplicity and sanity

  // add setTimeout for dealing realism
  userScore = computeTotal(userCards);
  dealerScore = computeTotal(dealerCards);

  updateScoreElements();

  if (userScore === 21 && dealerScore !== 21) {
    console.log("Congrats on BlackJack!");
    settleGame("win", 1.5);
  }
  if (userScore === 21 && dealerScore === 21) {
    settleGame("tie");
  }
  if (userScore !== 21 && dealerScore === 21) {
    settleGame("lose");
  }

  console.log("DealerCards:", dealerCards);
  console.log("userScore:", userScore, "Dealer Score:", dealerScore);
}

function handleOutcomeInterface(outcome) {
  outcomeInterface.innerHTML = `You ${outcome}`;
}
function hitUser() {
  userCards.push(currentlyBeingDealtCard("user"));

  userScore = computeTotal(userCards);

  updateScoreElements();
  compareTotals();
  console.log("updated userScore:", userScore);
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
}

function flipDealerCardUp() {
  console.log(`The dealer exposes the ${dealerCards[0]}`);
}

function dealerShowdown() {
  // When the dealer has served every player, the dealers face-down card is turned up. If the total is 17 or more, it must stand. If the total is 16 or under, they must take a card. The dealer must continue to take cards until the total is 17 or more, at which point the dealer must stand. If the dealer has an ace, and counting it as 11 would bring the total to 17 or more (but not over 21), the dealer must count the ace as 11 and stand. The dealer's decisions, then, are automatic on all plays, whereas the player always has the option of taking one or more cards.

  //   flipDealerCardUp();
  if (dealerScore === 21 && userScore === 21) {
    console.log("Dealer Total:", dealerScore);
    console.log("It's a push");
    settleGame("tie");
  } else if (dealerScore > 21) {
    console.log("Dealer Total:", dealerScore);
    console.log("You Win!");
    settleGame("win");
  } else if (dealerScore < 17) {
    dealerCards.push(currentlyBeingDealtCard("dealer"));
    dealerScore = computeTotal(dealerCards);
    updateScoreElements();
    console.log("Dealer Total:", dealerScore);
    dealerShowdown();
  } else if (dealerScore > 16) {
    if (dealerScore > userScore) {
      console.log("Dealer Total:", dealerScore);
      console.log("Dealer Wins!");
      settleGame("lose");
    } else if (dealerScore === userScore) {
      console.log("Dealer Total:", dealerScore);
      console.log("It's a push");
      settleGame("tie");
    } else {
      console.log("Dealer Total:", dealerScore);
      console.log("You win!");
      settleGame("win");
    }
  }
}

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

function resetGame() {
  dealerCards.splice(0, dealerCards.length); // reset game
  userCards.splice(0, userCards.length);
  userScore = 0;
  dealerScore = 0;
  wager = 0;
  userHandElement.innerHTML = "";
  dealerHandElement.innerHTML = "";
  outcomeInterface.innerHTML = "";

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
}

function newHand() {
  resetGame();

  initialDeal();
  compareTotals();
}
