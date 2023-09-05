//VARIABLE DECLARATIONS
var citySearchBox = $("#city-search");
var userInput = $("#user-city");
var citySearchBtn = $("#search-button");

var todayWeatherCityName = $("#today-weather-city-name");
var todayWeatherIcon = $("today-weather-icon");
var todayWeatherTemp = $("#today-weather-temp");
var todayWeatherWind = $("#today-weather-wind");
var todayWeatherHumid = $("#today-weather-humidity");

var apiURLCurrent = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=imperial&q=`

var apiURLForecast = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=imperial&q=`

function getCurrentWeather (event) {

    event.preventDefault();

$.ajax({
url:apiURLCurrent + userInput.val(),
method: "GET"
})
.then(function(data) {
console.log(data);




})}

























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