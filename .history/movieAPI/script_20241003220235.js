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

let currentEditItem = null; // Variable to track the item being edited

const input = document.querySelector(".input");
const form = document.querySelector(".form");
const cardList = document.querySelector(".card-list");
const filter = document.querySelector("#filter");
const button = document.querySelector("#button");
const updateButton = document.querySelector(".btn");

// Display items from localStorage on page load
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
  updateBtn.addEventListener("click", () => {
    // Set the currentEditItem to the clicked item
    currentEditItem = li;
    input.value = li.firstChild.textContent.trim(); // Fill input with current item text
    updateButton.innerHTML = "<button > update</button>"; // Change the button text to "Update"
  });

  cardList.appendChild(li);
}

// Function to check the UI state
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
  currentEditItem = null; // Reset the edit mode
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

// Update an existing item in the UI and localStorage
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

// Remove an item from localStorage
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

// Check if an item already exists
function existingItem(item) {
  let itemsFromStorage = getItemFromStorage();
  return itemsFromStorage.includes(item);
}

// Filter items based on input
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

// Clear all items
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
