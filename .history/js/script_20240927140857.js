const global = {
  currentPage: window.location.pathname,
};

// Fetch async from TMDB API
async function fetchAPIData(endpoint) {
  const API_KEY = "bd70981f390c8eed299ffebd020b3da9";
  const API_URL = "https://api.themoviedb.org/3/";

  const response = await fetch(
    `${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`
  );

  const data = await response.json();

  return data;
}

// highlight active link to yellow

function highlightActiveLink() {
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    if (link.getAttribute("href") === global.currentPage) {
      link.classList.add("active");
    }
  });
}

///
async function displayPopularMovies() {
  const { results } = await fetchAPIData("movie/popular");
  results.forEach((movie) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
          <a href="movie-details.html?id=${movie.id}">
           ${
             movie.poster_path
               ? ` <img
              src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
              class="card-img-top"
              alt="${movie.title}"
            />`
               : ` <img
              src="images/no-image.jpg"
              class="card-img-top"
              alt=${movie.title}/>`
           }
           
          </a>
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">
              <small class="text-muted">Release: ${movie.release_date}</small>
            </p>
          </div>
    `;
    document.querySelector("#popular-movies").appendChild(div);
  });
}
// display movie deatails
async function displayMovieDetails() {
  const mvoieId = window.location.search;
  console.log(mvoieId);
}

// display 20 most tv show
async function displayPopularShows() {
  const { results } = await fetchAPIData("tv/popular");

  results.forEach((show) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
            <a href="tv-details.html${show.id}">
             ${
               show.poster_path
                 ? ` <img
                src="https://image.tmdb.org/t/p/w500${show.poster_path}"
                class="card-img-top"
                alt="${show.name}"
              />`
                 : ` <img
                src="images/no-image.jpg"
                class="card-img-top"
                alt="${show.name}" />`
             }
             
            </a>
            <div class="card-body">
              <h5 class="card-title">${show.name}</h5>
              <p class="card-text">
                <small class="text-muted">Release: ${
                  show.first_air_date
                }</small>
              </p>
            </div>
      `;
    document.querySelector("#popular-shows").appendChild(div);
  });
}

// get the popular movies

function init() {
  switch (global.currentPage) {
    case "/":
    case "/index.html":
      displayPopularMovies();
      break;
    case "/shows.html":
      displayPopularShows();
      break;
    case "/movie-details.html":
      displayMovieDetails();
      break;
    case "/tv-details.html":
      console.log("tv details");
      break;
    case "/search.html":
      console.log("search ");
      break;

    default:
      console.log("Page not found");
  }
  highlightActiveLink();
}
document.addEventListener("DOMContentLoaded", init);
