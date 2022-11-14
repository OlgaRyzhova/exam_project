<template>
  <div :class="weather_img"></div>
</template>

<script>
export default {
  name: "Background",
  props: {
    currentBackground: {
      default: "",
      type: String,
    },
  },
  data() {
    return {
      backgroundImage: "clear",
    };
  },
  computed: {
    weather_img: function () {
      switch (this.currentBackground.toLowerCase()) {
        case "snow":
          return "bg_img bg_snow";
        case "rain":
          return "bg_img bg_rain";
        case "clouds":
          return "bg_img bg_clouds";
        case "clear":
          return "bg_img bg_clear";
      }
    },
  },
};
</script>

<style scoped lang="scss">
  .bg_img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 100%;
    height: 100%;
    margin: 0 auto;
  }
  .bg_clear {
    background-image: url("../assets/images/sunny.jpg");
  }
  .bg_snow {
    background-image: url("../assets/images/snow.jpeg");
  }
  .bg_rain {
    background-image: url("../assets/images/rainy.jpg");
  }
  .bg_clouds {
    background-image: url("../assets/images/cloud.jpg");
  }
</style>
