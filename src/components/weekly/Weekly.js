import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import request from '../../data/data';
import { LocationWeatherHelper } from '../../helper/LocationWeatherHelper';
import ForecastComponent from '../forecast/Forecast.component';
import LocationComponent from '../location/Location.component';
import CurrentWeather from '../current/CurrentWeather';

import './Weekly.css';

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
                <Row className="row">
                    <Col md={12}>
                        <CurrentWeather></CurrentWeather>
                    </Col>
                </Row>
                <Row className="row">
                    <Col md={12}>
                        <ForecastComponent></ForecastComponent>
                    </Col>
                </Row>
            </Container>
            
        );
    }
}

export default Weekly;