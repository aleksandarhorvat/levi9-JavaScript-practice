//Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.
const prompt = require("prompt-sync")();
var userInput;
userString = prompt("Enter the string: ");
userChar = prompt("Enter the char: ");
containsChar(userString, userChar);

function containsChar(string, char) {
    var sub = string.substring(2, 3);
    if(char == sub)
        console.log("It exist");
    else
        console.log("It doesn't exist");
}