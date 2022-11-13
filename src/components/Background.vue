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
            backgroundImage: "clear, snow, rain",
        };
    },
    computed: {
        weather_img: function () {
            switch(this.currentBackground.toLowerCase()) {
                case 'snow':
                    return 'bg-snow';
                case 'rain':
                    return 'bg-rain';
                case 'clouds':
                    return 'bg-clouds';
                case 'clear':
                    return 'bg-clear';
                default:
                    return 'bg-default';
            }       
        }
    },
}
</script>

<style scoped lang="scss">
.bg-clear{
    background-image: url('../assets/images/sunny.jpg'); 
}
.bg-snow{
    background-image: url('../assets/images/snow.jpeg'); 
}
.bg-rainy{
    background-image: url('../assets/images/rainy.jpg'); 
}
.bg-clouds{
    background-image: url('../assets/images/cloud.jpg'); 
}
// .bg-default{
//     background-image: url('../assets/images/cloud.jpg'); 
// }
</style>