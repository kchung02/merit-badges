/* Nim Simple by Kim Chung */

/* Globals */
var games = 0;
var again = true;

/* Main */
while (again == true){
  var count = 0;
	var next = games%2;
	while (count < 21){
		if (next == 0){
			count = cpuTurn();
			next = nextSwitch();
		}
		else {
			count = userTurn();
			next = nextSwitch();
		}
	}
	again = declareWinner();
}
alert("Thanks for playing!");

/* Functions */
function cpuTurn(count){
    if (count%4 != 0) turn = 4 - count%4;
    else if (count == 20) turn = 1;
    else turn = Math.floor(Math.random()*3)+1;
    alert("CPU counts "+turn);
    count += turn;
    alert("The count is now "+count);
    return count;
}

function nextSwitch(){
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
		turn = prompt("Pick a count 1-3.");
		if (turn == 1 || turn == 2 || turn == 3){
			count += Number(turn);
			goodTurn = true;
		}
		else {
			alert("Invalid input, try again.");
			goodTurn = false;
		}
	}
	alert("The count is now "+count);
	return count;
}

function declareWinner(){
	if (next == 0) alert("You lose!");
	else alert("You win!");
	games++
	again = confirm("Play again?");
	return again;
}
