const apiURL = "https://dummyjson.com/products";
const container = document.querySelector("#container");

function fetchigData() {
  fetch(apiURL)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      return res.json();
    })
    .then((data) => {
      displayData(data.product);
    });
}

function displayData(products) {
  container.innerHTML = ""; // Clear the container before displaying

  products.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("product");

    const h2 = document.createElement("h2");
    h2.textContent = product.title; // Set the title text in h2 element

    const img = document.createElement("img");
    img.src = product.thumbnail;

    div.appendChild(h2); // Append h2 to the div
    div.appendChild(img);
    container.appendChild(div); // Append the div to the container
  });
}

// Call the function to fetch and display the products
fetchigData();
