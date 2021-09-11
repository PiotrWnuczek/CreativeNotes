import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { signup } from 'logic/authActions';
import { Redirect } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';

const Title = styled.h1`
  font-size: 1.5rem;
  text-transform: uppercase;
  margin: 2rem 0;
`;

const Signup = ({ signup, error, auth }) => (auth.uid ?
  <Redirect to='/' /> :
  <Container className='py-4' >
    <Title>Sign Up</Title>
    <Formik
      initialValues={{
        email: '',
        password: '',
        firstname: '',
        lastname: '',
      }}
      onSubmit={(values, { resetForm }) => {
        signup(values);
        resetForm();
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              name='email'
              placeholder='email'
              onChange={handleChange}
              value={values.email}
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              name='password'
              placeholder='password'
              onChange={handleChange}
              value={values.password}
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type='text'
              name='firstname'
              placeholder='firstname'
              onChange={handleChange}
              value={values.firstname}
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type='text'
              name='lastname'
              placeholder='lastname'
              onChange={handleChange}
              value={values.lastname}
            />
          </Form.Group>
          <Button variant='secondary' type='submit'>
            Sign Up
          </Button>
          {error && <p className='text-danger my-2'>{error}</p>}
        </Form>
      )}
    </Formik>
  </Container>
);

const mapStateToProps = (state) => ({
  error: state.auth.error,
  auth: state.firebase.auth,
});

const mapDispatchToProps = (dispatch) => ({
  signup: (user) => dispatch(signup(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)
  (Signup);
