console.log("Hello World");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const random = Math.floor(Math.random() * 3) + 1;

  if (random === 1) return "rock";
  if (random === 2) return "paper";
  return "scissors";
}

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
  const humanSelection = "rock";
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
  const humanSelection = "paper";
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
});


const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
  const humanSelection = "scissors";
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
});

const playerScore = document.querySelector("#playerScore");
const cpuScore = document.querySelector("#computerScore");
const winner = document.querySelector("#winner");

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    winner.textContent = `Tie! You both chose ${humanChoice}.`;
    return "TIE";
  }

  const playerWins = 
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper");

  if (playerWins) {
    humanScore++;
    winner.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    checkWinner();
    updateScore();
    return "WIN";
  } else {
    computerScore++;
    winner.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    checkWinner();
    updateScore();
    return "LOSE";
  }
}

function updateScore() {
  playerScore.textContent = `PLAYER: ${humanScore}`;
  cpuScore.textContent = `COMPUTER: ${computerScore}`;
}

function checkWinner() {
  if (humanScore === 5) {
    winFunction();
  } else if (computerScore === 5) {
    loseFunction();
  }
}


function winFunction() {
  alert("You win!");
};

function loseFunction() {
  alert("You lose!");
};
