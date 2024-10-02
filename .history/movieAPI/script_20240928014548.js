const xrapidapiKey = "7296d32500mshd994bb305033f6bp15b2f1jsn68c9884d63f0";
const url =
  `https://imdb146.p.rapidapi.com/v1/name/?${xrapidapiKey}` &
  "imdb146.p.rapidapi.com";

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
