import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import Item from 'blocks/Item';

const Content = ({ content, setContent }) => (
  <div>
    <Formik initialValues={{
      content: '',
      type: 'text',
    }}
      onSubmit={(values, { resetForm }) => {
        setContent([...content, { ...values }]);
        resetForm();
      }}>
      {({ values, handleChange, handleSubmit }) => (
        <div>
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
          <Button
            variant='secondary'
            onClick={handleSubmit}
          >
            Add
          </Button>
        </div>
      )}
    </Formik>
    {content.length !== 0 && <br />}
    {content && content.map(item =>
      <Item key={item.content} item={item} />
    )}
  </div>
);

export default Content;
