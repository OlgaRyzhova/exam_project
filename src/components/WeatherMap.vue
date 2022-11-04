<template>
  <div class="bg_image">
    <div class="search" v-on:submit.prevent="fetchWeather">
      <input
        type="text"
        class="input"
        v-model="findLocation"
        @keypress="fetchWeather"
        placeholder="Enter Location"
      />
    </div>
    <div class="container">
      <div class="top">
        <div class="location">
          <p class="city_name">{{ weather.cityName }}</p>
          <p class="country_name">{{ weather.country }}</p>
        </div>
        <div class="temp">
          <h1>{{ weather.temperature }}&deg;C</h1>
        </div>
        <div class="weather">
          <p class="description">{{ weather.description }}</p>
        </div>
      </div>
      <div class="bottom">
        <div class="feels">
          <p class="bold">{{ weather.feelsLike }}&deg;C</p>
          <p>Feels Like</p>
        </div>
        <div class="humidity">
          <p class="bold">{{ weather.humidity }}%</p>
          <p>Humidity</p>
        </div>
        <div class="wind">
          <p class="bold">{{weather.windSpeed}} MPH</p>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherMap",
  props: {
    msg: String,
  },
  data() {
    return {
      findLocation: "",
      weather: {
        // cityName: "London",
        // country: "UK",
        // temperature: 12,
        // description: "Snow",
        // feelsLike: "20",
        // humidity: "55",
        // windSpeed: "12"
      },
      api_key: "441c85811b1cad6112e54a6e91f88d32",
    };
  },
  methods: {
    fetchWeather(e) {
      if (e.key == "Enter") {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.findLocation}&units=metric&APPID=${this.api_key}`
        )
          .then((res) => {
            return res.json();
          })
          .then(this.setResults);
      }
    },
    setResults(results) {
      this.weather = results;
      // this.weather.cityName = data.name;
      // this.weather.country = data.sys.country;
      // this.weather.temperature = Math.round(data.main.temp);
      // this.weather.description = data.weather[0].description;
      // this.weather.feelsLike = Math.round(data.main.feels_like);
      // this.weather.humidity = Math.round(data.main.humidity);
    }
  },
};
</script>

<style scoped lang="scss" src="./style.scss"></style>
