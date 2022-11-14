<template>
  <div id="app">
    <WeatherMap />
  </div>
</template>

<script>
import WeatherMap from "./components/WeatherMap/WeatherMap.vue";

export default {
  name: "App",
  components: {
    WeatherMap,
  },
};
</script>

<style scoped lang="scss">
#app {
  height: 100%;
  font-family: "Outfit", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  position: absolute;
  background: url("./assets/images/default.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
}
</style>
