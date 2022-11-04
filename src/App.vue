<template>
  <div id="app">
    <WeatherMap />
    <router-view />
  </div>
</template>

<script>
import WeatherMap from "./components/WeatherMap.vue";

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
  // text-align: center;
  color: #ffffff;
}

// #app.snow {
//   background-image: url(./assets/snow.jpg);
// }
// // nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
