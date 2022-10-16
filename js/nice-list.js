//adding list dynamically
let list = document.createElement("ul");
let info = document.createElement("p");
let html = document.querySelector("html");

info.textContent =
  "Below is a dynamic list. Click anywhere on the page to add a new list item. Click an existing list item to change its text to something else.";

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function () {
  let listItem = document.createElement("li");
  let input = prompt("enter the list item");
  listItem.textContent = input;
  list.appendChild(listItem);

  listItem.onclick = function (e) {
    e.stopPropagation();
    let inputEdit = prompt("enter the new list item");
    this.textContent = inputEdit;
  };
};
