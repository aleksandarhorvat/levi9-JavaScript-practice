//Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.
const prompt = require("prompt-sync")();
var userInput;
userInput = prompt("Enter the string: ");
startsWithJava(userInput);

function startsWithJava(string){
    var firstFour = string.substring(0, 4);
    if(firstFour == "Java")
        console.log("String starts with 'Java'");
    else
        console.log("String doesn't starts with 'Java'");
}