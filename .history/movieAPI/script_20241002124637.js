const apiURL = "https://fakestoreapi.com/products";
const container = document.querySelector(".container");

const promice = async () => {
  try {
    const res = await fetch(apiURL);
    if (!res.ok) throw new Error("wrror resp");
    const data = await res.json();
    console.log(data);
    data.forEach((user) => {
      const div = document.createElement("div");
      div.classList.add("card");

      const titleText = document.createElement("h3");
      titleText.classList.add("title");

      const img = document.createElement("img");
      div.innerHTML = ` <h3>${user.category}</3>`;
      container.appendChild(div);
    });
  } catch (err) {
    console.log(err.message);
  }
};
promice();
