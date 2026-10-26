// Random number between 1 and 3
function getComputerChoice() {
	return Math.floor(Math.random() * 3) + 1;
}

// HumanChoice
function getHumanChoice() {
	let input = prompt("Rock, Paper, or Scissors?");
	return input.toLowerCase();
}

function playGame() {
	// Declare players scores
	let humanScore = 0;
	let computerScore = 0;

	function playRound(humanChoice, computerChoice) {
		let compNumConv;
		if (computerChoice === 1) {
			compNumConv = "rock";
		} else if (computerChoice === 2) {
			compNumConv = "paper";
		} else if (computerChoice === 3) {
			compNumConv = "scissors";
		}

		console.log(`Player chooses ${humanChoice}`);
		console.log(`Computer chose ${compNumConv}`);

		if (humanChoice === "rock" && computerChoice === 1) {
			console.log("Tie Game");
		} else if (humanChoice === "rock" && computerChoice === 2) {
			console.log("Rock loses");
			computerScore += 1;
		} else if (humanChoice === "rock" && computerChoice === 3) {
			console.log("Rock wins");
			humanScore += 1;
		} else if (humanChoice === "paper" && computerChoice === 1) {
			console.log("Paper wins");
			humanScore += 1;
		} else if (humanChoice === "paper" && computerChoice === 2) {
			console.log("Tie Game");
		} else if (humanChoice === "paper" && computerChoice === 3) {
			console.log("Paper loses");
			computerScore += 1;
		} else if (humanChoice === "scissors" && computerChoice === 1) {
			console.log("Scissors loses");
			computerScore += 1;
		} else if (humanChoice === "scissors" && computerChoice === 2) {
			console.log("Scissors wins");
			humanScore += 1;
		} else if (humanChoice === "scissors" && computerChoice === 3) {
			console.log("Tie game");
		}
	}

	playRound(getHumanChoice(), getComputerChoice());
	console.log(`Player: ${humanScore}`);
	console.log(`Computer: ${computerScore}`);

	playRound(getHumanChoice(), getComputerChoice());
	console.log(`Player: ${humanScore}`);
	console.log(`Computer: ${computerScore}`);

	playRound(getHumanChoice(), getComputerChoice());
	console.log(`Player: ${humanScore}`);
	console.log(`Computer: ${computerScore}`);

	playRound(getHumanChoice(), getComputerChoice());
	console.log(`Player: ${humanScore}`);
	console.log(`Computer: ${computerScore}`);

	playRound(getHumanChoice(), getComputerChoice());
	console.log(`Player: ${humanScore}`);
	console.log(`Computer: ${computerScore}`);

	alert(
		`Game over. Player score: ${humanScore}, Computer score: ${computerScore}`,
	);
	if (humanScore > computerScore) {
		alert("You Win!");
	} else if (humanScore < computerScore) {
		alert("You Lose!");
	} else {
		alert("Tie game");
	}
}

playGame();
