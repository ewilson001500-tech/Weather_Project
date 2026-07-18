function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#weather-search-input");
  search;

  let city = document.querySelector(".current-city");
  city.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search-form");

searchFormElement.addEventListener("submit", search);
