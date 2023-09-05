//VARIABLE DECLARATIONS
var citySearchBox = $("#city-search");
var userInput = $("#user-City");
var citySearchBtn = $("#search-button");

var todayWeatherCityName = $("#today-weather-city-name");
var todayWeatherIcon = $("today-weather-icon");
var todayWeatherTemp = $("#today-weather-temp");
var todayWeatherWind = $("#today-weather-wind");
var todayWeatherHumid = $("#today-weather-humidity");

var apiKey = "fd14e40bfd6c1460a77a88f01383cf1e";
var dailyURL =
  "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";
var weeklyUrl;

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
    todayWeatherCityName.text(name);
    //appending the current city here for daily 
  });
}



citySearchBtn.on("click", getCurrentWeather);

function upcomingWeather(city) {
    $.ajax({
        url:requestURL + userInput.val() + "&appid=" + apikey,
        method: "GET"
        })
        .then(function(data) {
        console.log(data);
        })
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
