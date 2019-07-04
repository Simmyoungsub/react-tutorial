import React from 'react';
import { Card, Image, Col, Row } from 'react-bootstrap';
import './Weather.css';

function Weather(props) {
    const style = {
        card: {
            'marginBottom': '5px',
            'marginRight': 0,
            'marginLeft': 0
        },
        row: {
            'marginBottom': 0,
            'alignItems': 'center'
        },
        max: {
            'color': '#f00'
        },
        min: {
            'color': '#00f'
        }
    }
    return (
        <Card style={style.card}>
            <Row style={style.row}>
                <Col md="3">
                    {props.date}
                </Col>
                <Col md="6">
                    <Image src={props.weather.icon}></Image>
                </Col>
                <Col md="3">
                    <strong style={style.max}>{props.weather.temp_max}</strong> / <strong style={style.min}>{props.weather.temp_min}</strong>
                </Col>
            </Row>
        </Card>
    );
}

export default Weather;