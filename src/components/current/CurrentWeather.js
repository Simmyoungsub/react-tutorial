import React, { Component } from 'react';
import { Card, CardDeck, ListGroup } from 'react-bootstrap';
import request from '../../data/data';
import { LocationWeatherHelper } from '../../helper/LocationWeatherHelper';

import './CurrentWeather.css';
import moment from 'moment';

class CurrentWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weathers: []
        };
    }

    requestCurrentWeather() {
        return request.getCurrentWeather();
    }

    async componentDidMount() {
        const current = await this.requestCurrentWeather();
        const list = current.map(LocationWeatherHelper.mapLocationWeather);
        const state = {
            weathers: list
        };
        this.setState(state);
    }

    render() {
        return (
            <CardDeck>
                {
                    this.state.weathers.map((w, i) =>
                        <Card key={i}>
                            <Card.Header>
                                <Card.Text style={{textAlign: 'left'}}>
                                    {moment(w.timeslice).format('dddd')} / 오늘
                                </Card.Text>
                            </Card.Header>
                            <Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item className="list_location">{w.location.name}</ListGroup.Item>
                                    <ListGroup.Item className="list_weather_state">{w.weather.state}</ListGroup.Item>
                                    <ListGroup.Item className="list_temp">{w.weather.temp}</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    )
                }
            </CardDeck>
        );
    }
}

export default CurrentWeather;