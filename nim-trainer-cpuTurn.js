var count = parseInt(prompt("Pick a count."));
alert("The count is now "+count);
var turn = cpuTrainer(count)

function cpuTrainer(count){
    if (count%4 != 0) turn = 4 - count%4;
    else if (count == 20) turn = 1;
    else turn = Math.floor(Math.random()*3)+1;
    alert("CPU counts "+turn);
    count += turn;
    alert("The count is now "+count);
    return count;
}
