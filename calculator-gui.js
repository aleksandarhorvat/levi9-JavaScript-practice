function calculate() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var operation = document.getElementById("operation").value;
    var result;

    switch (operation) {
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
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "You can't divide by 0!";
            }
            break;
    }

    document.getElementById("result").innerText = "The result is: " + (!isNaN(result) ? result : "");
}