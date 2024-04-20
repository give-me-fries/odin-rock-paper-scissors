function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3 + 1);
  switch (choice) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === "rock") {
    if (computerSelection === "Rock") {
      return "Tie! You both chose rock.";
    } else if (computerSelection === "Paper") {
      return "You lose! Rock loses to paper.";
    } else {
      return "You win! Rock beats scissors.";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "Rock") {
      return "You win! Paper beats rock.";
    } else if (computerSelection === "Paper") {
      return "Tie! You both chose paper.";
    } else {
      return "You lose! Paper loses to scissors.";
    }
  } else {
    if (computerSelection === "Rock") {
      return "You lose! Scissors loses to rock.";
    } else if (computerSelection === "Paper") {
      return "You win! Scissors beats paper.";
    } else {
      return "Tie! You both chose scissors.";
    }
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = null;
    do {
      playerSelection = prompt("Choose rock, paper, or scissors:");
    } while (
      playerSelection.toLowerCase() != "rock" &&
      playerSelection.toLowerCase() != "paper" &&
      playerSelection.toLowerCase() != "scissors"
    );
    console.log(playRound(playerSelection, getComputerChoice()));
  }
}

playGame();
