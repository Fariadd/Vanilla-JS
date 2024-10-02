const apiURL = "https://fakestoreapi.com/products";
const container = document.querySelector(".container");

const promice = async () => {
  try {
    const res = await fetch(apiURL);
    if (!res.ok) throw new Error("wrror resp");
    const data = await res.json();

    data.forEach((user) => {
      const div = document.createElement("div");
      div.classList.add("card");

      const titleText = document.createElement("h3");
      titleText.classList.add("title");
      titleText.textContent = product.title;

      const img = document.createElement("img");
      img.classList.add("image");
      img.src = user.image;

      div.appendChild(titleText);
      div.appendChild(img);
      container.appendChild(div);
    });
  } catch (err) {
    console.log(err.message);
  }
};
promice();
