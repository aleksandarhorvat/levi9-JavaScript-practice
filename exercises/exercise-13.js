//Write a JavaScript exercise to create a variable using a user-defined name.
var var_name = "newVariable";
var n = 120;
this[var_name] = n;
console.log(this["newVariable"]);
console.log(this[var_name]);