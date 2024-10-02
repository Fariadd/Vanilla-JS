const apiURL = "https://dummyjson.com/products";
const container = document.querySelector("#container");
async function fetchigData() {
  try {
    const res = await fetch(apiURL);
    if (!res.ok) {
      throw new Error();
      {
        `Failed to fetch data`;
      }
    }
    const data = await res.json();
    console.log(data);
    displayData(data.products);
  } catch (err) {
    console.log(err);
  }
}
function displayData(products) {
  container.innerHTML = "";
  products.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("product");

    const h2 = document.createElement("h2");
    h2.textContent = product.title;

    div.appendChild(h2);
    container.appendChild(div);
  });
}

fetchigData();
