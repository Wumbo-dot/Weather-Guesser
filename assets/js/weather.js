var weather = {
    apiKey: "8beca8647bce122c7e404374af14b158",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=imperial&appid=" +
          this.apiKey
      )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      var { name } = data;
      var { icon, description } = data.weather[0];
      var { temp, humidity } = data.main;
      var { speed } = data.wind;
      console.log(name, icon, description, temp, humidity, speed);
      document.querySelector(".city").innerText = "The Weather in " + name;
      document.querySelector("#icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText =
        "Description:" + description + "";
      document.querySelector(".temp").innerText = "Temp: " + temp + "°F";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText = "Wind Speed:" + speed + " MPH";
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  document.querySelector(".btn").addEventListener("click", function () {
    weather.search();
  });
  document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      weather.search();
    }
  });
  $(function () {
    $("#datepicker").datepicker();
  });
  
