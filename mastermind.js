/*Mastermind by Kim Chung*/

console.log("Welcome to Mastermind!");
var code = [], colors = ["r", "y", "g", "c", "b", "w"], guess = [], feedback = [], turn = 0;
setUp();
while(feedback[3] != "b" && guess[0] != "q"){
    turn++;
    feedback = [];
    getGuess();
    analyzeGuess();
    console.log("Turn "+turn, "Your guess was: "+guess, "Feedback: "+feedback);
}
if (feedback[3] == "b"){
    console.log("Congrats, you guessed it in "+turn+" turns! Thanks for playing!");
}
else console.log("Quitter!");


function setUp(){
    for(var peg = 0; peg < 4; peg++){
        var color = Math.floor(Math.random()*5);
        code[peg] = colors[color];
    }
    alert("The code is: "+code);
    return code;
}

function getGuess(){
    var guessString = prompt("Enter four colors for you guess. (separated by commas, no spaces)");
    guess = guessString.split(",");
    return guess;
}

function analyzeGuess(){
    var guessedCode = [];
    var goodGuesses = [];
    for(var i = 0; i < 4; i++){
        if (guess[i] == code[i]){
            feedback.push("b");
            guessedCode.push(i);
            goodGuesses.push(i);
        }
    }
    for(var g = 0; g < 4; g++){
        if (goodGuesses.includes(g) == false){
            for(var c = 0; c < 4; c++){
                if (guessedCode.includes(c) == false){
                    if (guess[g] == code[c]){
                        feedback.push("w");
                        guessedCode.push(c);
                        goodGuesses.push(g);
                        break;
                    }
                }
            }
        }
    }
    return feedback;
}
