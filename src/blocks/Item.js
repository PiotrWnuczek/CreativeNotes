import React, { useState } from 'react';
import { Formik } from 'formik';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { FaRegSquare, FaRegCheckSquare } from 'react-icons/fa';
import { FaAlignJustify, FaPen, FaTrash } from 'react-icons/fa';

const Item = ({ item, idx, updateItem, deleteItem }) => {
  const [edit, setEdit] = useState(false);

  return (
    <div>
      {edit ? <Formik
        initialValues={{
          content: item.content,
        }}
        onSubmit={(values, { resetForm }) => {
          updateItem(values, idx);
          setEdit(false);
          resetForm();
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form
            onSubmit={handleSubmit}
            autoComplete='off'
          >
            <InputGroup className='mb-3'>
              <Form.Control autoFocus
                type='text'
                name='content'
                placeholder='content'
                onChange={handleChange}
                value={values.content}
              />
              <Button variant='outline-secondary' type='submit'>
                Save
              </Button>
            </InputGroup>
          </Form>
        )}
      </Formik> : <h5>
        {item.type === 'text' && <FaAlignJustify />}
        {item.type === 'todo' && <FaRegSquare
          onClick={() => updateItem({ type: 'done' }, idx)}
          className='pointer'
        />}
        {item.type === 'done' && <FaRegCheckSquare
          onClick={() => updateItem({ type: 'todo' }, idx)}
          className='pointer'
        />}
        <span className='mx-2'>
          {item.content}
        </span>
        <FaPen
          onClick={() => setEdit(true)}
          className='pb-1 mx-2 pointer'
        />
        <FaTrash
          onClick={() => deleteItem(idx)}
          className='pb-1 mx-2 pointer'
        />
      </h5>}
    </div>
  )
};

export default Item;
