var APIkey = "7f6f2d99953fc081fdbbf025eed2d11f";
var APIkeyForecast = "0e0e192396f34de1bf07cb631356eb62";

var cityName = document.querySelector("#cityName");
index = 0;
var date = document.querySelector("#displayDate");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");
var humidity = document.querySelector("#humidity");
var uv = document.querySelector("#uv");
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

var searchBtn = document.querySelector("#searchBtn");
var searched1 = document.querySelector("#searched1");
var searched2 = document.querySelector("#searched2");
var searched3 = document.querySelector("#searched3");
var searched4 = document.querySelector("#searched4");
var searched5 = document.querySelector("#searched5");
//Array that stores search history buttons with ids
var searchHistory = [searched1, searched2, searched3, searched4, searched5];
//Array of strings to use as storage in local storage
var storage = ["city1", "city2", "city3", "city4", "city5"];

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

        //sets uv index color
        function colors() {
          if (data.data[i].uv < 3) {
            uv.setAttribute("style", "background-color: green");
          } else if (data.data[i].uv < 7 && data.data[i].uv > 3) {
            uv.setAttribute("style", "background-color: yellow");
          } else if (data.data[i].uv > 7) {
            uv.setAttribute("style", "background-color: red");
          } else return;
        }
        colors();

        date.textContent = link + "(" + data.data[i].datetime + ")";
        temp.textContent = "TEMP: " + data.data[i].temp + "℉";
        wind.textContent = "WIND: " + data.data[i].wind_spd + " MPH";
        humidity.textContent = "HUMIDITY: " + data.data[i].rh + "%";
        uv.textContent = "UV index: " + data.data[i].uv;

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
        if (cityName.value != "") {
          localStorage.setItem(storage[index], JSON.stringify(cityName.value));
          searchHistory[index].textContent = cityName.value;
        }
      }
      if (index < 5) {
        history();

        cityName.value = "";

        index++;
        // console.log(index);
      } else if (index == 5) {
        index = 0;
        history();

        cityName.value = "";

        index++;
      }
    });
}

document.querySelector(".list-group").addEventListener(
  "click",
  function (e) {
    if (e.target.textContent != "") {
      get(e.target.textContent);
    } else return;
  },
  notDisappear
);
function notDisappear() {
  display();
}
//Retrieve stored cities and display them in search history
var lastCity1 = JSON.parse(localStorage.getItem(storage[0]));
var lastCity2 = JSON.parse(localStorage.getItem(storage[1]));
var lastCity3 = JSON.parse(localStorage.getItem(storage[2]));
var lastCity4 = JSON.parse(localStorage.getItem(storage[3]));
var lastCity5 = JSON.parse(localStorage.getItem(storage[4]));
function display() {
  searched1.textContent = lastCity1;

  searched2.textContent = lastCity2;

  searched3.textContent = lastCity3;

  searched4.textContent = lastCity4;

  searched5.textContent = lastCity5;
}

display();

// console.log("city 1 is - " + lastCity1);
// console.log("city 2 is - " + lastCity2);
// console.log("city 3 is - " + lastCity3);
// console.log("city 4 is - " + lastCity4);
// console.log("city 5 is - " + lastCity5);
