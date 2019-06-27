import React from 'react';
import './App.css';
import { Container, Row } from 'react-bootstrap';
import Weekly from './components/weekly/Weekly';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Weekly></Weekly>
        </Row>
      </Container>
    </div>
  );
}

export default App;
