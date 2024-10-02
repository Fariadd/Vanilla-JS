const url = `https://jsonplaceholder.typicode.com/posts?_limit=10`;

fetch(url, {})
  .then((res) => res.json())
  .then((data) => {
    const div = document.createElement("div"); // Create a new div element
    const container = document.querySelector(".container"); // Get the container element

    // Loop through the fetched data and display movie info and images
    data.forEach((movie) => {
      const movieDiv = document.createElement("div"); // Create a div for each movie

      // Create a paragraph to show movie title
      const movieInfo = document.createElement("p");
      movieInfo.textContent = `Title: ${movie.title}, Genre: ${movie.body}`;

      // Append the movie info and image to movieDiv
      movieDiv.appendChild(movieInfo);

      // Append the movieDiv to the main div
      div.appendChild(movieDiv);
    });

    // Append the main div to the container
    container.appendChild(div);
  })
  .catch((err) => console.log(err));
