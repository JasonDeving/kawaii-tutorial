import React from 'react';
import logo from './logo.svg';
import './App.css';
import  { Container, Row, Col } from 'react-bootstrap';
import  { Ghost, Cat, Mug } from 'react-kawaii';

function App() {
  return (
    <Container>
      <Row>
        <Col>
      	<Ghost size={240} mood="ko" color="#E0E4E8" />
      	<Cat size={320} mood="sad" color="#596881" />
      	<Mug size={170} mood="One of" color="#A6E191" />
      	</Col>
      </Row>
    </Container>

  );
}

export default App;
