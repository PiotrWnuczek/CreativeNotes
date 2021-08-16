import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import { update, fetch } from 'logic/actions';

const Wrapper = styled.div`
  text-align: center;
  margin: 2rem;
`;

const Select = styled.select`
  font-size: 1rem;
  color: #555555;
`;

const Button = styled.button`
  font-size: 1rem;
  color: #444444;
  background: #dddddd;
  padding: 0.5rem;
  margin: 0.5rem;
  border: none;
  border-radius: 2rem;
  :hover {
    background: #cccccc;
  }
`;

const Options = ({ update, fetch, param }) => (
  <Wrapper>
    <Formik initialValues={{ param }}
      onSubmit={values => {
        update(values.param);
        fetch();
      }}>
      {({ values, handleChange }) => (
        <Form>
          <Select
            name='country'
            value={values.country}
            onChange={handleChange}
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
          </Select>
          <Button type='submit'>Submit</Button>
        </Form>
      )}
    </Formik>
  </Wrapper>
);

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(fetch()),
  update: (param) => dispatch(update(param)),
});

export default connect(null, mapDispatchToProps)(Options);
