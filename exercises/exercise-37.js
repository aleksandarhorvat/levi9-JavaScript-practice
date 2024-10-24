//Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string.
//If the string length is less than 3 convert all the characters to upper case
const prompt = require("prompt-sync")();
var userInput = prompt("Enter the string: ");
userInput = produceString(userInput);
console.log("Changed string: " + userInput);

function produceString(string){
    if(string.length < 3)
        return string.toUpperCase();
    return string.substring(0,3).toLowerCase();
}