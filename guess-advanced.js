/* Guess Advanced by Kim Chung */

var games = 0;
var again = true;
var totalTurns = 0;
while (again == true){
	var turns = 0;
	var guess = 0;
	games++;
	var answer = Math.floor(Math.random()*100)+1;
	console.log(answer);
	while (guess != answer){
		guess = prompt("Guess my number (1-100).");
		if (guess == "q"){
			alert("You quit.");
			break;
		}
		else if (validate(guess) == true){
			turns++;
			if (guess < answer){
				alert("Too low!");
			}
			else if (guess > answer){
				alert("Too high!");
			}
			else if (guess == answer){
				alert("You guessed my number in "+turns+" turns.");
				gameStats(turns,totalTurns);
				again = newGame();
			}
		}
		else alert("Invalid guess, try again.");
	}
	if (guess == "q") break;
}

function validate(guess){
	if (guess > 0 && guess < 101){
		return true;
	}
	else {
		return false;
	}
}

function gameStats(turns,totalTurns){
	alert("You guessed it in "+turns+" turns!");
	totalTurns += turns;
	var averageTurns = totalTurns/games;
	averageTurns = alert("You won "+games+" games with an average of "+averageTurns+" turns per game!");
}

function newGame(){
	again = prompt("Play again? y=yes");
	if (again == "y"){
		return true;
	}
	else{
		alert("Thanks for playing!");
		return false;
	}
}
