import {LocationWeatherHelper} from './LocationWeatherHelper';
import request from '../data/data';

describe('LocationWeatherHelper', () => {
    test('mapLocationWeather', async () => {
        const data = await request.getCurrentWeather();
        const result = LocationWeatherHelper.mapLocationWeather(data[0]);
        expect(result.weather.state).toBe('Haze');
    })
});