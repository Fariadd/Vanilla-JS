// apikey = bd70981f390c8eed299ffebd020b3da9

//apiURL = https://api.themoviedb.org/3/

// the whole URL API https://api.themoviedb.org/3/movie/550?api_key=bd70981f390c8eed299ffebd020b3da9

const global = {
  currentPage: window.location.pathname,
};

// highlight active link

function highlightActiveLink() {
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    if (link.getAttribute("href") === global.currentPage) {
      link.classList.add("active");
    }
  });
}

function init() {
  switch (global.currentPage) {
    case "/":
    case "/index.html":
      console.log("Home");
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
