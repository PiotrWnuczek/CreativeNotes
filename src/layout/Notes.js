import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Row, Col } from 'react-bootstrap';
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
  notes: state.firestore.ordered.notes,
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'notes' }]),
)(Notes);
