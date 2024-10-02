const xrapidapiKey = "7296d32500mshd994bb305033f6bp15b2f1jsn68c9884d63f0";
const rapidapiHost = "imdb146.p.rapidapi.com";

// URL can contain other parameters (for example, query parameters)
const searchParam = "actor";
const url = `https://freetestapi.com/api/v1/movies`;

fetch(url, {})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
document.querySelector(".container").appendChild();
