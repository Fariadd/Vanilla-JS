const apiURL = "https://dummyjson.com/products";
const container = document.querySelector("#container");

async function fetchigData() {
  try {
    const res = await fetch(apiURL);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    console.log(data);
    displayData(data.products); // Passing products to the displayData function
  } catch (err) {
    console.log(err);
  }
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
