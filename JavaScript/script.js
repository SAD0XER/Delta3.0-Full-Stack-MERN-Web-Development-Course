// let btn = document.querySelector('button');
let btn = document.querySelectorAll('button');
// console.dir(btn);

// btn.onclick = function() {
//     console.log("Button Clicked!");
//     alert("Alert: Button Clicked!");
// }

function sayHello() {
    alert("Hello!");
    console.log("Button Clicked!");
}

// btn.onclick = sayHello;

for (btns of btn) {
    // btns.onclick = () => { alert("Button Clicked!"); }
    // btns.onclick = () => { alert("Button Clicked!1"); }
    // btns.onmouseenter = () => { console.log("Mouse Entered!"); }
    // btns.onmouseleave = () => { console.log("Mouse Leaved!"); }

    btns.addEventListener("click", sayHello);
    // btns.addEventListener("dblclick", () => { console.log("Double Cliked!"); });
    btns.addEventListener("mouseenter", () => { console.log("Mouse Entered!"); });
    btns.addEventListener("mouseleave", () => { console.log("Mouse Leaved!"); });
}