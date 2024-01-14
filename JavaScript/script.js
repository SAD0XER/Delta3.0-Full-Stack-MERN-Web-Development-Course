// JS Assignment Question Set (Part 8)

//Question 1
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const square = nums.map((num) => num * num);
console.log("The square of elements of array is ", square);

let sum = square.reduce((acc, cur) => acc + cur, 0);
console.log(`Sum of squares: ${sum}`);

let avg = sum / nums.length;
console.log("The average of array is", avg);

//Question 2
let arr = nums.map((num) => num + 5);
console.log(arr);

//Question 3
let string = ["abhimanyu", "balaram", "chanakya", "drutrashtra", "ekalavya"];

let toUpperCaseWords = string.map((word) => word.toUpperCase());
console.log(toUpperCaseWords);

//Question 4
const doubleAndReturnArgs = (arr, ...args) => [
    ...arr,
    ...args.map((v) => v * 2),
];

doubleAndReturnArgs([1, 2, 3], 4, 4);
console.log(doubleAndReturnArgs(nums, 123));

doubleAndReturnArgs([2], 10, 4);
console.log(doubleAndReturnArgs(nums, 1234));

//Question 5
const obj1 = {
    name: "asdf",
    age: 23
};

const car = {
    model: "chiron",
    price: 12345678910
};

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

console.log(mergeObjects(obj1, car));