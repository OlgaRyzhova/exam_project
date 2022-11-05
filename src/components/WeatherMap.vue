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
          <p class="city_name">{{ weather.city.name }}</p>
          <p class="country_name">{{ weather.city.country}}</p>
        </div>
        <div class="temp">
          <h1>{{ weather.temp }}&deg;C</h1>
        </div>
        <div class="description">
          <p>{{ weather.description }}</p>
        </div>
      </div>
      <div class="forecast">
        <div class="daily">
          <p class="bold">{{ weather.cnt }}</p>
          <p>Forecast</p>
        </div>
      </div>
      <!-- <weather-img-show :weather="weather" :lst-id="listId"/> -->
      <div class="bottom">
        <div class="feels">
          <p class="bold">{{ weather.feels_like }}&deg;C</p>
          <p>Feels Like</p>
        </div>
        <div class="humidity">
          <p class="bold">{{ weather.humidity }}%</p>
          <p>Humidity</p>
        </div>
        <div class="wind">
          <p class="bold">{{weather.speed}} MPH</p>
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
        // cityName: "",
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
  // components: {
  //   weatherImgShow,
  // }
  methods: {
    fetchWeather(e) {
      if (e.key == "Enter") {
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${this.findLocation}&cnt=10&units=metric&lang=en,ua&appid=${this.api_key}`
          // https://api.openweathermap.org/data/2.5/weather?q=${this.findLocation}&cnt=10&units=metric&APPID=${this.api_key}`
        )
          .then((res) => {
            return res.json();
          })
          .then(this.setResults);
          this.findLocation = ''
      }
    },
    setResults(results) {
      this.weather = results;
      // this.weather.cityName = weather.name;
      // this.weather.country = weather.sys.country;
      // this.weather.temperature = weather.main.temp;
      // this.weather.description = data.weather[0].description;
      // this.weather.feelsLike = Math.round(data.main.feels_like);
      // this.weather.humidity = Math.round(data.main.humidity);
    }
  },
};
</script>

<style scoped lang="scss" src="./style.scss"></style>
