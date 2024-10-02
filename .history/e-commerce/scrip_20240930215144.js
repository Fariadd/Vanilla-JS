const loginUrl = "https://dummyjson.com/auth/login";
const productsUrl = "https://dummyjson.com/products?_limit=10";

// Function to handle login
async function loginUser() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  const loginInfo = {
    username: "kminchelle", // Valid username
    password: "0lelplR", // Valid password
  };

  try {
    const res = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    });

    if (!res.ok) {
      throw new Error(`Login failed with status ${res.status}`);
    }

    const loginData = await res.json();
    console.log("Login successful:", loginData);

    const token = loginData.token; // Get the token from login response

    // Store the token in localStorage for future API requests
    localStorage.setItem("token", token);

    // Redirect to the products page
    window.location.href = "products.html";
  } catch (error) {
    console.error("Error:", error.message);
  }
}
