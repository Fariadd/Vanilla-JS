const apiURL = "https://dummyjson.com/products";
async function fetchigData() {
  const res = await fetch(apiURL);
  const data = await res.json();
  console.log(data);
}

fetchigData();
