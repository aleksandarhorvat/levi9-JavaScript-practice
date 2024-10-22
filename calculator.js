const prompt = require("prompt-sync")();

var operations = ["+", "-", "*", "/"];
var num1 = prompt("Enter 1st number: ")
num1 = parseInt(num1);
var num2 = prompt("Enter 2nd number: ");
num2 = parseInt(num2);
var operation = prompt("Enter one of operations: (+, -, *, /): ");
var result;
switch(operation){
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        if(num2 != 0){
            result = num1 / num2;
        }
        else{
            console.log("You can't divide by 0!");
        }
        break;
    default:
        console.log("Enter the right operation!");
        break;
}
if(result != null)
    console.log("The result is: " + result);