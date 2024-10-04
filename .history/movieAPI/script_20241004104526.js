const input = document.querySelector(".input");
const form = document.querySelector(".form");
const cardList = document.querySelector(".card-list");
const filter = document.querySelector("#filter");
const button = document.querySelector("#button");
const updateButton = document.querySelector(".btn");

function displayItemFromStorage() {
  let itemFromStorage = getItemFromStorage();
  itemFromStorage.forEach((item) => {
    createTodo(item); // Reuse the createTodo function to display each item
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputValue = input.value.trim();
  if (inputValue === "") {
    alert("add a todo");
    return;
  }

  if (existingItem(inputValue)) {
    alert("Item already exists!");
    return;
  }
  createTodo(inputValue);
  addItemToStorage(inputValue);
  checkUI();

  input.value = "";
});

function createTodo(todoText) {
  const li = document.createElement("li");
  li.textContent = todoText;

  const btn = document.createElement("button");
  btn.textContent = "Remove";
  btn.classList.add("remove-btn");

  const updateBtn = document.createElement("i");
  updateBtn.textContent = "Update";
  updateBtn.classList.add("update-btn");

  li.appendChild(btn);
  li.appendChild(updateBtn);

  updateBtn.addEventListener("click", () => setItemToEdit(li));
  // Append the new todo item to the list
  cardList.appendChild(li);
}
let currentEditItem = null; // To track the item being edited
const originalButtonText = "Add Item"; // Store the default button text
const originalButtonColor = "#007bff";

function setItemToEdit(li) {
  currentEditItem = li; // track the item begin edited
  input.value = li.firstChild.textContent.trim();
  updateButton.textContent = "Update Item";
  updateButton.style.backgroundColor = "green";
}
function updateItem(newtext) {
  if (currentEditItem) {
    const oldText = currentEditItem.firstChild.textContent.trim();

    // update the ui
    currentEditItem.firstChild.nodeValue = newtext;

    let itemFromStorage = getItemFromStorage();
    const index = itemFromStorage.indexOf(oldText);
    if (index > -1) {
      itemFromStorage[index] = newText; // Replace the old text with new text
      localStorage.setItem("item", JSON.stringify(itemFromStorage));
    }
  }
  // reset the form
  checkUI();
}

function checkUI() {
  const liLists = cardList.querySelectorAll("li");
  if (liLists.length === 0) {
    filter.style.display = "none";
    button.style.display = "none";
  } else {
    filter.style.display = "block";
    button.style.display = "block";
  }
  updateButton.style.backgroundColor = " black";
}
function addItemToStorage(newItem) {
  let itemFromStorage = getItemFromStorage();
  itemFromStorage.push(newItem);
  localStorage.setItem("item", JSON.stringify(itemFromStorage));
}

function getItemFromStorage() {
  let itemFromStorage;
  if (localStorage.getItem("item") === null) {
    itemFromStorage = [];
  } else {
    itemFromStorage = JSON.parse(localStorage.getItem("item"));
  }
  return itemFromStorage;
}

function removeItemFromStorage(event) {
  if (event.target.classList.contains("remove-btn"))
    if (confirm("Delete")) {
      const li = event.target.parentElement;
      const textItem = li.textContent.replace("Remove", "");
      li.remove(); // remove from ui

      // update local storage
      let itemsFromStorage = getItemFromStorage();
      itemsFromStorage = itemsFromStorage.filter((item) => item !== textItem);
      localStorage.setItem("item", JSON.stringify(itemsFromStorage));
    }
  checkUI();
}

function existingItem(item) {
  let itemFromStorage = getItemFromStorage();
  return itemFromStorage.includes(item);
}

function filterItem(e) {
  const liLists = cardList.querySelectorAll("li");
  const event = e.target.value.toLowerCase();

  liLists.forEach((item) => {
    const text = item.textContent.toLowerCase();
    text.includes(event)
      ? (item.style.display = "flex")
      : (item.style.display = "none");
  });
}

function checkUI() {
  const liLists = cardList.querySelectorAll("li");
  if (liLists.length === 0) {
    filter.style.display = "none";
    button.style.display = "none";
  } else {
    filter.style.display = "block";
    button.style.display = "block";
  }

  updateButton.innerHTML = "<i>Add</i>";

  isEidtMode = false;
}
function clearAllItems(e) {
  const liItems = cardList.querySelectorAll("li");

  if (liItems.length === 0) {
    console.log("do nothing");
  } else {
    cardList.innerHTML = "";
    localStorage.removeItem("item");
  }
  checkUI();
}

checkUI();
cardList.addEventListener("click", removeItemFromStorage);

filter.addEventListener("input", filterItem);
button.addEventListener("click", clearAllItems);
document.addEventListener("DOMContentLoaded", displayItemFromStorage);
