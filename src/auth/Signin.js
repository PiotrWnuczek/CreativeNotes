import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { signin } from 'logic/authActions';
import { Container, Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';

const Title = styled.h1`
  font-size: 1.5rem;
  text-transform: uppercase;
  margin: 2rem 0;
`;

const Signin = ({ signin, error }) => (
  <Container className='py-4'>
    <Title>Sign In</Title>
    <Formik initialValues={{ email: '', password: '' }}
      onSubmit={(values, { resetForm }) => {
        signin(values);
        resetForm();
      }}>
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
          <Button variant='secondary' type='submit'>
            Sign In
          </Button>
          {error && <p className='text-danger my-2'>{error}</p>}
        </Form>
      )}
    </Formik>
  </Container >
);

const mapStateToProps = (state) => ({
  error: state.auth.error,
});

const mapDispatchToProps = (dispatch) => ({
  signin: (creds) => dispatch(signin(creds)),
});

export default connect(mapStateToProps, mapDispatchToProps)
  (Signin);
