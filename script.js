"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;
let score = 20;

function checkNumber() {
  const guess = Number(document.querySelector(".guess").value);
  let message = document.querySelector(".message");

  if (!guess) {
    message.textContent = "❌ No number entered!";
  } else if (guess === secretNumber) {
    message.textContent = "🎉 Correct number!";
  } else if (guess > secretNumber) {
    message.textContent = "📈 Too high";
    score = score - 1;
    document.querySelector(".score").textContent = score;
  } else if (guess < secretNumber) {
    message.textContent = "📉 Too low";
    score = score - 1;
    document.querySelector(".score").textContent = score;
  }
}

let checkButton = document.querySelector(".check");
checkButton.addEventListener("click", checkNumber);
