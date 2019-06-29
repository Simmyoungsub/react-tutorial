import data from './current.json';
import currentWeather from './current-weather.json';
import forecast from './forecast.json';

export default {
    getCurrentWeather: function() {
        return new Promise((resolve, reject) => {
            try {
                const r = !Array.isArray(currentWeather) ? [currentWeather] : currentWeather;
                resolve(r);
            }catch (e) {
                reject({});
            }
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