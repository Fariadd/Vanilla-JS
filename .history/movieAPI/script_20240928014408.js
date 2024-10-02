const url = "https://imdb146.p.rapidapi.com/v1/name/?id=nm0000093";

fetch(url, {
  method: "GET",
  headers: {
    "x-rapidapi-key": "7296d32500mshd994bb305033f6bp15b2f1jsn68c9884d63f0",
    "x-rapidapi-host": "imdb146.p.rapidapi.com",
  },
})
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
