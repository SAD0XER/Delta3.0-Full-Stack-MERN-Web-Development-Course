let max = prompt("Enter the MAX Number:");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the Number");

while (true) {
    if (guess == "quit") {
        console.log("User Quit!");
        alert("You Quit!");
        break;
    }

    if (guess == random) {
        console.log(`User Guessed right! The random number is ${random}.`);
        alert(`Congratulations!\n\nYou Guessed Right. The Random Number was ${random}.`);
        break;
    } else if (guess < random) {
        guess = prompt(`Hint: Your guessed is too Small.\n\nPlease try again!`);
    } else {
        guess = prompt(`Hint: Your guessed is too Big.\n\nPlease try again!`);
    }
}