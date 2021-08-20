import React from 'react';
import { Formik } from 'formik';
import { Container, Form, Button } from 'react-bootstrap';

const Signup = () => (
  <Container className='py-4'>
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
              name='email'
              type='email'
              placeholder='email'
              onChange={handleChange}
              value={values.email}
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              name='password'
              type='password'
              placeholder='password'
              onChange={handleChange}
              value={values.password}
            />
          </Form.Group>
          <Button variant='secondary' type='submit'>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  </Container >
);

export default Signup;
