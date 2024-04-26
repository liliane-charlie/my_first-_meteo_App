function handlesearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searchFormInput");
  let cityElement = document.querySelector("#weatherAppCity");
  cityElement.innerHTML = searchInput.value;
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handlesearch);
