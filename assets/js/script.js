var APIkey = "7f6f2d99953fc081fdbbf025eed2d11f";
var APIkeyForecast = "0e0e192396f34de1bf07cb631356eb62";
var searchBtn = document.querySelector("#searchBtn");
var searched1 = document.querySelector("#searched1");
var searched2 = document.querySelector("#searched2");
var searched3 = document.querySelector("#searched3");
var searched4 = document.querySelector("#searched4");
var searched5 = document.querySelector("#searched5");
var searchHistory = [searched1, searched2, searched3, searched4, searched5];
var storage = ["city1", "city2", "city3", "city4", "city5"];

var cityName = document.querySelector("#cityName");
var index = 0;

var date = document.querySelector("#displayDate");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");
var humidity = document.querySelector("#humidity");
// declared variables for 5 days "DATE" forecasts
var date1 = document.querySelector("#dateForecast1");
var date2 = document.querySelector("#dateForecast2");
var date3 = document.querySelector("#dateForecast3");
var date4 = document.querySelector("#dateForecast4");
var date5 = document.querySelector("#dateForecast5");
// declared variables for 5 days "TEMP" forecasts
var temp1 = document.querySelector("#tempForecast1");
var temp2 = document.querySelector("#tempForecast2");
var temp3 = document.querySelector("#tempForecast3");
var temp4 = document.querySelector("#tempForecast4");
var temp5 = document.querySelector("#tempForecast5");
// declared variables for 5 days "WIND" forecasts
var wind1 = document.querySelector("#windForecast1");
var wind2 = document.querySelector("#windForecast2");
var wind3 = document.querySelector("#windForecast3");
var wind4 = document.querySelector("#windForecast4");
var wind5 = document.querySelector("#windForecast5");
// declared variables for 5 days "HUMIDITY" forecasts
var humidity1 = document.querySelector("#humidityForecast1");
var humidity2 = document.querySelector("#humidityForecast2");
var humidity3 = document.querySelector("#humidityForecast3");
var humidity4 = document.querySelector("#humidityForecast4");
var humidity5 = document.querySelector("#humidityForecast5");
//   //   console.log(input[0].toUpperCase());
// }
searchBtn.addEventListener("click", function () {
  get(cityName.value);
});

function get(link) {
  var requestUrl5 = `https://api.weatherbit.io/v2.0/forecast/daily?days=5&units=I&city=${link}&key=${APIkeyForecast}`;
  fetch(requestUrl5)
    .then(function (res) {
      console.log(res);
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      function text() {
        var i = 0;

        date.textContent = link + "(" + data.data[i].datetime + ")";
        temp.textContent = "TEMP: " + data.data[i].temp + "℉";
        wind.textContent = "WIND: " + data.data[i].wind_spd + " MPH";
        humidity.textContent = "HUMIDITY: " + data.data[i].rh + "%";

        // -------Forecasts-----------------
        date1.textContent = "(" + data.data[i].datetime + ")";
        temp1.textContent = "TEMP: " + data.data[i].temp + "℉";
        wind1.textContent = "WIND: " + data.data[i].wind_spd + " MPH";
        humidity1.textContent = "HUMIDITY: " + data.data[i].rh + "%";
        i++;

        // -----------------
        date2.textContent = "(" + data.data[i].datetime + ")";
        temp2.textContent = "TEMP: " + data.data[i].temp + "℉";
        wind2.textContent = "WIND: " + data.data[i].wind_spd + " MPH";
        humidity2.textContent = "HUMIDITY: " + data.data[i].rh + "%";
        i++;

        // --------------
        date3.textContent = "(" + data.data[i].datetime + ")";
        temp3.textContent = "TEMP: " + data.data[i].temp + "℉";
        wind3.textContent = "WIND: " + data.data[i].wind_spd + " MPH";
        humidity3.textContent = "HUMIDITY: " + data.data[i].rh + "%";
        i++;

        // -----------------
        date4.textContent = "(" + data.data[i].datetime + ")";
        temp4.textContent = "TEMP: " + data.data[i].temp + "℉";
        wind4.textContent = "WIND: " + data.data[i].wind_spd + " MPH";
        humidity4.textContent = "HUMIDITY: " + data.data[i].rh + "%";
        i++;

        // -----------------
        date5.textContent = "(" + data.data[i].datetime + ")";
        temp5.textContent = "TEMP: " + data.data[i].temp + "℉";
        wind5.textContent = "WIND: " + data.data[i].wind_spd + " MPH";
        humidity5.textContent = "HUMIDITY: " + data.data[i].rh + "%";
      }
      text();

      //This function displays search history and store cities input into local storage
      function history() {
        searchHistory[index].textContent = cityName.value;
        localStorage.setItem(
          storage[index],
          JSON.stringify(searchHistory[index].textContent)
        );
      }
      if (index < 5) {
        history();
        index++;
        // console.log(index);
      } else if (index == 5) {
        index = 0;
        history();
        index++;
      }

      cityName.value = "";
    });
}

document.querySelector(".list-group").addEventListener("click", function (e) {
  get(e.target.textContent);
});
// when any history button is clicked

//   date.textContent = cityName.value + "(" + data.data[i].datetime + ")";
//   temp.textContent = "TEMP: " + data.data[i].temp + "℉";
//   wind.textContent = "WIND: " + data.data[i].wind_spd + " MPH";
//   humidity.textContent = "HUMIDITY: " + data.data[i].rh + "%";

// clicked();
// searched1.addEventListener("click", test);

// var lastCity1 = JSON.parse(localStorage.getItem("city1"));
// searched1.textContent = lastCity1;

// function store2() {
//   localStorage.setItem("city2", JSON.stringify(cityName.value));
// }
// var lastCity2 = JSON.parse(localStorage.getItem("city2"));
// searched2.textContent = lastCity2;

//data.wind.speed; // for Wind speed in MPH
// data.main.temp// temp in kelvin, needed to change to fahrenheit
//data.main.humidity// humidity in %

// ? -----------------------info for 5 days forecasts-------
// data.data[i].datetime; // for date
// data.data[i].temp // for temp
//data.data[i].wind_spd) // for wind
// data.data[i].rh // humidity
// data.data[i].uv //uv index
