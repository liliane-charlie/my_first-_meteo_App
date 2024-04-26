function updateWeather(response) {
  let temperatureElement = document.getElementById("weatherAppValue");
  let temperature = response.data.temperature.current;
  console.log(temperature);
  temperatureElement.innerHTML = Math.round(temperature);
}

function replaceCity(city) {
  let apiKey = "caca0doba0159abf7a94f3bbcctdd303";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(updateWeather);
}
function handlesearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searchFormInput");
  let cityElement = document.querySelector("#weatherAppCity");
  cityElement.innerHTML = searchInput.value;
  replaceCity(searchInput.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handlesearch);
