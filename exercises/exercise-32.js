//Write a JavaScript program to find the closest value to 100 from two numerical values
const prompt = require("prompt-sync")();
var x = parseInt(prompt("Enter 1st number: "));
var y = parseInt(prompt("Enter 2nd number: "));

closestTo100(x,y);

function closestTo100(x,y){
    var x1 = Math.abs(100 - x);
    var y1 = Math.abs(100 - y);
    if(x1 < y1)
        console.log("1st one is closer");
    else if(x1 == y1)
        console.log("they are the same");
    else
        console.log("2nd one is closer");
}