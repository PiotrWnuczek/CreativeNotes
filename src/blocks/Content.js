import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { update } from 'logic/noteActions';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { Droppable, Draggable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";
import { Formik } from 'formik';
import Item from 'blocks/Item';

const Content = ({ content, type, id, update }) => {
  const [data, setData] = useState([...content]);
  useEffect(() => {
    setData([...content]);
  }, [content]);

  const updateItem = (values, idx) => {
    update({
      content: content.map(
        (item, index) => index === idx ? { ...item, ...values } : item
      ), type,
    }, id);
  };

  const deleteItem = (idx) => {
    update({
      content: content.filter(
        (i, index) => index !== idx
      ), type,
    }, id);
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = data;
    const [removed] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, removed);
    setData(items);
    update({ content: items, type }, id);
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
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='droppable'>
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {data.map((item, index) => (
                <Draggable
                  key={item.content}
                  draggableId={item.content}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Item
                        key={index}
                        idx={index}
                        item={item}
                        updateItem={updateItem}
                        deleteItem={deleteItem}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  update: (data, id) => dispatch(update(data, id)),
});

export default connect(null, mapDispatchToProps)
  (Content);
