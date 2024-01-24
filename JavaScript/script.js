// JS Assignment Question Set (Part 9)

//Question 1
let textarea = document.querySelector("#textarea");
textarea.addEventListener("mouseout", function (e) {
  console.log("mouse out event triggered.");
});
textarea.addEventListener("keypress", function (e) {
  console.log("key pressed.");
});
textarea.addEventListener("keydown", function (e) {
  console.log("keydown.");
});
textarea.addEventListener("beforeinput", function (e) {
  console.log("before input.");
});

let div = document.querySelector("div");
div.addEventListener("scroll", (event) => {
  console.log("Waiting on scroll events...");
});

window.addEventListener("load", (event) => {
  console.log("Load event is triggered.");
});

//Question 2
let btn = document.createElement("button");
btn.innerHTML = "Button";
document.body.appendChild(btn);
btn.addEventListener("click", () => {
  btn.style.backgroundColor = "green";
});

//Question 3
const input = document.getElementById("input");
const h2 = document.querySelector("h2");

input.addEventListener("input", (event) => {
  const validCharacters = /^[A-Za-z ]*$/;
  let inputValue = input.value;
  
  if (validCharacters.test(inputValue)) {
    h2.innerText = inputValue;
  } else {
    // Remove last character if it's invalid
    input.value = inputValue.slice(0, -1);
  }
});
