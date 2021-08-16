import React from 'react';
import styled from 'styled-components';
import { FaReact } from 'react-icons/fa';
import Header from 'components/Header';
import Form from 'components/Form';

const Wrapper = styled.h1`
  text-align: center;
  margin: auto;
`;

const Icon = styled(FaReact)`
  font-size: 5rem;
  font-weight: 900;
`;

const Start = () => (
  <Wrapper>
    <Header title='StartApp' text='created by Piotr Wnuczek' />
    <Icon />
    <Form />
  </Wrapper>
);

export default Start;
