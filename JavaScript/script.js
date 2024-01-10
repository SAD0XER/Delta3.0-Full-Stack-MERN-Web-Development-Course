// JS Assignment Question Set (Part 7)

//Question 1
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arrayAverage = (array) => {
    let avg = 0;
    for (let i = 0; i < array.length; i++) {
        avg += array[i];
    }
    return avg / array.length;
};

console.log(`The Average of given array is ${arrayAverage(array)}`);

//Question 2
const isEven = number => number % 2 == 0;

console.log(isEven(0));
