// JS Assignment Question Set (Part 9)

// Question 1
// let body = document.querySelector('body');
let input = document.createElement("input");
let btn = document.createElement("button");
btn.innerText = "Submit!";
document.querySelector("body").append(input);
document.querySelector("body").append(btn);
input.setAttribute("type", "text");
input.setAttribute("id", "io");
input.setAttribute("name", "IO");

// Question 2
input.setAttribute("placeholder", "username");
btn.setAttribute("id", "btn");

// Question 3
btn = document.querySelector("#btn");
btn.classList.add("btnStyle");

// Question 4
let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOM Practice</u>";
document.querySelector("body").append(h1);
h1.style.color = "purple";

// Question 5
let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector("body").append(p);
