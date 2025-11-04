console.log("Hello World");

function getComputerChoice() {

  //random number (1, 3)
  let random = Math.floor(Math.random() * 3) + 1;

  if (random === 1) {
    return "rock";
    console.log("COMPUTER: ROCK");
  } else if (random === 2) {
    return "paper";
    console.log("COMPUTER: PAPER");
  } else if (random === 3) {
    return "scissors";
    console.log("COMPUTER: SCISSORS");
  } else {
    console.log("Out of bounds");
  }
}

function getHumanChoice() {
  //allows for case-insensitive
  let answer = prompt("Rock, Paper, or Scissors?").toLowerCase();

  return answer;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "TIE";
    console.log("TIE")
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`WIN! PLAYER->${humanChoice} CPU->${computerChoice}`);
    return "WIN";
  } else {
    console.log(`LOSE! CPU->${computerChoice} PLAYER->${humanChoice}`);
    return "LOSE";
  }
}

function playGame(human, computer) {
  const MAX_ROUNDS = 5;
  
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i <= MAX_ROUNDS; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);

    if (result === "WIN") {
      humanScore++;
    } else if (result === "LOSE") {
      computerScore++;
    }
  }

  console.log("\nFinal Scores:");
  console.log(`You: ${humanScore} | Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (humanScore < computerScore) {
    console.log("You lost the game!");
  } else {
    console.log("It's a tie overall!");
  }
}

playGame();

