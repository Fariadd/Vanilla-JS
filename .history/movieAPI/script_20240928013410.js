fetch(
  "https://streaming-availability.p.rapidapi.com/shows/%7Btype%7D/%7Bid%7D",
  {
    method: "GET",
    headers: {
      "x-rapidapi-key": "7296d32500mshd994bb305033f6bp15b2f1jsn68c9884d63f0",
      "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
    },
  }
)
  .then((res) => {
    res.json();
  })
  .then((data) => res.json())
  .catch((err) => {
    console.log(err);
  });
