/* Guess Validate Function by Kim Chung */

var answer = Math.floor(Math.random()*100)+1;
console.log(answer);
var guess = 0;
var tries = 0;
while (guess != answer){
	guess = prompt("Guess my number (1-100).");
	if (guess == "q"){
		alert("You quit.");
		break;
	}
	else if (validate(guess) == true){
		tries++;
		if (guess < answer){
			alert("Too low!");
		}
		else if (guess > answer){
			alert("Too high!");
		}
		else alert("You got it in "+tries+" tries!");
	}
	else alert("Invalid guess, try again.");
}

function validate(guess){
	if (guess > 0 && guess < 101){
		return true;
	}
	else return false;
}
