import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { create } from 'logic/noteActions';
import { Container, Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';

const Title = styled.h1`
  font-size: 1.5rem;
  text-transform: uppercase;
  margin: 2rem 0;
`;

const Create = ({ create, history }) => (
  <Container className='py-4'>
    <Title>Create new note</Title>
    <Formik
      initialValues={{
        title: '',
        description: '',
        type: 'personal',
      }}
      onSubmit={(values, { resetForm }) => {
        create(values);
        resetForm();
        history.push('/');
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3'>
            <Form.Label>Note Title</Form.Label>
            <Form.Control
              type='text'
              name='title'
              placeholder='title'
              onChange={handleChange}
              value={values.title}
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Note Description</Form.Label>
            <Form.Control
              as='textarea'
              rows={7}
              type='text'
              name='description'
              placeholder='description'
              onChange={handleChange}
              value={values.description}
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Check inline
              type='radio'
              name='type'
              id='personal'
              label='personal'
              value='personal'
              onChange={handleChange}
            />
            <Form.Check inline
              type='radio'
              name='type'
              id='social'
              label='social'
              value='social'
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant='secondary' type='submit'>
            Create
          </Button>
        </Form>
      )}
    </Formik>
  </Container >
);

const mapDispatchToProps = (dispatch) => ({
  create: (data) => dispatch(create(data)),
});

export default connect(null, mapDispatchToProps)
  (Create);
