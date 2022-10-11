"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

function checkNumber() {
  const guess = Number(document.querySelector(".guess").value);
  let message = document.querySelector(".message");

  if (!guess) {
    message.textContent = "❌ No number entered!";
  } else if (guess === secretNumber) {
    message.textContent = "🎉 Correct number!";
    document.querySelector(".number").textContent = secretNumber;
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = "📈 Too high";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = "📉 Too low";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "💣 You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
}

let checkButton = document.querySelector(".check");
checkButton.addEventListener("click", checkNumber);
