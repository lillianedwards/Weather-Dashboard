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
    for (let i = 0; i < 5; i++) {
      var date = 
      // var card = `
      // <div class="card">
      //      <img src="..." class="card-img-top" alt="...">
      //      <div class="card-body">
      //        <h5 class="card-title">${}</h5>
      //        <p class="card-text">.</p>
      //        <p class="card-text">.</p>
      //        <p class="card-text">.</p>
      //      </div>
      //   </div>
      
      // `
    }
  });
}
upcomingWeather();
// Card Template

//use the .empty method to clear out the cards
