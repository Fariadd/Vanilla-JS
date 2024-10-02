const url = `https://freetestapi.com/api/v1/movies`;

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    const div = document.createElement("div");
    const container = document.querySelector(".container");

    data.forEach((movie) => {
      const p = document.createElement("p");
      p.textContent = `Title ${movie.title} ,genre ${movie.genre}, year ${movie.year}, image ${movie.production}`;
      div.appendChild(p);
    });
    container.appendChild(div);
  })

  .catch((err) => console.log(err));
