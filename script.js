const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

const playerMove = document.getElementById("player");
const computerMove = document.getElementById("computer");

const statusEl = document.getElementById("status");
const pScoreEl = document.getElementById("player-score");
const cScoreEl = document.getElementById("computer-score");

const replayBtn = document.getElementById("replay-btn");
const modalPlayerScore = document.getElementById("modal-player-score");
const modalComputerScore = document.getElementById("modal-computer-score");
const modal = document.getElementById("modal");
const modalStat = document.getElementById("modal-status");

let compChoice = "";
let playerChoice = "";

let playerScore = 0;
let compScore = 0;

rockBtn.addEventListener("click", () => {
	playerMove.innerText = "";
	playerMove.style.backgroundImage = "url(./images/light_mode_rock.svg)";
	runGame("rock");
});

paperBtn.addEventListener("click", () => {
	playerMove.innerText = "";
	playerMove.style.backgroundImage = "url(./images/light_mode_paper.svg)";
	runGame("paper");
});

scissorsBtn.addEventListener("click", () => {
	playerMove.innerText = "";
	playerMove.style.backgroundImage = "url(./images/light_mode_scissors.svg)";
	runGame("scissors");
});

replayBtn.addEventListener("click", () => {
	location.reload();
});

function getRandomInt() {
	let randInt = Math.floor(Math.random() * 3) + 1;
	return randInt;
}

function displayComputerMove() {
	let choice = getRandomInt();

	if (choice === 1) {
		computerMove.innerText = "";
		computerMove.style.backgroundImage =
			"url(./images/light_mode_rock.svg)";
		compChoice = "rock";
	} else if (choice === 2) {
		computerMove.innerText = "";
		computerMove.style.backgroundImage =
			"url(./images/light_mode_paper.svg)";
		compChoice = "paper";
	} else if (choice === 3) {
		computerMove.innerText = "";
		computerMove.style.backgroundImage =
			"url(./images/light_mode_scissors.svg)";
		compChoice = "scissors";
	}
}

function displayStatus(playerChoice, compChoice) {
	if (
		(playerChoice === "rock" && compChoice === "scissors") ||
		(playerChoice === "paper" && compChoice === "rock") ||
		(playerChoice === "scissors" && compChoice === "paper")
	) {
		statusEl.innerText = "YOU WON ! 🥳";
		playerScore++;
	} else if (
		(playerChoice === "rock" && compChoice === "paper") ||
		(playerChoice === "paper" && compChoice === "scissors") ||
		(playerChoice === "scissors" && compChoice === "rock")
	) {
		statusEl.innerText = "YOU Lost ! 😔";
		compScore++;
	} else if (playerChoice === compChoice) {
		statusEl.innerText = "It's a tie. 😑";
	}
}

function setScores() {
	pScoreEl.innerText = playerScore;
	cScoreEl.innerText = compScore;
}

function checkScore() {
	if (playerScore >= 5) {
		setTimeout("", 5000);
		modal.style.display = "flex";
		modalStat.innerText = "Congrats, You won ! 😍";
	} else if (compScore >= 5) {
		setTimeout("", 5000);
		modal.style.display = "flex";
		modalStat.innerText = "Oh No, You Lost ! 😭";
	}
}

function runGame(move) {
	displayComputerMove();
	displayStatus(move, compChoice);
	setScores();
	setTimeout(checkScore, 2000);
	modalComputerScore.innerText = compScore;
	modalPlayerScore.innerText = playerScore;
}
