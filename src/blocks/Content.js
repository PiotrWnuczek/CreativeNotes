import React from 'react';
import { connect } from 'react-redux';
import { update } from 'logic/noteActions';
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import Item from 'blocks/Item';

const Content = ({ content, update }) => (
  <div>
    <Formik
      initialValues={{
        content: '',
        type: 'text',
      }}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm();
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3'>
            <Form.Label>Note Content</Form.Label>
            <Form.Control
              as='textarea'
              type='text'
              name='content'
              placeholder='content'
              onChange={handleChange}
              value={values.content}
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Check inline
              type='radio'
              name='type'
              id='text'
              label='text'
              value='text'
              onChange={handleChange}
            />
            <Form.Check inline
              type='radio'
              name='type'
              id='task'
              label='task'
              value='task'
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant='secondary' type='submit'>
            Add
          </Button>
        </Form>
      )}
    </Formik>
    {content && <p>{content}</p>}
    {Array.isArray(content) && content.map((item, index) =>
      <Item key={index} item={item} />
    )}
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  update: (data) => dispatch(update(data)),
});

export default connect(null, mapDispatchToProps)
  (Content);
