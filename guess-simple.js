/* Guess Simple by Kim Chung */

var answer = Math.floor(Math.random()*100)+1;
console.log(answer);
var guess = 0;
while (guess != answer && guess != "q"){
   guess = prompt("Guess my number (1-100).");
   if (guess == "q") alert("You quit.");
   else if (guess < answer) alert("Too low!");
   else if (guess > answer) alert("Too high!");
   else alert("You got it!");
}
