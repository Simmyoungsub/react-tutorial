import { Location } from "../models/Location";
import { Weather } from "../models/Weather";
import { LocationWeather } from "../models/LocationWeather";

export class LocationWeatherHelper {
    constructor() {

    }
}

LocationWeatherHelper.mapLocationWeather = function(param) {
    const location = new Location({
        id: param.location.id,
        name: param.location.name,
        country: param.location.country,
        lon: param.location.lon,
        lat: param.location.lat
    });

    const weather = new Weather({
        temp: param.weather.temp,
        temp_max: param.weather.temp_max,
        temp_min: param.weather.temp_min,
        pressure: param.weather.pressure,
        humidity: param.weather.humidity,
        wind_speed: param.weather.speed,
        wind_deg: param.weather.deg,
        cloud: param.weather.cloud,
        state: param.weather.state
    });

    return new LocationWeather({
        timeslice: param.dt,
        location: location,
        weather: weather
    });
};