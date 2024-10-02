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
//       img.src = user.image;

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

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputValue = input.value.trim();
  if (inputValue === "") {
    alert("add a todo");
    return;
  }

  createTodo(inputValue);
  input.value = "";
});
function createTodo(todoText) {
  const li = document.createElement("li");
  li.textContent = todoText;

  const btn = document.createElement("button");
  btn.textContent = "Remove";
  btn.classList.add("remove-btn");

  li.appendChild(btn);

  // Append the new todo item to the list
  cardList.appendChild(li);
}
function addItemToStorage(newItem) {
  let itemFromStorage = getItemFromStorage(); // Call the function to retrieve existing items
  itemFromStorage.push(newItem); // Add the new item to the array
  localStorage.setItem("item", JSON.stringify(itemFromStorage)); // Store the updated array in localStorage
}

function getItemFromStorage() {
  let itemFromStorage;

  // Check if 'item' exists in localStorage
  if (localStorage.getItem("item") === null) {
    itemFromStorage = []; // If it doesn't exist, initialize an empty array
  } else {
    itemFromStorage = JSON.parse(localStorage.getItem("item")); // Parse the existing data
  }

  return itemFromStorage; // Return the retrieved (or empty) array
}

cardList.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    e.target.parentElement.remove();
  }
});
