import React from 'react';
import moment from 'moment';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { update } from 'logic/noteActions';
import { Container } from 'react-bootstrap';
import Content from 'blocks/Content';

const Details = ({ note, update, ...props }) => {
  const { id } = props.match.params;
  return (
    note ? <Container className='py-4'>
      <h1>{note.title}</h1>
      <h3>{note.description}</h3>
      <h5>
        {note.firstname} {note.lastname} {' | '}
        {moment(note.createdat.toDate()).calendar()}
      </h5>
      <hr />
      <Content
        id={id}
        type={note.type}
        content={note.content}
      />
    </Container> : <p className='text-center'>loading...</p>
  )
};

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
  } else {
    return {
      auth: state.firebase.auth,
      note: social && social[id],
    }
  }
};

const mapDispatchToProps = (dispatch) => ({
  update: (data, id) => dispatch(update(data, id)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
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
