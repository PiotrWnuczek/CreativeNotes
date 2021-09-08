import React from 'react';
import moment from 'moment';
import { Container } from 'react-bootstrap';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

const Details = ({ note }) => (
  note ? <Container className='py-4'>
    <h1>{note.title}</h1>
    <h3>{note.content}</h3>
    <hr />
    <p>{note.firstname} {note.lastname}</p>
    <p>{moment(note.createdat.toDate()).calendar()}</p>
  </Container> : <p className='text-center'>loading...</p>
);

const mapStateToProps = (state, ownProps) => {
  const type = ownProps.match.params.type;
  const id = ownProps.match.params.id;
  const personal = state.firestore.data.personal;
  const social = state.firestore.data.social;
  if (type === 'personal') {
    return {
      auth: state.firebase.auth,
      note: personal && personal[id],
    }
  } else if (type === 'social') {
    return {
      auth: state.firebase.auth,
      note: social && social[id],
    }
  }
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => [
    {
      collection: 'users', doc: props.auth.uid,
      subcollections: [{ collection: 'notes' }],
      storeAs: 'personal',
    },
    {
      collection: 'notes',
      storeAs: 'social',
    },
  ]),
)(Details);
