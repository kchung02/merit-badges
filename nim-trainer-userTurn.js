var count = 20;
alert("The count is now "+count);
var count = userTurn(count);

function userTurn(count){
	var goodTurn = false;
	while (goodTurn == false){
		turn = prompt("Pick a count 1-3.");
		if (count == 20 && turn == 2 || turn == 3){
			alert("Invalid input, try again.");
			goodTurn = false;
		}
		else if (turn == 1 || turn == 2 || turn == 3){
			count += parseInt(turn);
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
