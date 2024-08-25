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

const deck = [...deckStart];

let bankroll = 1000;
let wagerAmount = 100;

const userBoardElement = document.getElementById("user-board");
const userHandOneElement = document.getElementById("user-hand-one");
const userHandTwoElement = document.getElementById("user-hand-two");
const dealerHandElement = document.getElementById("dealer-hand");
const userScoreElementOne = document.getElementById("user_score-one");
const userScoreElementTwo = document.getElementById("user_score-two");
const dealerScoreElement = document.getElementById("dealer_score");
const outcomeInterface = document.getElementById("outcome_interface");
const actionInterface = document.getElementById("action-container");
const wagerElement = document.getElementById("wager_amount");
const bankrollElement = document.getElementById("bankroll");

const splitBtn = document.getElementById("split-btn");

//NEXT STEP -- Natural blackjack didn't work
const hitBtnOne = document.getElementById("hit-btn-handOne");
const stayBtnOne = document.getElementById("stay-btn-handOne");
const doubleDownBtnOne = document.getElementById("doubledown-btn-handOne");

const hitBtnTwo = document.getElementById("hit-btn-handTwo");
const stayBtnTwo = document.getElementById("stay-btn-handTwo");
const doubleDownBtnTwo = document.getElementById("doubledown-btn-handTwo");

bankrollElement.innerHTML = bankroll;

// Isolate play while "splitting" --

// it would almost be nice just to have methods directly attached to my hands objects... but i don't know exactly how to do that
// This is why React -- if changing hands state, just directly changed UI this would all be so much easier
const hands = {
  dealerHand: {
    cards: [],
    isActive: true,
    score: 0,
  },
  userHandOne: {
    cards: [],
    isActive: true,
    score: 0,
  },
  userHandTwo: {
    cards: [],
    isActive: false,
    score: 0,
  },
};

