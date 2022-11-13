<template>
  <div id="app">
    <div class="bg_image"></div>
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
  font-family: "Outfit", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  // position: relative;
  background: url("./assets/images/default.jpg") no-repeat center center/cover;
  width: auto;
  height: 98vh;
  top: 0;
  left: 0;
  z-index: -1;
}

.bg_image {
  position: absolute;
  background: cover;
  background: rgba(0, 0, 0, 0.1);
  width: auto;
  height: 100vh;
}
</style>
