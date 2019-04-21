import React, { useState } from 'react';
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
  {
    key: 7,
    title: 'Special Title Treatment',
    text: 'With supporting text below as a natural lead-in to additional content.',
    color: "",
  },
  {
    key: 8,
    title: 'Special Title Treatment',
    text: 'With supporting text below as a natural lead-in to additional content.',
    color: "",
  },
  {
    key: 9,
    title: 'Special Title Treatment',
    text: 'With supporting text below as a natural lead-in to additional content.',
    color: "",
  },
];

const TogglerCard = ({ title, text }) => {
  const [color, setColor] = useState('');

  const onStop = (e, card) => {
    if (card.lastX < 0) { // Left Toggle
      setColor('danger');
    } else if (card.lastX > 0) { // Right Toggle
      setColor('success');
    } else {
      setColor('');
    }
  }

  return (
    <Draggable
      axis="x"
      scale={1}
      defaultPosition={{ x: 0, y: 0 }}
      grid={[50, 50]}
      bounds={{ left: -50, right: 50 }}
      onStop={onStop}
    >
      <Card body inverse color={color} style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
      </Card>
    </Draggable>
  );
}

const App = () => (
  <div className="container-fluid">
    {
      cards.map(card => (
        <Row className="m-2" key={card.key}>
          <Col className="col-md-6 offset-md-3">
            <TogglerCard title={card.title} text={card.text} />
          </Col>
        </Row>
      ))
    }
  </div>
);

export default App;
