//Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.
var string = "w3resource";
console.log(string);
for (let i = 0; i < string.length; i++) {
    var letter = string.charAt(string.length - 1);
    string = letter + string;
    string = string.slice(0, -1);
    console.log(string);
}