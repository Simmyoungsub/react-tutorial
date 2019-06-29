import { Weather } from "./Weather";

describe('Weather Model', () => {
    let model;

    beforeEach(() => {
        const d = {
            "weather": [
                {
                    "id": 721,
                    "main": "Haze",
                    "description": "haze",
                    "icon": "50n"
                }
            ],
            "main": {
                "temp": 297.15,
                "pressure": 997,
                "humidity": 83,
                "temp_min": 296.15,
                "temp_max": 299.15
            },
            "wind": {
                "speed": 1.5,
                "deg": 10
            },
            "clouds": {
                "all": 1
            }
        };

        const p = {
            state: d.weather[0].main,
            temp: d.main.temp,
            pressure: d.main.pressure,
            humidity: d.main.humidity,
            wind_speed: d.wind.speed,
            wind_deg: d.wind.deg,
            cloud: d.clouds.all
        };
        model = new Weather(p);
    });

    test('constructor_mekeInstnace_Defiend', () => {
        expect(model).toBeDefined();
    });

    test('celsius_getcelsius_is24', () => {
        expect(model.celsius(297.15)).toBe(24);
    });

    test('wind_deg_10To북동', () => {
        expect(model.wind_deg).toBe('북동');
    });
});