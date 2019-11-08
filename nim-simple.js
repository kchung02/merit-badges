/* Nim Simple by Kim Chung */

/* Global */
var games = 0;
var again = true;
var next = 0;
var count = 0;
var turns = 0;
var turn = 0;

/* Main */
while (again == true){
	count = 0;
	turns = 0;
	turn = 0;
	next = games%2;
	while (count < 21){
		if (next == 0){
			turn = CPUTurn();
			alert("The computer picked "+turn+".");
			count += turn;
			alert("The count is now "+count+".");
			next = nextSwitch(next);
		}
		else {
			turn = userTurn();
			count += turn;
			alert("The count is now "+count+".");
			next = nextSwitch(next);
		}
	}
	declareWinner();
	games++;
	alert("Games played = "+games);
	again = playAgain();
}

/* Functions */
function CPUTurn(){
	turn = Math.floor(Math.random()*3)+1;
	return turn;
}

function nextSwitch(next){
	if (next == 0){
		next = 1;
		return next;
	}
	else {
		next = 0;
		return next;
	}
}

function userTurn(){
	turn = prompt("Pick a number 1-3");
	if (turn > 0 && turn < 4){
		return Number(turn);
	}
	else alert("Guess is out of range, try again.");
}

function declareWinner(){
	if (next == 0){
		alert("You lose!");
	}
	else alert("You win!");
}

function playAgain(){
	again = prompt("Play again? y = yes");
	if (again == "y"){
		return true;
	}
	else return false;
}
