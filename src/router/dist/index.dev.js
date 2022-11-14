"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _HomeView = _interopRequireDefault(require("../views/HomeView.vue"));

var _WeatherMap = _interopRequireDefault(require("../components/WeatherMap/WeatherMap.vue"));

var _Forecast = _interopRequireDefault(require("../components/Forecast.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  name: 'home',
  component: _HomeView["default"]
}, {
  path: '/weather_app',
  name: 'WeatherMap',
  component: _WeatherMap["default"]
}, {
  path: '/:id',
  name: 'Forecast',
  component: _Forecast["default"]
}];
var router = new _vueRouter["default"]({
  routes: routes
});
var _default = router;
exports["default"] = _default;