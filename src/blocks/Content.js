import React from 'react';
import { connect } from 'react-redux';
import { update } from 'logic/noteActions';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import Item from 'blocks/Item';

const Content = ({ content, type, id, update }) => {
  const updateItem = (values, idx) => {
    update({
      content: [...content.map(
        (item, index) => index === idx ? { ...item, ...values } : item
      )], type,
    }, id);
  };

  const deleteItem = (idx) => {
    update({
      content: [...content.filter(
        (i, index) => index !== idx
      )], type,
    }, id);
  };

  return (
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
            <InputGroup>
              <Form.Control
                type='text'
                name='content'
                placeholder='content'
                as='textarea' rows={2}
                onChange={handleChange}
                value={values.content}
              />
              <Button
                onClick={() => values.type = 'text'}
                variant='outline-secondary'
                type='submit'>
                Add Text
              </Button>
              <Button
                onClick={() => values.type = 'todo'}
                variant='outline-secondary'
                type='submit'
              >
                Add Todo
              </Button>
            </InputGroup>
          </Form>
        )}
      </Formik>
      <br />
      {Array.isArray(content) && content.map((item, index) =>
        <Item
          key={index}
          idx={index}
          item={item}
          updateItem={updateItem}
          deleteItem={deleteItem}
        />
      )}
    </div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  update: (data, id) => dispatch(update(data, id)),
});

export default connect(null, mapDispatchToProps)
  (Content);
