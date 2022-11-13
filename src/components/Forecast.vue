<template>
  <div id="forecast">
    Forecast for 5 days
        <div v-for="(image, index) in forecastImages" :key="index">
            <p>{{ forecastDays[index] }}</p>
            <p>{{ forecastWeather[index] }}°C</p>
            <p><img :src="getUrl[index]"/></p>
            <p>{{ forecastDetails[index] }}</p>
        </div>
  </div>
</template>

<script>
export default {
    name: "Forecast",
    props: {
        msg: String,
    },
    data() {
        return {
            forecastCount: 5,
        }
    },
    computed: {
       forecastDays() {
        let days = [];
        for (let i = 1; i <= this.forecastCount; i++) {
            days.push(moment().add(i,'days').format("ddd"));
        }
      return days;
    },
    forecastWeather() {
      let temperature = [];
      for (let i = 1; i <= this.forecastCount; i++) {
        temperature.push(Math.round(this.weather.list[i].main.temp));
      }
      return temperature;
    },
    forecastImages() {
      let images = [];
      for (let i = 1; i <= this.forecastCount; i++) {
        images.push(this.weather.list[i].weather[0].icon);
      }
      return images;
    },
    getUrl() {
      let url = [];
      for (let i = 0; i < this.forecastImages.length; i++) {
       url.push('http://openweathermap.org/img/w/' + this.forecastImages[i] + '.png');
      }
      return url;
    },
    forecastDetails() {
      let details = [];
      for (let i = 1; i <= this.forecastCount; i++) {
        details.push(this.weather.list[i].weather[0].main);
      }
      return details;
    }
  },
  setup() {}
};
</script>

<style lang="scss" scoped>
#forecast {
    font-size: 25px;
    border-bottom: 1px solid #dedede;
    display: flex;
    flex-wrap: wrap;
    margin-top: 16px;
    padding-top: 16px;
}
</style>