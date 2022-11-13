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
        }
    },
    data() {
        return {
            backgroundImage: "clear",
        };
    },
    computed: {
        weather_img: function () {
            switch(this.currentBackground.toLowerCase()) {
                case 'snow':
                    return 'bg_snow';
                case 'rain':
                    return 'bg_rain';
                case 'clouds':
                    return 'bg_clouds';
                case 'clear':
                    return 'bg_clear';
                // default:
                //     return 'bg_default';
            }       
        }
    },
}
</script>

<style scoped lang="scss">
.weather_img{
    width: auto;
    height: 98vh;
    top: 0;
    left: 0;
}
.bg_clear{
    background-image: url('../assets/images/sunny.jpg'); 
}
.bg_snow{
    background-image: url('../assets/images/snow.jpeg'); 
}
.bg_rain{
    background-image: url('../assets/images/rainy.jpg'); 
}
.bg_clouds{
    background-image: url('../assets/images/cloud.jpg'); 
}
// .bg_default{
//     background-image: url('../assets/images/default.jpg'); 
// }
</style>