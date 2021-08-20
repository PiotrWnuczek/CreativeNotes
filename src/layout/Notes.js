import React from 'react';
import { Row, Col } from 'react-bootstrap';
import List from 'blocks/List';
import Info from 'blocks/Info';

const Start = () => (
  <Row>
    <Col md={7}>
      <List />
    </Col>
    <Col md={5}>
      <Info />
    </Col>
  </Row>
);

export default Start;
