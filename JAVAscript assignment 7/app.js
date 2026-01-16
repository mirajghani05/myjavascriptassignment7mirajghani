var num1 = prompt("Enter a positive number:");

console.log("Number:" + num1)
console.log("round of value"+ Math.round(num1));
console.log("floor value"+ Math.floor(num1));
console.log("ceil value"+ Math.ceil(num1));

// chapter 2 assignment 7
var num2 = + prompt("enter a negative number flooting point number ");

console.log("number"+ num2);
console.log("Round of value " + Math.round(num2));
console.log("floor value "+ Math.floor(num2));
console.log("ceil value"+ Math.ceil(num2));
// chapter 3 assignmenmt 7
let num1 = -4;
let num2 = 5;

document.write("Absolute value of " + num1 + " is " + Math.abs(num1) + "<br>");
document.write("Absolute value of " + num2 + " is " + Math.abs(num2) + "<br>");
// ch 4
// Dice values range from 1 to 6
let dice = Math.floor(Math.random() * 6) + 1;
document.write("Dice value: " + dice);
// chap 5
// Coin toss: 0 = Heads, 1 = Tails
let coin = Math.floor(Math.random() * 2);
if (coin === 0) {
    document.write("Coin Toss Result: Heads");
} else {
    document.write("Coin Toss Result: Tails");
}
// chap6 
let randomNum = Math.floor(Math.random() * 100) + 1;
document.write("Random number between 1 and 100: " + randomNum);
// Chap 7
let userInput = prompt("Enter your weight:");
let weight = parseFloat(userInput); // Extracts numeric value
document.write("Your weight is: " + weight + " kilograms");