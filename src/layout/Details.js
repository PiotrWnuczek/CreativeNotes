import React from 'react';
import { Container } from 'react-bootstrap';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

const Details = ({ note }) => (
  note ? <Container className='py-4'>
    <h1>{note.title}</h1>
    <h3>{note.content}</h3>
    <hr />
    <p>{note.firstname} {note.lastname} | Date</p>
  </Container> :
    <p className='text-center'>loading...</p>
);

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const notes = state.firestore.data.notes;
  const note = notes && notes[id];
  return { note };
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'notes' }]),
)(Details);
