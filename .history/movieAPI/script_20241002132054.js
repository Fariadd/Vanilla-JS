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
const cardList = document.querySelector(".card-list"); // Corrected selection

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputValue = input.value.trim(); // Trim to remove unnecessary spaces
  if (inputValue !== "") {
    addTodo(inputValue); // Add the todo item
    input.value = ""; // Clear input after adding
  } else {
    alert("Please enter a todo");
  }
});

// Function to add a new todo item to the list
function addTodo(todoText) {
  const li = document.createElement("li");
  li.textContent = todoText;

  // Add remove button to the todo item
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("remove-btn");

  // Append remove button to the todo item
  li.appendChild(removeBtn);

  // Append the new todo item to the list
  cardList.appendChild(li);

  // Remove the todo item when remove button is clicked
  removeBtn.addEventListener("click", () => {
    li.remove();
  });
}
