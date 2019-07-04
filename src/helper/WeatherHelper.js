import {Weather} from '../models/Weather';

export class WeatherHelper {

}

WeatherHelper.mapWeather = function (param) {
    return new Weather(
        {
            state: param.weather[0].main,
            temp: param.main.temp,
            temp_max: param.weather.temp_max,
            temp_min: param.weather.temp_min,
            pressure: param.main.pressure,
            humidity: param.main.humidity,
            wind_speed: param.wind.speed,
            wind_deg: param.wind.deg,
            cloud: param.clouds.all
        }
    );
};