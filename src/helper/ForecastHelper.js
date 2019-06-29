import { Weather } from "../models/Weather";
import moment from 'moment';

export class ForecastHelper {

}

ForecastHelper.mapWeather = function(param) {
    return {
        date: moment(Number(param.dt) * 1000).format('MM-DD'),
        weather: new Weather({
            temp: param.temp.day,
            pressure: param.pressure,
            humidity: param.humidity,
            wind_speed: param.speed,
            wind_deg: param.deg,
            cloud: param.clouds,
            state: param.weather[0].main
        })
    };
}