//Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number.
//The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".
const prompt = require("prompt-sync")();
var num = Math.floor(Math.random()*10) + 1;
var numUser = prompt("Guess the number from 1 to 10: ");
numUser = parseInt(numUser);
if(num == numUser)
    console.log("Good Work");
else
    console.log("Not matched, the number was: " + num);