// JS Assignment Question Set (Direct Part 3)

//Question 1
let array = [7, 9, 0, -2], n = 3;
console.log(array.slice(0, n));

//Question 2
console.log(array.slice(-n));

//Question 3
let arr = [1];

if (arr.length == 0) {
    console.log("String is Empty.");
} else {
    console.log("String is NOT Empty.");
}

//Question 4
let charArr = ['a', 'B', 'C'];

if (charArr[0] == charArr[0].toLocaleLowerCase()) {
    console.log("Character of the string is Lowercase.");
} else {
    console.log("Character of the string is NOT Lowercase.");
}

//Question 5
let str = "    as; ldjfd asdf    ";
console.log(str);
console.log(str.trim());

//Question 6
console.log(charArr.includes("A"));
console.log(charArr.includes("B"));

if (charArr.indexOf('C') != -1) {
    console.log("Element Exist!");
} else {
    console.log("Element Doesn't Exist!");
}
