/*Mastermind by Kim Chung*/

alert("Welcome to Mastermind!");
var code = [], colors = ["r", "y", "g", "c", "b", "w"], guess = [], feedback = [], turns = [], mmPrompt = null;
setUp();
while(feedback[3] != "b" && guess[0] != "q"){
    guess = getGuess();
    feedback = analyzeGuess();
    addTurn();
}
if (turns[turn][1][3] == "b"){
    alert("Congrats, you guessed it in "+turns.length+" turns!\nThanks for playing!");
}
else alert("Quitter!");


function setUp(){
    code = [];
    for(var peg = 0; peg < 4; peg++){
        var color = Math.floor(Math.random()*6);
        code[peg] = colors[color];
    }
    alert("The code is: "+code);
    return code;
}

function getGuess(){
    guess = [];
    displayTurns();
    var guessString = prompt(mmPrompt);
    guess = guessString.split(",");
    return guess;
}

function analyzeGuess(){
    var guessedCode = [], goodGuesses = [];
    feedback = [];
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

function addTurn(){
    var turn = [];
    turn.push(guess);
    turn.push(feedback);
    turns.push(turn);
}

function displayTurns(){
    mmPrompt = "";
    for(turn = 0; turn < turns.length; turn++){
        mmPrompt += "Guess "+(turn + 1)+": ";
        mmPrompt += turns[turn][0].join("");
        mmPrompt += " || "+turns[turn][1].join("")+"\n";
    }
    mmPrompt += "\nEnter four colors surrounded by commas:";
    return mmPrompt;
}
