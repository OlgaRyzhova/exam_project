"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cities = exports.initCity = exports.baseImg = void 0;
var baseImg = 'https://www.weatherbit.io/static/img/icons/';
exports.baseImg = baseImg;
var initCity = {
  city: 'Kyiv',
  country: 'Ukraine',
  key: 'ua'
};
exports.initCity = initCity;
var cities = [{
  city: 'Abu Dhabi',
  country: 'United Arab Emirates',
  key: 'ae'
}, {
  city: 'Amsterdam',
  country: 'Netherlands',
  key: 'nl'
}, {
  city: 'Ankara',
  country: 'Turkey',
  key: 'tr'
}, {
  city: 'Athens',
  country: 'Greece',
  key: 'gr'
}, {
  city: 'Atlanta',
  country: 'United States',
  key: 'us'
}, {
  city: 'Bangkok',
  country: 'Thailand',
  key: 'th'
}, {
  city: 'Barcelona',
  country: 'Spain',
  key: 'es'
}, {
  city: 'Beijing',
  country: 'China',
  key: 'cn'
}, {
  city: 'Belgrade',
  country: 'Serbia',
  key: 'cs'
}, {
  city: 'Berlin',
  country: 'Germany',
  key: 'de'
}, {
  city: 'Bern',
  country: 'Switzerland',
  key: 'ch'
}, {
  city: 'Birmingham',
  country: 'England',
  key: 'gb'
}, {
  city: 'Bogota',
  country: 'Colombia',
  key: 'co'
}, {
  city: 'Boston',
  country: 'United States',
  key: 'us'
}, {
  city: 'Brasilia',
  country: 'Brazil',
  key: 'br'
}, {
  city: 'Bratislava',
  country: 'Slovakia',
  key: 'sk'
}, {
  city: 'Brussels',
  country: 'Belgium',
  key: 'be'
}, {
  city: 'Bucharest',
  country: 'Romania',
  key: 'ro'
}, {
  city: 'Budapest',
  country: 'Hungary',
  key: 'hu'
}, {
  city: 'Buenos Aires',
  country: ' Argentina',
  key: 'ar'
}, {
  city: 'Cairo',
  country: 'Egypt',
  key: 'eg'
}, {
  city: 'Canberra',
  country: 'Australia',
  key: 'au'
}, {
  city: 'Cape Town',
  country: 'South Africa',
  key: 'za'
}, {
  city: 'Caracas',
  country: 'Venezuela',
  key: 've'
}, {
  city: 'Cardiff',
  country: 'Wales',
  key: 'gb wls'
}, {
  city: 'Chicago',
  country: 'United States',
  key: 'us'
}, {
  city: 'Cologne',
  country: 'Germany',
  key: 'de'
}, {
  city: 'Copenhagen',
  country: 'Denmark',
  key: 'dk'
}, {
  city: 'Dakar',
  country: 'Senegal',
  key: 'sn'
}, {
  city: 'Dublin',
  country: 'Ireland',
  key: 'ie'
}, {
  city: 'Edinburgh',
  country: 'Scotland',
  key: 'gb'
}, {
  city: 'Frankfurt',
  country: 'Germany',
  key: 'de'
}, {
  city: 'Glasgow',
  country: 'Scotland',
  key: 'gb'
}, {
  city: 'Hamburg',
  country: 'Germany',
  key: 'de'
}, {
  city: 'Hanoi',
  country: 'Vietnam',
  key: 'vn'
}, {
  city: 'Havana',
  country: 'Cuba',
  key: 'cu'
}, {
  city: 'Helsinki',
  country: 'Finland',
  key: 'fi'
}, {
  city: 'Houston',
  country: 'United States',
  key: 'us'
}, {
  city: 'Istanbul',
  country: 'Turkey',
  key: 'tr'
}, {
  city: 'Jakarta',
  country: 'Indonesia',
  key: 'id'
}, {
  city: 'Kyiv',
  country: 'Ukraine',
  key: 'ua'
}, {
  city: 'Kingston',
  country: 'Jamaica',
  key: 'jm'
}, {
  city: 'Kyoto',
  country: 'Japan',
  key: 'jp'
}, {
  city: 'Las Vegas',
  country: 'United States',
  key: 'us'
}, {
  city: 'Lima',
  country: 'Peru',
  key: 'pe'
}, {
  city: 'Lisbon',
  country: 'Portugal',
  key: 'pt'
}, {
  city: 'London',
  country: 'England',
  key: 'gb'
}, {
  city: 'Los Angeles',
  country: 'United States',
  key: 'us'
}, {
  city: 'Lyon',
  country: 'France',
  key: 'fr'
}, {
  city: 'Madrid',
  country: 'Spain',
  key: 'es'
}, {
  city: 'Manchester',
  country: 'England',
  key: 'gb'
}, {
  city: 'Marseille',
  country: 'France',
  key: 'fr'
}, {
  city: 'Mexico City',
  country: 'Mexico',
  key: 'mx'
}, {
  city: 'Miami',
  country: 'United States',
  key: 'us'
}, {
  city: 'Milan',
  country: 'Italy',
  key: 'it'
}, {
  city: 'Monaco',
  country: 'Monaco',
  key: 'mc'
}, {
  city: 'Montevideo',
  country: 'Uruguay',
  key: 'uy'
}, {
  city: 'Montreal',
  country: 'Canada',
  key: 'ca'
}, {
  city: 'Moscow',
  country: 'russia',
  key: 'ru'
}, {
  city: 'Munich',
  country: 'Germany',
  key: 'de'
}, {
  city: 'New Delhi',
  country: 'India',
  key: 'in'
}, {
  city: 'New York',
  country: 'United States',
  key: 'us'
}, {
  city: 'Nairobi',
  country: 'Kenya',
  key: 'ke'
}, {
  city: 'Nicosia',
  country: 'Cypruss',
  key: 'cy'
}, {
  city: 'Osaka',
  country: 'Japan',
  key: 'jp'
}, {
  city: 'Oslo',
  country: 'Norway',
  key: 'no'
}, {
  city: 'Ottawa',
  country: 'Canada',
  key: 'ca'
}, {
  city: 'Paris',
  country: 'France',
  key: 'fr'
}, {
  city: 'Philadelphia',
  country: 'United States',
  key: 'us'
}, {
  city: 'Phoenix',
  country: 'United States',
  key: 'us'
}, {
  city: 'Porto',
  country: 'Portugal',
  key: 'pt'
}, {
  city: 'Prague',
  country: 'Czech Republic',
  key: 'cz'
}, {
  city: 'Quito',
  country: 'Ecuador',
  key: 'ec'
}, {
  city: 'Rabat',
  country: 'Morocco',
  key: 'ma'
}, {
  city: 'Reykjavik',
  country: 'Iceland',
  key: 'is'
}, {
  city: 'Rio de Janeiro',
  country: 'Brazil',
  key: 'br'
}, {
  city: 'Roma',
  country: 'Italy',
  key: 'it'
}, {
  city: 'Rotterdam',
  country: 'Netherlands',
  key: 'nl'
}, {
  city: 'Santiago',
  country: 'Chile',
  key: 'cl'
}, {
  city: 'Saint Petersburg',
  country: 'Russia',
  key: 'ru'
}, {
  city: 'San Francisco',
  country: 'United States',
  key: 'us'
}, {
  city: 'Santo Domingo',
  country: 'Dominican Republic',
  key: 'do'
}, {
  city: 'Sao Paulo',
  country: 'Brazil',
  key: 'br'
}, {
  city: 'Sarajevo',
  country: 'Bosnia and Herzegovina',
  key: 'ba'
}, {
  city: 'Seoul',
  country: 'South Korea',
  key: 'kr'
}, {
  city: 'Sidney',
  country: 'Australia',
  key: 'au'
}, {
  city: 'Sofia',
  country: 'Bulgaria',
  key: 'bg'
}, {
  city: 'Stockholm',
  country: 'Sweden',
  key: 'se'
}, {
  city: 'Tallinn',
  country: 'Estonia',
  key: 'ee'
}, {
  city: 'Tbilisi',
  country: 'Georgia',
  key: 'ge'
}, {
  city: 'Tel Aviv',
  country: 'Israel',
  key: 'il'
}, {
  city: 'Tirana',
  country: 'Albania',
  key: 'al'
}, {
  city: 'Tokyo',
  country: 'Japan',
  key: 'jp'
}, {
  city: 'Toronto',
  country: 'Canada',
  key: 'ca'
}, {
  city: 'Turin',
  country: 'Italy',
  key: 'it'
}, {
  city: 'Utrecht',
  country: 'Netherlands',
  key: 'nl'
}, {
  city: 'Valencia',
  country: 'Spain',
  key: 'es'
}, {
  city: 'Vancouver',
  country: 'Canada',
  key: 'ca'
}, {
  city: 'Vienna',
  country: 'Austria',
  key: 'at'
}, {
  city: 'Vinius',
  country: 'Lithuania',
  key: 'lt'
}, {
  city: 'Warsaw',
  country: 'Poland',
  key: 'pl'
}, {
  city: 'Washington D.C.',
  country: 'United States',
  key: 'us'
}, {
  city: 'Zagreb',
  country: 'Croatia',
  key: 'hr'
}];
exports.cities = cities;