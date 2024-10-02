const url =
  "https://imdb-top-100-movies.p.rapidapi.com/7296d32500mshd994bb305033f6bp15b2f1jsn68c9884d63f0";

async function fetchDate() {
  try {
    const response = await fetch(url);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "7296d32500mshd994bb305033f6bp15b2f1jsn68c9884d63f0",
    "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
  },
};
