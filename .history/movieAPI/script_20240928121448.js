const url = `https://freetestapi.com/api/v1/movies`;

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
      movieInfo.textContent = `Title: ${movie.title}, Genre: ${movie.genre}, Year: ${movie.year}`;

      // Create an img element to show movie image
      const movieImg = document.createElement("img");
      movieImg.src = movie.trailer; // Assuming 'imageUrl' contains the image link
      movieImg.alt = `${movie.title} poster`;
      movieImg.style.width = "150px"; // Set image size (optional)

      // Append the movie info and image to movieDiv
      movieDiv.appendChild(movieInfo);
      movieDiv.appendChild(movieImg);

      // Append the movieDiv to the main div
      div.appendChild(movieDiv);
    });

    // Append the main div to the container
    container.appendChild(div);
  })
  .catch((err) => console.log(err));
