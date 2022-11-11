// <template>
//   <div :class="{background_image}"></div>
// </template>

// <script>
// export default {
//     name: "Background",
//     props: {
//     msg: String,
//     },
//     data() {
//         return {
//             backgroundImage: "cloud",
//         };
//     },
//     computed: {
//         background_image : function () {

//             switch(this.backgroundImage) {
//                 case 'snow':
//                         return 'bg-snow';
//                 case 'rainy':
//                         return 'bg-rainy';
//                 case 'sunny':
//                         return 'bg-sunny';
//                 default:
//                         return 'bg-default';
//                 }       
//         }
//     },
//     methods: {
//         apiCall() {
//             //api call update background image according to the response
//             this.backgroundImage = response ; // response contains sunny text
            
//         }
//     },
// }
// </script>

// <style scoped lang="scss">

// .bg-sunny{
//     background-image: url('../assets/images/sunny.jpg'); 
// }

// .bg-snow{
//     background-image: url('../assets/images/snow.jpeg'); 
// }
// .bg-rainy{
//     background-image: url('../assets/images/rainy.jpg'); 
// }
// /* // .bg-default{
// //     background-image: url('default.jpg'); 
// // } */
// </style>