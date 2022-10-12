"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let message = document.querySelector(".message");
let highscore = 0;

function checkNumber() {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    message.textContent = "❌ No number entered!";
  } else if (guess === secretNumber) {
    message.textContent = "🎉 Correct number!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#acc6aa";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      message.textContent = guess > secretNumber ? "📈 Too high" : "📉 Too low";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
}
const checkButton = document.querySelector(".check");
checkButton.addEventListener("click", checkNumber);

function playAgain() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = "🤯Start guessing...";
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
}
document.querySelector(".again").addEventListener("click", playAgain);

// highscore implementation required
