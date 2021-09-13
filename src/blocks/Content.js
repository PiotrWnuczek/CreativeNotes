import React from 'react';
import { connect } from 'react-redux';
import { update } from 'logic/noteActions';
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import Item from 'blocks/Item';

const Content = ({ content, type, id, update }) => (
  <div>
    <Formik
      initialValues={{
        content: '',
        type: 'text',
      }}
      onSubmit={(values, { resetForm }) => {
        update({ content: [...content, values], type }, id);
        resetForm();
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <Form
          onSubmit={handleSubmit}
          autoComplete='off'
        >
          <Form.Group className='mb-3'>
            <Form.Label>Note Content</Form.Label>
            <Form.Control
              type='text'
              name='content'
              placeholder='content'
              as='textarea' rows={2}
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
    <br />
    {Array.isArray(content) && content.map((item, index) =>
      <Item key={index} item={item} />
    )}
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  update: (data, id) => dispatch(update(data, id)),
});

export default connect(null, mapDispatchToProps)
  (Content);
