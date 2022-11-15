<template>
  <div class="weather_app">
    <Background :currentBackground="currentBackground" />
    <div class="name_app">weather app</div>
    <div class="search" v-on:submit.prevent="fetchWeather">
      <input
        type="text"
        class="input"
        v-model="findLocation"
        @keypress="fetchWeather"
        placeholder="Enter Location"
      />
      <p class="error_city" v-if="cityFound">City is not found</p>
    </div>
    <div class="container">
      <div class="header">
        <div v-if="weather.city" class="location">
          <p class="country_name">{{ weather.city.name }}, {{ weather.city.country }}</p>
          <p class="date">{{ dateBuilder() }}</p>
        </div>
        <div class="temp">
          <h1>{{ currentTemp }}&deg;C</h1>
        </div>
        <div class="description">
          <p>{{ currentDescription }}</p>
        </div>
      </div>
      <div class="main">
        <div class="feels">
          <p class="bold">{{ currentFeelsLike }}&deg;C</p>
          <p>Feels Like</p>
        </div>
        <div class="humidity">
          <p class="bold">{{ currentHumidity }}%</p>
          <p>Humidity</p>
        </div>
        <div class="wind">
          <p class="bold">{{ currentWindSpeed }} m/s</p>
          <p>Wind Speed</p>
        </div>
      </div>
      <div class="forecast_container" v-if="weather.list" @click="dataSearchForecast">
        <Forecast :weather-data="weather" />
      </div>
    </div>
  </div>
</template>

<script>
import Forecast from "../Forecast.vue";
import Background from "../Background.vue";

export default {
  name: "WeatherMap",
  props: {
    msg: String,
  },
  components: {
    Forecast,
    Background,
  },
  data() {
    return {
      findLocation: "",
      weather: {},
      api_key: "441c85811b1cad6112e54a6e91f88d32",
      cityFound: false,
      visible: false,
    };
  },
  methods: {
    async dataSearchForecast() {
      const res = await fetch(URL + this.searchForecast);
      const forecast = await res.json();
      this.forecast = forecast;
    },
    fetchWeather(e) {
      if (e.key == "Enter") {
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${this.findLocation}&cnt=5&units=metric&lang=en,ua&APPID=${this.api_key}`
        )
          .then((res) => {
            return res.json();
          })
          .then(this.setResults);
        this.findLocation = "";
      }
      try {
        const mainWeather = data.weather[0].main;
        this.visible = true;
          this.cityFound = false;
        } catch (error) {
          console.log(error);
          this.cityFound = true;
          this.visible = false;
        }
    },
    setResults(results) {
      this.weather = results;
    },
    dateBuilder() {
      let d = new Date(),
        months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "DEcember",
        ],
        days = [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        day = days[d.getDay()],
        date = d.getDate(),
        month = months[d.getMonth()];

      return `${day} ${date} ${month}`;
    },
  },
  computed: {
    currentBackground() {
      if (this.weather.list) {
        return this.weather.list[0].weather[0].main;
      } else {
        return "";
      }
    },
    currentTemp() {
      if (this.weather.list) {
        return Math.round(this.weather.list[0].main.temp);
      }
      return 0;
    },
    currentDescription() {
      if (this.weather.list) {
        return this.weather.list[0].weather[0].main;
      }
    },
    currentFeelsLike() {
      if (this.weather.list) {
        return Math.round(this.weather.list[0].main.feels_like);
      }
      return 0;
    },
    currentHumidity() {
      if (this.weather.list) {
        return this.weather.list[0].main.humidity;
      }
      return 0;
    },
    currentWindSpeed() {
      if (this.weather.list) {
        return Math.round(this.weather.list[0].wind.speed);
      }
      return 0;
    },
  },
};
</script>

<style scoped lang="scss" src="./style/style.scss"></style>
