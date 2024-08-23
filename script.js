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

const userBoardElement = document.getElementById("user-board");
const userHandOneElement = document.getElementById("user-hand-one");
// const userHandTwoElement = document.getElementById("user-hand-two");
const dealerHandElement = document.getElementById("dealer-hand");
const userScoreElement = document.getElementById("user_score");
const dealerScoreElement = document.getElementById("dealer_score");
const outcomeInterface = document.getElementById("outcome_interface");
const actionInterface = document.getElementById("action-container");
const wagerElement = document.getElementById("wager_amount");
const bankrollElement = document.getElementById("bankroll");

bankrollElement.innerHTML = bankroll;

// it would almost be nice just to have methods directly attached to my hands objects...
const hands = {
  dealerHand: [],
  userHandOne: [],
  userHandTwo: [],
  //   dealerHand: [
  //     { rank: "3", value: 3, suitEmoji: "♡", suit: "hearts" },
  //     { rank: "J", value: 10, suitEmoji: "♤", suit: "spades" },
  //   ],
  //   userHandOne: [
  //     { rank: "5", value: 5, suitEmoji: "♡", suit: "hearts" },
  //     { rank: "5", value: 5, suitEmoji: "♢", suit: "diamonds" },
  //   ],
  //   userHandTwo: [],
};

const userHandOne = hands.userHandOne;
const userHandTwo = hands.userHandTwo; // Will only have a "userHandTwo" after split() -- function for splitting a pair
const dealerHand = hands.dealerHand;
const userCard1 = hands.userHandOne[0];

const score = {
  dealerHand: 0,
  userHandOne: 0,
  userHandTwo: 0,
};

function updateRemainingDeck(card) {
  const cardPositionInDeck = deck.indexOf(card);

  deck.splice(cardPositionInDeck, 1);
}

function dealCard(hand) {
  const randomCard = deck[Math.ceil(Math.random() * deck.length) - 1];
  if (hand === "userHandOne") {
    userHandOne.push(randomCard);
  } else if (hand === "userHandTwo") {
    userHandTwo.push(randomCard);
  } else {
    dealerHand.push(randomCard);
  }
  updateRemainingDeck(randomCard);
  uiUpdateHand(hand, randomCard);
}

function uiUpdateHand(hand, card) {
  const newCard = uiCreateCard(hand, card);

  // Hopefully this can be a simpler hand and card assembly, and I can
  // just pass in arguments from global.
  if (hand === "userHandOne") {
    userHandOneElement.appendChild(newCard);
  } else if (hand === "userHandTwo") {
    userHandTwoElement.appendChild(newCard);
  } else {
    dealerHandElement.appendChild(newCard);
  }
}

function uiCreateCard(hand, card) {
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

  if (hand === "dealerHand" && dealerHand.length === 0) {
    cardElement.classList.add("card-back");
    return cardElement;
  } else {
    cardElement.classList.add("card-face");
    cardElement.appendChild(leftRankElement);
    cardElement.appendChild(suitElement);
    cardElement.appendChild(rightRankElement);
    return cardElement;
  }
}

function uiCreateActionBtns(hand) {
  const hitBtn = document.createElement("button");
  const stayBtn = document.createElement("button");
  const doubleDownBtn = document.createElement("button");
  const splitBtn = document.createElement("button");

  hitBtn.textContent = "Hit";
  stayBtn.textContent = "Stay";
  doubleDownBtn.textContent = "Double Down";
  splitBtn.textContent = "Split";

  hitBtn.id = "hit-btn";
  stayBtn.id = "stay-btn";
  doubleDownBtn.id = "doubledown-btn";
  splitBtn.id = "split-btn";

  doubleDownBtn.disabled = true;
  splitBtn.disabled = true;

  hitBtn.addEventListener("click", () => {
    hitUser(hand);
  });
  stayBtn.addEventListener("click", () => {
    stay(hand);
  });
  doubleDownBtn.addEventListener("click", () => {
    doubleDown(hand);
  });
  splitBtn.addEventListener("click", () => {
    split();
  });

  actionInterface.appendChild(hitBtn);
  actionInterface.appendChild(stayBtn);
  actionInterface.appendChild(doubleDownBtn);
  actionInterface.appendChild(splitBtn);
}

