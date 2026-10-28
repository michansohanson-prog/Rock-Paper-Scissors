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
