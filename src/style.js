// Display the current day and time.
let now = new Date();

let WeekdayAndTime = document.querySelector("#WeekdayAndTime");

let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let weekday = weekdays[now.getDay()];
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

WeekdayAndTime.innerHTML = `${weekday} ${hours}:${minutes}`;

// Display city name after user submits the form.
function searchForCity(event) {
  event.preventDefault();
  let citySearchInput = document.querySelector("#city-search-input");

  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = `${citySearchInput.value}`;
}

let citySearchForm = document.querySelector("#city-search");

citySearchForm.addEventListener("submit", searchForCity);
