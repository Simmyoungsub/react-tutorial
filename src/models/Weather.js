export class Weather {
    constructor(param) {
        this._temp = param.temp;
        this._temp_max = param.temp_max;
        this._temp_min = param.temp_min;
        this._pressure = param.pressure;
        this._humidity = param.humidity;
        this._wind_speed = param.wind_speed;
        this._wind_deg = param.wind_deg;
        this._cloud = param.cloud;
        this._state = param.state;
    }

    celsius(value) {
        return Number((Number(value) + Weather.KELVIN).toFixed(2));
    }

    get temp() {
        return `${this.celsius(this._temp)} °C`;
    }

    get temp_max() {
        return `${this.celsius(this._temp_max)} °C`;
    }

    get temp_min() {
        return `${this.celsius(this._temp_min)} °C`;
    }

    get humidity() {
        return `${this._humidity} %`;
    }

    get wind_speed() {
        return `${this._wind_speed} ms`;
    }

    get state() {
        return this._state;
    }

    get icon() {
        const prefix = process.env.PUBLIC_URL;
        const path = [prefix];
        
        switch (this.state) {
            case Weather.SUNNY:
                path.push('icons/sun.svg');
                break;
            case Weather.CLOUD:
                path.push('icons/cloud.svg');
                break;
            case Weather.Clear:
                path.push('icons/sun.svg');
                break;
            case Weather.HAZE:
                path.push('icons/haze.svg');
                break;
            case Weather.RAIN:
                path.push('icons/rain.svg');
                break;
            case Weather.SNOW:
                path.push('icons/snow.svg');
                break;
            default:
                throw new Error('invalid state');
        }

        return path.join('/');
    }

    get deg() {
        return this._wind_deg;
    }

    get wind_deg() {
        const deg = this._wind_deg;

        if (deg === Weather.NORTH) {
            return '북';
        }

        if (deg === Weather.EAST) {
            return '동';
        }

        if (deg === Weather.SOUTH) {
            return '남';
        }

        if (deg === Weather.WEST) {
            return '서';
        }

        if (deg < Weather.EAST) {
            return '북동';
        }

        if (deg > Weather.EAST && deg < Weather.SOUTH) {
            return '남동';
        }

        if (deg > Weather.SOUTH && deg < Weather.WEST) {
            return '남서';
        }

        if (deg > Weather.WEST) {
            return '북서';
        }

        throw new Error('invalid deg');
    }
}

Weather.KELVIN = -273.15;
Weather.EAST = 90;
Weather.SOUTH = 180;
Weather.WEST = 270;
Weather.NORTH = 0;

Weather.SUNNY = 'Sunny';
Weather.Clear = 'Clear';
Weather.CLOUD = 'Clouds';
Weather.HAZE = 'Haze';
Weather.RAIN = 'Rain';
Weather.SNOW = 'Snow';