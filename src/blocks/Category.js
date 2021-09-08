import React from 'react';
import { Card, Accordion } from 'react-bootstrap';
import Element from 'blocks/Element';

const Category = ({ category }) => (
  <Card className='m-4'>
    <Accordion.Toggle as={Card.Body} eventKey={category.id}>
      Example Category
    </Accordion.Toggle>
    <Accordion.Collapse eventKey={category.id}>
      <Card.Body>
        <Element note={{ title: 'Example Note' }} />
        <Element note={{ title: 'Example Note' }} />
      </Card.Body>
    </Accordion.Collapse>
  </Card>
);

export default Category;
