function showtemp(search) {
  let temperature = Math.round(search.data.main.temp);
  let content = document.querySelector("p");
  console.log(content);
  content.innerHTML = `Current temperature is ${temperature}°C`;
}

function search(event) {
  event.preventDefault();
  let place = document.querySelector("#city");
  let searchInput = document.querySelector("#city-input");
  place.innerHTML = searchInput.value;
  let city = place.innerHTML;
  let unit = "metric";
  let apikey = "5a698c38792031728dd59b80d758d0a5";
  let apiURL = "https://api.openweathermap.org/data/2.5/weather?q=";
  axios.get(`${apiURL}${city}&appid=${apikey}&units=${unit}`).then(showtemp);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let now = new Date();
let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
let day = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();
let date = document.querySelector("#date-now");
date.innerHTML = `${day} ${hour}:${minutes}`;
