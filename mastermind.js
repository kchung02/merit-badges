/*Mastermind by Kim Chung*/

main();

function main(){
    alert("Welcome to Mastermind!");
    var code = [];
    var colors = [];
    var guess = [];
    var feedback = [];
    setUp();
    getGuess();
    analyzeGuess();
    alert(guess, feedback);
    alert("Thanks for playing!");
}

function setUp(){
    var peg = 0;
    while(peg > -1 && peg < 4){
        var color = Math.floor(Math.random()*3)+1;
        alert("color is: "+color);
        code[peg] = colors[color];
        peg = 4;
    }
    alert(code);
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
