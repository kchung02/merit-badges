/* Nim Simple by Kim Chung */

/* Global */
var games = 0;
var again = true;

/* Main */
while (again == true){
	var count = 0;
	var next = games%2;
	while (count < 21){
		if (next == 0){
			turn = cpuTurn();
			alert("The count is now "+count);
			next = nextSwitch(next);
		}
		else {
			turn = userTurn();
			alert("The count is now "+count+".");
			next = nextSwitch(next);
		}
	}
	again = declareWinner();
}

/* Functions */
function cpuTurn(){
    if (count == 19 || count == 20) turn = 1;
    else if (count == 18) turn = Math.floor(Math.random()*2)+1;
    else turn = Math.floor(Math.random()*3)+1;
    alert("CPU counts "+turn+".");
    count += turn;
    return count;
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
	var goodTurn = false;
	while (goodTurn == false){
		turn = prompt("Pick a count 1-3");
		if (turn == 1 || turn == 2 || turn == 3){
			count += Number(turn);
			goodTurn = true;
		}
		else {
			alert("Invalid input, try again.");
			goodTurn = false;
	}
	return count;
}

function declareWinner(){
	if (next == 0) alert("You lose!");
	else alert("You win!");
	games++
	again = prompt("Play again? y = yes");
	if (again == "y"){
		again = true;
		return again;
	}
	else {
		again = false;
		alert("Thanks for playing!");
		return again;
	}
}
