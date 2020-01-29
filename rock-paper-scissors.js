/* Rock Paper Scissors Merit Badge by Kim Chung */

var rounds = prompt("Best out of?");
var rPs = ["rock", "paper", "scissors"];
var score = 0;

for (var turn = 0; turn < rounds; turn++){
	userTurn();
	if (pChoice == "q") turn = rounds;
	else cpuTurn();
	if (pChoice == cChoice){
		alert("It's a tie!");
		turn--;
	}
	else turnWinner();
}
gameWinner();

function userTurn(){
	let pChoice = prompt("Rock, paper, or scissors?");
	returm pChoice;
}

function cpuTurn(){
	let cChoice = rPs[Math.floor(Math.random()*3)];
	alert("CPU chose "+cChoice);
	return cChoice;
}

function turnWinner(){
	if (pChoice == "rock" && cChoice == "scissors" || pChoice == "paper" && cChoice == "rock" || pChoice == "scissors" && cChoice == "paper"){
		alert("You won round "+turn);
		score++;
	}
	else {
		alert("CPU won round "+turn);
		score--;
	}
}

function gameWinner(){
	if (score > 0) alert("You won the game!");
	else if (score < 0) alert("CPU won the game!");
	else alert("It's a tied game!");
}
