<template>
  <div>
    Hello
    <ul class="forecast">
      <li class="day" v-for="day in daily">
        <div>{{ dayOfWeek(day.time * 1000, store.weather.timezone) }}</div>
        <strong>{{ Math.round(dailyTemp) }}&deg;C</strong>
        <div>{{ Math.round(dailyTemp) }}&deg;C</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Forecast",
  computed: {
    store() {
      return this.$store.state;
    },
    daily() {
      return this.$store.state.weather.daily.data;
    },
    dailyTemp() {
      if (this.weather.list) {
        return Math.round(this.weather.list[1].main.temp);
      }
      return 0;
    },
  },
  methods: {
    dayOfWeek(time, zone) {
      return moment(time).tz(zone).format("ddd");
    },
  },
};
</script>

<style lang="scss" scoped>
.forecast {
  border-top: 1px solid #dedede;
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;
  padding-top: 16px;
  li {
    flex: 1;
  }
  .day {
    font-size: 16px;
    line-height: 1.6;
    text-align: center;
  }
  .icon {
    height: 32px;
    margin: 0 auto;
    width: 32px;
  }
}
</style>
