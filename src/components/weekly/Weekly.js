import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import request from '../../data/data';
import { LocationWeatherHelper } from '../../helper/LocationWeatherHelper';
import ForecastComponent from '../forecast/Forecast.component';
import LocationComponent from '../location/Location.component';

class Weekly extends Component {
    constructor(props) {
        super(props);
        this.state = { weathers: [] };
    }

    requestData() {
        return request.getCurrentWeather();
    }

    async componentDidMount() {
        const weathers = (await this.requestData()).map(LocationWeatherHelper.mapLocationWeather);
        const state = {
            weathers: weathers
        };
        this.setState(state);
    }

    render() {
        return (
            <Container>
                <LocationComponent></LocationComponent>
                <ForecastComponent></ForecastComponent>
            </Container>
        );
    }
}

export default Weekly;