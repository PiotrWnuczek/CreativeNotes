import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import List from 'blocks/List';
import Info from 'blocks/Info';

const Notes = ({ notes }) => (
  <Row className='m-0'>
    <Col md={7}>
      <List notes={notes} />
    </Col>
    <Col md={5}>
      <Info />
    </Col>
  </Row>
);

const mapStateToProps = (state) => ({
  notes: state.note.notes,
});

export default connect(mapStateToProps)(Notes);
