import React from 'react';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import Draggable from 'react-draggable';

const cards = [
  {
    key: 1,
    title: 'Special Title Treatment',
    text: 'With supporting text below as a natural lead-in to additional content.',
    color: "",
  },
  {
    key: 2,
    title: 'Special Title Treatment',
    text: 'With supporting text below as a natural lead-in to additional content.',
    color: "",
  },
  {
    key: 3,
    title: 'Special Title Treatment',
    text: 'With supporting text below as a natural lead-in to additional content.',
    color: "",
  },
  {
    key: 4,
    title: 'Special Title Treatment',
    text: 'With supporting text below as a natural lead-in to additional content.',
    color: "",
  },
  {
    key: 5,
    title: 'Special Title Treatment',
    text: 'With supporting text below as a natural lead-in to additional content.',
    color: "",
  },
  {
    key: 6,
    title: 'Special Title Treatment',
    text: 'With supporting text below as a natural lead-in to additional content.',
    color: "",
  },
];

const App = () => (
  <div className="container-fluid">
    {
      cards.map(card => (
        <Row className="m-2" key={card.key}>
          <Col className="col-md-6 offset-md-3">
            <Draggable
              axis="x"
              grid={[50, 50]}
              bounds={{ left: -50, right: 50 }}
            >
              <Card body inverse color={card.color} style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardTitle>{card.title}</CardTitle>
                <CardText>{card.text}</CardText>
              </Card>
            </Draggable>
          </Col>
        </Row>
      ))
    }
  </div>
);

export default App;
