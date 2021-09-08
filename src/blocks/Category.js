import React from 'react';
import { Card, Accordion } from 'react-bootstrap';
import Note from 'blocks/Note';

const Category = ({ category }) => (
  <Card className='m-4'>
    <Accordion.Toggle as={Card.Body} eventKey={category.id}>
      Example Category
    </Accordion.Toggle>
    <Accordion.Collapse eventKey={category.id}>
      <Card.Body>
        <Note note={{ title: 'Example Note' }} />
        <Note note={{ title: 'Example Note' }} />
      </Card.Body>
    </Accordion.Collapse>
  </Card>
);

export default Category;
