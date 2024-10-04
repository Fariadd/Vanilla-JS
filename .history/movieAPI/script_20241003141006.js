// const apiURL = "https://fakestoreapi.com/products";
// const container = document.querySelector(".container");

// const promice = async () => {
//   try {
//     const res = await fetch(apiURL);
//     if (!res.ok) throw new Error("wrror resp");
//     const data = await res.json();

//     data.forEach((user) => {
//       const div = document.createElement("div");
//       div.classList.add("card");

//       const titleText = document.createElement("h3");
//       titleText.classList.add("title");
//       titleText.textContent = user.title;

//       const img = document.createElement("img");
//       img.classList.add("image");
//       img.src = user.imag

//       div.appendChild(titleText);
//       div.appendChild(img);
//       container.appendChild(div);
//     });
//   } catch (err) {
//     console.log(err.message);
//   }
// };
// promice();

const input = document.querySelector(".input");
const form = document.querySelector(".form");
const cardList = document.querySelector(".card-list");
const filter = document.querySelector("#filter");
const button = document.querySelector("#button");
const updateButton = document.querySelector(".btn");

let isEditMode = false;
let currentEditItem = null;
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
    alert("Please enter a task!");
    return;
  }

  // If we are in edit mode, update the existing item
  if (isEditMode) {
    updateItem(inputValue);
  } else {
    // If not in edit mode, add a new item
    if (existingItem(inputValue)) {
      alert("Item already exists!");
      return;
    }
    createTodo(inputValue);
    addItemToStorage(inputValue);
  }

  // Reset UI after the action
  checkUI();
  input.value = ""; // Clear the input field
});

function createTodo(todoText) {
  const li = document.createElement("li");
  li.textContent = todoText;

  const btn = document.createElement("button");
  btn.textContent = "Remove";
  btn.classList.add("remove-btn");

  const updateBtn = document.createElement("i");
  updateBtn.textContent = "Update";
  updateBtn.classList.add("update");

  li.appendChild(btn);
  li.appendChild(updateBtn);

  // Append the new todo item to the list
  cardList.appendChild(li);

  // Add event listener for the update button
  updateBtn.addEventListener("click", () => setItemToEdit(li, todoText));
}

// Function to set item in edit mode
function setItemToEdit(li, oldText) {
  isEditMode = true;
  currentEditItem = li;

  // Populate input with the current text for editing
  input.value = oldText;

  // Change the Add button to Update button
  updateButton.textContent = "Update";
  updateButton.style.backgroundColor = "green";
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
      const textItem = li.firstChild.textContent.trim();

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
function updateItem(newText) {
  if (currentEditItem) {
    // Update the text content of the current item
    currentEditItem.firstChild.nodeValue = newText;

    // Update local storage
    let itemsFromStorage = getItemFromStorage();
    const oldText = currentEditItem.textContent
      .replace("UpdateRemove", "")
      .trim(); // Get the old text
    const index = itemsFromStorage.indexOf(oldText);
    if (index > -1) {
      itemsFromStorage[index] = newText; // Replace old text with new text
      localStorage.setItem("item", JSON.stringify(itemsFromStorage)); // Update local storage
    }
  }

  // Reset the edit mode
  isEditMode = false;
  currentEditItem = null;

  // Change the button back to Add mode
  updateButton.textContent = "Add";
  updateButton.style.backgroundColor = "";
}

checkUI();
cardList.addEventListener("click", removeItemFromStorage);

filter.addEventListener("input", filterItem);
button.addEventListener("click", clearAllItems);
document.addEventListener("DOMContentLoaded", displayItemFromStorage);
