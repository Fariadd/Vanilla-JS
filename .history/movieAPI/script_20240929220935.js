const productsUrl = "https://dummyjson.com/products";

// Function to fetch and display products
async function fetchAndDisplayProducts() {
  try {
    // Fetch the product data from the API
    const response = await fetch(productsUrl);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch products with status ${response.status}`
      );
    }

    const data = await response.json();
    const products = data.products;

    // Display the products
    displayProducts(products);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

// Function to display the products on the page
function displayProducts(products) {
  const container = document.querySelector(".products-container");

  // Clear the container before displaying products
  container.innerHTML = "";

  products.forEach((product) => {
    // Create a div to hold the product info
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    // Product title
    const title = document.createElement("h3");
    title.textContent = product.title;

    // Product price
    const price = document.createElement("p");
    price.textContent = `Price: $${product.price}`;

    // Product image
    const img = document.createElement("img");
    img.src = product.thumbnail; // Use product thumbnail as image
    img.alt = product.title;

    // Append the elements to the product div
    productDiv.appendChild(img);
    productDiv.appendChild(title);
    productDiv.appendChild(price);

    // Append the product div to the products container
    container.appendChild(productDiv);
  });
}

// Call the function to fetch and display products when the page loads
fetchAndDisplayProducts();
