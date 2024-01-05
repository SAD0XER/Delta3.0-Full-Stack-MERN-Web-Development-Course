// JS Assignment Question Set (Part 4)

//Question 1
let array = [1, 2, 3, 4, 5, 6, 2, 3], number = 2;

for (let i = 0; i < array.length; i++) {
    if (array[i] == number) {
        array.splice(i, 1);
    }
}
console.log(array);

//Question 2
/* My Approach */
number = 287152;
let count = String(number).length;
console.log(`Number of Digits in ${number} is ${count}`);

/* Their Approach */
count = 0;
let copy = number;
while (copy > 0) {
    count++;
    copy = Math.floor(copy / 10);
}
console.log(count);

//Question 3
/* My Approach */
let sum = 0;
let strNum = String(number);
for (let i = 0; i < strNum.length; i++) {
    let digit = parseInt(strNum[i]);
    sum += digit;
}
console.log(`Sum of digits in ${number} is ${sum}`);

/* Their Approach */
sum = 0;
copy = number;
while (copy > 0) {
    digit = copy % 10;
    sum += digit;
    copy = Math.floor(copy / 10);
}
console.log(sum);

//Question 4
let factorial = 1;
number = 7;
for (let i = 1; i <= number; i++) {
    factorial *= i;
}
console.log(`Factorial of ${number} is ${factorial}.`);

//Question 5
let largest = -1;
for (num of array) {
    if (largest < num) {
        largest = num;
    }
}
console.log(`The Largest Number of Array if ${largest}.`);
