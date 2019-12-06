// Test function cpuTurn

// Manually input a current count
// Display current count returned by cpuTurn
var count = parseInt(prompt("Pick a count."));
alert("The count is now "+count);
var turn = cpuTurn(count)
// Define function cpuTurn, taking count as parameter
function cpuTurn(count){
    if (count%4 != 0) turn = 4 - count%4;
    else if (count == 20) turn = 1;
    else turn = Math.floor(Math.random()*3)+1;
    alert("CPU counts "+turn);
    count += turn;
    alert("The count is now "+count);
    return count;
}
// Calculate CPU Turn when count is NOT a multiple of 4.  Use Mod (%)
// Otherwise, if count is 20, CPU should count 1
// Otherwise, CPU should give a random turn 1-3.
// Alert what CPU counts
// Add turn to count
// return count
