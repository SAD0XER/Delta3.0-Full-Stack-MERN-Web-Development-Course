// Activity: To Do App using DOM.

let input = document.querySelector("#input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", (event) => {
  const item = document.createElement("li");
  item.innerText = input.value;
  item.insertAdjacentHTML("beforeend", "&nbsp;");

  const delItem = document.createElement("button");
  delItem.innerText = "Delete";
  delItem.classList.add("delete");

  ul.appendChild(item);
  item.appendChild(delItem);
  input.value = null;
});

ul.addEventListener("click", (event) => {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
  }
});
