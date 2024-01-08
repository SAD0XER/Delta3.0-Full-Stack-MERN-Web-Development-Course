// JS Assignment Question Set (Part 6)

//Question 1
let array = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7], num = 5;

function getLargerElements(array, num) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > num) {
            console.log(array[i]);
        }
    }
}

getLargerElements(array, num);

//Question 2
let str = "abcdabcdefgggh";

function getUniqueStr(str) {
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        let charArr = str[i];
        if (ans.indexOf(charArr) == -1) {
            ans += charArr;
        }
    }
    return ans;
}

console.log(getUniqueStr(str));

//Question 3
let country = ["Australia", "Germany", "United States of America"];

function getLongestStr(array) {
    let longStr = "";
    for (str of array) {
        if (str.length > longStr.length) {
            longStr = str;
        }
    }
    return longStr;
}

console.log(getLongestStr(country));

// Their Approach
/* country = ["Australia", "Germany", "United States of America"];

function longestName(country) {
    let ansIdx = 0;
    for (let i = 0; i < country.length; i++) {
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if (currLen > ansLen) {
            ansIdx = i;
        }
    }
    return country[ansIdx];
}

longestName(country); */

//Question 4
str = "apnacollege";

function getVowelCount(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u") {
            count++;
        }
    }
    return count;
}

console.log(getVowelCount(str));

//Question 5
let start = prompt("Enter the Starting of Range");
let end = prompt("Enter the Ending of Range");

function generateRandomNumber(start, end) {
    return Math.floor((Math.random() * end) + start);
}

console.log(generateRandomNumber(start, end));

// Their Approach
/* start = 100;
end = 200;
function generateRandom(start, end) {
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
} */