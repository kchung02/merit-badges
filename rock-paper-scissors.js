/* Rock Paper Scissors Merit Badge by Kim Chung */

var rounds = prompt("Best out of?");
var rPs = ["rock", "paper", "scissors"];
var score = 0;
var pChoice = null;
var cChoice = null;

for (var turn = 1; turn <= rounds; turn++){
	pChoice = userTurn();
	if (pChoice == "q") turn = rounds;
	else cChoice = cpuTurn();
	turnWinner();
}
gameWinner();

function userTurn(){
	pChoice = prompt("Rock, paper, or scissors?");
	return pChoice;
}

function cpuTurn(){
	cChoice = rPs[Math.floor(Math.random()*3)];
	alert("CPU chose "+cChoice);
	return cChoice;
}

function turnWinner(){
	if (pChoice == "rock" && cChoice == "scissors" || pChoice == "paper" && cChoice == "rock" || pChoice == "scissors" && cChoice == "paper"){
		alert("You won round "+turn+"!");
		score++;
	}
	else if (pChoice == "rock" && cChoice == "paper" || pChoice == "paper" && cChoice == "scissors" || pChoice == "scissors" && cChoice == "rock"){
		alert("CPU won round "+turn+"!");
		score--;
	}
	else {
		alert("It's a tie!");
		turn--;
	}
}

function gameWinner(){
	if (score > 0) alert("You won the game!");
	else if (score < 0) alert("CPU won the game!");
	else alert("It's a tied game!");
}
