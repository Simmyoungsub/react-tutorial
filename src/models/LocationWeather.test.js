import { LocationWeather } from "./LocationWeather";
import currentWeather from '../data/current-weather.json';
import { Weather } from "./Weather";
import {Location} from './Location';

describe('LocationWeather', () => {
    let lw;

    beforeEach(() => {
        console.log(currentWeather);
        const location = new Location({
            id: currentWeather.id,
            name: currentWeather.name,
            country: currentWeather.sys.country,
            lon: currentWeather.coord.lon,
            lat: currentWeather.coord.lat
        });

        const weather = new Weather({
            temp: currentWeather.main.temp,
            pressure: currentWeather.main.pressure,
            humidity: currentWeather.main.humidity,
            wind_speed: currentWeather.wind.speed,
            wind_deg: currentWeather.wind.deg,
            cloud: currentWeather.clouds.all,
            state: currentWeather.weather[0].main
        });

        lw = new LocationWeather({
            timeslice: currentWeather.dt,
            location: location,
            weather: weather
        });
    });

    test('constructor_makeInstance_isDefined', () => {
        expect(lw).toBeDefined();
    });

    test('state_getState_isHaze', () => {
        expect(lw.weather.state).toBe('Haze');
    })
});