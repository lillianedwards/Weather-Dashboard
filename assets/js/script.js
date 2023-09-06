//VARIABLE DECLARATIONS
var citySearchBox = $("#city-search");
var userInput = $("#user-City");
var citySearchBtn = $("#search-button");
var cityDropdownEl = $("#city-dropdown");

var todayWeatherCityName = $("#today-weather-city-name");
var todayWeatherIcon = $("#today-weather-icon");
var todayWeatherTemp = $("#today-weather-temp");
var todayWeatherWind = $("#today-weather-wind");
var todayWeatherHumid = $("#today-weather-humidity");
var forecastContainer = $("#forecast-contain");

var apiKey = "fd14e40bfd6c1460a77a88f01383cf1e";
var dailyURL =
  "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";
var weeklyUrl =
  "https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=";
let savedCities = JSON.parse(localStorage.getItem("savedCities")) || [];

renderCityMenu();

function getCurrentWeather(event) {
  event.preventDefault();
  let city = stringToProperCase(userInput.val());
  if (!savedCities.includes(city)) {
    savedCities.push(city);
  }
  localStorage.setItem("savedCities", JSON.stringify(savedCities));
  renderCityMenu();
  currentWeather(city);
  upcomingWeather(city);
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
    todayWeatherIcon.attr(
      "src",
      "https://openweathermap.org/img/wn/" + icon + ".png"
    );
    cWIcon.append(todayWeatherIcon);
  });
}

citySearchBtn.on("click", getCurrentWeather);

function upcomingWeather(city) {
  forecastContainer.empty();
  $.ajax({
    url: weeklyUrl + city + "&appid=" + apiKey,
    method: "GET",
  }).then(function (data) {
    console.log(data);
    data.list.forEach((value) => {
      if (!value.dt_txt.includes("15:00:00")) {
        return;
      }

      var card = $('<div class="card">');
      var forecastIcon = $('<img class ="card-img-top" alt="weather icon">');
      var cardBody = $('<div class="card-body">');
      var date = $('<h5 class="card-title">');
      var forecastTemp = $('<p class="card-text">');
      var forecastWind = $('<p class="card-text">');
      var forecastHumid = $('<p class="card-text">');
      var iconName = value.weather[0].icon;

      forecastContainer.append(card);
      forecastIcon.attr(
        "src",
        "https://openweathermap.org/img/wn/" + iconName + ".png"
      );
      card.append(forecastIcon);
      card.append(cardBody);
      date.text(dayjs(value.dt_txt).format("dddd, MMMM D"));
      cardBody.append(date);
      forecastTemp.text("Temp: " + value.main.temp + "°");
      cardBody.append(forecastTemp);
      forecastWind.text("Wind Speed: " + value.wind.speed);
      cardBody.append(forecastWind);
      forecastHumid.text("Humidity: " + value.main.humidity + "%");
      cardBody.append(forecastHumid);

      
    });
  });
}
// upcomingWeather("");
// Card Template

//use the .empty method to clear out the cards

function renderCityMenu() {
  cityDropdownEl.empty();
  savedCities.forEach((value) => {
    value = stringToProperCase(value);
    const cityItemEl = $("<li>");
    const cityLinkEl = $('<a class="dropdown-item" href="#">');
    cityLinkEl.text(value);
    cityLinkEl.on("click", handleSavedCitySelect);
    cityItemEl.append(cityLinkEl);
    cityDropdownEl.append(cityItemEl);
  });
}

function handleSavedCitySelect(event) {
  let city = $(event.target).text();
  currentWeather(city);
  //upcomingWeather(city);
}

function stringToProperCase(string) {
  let words = string.split(" ");
  let result = "";
  words.forEach((value) => {
    value = value.toLowerCase();
    value = value.charAt(0).toUpperCase() + value.substring(1);
    result += value + " ";
  });
  // console.log(result);
  return result.trim();
}
