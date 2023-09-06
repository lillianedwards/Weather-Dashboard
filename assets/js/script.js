//VARIABLE DECLARATIONS
var citySearchBox = $("#city-search");
var userInput = $("#user-City");
var citySearchBtn = $("#search-button");

var todayWeatherCityName = $("#today-weather-city-name");
var todayWeatherIcon = $("today-weather-icon");
var todayWeatherTemp = $("#today-weather-temp");
var todayWeatherWind = $("#today-weather-wind");
var todayWeatherHumid = $("#today-weather-humidity");
var forecastContainer = $("#forecast-contain");


var apiKey = "fd14e40bfd6c1460a77a88f01383cf1e";
var dailyURL =
  "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";
var weeklyUrl =
  "https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=";

function getCurrentWeather(event) {
  event.preventDefault();
  currentWeather(userInput.val());
  upcomingWeather(userInput.val());
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
    url: weeklyUrl + city + "&appid=" + apiKey,
    method: "GET",
  }).then(function (data) {
    console.log(data);
    data.list.forEach ((value) => {
      if (!value.dt_txt.includes("15:00:00")) {
        return;
      }

      var card = $('<div class="card">');
      var forecastIcon = $('<img class ="card-img-top" alt="weather icon">');
      var cardBody = $('<div class="card-body">')
      var date = $('<h5 class="card-title">')
      var forecastTemp = $('<p class="card-text">');
      var forecastWind = $('<p class="card-text">');
      var forecastHumid = $('<p class="card-text">');
      var iconName = value.weather[0].icon;
      
      forecastContainer.append(card);
      forecastIcon.attr("src","https://openweathermap.org/img/wn/" + iconName + ".png")
      card.append(forecastIcon);

    })
  });
}
upcomingWeather("Duluth");
// Card Template

//use the .empty method to clear out the cards