const userHandOne = hands.userHandOne;
const userHandTwo = hands.userHandTwo; // Will only have a "userHandTwo" after split() -- function for splitting a pair
const dealerHand = hands.dealerHand;

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
    userHandOne.cards.push(randomCard);
  } else if (hand === "userHandTwo") {
    userHandTwo.cards.push(randomCard);
  } else {
    dealerHand.cards.push(randomCard);
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

function initialDeal() {
  dealCard("userHandOne");
  dealCard("userHandOne");

  dealCard("dealerHand");
  dealCard("dealerHand");

  updateScore();
  uiUpdateScore();

  // uiCreateActionBtns("userHandOne");

  if (score.userHandOne === 21 && score.dealerHand !== 21) {
    console.log("Congrats on BlackJack!");
    settleHand(userHandOne, "win", 1.5);
  }
  if (score.userHandOne === 21 && score.dealerHand === 21) {
    settleHand(userHandOne, "tie");
  }
  if (score.userHandOne !== 21 && score.dealerHand === 21) {
    settleHand(userHandOne, "lose");
  }

  // const firstCard = userHandOne[0].value;
  // const secondCard = userHandOne[1].value;

  // if (firstCard !== secondCard) {
  //   splitBtn.disabled = false;
  // }
  if (score.userHandOne >= 9 && score.userHandOne <= 11) {
    doubleDownBtnOne.disabled = false;
  }
}

function newHand() {
  // This is gross and temporary
  // Really i need to dump const userHandOne

  hands.dealerHand = { cards: [], isActive: true, score: 0 };
  hands.userHandOne = { cards: [], isActive: true, score: 0 };
  hands.userHandTwo = { cards: [], isActive: false, score: 0 };

  hands.userHandTwo.score = 0;

  hands.dealerHand.cards.splice(0, dealerHand.length);
  hands.userHandOne.cards.splice(0, userHandOne.length);
  hands.userHandTwo.cards.splice(0, userHandTwo.length);
  hands.dealerHand.score = 0;
  hands.userHandOne.score = 0;
  hands.userHandTwo.score = 0;

  userHandOne.cards = [];
  userHandTwo.cards = [];
  dealerHand.cards = [];
  userHandOne.score = 0;
  userHandTwo.score = 0;
  dealerHand.score = 0;

  deck.splice(0, deck.length);
  deck.push(...deckStart);

  wager = 0;
  userHandOneElement.innerHTML = "";
  dealerHandElement.innerHTML = "";
  outcomeInterface.innerHTML = "";
  stayBtnOne.disabled = false;

  hitBtnOne.disabled = false;

  uiClearHandTwo();
  splitBtn.disabled = false;
  initialDeal();
}

function updateScore() {
  // here's where I need to handle the ace dichotomy
  // doing a lot of identical things twice here but need to to stay sane for now, only handle so much abstraction at once lol

  let numDealerAces = dealerHand.cards.reduce((aceCount, card) => {
    return card.rank === "A" ? aceCount + 1 : aceCount;
  }, 0);
  let numUserHandOneAces = userHandOne.cards.reduce((aceCount, card) => {
    return card.rank === "A" ? aceCount + 1 : aceCount;
  }, 0);
  let numUserHandTwoAces = userHandTwo.cards.reduce((aceCount, card) => {
    return card.rank === "A" ? aceCount + 1 : aceCount;
  }, 0);

  let dealerNonAces = dealerHand.cards.filter((card) => card.rank !== "A");
  let userHandOneNonAces = userHandOne.cards.filter(
    (card) => card.rank !== "A"
  );
  let userHandTwoNonAces = userHandTwo.cards.filter(
    (card) => card.rank !== "A"
  );

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
      dealerHand.score = dealerNonAcesTotal;
      break;
    case 1:
      if (dealerNonAcesTotal <= 10) {
        dealerHand.score = dealerNonAcesTotal + 11;
      } else {
        dealerHand.score = dealerNonAcesTotal + 1;
      }
      break;
    case 2: // 10 1 11
      if (dealerNonAcesTotal <= 9) {
        dealerHand.score = dealerNonAcesTotal + 12;
      } else {
        dealerHand.score = dealerNonAcesTotal + 2;
      }
      break;
    case 3:
      if (dealerNonAcesTotal <= 8) {
        dealerHand.score = dealerNonAcesTotal + 13;
      } else {
        dealerHand.score = dealerNonAcesTotal + 3;
      }
      break;
    case 4:
      if (dealerNonAcesTotal <= 7) {
        dealerHand.score = dealerNonAcesTotal + 14;
      } else {
        dealerHand.score = dealerNonAcesTotal + 4;
      }
      break;
  }

  switch (numUserHandOneAces) {
    case 0:
      userHandOne.score = userHandOneNonAcesTotal;
      break;
    case 1:
      if (userHandOneNonAcesTotal <= 10) {
        userHandOne.score = userHandOneNonAcesTotal + 11;
      } else {
        userHandOne.score = userHandOneNonAcesTotal + 1;
      }
      break;
    case 2: // 10 1 11
      if (userHandOneNonAcesTotal <= 9) {
        userHandOne.score = userHandOneNonAcesTotal + 12;
      } else {
        userHandOne.score = userHandOneNonAcesTotal + 2;
      }
      break;
    case 3:
      if (userHandOneNonAcesTotal <= 8) {
        userHandOne.score = userHandOneNonAcesTotal + 13;
      } else {
        userHandOne.score = userHandOneNonAcesTotal + 3;
      }
      break;
    case 4:
      if (userHandOneNonAcesTotal <= 7) {
        userHandOne.score = userHandOneNonAcesTotal + 14;
      } else {
        userHandOne.score = userHandOneNonAcesTotal + 4;
      }
      break;
  }

  switch (numUserHandTwoAces) {
    case 0:
      userHandTwo.score = userHandTwoNonAcesTotal;
      break;
    case 1:
      if (userHandTwoNonAcesTotal <= 10) {
        userHandTwo.score = userHandTwoNonAcesTotal + 11;
      } else {
        userHandTwo.score = userHandTwoNonAcesTotal + 1;
      }
      break;
    case 2: // 10 1 11
      if (userHandTwoNonAcesTotal <= 9) {
        userHandTwo.score = userHandTwoNonAcesTotal + 12;
      } else {
        userHandTwo.score = userHandTwoNonAcesTotal + 2;
      }
      break;
    case 3:
      if (userHandTwoNonAcesTotal <= 8) {
        userHandTwo.score = userHandTwoNonAcesTotal + 13;
      } else {
        userHandTwo.score = userHandTwoNonAcesTotal + 3;
      }
      break;
    case 4:
      if (userHandTwoNonAcesTotal <= 7) {
        userHandTwo.score = userHandTwoNonAcesTotal + 14;
      } else {
        userHandTwo.score = userHandTwoNonAcesTotal + 4;
      }
      break;
  }
}

function uiUpdateScore() {
  userScoreElementOne.textContent = userHandOne.score;
  userScoreElementTwo.textContent = userHandTwo.score;
  dealerScoreElement.textContent = dealerHand.score;
}
function uiRemoveCard() {
  // for when split() is called
  // kinda hacky state handling ... but it works
  userHandOneElement.removeChild(userHandOneElement.lastChild);
}

