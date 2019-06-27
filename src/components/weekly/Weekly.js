import React, { Component } from 'react';
import { CardDeck } from 'react-bootstrap';
import Weather from '../weather/Weather';
import axios from 'axios';

class Weekly extends Component {
    constructor(props) {
        super(props);
        this.state = { weathers: ['1', '2', '3'] };
    }

    async componentDidMount() {
        // let { data: weathers } = await axios.get(PhotosEndPoint);
        // this.setState({ photos });
    }

    render() {
        return (
            <CardDeck>
                {this.state.weathers
                    .map((w) => <Weather></Weather>)}
            </CardDeck>
        );
    }
}

export default Weekly;