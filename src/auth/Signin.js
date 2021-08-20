import React from 'react';
import styled from 'styled-components';
import { Container, Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';

const Title = styled.h1`
  font-size: 1.5rem;
  text-transform: uppercase;
  margin: 2rem 0;
`;

const Signin = () => (
  <Container className='py-4'>
    <Title>Sign In</Title>
    <Formik initialValues={{ email: '', password: '' }}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
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
        </Form>
      )}
    </Formik>
  </Container >
);

export default Signin;
