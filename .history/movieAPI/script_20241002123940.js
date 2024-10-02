const apiURL = "https://fakestoreapi.com/products";
const container = document.querySelector(".container");

const promice = async () => {
  try {
    const res = await fetch(apiURL);
    if (!res.ok) throw new Error("wrror resp");
    const data = await res.json();

    data.forEach((user) => {
      const div = document.createElement("div");

      div.innerHTML = ` <h3>${user.price}</3>`;
      container.appendChild(div);
    });
  } catch (err) {
    console.log(err.message);
  }
};
promice();
