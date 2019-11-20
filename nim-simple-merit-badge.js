//Nim Simple by Kim Chung (unfinished)//

var games = 0
var again = true;
while (again == true){
	var count = 0;
	var turn = 0;
	var next = games%2;
	//while (count < 21){
		if (next == 0){
			count = cpuTurn();
			alert("The count is now "+count);
			//next = nextSwitch();
		}
		else {
			//count = userTurn();
			alert("The count is now "+count);
			//next = nextSwitch();
		}
	//}
	//again = declareWinner();
}

function cpuTurn(){
	turn = Math.floor(Math.random()*3)+1;
	while (turn > 1){
		if (count+turn < 21){
			alert("CPU counted "+turn);
			count += turn;
			return count;
		}
		else {
			alert("CPU counted "+turn);
			count += turn;
			return turn;
		}
	}
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

function userTurn(){
	turn = prompt("Enter 1, 2, or 3.");
	while (turn == 1 || turn == 2 || turn == 3){
		count += turn;
		return count;
	}
	alert("Invalid input, try again.");
}

function declareWinner(){
	if (next == 0){
		alert("You lose!");
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
	else {
		alert("You win!");
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
