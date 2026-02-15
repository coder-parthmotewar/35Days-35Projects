const symbols = ["🍎","🍌","🍇","🍓","🍉","🍒","🍍","🥝"];
let cards = [...symbols, ...symbols];
let first = null;
let second = null;
let lock = false;
let matchedCount = 0;

const game = document.getElementById("game");
const statusText = document.getElementById("status");

function shuffle() {
  cards.sort(() => 0.5 - Math.random());
}

function createBoard() {
  game.innerHTML = "";
  matchedCount = 0;
  statusText.innerText = "";

  shuffle();
  cards.forEach(symbol => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerText = "❓";

    card.addEventListener("click", () => flipCard(card, symbol));
    game.appendChild(card);
  });
}

function flipCard(card, symbol) {
  if (lock || card.classList.contains("matched") || card === first) return;

  card.innerText = symbol;

  if (!first) {
    first = card;
    return;
  }

  second = card;
  lock = true;

  if (first.innerText === second.innerText) {
    first.classList.add("matched");
    second.classList.add("matched");
    matchedCount += 2;
    resetTurn();

    if (matchedCount === cards.length) {
      statusText.innerText = "🎉 You matched all cards!";
    }
  } else {
    setTimeout(() => {
      first.innerText = "❓";
      second.innerText = "❓";
      resetTurn();
    }, 800);
  }
}

function resetTurn() {
  first = null;
  second = null;
  lock = false;
}

function restartGame() {
  createBoard();
}

createBoard();
