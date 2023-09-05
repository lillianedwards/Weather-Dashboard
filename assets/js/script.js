//VARIABLE DECLARATIONS
var citySearchBox = $("#city-search");
var userInput = $("#user-city");
var citySearchBtn = $("#search-button");

var todayWeatherCityName = $("#today-weather-city-name");
var todayWeatherIcon = $("today-weather-icon");
var todayWeatherTemp = $("#today-weather-temp");
var todayWeatherWind = $("#today-weather-wind");
var todayWeatherHumid = $("#today-weather-humidity");

var apiKey = $("27918b0a1eff4c123d61cdad98ffa668");
var apiURL = 

function getCurrentWeather (event) {

    event.preventDefault();
    var requestURL = "https://api.openweathermap.org/data/2.5/weather?appid=$apiKey&units=imperial&q=`;"

$.ajax({
url:requestURL + userInput.val(),
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