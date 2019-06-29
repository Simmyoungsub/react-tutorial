export class LocationWeather {
    constructor(param) {
        this._timeslice = param.dt;
        this._location = param.location;
        this._weather = param.weather;
    }

    get timeslice() {
        return this._timeslice;
    }

    // get name() {
    //     return this._location.name;
    // }

    get location() {
        return this._location;
    }

    get weather() {
        return this._weather;
    }
}