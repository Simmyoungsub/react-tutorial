import data from './current.json';
import currentWeather from './current-weather.json';
import forecast from './forecast.json';
import axios from 'axios';

export default {
    getCurrentWeather: function() {
        // return new Promise((resolve, reject) => {
        //     try {
        //         const r = !Array.isArray(currentWeather) ? [currentWeather] : currentWeather;
        //         resolve(r);
        //     }catch (e) {
        //         reject({});
        //     }
        // });
        return axios.get('http://localhost:3000/weather').then((res) => {
            const data = res.data;

            if (!Array.isArray(data)) {
                return [data];
            }
            
            return data;
        });
    },
    getForcast: function() {
        return new Promise((resolve, reject) => {
            try {
                resolve(forecast);
            }catch (e) {
                reject({});
            }
        });
    }
};