fetch(url, {})
  .then((res) => res.json())
  .then((data) => {
    const div = document.createElement("div"); // Create a new div element
    const container = document.querySelector(".container"); // Get the container element

    // Loop through the fetched data and display it
    data.forEach((movie) => {
      const movieInfo = document.createElement("p"); // Create a paragraph for each movie
      movieInfo.textContent = `Title: ${movie.title}, Genre: ${movie.genre}, Year: ${movie.year}`;
      div.appendChild(movieInfo); // Append each movie's info to the div
    });

    container.appendChild(div); // Append the div to the container
  })
  .catch((err) => console.log(err));
