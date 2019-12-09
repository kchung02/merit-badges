count = userTurn(count);

function userTurn(count){
	var goodTurn = false;
	while (goodTurn == false){
		turn = prompt("Pick a count 1-3.");
		if (turn == 1 || turn == 2 || turn == 3){
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
