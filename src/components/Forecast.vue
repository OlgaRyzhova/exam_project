<template>
    <d="forecast">
    <p class="title">Forecast for 4 days</p>
    <div class="forecast_data">
        <div class="daily" v-for="(image, index) in forecastImages" :key="index">
            <p>{{ forecastDays[index] }}</p>
            <p>{{ forecastWeather[index] }}&deg;C</p>
            <p><img class="icon_weather" :src="getUrl[index]" /></p>
        </div>
        </div>
    </d=>
</template>

<script>
import moment from "moment";

export default {
    name: "Forecast",
    props: {
        weatherData: {
        type: Object,
        default: () => {},
        },
    },
    data() {
        return {
        forecastCount: 4,
        };
    },
    computed: {
    weatherList() {
        if (this.weatherData.list) {
            return this.weatherData.list;
        } else {
            return [];
        }
    },
    forecastDays() {
        let days = [];
        for (let i = 1; i <= this.forecastCount; i++) {
            days.push(moment().add(i, "days").format("ddd"));
        }
        return days;
    },
    forecastWeather() {
        let temperature = [];
        for (let i = 1; i <= this.forecastCount; i++) {
            temperature.push(Math.round(this.weatherList[i]?.main.temp));
        }
        return temperature;
    },
    forecastImages() {
        let images = [];
        for (let i = 1; i <= this.forecastCount; i++) {
            images.push(this.weatherList[i]?.weather[0].icon);
        }
        return images;
    },
    getUrl() {
        let url = [];
        for (let i = 0; i < this.forecastImages.length; i++) {
            url.push("http://openweathermap.org/img/w/" + this.forecastImages[i] + ".png");
        }
        return url;
        },
    },
};
</script>

<style lang="scss" scoped>
    #forecast {
    width: 100%;
    font-size: 25px;
    border-top: 1px solid #dedede;
    display: flex;
    flex-direction: column;
    align-self: center;
    flex-wrap: wrap;
    padding-top: 25px;
    //   margin-bottom: 25px;
    }
    .title {
    width: 100%;
    }
    .forecast_data {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    width: 100%;
    //   max-width: 600px;
    flex-wrap: wrap;
    }
    .daily {
    text-align: center;
    padding: 25px;
    border-radius: 12px;
    background-color: rgba(255, 250, 250, 0.3);
    margin: 10px;
    }
    p {
    width: 50px;
    margin: 0 auto;
    }
    .icon_weather {
    width: 60px;
    height: 60px;
    }

@media screen and (max-width: 630px) {
    #forecast,
    .forecast_data {
        max-width: 550px;
        flex-wrap: wrap;
    }
    .title, p {
        font-size: 22px;
    }
}

@media screen and (max-width: 530px) {
    #forecast,
    .forecast_data {
        max-width: 400px;
        flex-wrap: wrap;
    }
    .titleб, p {
        font-size: 20px;
    }
}
</style>
