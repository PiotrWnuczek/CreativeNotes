import React, { useState } from 'react';
import moment from 'moment';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { update, remove } from 'logic/noteActions';
import { FaPen } from 'react-icons/fa';
import { Container, Form } from 'react-bootstrap';
import { InputGroup, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import Content from 'blocks/Content';

const Details = ({ note, update, remove, history, ...props }) => {
  const { id } = props.match.params;
  const [edit, setEdit] = useState(false);

  return (
    note ? <Container className='py-4'>
      {edit === 'title' ? <Formik
        initialValues={{
          title: note.title,
        }}
        onSubmit={(values, { resetForm }) => {
          update({ ...values, type: note.type }, id);
          setEdit(false);
          resetForm();
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form
            onSubmit={handleSubmit}
            autoComplete='off'
          >
            <InputGroup className='mb-3'>
              <Form.Control autoFocus
                type='text'
                name='title'
                placeholder='title'
                onChange={handleChange}
                value={values.title}
              />
              <Button variant='outline-secondary' type='submit'>
                Save
              </Button>
            </InputGroup>
          </Form>
        )}
      </Formik> : <h1>
        {note.title}
        <FaPen
          onClick={() => setEdit('title')}
          className='pb-2 mx-2 pointer'
        />
      </h1>}
      {edit === 'description' ? <Formik
        initialValues={{
          description: note.description,
        }}
        onSubmit={(values, { resetForm }) => {
          update({ ...values, type: note.type }, id);
          setEdit(false);
          resetForm();
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form
            onSubmit={handleSubmit}
            autoComplete='off'
          >
            <InputGroup className='mb-3'>
              <Form.Control autoFocus
                type='text'
                name='description'
                placeholder='description'
                onChange={handleChange}
                value={values.description}
              />
              <Button variant='outline-secondary' type='submit'>
                Save
              </Button>
            </InputGroup>
          </Form>
        )}
      </Formik> : <h3>
        {note.description}
        <FaPen
          onClick={() => setEdit('description')}
          className='pb-2 mx-2 pointer'
        />
      </h3>}
      <h5>
        {note.firstname} {note.lastname}
        {' | '}
        {moment(note.createdat.toDate()).calendar()}
      </h5>
      <hr />
      <Content
        id={id}
        type={note.type}
        content={note.content}
      />
      <div className='my-3'>
        <Button
          variant='secondary'
          onClick={() => history.push('/')}
        >
          Close
        </Button> {' '}
        <Button
          variant='secondary'
          onClick={() => {
            remove({ type: note.type }, id);
            history.push('/');
          }}
        >
          Delete
        </Button>
      </div>
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
  remove: (data, id) => dispatch(remove(data, id)),
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