function uiClearHandTwo() {
  userHandTwoElement.innerHTML = "";
  // uiUpdateHand("userHandTwo", userHandTwo[0]);
}

function hitUser(hand = "userHandOne") {
  dealCard(hand);
  updateScore();
  console.log(score, "inside hitUser");
  uiUpdateScore();
  if (userHandOne.score > 21) {
    console.log("inside hitUser when busts - you busted, you lose");
    settleHand(hand, "lose");
  }
  doubleDownBtnOne.disabled = true;
  splitBtn.disabled = true;
}

function split() {
  splitBtn.classList.add("activeChoice");
  userHandTwo.cards.push(userHandOne.cards.splice(1, 1)[0]);
  console.log(userHandTwo.cards, "<--userHandTwo in split");
  console.log(userHandOne.cards, "<--userHandOne in split");

  uiRemoveCard();
  uiUpdateHand("userHandTwo", userHandTwo.cards[0]);
  updateScore();
  uiUpdateScore();

  userHandTwo.isActive = true;
  splitBtn.disabled = true;
  hitBtnTwo.disabled = true;
  stayBtnTwo.disabled = true;
  doubleDownBtnTwo.disabled = true;
}
function doubleDown(hand = "userHandOne") {
  if (hand === "userHandOne") {
    stayBtnOne.disabled = true;
    doubleDownBtnOne.disabled = true;
    hitBtnOne.disabled = true;
  } else if (hand === "userHandTwo") {
    stayBtnTwo.disabled = true;
    doubleDownBtnTwo.disabled = true;
    hitBtnTwo.disabled = true;
  }

  wagerAmount = wagerAmount + wagerAmount;
  wagerElement.innerHTML = wagerAmount;
  dealCard(hand);

  updateScore();
  uiUpdateScore();
  stay(hand); // "doubling down" in live blackjack implies stay logic by default
}

function stay(hand) {
  if (!userHandTwo.isActive) {
    settleHand(hand);
  } else {
    // UI shifts to userHandTwo
    // the first if statement is where need to handle hand one staying and waiting for hand two to play out before settling
    if (hand === "userHandOne") {
      stayBtnOne.disabled = true;
      hitBtnOne.disabled = true;
      stayBtnTwo.disabled = false;
      hitBtnTwo.disabled = false;
      // Where we move UI emphasis to userHandTwo and enable buttons for hand two
    } else if (hand === "userHandTwo") {
      stayBtnTwo.disabled = true;
      hitBtnTwo.disabled = true;
      settleHand("userHandOne");
      settleHand("userHandTwo");
      console.log("settleHand at the bottom of stay ran");
    }
  }

  //   flipDealerCardUp();
}

function settleHand(hand = "userHandOne", blackjackMultiplier = 1) {
  const userScore =
    hand === "userHandOne" ? userHandOne.score : userHandTwo.score;

  if (dealerHand.score === 21 && userScore === 21) {
    console.log("breaking Even");
    uiOutcomeInterface("Push");
  } else if (dealerHand.score > 21 && userScore <= 21) {
    bankroll += wagerAmount * blackjackMultiplier;
    uiOutcomeInterface("You Win");
  } else if (dealerHand.score < 17) {
    while (dealerHand.score < 17) {
      dealCard("dealer");
      updateScore();
      uiUpdateScore();
    }
    if (dealerHand.score > 21) {
      bankroll += wagerAmount * blackjackMultiplier;
      uiOutcomeInterface("you win");
    } else if (dealerHand.score > userScore) {
      bankroll -= wagerAmount;
      uiOutcomeInterface("You Lose");
    } else if (dealerHand.score === userScore) {
      console.log("breaking Even");
      uiOutcomeInterface("Push");
    } else {
      bankroll += wagerAmount * blackjackMultiplier;
      uiOutcomeInterface("You Win");
    }
    // settleHand();
  } else if (dealerHand.score >= 17) {
    if (dealerHand.score > userScore) {
      bankroll -= wagerAmount;
    } else if (dealerHand.score === userScore) {
      settleHand(hand, "tie");
    } else {
      bankroll += wagerAmount * blackjackMultiplier;
    }
  }

  bankrollElement.innerHTML = bankroll;
  console.log(bankroll);
  // disable buttons here, then re-enable on newHand();
  splitBtn.disabled = true;

  console.log("settleHand at the bottom of settleHand");
}

function uiOutcomeInterface(outcome) {
  outcomeInterface.innerHTML = `You ${outcome}`;
}

initialDeal();
