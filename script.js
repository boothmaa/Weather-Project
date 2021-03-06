function showtemp(search) {
  let temperature = search.data.main.temp;
  let content = document.querySelector("#number");
  content.innerHTML = Math.round(`${temperature}`);
  let description = document.querySelector("#Weather-description");
  description.innerHTML = search.data.weather[0].description;
  let humid = document.querySelector("#humidity");
  humid.innerHTML = search.data.main.humidity;
  let speed = document.querySelector("#wind-speed");
  speed.innerHTML = search.data.wind.speed;

  celsiustemp = search.data.main.temp;

  let icons = document.querySelector("#icon");
  icons.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${search.data.weather[0].icon}@2x.png`
  );
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
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let date = document.querySelector("#date-now");
date.innerHTML = `${day} ${hour}:${minutes}`;

function displayFtemp(event) {
  event.preventDefault();
  conversionback.classList.remove("active");
  conversion.classList.add("active");
  let tempelement = document.querySelector("#number");
  let ftemp = (celsiustemp * 9) / 5 + 32;
  tempelement.innerHTML = Math.round(ftemp);
}

function displayCtemp(event) {
  event.preventDefault();
  conversion.classList.remove("active");
  conversionback.classList.add("active");
  let tempelement = document.querySelector("#number");
  tempelement.innerHTML = Math.round(celsiustemp);
}

let celsiustemp = null;

let conversion = document.querySelector("#Ftemp");
conversion.addEventListener("click", displayFtemp);

let conversionback = document.querySelector("#Ctemp");
conversionback.addEventListener("click", displayCtemp);
