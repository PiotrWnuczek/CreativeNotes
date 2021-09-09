import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Row, Col } from 'react-bootstrap';
import Personal from 'blocks/Personal';
import Social from 'blocks/Social';

const Panel = ({ personal, social }) => (
  <Row className='m-0'>
    <Col md={6}>
      <Personal personal={personal} />
    </Col>
    <Col md={6}>
      <Social social={social} />
    </Col>
  </Row>
);

const mapStateToProps = (state) => ({
  personal: state.firestore.ordered.personal,
  social: state.firestore.ordered.social,
  auth: state.firebase.auth,
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => [
    {
      collection: 'users', doc: props.auth.uid,
      subcollections: [{ collection: 'notes' }],
      orderBy: ['createdat', 'desc'],
      storeAs: 'personal',
    },
    {
      collection: 'notes',
      orderBy: ['createdat', 'desc'],
      storeAs: 'social',
    },
  ]),
)(Panel);
