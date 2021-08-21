import React from 'react';
import { Card } from 'react-bootstrap';

const Item = ({ note }) => (
  <Card className='m-4'>
    <Card.Body>
      <Card.Title>{note.title}</Card.Title>
      <Card.Text>{note.content}</Card.Text>
    </Card.Body>
  </Card>
);

export default Item;
