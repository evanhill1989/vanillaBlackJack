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

//NEXT STEP -- Left off working on hitUser. Reset Hand isn't working at all...
// Refactor to handle which userHand as prop for more generic functions...
/* UI functions List:
  -- user blackjack banner
  -- dealer blackjack banner
  -- hide UI 
  -- realistic dealing
      *- setTimeout() for dealing 1 card at a time
      *- animate card from deck to hand

  -- outcome UI
      *- banner for dealer bust
      *- banner for win or lose
      *- fade out completed hand in background
  -- wager UI 

  -- 

*/

const deck = [...deckStart];

let bankroll = 1000;
let wagerAmount = 100;

const outcomeElement = document.getElementById("outcome");
const outcomeMessageElement = document.getElementById("outcome-message");

const userBoardElement = document.getElementById("user-board");
const userHandMainElement = document.getElementById("user-hand");
// const userHandTwoElement = document.getElementById("user-hand-two");
const dealerHandElement = document.getElementById("dealer-hand");
const userScoreElement = document.getElementById("user_score");

const dealerScoreElement = document.getElementById("dealer_score");
const actionInterface = document.getElementById("action-container");
const wagerElement = document.getElementById("wager_amount");

const initialWager = document.getElementById("initial-wager");
const gameBoard = document.getElementById("game-board");

const splitHandElement = document.getElementById("split-hand");

const bankrollElement = document.getElementById("bankroll");
const bankrollTab = document.getElementById("bankroll_tab");

const wagerInput = document.getElementById("wager-input");

const splitBtn = document.getElementById("split-btn");

const hitBtnOne = document.getElementById("hit-btn-handOne");
const stayBtnOne = document.getElementById("stay-btn-handOne");
const doubleBtn = document.getElementById("double-btn");

const hitBtnTwo = document.getElementById("hit-btn-handTwo");
const stayBtnTwo = document.getElementById("stay-btn-handTwo");

wagerInput.addEventListener("", (event) => {
  wagerElement.innerHTML = wagerAmount;
});

bankrollElement.innerHTML = bankroll;
bankrollTab.innerHTML = bankroll;

// Isolate play while "splitting" --

const hands = {
  dealerHand: {
    cards: [],
    isFocus: true,
    score: 0,
  },
  userHandOne: {
    cards: [],
    isFocus: true,
    score: 0,
  },
  userHandTwo: {
    cards: [],
    isFocus: false,
    score: 0,
  },
};

const userHandOne = hands.userHandOne;
const userHandTwo = hands.userHandTwo; // Will only have a "userHandTwo" after split() -- function for splitting a pair
const dealerHand = hands.dealerHand;
const suits = ["♤", "♧", "♢", "♡"];
function dealNewHand(event) {
  if (event) {
    event.preventDefault();
  }

  wagerAmount = event.target[0].value || 100;
  const numWagerAmount = parseInt(wagerAmount);

  uiToggleDisplay(initialWager);
  uiToggleDisplay(gameBoard);
  dealCard(userHandOne, {
    rank: "5",
    value: 5,
    suitEmoji: "♤",
    suit: "spades",
  });
  dealCard(userHandOne, {
    rank: "5",
    value: 5,
    suitEmoji: "♢",
    suit: "diamonds",
  });

  dealCard(dealerHand, {
    rank: "K",
    value: 10,
    suitEmoji: "♧",
    suit: "clubs",
  });
  dealCard(dealerHand, {
    rank: "4",
    value: 4,
    suitEmoji: "♧",
    suit: "clubs",
  });

  uiDealHands();
  updateScore();
  uiUpdateScore();

  checkForBlackjack();
  canSplit();
  canDouble(userHandOne.score);
  // canInsure();
}

function dealCard(hand, staticCardForTesting) {
  const randomCard = deck[Math.ceil(Math.random() * deck.length) - 1];
  if (hand === userHandOne) {
    userHandOne.cards.push(staticCardForTesting || randomCard);
  } else if (hand === userHandTwo) {
    userHandTwo.cards.push(staticCardForTesting || randomCard);
  } else {
    dealerHand.cards.push(staticCardForTesting || randomCard);
  }
  updateRemainingDeck(staticCardForTesting || randomCard);

  return randomCard;
}

