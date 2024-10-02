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
    displayData();
  } catch (err) {
    console.log(err);
  }
}

fetchigData();
