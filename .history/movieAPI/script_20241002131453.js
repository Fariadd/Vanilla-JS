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

const btn = document.querySelector(".btn");
const cardList = document.querySelector("card-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputValue = input.value;
  console.log(inputValue);

  createTodo(e);
  input.value = "";
});
function createTodo(todoText) {
  const li = document.createElement("li");
  li.textContent = todoText;
}

cardList.addEventListener("click", createTodo);
