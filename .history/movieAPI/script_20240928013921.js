const apiKey = "7296d32500mshd994bb305033f6bp15b2f1jsn68c9884d63f0",
const urlApi = "streaming-availability.p.rapidapi.com",


fetch('https://streaming-availability.p.rapidapi.com/shows/%7Btype%7D/%7Bid%7D').then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => {
    console.log(err);
  });
