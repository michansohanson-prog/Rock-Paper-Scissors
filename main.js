function getComputerChoice() {
	return Math.floor(Math.random() * 3) + 1;
}

let humanScore = 0;
let computerScore = 0;
const cScore = document.querySelector("#computer");
const pScore = document.querySelector("#playerScore");
const winner = document.querySelector("#winner");

function playRound(humanChoice, computerChoice) {
	if (humanChoice === "rock" && computerChoice === 1) {
		console.log("Rock ties with Rock");
	} else if (humanChoice === "rock" && computerChoice === 2) {
		console.log("Rock loses to Paper...");
		computerScore += 1;
	} else if (humanChoice === "rock" && computerChoice === 3) {
		console.log("Rock beats Scissors!");
		humanScore += 1;
	} else if (humanChoice === "paper" && computerChoice === 1) {
		console.log("Paper beats Rock!");
		humanScore += 1;
	} else if (humanChoice === "paper" && computerChoice === 2) {
		console.log("Paper ties with Paper");
	} else if (humanChoice === "paper" && computerChoice === 3) {
		console.log("Paper loses to Scissors...");
		computerScore += 1;
	} else if (humanChoice === "scissors" && computerChoice === 1) {
		console.log("Scissors loses to Rock...");
		computerScore += 1;
	} else if (humanChoice === "scissors" && computerChoice === 2) {
		console.log("Scissors beats Paper!");
		humanScore += 1;
	} else if (humanChoice === "scissors" && computerChoice === 3) {
		console.log("Scissors ties with Scissors");
	}
	cScore.textContent = computerScore;
	pScore.textContent = humanScore;
	if (humanScore === 5) {
		winner.textContent = "You Win!";
		rock.disabled = true;
		paper.disabled = true;
		scissors.disabled = true;
	}
	if (computerScore === 5) {
		winner.textContent = "You Lose!";
		rock.disabled = true;
		paper.disabled = true;
		scissors.disabled = true;
	}
}
if (humanScore === 5) {
	winner.textContent = "You Win!";
}
if (computerScore === 5) {
	winner.textContent = "You Lose!";
}
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", (e) => {
	playRound("rock", getComputerChoice());
});

paper.addEventListener("click", (e) => {
	playRound("paper", getComputerChoice());
});

scissors.addEventListener("click", (e) => {
	playRound("scissors", getComputerChoice());
});

// function playGame() {
// 	// Declare score variables
// 	let humanScore = 0;
// 	let computerScore = 0;

// 	// Logic for win conditions

// 	// Ask user to humanInput
// 	// Define global variable from result
// 	const humanChoice = getHumanChoice(prompt("Rock, Paper, or Scissors?"));
// 	console.log(`Player chooses ${humanChoice}`);

// 	// Define global variable for computerChoice
// 	const computerChoice = getComputerChoice();

// 	// Display computerChoice in console as Rock, Paper, or Scissors
// 	if (computerChoice === 1) {
// 		console.log("Computer chooses Rock");
// 	} else if (computerChoice === 2) {
// 		console.log("Computer chooses Paper");
// 	} else if (computerChoice === 3) {
// 		console.log("Computer chooses Scissors");
// 	}

// 	playRound(humanChoice, computerChoice);
// 	console.log(`Human = ${humanScore} and Computer = ${computerScore}`);

// 	const humanChoice2 = getHumanChoice(prompt("Rock, Paper, or Scissors?"));
// 	const computerChoice2 = getComputerChoice();

// 	console.log(`Player chooses ${humanChoice2}`);
// 	if (computerChoice2 === 1) {
// 		console.log("Computer chooses Rock");
// 	} else if (computerChoice2 === 2) {
// 		console.log("Computer chooses Paper");
// 	} else if (computerChoice2 === 3) {
// 		console.log("Computer chooses Scissors");
// 	}

// 	playRound(humanChoice2, computerChoice2);

// 	console.log(`Human = ${humanScore} and Computer = ${computerScore}`);
// 	const humanChoice3 = getHumanChoice(prompt("Rock, Paper, or Scissors?"));
// 	const computerChoice3 = getComputerChoice();

// 	console.log(`Player chooses ${humanChoice3}`);
// 	if (computerChoice3 === 1) {
// 		console.log("Computer chooses Rock");
// 	} else if (computerChoice3 === 2) {
// 		console.log("Computer chooses Paper");
// 	} else if (computerChoice3 === 3) {
// 		console.log("Computer chooses Scissors");
// 	}

// 	playRound(humanChoice3, computerChoice3);

// 	console.log(`Human = ${humanScore} and Computer = ${computerScore}`);
// 	const humanChoice4 = getHumanChoice(prompt("Rock, Paper, or Scissors?"));
// 	const computerChoice4 = getComputerChoice();

// 	console.log(`Player chooses ${humanChoice4}`);
// 	if (computerChoice4 === 1) {
// 		console.log("Computer chooses Rock");
// 	} else if (computerChoice4 === 2) {
// 		console.log("Computer chooses Paper");
// 	} else if (computerChoice4 === 3) {
// 		console.log("Computer chooses Scissors");
// 	}

// 	playRound(humanChoice4, computerChoice4);

// 	console.log(`Human = ${humanScore} and Computer = ${computerScore}`);
// 	const humanChoice5 = getHumanChoice(prompt("Rock, Paper, or Scissors?"));
// 	const computerChoice5 = getComputerChoice();

// 	console.log(`Player chooses ${humanChoice5}`);
// 	if (computerChoice5 === 1) {
// 		console.log("Computer chooses Rock");
// 	} else if (computerChoice5 === 2) {
// 		console.log("Computer chooses Paper");
// 	} else if (computerChoice5 === 3) {
// 		console.log("Computer chooses Scissors");
// 	}

// 	playRound(humanChoice5, computerChoice5);

// 	console.log(`Human = ${humanScore} and Computer = ${computerScore}`);
// }
// playGame();
