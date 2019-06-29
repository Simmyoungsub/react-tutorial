import { Location } from "../models/Location";
import { Weather } from "../models/Weather";
import { LocationWeather } from "../models/LocationWeather";

export class Util {
    
}

Util.mapLocationWeather = function(param) {
    const location = new Location({
        id: param.id,
        name: param.name,
        country: param.sys.country,
        lon: param.coord.lon,
        lat: param.coord.lat
    });

    const weather = new Weather({
        temp: param.main.temp,
        pressure: param.main.pressure,
        humidity: param.main.humidity,
        wind_speed: param.wind.speed,
        wind_deg: param.wind.deg,
        cloud: param.clouds.all,
        state: param.weather[0].main
    });

    return new LocationWeather({
        timeslice: param.dt,
        location: location,
        weather: weather
    });
};