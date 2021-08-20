import React from 'react';
import { Card } from 'react-bootstrap';

const Item = () => (
  <Card className='m-4'>
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
);

export default Item;
