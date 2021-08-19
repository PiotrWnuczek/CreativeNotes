import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const List = () => (
  <Row className='m-3' xs={1} md={2}>
    <Col className='p-3'><Card>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      </Card.Body>
    </Card></Col>
    <Col className='p-3'><Card>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      </Card.Body>
    </Card></Col>
  </Row>
);

export default List;
