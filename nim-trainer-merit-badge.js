/* Nim Trainer by Kim Chung */

/* Initialize Globals */
var again = true;
var games = 0;
var gameType = null;

/* Main */
alert("Welcome to Nim Trainer!");
while (again == true){
	var count = 0;
	var turn = 0;
	var next = games%2;
	gameType = pickGame();
	while (count < 21){
		if (next == 0) {
			if (gameType == "simple") count = cpuTurn(count);
			else count = cpuTrainer(count);
		}
		else count = userTurn(count);
		next = nextSwitch(next);
	}
	again = declareWinner(again);
}
alert("Thanks for playing!");

/* Functions */

/* Pick Game -- decide whether you want to play nim simple or nim trainer */
function pickGame(){
	gameType = prompt("Would you like to play simple or trainer?");
	return gameType;
}

/* CPU Turn -- random turn but doesn't purposely lose or go over 21 */
function cpuTurn(count){
	let goodTurn = false;
	let turn=0;
	while (goodTurn == false) {
		turn = Math.floor(Math.random()*3)+1;
		if (turn == 1 || turn > 1 && count+turn < 21) goodTurn = true;
	}
	alert("CPU counts "+turn);
	count += turn;
	alert("The count is now "+count);
	return count;
}

/* CPU Trainer -- calculated turn and doesn't purposely lose or go over 21 */
function cpuTrainer(count){
	if (count%4 == 0){
		if (count == 20) turn = 1;
		else turn = Math.floor(Math.random()*3)+1;
	}
	else turn = 4 - (count%4);
	alert("CPU counts "+turn);
	count += turn;
	alert("The count is now "+count);
	return count;
}

/* User Turn: prevents entering invalid turns */
function userTurn(count){
	let goodTurn = false;
	while (goodTurn == false){
		turn = prompt("Count 1, 2, or 3");
		if (turn == 1 || turn == 2 || turn == 3){
			goodTurn = true;
		}
		else {
			alert("Invalid input, try again.");
			goodTurn = false;
		}
	}
	count += parseInt(turn);
	alert("The count is now "+count);
	return count;
}

/* Next Switch: changes turns */
function nextSwitch(next){
	if (next == 0) next = 1;
	else next = 0;
	return next;
}

/* Declare Winner: Specifies winner value and asks for play again input */
function declareWinner(again){
	if (next == 0) alert("You Lose!");
	else alert("You Win!");
	games++;
	again = confirm("Play again?");
	return again;
}
