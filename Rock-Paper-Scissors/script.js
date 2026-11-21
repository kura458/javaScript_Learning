
const options = ["Rock", "Paper", "Scissors"];

let playerScore = 0;
let computerScore = 0;

// Generate a random computer choice.
function getRandomComputerResult() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

// Check whether the player wins the round.
function hasPlayerWonTheRound(playerChoice, computerChoice) {
  return (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Scissors" && computerChoice === "Paper") ||
    (playerChoice === "Paper" && computerChoice === "Rock")
  );
}

// Calculate the result of a round.
function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  }

  if (userOption === computerResult) {
    return `It's a tie! Both chose ${userOption}`;
  }

  computerScore++;
  return `Computer wins! ${computerResult} beats ${userOption}`;
}

// Select HTML elements.
const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");

const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

// Display round results and check for a winner.
function showResults(userOption) {
  roundResultsMsg.textContent = getRoundResults(userOption);

  playerScoreSpanElement.textContent = playerScore;
  computerScoreSpanElement.textContent = computerScore;

  if (playerScore === 3) {
    winnerMsgElement.textContent = "Player has won the game!";
  } else if (computerScore === 3) {
    winnerMsgElement.textContent = "Computer has won the game!";
  }

  if (playerScore === 3 || computerScore === 3) {
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }
}

// Reset the game.
function resetGame() {
  playerScore = 0;
  computerScore = 0;

  playerScoreSpanElement.textContent = playerScore;
  computerScoreSpanElement.textContent = computerScore;

  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "block";

  winnerMsgElement.textContent = "";
  roundResultsMsg.textContent = "Choose your first move to start!";
}

// Attach click event listeners.
rockBtn.addEventListener("click", () => showResults("Rock"));

paperBtn.addEventListener("click", () => showResults("Paper"));

scissorsBtn.addEventListener("click", () => showResults("Scissors"));

resetGameBtn.addEventListener("click", resetGame);
