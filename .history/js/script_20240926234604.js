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
      console.log("shows");
      break;
    case "/movie-details.html":
      console.log("movie details");
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
