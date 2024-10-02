const url =
  "https://streaming-availability.p.rapidapi.com/shows/%7Btype%7D/%7Bid%7D";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "7296d32500mshd994bb305033f6bp15b2f1jsn68c9884d63f0",
    "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
fetch(
  "https://streaming-availability.p.rapidapi.com/shows/%7Btype%7D/%7Bid%7D",
  {
    method: "GET",
    headers: {
      "x-rapidapi-key": "7296d32500mshd994bb305033f6bp15b2f1jsn68c9884d63f0",
      "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
    },
  }
).then((res) => {
  console.log("responose");
}).then((data)=> console.log(data);)
