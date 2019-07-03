import data from './current.json';
import currentWeather from './current-weather.json';
import forecast from './forecast.json';
import axios from 'axios';

export default {
    getCurrentWeather: function() {
        return axios.get('http://localhost:3000/weather/current').then((res) => {
            const data = res.data;

            if (!Array.isArray(data)) {
                return [data];
            }
            
            return data;
        });
    },
    getForcast: function() {
        return axios.get('http://localhost:3000/weather/forecast').then((res) => {
            const data = res.data;

            if (!Array.isArray(data)) {
                return [data];
            }
            
            return data;
        });
    }
};