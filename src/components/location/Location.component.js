import React, { Component } from 'react';
import { Card, CardDeck } from 'react-bootstrap';

class LocationComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <Card.Header>
                    <Card.Text>지역</Card.Text>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        서울
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default LocationComponent;