//VARIABLE DECLARATIONS
var citySearchBox = $("#city-search");
var userInput = $("#user-City");
var citySearchBtn = $("#search-button");
var cityDropdownEl = $("#city-dropdown");

var todayWeatherCityName = $("#today-weather-city-name");
var todayWeatherIcon = $("today-weather-icon");
var todayWeatherTemp = $("#today-weather-temp");
var todayWeatherWind = $("#today-weather-wind");
var todayWeatherHumid = $("#today-weather-humidity");

var apiKey = "fd14e40bfd6c1460a77a88f01383cf1e";
var dailyURL =
  "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";
var weeklyUrl =
  "https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=";
let savedCities = JSON.parse(localStorage.getItem("savedCities")) || [];

function getCurrentWeather(event) {
  event.preventDefault();
  currentWeather(userInput.val());
}

function currentWeather(city) {
  $.ajax({
    url: dailyURL + city + "&appid=" + apiKey,
    method: "GET",
  }).then(function (data) {
    console.log(data);
    var name = data.name;
    var icon = data.weather[0].icon;
    var temp = data.main.temp;
    var wind = data.wind.speed;
    var humidity = data.main.humidity;

    //appending the current city here for daily

    todayWeatherCityName.text(name);
    todayWeatherTemp.text(temp);
    todayWeatherWind.text(wind);
    todayWeatherHumid.text(humidity);
    //appending the current city here for daily
  });
}

citySearchBtn.on("click", getCurrentWeather);

function upcomingWeather(city) {
  $.ajax({
    url: requestURL + userInput.val() + "&appid=" + apikey,
    method: "GET",
  }).then(function (data) {
    console.log(data);
  });
}

// Card Template
//      <div class="card">
//           <img src="..." class="card-img-top" alt="...">
//           <div class="card-body">
//             <h5 class="card-title">Card title</h5>
//             <p class="card-text">.</p>
//             <p class="card-text">.</p>
//             <p class="card-text">.</p>
//           </div>
//        </div>

//use the .empty method to clear out the cards

savedCities.forEach((value) => {
  const cityItemEl = $("<li>");
  const cityLinkEl = $('<a class="dropdown-item" href="#">');
  cityLinkEl.text(value);
  cityLinkEl.on("click", handleSavedCitySelect);
  cityItemEl.append(cityLinkEl);
  cityDropdownEl.append(cityItemEl);
});

function handleSavedCitySelect(event) {
  let city = $(event.target).text();
  currentWeather(city);
  //upcomingWeather(city);
}
