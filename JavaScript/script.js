// JS Assignment Question Set (Direct Part 2)

//Question 1
let num = 234;

if (num % 10 === 0) {
    console.log("Good");
} else {
    console.log("Bad");
}

//Question 2
let name = prompt("Enter Your Name:");
let age = prompt("Enter Your Age:");
alert(`${name} is ${age} year old.`);

//Question 3
let quarter = 1;

switch (quarter) {
    case 1:
        console.log("January, February, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October, November, December");
        break;
    default:
        console.log("There are only 4 Quarters in 1 year!");
}

//Question 4
let str = "Apna College";

if ((str[0] === 'A' || 'a') && (str.length > 5)) {
    console.log(`"${str}" is a Golden String!`);
} else {
    console.log(`"${str}" is NOT a Golden String!`);
}

//Question 5
let num1 = 1;
let num2 = 12;
let num3 = 123;

if (num1 > num2) {
    if (num1 > num3) {
        console.log(num1 + " is greater than both of the other numbers.");
    }
} else if (num2 > num3) {
    console.log(num2 + " is greater than both of the other numbers.");
} else {
    console.log(num3 + " is greater than both of the other numbers.");
}

//Question 6
let number1 = 1, number2 = 12;

if ((num1 % 10) == (num2 % 10)) {
    console.log("Both numbers have the same last digit which is", num1 % 10);
} else {
    console.log("Both numbers don't have the same last digit.");
}