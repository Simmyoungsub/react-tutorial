export class Location {
    constructor(param) {
        this._id = param.id;
        this._name = param.name;
        this._country = param.country;
        this._lon = param.lon;
        this._lat = param.lat;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get country() {
        return this._country;
    }
}