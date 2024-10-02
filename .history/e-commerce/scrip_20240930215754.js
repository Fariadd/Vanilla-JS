const signupForm = document.getElementById("signup-form");
const messageDiv = document.getElementById("message");

// API endpoint for adding a user
const signupUrl = "https://dummyjson.com/users/add";

// Event listener for the form submission
signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get user input values
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const userInfo = {
    username,
    email,
    password,
  };

  try {
    // Make POST request to add a new user
    const response = await fetch(signupUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
      // redirect
    });

    if (!response.ok) {
      throw new Error("Sign Up Failed");
    }

    const data = await response.json();

    // Display success message and user info
    messageDiv.textContent = `Sign up successful! Welcome ${data.username}`;

    // Optionally, store user data in localStorage for future use
    localStorage.setItem("user", JSON.stringify(data));
  } catch (err) {
    messageDiv.textContent = `Error: ${err.message}`;
  }
});

const loginForm = document.getElementById("login-form");
const loginMessageDiv = document.getElementById("login-message");

const loginUrl = "https://dummyjson.com/auth/login";

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  const loginInfo = {
    username,
    password,
  };

  try {
    const response = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const data = await response.json();

    // Store the token for further requests
    localStorage.setItem("token", data.token);

    // Show success message and redirect to products page
    loginMessageDiv.textContent = `Login successful! Redirecting...`;
    setTimeout(() => {
      window.location.href = "products.html"; // Redirect to products page
    }, 2000);
  } catch (err) {
    loginMessageDiv.textContent = `Error: ${err.message}`;
  }
});

const productsUrl = "https://dummyjson.com/products";
const productsContainer = document.getElementById("products-container");

async function fetchProducts() {
  try {
    const response = await fetch(productsUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();
    displayProducts(data.products);
  } catch (err) {
    console.error(err.message);
  }
}

function displayProducts(products) {
  productsContainer.innerHTML = ""; // Clear any existing content

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.innerHTML = `
      <h2>${product.title}</h2>
      <p>Price: $${product.price}</p>
    `;
    productsContainer.appendChild(productDiv);
  });
}

fetchProducts();
