const url =
  "https://imdb-top-100-movies.p.rapidapi.com/7296d32500mshd994bb305033f6bp15b2f1jsn68c9884d63f0";
async function api() {
  try {
    const response = await fetch(url);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
api();
