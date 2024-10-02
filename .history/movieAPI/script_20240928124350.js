const url = `https://jsonplaceholder.typicode.com/posts?_limit=10`;

fetch(url, {})
  .then((res) => res.json())
  .then((data) => {
    const div = document.createElement("div"); // Create a new div element
    const container = document.querySelector(".container"); // Get the container element

    // Loop through the fetched data and display movie info and images
    data.forEach((movie) => {
      // Create a paragraph to show movie title
      const div = document.createElement("div");
      div.classList.add("p");

      const postTile = document.createElement("h2");
      postTile.textContent = movie.title;

      const p = document.createElement("p");
      p.textContent = movie.body;
      // Append the movie info and image to movieDiv

      div.appendChild(postTile);
      div.appendChild(p);
    });

    // Append the main div to the container
    container.appendChild(div);
  })
  .catch((err) => console.log(err));