function uiDealHands() {
  // will work on realistic deal timing later
  userHandOne.cards.forEach((card) => {
    const newCard = uiCreateCard("userHandOne", card);
    userHandMainElement.appendChild(newCard);
  });

  for (let i = 0; i < dealerHand.cards.length; i++) {
    if (i === 0) {
      const newCard = uiCreateCard("dealerHand", dealerHand.cards[i], true);
      dealerHandElement.appendChild(newCard);
    } else {
      const newCard = uiCreateCard("dealerHand", dealerHand.cards[i], false);
      dealerHandElement.appendChild(newCard);
    }
  }
}

function uiCreateCard(hand, card, isHoleCard) {
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

  // dealerHand.length is never 0 at this point because dealCard() is called before this function. It's called before this function so this function knows which cards it's creating. Maybe dealerHand.length isnt a great way to see if card === hole card ( 1st card ) anyway.

  if (isHoleCard) {
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

function checkForBlackjack() {
  // Want to find a way to handle immediate settling better

  if (userHandOne.score === 21 && dealerHand.score !== 21) {
    settleBlackjack("win");
  }
  if (userHandOne.score === 21 && dealerHand.score === 21) {
    settleBlackjack("push");
  }
  if (userHandOne.score !== 21 && dealerHand.score === 21) {
    settleBlackjack("lose");
  }
}

async function settleBlackjack(outcome) {
  outcome === "win" ? (blackjackMultiplier = 1.5) : (blackjackMultiplier = 1);
  bankrollUpdate(outcome, blackjackMultiplier);

  bankrollElement.innerHTML = bankroll;
  bankrollTab.innerHTML = bankroll;

  await uiOutcome(outcome);
  // we need uiTransitionToWager() to run after uiOutcome finishes
  uiTransitionToWager();
  // UI function for transition between hands view Outcome summary
}

function uiAddCard(hand, card) {
  const newCard = uiCreateCard(hand, card);

  if (hand === "dealerHand") {
    dealerHandElement.appendChild(newCard);
  } else {
    userHandMainElement.appendChild(newCard);
  }
}

function canSplit() {
  if (userHandOne.cards[0].rank === userHandOne.cards[1].rank) {
    uiToggleDisplay(splitBtn);
  }
}

function canDouble(handScore) {
  if (handScore >= 9 && handScore <= 11) {
    // uiToggleDisplay(doubleBtn);
  }
}

function double(hand = userHandOne) {
  wagerAmount = wagerAmount + wagerAmount;
  wagerElement.innerHTML = wagerAmount;
  const newCard = dealCard(hand);
  uiAddCard(hand, newCard);
  uiToggleDisplay(splitBtn);
  updateScore();
  uiUpdateScore();
  stay(hand); // "doubling down" in live blackjack implies stay logic by default
}
function split() {
  userHandTwo.cards.push(userHandOne.cards.splice(1, 1)[0]);

  uiSplitCards(userHandTwo);
  updateScore();
  uiUpdateScore();

  uiToggleDisplay(splitBtn);
}

function uiSplitCards(hand) {
  userHandMainElement.removeChild(userHandMainElement.lastChild);
  switchSplitPreview(hand);
}

function uiCreateSplitCard(card) {
  const newCard = document.createElement("div");
  const rankElement = document.createElement("div");
  rankElement.textContent = card.rank;
  newCard.classList.add("split-card");
  newCard.appendChild(rankElement);
  return newCard;
}

function switchSplitPreview(hand) {
  const newHandArray = [];
  hand.cards.forEach((card) => {
    const newCard = uiCreateSplitCard(card);
    newHandArray.push(newCard);
  });

  splitHandElement.replaceChildren(...newHandArray);
}

function switchFocusHand(hand) {
  // switches TO "hand"
  const newHandArray = []; /* */
  hand.cards.forEach((card) => {
    const newCard = uiCreateCard("userHandOne", card);
    newHandArray.push(newCard);
  });
  userHandMainElement.replaceChildren(...newHandArray);
}

function uiToggleFocusHand() {
  const currentFocus = userHandOne.isFocus ? userHandOne : userHandTwo;
  const currentSplitPreview = userHandOne.isFocus ? userHandTwo : userHandOne;

  switchFocusHand(currentSplitPreview);
  switchSplitPreview(currentFocus);
  toggleFocusHand(); //
}

function toggleFocusHand() {
  if (userHandOne.isFocus) {
    userHandOne.isFocus = false;
    userHandTwo.isFocus = true;
  } else {
    userHandOne.isFocus = true;
    userHandTwo.isFocus = false;
  }

  uiUpdateScore();
}

function uiRemoveCard() {
  // for when split() is called
  // kinda hacky state handling ... but it works
  userHandMainElement.removeChild(userHandMainElement.lastChild);
}

function updateRemainingDeck(card) {
  const cardPositionInDeck = deck.indexOf(card);

  deck.splice(cardPositionInDeck, 1);
}

function updateSingleHandScore(hand) {
  let numAces = hand.cards.reduce((aceCount, card) => {
    return card.rank === "A" ? aceCount + 1 : aceCount;
  }, 0);

  let nonAces = hand.cards.filter((card) => card.rank !== "A");
  let nonAcesTotal = nonAces.reduce((sum, card) => sum + card.value, 0);
  switch (numAces) {
    case 0:
      hand.score = nonAcesTotal;
      break;
    case 1:
      if (nonAcesTotal <= 10) {
        hand.score = nonAcesTotal + 11;
      } else {
        hand.score = nonAcesTotal + 1;
      }
      break;
    case 2: // 10 1 11
      if (nonAcesTotal <= 9) {
        hand.score = nonAcesTotal + 12;
      } else {
        hand.score = nonAcesTotal + 2;
      }
      break;
    case 3:
      if (nonAcesTotal <= 8) {
        hand.score = nonAcesTotal + 13;
      } else {
        hand.score = nonAcesTotal + 3;
      }
      break;
    case 4:
      if (nonAcesTotal <= 7) {
        hand.score = nonAcesTotal + 14;
      } else {
        hand.score = nonAcesTotal + 4;
      }
      break;
  }
}
function updateScore() {
  updateSingleHandScore(dealerHand);
  updateSingleHandScore(userHandOne);
  updateSingleHandScore(userHandTwo);

  if (userHandTwo.cards.length > 0) {
    updateSingleHandScore(userHandTwo);
  }
}

function uiUpdateScore() {
  const focusHandScore = userHandOne.isFocus
    ? userHandOne.score.toString()
    : userHandTwo.score.toString();
  // const newScoreElement = document.createElement("span");
  // newScoreElement.textContent = focusHandScore.toString();

  userScoreElement.replaceChildren(focusHandScore);
  dealerScoreElement.replaceChildren(dealerHand.score.toString());
}

async function hitUser() {
  //!!!! Still Need to handle the case where user busts for instant loss
  // ifffff isn't a split hand
  // but I mean i could still just settle it as an instant loss
  // because even if dealer ends up busting you still lose wager cause you busted first
  const hand = userHandOne.isFocus ? userHandOne : userHandTwo;
  // dealCard(hand);
  const newCard = dealCard(hand);

  // uiToggleDisplay(doubleBtn);
  uiAddCard(hand, newCard);
  updateScore();

  uiUpdateScore();
  // insta loss flow if bust

  if (hand.score > 21 && userHandOne.isFocus) {
    await settleHand(hand);

    if (userHandTwo.cards.length > 0) {
      uiToggleFocusHand();
    }
  } else if (hand.score > 21 && userHandTwo.isFocus) {
    await settleHand(hand);
  }
}

function wasSplit() {
  let split = userHandTwo.cards.length > 0 ? true : false;
  return split;
}

async function stay() {
  const hand = userHandOne.isFocus ? userHandOne : userHandTwo;
  uiUpdateScore(); // only calling this to get dealerScore ui updated in time
  // uiToggleDisplay(splitBtn);
  // uiToggleDisplay(doubleBtn);
  if (wasSplit() && userHandOne.isFocus) {
    uiToggleFocusHand();
  } else if (wasSplit() && userHandTwo.isFocus) {
    dealerAction();

    uiToggleFocusHand();

    await settleHand(userHandOne);

    uiToggleFocusHand();
    settleHand(userHandTwo);
  } else {
    dealerAction();
    settleHand(hand);
  }

  //   flipDealerCardUp();
  // if userHandTwo is active then switch that hand to main UI
}

function flipDealerCardUp() {
  // feels a little klunky. Should probably just be handled by flipping a state or CSS class
  const newElementsArray = [];
  dealerHand.cards.forEach((card) => {
    newElementsArray.push(uiCreateCard("dealerHand", card, false)); // uiCreateCard
  });
  dealerHandElement.replaceChildren(...newElementsArray);
}

function dealerAction() {
  flipDealerCardUp();
  while (dealerHand.score < 17) {
    let newCard = dealCard(dealerHand);
    uiAddCard("dealerHand", newCard);
    updateScore();
    uiUpdateScore();
  }
}

function compareScores(hand, blackjackMultiplier) {
  // hand gets passed through several functions to get here... maybe that's ok- it's not like it's really that trivial to any of the functions that pass it through.

  console.log(hand, "hand in compareScores top");
  const userScore =
    hand === userHandOne ? userHandOne.score : userHandTwo.score;

  if (blackjackMultiplier === 1.5) {
    return "win";
  }
  if (blackjackMultiplier === 0) {
    return "push";
  }

  // where does userScore come from?
  // maybe userScore is behind?

  console.log(userScore, "userScore");
  console.log(userHandOne.score, "userHandOne.score");
  console.log(dealerHand.score, "dealerHand.score");

  if (userScore > 21) {
    return "lose";
  } else if (dealerHand.score > 21) {
    return "win";
  } else if (userScore > dealerHand.score) {
    ("win");
    return "win";
  } else if (userScore < dealerHand.score) {
    return "lose";
  } else if (userScore === dealerHand.score) {
    return "push";
  } else {
    console.error("error in compareScores");
    return "error";
  }
}

async function settleHand(hand, blackjackMultiplier = 1) {
  // Needs work to handle split situation where 2 hands and pause after stay...

  const outcome = compareScores(hand, blackjackMultiplier);
  // do i want the bankroll logic so entwined with UI logic?
  bankrollUpdate(outcome, blackjackMultiplier);

  bankrollElement.innerHTML = bankroll;
  bankrollTab.innerHTML = bankroll;

  if (wasSplit() && userHandOne.isFocus) {
    await uiOutcome(outcome);
    userHandTwo.isFocus = true;
    switchSplitPreview(userHandOne);
    switchFocusHand(userHandTwo);
  } else if (wasSplit() && userHandTwo.isFocus) {
    await uiOutcome(outcome);
    uiTransitionToWager();
  } else {
    await uiOutcome(outcome);
    uiTransitionToWager();
  }
  // we need uiTransitionToWager() to run after uiOutcome finishes

  // UI function for transition between hands view Outcome summary
  // UI function to clear away boards transition
  // UI function to set wager
  // UI function to choose deal new hand
}

function bankrollUpdate(outcome, blackjackMultiplier) {
  if (outcome === "win") {
    bankroll += wagerAmount * blackjackMultiplier;
  } else if (outcome === "lose") {
    bankroll -= wagerAmount;
  } else if (outcome === "push") {
    bankroll = bankroll;
  } else {
    console.error("error in bankrollUpdate");
  }
}

function uiOutcome(outcome) {
  return new Promise((resolve) => {
    // Temporary timed transition UI between current hand and wagering next hand
    uiToggleDisplay(outcomeElement);
    outcomeMessageElement.innerHTML = outcome.toUpperCase();

    setTimeout(() => {
      uiToggleDisplay(outcomeElement);
      resolve(); // Resolve the Promise after the timeout
    }, 3000); // 3-second delay
  });
}
function uiTransitionToWager() {
  // moving from wager view to deal view
  // the UI inside will contain the deal button which will call the dealNewHand function
  uiToggleDisplay(gameBoard);
  uiToggleDisplay(initialWager);
  initialWager.classList.add("initial-wager");
  resetHand();
}

function resetHand(wagerAmount) {
  // This is gross and temporary
  // Really i need to dump const userHandOne

  hands.dealerHand = { cards: [], isFocus: true, score: 0 };
  hands.userHandOne = { cards: [], isFocus: true, score: 0 };
  hands.userHandTwo = { cards: [], isFocus: false, score: 0 };

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
  userHandOne.isFocus = true;
  userHandTwo.isFocus = false;
  dealerHand.isFocus = true;

  deck.splice(0, deck.length);
  deck.push(...deckStart);

  splitHandElement.innerHTML = "";

  userHandMainElement.innerHTML = "";
  dealerHandElement.innerHTML = "";
}

// Utility functions
function uiToggleDisplay(element) {
  if (element.classList.contains("hidden")) {
    element.classList.replace("hidden", "visible");
  } else {
    element.classList.replace("visible", "hidden");
  }
}

// setWager();

// it would almost be nice just to have methods directly attached to my hands objects... but i don't know exactly how to do that
// This is why React -- if changing hands state, just directly changed UI this would all be so much easier
