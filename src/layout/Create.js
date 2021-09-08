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
    <Formik initialValues={{ title: '', content: '', type: 'personal' }}
      onSubmit={(values, { resetForm }) => {
        create(values);
        history.push('/');
        resetForm();
      }}>
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
            <Form.Label>Note Content</Form.Label>
            <Form.Control
              as="textarea" rows={7}
              name='content'
              placeholder='content'
              onChange={handleChange}
              value={values.content}
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Note Type</Form.Label>
            <Form.Check
              type='radio'
              name='type'
              id='personal'
              label='personal'
              value='personal'
              onChange={handleChange}
            />
            <Form.Check
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

export default connect(null, mapDispatchToProps)(Create);