function initialDeal() {
  dealCard("userHandOne");
  dealCard("userHandOne");

  dealCard("dealerHand");
  dealCard("dealerHand");

  updateScore();
  uiUpdateScore();

  uiCreateActionBtns("userHandOne");

  // if (score.userHandOne >= 9 && score.userHandOne <= 11) {
  //   doubleDownBtn.disabled = false;
  // }

  //pair SPLIT hand  logic --- type of thing that should be a function? Performance issues? *****
  const firstCard = userHandOne[0].value;
  const secondCard = userHandOne[1].value;

  if (firstCard !== secondCard) {
    splitBtn.disabled = false;
  }

  if (score.userHandOne === 21 && score.dealer !== 21) {
    console.log("Congrats on BlackJack!");
    settleGame("win", 1.5);
  }
  if (score.userHandOne === 21 && score.dealer === 21) {
    settleGame("tie");
  }
  if (score.userHandOne !== 21 && score.dealer === 21) {
    settleGame("lose");
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

function newHand() {
  dealerHand.splice(0, dealerHand.length); // reset game
  userHandOne.splice(0, userHandOne.length);
  userHandTwo.splice(0, userHandTwo.length);

  wager = 0;
  userHandOneElement.innerHTML = "";
  dealerHandElement.innerHTML = "";
  outcomeInterface.innerHTML = "";
  stayBtn.disabled = false;
  hitBtn.disabled = false;

  deck = deckStart;

  initialDeal();
  // compareTotals();
}

function updateScore() {
  // here's where I need to handle the ace dichotomy
  // doing a lot of identical things twice here but need to to stay sane for now, only handle so much abstraction at once lol

  let numDealerAces = dealerHand.reduce((aceCount, card) => {
    return card.rank === "A" ? aceCount + 1 : aceCount;
  }, 0);
  let numUserHandOneAces = userHandOne.reduce((aceCount, card) => {
    return card.rank === "A" ? aceCount + 1 : aceCount;
  }, 0);
  let numUserHandTwoAces = userHandTwo.reduce((aceCount, card) => {
    return card.rank === "A" ? aceCount + 1 : aceCount;
  }, 0);

  let dealerNonAces = dealerHand.filter((card) => card.type !== "A");
  let userHandOneNonAces = userHandOne.filter((card) => card.type !== "A");
  let userHandTwoNonAces = userHandTwo.filter((card) => card.type !== "A");

  let dealerNonAcesTotal = dealerNonAces.reduce(
    (sum, card) => sum + card.value,
    0
  );
  let userHandOneNonAcesTotal = userHandOneNonAces.reduce(
    (sum, card) => sum + card.value,
    0
  );
  let userHandTwoNonAcesTotal = userHandTwoNonAces.reduce(
    (sum, card) => sum + card.value,
    0
  );

  switch (numDealerAces) {
    case 0:
      score.dealerHand = dealerNonAcesTotal;
      break;
    case 1:
      if (dealerNonAcesTotal <= 10) {
        score.dealerHand = dealerNonAcesTotal + 11;
      } else {
        score.dealerHand = dealerNonAcesTotal + 1;
      }
      break;
    case 2: // 10 1 11
      if (dealerNonAcesTotal <= 9) {
        score.dealerHand = dealerNonAcesTotal + 12;
      } else {
        score.dealerHand = dealerNonAcesTotal + 2;
      }
      break;
    case 3:
      if (dealerNonAcesTotal <= 8) {
        score.dealerHand = dealerNonAcesTotal + 13;
      } else {
        score.dealerHand = dealerNonAcesTotal + 3;
      }
      break;
    case 4:
      if (dealerNonAcesTotal <= 7) {
        score.dealerHand = dealerNonAcesTotal + 14;
      } else {
        score.dealerHand = dealerNonAcesTotal + 4;
      }
      break;
  }

  switch (numUserHandOneAces) {
    case 0:
      score.userHandOne = userHandOneNonAcesTotal;
      break;
    case 1:
      if (userHandOneNonAcesTotal <= 10) {
        score.userHandOne = userHandOneNonAcesTotal + 11;
      } else {
        score.userHandOne = userHandOneNonAcesTotal + 1;
      }
      break;
    case 2: // 10 1 11
      if (userHandOneNonAcesTotal <= 9) {
        score.userHandOne = userHandOneNonAcesTotal + 12;
      } else {
        score.userHandOne = userHandOneNonAcesTotal + 2;
      }
      break;
    case 3:
      if (userHandOneNonAcesTotal <= 8) {
        score.userHandOne = userHandOneNonAcesTotal + 13;
      } else {
        score.userHandOne = userHandOneNonAcesTotal + 3;
      }
      break;
    case 4:
      if (userHandOneNonAcesTotal <= 7) {
        score.userHandOne = userHandOneNonAcesTotal + 14;
      } else {
        score.userHandOne = userHandOneNonAcesTotal + 4;
      }
      break;
  }

  switch (numUserHandTwoAces) {
    case 0:
      score.userHandTwo = userHandTwoNonAcesTotal;
      break;
    case 1:
      if (userHandTwoNonAcesTotal <= 10) {
        score.userHandTwo = userHandTwoNonAcesTotal + 11;
      } else {
        score.userHandTwo = userHandTwoNonAcesTotal + 1;
      }
      break;
    case 2: // 10 1 11
      if (userHandTwoNonAcesTotal <= 9) {
        score.userHandTwo = userHandTwoNonAcesTotal + 12;
      } else {
        score.userHandTwo = userHandTwoNonAcesTotal + 2;
      }
      break;
    case 3:
      if (userHandTwoNonAcesTotal <= 8) {
        score.userHandTwo = userHandTwoNonAcesTotal + 13;
      } else {
        score.userHandTwo = userHandTwoNonAcesTotal + 3;
      }
      break;
    case 4:
      if (userHandTwoNonAcesTotal <= 7) {
        score.userHandTwo = userHandTwoNonAcesTotal + 14;
      } else {
        score.userHandTwo = userHandTwoNonAcesTotal + 4;
      }
      break;
  }
}

function uiUpdateScore() {
  userScoreElement.textContent = score.userHandOne;
  dealerScoreElement.textContent = score.dealerHand;
}

function hitUser(hand) {
  dealCard(hand);
  updateScore();
  console.log(score, "inside hitUser");
  uiUpdateScore();
  if (score.user > 21) {
    settleGame("lose");
  }
  doubleDownBtn.disabled = true;
  splitBtn.disabled = true;
}
function stay() {
  stayBtn.disabled = true;
  hitBtn.disabled = true;
  //   flipDealerCardUp();
  if (score.dealer === 21 && score.user === 21) {
    settleGame("tie");
  } else if (score.dealer > 21) {
    settleGame("win");
  } else if (score.dealer < 17) {
    dealerHand.push(dealCard("dealer"));
    updateScore();
    uiUpdateScore();

    stay();
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
function doubleDown() {
  stayBtn.disabled = true;
  hitBtn.disabled = true;
  doubleDownBtn.disabled = true;
  wagerAmount = wagerAmount + wagerAmount;
  wagerElement.innerHTML = wagerAmount;
  userHandOne.push(dealCard("user"));

  updateScore();
  uiUpdateScore();
  stay(); // "doubling down" in live blackjack implies stay logic by default
}
function split() {
  splitBtn.classList.add("activeChoice");
  userHandTwo.push(userHandOne.splice(1, 1)[0]);

  const userHandTwo = document.createElement("div");
  userHandTwo.id = "user-hand-two";
  const userHandTwoContainer = document.createElement("div");
  userHandTwoContainer.classList.add("card-container");
  // somewhere need to uniquely identify this hand to add cards to
  // this is pretty repetitive from addCardToHandElement ...
  const cardElement = document.createElement("div");
  const suitElement = document.createElement("div");
  const rightRankElement = document.createElement("div");
  // cardElement.classList.add("card-back");
  cardElement.classList.add("card-face");
  cardElement.appendChild(leftRankElement);
  cardElement.appendChild(suitElement);
  cardElement.appendChild(rightRankElement);
  userHandTwoContainer.appendChild(cardElement);
  userBoardElement.appendChild(userHandTwoContainer);
}

function settleGame(outcome, blackjackMultiplier = 1) {
  if (outcome === "lose") {
    bankroll -= wagerAmount;
    uiOutcomeInterface(outcome);
  } else if (outcome === "win") {
    bankroll += wagerAmount * blackjackMultiplier;
    uiOutcomeInterface(outcome);
  } else {
    console.log("breaking Even");
    uiOutcomeInterface(outcome);
  }
  bankrollElement.innerHTML = bankroll;
  console.log(bankroll);
  // disable buttons here, then re-enable on newHand();
  splitBtn.disabled = true;
}

function uiOutcomeInterface(outcome) {
  outcomeInterface.innerHTML = `You ${outcome}`;
}

initialDeal();
