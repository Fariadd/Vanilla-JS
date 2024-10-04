let currentEditItem = null; // To track the item being edited

const input = document.querySelector(".input");
const form = document.querySelector(".form");
const cardList = document.querySelector(".card-list");
const filter = document.querySelector("#filter");
const button = document.querySelector("#button");
const updateButton = document.querySelector(".btn");

function displayItemFromStorage() {
  let itemsFromStorage = getItemFromStorage();
  itemsFromStorage.forEach((item) => {
    createTodo(item); // Reuse the createTodo function to display each item
  });
}

// Handle form submission (either add or update item)
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputValue = input.value.trim();
  if (inputValue === "") {
    alert("Please enter a task!");
    return;
  }

  // If we are in edit mode, update the current item
  if (currentEditItem) {
    updateItem(inputValue);
  } else {
    // Adding a new item
    if (existingItem(inputValue)) {
      alert("Item already exists!");
      return;
    }
    createTodo(inputValue);
    addItemToStorage(inputValue);
  }

  checkUI();
  input.value = ""; // Clear input field after adding or updating
});

// Function to create a new to-do item
function createTodo(todoText) {
  const li = document.createElement("li");
  li.textContent = todoText;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("remove-btn");

  const updateBtn = document.createElement("i");
  updateBtn.textContent = "Update";
  updateBtn.classList.add("update-btn");

  li.appendChild(removeBtn);
  li.appendChild(updateBtn);

  // Add event listener for the update button
  updateBtn.addEventListener("click", () => setItemToEdit(li));

  cardList.appendChild(li);
}

// Set the clicked item to edit mode
function setItemToEdit(li) {
  currentEditItem = li; // Track the item being edited
  input.value = li.firstChild.textContent.trim(); // Populate input field with the current item text

  updateButton.textContent = "Update Item"; // Change button to indicate update mode
  updateButton.style.backgroundColor = "green";
}

// Update the item in both UI and localStorage
function updateItem(newText) {
  if (currentEditItem) {
    const oldText = currentEditItem.firstChild.textContent.trim();

    // Update the UI
    currentEditItem.firstChild.nodeValue = newText;

    // Update localStorage
    let itemsFromStorage = getItemFromStorage();
    const index = itemsFromStorage.indexOf(oldText);
    if (index > -1) {
      itemsFromStorage[index] = newText; // Replace the old text with new text
      localStorage.setItem("item", JSON.stringify(itemsFromStorage)); // Save to localStorage
    }
  }

  // Reset the edit mode
  checkUI();
}

// Add new item to localStorage
function addItemToStorage(newItem) {
  let itemsFromStorage = getItemFromStorage();
  itemsFromStorage.push(newItem);
  localStorage.setItem("item", JSON.stringify(itemsFromStorage));
}

// Get items from localStorage
function getItemFromStorage() {
  let itemsFromStorage;
  if (localStorage.getItem("item") === null) {
    itemsFromStorage = [];
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem("item"));
  }
  return itemsFromStorage;
}

// Check if an item already exists
function existingItem(item) {
  let itemsFromStorage = getItemFromStorage();
  return itemsFromStorage.includes(item);
}

// Update the UI state and reset form after updating
function checkUI() {
  const liLists = cardList.querySelectorAll("li");
  if (liLists.length === 0) {
    filter.style.display = "none";
    button.style.display = "none";
  } else {
    filter.style.display = "block";
    button.style.display = "block";
  }

  // Reset the update button to default
  updateButton.textContent = "Add Item";
  updateButton.style.backgroundColor = "";
  currentEditItem = null; // Reset the edit mode
}

// Remove an item from localStorage (existing functionality)
function removeItemFromStorage(event) {
  if (event.target.classList.contains("remove-btn")) {
    if (confirm("Delete this item?")) {
      const li = event.target.parentElement;
      const textItem = li.firstChild.textContent.trim();

      // Remove the item from the UI
      li.remove();

      // Update localStorage
      let itemsFromStorage = getItemFromStorage();
      itemsFromStorage = itemsFromStorage.filter((item) => item !== textItem);
      localStorage.setItem("item", JSON.stringify(itemsFromStorage));
    }
  }

  checkUI(); // Update the UI state
}

// Filter items based on input (existing functionality)
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

// Clear all items (existing functionality)
function clearAllItems() {
  const liItems = cardList.querySelectorAll("li");

  if (liItems.length === 0) {
    console.log("Nothing to clear.");
  } else {
    cardList.innerHTML = "";
    localStorage.removeItem("item");
  }
  checkUI();
}

// Event listeners
checkUI();
cardList.addEventListener("click", removeItemFromStorage);
filter.addEventListener("input", filterItem);
button.addEventListener("click", clearAllItems);
document.addEventListener("DOMContentLoaded", displayItemFromStorage);
