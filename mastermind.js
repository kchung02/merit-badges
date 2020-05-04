/*Mastermind by Kim Chung*/

var code = [];
var colors = [];
var guess = [];
var feedback = [];
setUp();
getGuess();
analyzeGuess();
console.log(guess, feedback);


function setUp(){
    var peg = 0;
    while(peg > -1 && peg < 4){
        var color = Math.floor(Math.random()*3)+1;
        code[peg] = colors[color];
    }
    console.log(code);
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
    for(var i = 0; i < 3; i++){
        if (guess[i] == code[i]){
            feedback.push("b");
            guessedCode.push(i);
            goodGuesses.push(i);
        }
    }
    for(var g = 0; g < 3; g++){
        for(var c = 0; c < 3; c++){
            if (goodGuesses.includes(g) == false || guessedCode.includes(c) == false){
                if (guess[g] == code[c]){
                    feedback.push("w");
                    guessedCode.push(c);
                    goodGuesses.push(g);
                }
            }
        }
    }
    return feedback;
}
