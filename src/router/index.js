import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WeatherMap from '../components/WeatherMap/WeatherMap.vue'
import Forecast from '../components/Forecast.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/weather_app',
    name: 'WeatherMap',
    component: WeatherMap
  },
  {
    path: '/:id',
    name: 'Forecast',
    component: Forecast
  }
]

const router = new VueRouter({
  routes
})

export default router
