// For storing color sequence
let gameSeq = [];
let userSeq = [];

let start = false;
let level = 0;
let highScore = -1;

let colors = ["red", "green", "blue", "yellow"]; // For random color selection.

let h3 = document.querySelector("h3");

document.addEventListener("keydown", (event) => {
  if (start == false) {
    start = true;
    console.log("Game is Started!");

    levelUp();
  }
});

function levelUp() {
  userSeq = [];
  level++;
  h3.innerText = `Level: ${level}`;

  //Choose Random Button
  let randomIdx = Math.floor(Math.random() * 4);
  let randColor = colors[randomIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq); //Printing Color Sequence.
  gameFlash(randBtn);
}

//Blinking Button Functionality
function gameFlash(btn) {
  btn.classList.add("gameFlash");

  setTimeout(() => {
    btn.classList.remove("gameFlash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userFlash");

  setTimeout(() => {
    btn.classList.remove("userFlash");
  }, 250);
}

//What will happen if button is pressed.
function btnPress() {
  let btn = this;
  userFlash(btn);

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkLevel(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

//Checking User Sequence witn Game Sequence.
function checkLevel(idx) {
  if (gameSeq[idx] === userSeq[idx]) {
    if (gameSeq.length == userSeq.length) {
      setTimeout(() => {
        levelUp();
      }, 1000);
    }
  } else {
    hiScore(level);
    h3.innerText = `Game Over!\nYour Score: ${level}\nPress any key to start again.`;
    let body = (document.querySelector("body").style.backgroundColor = "red");
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = "white";
    }, 250);
    reset();
  }
}

function reset() {
  start = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
  highScore = -1;
}

function hiScore(level) {
  if (highScore < level) {
    highScore = level;
  }

  let h2 = document.querySelector("h2");
  h2.innerText = `High Score: ${highScore}`;
}
