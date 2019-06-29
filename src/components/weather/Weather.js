import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import './Weather.css';

function Weather(props) {
    console.log(props);
    const style = {
        arrow: {
            transform: `rotate(${props.weather.deg}deg)`,
            width: '70%'
        }
    }
    return (
        <Card>
            <Card.Header>
                <Card.Title>{props.date}</Card.Title>
            </Card.Header>
            <Card.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item>{props.weather.temp}</ListGroup.Item>
                    <ListGroup.Item>{props.weather.humidity}</ListGroup.Item>
                    <ListGroup.Item>{props.weather.wind_speed} / {props.weather.wind_deg}풍</ListGroup.Item>
                    <ListGroup.Item>
                        <Card.Img 
                            src={process.env.PUBLIC_URL + '/icons/arrow.svg'}
                            style={style.arrow}
                            ></Card.Img>
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>
            <Card.Footer>
                <Card.Text>{props.weather.state}</Card.Text>
                <Card.Img src={props.weather.icon}></Card.Img>
            </Card.Footer>
        </Card>
    );
}

export default Weather;