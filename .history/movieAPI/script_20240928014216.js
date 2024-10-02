const apiKey = "7296d32500mshd994bb305033f6bp15b2f1jsn68c9884d63f0";
const urlApi = "streaming-availability.p.rapidapi.com";

const fetchingData = fetch(
  `https://streaming-availability.p.rapidapi.com/shows/movie/12345`
)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => {
    console.log(err);
  });
const url = "https://imdb146.p.rapidapi.com/v1/name/?id=nm0000093";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "7296d32500mshd994bb305033f6bp15b2f1jsn68c9884d63f0",
    "x-rapidapi-host": "imdb146.p.rapidapi.com",
  },
};

const response = fetch(url, options).then((res) => {
  return res.json();
});
const result = response.text();
console.log(result);
