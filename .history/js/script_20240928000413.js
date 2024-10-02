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

// display movie deatails
async function displayMovieDetails() {
  const mvoieId = window.location.search.split("=")[1];

  const movie = await fetchAPIData(`movie/${mvoieId}`);

  const div = document.createElement("div");
  div.innerHTML = `
    <div class="details-top">
          <div>
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
          </div>
          <div>
            <h2>${movie.title}</h2>
            <p>
              <i class="fas fa-star text-primary"></i>
              ${movie.vote_average.toFixed(1)}
            </p>
            <p class="text-muted">Release Date: ${movie.release_date} </p>
            <p>
           ${movie.overview}
            </p>
            <h5>Genres</h5>
            <ul class="list-group">
             ${movie.genres.map((item) => `<li>${item.name}</li>`).join(" ")}
            </ul>
            <a href="${
              movie.homepage
            }" target="_blank" class="btn">Visit Movie Homepage</a>
          </div>
        </div>
        <div class="details-bottom">
          <h2>Movie Info</h2>
          <ul>
            <li><span class="text-secondary">Budget:</span> ${addCommans(
              movie.budget
            )}</li>
            <li><span class="text-secondary">Revenue:</span> ${addCommans(
              movie.revenue
            )}</li>
            <li><span class="text-secondary">Runtime:</span> ${
              movie.runtime
            } minutes</li>
            <li><span class="text-secondary">Status:</span> ${
              movie.release_date
            }</li>
          </ul>
          <h4>Production Companies</h4>
          <div class="list-group">${movie.production_companies.map(
            (company) => `<span>${company.name}</span>`
          )}</div>
        </div>
  `;
  document.querySelector("#movie-details").appendChild(div);
}

// show details
async function displayShowDetails() {
  const showId = window.location.search.split("=")[1];

  const show = await fetchAPIData(`tv/${showId}`);

  const div = document.createElement("div");
  div.innerHTML = `
      <div class="details-top">
            <div>
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
                alt=${show.name}/>`
               }
            </div>
            <div>
              <h2>${show.title}</h2>
              <p>
                <i class="fas fa-star text-primary"></i>
                ${show.vote_average.toFixed(1)}
              </p>
              <p class="text-muted">Release Date: ${show.last_air_date} </p>
              <p>
             ${show.overview}
              </p>
              <h5>Genres</h5>
              <ul class="list-group">
               ${show.genres.map((item) => `<li>${item.name}</li>`).join(" ")}
              </ul>
              <a href="${
                show.homepage
              }" target="_blank" class="btn">Visit Movie Homepage</a>
            </div>
          </div>
          <div class="details-bottom">
            <h2>Movie Info</h2>
            <ul>
              <li><span class="text-secondary">episodes</span> 
              ${show.number_of_episodes}</li>
            </ul>
            <h4>Production Companies</h4>
            <div class="list-group">${show.production_companies.map(
              (company) => `<span>${company.name}</span>`
            )}</div>
          </div>
    `;
  document.querySelector("#show-details").appendChild(div);
}

// display 20 most tv show
async function displayPopularShows() {
  const { results } = await fetchAPIData("tv/popular");

  results.forEach((show) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
            <a href="tv-details.html?id=${show.id}">
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

// display slider movies
async function displaySlider() {
  const { results } = await fetchAPIData("movie/now_playing");

  results.forEach((movie) => {
    const div = document.createElement("div");
    div.classList.add("swiper-slide");
    div.innerHTML = `
            <a href="movie-details.html?id=${movie.id}">
              <img src="http://tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
            </a>
            <h4 class="swiper-rating">
              <i class="fas fa-star text-secondary"></i>${movie.vote_average} / 10
            </h4> `;
    document.querySelector(".swiper-wrapper").appendChild(div);
    initSwiper();
  });
}
function initSwiper() {
  const swiper = new Swiper(".swiper", {
    slidesPerview: 1,
    spaceBetween: 30,
    freeMode: true,
    lopp: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      500: {
        slidesPerview: 2,
      },
      700: {
        slidesPerview: 3,
      },
      1200: {
        slidesPerview: 4,
      },
    },
  });
}

function initSwiper() {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
      },
      700: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
}

// get the popular movies

function init() {
  switch (global.currentPage) {
    case "/":
    case "/index.html":
      displaySlider();
      displayPopularMovies();

      break;
    case "/shows.html":
      displayPopularShows();
      break;
    case "/movie-details.html":
      displayMovieDetails();
      break;
    case "/tv-details.html":
      displayShowDetails();
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

function addCommans(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
