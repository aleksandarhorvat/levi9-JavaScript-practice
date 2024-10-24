const prompt = require("prompt-sync")();

class Calculator{

    constructor(operation, num1, num2){
        this.operation = operation;
        this.num1 = num1;
        this.num2 = num2;
    }

    calulate() {
        switch(operation){
            case "+":
                return num1 + num2;
                break;
            case "-":
                return num1 - num2;
                break;
            case "*":
                return num1 * num2;
                break;
            case "/":
                if(num2 != 0){
                    return num1 / num2;
                }
                else{
                    console.log("You can't divide by 0!");
                    return null;
                }
                break;
            default:
                console.log("Enter the right operation!");
                return null;
                break;
        }
    }

}

var num1 = prompt("Enter 1st number: ")
num1 = parseInt(num1);
var num2 = prompt("Enter 2nd number: ");
num2 = parseInt(num2);
var operation = prompt("Enter one of operations: (+, -, *, /): ");
var calculator = new Calculator(operation, num1, num2);
var result = calculator.calulate();
if(result != null)
    console.log("The result is: " + result);