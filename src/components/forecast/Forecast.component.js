import React, { Component } from 'react';
import { CardDeck, Container } from 'react-bootstrap';
import request from '../../data/data';
import { ForecastHelper } from '../../helper/ForecastHelper';
import Weather from '../weather/Weather';

class ForecastComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { weathers: [] };
    }

    getForcast() {
        return request.getForcast();
    }

    async componentDidMount() {
        const forecast = await this.getForcast();
        const list = forecast.map(ForecastHelper.mapWeather);
        const state = {
            weathers: list
        };
        this.setState(state);
    }

    render() {
        return (
            <CardDeck>
                <Container>
                    {this.state.weathers
                            .map((w, i) => <Weather date={w.date} weather={w.weather} key={i}></Weather>)}
                </Container>
            </CardDeck>
        );
    }
}

export default ForecastComponent;