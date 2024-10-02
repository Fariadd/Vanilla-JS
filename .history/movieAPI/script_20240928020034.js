const url = `https://freetestapi.com/api/v1/movies`;

fetch(url, {})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
const div = document.createElement("div");
document.querySelector(".container").appendChild(div);
