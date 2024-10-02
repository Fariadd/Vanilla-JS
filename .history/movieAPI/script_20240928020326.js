const url = `https://freetestapi.com/api/v1/movies`;

fetch(url, {})
  .then((res) => res.json())
  .then((data) => {
    const div = document.createElement("div");
    document.querySelector(".container");
    data.forEach((movie) => {
      const movieInfo = document.createElement("p"); // Create a paragraph for each movie
      movieInfo.textContent = `Title: ${movie.title}, Genre: ${movie.genre}, Year: ${movie.year}`;
      div.appendChild(movieInfo); // Append each movie's info to the div
    });

    container.appendChild(div);
  })

  .catch((err) => console.log(err));
