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

let isEditMode = false; // Track whether we are in edit mode
let currentEditItem; // Store the item currently being edited

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

  if (existingItem(inputValue) && !isEditMode) {
    alert("Item already exists!");
    return;
  }

  if (isEditMode) {
    // Update existing item
    updateItem(inputValue);
  } else {
    createTodo(inputValue);
    addItemToStorage(inputValue);
  }

  checkUI();
  input.value = "";
});

function createTodo(todoText) {
  const li = document.createElement("li");
  li.textContent = todoText;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("remove-btn");

  const updateBtn = document.createElement("i");
  updateBtn.textContent = "Update";
  updateBtn.classList.add("update");

  li.appendChild(removeBtn);
  li.appendChild(updateBtn);

  // Allow clicking the update button to set the item to edit
  updateBtn.addEventListener("click", () => setItemToEdit(todoText, li));

  // Append the new todo item to the list
  cardList.appendChild(li);
}

function setItemToEdit(todoText, li) {
  input.value = todoText;
  isEditMode = true; // Set edit mode to true
  currentEditItem = li; // Store the current item to be edited
  updateButton.style.backgroundColor = "green"; // Change button color to green
  updateButton.textContent = "Update"; // Change button text to "Update"
}

function updateItem(newText) {
  if (currentEditItem) {
    currentEditItem.firstChild.nodeValue = newText; // Update the text of the current item

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
  button.style.backgroundColor = ""; // Reset button color
  button.textContent = "Add"; // Reset button text
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
  if (event.target.classList.contains("remove-btn")) {
    if (confirm("Delete")) {
      const li = event.target.parentElement;
      const textItem = li.textContent.replace("Remove", "").trim();
      li.remove(); // remove from UI

      // Update local storage
      let itemsFromStorage = getItemFromStorage();
      itemsFromStorage = itemsFromStorage.filter((item) => item !== textItem);
      localStorage.setItem("item", JSON.stringify(itemsFromStorage));
    }
    checkUI();
  }
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
  updateButton.style.backgroundColor: #dc3545;
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
