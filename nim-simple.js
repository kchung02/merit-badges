/* Nim Simple by Kim Chung */

/* Global */
var games = 0;
var again = true;

/* Main */
while (again == true){
	var count = 0;
	var turns = 0;
	var next = games%2;
	while (count < 21){
		if (next == 0){
			var turn = CPUTurn(turn);
			count += turn;
			alert("The count is now "+count+".");
			next = nextSwitch(next);
		}
		else {
			turn = userTurn(turn);
			count += turn;
			alert("The count is now "+count+".");
			next = nextSwitch(next);
		}
	}
	declareWinner();
	games++;
	again = playAgain(again);
}

/* Functions */
function CPUTurn(turn){
	turn = Math.floor(Math.random()*3)+1;
	return turn;
}

function userTurn(turn){
	turn = prompt("Pick a number 1-3");
	if (turn > 0 && turn < 4){
		return Number(turn);
	}
	else alert("Guess is out of range, try again.");
}

function playAgain(again){
	again = prompt("Play again? y = yes");
	if (again = "y"){
		return true;
	}
	else return false;
}

function declareWinner(){
	if (next == 0){
		alert("You lose!");
	}
	else alert("You win!");
}

function nextSwitch(next){
	if (next == 0){
		next = 1;
		return next;
	}
	else {
		return next;
	}
}
