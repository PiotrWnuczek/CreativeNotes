import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Row, Col } from 'react-bootstrap';
import Private from 'blocks/Private';
import Public from 'blocks/Public';

const Panel = ({ notes }) => (
  <Row className='m-0'>
    <Col md={6}>
      <Private notes={notes} />
    </Col>
    <Col md={6}>
      <Public />
    </Col>
  </Row>
);

const mapStateToProps = (state) => ({
  notes: state.firestore.ordered.notes,
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'notes' }]),
)(Panel);
