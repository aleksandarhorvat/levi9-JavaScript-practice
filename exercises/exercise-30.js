//Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string.
//If "Script" appears in the string, return the string without "Script" otherwise return the original one. 
const prompt = require("prompt-sync")();
var userInput;
userInput = prompt("Enter the string: ");
containsScript(userInput);

function containsScript(string) {
    var script = string.substring(4, 10);
    if(script == "Script")
        console.log("String 'Script' appears at the 5th (index 4) position");
    else
        console.log("String 'Script' doesn't appears at the 5th (index 4) position");
}