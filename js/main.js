
let nameInput = document.querySelector("#name-input");
let generateButton = document.querySelector("#add-btn");
let tagSection = document.querySelector(".content");
const clearButton = document.getElementById('clear-button');

generateButton.addEventListener("click", generateName);
clearButton.addEventListener('click', clearAll);

function generateName(event) {
  event.preventDefault();
  if (nameInput.value === "") {
    return;
  } else {
    let card = document.createElement("div");
    card.className = "card";
    tagSection.appendChild(card);

    let close = document.createElement("i");
    close.classList.add("fa-solid", "fa-xmark");
    card.appendChild(close);
    close.addEventListener("click", removeCard);

    let hello = document.createElement("h3");
    hello.textContent = "Hello";
    card.appendChild(hello);

    let para = document.createElement("p");
    para.textContent = "My Name Is";
    card.appendChild(para);

    let nameTage = document.createElement("h2");
    nameTage.textContent = nameInput.value;
    card.appendChild(nameTage);
  }
  nameInput.value = "";
  nameInput.focus();
}

function removeCard(event) {
  event.target.parentElement.remove();
}
function clearAll() {
  while (tagSection.firstChild) {
    tagSection.removeChild(tagSection.firstChild);
  }
}