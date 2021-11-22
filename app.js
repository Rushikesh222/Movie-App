const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9df10a06ec7d9a8583da8374188d261d&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=9df10a06ec7d9a8583da8374188d261d&query=";

const form = document.getElementById("form");

getMovies(API_URL);
async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  console.log(data.results);
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchterm = search.value;
  if (search && searchterm !== "") {
    getMovies(SEARCH_API + searchterm);
    search.value = "";
  } else {
    window.location.reload();
  }
});
