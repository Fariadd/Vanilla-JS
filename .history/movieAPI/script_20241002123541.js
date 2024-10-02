const apiURL = "https://fakestoreapi.com/products";
fetch(apiURL)
  .then((res) => {
    console.log(res);
  })
  .then((data) => res.json(data));
console.log(data);
