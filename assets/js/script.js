var APIkey = "7f6f2d99953fc081fdbbf025eed2d11f";
var cityName = "Denver";
var APIkeyForecast = "0e0e192396f34de1bf07cb631356eb62";
// requestUrl =
//   "https://api.openweathermap.org/data/2.5/weather?q=" +
//   cityName +
//   "&appid=" +
//   APIkey;
// console.log(requestUrl);

var requestUrl5 =
  "https://api.weatherbit.io/v2.0/forecast/daily?city=" +
  cityName +
  "&key=" +
  APIkeyForecast;

console.log(requestUrl5);

fetch(requestUrl5)
  .then(function (res) {
    console.log(res);
    return res.json();
  })
  .then(function (data) {
    console.log(data);
    console.log();
  });

// fetch(requestUrl)
//   .then(function (res) {
//     console.log(res);
//     return res.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     console.log();
//   });

//data.wind.speed; // for Wind speed in MPH
// data.main.temp// temp in kelvin, needed to change to fahrenheit
//data.main.humidity// humidity in %
