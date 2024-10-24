//Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7. 
const prompt = require("prompt-sync")();
var userInput = parseInt(prompt("Enter the number: "));
userInput = isMultipleOf(userInput);

function isMultipleOf(number){
    if(number % 3 == 0 || number % 7 == 0)
        console.log("Number is a multiple of 3 or 7");
    else
        console.log("Number isn't a multiple of 3 or 7");
}