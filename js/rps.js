console.log("Hello World");

function getComputerChoice() {

  //random number (1, 3)
  let random = Math.floor(Math.random() * 3) + 1;

  let choice = ""
  
  if (random === 1) {
    choice = "rock"
  } else if (random === 2) {
    choice = "paper"
  } else if (random === 3) {
    choice = "scissors"
  } else {
    console.log("Out of bounds");
  }
  return choice
}

function getHumanChoice() {
  let answer = prompt("Rock, Paper, or Scissors?");

  let playerChoice = ""

  if (answer === "rock") {
    playerChoice = "rock"
  } else if (answer === "paper") {
    playerChoice = "paper"
  } else if (answer === "scissors") {
    playerChoice = "scissors"
  } else {
    console.log("Out of bounds!");
  }

  return playerChoice
}


console.log(getComputerChoice())

console.log(getHumanChoice())