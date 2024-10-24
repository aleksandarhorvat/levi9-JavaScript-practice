//Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters.
//The string length must be broader than or equal to 1.
const prompt = require("prompt-sync")();
var userInput;
do{
    userInput = prompt("Enter the string: ");
}while(userInput.length < 1);
userInput = changeLastAndFirstChar(userInput);
console.log("Changed string: " + userInput);


function changeLastAndFirstChar(string){
    var lastChar = string.charAt(string.length - 1);
    string = string.substring(0, string.length - 1); // remove last char
    var firstChar = string.charAt(0);
    string = string.substring(1); // remove 1st char
    return lastChar + string + firstChar;
}