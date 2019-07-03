import { Weather } from "../models/Weather";
import moment from 'moment';

export class ForecastHelper {

}

ForecastHelper.mapWeather = function(param) {
    return {
        date: param.date,
        weather: new Weather({
            temp: param.weather.temp,
            pressure: param.weather.pressure,
            humidity: param.weather.humidity,
            wind_speed: param.weather.speed,
            wind_deg: param.weather.deg,
            cloud: param.weather.cloud,
            state: param.weather.state
        })
    };
}